"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MATERIALS = [
  { name: "Orris Butter", origin: "Florence, Italy", note: "Aged five years before distillation" },
  { name: "Tobacco Leaf Absolute", origin: "Bursa, Türkiye", note: "Hand-cured, single grower" },
  { name: "Sandalwood", origin: "Mysore, India", note: "Sourced through certified replanting" },
  { name: "Labdanum Resin", origin: "Crete, Greece", note: "Hand-harvested from rockrose" },
  { name: "Vetiver Root", origin: "Léogâne, Haiti", note: "Slow steam distillation" },
  { name: "Ambroxan", origin: "Laboratory-derived", note: "Sustainable alternative to ambergris" },
];

export function IngredientsShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    const ctx = gsap.context(() => {
      const distance = track.scrollWidth - section.clientWidth;
      if (distance <= 0) return;

      gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-espresso text-bone">
      <div className="container-edit pt-24">
        <p className="text-eyebrow text-bone/50">Raw Materials</p>
        <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight sm:text-5xl">
          Six materials, traced to source.
        </h2>
      </div>

      <div ref={trackRef} className="mt-16 flex w-max gap-16 pb-28 pl-[max(1.5rem,4vw)] pr-[20vw]">
        {MATERIALS.map((m, i) => (
          <div key={m.name} className="w-[70vw] shrink-0 sm:w-[38vw] lg:w-[26vw]">
            <span className="font-display text-6xl text-bone/20">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-6 font-display text-2xl">{m.name}</h3>
            <p className="mt-2 text-eyebrow text-brass-soft">{m.origin}</p>
            <p className="mt-3 text-sm leading-relaxed text-bone/60">{m.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
