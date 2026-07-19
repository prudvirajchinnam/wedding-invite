"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { couple, weddingDate } from "@/content";
import { FloralDivider } from "./FloralDivider";

function getTimeLeft() {
  const target = new Date(weddingDate.isoDateTime).getTime();
  const now = Date.now();
  const diff = Math.max(target - now, 0);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isPast: diff <= 0,
  };
}

export function Countdown() {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- ticking clock, not derived render state
    setTime(getTimeLeft());
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = time
    ? [
        { label: "Days", value: time.days },
        { label: "Hours", value: time.hours },
        { label: "Minutes", value: time.minutes },
        { label: "Seconds", value: time.seconds },
      ]
    : [
        { label: "Days", value: 0 },
        { label: "Hours", value: 0 },
        { label: "Minutes", value: 0 },
        { label: "Seconds", value: 0 },
      ];

  return (
    <section className="relative overflow-hidden bg-plum px-6 py-20 text-center sm:py-24">
      <div className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-rose/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-lg"
      >
        <span className="font-body text-xs tracking-[0.3em] text-blush/70 uppercase">
          Counting down to
        </span>
        <h2 className="mt-3 font-script text-4xl text-blush sm:text-5xl">
          {couple.groomName} &amp; {couple.brideName}
        </h2>
        <FloralDivider className="mx-auto mt-5 h-5 w-32 text-gold" />

        {time?.isPast ? (
          <p className="mt-10 font-display text-2xl italic text-blush">
            The celebrations have begun! 🎉
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-4 gap-2 sm:gap-5">
            {units.map((u) => (
              <div
                key={u.label}
                className="rounded-xl border border-gold/30 bg-white/5 px-1.5 py-3 backdrop-blur-sm sm:px-2 sm:py-4"
              >
                <span className="block font-display text-2xl text-gold sm:text-4xl">
                  {String(u.value).padStart(2, "0")}
                </span>
                <span className="mt-1 block font-body text-[9px] tracking-[0.15em] text-blush/70 uppercase sm:text-xs sm:tracking-[0.2em]">
                  {u.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}
