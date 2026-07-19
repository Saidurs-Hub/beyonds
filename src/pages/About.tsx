import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedImage from "@/components/AnimatedImage";
import { Building2, TrendingUp, Globe } from "lucide-react";
import aboutBg from "@/assets/about-hero.jpg";

const About = () => (
  <PageLayout
    title="About"
    subtitle="Beyond S Ventures represents SAJIDA's expansion into active investment management — mobilizing commercial funding for SMEs & startups across the Global South."
    heroImage={aboutBg}
    heroAlt="Misty forest at twilight"
  >
    <div className="space-y-24">
      {/* Vision & Thesis */}
      <ScrollReveal>
        <section className="grid md:grid-cols-2 gap-px bg-border/20">
          <div className="bg-background p-8 md:p-12 space-y-4">
            <span className="text-accent text-[11px] tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "var(--font-body)" }}>Vision</span>
            <p className="text-foreground/80 text-xl md:text-2xl font-light leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>
              Establish a global investment management and entrepreneurship development model, originating from Bangladesh.
            </p>
          </div>
          <div className="bg-background p-8 md:p-12 space-y-4">
            <span className="text-accent text-[11px] tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "var(--font-body)" }}>Investment Thesis</span>
            <p className="text-foreground/80 text-xl md:text-2xl font-light leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>
              Invest in scalable enterprises that generate commercial returns and deliver material impact in underserved markets.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Evolution */}
      <ScrollReveal>
        <section className="space-y-12">
          <h2 className="text-foreground/40 text-[11px] tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "var(--font-body)" }}>Our Evolution</h2>
          {[
            { year: "1993", role: "Builder", entity: "SAJIDA Foundation", desc: "Building enterprises directly serving over 3 million people every year — from microfinance to pharmaceuticals to healthcare." },
            { year: "2021", role: "Enabler", entity: "Impact Partners", desc: "Transitioning from only building own ventures to enabling others to grow through acceleration, technical assistance, and impact-linked financing." },
            { year: "2024", role: "Investor", entity: "Beyond Ventures", desc: "Mobilizing capital to help enterprises build smarter and reach untapped markets through active investment management." },
          ].map((m, i) => (
            <ScrollReveal key={m.year} delay={i * 0.1}>
              <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 md:gap-10 py-10 border-t border-border/20">
                <span className="text-accent text-2xl md:text-3xl font-light" style={{ fontFamily: "var(--font-display)" }}>{m.year}</span>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-foreground text-lg md:text-xl" style={{ fontFamily: "var(--font-body)" }}>{m.entity}</h3>
                    <span className="text-foreground/30 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>{m.role}</span>
                  </div>
                  <p className="text-foreground/50 text-sm md:text-base leading-relaxed max-w-xl" style={{ fontFamily: "var(--font-body)" }}>{m.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </section>
      </ScrollReveal>

      {/* Impact Stats */}
      <ScrollReveal>
        <section className="bg-card/30 border border-border/20 rounded-xl p-8 md:p-14">
          <h2 className="text-foreground/40 text-[11px] tracking-[0.25em] uppercase font-medium mb-10" style={{ fontFamily: "var(--font-body)" }}>Impact at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "6M+", label: "Lives Impacted" },
              { value: "6,000+", label: "Workforce" },
              { value: "400+", label: "Offices in Bangladesh" },
              { value: "83+", label: "Companies Supported" },
            ].map((s) => (
              <div key={s.label} className="space-y-2">
                <div className="text-4xl md:text-5xl font-light text-foreground" style={{ fontFamily: "var(--font-display)" }}>{s.value}</div>
                <div className="text-foreground/40 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Global Presence Image */}
      <ScrollReveal>
        <div className="relative rounded-xl overflow-hidden aspect-[21/9] group">
          <AnimatedImage src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80" alt="Global cityscape" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </div>
      </ScrollReveal>

      {/* Global Presence */}
      <ScrollReveal>
        <section className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-foreground/40 text-[11px] tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "var(--font-body)" }}>Global Presence</h2>
            <p className="text-foreground/60 text-base leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
              Building a Global South-focused investment platform, grounded in decades of delivering essential services — now scaling to back entrepreneurs with venture support, investment readiness, and catalytic capital.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Building2, title: "Bangladesh", detail: "400+ unit offices", status: "Headquarters" },
              { icon: Globe, title: "Uganda", detail: "8 offices", status: "Active" },
              { icon: TrendingUp, title: "2028 Expansion", detail: "Tanzania · Ghana · Zambia", status: "Planned" },
            ].map((loc, i) => (
              <ScrollReveal key={loc.title} delay={i * 0.1}>
                <div className="border border-border/20 rounded-lg p-6 md:p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <loc.icon className="w-5 h-5 text-accent" />
                    <span className="text-foreground/20 text-[10px] tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>{loc.status}</span>
                  </div>
                  <h3 className="text-foreground text-base font-medium" style={{ fontFamily: "var(--font-body)" }}>{loc.title}</h3>
                  <p className="text-foreground/40 text-sm" style={{ fontFamily: "var(--font-body)" }}>{loc.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </div>
  </PageLayout>
);

export default About;
