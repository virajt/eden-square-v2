import { NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/security/rateLimit';

export async function GET(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'anonymous';
    if (!checkRateLimit(ip, 20)) {
        return NextResponse.json({ error: 'System busy.' }, { status: 429 });
    }

    const recommendations = [
      { id: 1, name: "Artisan Sourdough", reason: "Freshly baked 12m ago", confidence: 0.98 },
      { id: 2, name: "Small Batch Dark Roast", reason: "Perfect for morning focus", confidence: 0.92 }
    ];

    return NextResponse.json({ success: true, recommendations });
  } catch (err: any) {
    return NextResponse.json({ error: 'AI Retrieval Error' }, { status: 500 });
  }
}
