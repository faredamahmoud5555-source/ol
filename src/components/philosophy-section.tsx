import { Reveal } from "@/components/reveal";
import Image from "next/image";

export function PhilosophySection() {
  return (
    <section className="container-edit py-36">

      <div className="grid items-center gap-24 lg:grid-cols-2">

        {/* LEFT IMAGE */}

        <Reveal>
          <div className="flex justify-center">
  <Image
    src="/blk.jpg"
    alt="Editorial"
    width={1800}
    height={1200}
    priority
    className="w-full max-w-[1600px] h-auto"
  />
</div>




        </Reveal>

        {/* RIGHT CONTENT */}

        <div className="max-w-2xl">

          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.45em] text-black/40">
              Philosophy
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-6xl leading-[1.05] tracking-[-0.03em]">
              Crafted slowly.
              <br />
              Worn forever.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-10 text-lg leading-9 text-black/60">
              We believe a fragrance should become part of your identity,
              not just your collection. Every composition is refined over
              months until every note feels intentional, balanced, and timeless.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-14 flex items-center gap-12">

              <div>
                <p className="text-4xl font-display">25+</p>
                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-black/50">
                  Rare Notes
                </p>
              </div>

              <div>
                <p className="text-4xl font-display">100%</p>
                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-black/50">
                  Authentic
                </p>
              </div>

            </div>
          </Reveal>

        </div>

      </div>

    </section>
  );
}