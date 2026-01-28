import { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.ACTIVATION_SECRET || 'fallback-secret-for-development';
const secret = new TextEncoder().encode(JWT_SECRET);

export async function verifyAdmin(req: NextRequest) {
    const sessionToken = req.cookies.get('admin_session')?.value;

    if (!sessionToken) return false;

    try {
        const { payload } = await jwtVerify(sessionToken, secret);
        return payload && payload.role === 'ADMIN';
    } catch (error) {
        return false;
    }
}
