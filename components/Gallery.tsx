"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { media } from "@/content";
import { FloralDivider } from "./FloralDivider";

export function Gallery() {
  if (media.gallery.length === 0) return null;

  return (
    <section className="bg-cream px-6 py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-4xl text-center"
      >
        <h2 className="font-display text-3xl italic text-plum sm:text-4xl">
          A Few of Our Favourites
        </h2>
        <FloralDivider className="mx-auto mt-5 h-5 w-28 text-rose-deep" />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {media.gallery.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative aspect-square overflow-hidden rounded-xl border border-gold/20 shadow-sm"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 45vw, 30vw"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
