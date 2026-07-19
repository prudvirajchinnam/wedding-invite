"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const COLORS = ["var(--color-rose)", "var(--color-blush-deep)", "var(--color-gold)"];

type Petal = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  drift: number;
};

function generatePetals(count: number): Petal[] {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 8 + Math.random() * 10,
    duration: 9 + Math.random() * 8,
    delay: Math.random() * 10,
    color: COLORS[i % COLORS.length],
    drift: Math.random() * 60 - 30,
  }));
}

export function Petals({ count = 14 }: { count?: number }) {
  // Generated client-side only, after mount: keeps render pure (no
  // Math.random during render) and avoids any server/client mismatch.
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentionally client-only randomized decoration, not derived render state
    setPetals(generatePetals(count));
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {petals.map((p) => (
        <motion.span
          key={p.id}
          initial={{ y: -40, x: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: "110vh",
            x: [0, p.drift, 0],
            opacity: [0, 0.9, 0.9, 0],
            rotate: 360,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.8,
            backgroundColor: p.color,
            borderRadius: "0% 70% 0% 70%",
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
}
