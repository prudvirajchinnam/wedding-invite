"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { teams } from "@/content";
import { FloralDivider } from "./FloralDivider";

export function TeamPicker() {
  const [pick, setPick] = useState<"bride" | "groom" | null>(null);

  return (
    <section className="bg-cream px-6 py-20 text-center sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-lg"
      >
        <span className="font-body text-xs tracking-[0.3em] text-plum-soft uppercase">
          A little friendly rivalry
        </span>
        <h2 className="mt-3 font-display text-3xl italic text-plum sm:text-4xl">
          Pick your side
        </h2>
        <FloralDivider className="mx-auto mt-5 h-5 w-28 text-rose-deep" />
        <p className="mt-4 font-body text-sm text-plum-soft">{teams.question}</p>

        <div className="mt-8 flex items-center justify-center gap-2 sm:gap-6">
          <button
            type="button"
            onClick={() => setPick("groom")}
            aria-pressed={pick === "groom"}
            className={`flex w-28 flex-col items-center gap-2 rounded-2xl border px-2 py-5 transition-all sm:w-44 sm:px-4 sm:py-6 ${
              pick === "groom"
                ? "border-sage-deep bg-sage/20 shadow-md scale-105"
                : "border-sage-deep/20 bg-white/60 hover:border-sage-deep/50"
            }`}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/30 font-display text-base italic text-sage-deep sm:h-12 sm:w-12 sm:text-lg">
              {teams.groom.name[0]}
            </span>
            <span className="font-body text-[10px] tracking-wide text-plum-soft uppercase sm:text-xs">
              {teams.groom.label}
            </span>
            <span className="font-script text-xl text-sage-deep sm:text-2xl">{teams.groom.name}</span>
          </button>

          <span className="font-display text-sm italic text-plum-soft">vs</span>

          <button
            type="button"
            onClick={() => setPick("bride")}
            aria-pressed={pick === "bride"}
            className={`flex w-28 flex-col items-center gap-2 rounded-2xl border px-2 py-5 transition-all sm:w-44 sm:px-4 sm:py-6 ${
              pick === "bride"
                ? "border-rose-deep bg-rose/20 shadow-md scale-105"
                : "border-rose-deep/20 bg-white/60 hover:border-rose-deep/50"
            }`}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose/30 font-display text-base italic text-rose-deep sm:h-12 sm:w-12 sm:text-lg">
              {teams.bride.name[0]}
            </span>
            <span className="font-body text-[10px] tracking-wide text-plum-soft uppercase sm:text-xs">
              {teams.bride.label}
            </span>
            <span className="font-script text-xl text-rose-deep sm:text-2xl">{teams.bride.name}</span>
          </button>
        </div>

        {pick && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 font-body text-sm text-plum-soft"
          >
            Noted — you&apos;re Team {pick === "bride" ? teams.bride.name : teams.groom.name} 🎉
            Carry this pick into your RSVP below.
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
