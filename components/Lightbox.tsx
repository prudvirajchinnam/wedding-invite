"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

export function Lightbox({
  src,
  alt,
  open,
  onClose,
}: {
  src: string;
  alt: string;
  open: boolean;
  onClose: () => void;
}) {
  // Tap the image once to zoom in, tap again to zoom back out.
  const [zoomed, setZoomed] = useState(false);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-plum/90 p-4 backdrop-blur-sm"
          onClick={() => {
            setZoomed(false);
            onClose();
          }}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => {
              setZoomed(false);
              onClose();
            }}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-blush transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative h-[80vh] w-full max-w-2xl overflow-hidden rounded-lg"
            onClick={(e) => {
              e.stopPropagation();
              setZoomed((z) => !z);
            }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className={`cursor-zoom-in object-contain transition-transform duration-300 ${
                zoomed ? "scale-150 cursor-zoom-out" : ""
              }`}
              sizes="90vw"
            />
          </motion.div>

          <span className="absolute bottom-6 font-body text-xs tracking-wide text-blush/60">
            Tap the photo to zoom &middot; tap outside to close
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
