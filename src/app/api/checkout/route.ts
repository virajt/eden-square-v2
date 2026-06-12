import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-02-15-preview',
});

export async function POST(req: Request) {
  try {
    const { amount, currency = 'nzd', items } = await req.json();

    // Financial Audit: Log the intent for Project One Million tracking
    console.log(`[FINANCE] Initializing high-stakes payment tunnel for amount: ${amount} ${currency}`);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'afterpay_clearpay'],
      line_items: items.map((item: any) => ({
        price_data: {
          currency,
          product_data: {
            name: item.name,
            description: item.category,
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/menu`,
      metadata: {
        project: 'Project One Million',
        division: 'Finance',
      }
    });

    return NextResponse.json({ id: session.id });
  } catch (err: any) {
    console.error(`[FINANCE_ERROR] ${err.message}`);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
