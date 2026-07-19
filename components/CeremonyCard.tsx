"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Ceremony } from "@/content";
import { CeremonyIcon } from "./CeremonyIcon";
import { googleCalendarUrl } from "@/lib/calendar";

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
      className="mx-auto w-full max-w-sm [perspective:1200px]"
    >
      <button
        type="button"
        onClick={() => setRevealed((r) => !r)}
        aria-pressed={revealed}
        aria-label={`${revealed ? "Hide" : "Reveal"} details for ${ceremony.title}`}
        className="group relative block h-72 w-full max-w-sm cursor-pointer text-left sm:h-80"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: revealed ? 180 : 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0.2, 0.2, 1] }}
        >
          {/* FRONT */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center rounded-2xl border ${styles.border} ${styles.bg} p-6 text-center shadow-sm [backface-visibility:hidden]`}
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
              className={`mt-6 inline-flex items-center gap-2 rounded-full border ${styles.border} bg-white/50 px-4 py-1.5 font-body text-[11px] tracking-[0.15em] ${styles.text} uppercase backdrop-blur-sm transition-transform group-hover:scale-105`}
            >
              {ceremony.revealLabel}
            </span>
          </div>

          {/* BACK */}
          <div
            className={`absolute inset-0 flex flex-col justify-between overflow-y-auto rounded-2xl border ${styles.border} ${styles.bg} p-6 shadow-sm [backface-visibility:hidden]`}
            style={{ transform: "rotateY(180deg)" }}
          >
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

            <a
              href={googleCalendarUrl(ceremony)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`mt-4 inline-flex items-center justify-center rounded-full border ${styles.border} bg-white/70 px-4 py-2 font-body text-xs tracking-wide ${styles.text} transition-colors hover:bg-white`}
            >
              + Add to calendar
            </a>
          </div>
        </motion.div>
      </button>
    </motion.div>
  );
}
