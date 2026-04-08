import { Link } from "react-router-dom";
import { ArrowLeft, Building2, TrendingUp, Globe } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";
import PageTransition from "@/components/PageTransition";

const milestones = [
  { year: "1993", role: "Builder", entity: "SAJIDA Foundation", description: "Builder of enterprises directly serving over 3mn people every year" },
  { year: "2021", role: "Enabler", entity: "Impact Partners", description: "SAJIDA transitioned from only building its own ventures to enabling others to grow" },
  { year: "2024", role: "Investor", entity: "Beyond Ventures", description: "Mobilizing capital to help enterprises build smarter and reach untapped markets" },
];

const stats = [
  { value: "6M+", label: "Lives Impacted" },
  { value: "6,000+", label: "Workforce" },
  { value: "400+", label: "Unit Offices in Bangladesh" },
  { value: "$6mn+", label: "Funding Under Management" },
];

const About = () => (
  <PageTransition>
    <div className="relative min-h-screen text-foreground">
      <img src={aboutBg} alt="Misty forest at twilight" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative z-10">
        <header className="px-6 md:px-12 lg:px-20 py-6">
          <Link to="/" className="text-foreground/60 hover:text-foreground transition-colors flex items-center gap-2 text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
        </header>

        <main className="px-6 md:px-12 lg:px-20 py-12 max-w-5xl mx-auto space-y-20">
          {/* Hero */}
          <section className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-light tracking-wide" style={{ fontFamily: "var(--font-display)" }}>About</h1>
            <p className="text-foreground/60 text-lg md:text-xl leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-body)" }}>
              Beyond S Ventures represents SAJIDA's expansion into active investment management. We aim to mobilize commercial funding to SMEs & startups by crowding in foreign and local institutional capital, while extending advisory and transaction facilitation services to enterprises that need capital structuring support.
            </p>
          </section>

          {/* Vision & Thesis */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="border border-border/30 rounded-lg p-8 bg-card/30 backdrop-blur-sm">
              <h2 className="text-accent text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-body)" }}>Vision</h2>
              <p className="text-foreground/80 text-base leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Establish a global investment management and entrepreneurship development model, originating from Bangladesh.
              </p>
            </div>
            <div className="border border-border/30 rounded-lg p-8 bg-card/30 backdrop-blur-sm">
              <h2 className="text-accent text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-body)" }}>Investment Thesis</h2>
              <p className="text-foreground/80 text-base leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Invest in scalable enterprises that generate commercial returns and deliver material impact in underserved markets.
              </p>
            </div>
          </section>

          {/* Evolution Timeline */}
          <section className="space-y-8">
            <h2 className="text-2xl font-light tracking-wide" style={{ fontFamily: "var(--font-display)" }}>SAJIDA's Evolution</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {milestones.map((m) => (
                <div key={m.year} className="border border-border/30 rounded-lg p-8 bg-card/20 backdrop-blur-sm space-y-3">
                  <span className="text-accent text-3xl font-light" style={{ fontFamily: "var(--font-display)" }}>{m.year}</span>
                  <div className="text-foreground/40 text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)" }}>{m.role}</div>
                  <h3 className="text-foreground text-lg" style={{ fontFamily: "var(--font-body)" }}>{m.entity}</h3>
                  <p className="text-foreground/50 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{m.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Stats */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-light text-accent" style={{ fontFamily: "var(--font-display)" }}>{s.value}</div>
                <div className="text-foreground/40 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>{s.label}</div>
              </div>
            ))}
          </section>

          {/* Global Presence */}
          <section className="space-y-6">
            <h2 className="text-2xl font-light tracking-wide" style={{ fontFamily: "var(--font-display)" }}>Expanding Across the Global South</h2>
            <p className="text-foreground/60 text-base leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-body)" }}>
              SAJIDA is building a Global South-focused investment platform, grounded in decades of delivering essential services as a builder & operator, now scaling its enabler and investor engines to back entrepreneurs with venture support, investment readiness, and catalytic capital.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-foreground text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>Bangladesh</h3>
                  <p className="text-foreground/40 text-xs" style={{ fontFamily: "var(--font-body)" }}>400+ unit offices</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-foreground text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>Uganda</h3>
                  <p className="text-foreground/40 text-xs" style={{ fontFamily: "var(--font-body)" }}>2-unit offices with expansion underway</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-foreground text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>Planned Expansion by 2028</h3>
                  <p className="text-foreground/40 text-xs" style={{ fontFamily: "var(--font-body)" }}>Tanzania · Ghana · Zambia</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  </PageTransition>
);

export default About;
