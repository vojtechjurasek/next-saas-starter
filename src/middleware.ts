import { type NextRequest, NextResponse } from 'next/server'

import { serverMiddleware } from '@/paraglide/runtime'

export function middleware(request: NextRequest) {
  return serverMiddleware(request, ({ request, locale }) => {
    request.headers.set('x-paraglide-locale', locale)
    return NextResponse.rewrite(request.url, request)
  })
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
