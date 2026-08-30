import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** Final numeric value to count up to */
  target: number;
  /** Prefix shown before the number (e.g. "$") */
  prefix?: string;
  /** Suffix shown after the number (e.g. "+", "M+", "%") */
  suffix?: string;
  /** Use thousands separators (e.g. 6,000) */
  thousands?: boolean;
  /** Duration of the count-up animation in ms */
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

const CountUp = ({
  target,
  prefix = "",
  suffix = "",
  thousands = false,
  duration = 2000,
  className,
  style,
}: CountUpProps) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const animate = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = easeOutExpo(progress);
              setValue(Math.round(eased * target));
              if (progress < 1) requestAnimationFrame(animate);
              else setValue(target);
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  const formatted = thousands
    ? value.toLocaleString("en-US")
    : value.toString();

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};

export default CountUp;
