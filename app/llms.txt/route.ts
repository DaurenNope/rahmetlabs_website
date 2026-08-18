import { getDictionary } from '@/lib/content';

export const dynamic = 'force-static';

/* Machine-readable company facts for AI citation engines.
   Every statement maps to the public deck: no invented claims. */
export function GET() {
  const t = getDictionary('en');
  const f = t.facts;

  const body = `# Rahmet Labs

> ${t.footer.tagline}

## Facts
- ${f.whatWeDo}
- ${f.whoFor}
- ${f.basedIn}
- Working languages: English, Russian, Kazakh (calls, documentation, shipped interfaces).
- First call to running system: 4-12 weeks, staged.
- Clients own repositories, infrastructure, and documentation from day one.

## Services
${t.whatWeBuild.categories.map((c) => `- ${c.problemTag}: ${c.solution}`).join('\n')}

## Ready-made products (fixed prices)
${t.productsPage.products.map((p) => `- ${p.name}: ${p.price}${p.monthly ? ` + ${p.monthly}${t.productsPage.monthlyLabel}` : ''}. ${p.promise}`).join('\n')}
- ${t.productsPage.monthlyNote}

## Live work
${t.work.positions
  .filter((p) => p.links?.length)
  .flatMap((p) => p.links!.map((l) => `- ${p.title}: ${l.url}`))
  .join('\n')}

## Contact
${t.contact.channels.map((ch) => `- ${ch.label}: ${ch.href}`).join('\n')}

## Site
- Home: https://rahmetlabs.com/en (also /ru, /kz)
- Products: https://rahmetlabs.com/en/products
- Services: https://rahmetlabs.com/en/services
- Portfolio: https://rahmetlabs.com/en/portfolio
- About: https://rahmetlabs.com/en/about
- Contact: https://rahmetlabs.com/en/contact
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
