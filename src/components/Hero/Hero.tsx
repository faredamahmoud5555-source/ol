
"use client";

import HeroContent from "./HeroContent";
import HeroBottle from "./HeroBottle";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#F6F3EE]">

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

      {/* Main Container */}
     <div className="relative z-10 mx-auto flex h-full flex-col lg:flex-row items-center justify-center lg:justify-between max-w-[1550px] px-6 md:px-16 lg:px-24">

        {/* Left */}
        <HeroContent />

        {/* Right */}
        <HeroBottle />

      </div>

    </section>
  );
}