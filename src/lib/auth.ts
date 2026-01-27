import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.ACTIVATION_SECRET || 'fallback-secret-for-development';

export async function verifyAdmin(req: NextRequest) {
    const sessionToken = req.cookies.get('admin_session')?.value;

    if (!sessionToken) return false;

    try {
        const decoded = jwt.verify(sessionToken, JWT_SECRET) as any;
        return decoded && decoded.role === 'ADMIN';
    } catch (error) {
        return false;
    }
}
