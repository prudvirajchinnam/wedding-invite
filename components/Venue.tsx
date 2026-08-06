"use client";

import { motion } from "framer-motion";
import { venueSection } from "@/content";
import { FloralDivider } from "./FloralDivider";

export function Venue() {
  return (
    <section className="bg-sage/15 px-6 py-20 text-center sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-lg"
      >
        <span className="font-body text-xs tracking-[0.3em] text-plum-soft uppercase">
          Join us at
        </span>
        <h2 className="mt-3 font-display text-3xl italic text-plum sm:text-4xl">
          {venueSection.title}
        </h2>
        <FloralDivider className="mx-auto mt-5 h-5 w-28 text-sage-deep" />

        <div className="mt-8 space-y-10">
          {venueSection.venues.map((venue) => (
            <div key={venue.label}>
              <span className="font-body text-xs tracking-[0.25em] text-sage-deep uppercase">
                {venue.label}
              </span>
              <p className="mt-2 font-display text-xl italic text-plum">{venue.name}</p>
              <p className="mt-2 font-body text-sm text-plum-soft">{venue.address}</p>
              
                href={venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-sage-deep/40 bg-white/70 px-6 py-2.5 font-body text-xs tracking-[0.15em] text-sage-deep uppercase transition-colors hover:bg-white"
              >
                Get directions
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}