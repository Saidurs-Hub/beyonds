import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const investments = [
  { company: "Mental Health Platform", amount: "$85K", sector: "Healthcare" },
  { company: "Shikho", amount: "$300K", sector: "EdTech" },
  { company: "Digital Learning Platform", amount: "$115K", sector: "EdTech" },
];

const sectors = ["Technology", "Food & Agri", "Energy", "Textile & Apparel", "Climate & Environment", "Healthcare"];

const instruments = ["Grants", "Concessional Loans", "Commercial Debt", "Equity"];

const portfolioStats = [
  { value: "83+", label: "Companies Supported" },
  { value: "$500K", label: "Deployed to Startups" },
  { value: "$2.5mn", label: "Funding Commitments Raised" },
  { value: "6", label: "Sector Verticals" },
];

const Portfolio = () => (
  <PageTransition>
    <div className="min-h-screen bg-background text-foreground">
      <header className="px-6 md:px-12 lg:px-20 py-6">
        <Link to="/" className="text-foreground/60 hover:text-foreground transition-colors flex items-center gap-2 text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
      </header>

      <main className="px-6 md:px-12 lg:px-20 py-12 max-w-5xl mx-auto space-y-20">
        <section className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-light tracking-wide" style={{ fontFamily: "var(--font-display)" }}>Portfolio</h1>
          <p className="text-foreground/60 text-lg leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-body)" }}>
            We deploy capital across a diverse range of instruments — from grants and concessional loans to equity — backing enterprises that generate commercial returns and measurable impact.
          </p>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {portfolioStats.map((s) => (
            <div key={s.label} className="text-center space-y-2 bg-card/20 border border-border/20 rounded-lg p-6">
              <div className="text-3xl md:text-4xl font-light text-accent" style={{ fontFamily: "var(--font-display)" }}>{s.value}</div>
              <div className="text-foreground/40 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>{s.label}</div>
            </div>
          ))}
        </section>

        {/* Existing Investments */}
        <section className="space-y-8">
          <h2 className="text-2xl font-light tracking-wide" style={{ fontFamily: "var(--font-display)" }}>Existing Investments</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {investments.map((inv) => (
              <div key={inv.company} className="border border-border/30 rounded-lg p-8 bg-card/20 space-y-4">
                <div className="text-accent text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)" }}>{inv.sector}</div>
                <h3 className="text-foreground text-lg" style={{ fontFamily: "var(--font-body)" }}>{inv.company}</h3>
                <div className="text-2xl font-light text-accent" style={{ fontFamily: "var(--font-display)" }}>{inv.amount}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Sectors & Instruments */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-light tracking-wide" style={{ fontFamily: "var(--font-display)" }}>Sector Focus</h2>
            <div className="flex flex-wrap gap-3">
              {sectors.map((s) => (
                <span key={s} className="border border-border/30 rounded-full px-4 py-1.5 text-foreground/60 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>{s}</span>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-light tracking-wide" style={{ fontFamily: "var(--font-display)" }}>Instruments</h2>
            <div className="flex flex-wrap gap-3">
              {instruments.map((inst) => (
                <span key={inst} className="border border-accent/30 rounded-full px-4 py-1.5 text-accent text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>{inst}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  </PageTransition>
);

export default Portfolio;
