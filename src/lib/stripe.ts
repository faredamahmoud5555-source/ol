import Stripe from "stripe";

// Server-side Stripe client. Requires STRIPE_SECRET_KEY in the environment.
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "sk_test_placeholder", {
  apiVersion: "2026-06-24.dahlia",
});
