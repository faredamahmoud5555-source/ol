import type { Metadata } from "next";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Coupons — Admin" };

const COUPONS = [
  { code: "AELIA10", percentOff: 10, redemptions: 142, max: 500, active: true },
  { code: "WELCOME15", percentOff: 15, redemptions: 88, max: 200, active: true },
  { code: "STUDIO25", percentOff: 25, redemptions: 200, max: 200, active: false },
];

export default function AdminCouponsPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-eyebrow text-ink/50">Coupons</p>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl">Discount Codes</h1>
        </div>
        <Button size="sm">
          <Plus size={14} /> New Coupon
        </Button>
      </div>

      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[600px] text-sm">
          <thead>
            <tr className="border-b border-line text-left text-eyebrow text-ink/45">
              <th className="pb-3 font-normal">Code</th>
              <th className="pb-3 font-normal">Discount</th>
              <th className="pb-3 font-normal">Redemptions</th>
              <th className="pb-3 font-normal">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {COUPONS.map((c) => (
              <tr key={c.code}>
                <td className="py-4 font-display tracking-wide">{c.code}</td>
                <td className="py-4 text-ink/60">{c.percentOff}% off</td>
                <td className="py-4 text-ink/60">{c.redemptions} / {c.max}</td>
                <td className="py-4">
                  <span className={`px-2.5 py-1 text-xs ${c.active ? "bg-cream text-ink" : "bg-ink/10 text-ink/50"}`}>
                    {c.active ? "Active" : "Expired"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-xs text-ink/40">
        Backed by the Coupon model in prisma/schema.prisma — redemptions increment server-side when an order
        with couponId is marked PAID via the Stripe webhook.
      </p>
    </div>
  );
}
