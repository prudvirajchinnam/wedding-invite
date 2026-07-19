"use client";

import { motion } from "framer-motion";
import { ceremonies } from "@/content";
import { CeremonyCard } from "./CeremonyCard";
import { FloralDivider } from "./FloralDivider";

export function Festivities() {
  return (
    <section id="festivities" className="bg-blush/60 px-6 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="font-body text-xs tracking-[0.3em] text-plum-soft uppercase">
          {ceremonies.length} days of celebration
        </span>
        <h2 className="mt-3 font-display text-4xl italic text-plum sm:text-5xl">
          The Festivities
        </h2>
        <FloralDivider className="mx-auto mt-6 h-5 w-32 text-rose-deep" />
        <p className="mt-4 font-body text-sm text-plum-soft">
          Tap a card to reveal the details.
        </p>
      </motion.div>

      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
        {ceremonies.map((ceremony, i) => (
          <CeremonyCard key={ceremony.id} ceremony={ceremony} index={i} />
        ))}
      </div>
    </section>
  );
}
