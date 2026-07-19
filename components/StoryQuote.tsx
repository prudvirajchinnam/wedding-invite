"use client";

import { motion } from "framer-motion";
import { couple, storyQuote } from "@/content";
import { FloralDivider } from "./FloralDivider";

export function StoryQuote() {
  return (
    <section className="bg-cream px-6 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-xl text-center"
      >
        <FloralDivider className="mx-auto mb-8 h-5 w-32 text-sage-deep" />
        <p className="font-display text-xl italic leading-relaxed text-plum sm:text-2xl">
          &ldquo;{storyQuote.quote}&rdquo;
        </p>
        <p className="mt-6 font-script text-xl text-plum-soft">
          With love,{" "}
          <span className="font-names text-2xl text-rose-deep">
            {couple.groomName} &amp; {couple.brideName}
          </span>
        </p>
      </motion.div>
    </section>
  );
}
