import { Suspense } from "react";
import type { Metadata } from "next";
import { CollectionGrid } from "@/components/collection-grid";

export const metadata: Metadata = {
  title: "Collection",
  description: "Nine fragrance compositions across woody, amber, floral, citrus, musk, and green families.",
};

export default function CollectionPage() {
  return (
    <main className="container-edit pb-28 pt-36">
      <div className="mb-14 max-w-2xl">
        <p className="text-eyebrow text-ink/50">The Collection</p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl">
          Nine compositions, revised until they were ready.
        </h1>
      </div>
      <Suspense>
        <CollectionGrid />
      </Suspense>
    </main>
  );
}
