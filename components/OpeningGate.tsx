"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { couple, media, openingGate } from "@/content";
import { FloralDivider } from "./FloralDivider";
import { Photo } from "./Photo";
import { HangingBells } from "./HangingBells";
import { RadhaKrishnaIcon } from "./RadhaKrishnaIcon";

export function OpeningGate({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blush via-cream to-blush px-6 text-center"
      exit={{ opacity: 0, scale: 1.08 }}
      transition={{ duration: 0.8, ease: [0.4, 0.2, 0.2, 1] }}
    >
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-sage/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-rose/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-4 text-gold-deep"
      >
        <HangingBells className="h-10 w-28" />
      </motion.div>

      <motion.button
        type="button"
        onClick={onOpen}
        aria-label={openingGate.tapPrompt}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        whileTap={{ scale: 0.94 }}
        className="group flex flex-col items-center gap-6 rounded-full focus-visible:outline-offset-8"
      >
        <motion.span
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border border-gold/50 bg-white/40 shadow-sm backdrop-blur-sm sm:h-48 sm:w-48"
        >
          {media.openingPhoto ? (
            <Photo
              src={media.openingPhoto}
              alt={`${couple.groomName} and ${couple.brideName}`}
              placeholderInitial={openingGate.monogramLeft}
            />
          ) : (
            <span className="flex items-center gap-2 font-names text-4xl text-rose-deep sm:gap-3 sm:text-5xl">
              {openingGate.monogramLeft}
              {/* circular medallion, standing in for "&" — original line-art,
                  not a reproduction of any existing seal or photo */}
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-deep/60 bg-sage-deep/90 p-1.5 shadow-inner sm:h-11 sm:w-11">
                <RadhaKrishnaIcon className="h-full w-full text-gold" />
              </span>
              {openingGate.monogramRight}
            </span>
          )}
        </motion.span>

        <FloralDivider className="h-4 w-24 text-gold-deep" />

        <span className="flex items-center gap-2 font-body text-xs tracking-[0.3em] text-plum-soft uppercase transition-colors group-hover:text-plum">
          <Mail className="h-4 w-4" aria-hidden="true" />
          {openingGate.tapPrompt}
        </span>
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-10 max-w-xs font-display text-sm italic text-plum-soft/70"
      >
        {openingGate.hostNote}
      </motion.p>
    </motion.div>
  );
}
