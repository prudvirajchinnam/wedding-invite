// An original, simplified line-art silhouette evoking the traditional
// Radha-Krishna motif common on Indian wedding invites — two figures, a
// flute, a peacock-feather crown accent. Drawn from scratch in this
// project's own gold linework style, not a reproduction of any existing
// artwork or photo.
export function RadhaKrishnaIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" fill="none">
      {/* Krishna figure (left) */}
      <g>
        <circle cx="38" cy="30" r="7" fill="currentColor" fillOpacity="0.9" />
        {/* peacock feather crown accent */}
        <path
          d="M38 20 C40 14 44 12 43 6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="43" cy="6" r="2" fill="currentColor" fillOpacity="0.8" />
        <path
          d="M28 78 C26 58 30 44 38 40 C46 44 50 58 48 78 Z"
          fill="currentColor"
          fillOpacity="0.75"
        />
        {/* flute, angled across both figures */}
        <path
          d="M22 52 L58 46"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      {/* Radha figure (right) */}
      <g>
        <circle cx="64" cy="28" r="7" fill="currentColor" fillOpacity="0.9" />
        {/* dupatta/veil drape */}
        <path
          d="M55 24 C50 30 50 40 56 46"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M54 78 C51 56 56 42 64 38 C72 42 77 56 74 78 Z"
          fill="currentColor"
          fillOpacity="0.6"
        />
      </g>

      {/* ground flourish */}
      <path
        d="M20 82 C40 88 60 88 80 82"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeOpacity="0.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
