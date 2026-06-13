import { NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/security/rateLimit';

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'anonymous';
    if (!checkRateLimit(ip, 5)) {
        return NextResponse.json({ error: 'System busy. Inquiry frequency exceeded.' }, { status: 429 });
    }

    const data = await request.json();
    console.log("Inquiry received for Eden Square:", data);
    return NextResponse.json({ success: true, message: "Your inquiry has been received by our hospitality team." });
  } catch (err: any) {
    return NextResponse.json({ error: 'Processing error' }, { status: 500 });
  }
}
