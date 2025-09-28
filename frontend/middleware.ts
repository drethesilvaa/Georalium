import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  const url = new URL(request.url);

  if (url.pathname === '/') {
    url.pathname = '/en';
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ['/((?!_next).*)'], 
};
