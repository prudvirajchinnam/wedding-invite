"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Ceremony } from "@/content";
import { CeremonyIcon } from "./CeremonyIcon";
import { icsDataUrl } from "@/lib/calendar";
import { ScratchOverlay } from "./ScratchOverlay";

const accentStyles: Record<
  Ceremony["accent"],
  { bg: string; border: string; text: string; iconBg: string }
> = {
  gold: {
    bg: "bg-gradient-to-br from-[#f3e3c4] to-[#e9cf9c]",
    border: "border-gold-deep/40",
    text: "text-gold-deep",
    iconBg: "bg-gold/20",
  },
  rose: {
    bg: "bg-gradient-to-br from-[#f6e0df] to-[#e9c3c1]",
    border: "border-rose-deep/40",
    text: "text-rose-deep",
    iconBg: "bg-rose/20",
  },
  blush: {
    bg: "bg-gradient-to-br from-[#fdf1f2] to-[#f3d9db]",
    border: "border-blush-deep/60",
    text: "text-rose-deep",
    iconBg: "bg-blush-deep/40",
  },
  sage: {
    bg: "bg-gradient-to-br from-[#e7eee6] to-[#c9d9c7]",
    border: "border-sage-deep/40",
    text: "text-sage-deep",
    iconBg: "bg-sage/20",
  },
  yellow: {
    bg: "bg-gradient-to-br from-[#fff8dc] to-[#fde68a]",
    border: "border-amber-500/40",
    text: "text-amber-700",
    iconBg: "bg-amber-300/30",
  },
};

export function CeremonyCard({
  ceremony,
  index,
}: {
  ceremony: Ceremony;
  index: number;
}) {
  const [revealed, setRevealed] = useState(false);
  const styles = accentStyles[ceremony.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="mx-auto w-full max-w-sm"
    >
      <div
        className={`relative h-72 w-full max-w-sm overflow-hidden rounded-2xl border ${styles.border} ${styles.bg} shadow-sm sm:h-80`}
      >
        {/* DETAILS — always sits underneath, no flip involved */}
        <div className="flex h-full flex-col justify-between p-6">
          <div>
            <span className="font-body text-[11px] tracking-[0.2em] text-plum-soft/80 uppercase">
              {ceremony.day}
            </span>
            <h3 className="mt-1 font-display text-2xl italic text-plum">
              {ceremony.title}
            </h3>
            <p className="font-body text-sm text-plum-soft">{ceremony.subtitle}</p>

            <dl className="mt-4 space-y-1.5 font-body text-sm text-plum">
              <div className="flex gap-2">
                <dt className={`font-medium ${styles.text}`}>Time</dt>
                <dd>{ceremony.time}</dd>
              </div>
              <div className="flex gap-2">
                <dt className={`font-medium ${styles.text}`}>Venue</dt>
                <dd>{ceremony.venue}</dd>
              </div>
              {ceremony.dressCode && (
                <div className="flex gap-2">
                  <dt className={`font-medium ${styles.text}`}>Dress</dt>
                  <dd>{ceremony.dressCode}</dd>
                </div>
              )}
            </dl>

            <p className="mt-3 font-display text-sm italic text-plum-soft">
              &ldquo;{ceremony.note}&rdquo;
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={icsDataUrl(ceremony)}
              onClick={(e) => e.stopPropagation()}
              className={`inline-flex items-center justify-center rounded-full border ${styles.border} bg-white/70 px-4 py-2 font-body text-xs tracking-wide ${styles.text} transition-colors hover:bg-white`}
            >
              + Add to calendar
            </a>
            <a
              href={ceremony.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`inline-flex items-center justify-center rounded-full border ${styles.border} bg-white/70 px-4 py-2 font-body text-xs tracking-wide ${styles.text} transition-colors hover:bg-white`}
            >
              Directions
            </a>
          </div>
        </div>

        {/* COVER — the scratchable layer. Drag across it (or tap) to
            uncover the details underneath; no flip, just a real erase. */}
        {!revealed && (
          <ScratchOverlay
            onRevealed={() => setRevealed(true)}
            className={`absolute inset-0 flex flex-col items-center justify-center ${styles.bg} p-6 text-center`}
          >
            <span className="font-body text-[11px] tracking-[0.25em] text-plum-soft/80 uppercase">
              {ceremony.day.split(",")[0]}
            </span>
            <div className={`mt-4 flex h-16 w-16 items-center justify-center rounded-full ${styles.iconBg}`}>
              <CeremonyIcon id={ceremony.id} className={`h-9 w-9 ${styles.text}`} />
            </div>
            <h3 className="mt-4 font-display text-3xl italic text-plum">
              {ceremony.title}
            </h3>
            <span
              className={`mt-6 inline-flex items-center gap-2 rounded-full border ${styles.border} bg-white/50 px-4 py-1.5 font-body text-[11px] tracking-[0.15em] ${styles.text} uppercase backdrop-blur-sm`}
            >
              {ceremony.revealLabel}
            </span>
          </ScratchOverlay>
        )}
      </div>
    </motion.div>
  );
}
