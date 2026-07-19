type IconProps = { className?: string };

// A small library of hand-drawn-style line icons, one per ceremony flavor.
// Kept intentionally loose and organic rather than geometric/corporate.

function HaldiIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <circle cx="32" cy="34" r="10" fill="currentColor" fillOpacity="0.85" />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <ellipse
          key={deg}
          cx="32"
          cy="34"
          rx="4"
          ry="13"
          fill="currentColor"
          fillOpacity="0.35"
          transform={`rotate(${deg} 32 34)`}
          style={{ transformOrigin: "32px 34px", transformBox: "fill-box" }}
        />
      ))}
      <path
        d="M32 10 C34 14 34 18 32 20 C30 18 30 14 32 10 Z"
        fill="currentColor"
        fillOpacity="0.6"
      />
    </svg>
  );
}

function MehndiIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path
        d="M32 48 C18 38 14 26 22 16 C26 22 30 24 32 22 C34 24 38 22 42 16 C50 26 46 38 32 48 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.15"
      />
      <path
        d="M32 22 C32 30 32 38 32 44"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 3"
      />
      <circle cx="32" cy="18" r="2" fill="currentColor" />
    </svg>
  );
}

function SangeetIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <circle cx="22" cy="44" r="6" fill="currentColor" fillOpacity="0.8" />
      <circle cx="44" cy="40" r="6" fill="currentColor" fillOpacity="0.8" />
      <path
        d="M28 44 V16 L50 12 V38"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

function WeddingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <circle cx="24" cy="32" r="12" stroke="currentColor" strokeWidth="2" />
      <circle cx="40" cy="32" r="12" stroke="currentColor" strokeWidth="2" />
      <path
        d="M32 16 L34 20 L32 24 L30 20 Z"
        fill="currentColor"
        fillOpacity="0.7"
      />
    </svg>
  );
}

const iconMap: Record<string, (p: IconProps) => React.ReactElement> = {
  haldi: HaldiIcon,
  mehndi: MehndiIcon,
  sangeet: SangeetIcon,
  wedding: WeddingIcon,
};

export function CeremonyIcon({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const Icon = iconMap[id] ?? WeddingIcon;
  return <Icon className={className} />;
}
