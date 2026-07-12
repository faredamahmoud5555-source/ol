
"use client";

import HeroContent from "./HeroContent";
import HeroBottle from "./HeroBottle";

export default function Hero() {
  return (
<section className="relative min-h-[108vh] overflow-hidden bg-[#F6F3EE]">

      {/* Background Light */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 75% 50%, #F6F3EE, transparent 55%)",
        }}
      />

      {/* Soft Grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
        }}
      />

<div className="relative z-10 mx-auto flex min-h-[108vh] flex-col lg:flex-row items-center justify-center lg:justify-between max-w-[1550px] px-6 md:px-16 lg:px-24">

  {/* Left */}
  <div className="flex-1">
    <HeroContent />
  </div>

  {/* Right */}
  <div className="flex-[1.45] lg:pl-12">
    <HeroBottle />
  </div>

</div>

    </section>
  );
}