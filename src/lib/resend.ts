import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY ?? "re_placeholder");

export async function sendOrderConfirmation(to: string, orderId: string, totalCents: number) {
  return resend.emails.send({
    from: "Aelia <orders@aelia.example.com>",
    to,
    subject: `Order Confirmed — #${orderId.slice(-8).toUpperCase()}`,
    html: `<p>Thank you for your order. Your total was $${(totalCents / 100).toFixed(2)}.</p>
           <p>We'll send a shipping notice once your fragrance leaves the studio.</p>`,
  });
}

export async function sendContactNotification(name: string, email: string, message: string) {
  return resend.emails.send({
    from: "Aelia Website <no-reply@aelia.example.com>",
    to: "hello@aelia.example.com",
    replyTo: email,
    subject: `New contact form message from ${name}`,
    html: `<p><strong>${name}</strong> (${email}) wrote:</p><p>${message}</p>`,
  });
}
