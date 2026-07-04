"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
type FormValues = z.infer<typeof schema>;

export default function RegisterPage() {
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(values: FormValues) {
    setError(null);
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.message ?? "Something went wrong. Try again.");
      return;
    }
    window.location.href = "/login";
  }

  return (
    <main className="container-edit flex min-h-[80vh] max-w-md flex-col justify-center py-36">
      <p className="text-eyebrow text-ink/50">Join Aelia</p>
      <h1 className="mt-4 font-display text-4xl">Create an Account</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6" noValidate>
        <div>
          <label className="text-eyebrow text-ink/50">Full Name</label>
          <input {...register("name")} className="mt-2 w-full border border-ink/25 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-brass" />
          {errors.name && <p className="mt-1 text-xs text-clay">{errors.name.message}</p>}
        </div>
        <div>
          <label className="text-eyebrow text-ink/50">Email</label>
          <input type="email" {...register("email")} className="mt-2 w-full border border-ink/25 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-brass" />
          {errors.email && <p className="mt-1 text-xs text-clay">{errors.email.message}</p>}
        </div>
        <div>
          <label className="text-eyebrow text-ink/50">Password</label>
          <input type="password" {...register("password")} className="mt-2 w-full border border-ink/25 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-brass" />
          {errors.password && <p className="mt-1 text-xs text-clay">{errors.password.message}</p>}
        </div>
        {error && <p className="text-xs text-clay">{error}</p>}
        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Creating account…" : "Create Account"}
        </Button>
      </form>

      <p className="mt-8 text-sm text-ink/55">
        Already have an account? <Link href="/login" className="text-ink underline underline-offset-4 decoration-brass">Sign in</Link>
      </p>
    </main>
  );
}
