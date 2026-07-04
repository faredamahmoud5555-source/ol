import type { Metadata } from "next";

export const metadata: Metadata = { title: "Orders — Admin" };

const ORDERS = [
  { id: "AEL-40921", customer: "M. Ardant", email: "m.ardant@example.com", date: "2026-06-28", status: "Shipped", total: 24500 },
  { id: "AEL-40918", customer: "R. Okafor", email: "r.okafor@example.com", date: "2026-06-27", status: "Paid", total: 49000 },
  { id: "AEL-40903", customer: "S. Whitfield", email: "s.whitfield@example.com", date: "2026-06-25", status: "Delivered", total: 27500 },
  { id: "AEL-40877", customer: "J. Park", email: "j.park@example.com", date: "2026-06-14", status: "Delivered", total: 22000 },
  { id: "AEL-40855", customer: "A. Lindqvist", email: "a.lindqvist@example.com", date: "2026-06-10", status: "Refunded", total: 29000 },
];

const statusStyle: Record<string, string> = {
  Paid: "bg-cream text-ink",
  Shipped: "bg-brass/20 text-clay",
  Delivered: "bg-ink/10 text-ink/60",
  Refunded: "bg-clay/15 text-clay",
};

export default function AdminOrdersPage() {
  return (
    <div>
      <p className="text-eyebrow text-ink/50">Orders</p>
      <h1 className="mt-3 font-display text-3xl sm:text-4xl">All Orders</h1>

      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[700px] text-sm">
          <thead>
            <tr className="border-b border-line text-left text-eyebrow text-ink/45">
              <th className="pb-3 font-normal">Order</th>
              <th className="pb-3 font-normal">Customer</th>
              <th className="pb-3 font-normal">Date</th>
              <th className="pb-3 font-normal">Status</th>
              <th className="pb-3 font-normal text-right">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {ORDERS.map((o) => (
              <tr key={o.id}>
                <td className="py-4 font-display">#{o.id}</td>
                <td className="py-4">
                  <p>{o.customer}</p>
                  <p className="text-xs text-ink/40">{o.email}</p>
                </td>
                <td className="py-4 text-ink/60">{o.date}</td>
                <td className="py-4">
                  <span className={`px-2.5 py-1 text-xs ${statusStyle[o.status] ?? "bg-ink/10"}`}>{o.status}</span>
                </td>
                <td className="py-4 text-right">${(o.total / 100).toFixed(0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-xs text-ink/40">
        Connect Prisma to replace this with live orders from Postgres (query the Order model, joined on User and OrderItem).
      </p>
    </div>
  );
}
