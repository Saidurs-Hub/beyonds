// Pure helpers behind the Shondhibazar feature article's count-up stat numbers.
// They live apart from the component so parsing and formatting can be tested
// without rendering anything.

export interface StatParts {
  prefix: string;
  value: number;
  suffix: string;
}

// Splits a display value such as "1,200+", "400+" or "BDT 62M" into the text
// before the number, the number itself, and the text after it.
export const parseStat = (raw: string): StatParts => {
  const match = raw.match(/^([^\d]*)([\d,]+)(.*)$/);
  if (!match) return { prefix: raw, value: 0, suffix: "" };
  const [, prefix, digits, suffix] = match;
  return { prefix, value: Number(digits.replace(/,/g, "")), suffix };
};

// Renders an intermediate count with the original prefix, suffix and comma
// grouping, so the number never changes shape mid-animation.
export const formatStat = (parts: StatParts, count: number): string =>
  `${parts.prefix}${count.toLocaleString("en-US")}${parts.suffix}`;

// Ease-out cubic: quick start, gentle stop.
export const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

// True when the visitor has asked the system to limit motion.
export const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
