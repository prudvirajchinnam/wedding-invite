"use client";

import { motion } from "framer-motion";
import { couple, heroSection, weddingDate } from "@/content";
import { Petals } from "./Petals";
import { FloralDivider } from "./FloralDivider";
import { LeafCorner } from "./LeafCorner";
import { HangingBells } from "./HangingBells";

// Everything in the hero stays hidden until the visitor taps the opening
// gate. `revealed` flips true at that moment and this stagger plays once.
export function Hero({ revealed }: { revealed: boolean }) {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blush via-cream to-cream px-6 py-24 text-center">
      {revealed && <Petals />}

      {/* draping banana-leaf corners */}
      <LeafCorner className="pointer-events-none absolute -left-2 -top-2 h-28 w-24 text-sage-deep/70 sm:h-40 sm:w-32" />
      <LeafCorner
        flip
        className="pointer-events-none absolute -right-2 -top-2 h-28 w-24 text-sage-deep/70 sm:h-40 sm:w-32"
      />

      {/* hanging bells */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.8 }}
        className="absolute top-8 text-gold-deep sm:top-10"
      >
        <HangingBells className="h-12 w-32 sm:h-14 sm:w-40" />
      </motion.div>

      {/* soft ambient blobs */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sage/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mt-16 font-body text-xs tracking-[0.35em] text-plum-soft uppercase sm:mt-14"
      >
        {heroSection.eyebrow}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="mt-6 flex flex-col items-center"
      >
        {/* groom first, then bride, per request */}
        <span className="font-names text-5xl text-rose-deep sm:text-7xl">
          {couple.groomName}
        </span>
        <span className="my-2 font-display text-2xl italic text-gold-deep sm:text-3xl">
          &amp;
        </span>
        <span className="font-names text-5xl text-rose-deep sm:text-7xl">
          {couple.brideName}
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={revealed ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.65 }}
        className="mt-8"
      >
        <FloralDivider className="mx-auto h-5 w-40 text-gold-deep" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.8, delay: 0.75 }}
        className="mt-8 max-w-md font-display text-lg italic text-plum sm:text-xl"
      >
        {heroSection.closingLine}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="mt-4 flex flex-col items-center gap-1 font-body text-sm tracking-wide text-plum-soft"
      >
        <span>
          {weddingDate.displayDate} at {weddingDate.muhurtham}
        </span>
        <span className="font-display italic text-plum">{weddingDate.venueName}</span>
        <span>{weddingDate.venueAddress}</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={revealed ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="mt-6 inline-flex items-center rounded-full border border-gold/40 bg-white/50 px-5 py-2 font-body text-xs tracking-[0.2em] text-gold-deep uppercase backdrop-blur-sm"
      >
        {couple.hashtag}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={
          revealed
            ? { opacity: [0, 1, 1, 0.4, 1] }
            : { opacity: 0 }
        }
        transition={{
          duration: 2,
          delay: 1.6,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0.5,
        }}
        className="absolute bottom-8 font-body text-[11px] tracking-[0.3em] text-plum-soft/70 uppercase"
      >
        Scroll to explore
      </motion.div>
    </section>
  );
}
