import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const LOOPS_API_KEY = process.env.LOOPS_API_KEY;

    if (!LOOPS_API_KEY || LOOPS_API_KEY === 'placeholder_for_development') {
      // Development mode - just log the email
      console.log('Development mode: Would add email to waitlist:', email);
      return NextResponse.json({ success: true, message: 'Email added to waitlist (development mode)' });
    }

    // Production mode - integrate with Loops
    const response = await fetch('https://app.loops.so/api/newsletter/subscribe', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOOPS_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true, message: 'Email added to waitlist' });
    } else {
      throw new Error('Failed to add email to waitlist');
    }
  } catch (error) {
    console.error('Error adding email to waitlist:', error);
    return NextResponse.json(
      { error: 'Failed to add email to waitlist' },
      { status: 500 }
    );
  }
}
