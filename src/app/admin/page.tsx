"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { products } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

const REVENUE_DATA = [
  { month: "Jan", revenue: 18200 },
  { month: "Feb", revenue: 21400 },
  { month: "Mar", revenue: 19800 },
  { month: "Apr", revenue: 24600 },
  { month: "May", revenue: 28900 },
  { month: "Jun", revenue: 31200 },
];

const KPIS = [
  { label: "Revenue (30d)", value: "$31,200", delta: "+12.4%", up: true },
  { label: "Orders (30d)", value: "214", delta: "+8.1%", up: true },
  { label: "Avg. Order Value", value: "$145.80", delta: "+3.6%", up: true },
  { label: "Refund Rate", value: "1.2%", delta: "-0.4%", up: false },
];

export default function AdminOverviewPage() {
  const topProducts = [...products].sort((a, b) => b.reviewCount - a.reviewCount).slice(0, 5);

  return (
    <div>
      <p className="text-eyebrow text-ink/50">Overview</p>
      <h1 className="mt-3 font-display text-3xl sm:text-4xl">Studio Analytics</h1>

      <div className="mt-10 grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
        {KPIS.map((kpi) => (
          <div key={kpi.label} className="bg-bone p-6">
            <p className="text-eyebrow text-ink/45">{kpi.label}</p>
            <p className="mt-3 font-display text-2xl">{kpi.value}</p>
            <p className={`mt-2 flex items-center gap-1 text-xs ${kpi.up ? "text-brass" : "text-clay"}`}>
              {kpi.up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
              {kpi.delta} vs. previous period
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 border border-line p-8">
        <p className="text-eyebrow text-ink/50 mb-6">Revenue — Last 6 Months</p>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={REVENUE_DATA} margin={{ left: -20 }}>
              <defs>
                <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#a8895a" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#a8895a" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="rgba(21,18,14,0.08)" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={12} />
              <YAxis tickLine={false} axisLine={false} fontSize={12} tickFormatter={(v) => `$${v / 1000}k`} />
              <Tooltip
                formatter={(value) => [`$${Number(value ?? 0).toLocaleString()}`, "Revenue"]}
                contentStyle={{ border: "1px solid rgba(21,18,14,0.12)", borderRadius: 0, fontSize: 12 }}
              />
              <Area type="monotone" dataKey="revenue" stroke="#a8895a" strokeWidth={2} fill="url(#revFill)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-12">
        <p className="text-eyebrow text-ink/50 mb-6">Top Products</p>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line text-left text-eyebrow text-ink/45">
              <th className="pb-3 font-normal">Product</th>
              <th className="pb-3 font-normal">Family</th>
              <th className="pb-3 font-normal">Price</th>
              <th className="pb-3 font-normal">Reviews</th>
              <th className="pb-3 font-normal">Rating</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {topProducts.map((p) => (
              <tr key={p.id}>
                <td className="py-3 font-display">{p.name}</td>
                <td className="py-3 text-ink/60">{p.family}</td>
                <td className="py-3 text-ink/60">{formatPrice(p.price)}</td>
                <td className="py-3 text-ink/60">{p.reviewCount}</td>
                <td className="py-3 text-ink/60">{p.rating.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
