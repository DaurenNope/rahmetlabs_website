import Link from 'next/link';
import StatusDot from './StatusDot';

export default function Footer({ locale, footer, nav }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline bg-void">
      <div className="mx-auto max-w-content px-6 py-12 lg:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-3">
            <div className="flex items-center gap-2">
              <StatusDot />
              <span className="text-sm font-semibold tracking-wide text-ink">{nav.wordmark}</span>
            </div>
            <p className="text-sm text-ink-muted">{footer.tagline}</p>
            <p className="font-data text-xs text-ink-faint">{footer.locationNote}</p>
          </div>

          <div className="space-y-3">
            <span className="label text-ink-faint">{footer.quickLinksLabel}</span>
            <ul className="space-y-2">
              {nav.functions.map((fn) => (
                <li key={fn.href}>
                  <Link href={`/${locale}${fn.href}`} className="font-data text-sm text-ink-muted transition-colors hover:text-amber">
                    {fn.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-hairline pt-6 font-data text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <span>
            {footer.copyrightPrefix} {year} {footer.copyrightSuffix}
          </span>
        </div>
      </div>
    </footer>
  );
}
