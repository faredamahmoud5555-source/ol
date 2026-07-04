"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";

const schema = z.object({
  email: z.string().email("Enter a valid email address"),
});
type FormValues = z.infer<typeof schema>;

export function NewsletterForm({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  const dark = variant === "dark";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-5" noValidate>
      <div
        className={cn(
          "flex items-center border-b pb-2",
          dark ? "border-bone/30" : "border-ink/30"
        )}
      >
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          {...register("email")}
          className={cn(
            "w-full bg-transparent text-sm outline-none placeholder:text-current/40",
            dark ? "text-bone" : "text-ink"
          )}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "text-eyebrow shrink-0 disabled:opacity-40",
            dark ? "text-bone hover:text-brass" : "text-ink hover:text-brass"
          )}
        >
          {isSubmitting ? "..." : "Join"}
        </button>
      </div>
      {errors.email && (
        <p className="mt-2 text-xs text-clay">{errors.email.message}</p>
      )}
      {status === "success" && (
        <p className="mt-2 text-xs text-brass">You&apos;re on the list.</p>
      )}
      {status === "error" && (
        <p className="mt-2 text-xs text-clay">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
