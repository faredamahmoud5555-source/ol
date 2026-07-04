type Props = {
  accent: string;
  className?: string;
};

/**
 * AELIA's signature element: a single-line, hand-drafted bottle silhouette.
 * No photography — every fragrance is represented by the same restrained
 * line drawing, distinguished only by cap color and a fill level, echoing
 * apothecary specimen drawings rather than glossy studio product shots.
 */
export function BottleMark({ accent, className }: Props) {
  return (
    <svg
      viewBox="0 0 160 320"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* liquid fill */}
      <rect x="42" y="120" width="76" height="150" fill={accent} opacity="0.14" />
      {/* body */}
      <rect
        x="40"
        y="118"
        width="80"
        height="156"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      {/* shoulder */}
      <path
        d="M56 118 L56 92 C56 84 62 78 70 78 L90 78 C98 78 104 84 104 92 L104 118"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      {/* neck */}
      <rect x="70" y="52" width="20" height="28" stroke="currentColor" strokeWidth="1.25" />
      {/* cap */}
      <rect x="63" y="24" width="34" height="30" rx="1" fill={accent} />
      <rect x="63" y="24" width="34" height="30" rx="1" stroke="currentColor" strokeWidth="1.25" />
      {/* label line */}
      <line x1="52" y1="180" x2="108" y2="180" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
      <line x1="52" y1="188" x2="98" y2="188" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
    </svg>
  );
}
