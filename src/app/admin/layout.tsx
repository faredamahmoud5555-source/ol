import Link from "next/link";
import type { Metadata } from "next";
import { LayoutDashboard, Package, Users, Tag, Boxes } from "lucide-react";

export const metadata: Metadata = { title: "Admin" };

const NAV = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/orders", label: "Orders", icon: Package },
  { href: "/admin/customers", label: "Customers", icon: Users },
  { href: "/admin/products", label: "Inventory", icon: Boxes },
  { href: "/admin/coupons", label: "Coupons", icon: Tag },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bone pt-20">
      <div className="container-edit grid grid-cols-1 gap-12 py-12 lg:grid-cols-[220px_1fr]">
        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <p className="text-eyebrow text-ink/40">Admin</p>
          <nav className="mt-6 flex gap-2 overflow-x-auto lg:flex-col lg:gap-1 lg:overflow-visible">
            {NAV.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex shrink-0 items-center gap-3 px-3 py-2.5 text-sm text-ink/65 transition-colors hover:bg-cream/60 hover:text-ink"
              >
                <Icon size={15} strokeWidth={1.5} />
                {label}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
