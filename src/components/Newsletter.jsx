'use client';

/**
 * Newsletter — email signup form, wired to /api/subscribe.
 * Real submit (no fake success). Provider behind the API route is
 * chosen by env; if none is set, the API returns 501 and we surface it.
 */

import { useState } from 'react';
import Reveal from './Reveal';
import { trackNewsletter } from '../lib/track';

const COPY = {
  en: {
    kicker: 'NEWSLETTER',
    heading: 'Stay updated',
    body: 'Get the latest on automation, AI, and system design. No spam, unsubscribe anytime.',
    placeholder: 'your@email.com',
    button: 'Subscribe',
    loading: 'Subscribing…',
    empty: 'Enter your email address.',
    network: 'Network error. Please try again.',
  },
  ru: {
    kicker: 'РАССЫЛКА',
    heading: 'Будьте в курсе',
    body: 'Последнее по автоматизации, ИИ и проектированию систем. Без спама — отписка в любой момент.',
    placeholder: 'ваш@email.com',
    button: 'Подписаться',
    loading: 'Подписка…',
    empty: 'Введите адрес почты.',
    network: 'Ошибка сети. Попробуйте ещё раз.',
  },
  kz: {
    kicker: 'ЖАРНАМА',
    heading: 'Хабардар болыңыз',
    body: 'Автоматтандыру, AI және жүйе дизайны туралы соңғы жаңалық. Спам жоқ — кез келген уақытта бас тартуға болады.',
    placeholder: 'your@email.com',
    button: 'Жазылу',
    loading: 'Жазылуда…',
    empty: 'Email мекенжайын енгізіңіз.',
    network: 'Желі қатесі. Қайта көріңіз.',
  },
};

export default function Newsletter({ locale = 'en' }) {
  const c = COPY[locale] || COPY.en;
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) {
      setStatus('error');
      setMessage(c.empty);
      return;
    }

    setStatus('loading');
    setMessage('');
    trackNewsletter('submit');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        setStatus('error');
        setMessage(data?.message || c.network);
        trackNewsletter('error');
        return;
      }
      setStatus('success');
      setMessage(data?.message || 'Subscribed!');
      setEmail('');
      trackNewsletter('success', email);
    } catch {
      setStatus('error');
      setMessage(c.network);
      trackNewsletter('error');
    }
  }

  return (
    <section className="border-t border-hairline/70 py-16 md:py-20" aria-labelledby="newsletter-heading">
      <div className="mx-auto max-w-content px-5 md:px-10 lg:px-16">
        <Reveal variant="fade" className="max-w-[600px]">
          <p className="kicker mb-6">{c.kicker}</p>
          <h2 id="newsletter-heading" className="mb-4 text-subhead font-bold text-ink">{c.heading}</h2>
          <p className="mb-8 text-[0.95rem] leading-relaxed text-ink-muted">{c.body}</p>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={c.placeholder}
                aria-invalid={status === 'error'}
                className="w-full rounded-full border border-hairline bg-card px-5 py-3 font-mono text-[0.8125rem] text-ink placeholder:text-ink-faint transition-all duration-500 focus:border-signal focus:outline-none focus:ring-2 focus:ring-signal/20"
                disabled={status === 'loading'}
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="rounded-full bg-signal px-6 py-3 font-sans text-[0.8125rem] font-semibold text-card transition-all duration-500 hover:bg-signal-deep disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? c.loading : c.button}
            </button>
          </form>

          {message && (
            <p role={status === 'error' ? 'alert' : 'status'} className={`mt-4 text-[0.875rem] ${status === 'success' ? 'text-signal' : 'text-manual'}`}>
              {message}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
