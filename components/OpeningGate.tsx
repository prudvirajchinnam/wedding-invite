"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail } from "lucide-react";
import { couple, media, openingGate } from "@/content";
import { FloralDivider } from "./FloralDivider";
import { Photo } from "./Photo";
import { HangingBells } from "./HangingBells";

// Normalized (0-1) heart outline, applied via an SVG <clipPath> using
// objectBoundingBox units so it scales correctly to any element size.
// (CSS clip-path: path() alone interprets coordinates as literal pixels,
// not fractions — using it directly with 0-1 values clips almost nothing
// visible, which is why the heart previously disappeared entirely.)
const HEART_PATH =
  "M0.5,1 C0.5,1 0.05,0.6 0.05,0.32 C0.05,0.12 0.22,0 0.37,0 C0.46,0 0.5,0.08 0.5,0.18 C0.5,0.08 0.54,0 0.63,0 C0.78,0 0.95,0.12 0.95,0.32 C0.95,0.6 0.5,1 0.5,1 Z";

export function OpeningGate({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blush via-cream to-blush px-6 text-center"
      exit={{ opacity: 0, scale: 1.08 }}
      transition={{ duration: 0.8, ease: [0.4, 0.2, 0.2, 1] }}
    >
      {/* Hidden SVG solely to define the heart clip-path shape, referenced
          below via clip-path: url(#heart-clip). objectBoundingBox units mean
          the 0-1 coordinates scale to whatever size the target element is. */}
      <svg width="0" height="0" className="absolute">
        <clipPath id="heart-clip" clipPathUnits="objectBoundingBox">
          <path d={HEART_PATH} />
        </clipPath>
      </svg>

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
        className="group flex flex-col items-center gap-6 focus-visible:outline-offset-8"
      >
        <motion.span
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex h-44 w-44 items-start justify-center pt-9 sm:h-52 sm:w-52 sm:pt-11"
        >
          {/* heart-shaped frame, filled with the monogram or a photo */}
          <span
            className="absolute inset-0 border border-gold/50 bg-white/40 shadow-sm backdrop-blur-sm"
            style={{ clipPath: "url(#heart-clip)" }}
          />
          <span
            className="relative flex h-full w-full items-start justify-center overflow-hidden pt-9 sm:pt-11"
            style={{ clipPath: "url(#heart-clip)" }}
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
                {/* circular medallion, standing in for "&" — unchanged */}
                <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-gold-deep/60 bg-sage-deep/90 shadow-inner sm:h-12 sm:w-12">
                  <Image
                    src={media.radhaKrishna}
                    alt="Radha Krishna"
                    fill
                    className="object-cover object-top"
                    sizes="48px"
                  />
                </span>
                {openingGate.monogramRight}
              </span>
            )}
          </span>
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
