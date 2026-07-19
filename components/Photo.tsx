"use client";

import { useState } from "react";
import Image from "next/image";

// Fills its parent (parent must be `relative` with a defined size/shape).
// If the image at `src` doesn't exist yet, shows a soft placeholder instead
// of a broken-image icon — so the site looks intentional even before real
// photos are uploaded.
export function Photo({
  src,
  alt,
  placeholderInitial,
}: {
  src: string;
  alt: string;
  placeholderInitial: string;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-blush-deep/40">
        <span className="font-script text-4xl text-rose-deep">
          {placeholderInitial}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 640px) 45vw, 220px"
      onError={() => setErrored(true)}
    />
  );
}
