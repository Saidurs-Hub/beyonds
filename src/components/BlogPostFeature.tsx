import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import BlogImage, { resolveBlogImage } from "@/components/BlogImage";
import BlogCard from "@/components/BlogCard";
import type { BlogPost } from "@/data/blogPosts";

interface BlogPostFeatureProps {
  post: BlogPost;
  morePosts: BlogPost[];
}

// Feature article layout, used only by posts that define `feature` in
// blogPosts.ts (currently Shondhibazar). All other posts use BlogPost's
// standard layout.
const STAT_COUNT_MS = 1500;

// Stat number that counts up from 0 the first time it scrolls into view and
// then holds the exact final text. The invisible copy of the finished value
// keeps the box width fixed, so nothing shifts while the number rolls in.
const StatValue = ({ raw }: { raw: string }) => {
  const parts = useMemo(() => parseStat(raw), [raw]);
  const boxRef = useRef<HTMLSpanElement>(null);
  const [text, setText] = useState(() =>
    prefersReducedMotion() ? raw : formatStat(parts, 0),
  );

  useEffect(() => {
    const el = boxRef.current;
    if (prefersReducedMotion() || !el || typeof IntersectionObserver === "undefined") {
      setText(raw);
      return;
    }
    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min(1, (now - start) / STAT_COUNT_MS);
          if (progress >= 1) {
            setText(raw);
            return;
          }
          setText(formatStat(parts, Math.round(parts.value * easeOutCubic(progress))));
          frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [parts, raw]);

  return (
    <p
      className="text-2xl md:text-3xl font-bold text-[hsl(var(--page-maroon-deep))]"
      style={{ fontFamily: "var(--font-display)" }}
    >
      <span ref={boxRef} className="relative inline-block">
        <span className="invisible" aria-hidden="true">
          {raw}
        </span>
        <span className="absolute inset-0">{text}</span>
      </span>
    </p>
  );
};

const BlogPostFeature = ({ post, morePosts }: BlogPostFeatureProps) => {
  const feature = post.feature!;
  // Hero photo: src/assets/blog/shondhibazar-hero.jpg. Falls back to the post
  // cover if that file is ever removed.
  const resolvedHero = resolveBlogImage(feature.heroImage) ?? post.cover;
  const [heroFailed, setHeroFailed] = useState(false);
  const heroSource = heroFailed ? post.cover : resolvedHero;

  const intro = post.sections.filter((section) => !section.heading);
  const headed = post.sections.filter((section) => section.heading);

  return (
    <PageLayout gradient="insights" title={post.title} bareContent>
      {/* Full-width hero: photo with a dark maroon scrim rising from the bottom,
          tag and title in white over it. */}
      <div className="relative h-[470px] sm:h-[560px] overflow-hidden">
        <img
          src={heroSource}
          alt={`${post.title} hero`}
          className="absolute inset-0 w-full h-full object-cover origin-center scale-[1.08]"
          onError={() => setHeroFailed(true)}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--page-maroon-deep))] via-[hsl(var(--page-maroon-deep))]/45 to-transparent"
        />
        <div className="absolute top-0 left-0 right-0 px-6 md:px-12 lg:px-20 pt-28 md:pt-32">
          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} /> Back to Insights
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 lg:px-20 pb-16 md:pb-24 max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-[10px] tracking-[0.2em] uppercase text-white font-medium" style={{ fontFamily: "var(--font-body)" }}>
              {post.tag}
            </span>
            <span className="text-[10px] tracking-[0.15em] uppercase text-white/70 bg-white/10 px-2 py-0.5 rounded-full border border-white/20" style={{ fontFamily: "var(--font-body)" }}>
              OCBIF supported
            </span>
          </div>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
            {post.title}
          </h1>
        </div>
      </div>

      {/* Stat boxes overlapping the hero's bottom edge. */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 -mt-14 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {feature.stats.map((stat) => (
            <div key={stat.label} className="bg-[hsl(var(--blog-stat-bg))] rounded-xl px-5 py-6 shadow-lg">
              <StatValue raw={stat.value} />
              <p className="mt-1 text-xs md:text-sm text-[hsl(var(--page-maroon-deep))]/60" style={{ fontFamily: "var(--font-body)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 md:py-24 space-y-20 md:space-y-28">
        {/* Intro paragraphs in a narrow centered column, then the pull quote. */}
        <div className="max-w-[720px] mx-auto px-6 space-y-10">
          {intro.map((section, i) => (
            <section key={i} className="space-y-5">
              {section.paragraphs.map((paragraph, j) => (
                <p key={j} className="text-foreground/75 text-base md:text-lg leading-loose" style={{ fontFamily: "var(--font-body)" }}>
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
          <blockquote className="border-l-2 border-white/70 pl-6">
            <p className="text-foreground text-2xl md:text-3xl leading-snug" style={{ fontFamily: "var(--font-display)" }}>
              {feature.pullQuote}
            </p>
          </blockquote>
        </div>

        {headed.map((section, i) => {
          const twoCol = feature.twoColumn.find((column) => column.heading === section.heading);
          const twoColImage = twoCol ? resolveBlogImage(twoCol.image) : undefined;
          const body = (
            <div className="space-y-5">
              <h2 className="text-foreground text-2xl md:text-3xl lg:text-4xl leading-snug" style={{ fontFamily: "var(--font-display)" }}>
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph, j) => (
                <p key={j} className="text-foreground/75 text-base md:text-lg leading-loose" style={{ fontFamily: "var(--font-body)" }}>
                  {paragraph}
                </p>
              ))}
            </div>
          );

          if (twoCol && twoColImage) {
            const image = <BlogImage path={twoCol.image} alt={section.heading || post.title} />;
            return (
              <section key={i} className="max-w-6xl mx-auto px-6 md:px-12 grid gap-10 md:grid-cols-2 md:items-center">
                {twoCol.side === "left" ? <>{image}{body}</> : <>{body}{image}</>}
              </section>
            );
          }

          return (
            <section key={i} className="max-w-[720px] mx-auto px-6">
              {body}
              {section.image && !twoCol && (
                <div className="mt-6">
                  <BlogImage path={section.image} alt={section.caption || section.heading || post.title} caption={section.caption} />
                </div>
              )}
            </section>
          );
        })}

        {morePosts.length > 0 && (
          <section className="max-w-6xl mx-auto px-6 md:px-12 space-y-8 border-t border-border/20 pt-12">
            <h2 className="text-foreground/40 text-[11px] tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "var(--font-body)" }}>
              More posts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-6">
              {morePosts.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </PageLayout>
  );
};

export default BlogPostFeature;
