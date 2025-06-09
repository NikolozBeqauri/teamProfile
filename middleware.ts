import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';
import createMiddleware from 'next-intl/middleware';

export default function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const pathnameSegments = url.pathname.split('/');
  const firstSegment = pathnameSegments[1];

  const localeCookie = req.cookies.get('NEXT_LOCALE')?.value;

  if (routing.locales.includes(firstSegment as typeof routing.locales[number])) {
    if (firstSegment !== localeCookie) {
      const res = createMiddleware(routing)(req);
      res.cookies.set('NEXT_LOCALE', firstSegment, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365 
      });
      return res;
    }

    return createMiddleware(routing)(req);
  }

  const newLocale = localeCookie || 'ka';
  url.pathname = `/${newLocale}${url.pathname}`;

  const res = NextResponse.redirect(url);
  res.cookies.set('NEXT_LOCALE', newLocale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365 
  });

  return res;
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
