import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import portfolioHero from "@/assets/cholpori-hero.jpg";
import relaxyLogo from "@/assets/relaxy-logo.png";
import shikhoLogo from "@/assets/shikho-logo.png";
import cholporiLogo from "@/assets/cholpori-logo.png";

const investments = [
  { company: "Relaxy", sector: "Healthcare", type: "Equity", logo: relaxyLogo },
  { company: "Shikho", sector: "EdTech", type: "Equity", logo: shikhoLogo },
  { company: "Cholpori", sector: "EdTech", type: "Equity", logo: cholporiLogo },
  { company: "Shomvob", sector: "—", type: "Debt", logo: null },
  { company: "BRLT", sector: "—", type: "Debt", logo: null },
];

const sectors = ["Technology", "Food & Agri", "Energy", "Textile & Apparel", "Climate & Environment", "Healthcare"];
const instruments = ["Grants", "Concessional Loans", "Commercial Debt", "Equity"];

const Portfolio = () => (
  <PageLayout
    title="Portfolio"
    subtitle="Deploying capital across a diverse range of instruments — backing enterprises that generate commercial returns and measurable impact in underserved markets."
    heroImage={portfolioHero}
    heroAlt="Students in classroom holding up books"
  >
    <div className="space-y-24">
      <ScrollReveal>
        <section className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/20 rounded-xl overflow-hidden">
          {[
            { value: "83+", label: "Companies Supported" },
            { value: "$6mn+", label: "Funding Under Management" },
            { value: "$500K", label: "Deployed to Startups" },
            { value: "$2.5mn", label: "Commitments Raised" },
          ].map((s) => (
            <div key={s.label} className="bg-background p-6 md:p-10 space-y-2">
              <div className="text-3xl md:text-4xl font-light text-foreground" style={{ fontFamily: "var(--font-display)" }}>{s.value}</div>
              <div className="text-foreground/40 text-[11px] tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>{s.label}</div>
            </div>
          ))}
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="space-y-8">
          <h2 className="text-foreground/40 text-[11px] tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "var(--font-body)" }}>Existing Investments</h2>
          <div className="border border-border/20 rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 gap-4 px-6 md:px-8 py-4 bg-card/30 border-b border-border/20">
              {["Company", "Sector", "Instrument"].map((h) => (
                <span key={h} className="text-foreground/30 text-[10px] tracking-[0.25em] uppercase" style={{ fontFamily: "var(--font-body)" }}>{h}</span>
              ))}
            </div>
            {investments.map((inv, i) => (
              <div key={inv.company} className={`grid grid-cols-3 gap-4 px-6 md:px-8 py-5 items-center ${i < investments.length - 1 ? "border-b border-border/10" : ""}`}>
                <span className="text-foreground text-sm flex items-center gap-3" style={{ fontFamily: "var(--font-body)" }}>
                  {inv.logo ? (
                    <img src={inv.logo} alt={inv.company} className="w-10 h-10 object-contain rounded flex-shrink-0" />
                  ) : (
                    <div className="w-10 h-10 rounded bg-accent/10 flex-shrink-0" />
                  )}
                  {inv.company}
                </span>
                <span className="text-foreground/50 text-sm flex items-center" style={{ fontFamily: "var(--font-body)" }}>{inv.sector}</span>
                <span className="text-foreground/50 text-sm flex items-center" style={{ fontFamily: "var(--font-body)" }}>{inv.type}</span>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-foreground/40 text-[11px] tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "var(--font-body)" }}>Sector Focus</h2>
            {sectors.map((s, i) => (
              <div key={s} className={`py-3 ${i < sectors.length - 1 ? "border-b border-border/10" : ""}`}>
                <span className="text-foreground/70 text-sm" style={{ fontFamily: "var(--font-body)" }}>{s}</span>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <h2 className="text-foreground/40 text-[11px] tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "var(--font-body)" }}>Capital Instruments</h2>
            {instruments.map((inst, i) => (
              <div key={inst} className={`py-3 ${i < instruments.length - 1 ? "border-b border-border/10" : ""}`}>
                <span className="text-foreground/70 text-sm" style={{ fontFamily: "var(--font-body)" }}>{inst}</span>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </div>
  </PageLayout>
);

export default Portfolio;
