import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { Rocket, Leaf, BarChart3 } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";
import accelPartners from "@/assets/accel-partners.png";

const services = [
  {
    icon: Rocket,
    category: "Acceleration & Investment Readiness",
    goal: "Equipping early-stage entrepreneurs with the resources necessary to build sustainable, investment-ready enterprises through acceleration, technical assistance, and tailored funding.",
    subServices: ["Orange Corners Bangladesh", "B/DESHI Catalyst"],
    stats: [
      { value: "$3.8mn+", label: "Largest accelerator in Bangladesh" },
      { value: "1,700+", label: "Jobs created" },
      { value: "73", label: "Companies financed" },
    ],
    partners: ["Anchorless", "Kingdom of the Netherlands", "BYLC", "YY Ventures", "LightCastle Partners", "Unilever"],
    partnersImage: accelPartners,
  },
  {
    icon: Leaf,
    category: "Venture Building & Impact-Linked Financing",
    goal: "Scaling innovative solutions that advance climate resilience in Bangladesh - agriculture, water, and food security.",
    subServices: ["Climate Innovation Fund (CIF)", "NURTURE", "BINIYOG BRIDDHI (B-BRIDDHI)"],
    stats: [
      { value: "10,000+", label: "Farmers impacted" },
      { value: "$350K+", label: "Mobilized under CIF 1" },
      { value: "15", label: "Enterprises supported" },
    ],
    partners: ["LightCastle", "Switzerland", "Prime Bank PLC.", "British Asian Trust"],
  },
  {
    icon: BarChart3,
    category: "Investment Management",
    goal: "Deploying flexible capital instruments - equity, quasi-equity, and performance-linked debt - to drive commercial returns with measurable impact.",
    subServices: [],
    stats: [
      { value: "$200K", label: "Sponsor fund mandate" },
      { value: "$2.5mn", label: "Commitments raised" },
      { value: "$500K", label: "Deployed to startups" },
    ],
    partners: [],
  },
];

const Services = () => (
  <PageLayout
    title="Services"
    subtitle="From acceleration to venture building to investment management - meeting enterprises wherever they are in their growth journey."
    heroImage={servicesHero}
    heroAlt="Lettuce field with mountains in the background"
    backgroundColor="#851E3E"
  >
    <div className="space-y-10 md:space-y-14">
      {services.map((p) => (
        <ScrollReveal key={p.category}>
          <section className="relative rounded-2xl overflow-hidden bg-black/25 backdrop-blur-sm border border-white/10 p-8 md:p-12">
            {/* Header */}
            <div className="flex items-start gap-5 mb-8">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/10 border border-white/15">
                <p.icon className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-3 pt-0.5">
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white" style={{ fontFamily: "var(--font-display)" }}>{p.category}</h2>
                <p className="text-sm md:text-base leading-relaxed max-w-2xl text-white/70" style={{ fontFamily: "var(--font-body)" }}>{p.goal}</p>
              </div>
            </div>

            {/* Sub-services */}
            {p.subServices.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-8 pl-0 md:pl-[68px]">
                {p.subServices.map((sp) => (
                  <span key={sp} className="rounded-full px-5 py-2 text-xs tracking-[0.15em] uppercase bg-white/5 border border-white/15 text-white/80" style={{ fontFamily: "var(--font-body)" }}>{sp}</span>
                ))}
              </div>
            )}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden mb-8">
              {p.stats.map((s) => (
                <div key={s.label} className="p-6 md:p-8 space-y-2 bg-black/20">
                  <div className="text-2xl md:text-4xl font-light text-white" style={{ fontFamily: "var(--font-display)" }}>{s.value}</div>
                  <div className="text-[11px] tracking-widest uppercase text-white/50" style={{ fontFamily: "var(--font-body)" }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Partners */}
            {p.partners.length > 0 && (
              <div className="pl-0 md:pl-[68px] space-y-5">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-white/40 shrink-0" style={{ fontFamily: "var(--font-body)" }}>Partners</span>
                  <span className="text-sm text-white/70" style={{ fontFamily: "var(--font-body)" }}>{p.partners.join("  ·  ")}</span>
                </div>
                {p.partnersImage && (
                  <img src={p.partnersImage} alt="Kingdom of the Netherlands, Anchorless Bangladesh, BYLC, YY Ventures, LightCastle Partners, Unilever" className="max-w-md w-full rounded-lg bg-white/90 p-4" />
                )}
              </div>
            )}
          </section>
        </ScrollReveal>
      ))}
    </div>
  </PageLayout>
);

export default Services;
