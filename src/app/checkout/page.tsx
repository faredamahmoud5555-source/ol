"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useStore } from "@/lib/store";
import { BottleMark } from "@/components/bottle-mark";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

const checkoutSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  fullName: z.string().min(2, "Enter your full name"),
  address: z.string().min(5, "Enter a street address"),
  city: z.string().min(1, "Enter a city"),
  postalCode: z.string().min(3, "Enter a postal code"),
  country: z.string().min(2, "Enter a country"),
});
type CheckoutValues = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const { cart, subtotal, discount, couponCode } = useStore();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutValues>({ resolver: zodResolver(checkoutSchema) });

  const total = subtotal - discount;

  async function onSubmit(values: CheckoutValues) {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cart.map((l) => ({ productId: l.product.id, quantity: l.quantity })),
          couponCode,
          customer: values,
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container-edit min-h-[70vh] pb-28 pt-36">
      <h1 className="font-display text-4xl sm:text-5xl">Checkout</h1>

      <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_380px]">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10" noValidate>
          <section>
            <p className="text-eyebrow text-ink/50 mb-4">Contact</p>
            <Field label="Email" error={errors.email?.message}>
              <input type="email" {...register("email")} className="input" />
            </Field>
          </section>

          <section>
            <p className="text-eyebrow text-ink/50 mb-4">Shipping Address</p>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Full Name" error={errors.fullName?.message} full>
                <input {...register("fullName")} className="input" />
              </Field>
              <Field label="Address" error={errors.address?.message} full>
                <input {...register("address")} className="input" />
              </Field>
              <Field label="City" error={errors.city?.message}>
                <input {...register("city")} className="input" />
              </Field>
              <Field label="Postal Code" error={errors.postalCode?.message}>
                <input {...register("postalCode")} className="input" />
              </Field>
              <Field label="Country" error={errors.country?.message} full>
                <input {...register("country")} className="input" />
              </Field>
            </div>
          </section>

          <Button type="submit" size="lg" className="w-full" disabled={loading || cart.length === 0}>
            {loading ? "Redirecting to payment…" : `Pay ${formatPrice(total)} with Stripe`}
          </Button>
          <p className="text-xs text-ink/40">
            You&apos;ll be redirected to Stripe&apos;s secure checkout to complete payment.
          </p>
        </form>

        <div className="h-fit border border-line p-8">
          <p className="text-eyebrow text-ink/50 mb-6">Order Summary</p>
          <ul className="space-y-5">
            {cart.map((line) => (
              <li key={line.product.id} className="flex items-center gap-4">
                <div className="flex h-16 w-14 shrink-0 items-center justify-center bg-cream/60">
                  <BottleMark accent={line.product.accent} className="h-12 w-auto text-espresso" />
                </div>
                <div className="flex flex-1 justify-between text-sm">
                  <span>{line.product.name} &times; {line.quantity}</span>
                  <span>{formatPrice(line.product.price * line.quantity)}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-2 border-t border-line pt-6 text-sm">
            <div className="flex justify-between"><span className="text-ink/60">Subtotal</span><span>{formatPrice(subtotal)}</span></div>
            {discount > 0 && <div className="flex justify-between text-brass"><span>Discount</span><span>-{formatPrice(discount)}</span></div>}
            <div className="flex justify-between font-display text-lg pt-2"><span>Total</span><span>{formatPrice(total)}</span></div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .input {
          width: 100%;
          background: transparent;
          border: 1px solid var(--line);
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
        }
        .input:focus {
          outline: none;
          border-color: var(--brass);
        }
      `}</style>
    </main>
  );
}

function Field({
  label,
  error,
  children,
  full,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <label className={full ? "block sm:col-span-2" : "block"}>
      <span className="text-eyebrow text-ink/50">{label}</span>
      <div className="mt-2">{children}</div>
      {error && <span className="mt-1 block text-xs text-clay">{error}</span>}
    </label>
  );
}
