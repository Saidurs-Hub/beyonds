import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { openExternalLink } from "@/lib/openExternalLink";
import portfolioHero from "@/assets/cholpori-hero.jpg";
import relaxyLogo from "@/assets/relaxy-logo.png";
import shikhoLogo from "@/assets/shikho-logo.png";
import cholporiLogo from "@/assets/cholpori-logo.png";
import shomvobLogo from "@/assets/shomvob-logo.jpeg";
import brltLogo from "@/assets/brtl-logo.jpeg";
import shondhibazarLogo from "@/assets/shondhibazar-logo.png";
import shondhibazarLogo from "@/assets/shondhibazar-logo.png.asset.json";

const investments = [
  { company: "Relaxy", sector: "Healthcare", logo: relaxyLogo, website: "https://relaxy.com.bd/" },
  { company: "Shikho", sector: "EdTech", logo: shikhoLogo, website: "https://shikho.com/" },
  { company: "CholPori", sector: "EdTech", logo: cholporiLogo, website: "https://www.cholpori.com/" },
  { company: "Shomvob Technologies Ltd.", sector: "HR-tech", logo: shomvobLogo, website: "https://shomvob.com/" },
  { company: "BD Recycle Technologies Limited (BRTL)", sector: "Clean-tech", logo: brltLogo, website: "https://brtlcenter.com/" },
  { company: "Shondhibazar", sector: "Agriculture", logo: shondhibazarLogo, website: "https://shondhibazar.com/" },
];

const sectors = ["Technology", "Food & Agri", "Energy", "Textile & Apparel", "Climate & Environment", "Healthcare"];

const Portfolio = () => (
  <PageLayout
    title="Investments"
    subtitle="Deploying capital across a diverse range of instruments, backing enterprises that generate commercial returns and measurable impact in underserved markets."
    heroImage={portfolioHero}
    heroAlt="Students in classroom holding up books"
  >
    <div className="space-y-24">

      <ScrollReveal>
        <section className="space-y-10">
          <h2 className="text-foreground/40 text-[11px] tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "var(--font-body)" }}>Existing Investments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {investments.map((inv) => (
              <button
                key={inv.company}
                type="button"
                onClick={() => openExternalLink(inv.website)}
                className="group relative text-left bg-card/40 border border-border/20 rounded-2xl p-8 flex flex-col items-center justify-between gap-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_40px_-15px_hsl(var(--accent)/0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`Visit ${inv.company} website`}
              >
                <div className="flex-1 flex items-center justify-center w-full">
                  {inv.logo ? (
                    <img
                      src={inv.logo}
                      alt={inv.company}
                      loading="lazy"
                      className="max-h-28 max-w-[80%] w-auto object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  ) : (
                    <div className="h-28 w-28 rounded-xl bg-accent/10" />
                  )}
                </div>
                <div className="w-full flex items-center justify-between gap-3">
                  <span className="text-foreground text-sm leading-snug" style={{ fontFamily: "var(--font-body)" }}>{inv.company}</span>
                  <span className="shrink-0 text-[10px] tracking-[0.2em] uppercase text-foreground/50 bg-secondary/60 px-3 py-1 rounded-full border border-border/20" style={{ fontFamily: "var(--font-body)" }}>
                    {inv.sector}
                  </span>
                </div>
              </button>
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
        </section>
      </ScrollReveal>
    </div>
  </PageLayout>
);

export default Portfolio;
