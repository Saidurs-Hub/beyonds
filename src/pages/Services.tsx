import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import AnimatedImage from "@/components/AnimatedImage";
import { ArrowDownRight, BarChart3, Check, Leaf, Rocket, Sparkles, TrendingUp } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";
import accelerationImage from "@/assets/acceleration-bg.jpg";
import ventureImage from "@/assets/venture-building-bg.jpg";

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

const AnimatedStat = ({ value, label, large = false }: { value: string; label: string; large?: boolean }) => {
  const parts = statParts(value);
  return (
    <div className="group/stat">
      <CountUp
        {...parts}
        duration={1800}
        className={`${large ? "text-5xl md:text-7xl" : "text-3xl md:text-5xl"} block font-light leading-none text-service-paper transition-transform duration-500 group-hover/stat:-translate-y-1`}
      />
      <p className="mt-3 max-w-[14rem] text-[10px] font-medium uppercase tracking-[0.25em] text-service-lavender/60">{label}</p>
    </div>
  );
};

const PartnerMarks = ({ partners }: { partners: string[] }) => {
  if (partners.length === 0) return null;
  return (
    <div className="mt-9 border-t border-service-lavender/15 pt-6">
      <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-service-lavender/50">Partners</p>
      <div className="flex flex-wrap gap-2.5">
        {partners.map((partner) => (
          <span key={partner} className="inline-flex min-h-9 items-center border border-service-lavender/20 bg-service-paper/[0.04] px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.12em] text-service-paper/70 transition-colors duration-300 hover:border-service-lavender/50 hover:bg-service-paper/[0.08]">
            {partner}
          </span>
        ))}
      </div>
    </div>
  );
};

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
            <h2 className="mt-4 text-4xl font-light leading-tight text-service-paper md:text-6xl">Capital for every<br /><em className="text-service-lavender">stage of growth.</em></h2>
          </div>
          <div>
            <p className="max-w-xl text-sm leading-7 text-service-paper/65 md:text-base">Our three pillars form one connected pathway—preparing entrepreneurs, building resilient ventures, and deploying capital for sustained commercial and social impact.</p>
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
        <section className="group grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="relative z-10 pt-5 lg:col-span-5 lg:pt-12">
            <div className="mb-5 flex items-center gap-3 text-service-lavender/65">
              <Rocket className="h-5 w-5" /><span className="text-[10px] font-medium uppercase tracking-[0.25em]">01 / Accelerate</span>
            </div>
            <h2 className="text-4xl font-light leading-[1.05] text-service-paper md:text-6xl">Acceleration &amp;<br /><em className="text-service-lavender">Investment Readiness</em></h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-service-paper/65">{services[0].goal}</p>
            <ServiceTags items={services[0].subServices} />
            <PartnerMarks partners={services[0].partners} />
          </div>
          <div className="relative lg:col-span-7">
            <div className="aspect-[16/11] overflow-hidden bg-service-plum">
              <AnimatedImage src={accelerationImage} alt="Entrepreneurs collaborating in an acceleration program" className="h-full w-full object-cover opacity-70 grayscale transition duration-700 group-hover:scale-[1.03] group-hover:opacity-85" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-service-plum/90 via-service-plum/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 gap-4 p-5 md:p-8">
                {services[0].stats.map((stat) => <AnimatedStat key={stat.label} {...stat} />)}
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 -z-10 hidden h-40 w-40 border border-service-lavender/20 transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2 lg:block" />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="group grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="relative order-2 lg:order-1 lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden border border-service-lavender/15 bg-service-plum">
              <AnimatedImage src={ventureImage} alt="Climate-resilient agriculture and venture building" className="h-full w-full object-cover opacity-65 grayscale transition duration-700 group-hover:scale-[1.04] group-hover:opacity-80" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-service-plum via-service-plum/15 to-transparent" />
              <Leaf className="absolute right-7 top-7 h-10 w-10 text-service-lavender/70" />
              <div className="absolute bottom-8 left-8 right-8 space-y-7">
                {services[1].stats.map((stat, index) => <AnimatedStat key={stat.label} {...stat} large={index === 0} />)}
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-7 lg:pl-12">
            <div className="mb-5 flex items-center gap-3 text-service-lavender/65">
              <Leaf className="h-5 w-5" /><span className="text-[10px] font-medium uppercase tracking-[0.25em]">02 / Build</span>
            </div>
            <h2 className="text-4xl font-light leading-[1.05] text-service-paper md:text-6xl">Venture Building &amp;<br /><em className="text-service-lavender">Impact-Linked Financing</em></h2>
            <p className="mt-7 max-w-xl text-sm leading-7 text-service-paper/65">{services[1].goal}</p>
            <ServiceTags items={services[1].subServices} />
            <PartnerMarks partners={services[1].partners} />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="group border-t border-service-lavender/15 pt-12 md:pt-16">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7 lg:pr-12">
              <div className="mb-5 flex items-center gap-3 text-service-lavender/65">
                <BarChart3 className="h-5 w-5" /><span className="text-[10px] font-medium uppercase tracking-[0.25em]">03 / Invest</span>
              </div>
              <h2 className="text-4xl font-light leading-[1.05] text-service-paper md:text-6xl">Investment<br /><em className="text-service-lavender">Management</em></h2>
              <div className="relative mt-10 aspect-[21/9] overflow-hidden border border-service-lavender/15 bg-service-plum/70">
                <div className="absolute inset-0 grid grid-cols-6 items-end gap-2 p-7 opacity-70">
                  {[30, 45, 38, 62, 76, 94].map((height, index) => <div key={height} className="bg-service-lavender/20 transition-all duration-700 group-hover:bg-service-lavender/35" style={{ height: `${height}%`, transitionDelay: `${index * 60}ms` }} />)}
                </div>
                <div className="absolute inset-x-7 top-7 flex items-center justify-between text-service-lavender/60">
                  <TrendingUp className="h-6 w-6" /><Sparkles className="h-4 w-4" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end lg:col-span-5 lg:pb-2">
              <p className="border-l border-service-lavender/30 pl-6 text-lg font-light italic leading-8 text-service-paper/75 md:text-2xl">{services[2].goal}</p>
              <div className="mt-10 grid grid-cols-3 gap-4 border-y border-service-lavender/15 py-7">
                {services[2].stats.map((stat) => <AnimatedStat key={stat.label} {...stat} />)}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  </PageLayout>
);

export default Services;
