"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import Image from "next/image";



import { Magnetic } from "@/components/magnetic";

export function Hero() {
  return (
    <section className="relative flex h-screen min-h-[720px] items-end overflow-hidden bg-ink text-bone">
      {/* Ambient gradient — no photography, a slow tonal wash standing in for studio light */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 20%, rgba(168,137,90,0.16), transparent 60%), linear-gradient(180deg, #1c1712 0%, #15120e 55%, #0f0d0a 100%)",
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, transparent 0 2px, rgba(247,244,238,0.6) 2px 3px, transparent 3px 60px)",
        }}
        initial={{ x: 0 }}
        animate={{ x: [-40, 40, -40] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      <div className="container-edit relative z-10 pb-24 pt-40">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-eyebrow text-bone/60"
        >
          Nine Compositions — No. 001–009
        </motion.p>

        <div className="mt-6 overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[13vw] leading-[0.92] tracking-tight sm:text-[9vw] lg:text-[6.4vw]"
          >
            Fragrance,
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[13vw] italic leading-[0.92] tracking-tight text-brass-soft sm:text-[9vw] lg:text-[6.4vw]"
          >
            unhurried.
          </motion.h1>
        </div>

<motion.div
  className="absolute right-10 top-1/2 -translate-y-1/2 z-30 hidden lg:block"
  initial={{
    opacity: 0,
    scale: 0.9,
    x: 100,
  }}
  animate={{
    opacity: 1,
    scale: 1,
    x: 0,
    y: [0, -15, 0],
    rotate: [0, -1, 1, 0],
  }}
  transition={{
    opacity: { duration: 1.2, delay: 0.5 },
    scale: { duration: 1.2, delay: 0.5 },
    x: { duration: 1.2, delay: 0.5 },
    y: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
    rotate: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
>
  {/* Glow */}
  <div className="absolute left-1/2 top-1/2 -z-10 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 blur-[140px]" />

  
  
</motion.div>

















  

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 text-bone/50 sm:flex"
      >
        <span className="text-eyebrow">Scroll</span>
        <motion.span
          className="h-10 w-px bg-bone/40"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
