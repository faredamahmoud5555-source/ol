"use client";

import { motion } from "framer-motion";

export function MeterBar({ label, value, max = 5 }: { label: string; value: number; max?: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-ink/50">
        <span className="text-eyebrow text-ink/60">{label}</span>
      </div>
      <div className="mt-2 flex gap-1.5">
        {Array.from({ length: max }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            style={{ transformOrigin: "left" }}
            className={i < value ? "h-1.5 flex-1 bg-brass" : "h-1.5 flex-1 bg-ink/10"}
          />
        ))}
      </div>
    </div>
  );
}
