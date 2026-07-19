"use client";

import { motion } from "framer-motion";
import { couple, media } from "@/content";
import { Photo } from "./Photo";
import { FloralDivider } from "./FloralDivider";

export function CouplePortraits() {
  return (
    <section className="bg-cream px-6 pb-4 pt-16 sm:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="mx-auto flex max-w-lg flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10"
      >
        <div className="flex flex-col items-center gap-3">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-md ring-1 ring-gold/40 sm:h-44 sm:w-44">
            <Photo
              src={media.bride.src}
              alt={media.bride.alt}
              placeholderInitial={couple.brideName[0]}
            />
          </div>
          <span className="font-script text-2xl text-rose-deep sm:text-3xl">
            {couple.brideName}
          </span>
        </div>

        <FloralDivider className="hidden h-5 w-10 shrink-0 rotate-90 text-gold-deep sm:block" />
        <span className="font-display text-xl italic text-gold-deep sm:hidden">
          &amp;
        </span>

        <div className="flex flex-col items-center gap-3">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-md ring-1 ring-gold/40 sm:h-44 sm:w-44">
            <Photo
              src={media.groom.src}
              alt={media.groom.alt}
              placeholderInitial={couple.groomName[0]}
            />
          </div>
          <span className="font-script text-2xl text-sage-deep sm:text-3xl">
            {couple.groomName}
          </span>
        </div>
      </motion.div>
    </section>
  );
}
