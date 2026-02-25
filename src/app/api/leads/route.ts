import { NextResponse } from 'next/server';
import { query, ensureTables } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
    try {
        // Ensure tables are initialized
        await ensureTables();

        const body = await request.json();
        const { email, phone, businessPhone, businessName, businessLocation, planId, durationMonths, turnstileToken } = body;

        // 1. Verify Turnstile Token
        if (!turnstileToken) {
            return NextResponse.json({ error: 'Bot check required' }, { status: 400 });
        }

        const siteverify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `secret=${process.env.TURNSTILE_SECRET_KEY || '1x0000000000000000000000000000000AA'}&response=${turnstileToken}`,
        });

        const verifyData = await siteverify.json();
        if (!verifyData.success) {
            console.error('Turnstile verification failed:', verifyData);
            return NextResponse.json({ error: 'Bot check failed. Please refresh and try again.' }, { status: 400 });
        }

        // 2. Save to Database
        const id = uuidv4();
        await query(
            `INSERT INTO leads (id, email, phone, businessPhone, businessName, businessLocation, planId, durationMonths, status) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'opened')`,
            [id, email, phone, businessPhone, businessName, businessLocation, planId, durationMonths]
        );

        // 3. Send Email Notification
        // Note: For now we'll log it. To send real emails, you'll need to configure an SMTP transporter.
        console.log('NEW LEAD RECEIVED:', { email, businessName, planId });

        // In a real scenario, you'd use nodemailer or a service like Resend:
        /*
        await sendEmail({
            to: 'info@qline.com',
            subject: `New Lead: ${businessName} (${planId})`,
            text: `A new lead has been submitted: \n\n Name: ${businessName} \n Email: ${email} \n Phone: ${phone} \n Plan: ${planId}`
        });
        */

        return NextResponse.json({ success: true, id });
    } catch (error: any) {
        console.error('API LEADS ERROR:', error.message);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
