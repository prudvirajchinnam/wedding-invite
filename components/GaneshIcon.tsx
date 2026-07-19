// An original, simplified line-art silhouette evoking Lord Ganesh —
// traditionally placed at the opening of Indian wedding invitations as an
// auspicious blessing. Drawn from scratch in this project's own gold
// linework style, not a reproduction of any existing artwork, idol, or photo.
export function GaneshIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" fill="none">
      {/* crown */}
      <path
        d="M38 22 C38 16 44 12 50 12 C56 12 62 16 62 22"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="50" cy="10" r="2.4" fill="currentColor" fillOpacity="0.85" />

      {/* head */}
      <circle cx="50" cy="34" r="14" fill="currentColor" fillOpacity="0.85" />

      {/* ears */}
      <path
        d="M32 30 C24 28 22 38 30 42 C34 44 38 40 36 34 Z"
        fill="currentColor"
        fillOpacity="0.7"
      />
      <path
        d="M68 30 C76 28 78 38 70 42 C66 44 62 40 64 34 Z"
        fill="currentColor"
        fillOpacity="0.7"
      />

      {/* trunk, curling to one side */}
      <path
        d="M46 42 C44 50 40 54 42 62 C43 67 48 68 49 63"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* body */}
      <path
        d="M34 58 C34 50 66 50 66 58 C66 76 58 86 50 86 C42 86 34 76 34 58 Z"
        fill="currentColor"
        fillOpacity="0.65"
      />

      {/* modak (sweet) held below, small circular accent */}
      <circle cx="50" cy="72" r="4" fill="currentColor" fillOpacity="0.9" />
    </svg>
  );
}
