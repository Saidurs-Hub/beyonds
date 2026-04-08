import PageLayout from "@/components/PageLayout";
import { Rocket, Leaf, BarChart3, ArrowRight } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";
import accelerationBg from "@/assets/acceleration-bg.jpg";


const services = [
  {
    icon: Rocket,
    category: "Acceleration & Investment Readiness",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80",
    video: "",
    goal: "Equipping early-stage entrepreneurs with the resources necessary to build sustainable, investment-ready enterprises through acceleration, technical assistance, and tailored funding.",
    subServices: ["Orange Corners", "B/DESHI Bangladesh", "Catalyst"],
    stats: [
      { value: "$3.8mn+", label: "Largest accelerator in Bangladesh" },
      { value: "1,700+", label: "Jobs created" },
      { value: "73", label: "Companies financed" },
    ],
    partners: ["Anchorless", "Kingdom of the Netherlands", "BYLC", "YY Ventures", "LightCastle Partners", "Unilever"],
  },
  {
    icon: Leaf,
    category: "Venture Building & Impact-Linked Financing",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80",
    goal: "Scaling innovative solutions that advance climate resilience in Bangladesh — agriculture, water, and food security.",
    subServices: ["Climate Innovation Fund", "NURTURE", "BRIDDHI"],
    stats: [
      { value: "5,200+", label: "Farmers supported" },
      { value: "$350K+", label: "Mobilized under CIF 1" },
      { value: "15", label: "Enterprises supported" },
    ],
    partners: ["LightCastle", "Switzerland", "ATEC°", "Prime Bank", "British Asian Trust"],
  },
  {
    icon: BarChart3,
    category: "Investment Management",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    goal: "Deploying flexible capital instruments — equity, quasi-equity, and performance-linked debt — to drive commercial returns with measurable impact.",
    subServices: [],
    stats: [
      { value: "$200K", label: "Sponsor fund mandate" },
      { value: "$2.5mn", label: "Commitments raised" },
      { value: "$500K", label: "Deployed to startups" },
    ],
    partners: [],
  },
];

const futureGoals = [
  { title: "Accelerator & Investment Readiness", items: ["Support 300+ impact enterprises", "Codify a replicable investment readiness & entrepreneurship model"] },
  { title: "Investment Management", items: ["Launch 2 alternative investment funds, raising $10mn each", "Finance 200+ enterprises using flexible instruments"] },
  { title: "Advisory Services", items: ["Deploy $4mn+ in catalytic financing", "Raise $32mn through investment & transaction advisory"] },
  { title: "Global Expansion", items: ["Build Global South investment corridors, beginning with East Africa"] },
];

const Services = () => (
  <PageLayout
    title="Services"
    subtitle="From acceleration to venture building to investment management — meeting enterprises wherever they are in their growth journey."
    heroImage={servicesHero}
    heroAlt="Lettuce field with mountains in the background"
  >
    <div className="space-y-24">
      {services.map((p, idx) => (
        <section key={p.category} className="relative space-y-10 rounded-xl overflow-hidden" style={idx === 0 ? { padding: '2.5rem' } : undefined}>
          {idx === 0 && (
            <>
              <img
                src={accelerationBg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/80" />
            </>
          )}
          <div className="relative flex items-start gap-5">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
              <p.icon className="w-5 h-5 text-accent" />
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-light tracking-wide" style={{ fontFamily: "var(--font-display)" }}>{p.category}</h2>
              <p className="text-foreground/50 text-sm md:text-base leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>{p.goal}</p>
            </div>
          </div>


          {p.subServices.length > 0 && (
            <div className="relative flex flex-wrap gap-3 pl-0 md:pl-[60px]">
              {p.subServices.map((sp) => (
                <span key={sp} className="bg-card/40 border border-border/20 rounded-full px-5 py-2 text-foreground/60 text-xs tracking-[0.15em] uppercase" style={{ fontFamily: "var(--font-body)" }}>{sp}</span>
              ))}
            </div>
          )}

          <div className="relative grid grid-cols-3 gap-px bg-border/20 rounded-xl overflow-hidden">
            {p.stats.map((s) => (
              <div key={s.label} className="bg-background/80 p-6 md:p-8 space-y-2">
                <div className="text-2xl md:text-3xl font-light text-foreground" style={{ fontFamily: "var(--font-display)" }}>{s.value}</div>
                <div className="text-foreground/40 text-[11px] tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {p.partners.length > 0 && (
            <div className="relative pl-0 md:pl-[60px]">
              <span className="text-foreground/30 text-[11px] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)" }}>Partners: </span>
              <span className="text-foreground/40 text-sm" style={{ fontFamily: "var(--font-body)" }}>{p.partners.join(" · ")}</span>
            </div>
          )}

          {idx < services.length - 1 && <div className="border-t border-border/10" />}
        </section>
      ))}

      <section className="space-y-10 pt-8">
        <div className="space-y-3">
          <h2 className="text-foreground/40 text-[11px] tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "var(--font-body)" }}>Looking Ahead</h2>
          <p className="text-2xl md:text-3xl font-light tracking-wide" style={{ fontFamily: "var(--font-display)" }}>Next 3 Years</p>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-border/20 rounded-xl overflow-hidden">
          {futureGoals.map((item) => (
            <div key={item.title} className="bg-background p-8 md:p-10 space-y-5">
              <h3 className="text-accent text-[11px] tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "var(--font-body)" }}>{item.title}</h3>
              <ul className="space-y-3">
                {item.items.map((li, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-3.5 h-3.5 text-accent/50 mt-1 shrink-0" />
                    <span className="text-foreground/60 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{li}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  </PageLayout>
);

export default Services;
