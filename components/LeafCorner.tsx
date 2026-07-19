// A single draping leaf cluster, meant to sit in a corner. Flip with the
// `flip` prop to mirror it for the opposite corner.
export function LeafCorner({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 120 140"
      className={className}
      aria-hidden="true"
      fill="none"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      {[
        { d: "M0 0 C30 10 45 35 40 65 C38 80 25 90 10 88 C20 70 18 40 0 20 Z", op: 0.9 },
        { d: "M0 10 C25 25 35 50 28 78 C25 92 12 98 -2 94 C10 78 8 48 -8 25 Z", op: 0.65 },
        { d: "M-5 25 C15 42 22 62 15 84 C12 95 2 100 -10 96 C0 82 0 58 -14 38 Z", op: 0.45 },
      ].map((leaf, i) => (
        <path
          key={i}
          d={leaf.d}
          fill="currentColor"
          fillOpacity={leaf.op}
          transform={`translate(${i * 6} 0)`}
        />
      ))}
    </svg>
  );
}
