import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  console.log("Inquiry received for Eden Square:", data);
  return NextResponse.json({ success: true, message: "Your inquiry has been received by our hospitality team." });
}
