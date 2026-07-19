export function HangingBells({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 90"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {/* string */}
      <path
        d="M10 0 Q80 40 150 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.6"
        fill="none"
      />
      {[
        { x: 30, y: 20, r: 7 },
        { x: 58, y: 33, r: 9 },
        { x: 80, y: 38, r: 10 },
        { x: 102, y: 33, r: 9 },
        { x: 130, y: 20, r: 7 },
      ].map((bell, i) => (
        <g key={i}>
          <line
            x1={bell.x}
            y1={bell.y - bell.r - 6}
            x2={bell.x}
            y2={bell.y - bell.r}
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.6"
          />
          <path
            d={`M${bell.x - bell.r} ${bell.y} a${bell.r} ${bell.r} 0 1 1 ${bell.r * 2} 0 z`}
            fill="currentColor"
            fillOpacity="0.85"
          />
          <circle cx={bell.x} cy={bell.y + bell.r + 3} r="1.6" fill="currentColor" />
        </g>
      ))}
    </svg>
  );
}
