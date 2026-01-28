import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db, { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

const JWT_SECRET = process.env.ACTIVATION_SECRET || 'fallback-secret-for-development';

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

        // 3. Create session token (JWT)
        const token = jwt.sign(
            { id: admin.id, username: admin.username, role: 'ADMIN' },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        // 4. Set cookie
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
            debug: error.message // Temporarily expose for diagnostics
        }, { status: 500 });
    }
}
