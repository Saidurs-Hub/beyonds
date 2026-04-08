import { Link } from "react-router-dom";
import { ArrowLeft, Rocket, Leaf, BarChart3 } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const programs = [
  {
    category: "Acceleration & Investment Readiness",
    icon: Rocket,
    goal: "To equip early-stage entrepreneurs with the resources necessary to build sustainable, investment-ready enterprises through acceleration, technical assistance, and tailored funding.",
    subPrograms: ["Orange Corners", "B/DESHI Bangladesh", "Catalyst"],
    highlights: [
      "$3.8mn+ — Largest accelerator program in Bangladesh",
      "1,700+ jobs created by portfolio companies",
      "73 companies received financing and investment readiness support",
    ],
    partners: ["Anchorless", "Kingdom of the Netherlands", "BYLC Youth Leadership Center", "YY Ventures", "LightCastle Partners", "Unilever"],
  },
  {
    category: "Venture Building & Impact-Linked Financing",
    icon: Leaf,
    goal: "To scale innovative solutions that advance climate resilience in Bangladesh, particularly in the areas of agriculture, water and food security.",
    subPrograms: ["Climate Innovation Fund", "NURTURE", "BRIDDHI — Scaling Impact Enterprises of Bangladesh"],
    highlights: [
      "5,200+ farmers supported through Agtech & climate smart agri-inputs",
      "$350K+ mobilized under Climate Innovation Fund 1",
      "15 enterprises supported, with 9 receiving venture building support and 6 impact-linked financing",
    ],
    partners: ["LightCastle", "Supported by Switzerland", "ATEC°", "Prime Bank", "British Asian Trust"],
  },
  {
    category: "Investment Management",
    icon: BarChart3,
    goal: "Launch alternative investment funds for SMEs & startups, deploying flexible capital instruments to drive commercial returns and measurable impact.",
    subPrograms: [],
    highlights: [
      "$200K sponsor fund management mandate",
      "$2.5mn in funding commitments raised for SAJIDA MF Uganda",
      "$500K deployed to 3 startups",
    ],
    partners: [],
  },
];

const Programs = () => (
  <PageTransition>
    <div className="min-h-screen bg-background text-foreground">
      <header className="px-6 md:px-12 lg:px-20 py-6">
        <Link to="/" className="text-foreground/60 hover:text-foreground transition-colors flex items-center gap-2 text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
      </header>

      <main className="px-6 md:px-12 lg:px-20 py-12 max-w-5xl mx-auto space-y-20">
        <section className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-light tracking-wide" style={{ fontFamily: "var(--font-display)" }}>Programs</h1>
          <p className="text-foreground/60 text-lg leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-body)" }}>
            From acceleration to venture building to investment management — our programs are designed to meet enterprises wherever they are in their growth journey.
          </p>
        </section>

        {programs.map((p) => (
          <section key={p.category} className="space-y-8 border-t border-border/20 pt-12">
            <div className="flex items-center gap-4">
              <p.icon className="w-6 h-6 text-accent" />
              <h2 className="text-2xl md:text-3xl font-light tracking-wide" style={{ fontFamily: "var(--font-display)" }}>{p.category}</h2>
            </div>

            <p className="text-foreground/60 text-base leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-body)" }}>{p.goal}</p>

            {p.subPrograms.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {p.subPrograms.map((sp) => (
                  <span key={sp} className="border border-border/30 rounded-full px-4 py-1.5 text-foreground/60 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>{sp}</span>
                ))}
              </div>
            )}

            <div className="grid md:grid-cols-3 gap-4">
              {p.highlights.map((h, i) => (
                <div key={i} className="bg-card/30 border border-border/20 rounded-lg p-6">
                  <p className="text-foreground/70 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{h}</p>
                </div>
              ))}
            </div>

            {p.partners.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-foreground/40 text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)" }}>Partners</h3>
                <p className="text-foreground/50 text-sm" style={{ fontFamily: "var(--font-body)" }}>{p.partners.join(" · ")}</p>
              </div>
            )}
          </section>
        ))}

        {/* Next 3 Years */}
        <section className="space-y-8 border-t border-border/20 pt-12">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide" style={{ fontFamily: "var(--font-display)" }}>Next 3 Years</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Accelerator & Investment Readiness", items: ["Support 300+ impact enterprises through venture building, acceleration, and investment readiness", "Develop a venture lab designed by codifying a replicable investment readiness & entrepreneurship model"] },
              { title: "Investment Management", items: ["Launch 2 alternative investment funds (for SMEs & startups), raising $10mn in external capital respectively", "Finance and co-finance 200+ enterprises using flexible instruments"] },
              { title: "Advisory Services", items: ["Facilitate deployment of $4mn+ in catalytic and impact-linked financing", "Raise $32mn for SAJIDA-linked enterprises through investment and transaction advisory"] },
              { title: "Global Expansion", items: ["Build Global South investment corridors, beginning with East Africa"] },
            ].map((item) => (
              <div key={item.title} className="bg-card/20 border border-border/20 rounded-lg p-8 space-y-4">
                <h3 className="text-accent text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)" }}>{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((li, i) => (
                    <li key={i} className="text-foreground/60 text-sm leading-relaxed pl-4 border-l border-accent/30" style={{ fontFamily: "var(--font-body)" }}>{li}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  </PageTransition>
);

export default Programs;
