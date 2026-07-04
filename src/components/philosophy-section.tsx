import { Reveal } from "@/components/reveal";

export function PhilosophySection() {
  return (
    <section className="container-edit py-28 sm:py-36">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="text-eyebrow text-ink/50">Philosophy</p>
        </Reveal>
        <div className="lg:col-span-8">
          <Reveal>
            <h2 className="font-display text-3xl leading-[1.25] sm:text-4xl lg:text-[2.6rem]">
              We think of a fragrance the way a tailor thinks of a jacket —
              made to be worn for years, altered rather than replaced, and
              judged by how it holds up on the hundredth wearing, not the
              first.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-xl text-sm leading-relaxed text-ink/60">
              There is no seasonal calendar here. A composition joins the
              collection only when it has been worn, revised, and worn again
              for the better part of a year. We publish the formula&apos;s
              structure — top, heart, base — on every product page, because
              we believe transparency about what you are wearing is part of
              what makes it worth wearing.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
