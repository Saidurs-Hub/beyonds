import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedImage from "@/components/AnimatedImage";
import circularApparel from "@/assets/circular-apparel.png";
import insightsHero from "@/assets/insights-hero.jpg";

const studies = [
  {
    title: "RMG & Textile Sector Challenge Fund",
    type: "Scoping Study",
    year: "2026",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1200&q=80",
    findings: "Global supply chain laws are accelerating the need for circularity among smaller factories, yet existing financing products remain inadequate.",
    recommendation: "Build a dedicated investment facility that will help future-proof these businesses and explore efficiency practices.",
  },
  {
    title: "Ecosystem Mapping & Study",
    type: "Research",
    year: "2025",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    findings: "Services largely agnostic to differing business models, type (SMEs vs Startups) and life cycle of companies.",
    recommendation: "Design services delivered via domain experts who demonstrate integrity and credibility through lived experiences.",
  },
  {
    title: "Access to Finance Landscape and Inclusive Development (AFLID)",
    type: "Assessment",
    year: "2024",
    image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=1200&q=80",
    findings: "Structural barriers — high transaction costs for banks and elevated interest rates in microfinance — limit effective agricultural financing.",
    recommendation: "Intermediary-led aggregation models and redesigned financial products reflecting agricultural production cycles.",
  },
];

const Insights = () => (
  <PageLayout
    title="Insights"
    subtitle="Research-driven market intelligence that informs our investment strategy and shapes the entrepreneurship ecosystem."
    heroImage={insightsHero}
    heroAlt="Tropical forest landscape"
  >
    <div className="space-y-0">
      {studies.map((study, i) => (
        <div key={study.title}>
          <ScrollReveal delay={i * 0.05}>
            <article className={`py-12 md:py-16 ${i < studies.length - 1 ? "border-b border-border/10" : ""}`}>
              <div className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-12">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-accent text-[11px] tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "var(--font-body)" }}>{study.type}</span>
                    <span className="text-foreground/20">·</span>
                    <span className="text-foreground/30 text-[11px] tracking-widest" style={{ fontFamily: "var(--font-body)" }}>{study.year}</span>
                  </div>
                  <h2 className="text-foreground text-lg md:text-xl leading-snug" style={{ fontFamily: "var(--font-body)" }}>{study.title}</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <h3 className="text-foreground/30 text-[10px] tracking-[0.25em] uppercase" style={{ fontFamily: "var(--font-body)" }}>Key Findings</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{study.findings}</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-foreground/30 text-[10px] tracking-[0.25em] uppercase" style={{ fontFamily: "var(--font-body)" }}>Recommendation</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{study.recommendation}</p>
                  </div>
                </div>
              </div>
            </article>
          </ScrollReveal>

          {/* Circular Apparel diagram after RMG study */}
          {i === 0 && (
            <ScrollReveal>
              <div className="py-12 md:py-16 border-b border-border/10">
                <div className="rounded-2xl bg-white/5 border border-border/10 p-8 md:p-12 flex flex-col items-center gap-6">
                  <h3 className="text-foreground/40 text-[10px] tracking-[0.25em] uppercase text-center" style={{ fontFamily: "var(--font-body)" }}>
                    Framework — Levers for Circular Apparel System
                  </h3>
                  <AnimatedImage
                    src={circularApparel}
                    alt="Levers for Circular Apparel System — Input, Design, Production, Use & Reuse, Recovery & Recycle"
                    className="w-full max-w-3xl rounded-xl bg-white p-8 md:p-10"
                    width={1920}
                    height={1080}
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      ))}
    </div>
  </PageLayout>
);

export default Insights;
