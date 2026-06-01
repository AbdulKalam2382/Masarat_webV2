import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const SUPPORTED_LOCALES = ['en', 'ar'];
const DEFAULT_LOCALE = 'en';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Match optional locale prefix + /services + optional sub-path
  // Handles: /services, /en/services, /ar/services, /en/services/foo, etc.
  const match = pathname.match(
    /^(?:\/(en|ar))?(\/services)(\/.*)?$/
  );

  if (match) {
    const locale = match[1] ?? DEFAULT_LOCALE;
    const trailingPath = match[3] ?? '';
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}/solutions${trailingPath}`;
    return NextResponse.redirect(url, { status: 301 });
  }

  return intlMiddleware(request);
}

export const config = {
  // Match all paths except static files, API routes, and Next.js internals
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
