"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { motion } from "framer-motion";

// Low resolution is intentional and fine here — this drives a CSS mask
// that gets stretched to 100% of the card via mask-size, so it doesn't
// need to be pixel-perfect, just cheap to regenerate on every drag frame.
const MASK_W = 80;
const MASK_H = 112;
const ERASE_RADIUS = 11;
const REVEAL_FRACTION = 0.45; // auto-complete once ~45% is scratched away

export function ScratchOverlay({
  children,
  className = "",
  onRevealed,
}: {
  children: ReactNode;
  className?: string;
  onRevealed: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDrawingRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const [maskUrl, setMaskUrl] = useState<string | null>(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = MASK_W;
    canvas.height = MASK_H;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      // Solid white = fully visible under a CSS mask; erasing to
      // transparent below reveals the content underneath.
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, MASK_W, MASK_H);
    }
    canvasRef.current = canvas;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client-only canvas init, not derived render state
    setMaskUrl(canvas.toDataURL());

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const completeReveal = () => {
    setFading(true);
    window.setTimeout(onRevealed, 300);
  };

  const scheduleMaskUpdate = () => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;

      setMaskUrl(canvas.toDataURL());

      const { data } = ctx.getImageData(0, 0, MASK_W, MASK_H);
      let erased = 0;
      for (let i = 3; i < data.length; i += 4) {
        if (data[i] < 20) erased++;
      }
      if (erased / (MASK_W * MASK_H) > REVEAL_FRACTION) {
        completeReveal();
      }
    });
  };

  const eraseAt = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !container || !ctx) return;

    const rect = container.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * MASK_W;
    const y = ((clientY - rect.top) / rect.height) * MASK_H;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, ERASE_RADIUS, 0, Math.PI * 2);
    ctx.fill();
    scheduleMaskUpdate();
  };

  const handlePointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    isDrawingRef.current = true;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    eraseAt(e.clientX, e.clientY);
  };

  const handlePointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDrawingRef.current) return;
    eraseAt(e.clientX, e.clientY);
  };

  const stopDrawing = () => {
    isDrawingRef.current = false;
  };

  return (
    <motion.div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDrawing}
      onPointerLeave={stopDrawing}
      // A plain tap/click also completes the reveal outright (fading, not
      // flipping) — so the content is always reachable even without a drag
      // gesture, while dragging across it still gives the genuine
      // scratch-off feel for anyone who tries it.
      onClick={completeReveal}
      animate={{ opacity: fading ? 0 : 1 }}
      transition={{ duration: 0.3 }}
      className={`${className} cursor-pointer touch-none select-none`}
      style={
        maskUrl
          ? {
              WebkitMaskImage: `url(${maskUrl})`,
              maskImage: `url(${maskUrl})`,
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
