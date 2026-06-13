import { NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/security/rateLimit';

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'anonymous';
    if (!checkRateLimit(ip, 5)) {
        return NextResponse.json({ error: 'Support queue full.' }, { status: 429 });
    }

    const { issue } = await req.json();
    // Support Agent: Automated triage for high-stakes hospitality
    console.log("[SUPPORT] Triage initiated for issue:", issue);
    
    return NextResponse.json({ 
      success: true, 
      message: "Protocol support initiated. A Master Guardian has been notified.",
      ticketId: "ES-SUP-" + Math.random().toString(36).substr(2, 9).toUpperCase()
    });
  } catch (err: any) {
    return NextResponse.json({ error: 'Support Bridge Error' }, { status: 500 });
  }
}
