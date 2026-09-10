import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import { ArrowDownRight, BarChart3, Check, Leaf, Rocket } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";

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
  },
];

const stageLabels = ["Accelerate", "Build", "Invest"];

const statParts = (value: string) => {
  const match = value.match(/^(\$)?([\d,.]+)(.*)$/);
  if (!match) return { target: 0, prefix: "", suffix: value, decimals: 0, thousands: false };
  const numeric = match[2].replace(/,/g, "");
  const decimals = numeric.includes(".") ? numeric.split(".")[1].length : 0;
  return {
    target: Number(numeric),
    prefix: match[1] ?? "",
    suffix: match[3] ?? "",
    decimals,
    thousands: match[2].includes(","),
  };
};

const AnimatedStat = ({ value, label }: { value: string; label: string }) => {
  const parts = statParts(value);
  return (
    <div className="group/stat flex min-h-36 flex-col justify-between border border-service-lavender/20 bg-service-paper/[0.04] p-5 transition-colors duration-300 hover:bg-service-paper/[0.08] md:min-h-44 md:p-7">
      <CountUp
        {...parts}
        duration={1800}
        className="block whitespace-nowrap text-3xl font-light leading-none text-service-paper transition-transform duration-500 group-hover/stat:-translate-y-1 md:text-4xl"
      />
      <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.2em] text-service-lavender/65">{label}</p>
    </div>
  );
};

const StatBlock = ({ stats }: { stats: { value: string; label: string }[] }) => (
  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
    {stats.map((stat) => <AnimatedStat key={stat.label} {...stat} />)}
  </div>
);

const ServiceTags = ({ items }: { items: string[] }) => items.length > 0 ? (
  <div className="mt-7 flex flex-wrap gap-2.5">
    {items.map((item) => (
      <span key={item} className="inline-flex items-center gap-2 border border-service-lavender/20 bg-service-paper/[0.05] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.14em] text-service-paper/75">
        <Check className="h-3 w-3 text-service-lavender" aria-hidden="true" />{item}
      </span>
    ))}
  </div>
) : null;

const Services = () => (
  <PageLayout
    title="Services"
    subtitle="From acceleration to venture building to investment management - meeting enterprises wherever they are in their growth journey."
    heroImage={servicesHero}
    heroAlt="Lettuce field with mountains in the background"
    backgroundColor="#851E3E"
  >
    <div className="space-y-28 md:space-y-40">
      <ScrollReveal>
        <section className="grid gap-10 border-y border-service-lavender/15 py-10 md:grid-cols-[0.8fr_1.2fr] md:items-end md:py-14">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-service-lavender/60">How we work</p>
            <h2 className="mt-4 text-4xl font-light leading-tight text-service-paper md:text-6xl">Capital for every<br /><span className="text-service-lavender">stage of growth.</span></h2>
          </div>
          <div>
            <p className="max-w-xl text-sm leading-7 text-service-paper/65 md:text-base">Our three pillars form one connected pathway, preparing entrepreneurs, building resilient ventures, and deploying capital for sustained commercial and social impact.</p>
            <div className="mt-8 grid grid-cols-3 border-t border-service-lavender/20 pt-5">
              {stageLabels.map((stage, index) => (
                <div key={stage} className="group flex items-center gap-2 text-service-paper/70">
                  <span className="text-xs text-service-lavender/50">0{index + 1}</span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.18em] sm:text-xs">{stage}</span>
                  {index < 2 && <ArrowDownRight className="ml-auto mr-2 hidden h-4 w-4 text-service-lavender/40 transition-transform group-hover:translate-x-1 group-hover:translate-y-1 sm:block" />}
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="group grid gap-10 border-t border-service-lavender/15 pt-12 lg:grid-cols-12 lg:items-center md:pt-16">
          <div className="lg:col-span-5">
            <div className="mb-5 flex items-center gap-3 text-service-lavender/65">
              <Rocket className="h-5 w-5" /><span className="text-[10px] font-medium uppercase tracking-[0.25em]">01 / Accelerate</span>
            </div>
            <h2 className="text-4xl font-light not-italic leading-[1.05] text-service-paper md:text-6xl">Acceleration &amp;<br /><span className="text-service-lavender">Investment Readiness</span></h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-service-paper/65">{services[0].goal}</p>
            <ServiceTags items={services[0].subServices} />
          </div>
          <div className="lg:col-span-7">
            <StatBlock stats={services[0].stats} />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="group grid gap-10 border-t border-service-lavender/15 pt-12 lg:grid-cols-12 lg:items-center md:pt-16">
          <div className="lg:col-span-5">
            <div className="mb-5 flex items-center gap-3 text-service-lavender/65">
              <Leaf className="h-5 w-5" /><span className="text-[10px] font-medium uppercase tracking-[0.25em]">02 / Build</span>
            </div>
            <h2 className="text-4xl font-light not-italic leading-[1.05] text-service-paper md:text-6xl">Venture Building &amp;<br /><span className="text-service-lavender">Impact-Linked Financing</span></h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-service-paper/65">{services[1].goal}</p>
            <ServiceTags items={services[1].subServices} />
          </div>
          <div className="lg:col-span-7">
            <StatBlock stats={services[1].stats} />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="group grid gap-10 border-t border-service-lavender/15 pt-12 lg:grid-cols-12 lg:items-center md:pt-16">
            <div className="lg:col-span-5">
              <div className="mb-5 flex items-center gap-3 text-service-lavender/65">
                <BarChart3 className="h-5 w-5" /><span className="text-[10px] font-medium uppercase tracking-[0.25em]">03 / Invest</span>
              </div>
              <h2 className="text-4xl font-light not-italic leading-[1.05] text-service-paper md:text-6xl">Investment<br /><span className="text-service-lavender">Management</span></h2>
              <p className="mt-7 max-w-md text-sm leading-7 text-service-paper/65">{services[2].goal}</p>
            </div>
            <div className="lg:col-span-7">
              <StatBlock stats={services[2].stats} />
            </div>
        </section>
      </ScrollReveal>
    </div>
  </PageLayout>
);

export default Services;
