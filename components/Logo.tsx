interface LogoProps {
  /** "dark" = ink mark for light surfaces, "light" = white mark for dark surfaces */
  variant?: "dark" | "light";
  withWordmark?: boolean;
  markSize?: number;
}

/** L-bracket brand mark: three ink/white brackets, one accent bracket. */
export function Logo({
  variant = "dark",
  withWordmark = true,
  markSize = 22,
}: LogoProps) {
  const bracket = variant === "dark" ? "#181A18" : "#FFFFFF";
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        width={markSize}
        height={markSize}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path fill={bracket} opacity={0.85} d="M2 2h6v2H4v4H2V2z" />
        <path fill={bracket} opacity={0.85} d="M16 2h6v6h-2V4h-4V2z" />
        <path fill={bracket} opacity={0.85} d="M2 16h2v4h4v2H2v-6z" />
        <path fill="#FFCB05" d="M20 16h2v6h-6v-2h4V16z" />
      </svg>
      {withWordmark ? (
        <span className="text-[15px] font-bold tracking-head">
          Second Brain
        </span>
      ) : null}
    </span>
  );
}
