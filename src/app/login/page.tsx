"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

const schema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
type FormValues = z.infer<typeof schema>;

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(values: FormValues) {
    setError(null);
    const res = await signIn("credentials", { ...values, redirect: false, callbackUrl: "/dashboard" });
    if (res?.error) setError("Incorrect email or password.");
    else window.location.href = "/dashboard";
  }

  return (
    <main className="container-edit flex min-h-[80vh] max-w-md flex-col justify-center py-36">
      <p className="text-eyebrow text-ink/50">Welcome Back</p>
      <h1 className="mt-4 font-display text-4xl">Sign In</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6" noValidate>
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
          {isSubmitting ? "Signing in…" : "Sign In"}
        </Button>
      </form>

      <p className="mt-8 text-sm text-ink/55">
        New here? <Link href="/register" className="text-ink underline underline-offset-4 decoration-brass">Create an account</Link>
      </p>
    </main>
  );
}
