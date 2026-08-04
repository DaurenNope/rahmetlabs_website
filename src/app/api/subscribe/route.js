/**
 * POST /api/subscribe — newsletter signup.
 * Provider-agnostic, selected by env:
 *   BUTTONDOWN_API_KEY                      -> Buttondown
 *   MAILCHIMP_API_KEY + _SERVER_PREFIX + _LIST_ID -> Mailchimp (double opt-in)
 *   CONVERTKIT_API_KEY + CONVERTKIT_FORM_ID -> Kit / ConvertKit
 * With no provider configured it returns a clean 501 so the form never fakes success.
 */
export const runtime = 'nodejs';

const json = (ok, message, status = 200) =>
  new Response(JSON.stringify({ ok, message }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export async function POST(req) {
  let email;
  try {
    ({ email } = await req.json());
  } catch {
    return json(false, 'Invalid request.', 400);
  }

  email = String(email || '').trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(false, 'Please enter a valid email address.', 422);
  }

  // 1) Buttondown
  const bd = process.env.BUTTONDOWN_API_KEY;
  if (bd) {
    const r = await fetch('https://buttondown.email/api/v1/subscribers', {
      method: 'POST',
      headers: { Authorization: `Token ${bd}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email_address: email, type: 'regular' }),
    });
    if (!r.ok) {
      const j = await r.json().catch(() => ({}));
      return json(false, j?.detail || 'Subscription failed. Please try again.', 502);
    }
    return json(true, 'Almost there — check your inbox to confirm.');
  }

  // 2) Mailchimp (double opt-in: status "pending")
  const mcKey = process.env.MAILCHIMP_API_KEY;
  const mcServer = process.env.MAILCHIMP_SERVER_PREFIX;
  const mcList = process.env.MAILCHIMP_LIST_ID;
  if (mcKey && mcServer && mcList) {
    const r = await fetch(`https://${mcServer}.api.mailchimp.com/3.0/lists/${mcList}/members`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`rahmet:${mcKey}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email_address: email, status: 'pending' }),
    });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) {
      if (r.status === 400 && /already a list member/i.test(j?.title || '')) {
        return json(false, 'You are already subscribed.', 409);
      }
      return json(false, j?.detail || 'Subscription failed. Please try again.', 502);
    }
    return json(true, 'Almost there — check your inbox to confirm.');
  }

  // 3) Kit / ConvertKit
  const ck = process.env.CONVERTKIT_API_KEY;
  const ckForm = process.env.CONVERTKIT_FORM_ID;
  if (ck && ckForm) {
    const r = await fetch(`https://api.convertkit.com/v3/forms/${ckForm}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ api_key: ck, email }),
    });
    if (!r.ok) return json(false, 'Subscription failed. Please try again.', 502);
    return json(true, 'Subscribed!');
  }

  return json(false, 'Newsletter is not configured yet.', 501);
}
