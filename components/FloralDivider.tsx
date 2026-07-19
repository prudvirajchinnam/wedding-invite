export function FloralDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 24"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M0 12 H80"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.5"
      />
      <path
        d="M120 12 H200"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.5"
      />
      <g transform="translate(100 12)">
        <path
          d="M0 -8 C4 -4 4 4 0 8 C-4 4 -4 -4 0 -8 Z"
          fill="currentColor"
          fillOpacity="0.55"
        />
        <path
          d="M-8 0 C-4 -4 4 -4 8 0 C4 4 -4 4 -8 0 Z"
          fill="currentColor"
          fillOpacity="0.35"
        />
        <circle r="2.5" fill="currentColor" />
      </g>
    </svg>
  );
}
