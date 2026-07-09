import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";

import { products } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

import { AddToCart } from "@/components/add-to-cart";
import { FragrancePyramid } from "@/components/fragrance-pyramid";
import { MeterBar } from "@/components/meter-bar";
import { ReviewsSection } from "@/components/reviews-section";
import { ProductSection } from "@/components/product-section";
import { ProductWishlistButton } from "@/components/src/components/product-wishlist-button";
import { SmellMap } from "@/components/smell-map";

export function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) return {};

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  const related = products
    .filter(
      (p) =>
        p.family === product.family &&
        p.id !== product.id
    )
    .slice(0, 4);

  return (
    <>
      <section className="container-edit py-24">

        <div className="grid gap-20 lg:grid-cols-[520px_minmax(0,1fr)]">

          {/* LEFT */}

          <div className="relative">

            <div className="sticky top-24">

              <div className="relative rounded-2xl bg-cream/40 pt-6 pb-20 flex items-start justify-center">

                <ProductWishlistButton product={product} />

               <Image
  src={product.image}
  alt={product.name}
  width={700}
  height={900}
  className="h-[34rem] w-auto object-contain -translate-y-6"
/>
                

                <SmellMap
                  images={product.smellImages.map(
                    (img) =>
                      `/smell/${product.slug}/${img}`
                  )}
                />

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div>


                        <p className="text-eyebrow text-ink/50">
              {product.family} — {product.concentration}
            </p>

            <h1 className="mt-3 font-display text-5xl">
              {product.name}
            </h1>

            <p className="mt-4 text-lg text-ink/60">
              {product.tagline}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <span className="font-display text-3xl">
                {formatPrice(product.price)}
              </span>

              <span className="text-sm text-ink/40">
                {product.size}
              </span>
            </div>

            <p className="mt-8 max-w-xl text-base leading-8 text-ink/65">
              {product.description}
            </p>

            <div className="mt-10">
              <AddToCart product={product} />
            </div>

            <div className="mt-14 grid grid-cols-2 gap-8 border-y border-line py-8">
              <MeterBar
                label="Longevity"
                value={product.longevity}
              />

              <MeterBar
                label="Sillage"
                value={product.sillage}
              />
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8">

              <div>
                <p className="text-eyebrow text-ink/50">
                  Season
                </p>

                <p className="mt-2 text-sm">
                  {product.season.join(", ")}
                </p>
              </div>

              <div>
                <p className="text-eyebrow text-ink/50">
                  Occasion
                </p>

                <p className="mt-2 text-sm">
                  {product.occasion.join(", ")}
                </p>
              </div>

            </div>

            <div className="mt-14">

              <p className="mb-5 text-eyebrow text-ink/50">
                Fragrance Pyramid
              </p>

              <FragrancePyramid
                notes={product.notes}
              />

            </div>

            <div className="mt-14">

              <p className="text-eyebrow text-ink/50">
                The Story
              </p>

              <p className="mt-4 text-base leading-8 text-ink/65">
                {product.story}
              </p>

            </div>

            <div className="mt-14">

              <p className="text-eyebrow text-ink/50">
                Ingredients
              </p>

              <p className="mt-4 text-base leading-8 text-ink/65">
                {product.ingredients.join(", ")}.
              </p>

            </div>

          </div>

        </div>

      </section>


            {/* ================= REVIEWS ================= */}

      <section className="container-edit pb-24">

        <div className="mx-auto max-w-5xl border-t border-line pt-20">

          <p className="mb-10 text-center text-eyebrow text-ink/50">
            Reviews
          </p>

          <ReviewsSection
            rating={product.rating}
            count={product.reviewCount}
          />

        </div>

      </section>

      {/* ================= RELATED ================= */}

      {related.length > 0 && (

        <section className="container-edit pb-32">

          <ProductSection
            eyebrow="You May Also Like"
            title={`More in ${product.family}`}
            products={related}
          />

        </section>

      )}

    </>
  );
}