import type { Metadata } from "next";
import { Pencil, Plus } from "lucide-react";
import { products } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Inventory — Admin" };

export default function AdminProductsPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-eyebrow text-ink/50">Inventory</p>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl">Products</h1>
        </div>
        <Button size="sm">
          <Plus size={14} /> New Product
        </Button>
      </div>

      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[700px] text-sm">
          <thead>
            <tr className="border-b border-line text-left text-eyebrow text-ink/45">
              <th className="pb-3 font-normal">Product</th>
              <th className="pb-3 font-normal">Family</th>
              <th className="pb-3 font-normal">Price</th>
              <th className="pb-3 font-normal">Stock</th>
              <th className="pb-3 font-normal">Status</th>
              <th className="pb-3 font-normal" />
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {products.map((p, i) => {
              const stock = 40 + ((i * 17) % 60);
              const low = stock < 20;
              return (
                <tr key={p.id}>
                  <td className="py-4 font-display">{p.name}</td>
                  <td className="py-4 text-ink/60">{p.family}</td>
                  <td className="py-4 text-ink/60">{formatPrice(p.price)}</td>
                  <td className={`py-4 ${low ? "text-clay" : "text-ink/60"}`}>{stock} units{low && " — low"}</td>
                  <td className="py-4">
                    <span className="bg-cream px-2.5 py-1 text-xs text-ink">Active</span>
                  </td>
                  <td className="py-4 text-right">
                    <button className="text-ink/40 hover:text-ink" aria-label={`Edit ${p.name}`}>
                      <Pencil size={14} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-xs text-ink/40">
        Product edits here would call a server action that writes to the Prisma Product model and, for photo
        uploads, pushes the file to Cloudinary via <code>uploadProductImage()</code> in <code>lib/cloudinary.ts</code>.
      </p>
    </div>
  );
}
