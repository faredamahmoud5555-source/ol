import type { Metadata } from "next";

export const metadata: Metadata = { title: "Customers — Admin" };

const CUSTOMERS = [
  { name: "M. Ardant", email: "m.ardant@example.com", orders: 4, spend: 98000, since: "2025-11-02" },
  { name: "R. Okafor", email: "r.okafor@example.com", orders: 2, spend: 49000, since: "2026-01-19" },
  { name: "S. Whitfield", email: "s.whitfield@example.com", orders: 6, spend: 156000, since: "2025-08-30" },
  { name: "J. Park", email: "j.park@example.com", orders: 1, spend: 22000, since: "2026-06-14" },
  { name: "A. Lindqvist", email: "a.lindqvist@example.com", orders: 3, spend: 71500, since: "2025-12-05" },
];

export default function AdminCustomersPage() {
  return (
    <div>
      <p className="text-eyebrow text-ink/50">Customers</p>
      <h1 className="mt-3 font-display text-3xl sm:text-4xl">All Customers</h1>

      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[600px] text-sm">
          <thead>
            <tr className="border-b border-line text-left text-eyebrow text-ink/45">
              <th className="pb-3 font-normal">Customer</th>
              <th className="pb-3 font-normal">Orders</th>
              <th className="pb-3 font-normal">Lifetime Spend</th>
              <th className="pb-3 font-normal">Customer Since</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {CUSTOMERS.map((c) => (
              <tr key={c.email}>
                <td className="py-4">
                  <p className="font-display">{c.name}</p>
                  <p className="text-xs text-ink/40">{c.email}</p>
                </td>
                <td className="py-4 text-ink/60">{c.orders}</td>
                <td className="py-4 text-ink/60">${(c.spend / 100).toFixed(0)}</td>
                <td className="py-4 text-ink/60">{c.since}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
