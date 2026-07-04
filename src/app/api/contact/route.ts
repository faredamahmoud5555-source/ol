import { NextResponse } from "next/server";
import { z } from "zod";
import { sendContactNotification } from "@/lib/resend";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ message: "Invalid submission." }, { status: 400 });
  }

  try {
    await sendContactNotification(parsed.data.name, parsed.data.email, parsed.data.message);
  } catch {
    // Resend not configured in this environment — fail silently so the
    // contact form still gives the user a success state in development.
  }

  return NextResponse.json({ ok: true });
}
