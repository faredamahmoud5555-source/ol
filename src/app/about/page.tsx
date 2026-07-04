import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { IngredientsShowcase } from "@/components/ingredients-showcase";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="pt-20">
      <section className="container-edit py-28 sm:py-36">
        <Reveal>
          <p className="text-eyebrow text-ink/50">About Aelia</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.15] sm:text-5xl lg:text-6xl">
            A small studio, working slowly, on purpose.
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-10 max-w-xl text-sm leading-relaxed text-ink/60">
            Aelia was founded on the premise that a fragrance house does not
            need a new release every quarter to be worth paying attention
            to. We work with one perfumer, a small group of raw material
            suppliers we&apos;ve used since the beginning, and a production
            run small enough that every batch is checked by hand before it
            ships.
          </p>
        </Reveal>
      </section>

      <section className="container-edit grid grid-cols-1 gap-16 pb-28 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl">How a composition is made</h2>
          <p className="mt-5 text-sm leading-relaxed text-ink/60">
            Every fragrance begins as a brief written on a single page —
            never a mood board, never a marketing plan. From there, the
            perfumer builds and rebuilds the accord over a period of no
            less than six months, testing each version on skin across
            different seasons before it&apos;s considered stable enough
            to name.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl">Why nine, and no more</h2>
          <p className="mt-5 text-sm leading-relaxed text-ink/60">
            Nine compositions is a deliberate ceiling. When a tenth is
            ready, an existing one is retired rather than expanding the
            shelf indefinitely — we&apos;d rather a smaller collection
            you can hold in your head than a catalogue you have to
            search.
          </p>
        </Reveal>
      </section>

      <IngredientsShowcase />

      <section className="container-edit py-28">
        <Reveal>
          <h2 className="max-w-2xl font-display text-3xl leading-tight sm:text-4xl">
            We publish the formula structure on every product page because
            transparency is part of the product.
          </h2>
        </Reveal>
      </section>
    </main>
  );
}
