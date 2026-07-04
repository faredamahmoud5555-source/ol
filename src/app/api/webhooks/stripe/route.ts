import { NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { sendOrderConfirmation } from "@/lib/resend";

// Stripe requires the raw request body to verify the webhook signature,
// so this route must not be parsed as JSON by Next's default body parser.
export const runtime = "nodejs";

export async function POST(req: Request) {
  const signature = req.headers.get("stripe-signature");
  const rawBody = await req.text();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json(
      { message: "Missing Stripe signature or STRIPE_WEBHOOK_SECRET." },
      { status: 400 }
    );
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err) {
    console.error("Stripe webhook signature verification failed", err);
    return NextResponse.json({ message: "Invalid signature." }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      await handleCheckoutCompleted(session);
      break;
    }
    case "charge.refunded": {
      const charge = event.data.object as Stripe.Charge;
      await handleRefund(charge);
      break;
    }
    default:
      // Unhandled event types are acknowledged but ignored.
      break;
  }

  return NextResponse.json({ received: true });
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  try {
    const order = await prisma.order.update({
      where: { stripeSessionId: session.id },
      data: {
        status: "PAID",
        stripePaymentId:
          typeof session.payment_intent === "string" ? session.payment_intent : session.payment_intent?.id,
        totalCents: session.amount_total ?? undefined,
      },
    });

    if (order.email) {
      await sendOrderConfirmation(order.email, order.id, order.totalCents).catch((err: unknown) =>
        console.error("Failed to send order confirmation email", err)
      );
    }
  } catch (err: unknown) {
    // Order may not exist if the database wasn't configured when the
    // checkout session was created — log and move on rather than 500ing,
    // since Stripe will retry on non-2xx responses.
    console.error("Could not update order for session", session.id, err);
  }
}

async function handleRefund(charge: Stripe.Charge) {
  const paymentIntentId =
    typeof charge.payment_intent === "string" ? charge.payment_intent : charge.payment_intent?.id;
  if (!paymentIntentId) return;

  await prisma.order
    .updateMany({
      where: { stripePaymentId: paymentIntentId },
      data: { status: "REFUNDED" },
    })
    .catch((err: unknown) => console.error("Could not mark order refunded", err));
}
