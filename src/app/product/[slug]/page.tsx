import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import { BottleMark } from "@/components/bottle-mark";
import { AddToCart } from "@/components/add-to-cart";
import { FragrancePyramid } from "@/components/fragrance-pyramid";
import { MeterBar } from "@/components/meter-bar";
import { ReviewsSection } from "@/components/reviews-section";
import { ProductSection } from "@/components/product-section";
import { Reveal } from "@/components/reveal";
import { formatPrice} from "@/lib/utils";
import { ProductWishlistButton } from "@/components/src/components/product-wishlist-button";
import { SmellMap } from "@/components/smell-map";
import Image from "next/image";




export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

type ProductPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  const related = products.filter((p) => p.family === product.family && p.id !== product.id).slice(0, 4);
  
  return (
    
<div className="container-edit grid grid-cols-1 gap-16 py-16 lg:grid-cols-2 lg:gap-24 lg:py-24">













<div className="relative flex items-center justify-center bg-cream/50 py-20 lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] lg:py-0">

  <ProductWishlistButton product={product} />

  <Reveal>
    <Image
  src={product.image ?? "/products/oud5556.jpg"}
  alt={product.name}
  width={700}
  height={1000}
  className="h-[32rem] w-auto object-contain"





/>



  </Reveal>

  

 <SmellMap
  images={product.smellImages.map(
    (image: string) => `/smell/${product.slug}/${image}`
  )}

/>




  






</div>

        {/* Info */}
        <div>
          <p className="text-eyebrow text-ink/50">{product.family} — {product.concentration}</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl">{product.name}</h1>
          <p className="mt-3 text-ink/60">{product.tagline}</p>

          <div className="mt-6 flex items-center gap-4">
            <span className="font-display text-2xl">{formatPrice(product.price)}</span>
            <span className="text-sm text-ink/40">{product.size}</span>
          </div>

          <p className="mt-6 max-w-lg text-sm leading-relaxed text-ink/65">{product.description}</p>

          <div className="mt-8">
            <AddToCart product={product} />
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 border-y border-line py-8">
            <MeterBar label="Longevity" value={product.longevity} />
            <MeterBar label="Sillage" value={product.sillage} />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-8">
            <div>
              <p className="text-eyebrow text-ink/50">Season</p>
              <p className="mt-2 text-sm">{product.season.join(", ")}</p>
            </div>
            <div>
              <p className="text-eyebrow text-ink/50">Occasion</p>
              <p className="mt-2 text-sm">{product.occasion.join(", ")}</p>
            </div>
          </div>

          <div className="mt-14">
            <p className="text-eyebrow text-ink/50 mb-4">Fragrance Pyramid</p>
            <FragrancePyramid notes={product.notes} />
          </div>

          <div className="mt-12">
            <p className="text-eyebrow text-ink/50">The Story</p>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">{product.story}</p>
          </div>

          <div className="mt-12">
            <p className="text-eyebrow text-ink/50">Ingredients</p>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">{product.ingredients.join(", ")}.</p>
          </div>

          <div className="mt-16 border-t border-line pt-12">
            <p className="text-eyebrow text-ink/50 mb-6">Reviews</p>
            <ReviewsSection rating={product.rating} count={product.reviewCount} />
        
    




          </div>
    </div>

    {related.length > 0 && (
      <ProductSection
        eyebrow="You May Also Like"
        title={`More in ${product.family}`}
        products={related}
      />
    )}
  </div>
);
}