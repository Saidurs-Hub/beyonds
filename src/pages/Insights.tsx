import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";
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
    findings: "Structural barriers - high transaction costs for banks and elevated interest rates in microfinance - limit effective agricultural financing.",
    recommendation: "Intermediary-led aggregation models and redesigned financial products reflecting agricultural production cycles.",
  },
];

const tabs = [
  { id: "blog", label: "Blog" },
  { id: "research", label: "Research" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const Insights = () => {
  const [activeTab, setActiveTab] = useState<TabId>("blog");

  return (
    <PageLayout
      gradient="insights"
      title="Insights"
      subtitle="Research-driven market intelligence that informs our investment strategy and shapes the entrepreneurship ecosystem."
      heroImage={insightsHero}
      heroAlt="Cholpori classroom session with students"
    >
      <div className="space-y-12">
        <div role="tablist" aria-label="Insights sections" className="flex gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-xs tracking-[0.2em] uppercase border transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-secondary/80 text-foreground border-accent/40 shadow-[0_0_16px_hsl(var(--accent)/0.2)]"
                  : "text-foreground/50 border-border/20 hover:text-foreground/80 hover:border-border/40"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "blog" ? (
          <div role="tabpanel" aria-label="Blog" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.05}>
                <BlogCard post={post} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div role="tabpanel" aria-label="Research" className="space-y-0">
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

              </div>
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Insights;
