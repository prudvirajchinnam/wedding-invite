"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PETAL_COLORS = [
  "var(--color-rose)",
  "var(--color-rose-deep)",
  "#e59aa8", // a brighter rose-pink, kept distinct from the golden palette
             // so petals never blend into the cream/blush background
];
const LEAF_COLORS = ["var(--color-sage)", "var(--color-sage-deep)"];

type Kind = "petal" | "leaf";

type Particle = {
  id: number;
  kind: Kind;
  left: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  drift: number;
  startRotate: number;
};

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }).map((_, i) => {
    // Favor petals over leaves (3:2) since petals are the more prominent
    // "wedding" motif and were getting visually lost before.
    const kind: Kind = i % 5 < 3 ? "petal" : "leaf";
    const colors = kind === "petal" ? PETAL_COLORS : LEAF_COLORS;
    return {
      id: i,
      kind,
      left: Math.random() * 100,
      size: kind === "petal" ? 9 + Math.random() * 10 : 9 + Math.random() * 8,
      // Faster fall than before (was 9-18s, now 6-12s).
      duration: 6 + Math.random() * 6,
      delay: Math.random() * 6,
      color: colors[i % colors.length],
      drift: Math.random() * 70 - 35,
      startRotate: Math.random() * 360,
    };
  });
}

export function Petals({ count = 20 }: { count?: number }) {
  // Generated client-side only, after mount: keeps render pure (no
  // Math.random during render) and avoids any server/client mismatch.
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentionally client-only randomized decoration, not derived render state
    setParticles(generateParticles(count));
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{ y: -40, x: 0, opacity: 0, rotate: p.startRotate }}
          animate={{
            y: "110vh",
            x: [0, p.drift, 0],
            opacity: [0, 0.85, 0.85, 0],
            rotate: p.startRotate + (p.kind === "leaf" ? 540 : 360),
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
            height: p.kind === "petal" ? p.size * 0.8 : p.size * 1.3,
            backgroundColor: p.color,
            borderRadius: p.kind === "petal" ? "0% 70% 0% 70%" : "0% 100% 0% 100%",
            opacity: 0.75,
          }}
        />
      ))}
    </div>
  );
}
