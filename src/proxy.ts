import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.ACTIVATION_SECRET || 'fallback-secret-for-development';
const secret = new TextEncoder().encode(JWT_SECRET);

export async function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Protect all /admin routes except the login page and login API
    if (pathname.startsWith('/admin') && pathname !== '/admin') {
        const token = req.cookies.get('admin_session')?.value;
        console.log(`[Middleware] Checking access for: ${pathname}`);
        console.log(`[Middleware] Token present? ${!!token}`);

        if (!token) {
            console.log('[Middleware] No token found. Redirecting.');
            return NextResponse.redirect(new URL('/admin', req.url));
        }

        try {
            const { payload } = await jwtVerify(token, secret);
            console.log(`[Middleware] Token verified via jose for user: ${payload.username}`);

            if (payload.role !== 'ADMIN') {
                console.log('[Middleware] Insufficient role.');
                return NextResponse.redirect(new URL('/admin', req.url));
            }
        } catch (error) {
            console.log('[Middleware] Token verification failed:', error);
            return NextResponse.redirect(new URL('/admin', req.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};
