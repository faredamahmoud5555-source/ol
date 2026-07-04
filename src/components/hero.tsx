"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-10 flex flex-col items-start justify-between gap-8 border-t border-bone/15 pt-8 sm:flex-row sm:items-end"
        >
          <p className="max-w-md text-sm leading-relaxed text-bone/65">
            Each composition is built in small batches by a single perfumer,
            revised over months rather than launched to a season. No
            campaigns. No limited editions — only the work.
          </p>
          <Magnetic>
            <Link
              href="/collection"
              className="text-eyebrow inline-flex h-14 items-center border border-bone/40 px-9 text-bone transition-colors hover:border-bone hover:bg-bone hover:text-ink"
            >
              Enter the Collection
            </Link>
          </Magnetic>
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
