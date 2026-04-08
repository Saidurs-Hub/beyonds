import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const studies = [
  {
    title: "RMG & Textile Sector Challenge Fund Scoping Study",
    year: "2026",
    findings: "Global supply chain laws are accelerating the need for circularity among smaller factories, yet existing financing products remain inadequate.",
    recommendation: "Build a dedicated investment facility that will help future-proof these businesses and explore efficiency practices.",
  },
  {
    title: "Ecosystem Mapping & Study",
    year: "2025",
    findings: "Programs largely agnostic to differing business models, type (SMEs vs Startups) and life cycle of companies.",
    recommendation: "Design programs delivered via domain experts who demonstrate integrity and credibility through lived experiences (locally and/or globally).",
  },
  {
    title: "Access to Finance Landscape and Inclusive Development (AFLID) Assessment",
    year: "2024",
    findings: "Structural barriers — high transaction costs for banks and elevated interest rates in microfinance — limit effective agricultural financing.",
    recommendation: "Addressing these gaps will require intermediary-led aggregation models and the redesign of financial products to reflect agricultural production cycles.",
  },
];

const Insights = () => (
  <PageTransition>
    <div className="min-h-screen bg-background text-foreground">
      <header className="px-6 md:px-12 lg:px-20 py-6">
        <Link to="/" className="text-foreground/60 hover:text-foreground transition-colors flex items-center gap-2 text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
      </header>

      <main className="px-6 md:px-12 lg:px-20 py-12 max-w-5xl mx-auto space-y-20">
        <section className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-light tracking-wide" style={{ fontFamily: "var(--font-display)" }}>Insights</h1>
          <p className="text-foreground/60 text-lg leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-body)" }}>
            Market scoping and research-driven insights that inform our investment strategy and shape the entrepreneurship ecosystem across the Global South.
          </p>
        </section>

        <section className="space-y-8">
          {studies.map((study) => (
            <div key={study.title} className="border border-border/30 rounded-lg p-8 md:p-10 bg-card/20 space-y-6">
              <div className="flex items-start gap-4">
                <FileText className="w-5 h-5 text-accent mt-1 shrink-0" />
                <div className="space-y-1">
                  <h2 className="text-foreground text-lg md:text-xl" style={{ fontFamily: "var(--font-body)" }}>{study.title}</h2>
                  <span className="text-accent text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)" }}>{study.year}</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 pl-9">
                <div className="space-y-2">
                  <h3 className="text-foreground/40 text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)" }}>Key Findings</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{study.findings}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-foreground/40 text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)" }}>Recommendation</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{study.recommendation}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  </PageTransition>
);

export default Insights;
