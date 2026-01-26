import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

// In a real app, this MUST be in your .env file
const JWT_SECRET = process.env.ACTIVATION_SECRET || 'fallback-secret-for-development';

/**
 * Endpoint for POS Software Activation
 * POST /api/activate
 */
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { licenseKey, hwid, restaurantName } = body;

        if (!licenseKey || !hwid) {
            return NextResponse.json(
                { message: 'License key and Hardware ID are required.' },
                { status: 400 }
            );
        }

        // --- DATABASE LOGIC (REPLACE WITH YOUR DB CALL) ---
        // Example using a mock valid key: "QLINE-PREMIUM-2026"

        const isValidKey = licenseKey === 'QLINE-PREMIUM-2026'; // Mock check

        if (!isValidKey) {
            return NextResponse.json(
                { message: 'Invalid license key. Please check and try again.' },
                { status: 403 }
            );
        }

        // Check if key is already bound to another HWID
        // const existingHwid = await db.getHwidForKey(licenseKey);
        // if (existingHwid && existingHwid !== hwid) { 
        //   return NextResponse.json({ message: 'Key already in use on another machine.' }, { status: 403 }); 
        // }

        // If valid, generate a signed activation token
        const token = jwt.sign(
            {
                licenseKey,
                hwid,
                restaurantName: restaurantName || 'Generic Restaurant',
                activatedAt: new Date().toISOString(),
                version: '4.0.0',
            },
            JWT_SECRET,
            { expiresIn: '365d' } // Token valid for 1 year before requiring re-check
        );

        return NextResponse.json({
            success: true,
            message: 'Activation successful.',
            token,
            activationDate: new Date().toISOString(),
        });

    } catch (error) {
        console.error('Activation Error:', error);
        return NextResponse.json(
            { message: 'Internal server error during activation.' },
            { status: 500 }
        );
    }
}
