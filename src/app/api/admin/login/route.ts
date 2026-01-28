import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { SignJWT } from 'jose';
import db, { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

const JWT_SECRET = process.env.ACTIVATION_SECRET || 'fallback-secret-for-development';
const secret = new TextEncoder().encode(JWT_SECRET);

export async function POST(req: NextRequest) {
    try {
        const { username, password } = await req.json();

        console.log('Login attempt for:', username);

        // 1. Find admin
        const rows: any = await query('SELECT * FROM admins WHERE username = ?', [username]);
        const admin = rows[0];

        if (!admin) {
            console.log('Login failed: User not found');
            return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
        }

        console.log('User found. Verifying password...');
        // 2. Verify password
        const isValid = await bcrypt.compare(password, admin.password);
        console.log('Password valid?', isValid);

        if (isValid) {
            console.log('Login successful for:', username);
        } else {
            console.log('Login failed: Password mismatch for:', username);
            return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
        }

        // 3. Create session token (JWT) via jose
        const token = await new SignJWT({ id: admin.id, username: admin.username, role: 'ADMIN' })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('24h')
            .sign(secret);

        const response = NextResponse.json({ success: true, message: 'Login successful' });
        response.cookies.set('admin_session', token, {
            httpOnly: true,
            secure: true, // Always true for HTTPS on Hostinger
            sameSite: 'lax',
            maxAge: 60 * 60 * 24, // 24 hours
            path: '/',
        });

        return response;

    } catch (error: any) {
        console.error('Login Error Detailed:', error);
        return NextResponse.json({
            success: false,
            message: 'Internal server error',
            error: error.message
        }, { status: 500 });
    }
}
