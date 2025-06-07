import { NextRequest, NextResponse, type MiddlewareConfig } from 'next/server';

const publicRoutes = [
    { path: '/login', whenAuthenticated: 'redirect' },
] as const;

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/login'

export function middleware(request: NextRequest) {

    const pathname = request.nextUrl.pathname;
    const publicRoute = publicRoutes.find((route) => route.path === pathname);
    const authToken = request.cookies.get('tropa-digital-token');

    if (!authToken && publicRoute) {
        return NextResponse.next()
    }

    if (!authToken && !publicRoute) {
        const redirectUrl = request.nextUrl.clone();

        redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;

        return NextResponse.redirect(redirectUrl)
    }

    if (authToken && publicRoute && publicRoute.whenAuthenticated === 'redirect') {

        const redirectUrl = request.nextUrl.clone();

        redirectUrl.pathname = '/login';

        return NextResponse.redirect(redirectUrl)
    }

    if (authToken && !publicRoute) {
        return NextResponse.next()
    }

    return NextResponse.next()
}

export const config: MiddlewareConfig = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}