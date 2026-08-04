import Link from 'next/link';
import { isValidLocale } from '../../lib/locales';
import { getDictionary } from '../../lib/content';

export default function NotFound({ params }) {
  const locale = params && isValidLocale(params.locale) ? params.locale : 'en';
  const nf = getDictionary(locale).notFound;

  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden border-b border-hairline/70">
      <div className="relative mx-auto w-full max-w-content px-5 py-28 md:px-10 lg:px-16">
        <p className="kicker mb-8">{nf.code}</p>
        <h1 className="mb-8 max-w-[16ch] text-display font-bold text-ink">{nf.heading}</h1>
        <p className="mb-12 max-w-[52ch] text-[1.08rem] leading-[1.75] text-ink/70">{nf.body}</p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3 text-[0.95rem] font-medium text-paper transition-opacity hover:opacity-90"
          >
            {nf.primary}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center rounded-full border border-hairline px-7 py-3 text-[0.95rem] font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            {nf.secondary}
          </Link>
        </div>
      </div>
    </section>
  );
}