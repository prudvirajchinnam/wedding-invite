"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { media } from "@/content";
import { FloralDivider } from "./FloralDivider";

const AUTO_ADVANCE_MS = 4500;

export function Gallery() {
  const photos = media.gallery;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (photos.length <= 1 || paused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % photos.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [photos.length, paused]);

  if (photos.length === 0) return null;

  const goTo = (i: number) => setIndex(((i % photos.length) + photos.length) % photos.length);

  return (
    <section className="bg-cream px-6 py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="font-display text-3xl italic text-plum sm:text-4xl">
          A Few of Our Favourites
        </h2>
        <FloralDivider className="mx-auto mt-5 h-5 w-28 text-rose-deep" />

        <div
          className="relative mx-auto mt-10 aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border border-gold/25 shadow-sm"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={photos[index].src}
                alt={photos[index].alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 90vw, 512px"
                priority={index === 0}
              />
            </motion.div>
          </AnimatePresence>

          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-plum shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-plum shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {photos.length > 1 && (
          <div className="mt-4 flex items-center justify-center gap-2">
            {photos.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to photo ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-gold-deep" : "w-2 bg-gold-deep/30"
                }`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}
