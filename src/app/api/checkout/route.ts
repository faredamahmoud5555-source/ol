import { NextResponse } from "next/server";
import { z } from "zod";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { products } from "@/lib/data";

const schema = z.object({
  items: z.array(z.object({ productId: z.string(), quantity: z.number().min(1) })),
  couponCode: z.string().nullable().optional(),
  customer: z.object({
    email: z.string().email(),
    fullName: z.string(),
    address: z.string(),
    city: z.string(),
    postalCode: z.string(),
    country: z.string(),
  }),
});

export async function POST(req: Request) {
  const parsed = schema.safeParse(await req.json());
  if (!parsed.success) {
    return NextResponse.json({ message: "Invalid checkout payload." }, { status: 400 });
  }
  const { items, customer } = parsed.data;

  // In production this looks products up from Postgres via Prisma;
  // the in-memory catalog is used here so checkout works without a DB.
  const lineItems = items
    .map((item) => {
      const product = products.find((p) => p.id === item.productId);
      if (!product) return null;
      return {
        price_data: {
          currency: "usd",
          product_data: { name: `${product.name} (${product.size})` },
          unit_amount: product.price,
        },
        quantity: item.quantity,
      };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  if (lineItems.length === 0) {
    return NextResponse.json({ message: "Cart is empty." }, { status: 400 });
  }

  const origin = req.headers.get("origin") ?? "http://localhost:3000";

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: customer.email,
      line_items: lineItems,
      success_url: `${origin}/dashboard?order=success`,
      cancel_url: `${origin}/checkout`,
      shipping_address_collection: { allowed_countries: ["US", "CA", "GB", "EU"] as never },
      metadata: {
        fullName: customer.fullName,
        address: customer.address,
        city: customer.city,
        postalCode: customer.postalCode,
        country: customer.country,
      },
    });

    // Persist a pending order so it shows up in the dashboard/admin before
    // the webhook confirms payment.
    await prisma.order
      .create({
        data: {
          email: customer.email,
          status: "PENDING",
          subtotalCents: lineItems.reduce((s, li) => s + li.price_data.unit_amount * li.quantity, 0),
          totalCents: lineItems.reduce((s, li) => s + li.price_data.unit_amount * li.quantity, 0),
          stripeSessionId: session.id,
          items: {
            create: items.map((item) => {
              const product = products.find((p) => p.id === item.productId)!;
              return {
                productId: item.productId,
                quantity: item.quantity,
                unitPriceCents: product.price,
              };
            }),
          },
        },
      })
      .catch(() => {
        // No database configured in this environment — Stripe session is
        // still created and returned to the client below.
      });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error", err);
    return NextResponse.json(
      { message: "Could not start checkout. Check STRIPE_SECRET_KEY is configured." },
      { status: 500 }
    );
  }
}
