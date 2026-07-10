"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { perfumes } from "./perfumes";

export default function HeroBottle() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const bottleRef = useRef<HTMLButtonElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const reflectionRef = useRef<HTMLDivElement>(null);

  const perfume = perfumes[currentIndex];

  useEffect(() => {
    if (!bottleRef.current) return;

    gsap.to(bottleRef.current, {
      y: -12,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    if (shadowRef.current) {
      gsap.to(shadowRef.current, {
        scaleX: 0.9,
        opacity: 0.18,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    if (reflectionRef.current) {
      gsap.set(reflectionRef.current, {
        x: -260,
      });

      gsap.to(reflectionRef.current, {
        x: 260,
        duration: 2.6,
        repeat: -1,
        repeatDelay: 1.8,
        ease: "power1.inOut",
      });
    }
  }, []);




  const nextBottle = () => {
  if (
    !bottleRef.current ||
    !glowRef.current ||
    isAnimating
  ) {
    return;
  }

  setIsAnimating(true);

  const tl = gsap.timeline({
    onComplete: () => {
      setIsAnimating(false);
    },
  });

  tl.to(
    bottleRef.current,
    {
      opacity: 0,
      scale: 0.88,
      rotate: 10,
      y: -35,
      duration: 0.35,
      ease: "power2.in",
      onComplete: () => {
        setCurrentIndex((prev) => (prev + 1) % perfumes.length);
      },
    },
    0
  );

  tl.to(
    glowRef.current,
    {
      scale: 1.15,
      opacity: 0.5,
      duration: 0.25,
    },
    0
  );

  tl.fromTo(
    bottleRef.current,
    {
      opacity: 0,
      scale: 0.88,
      rotate: -10,
      y: 80,
    },
    {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      duration: 0.7,
      ease: "power4.out",
    }
  );

  tl.to(
    glowRef.current,
    {
      scale: 1,
      opacity: 0.32,
      duration: 0.6,
      ease: "power2.out",
    },
    "<"
  );
};

const handleMouseMove = (
  e: React.MouseEvent<HTMLButtonElement>
) => {
  if (!bottleRef.current || !glowRef.current) return;

  const rect = bottleRef.current.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateY = ((x / rect.width) - 0.5) * 16;
  const rotateX = -((y / rect.height) - 0.5) * 16;

  gsap.to(bottleRef.current, {
    rotateY,
    rotateX,
    x: ((x / rect.width) - 0.5) * 10,
    y: ((y / rect.height) - 0.5) * 6,
    duration: 0.45,
    ease: "power3.out",
    transformPerspective: 1400,
    transformOrigin: "center center",
  });

  gsap.to(glowRef.current, {
    x: rotateY * 5,
    y: rotateX * -5,
    scale: 1.05,
    duration: 0.45,
    ease: "power3.out",
  });
};

const handleMouseLeave = () => {
  if (!bottleRef.current || !glowRef.current) return;

  gsap.to(bottleRef.current, {
    rotateX: 0,
    rotateY: 0,
    x: 0,
    y: 0,
    duration: 0.6,
    ease: "power3.out",
  });

  gsap.to(glowRef.current, {
    x: 0,
    y: 0,
    scale: 1,
    duration: 0.6,
    ease: "power3.out",
  });
};
return (
  <div className="relative flex flex-1 items-center justify-center overflow-hidden">

  {/* Glow */}
<div
  ref={glowRef}
  className="pointer-events-none absolute h-[760px] w-[760px] rounded-full blur-[180px]"
  style={{
    background: `radial-gradient(circle, ${perfume.glow} 0%, transparent 0%)`,
    opacity: 0.34,
  }}
/>

    {/* Shadow */}
    <div
      ref={shadowRef}
      className="absolute bottom-[48px] h-[42px] w-[250px] rounded-full bg-black/20 blur-3xl"
    />

    {/* Bottle */}
    <button
      ref={bottleRef}
      onClick={nextBottle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      disabled={isAnimating}
      className="group relative z-20 cursor-pointer outline-none"
    >

      {/* Reflection */}
      <div
        ref={reflectionRef}
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-0
          h-full
          w-16
          -skew-x-12
          bg-white/30
          blur-xl
          z-30
        "
      />

      <Image
        src={perfume.image}
        alt={perfume.name}
        width={900}
        height={1400}
        priority
        draggable={false}
        className="
          relative
          z-20
          w-[330px]
          md:w-[390px]
          lg:w-[460px]
          xl:w-[520px]
          select-none
          transition-all
          duration-500
          group-hover:scale-[1.02]
        "
      />

    </button>

  </div>
)};

  