import { NextResponse } from 'next/server';
import { locales, defaultLocale } from './lib/locales';

function detectLocale(request) {
  const header = request.headers.get('accept-language') || '';
  const preferred = header
    .split(',')
    .map((part) => part.trim().split(';')[0].toLowerCase());

  for (const lang of preferred) {
    if (lang.startsWith('kk') || lang.startsWith('kz')) return 'kz';
    if (lang.startsWith('ru')) return 'ru';
    if (lang.startsWith('en')) return 'en';
  }
  return defaultLocale;
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) return NextResponse.next();

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url, 307);
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon.svg|og-image.png|robots.txt|sitemap.xml).*)',
  ],
};
