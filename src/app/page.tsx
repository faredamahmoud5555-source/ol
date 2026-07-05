import { Hero } from "@/components/hero";
import Image from "next/image";
import { ProductSection } from "@/components/product-section";
import { PhilosophySection } from "@/components/philosophy-section";
import { IngredientsShowcase } from "@/components/ingredients-showcase";
import { TestimonialsSection } from "@/components/testimonials-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { products } from "@/lib/data";


export default function HomePage() {
  const featured = products.filter((p) => p.featured).slice(0, 4);
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 4);

  return (
    <main>
      <Hero />
      <ProductSection
        eyebrow="Featured"
        title="This Season's Selection"
        products={featured}
        viewAllHref="/collection"
      />
      <PhilosophySection />
      <IngredientsShowcase />
      <ProductSection
        eyebrow="Most Worn"
        title="Bestsellers"
        products={bestsellers}
        viewAllHref="/collection?filter=bestseller"
      />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  );
}
