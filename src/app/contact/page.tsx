"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email address"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});
type FormValues = z.infer<typeof schema>;

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    setSent(true);
    reset();
  }

  return (
    <main className="container-edit min-h-[70vh] pb-28 pt-36">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="text-eyebrow text-ink/50">Contact</p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl">Get in touch.</h1>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink/60">
            For order questions, wholesale inquiries, or press requests,
            write to us directly. We read every message ourselves and
            typically respond within two business days.
          </p>
          <div className="mt-10 space-y-2 text-sm text-ink/60">
            <p>hello@aelia.example.com</p>
            <p>+1 (212) 555‑0148</p>
            <p>Studio by appointment — New York, NY</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            <div>
              <label className="text-eyebrow text-ink/50">Name</label>
              <input {...register("name")} className="mt-2 w-full border border-ink/25 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-brass" />
              {errors.name && <p className="mt-1 text-xs text-clay">{errors.name.message}</p>}
            </div>
            <div>
              <label className="text-eyebrow text-ink/50">Email</label>
              <input type="email" {...register("email")} className="mt-2 w-full border border-ink/25 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-brass" />
              {errors.email && <p className="mt-1 text-xs text-clay">{errors.email.message}</p>}
            </div>
            <div>
              <label className="text-eyebrow text-ink/50">Message</label>
              <textarea rows={5} {...register("message")} className="mt-2 w-full border border-ink/25 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-brass" />
              {errors.message && <p className="mt-1 text-xs text-clay">{errors.message.message}</p>}
            </div>
            <Button type="submit" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Sending…" : "Send Message"}
            </Button>
            {sent && <p className="text-xs text-brass">Message sent — we&apos;ll be in touch shortly.</p>}
          </form>
        </Reveal>
      </div>
    </main>
  );
}
