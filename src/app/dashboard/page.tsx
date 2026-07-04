import type { Metadata } from "next";
import { Package, MapPin, Heart, Settings } from "lucide-react";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = { title: "Your Account" };

const MOCK_ORDERS = [
  { id: "AEL-40921", date: "2026-06-28", status: "Shipped", total: 24500, items: "Smoked Fig (50ml)" },
  { id: "AEL-40877", date: "2026-05-14", status: "Delivered", total: 49000, items: "Amber Hour, White Neroli" },
  { id: "AEL-40801", date: "2026-04-02", status: "Delivered", total: 27500, items: "Black Tobacco (50ml)" },
];

const statusColor: Record<string, string> = {
  Shipped: "text-brass",
  Delivered: "text-ink/50",
  Processing: "text-clay",
};

export default function DashboardPage() {
  return (
    <main className="container-edit min-h-[70vh] pb-28 pt-36">
      <p className="text-eyebrow text-ink/50">Your Account</p>
      <h1 className="mt-4 font-display text-4xl sm:text-5xl">Welcome back.</h1>

      <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-[220px_1fr]">
        <nav className="flex gap-6 border-b border-line pb-6 text-eyebrow text-ink/60 lg:flex-col lg:border-b-0 lg:border-r lg:pr-8 lg:pb-0">
          <span className="flex items-center gap-2 text-ink"><Package size={15} /> Orders</span>
          <span className="flex items-center gap-2 hover:text-ink"><MapPin size={15} /> Addresses</span>
          <span className="flex items-center gap-2 hover:text-ink"><Heart size={15} /> Wishlist</span>
          <span className="flex items-center gap-2 hover:text-ink"><Settings size={15} /> Settings</span>
        </nav>

        <div>
          <Reveal>
            <p className="text-eyebrow text-ink/50 mb-6">Order History</p>
          </Reveal>
          <div className="divide-y divide-line border-y border-line">
            {MOCK_ORDERS.map((order, i) => (
              <Reveal key={order.id} delay={i * 0.06}>
                <div className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-display text-lg">#{order.id}</p>
                    <p className="text-sm text-ink/50">{order.items}</p>
                    <p className="text-xs text-ink/35">{order.date}</p>
                  </div>
                  <div className="flex items-center gap-8">
                    <span className={`text-eyebrow ${statusColor[order.status] ?? "text-ink/50"}`}>
                      {order.status}
                    </span>
                    <span className="text-sm">${(order.total / 100).toFixed(0)}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-xs text-ink/40">
            Order data shown here is illustrative. Connect Prisma + Postgres to replace with live order records.
          </p>
        </div>
      </div>
    </main>
  );
}
