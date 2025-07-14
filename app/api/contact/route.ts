import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ success: false, error: 'Missing Resend API key.' }, { status: 500 });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev', // You can set up a custom sender in Resend dashboard
        to: 'asadbalqani@gmail.com',
        subject: `[Portfolio Contact] ${subject}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json({ success: false, error: error.message || 'Failed to send email.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email.' }, { status: 500 });
  }
} 