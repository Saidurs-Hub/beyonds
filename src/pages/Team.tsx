import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { Linkedin, X } from "lucide-react";
import { openExternalLink } from "@/lib/openExternalLink";
import teamHero from "@/assets/team-hero.jpeg";

import teamHridoyOld from "@/assets/team-hridoy.png";
import teamMuhymin from "@/assets/team-muhymin.jpeg.asset.json";
import teamAk from "@/assets/team-aksalam.jpeg.asset.json";
import teamSarah from "@/assets/team-sarah.jpeg.asset.json";
import teamSamiul from "@/assets/team-samiul.jpeg.asset.json";
import teamSaddam from "@/assets/team-saddam.jpeg.asset.json";
import teamKashfia from "@/assets/team-kashfia.jpeg.asset.json";
import teamLamia from "@/assets/team-lamia.jpeg.asset.json";
import teamJawadNew from "@/assets/team-jawad-new.jpeg.asset.json";
import teamMariya from "@/assets/team-mariya.jpeg.asset.json";
import teamTasfia from "@/assets/team-tasfia.jpeg.asset.json";
import teamSalwa from "@/assets/team-salwa.jpeg.asset.json";
import teamMeraj from "@/assets/team-meraj.jpeg.asset.json";

interface TeamMember {
  name: string;
  role: string;
  years: string;
  expertise: string[];
  photo: string;
  linkedin?: string;
}

const leadership: TeamMember[] = [
  { name: "Shehzad Munim", role: "Chairperson", years: "", expertise: [], photo: "" },
  { name: "Muhymin Chowdhury", role: "Managing Director", years: "18+", expertise: ["Strategic Partnerships & Institutional Growth", "Startup & Venture Growth Financing", "Impact Fund Management", "Blended Finance Structuring"], photo: teamMuhymin.url, linkedin: "https://www.linkedin.com/in/muhymin-chowdhury/" },
  { name: "A.K. Faizan Salam", role: "Director & CAMLCO", years: "12+", expertise: ["Growth Strategy & Business Expansion", "Venture Development & Portfolio Management", "Digital Transformation & AI for Business"], photo: teamAk.url, linkedin: "https://www.linkedin.com/in/faizan-salam-ak/" },
  { name: "Sarah Iqbal", role: "Portfolio Manager", years: "10+", expertise: ["Impact Investments & Fund Management", "Early-Stage Deal Structuring", "Thematic & Donor-Funded Services"], photo: teamSarah.url, linkedin: "https://www.linkedin.com/in/sarah-iqbal-5962b641/" },
  { name: "Hridoy Islam", role: "Portfolio Manager", years: "10+", expertise: ["Fund Mobilization & Capital Raising", "Impact-Driven Finance", "Alternative Investment Management"], photo: teamHridoyOld, linkedin: "https://www.linkedin.com/in/hridoyislam/" },
];

const coreTeam: TeamMember[] = [
  { name: "M. Samiul Haque", role: "Head — Advisory and Research", years: "10+", expertise: ["SME Investment Structuring", "Market-Based Solutions Design", "Policy Analysis"], photo: teamSamiul.url, linkedin: "https://www.linkedin.com/in/m-samiul-haque/" },
  { name: "Saddam Khan Sumit", role: "Sr. Investment Associate", years: "10+", expertise: ["Deal Sourcing & Pipeline Development", "Financial Valuation", "Investment Analysis"], photo: teamSaddam.url, linkedin: "https://www.linkedin.com/in/sksumit/" },
  { name: "Lamia Hafiz", role: "Accelerator Manager", years: "12+", expertise: ["Program Design & Delivery", "Portfolio & Founder Support", "Innovation Fund Management"], photo: teamLamia.url, linkedin: "https://www.linkedin.com/in/lamia-hafiz-4a3a303b9/" },
  { name: "Kashfia Mahmud", role: "Gender Lens Strategist", years: "15+", expertise: ["Gender Equality & Social Inclusion", "Microfinance & Financial Inclusion", "Fintech & Alternative Credit Models"], photo: teamKashfia.url, linkedin: "https://www.linkedin.com/in/kashfiamahmud-mfin/" },
  { name: "Ahmed Jawad Yusuf", role: "Lead — Ecosystem Engagement", years: "12+", expertise: ["Fundraising & Fund Management", "Angel Investments & VC", "Impact Measurement"], photo: teamJawadNew.url, linkedin: "https://www.linkedin.com/in/ahmed-jyusuf/" },
  { name: "Meraj Ahmed", role: "", years: "", expertise: [], photo: teamMeraj.url },
  { name: "Mariya Brishti", role: "", years: "", expertise: [], photo: teamMariya.url },
  { name: "Salwa Tasnim Silma", role: "", years: "", expertise: [], photo: teamSalwa.url },
  { name: "Tasfia Ahmed", role: "", years: "", expertise: [], photo: teamTasfia.url },
];

const BOX_BLUE = "#C6DEF1";

const MemberCard = ({ member }: { member: TeamMember }) => {
  const [open, setOpen] = useState(false);
  const hasDetails = member.expertise.length > 0 || !!member.linkedin;

  return (
    <ScrollReveal>
      <div
        className={`group flex flex-row sm:flex-col gap-4 sm:gap-5 relative ${hasDetails ? "cursor-pointer" : ""}`}
        onClick={() => hasDetails && setOpen((v) => !v)}
      >
        {/* Wrapper gives room for the head to overflow above the blue box */}
        <div className="relative w-20 sm:w-full flex-shrink-0 pt-2 sm:pt-4">
          <div
            className="relative w-full h-20 sm:h-auto sm:aspect-square rounded-2xl overflow-visible"
            style={{ backgroundColor: BOX_BLUE }}
          >
            {member.photo ? (
              <img
                src={member.photo}
                alt={member.name}
                loading="eager"
                decoding="async"
                // @ts-expect-error fetchpriority is valid HTML
                fetchpriority="high"
                className="absolute left-0 right-0 bottom-0 w-full h-[107%] object-contain object-bottom pointer-events-none"
                style={{ filter: "grayscale(1) contrast(1.05)" }}
              />

            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-foreground/50 text-2xl sm:text-4xl font-light" style={{ fontFamily: "var(--font-display)" }}>
                  {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </span>
              </div>
            )}

            {hasDetails && open && (
              <div
                className="absolute inset-0 z-20 flex flex-col rounded-2xl bg-background/95 backdrop-blur-sm p-4 sm:p-5 animate-scale-in overflow-y-auto"
                onClick={(e) => { e.stopPropagation(); }}
              >
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setOpen(false); }}
                  className="absolute top-2 right-2 p-1 rounded-md text-foreground/60 hover:text-foreground"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
                {member.expertise.length > 0 && (
                  <p className="text-foreground/70 text-[11px] sm:text-xs leading-relaxed pr-6" style={{ fontFamily: "var(--font-body)" }}>
                    {member.expertise.join(" · ")}
                  </p>
                )}
                {member.linkedin && (
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); openExternalLink(member.linkedin); }}
                    className="mt-auto self-start inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-white transition-transform hover:scale-105 active:scale-95"
                    style={{ backgroundColor: "#0077b5", fontFamily: "var(--font-body)" }}
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    LinkedIn
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center sm:space-y-1 min-w-0">
          <h3 className="text-foreground text-sm sm:text-base font-medium" style={{ fontFamily: "var(--font-body)" }}>{member.name}</h3>
          <p className="text-accent text-[10px] sm:text-xs tracking-[0.15em] uppercase" style={{ fontFamily: "var(--font-body)" }}>{member.role}</p>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Team = () => (
  <PageLayout
    title="Team"
    subtitle="Decades of combined experience across impact investing, venture building, fund management, and development finance."
    heroImage={teamHero}
    heroAlt="SAJIDA Foundation team group photo"
  >
    <div className="space-y-24">
      <section className="space-y-10">
        <ScrollReveal>
          <h2 className="text-foreground/40 text-[11px] tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "var(--font-body)" }}>Leadership</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8">
          {leadership.map((m) => <MemberCard key={m.name} member={m} />)}
        </div>
      </section>
      <section className="space-y-10">
        <ScrollReveal>
          <h2 className="text-foreground/40 text-[11px] tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "var(--font-body)" }}>Core Team</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8">
          {coreTeam.map((m) => <MemberCard key={m.name} member={m} />)}
        </div>
      </section>
    </div>
  </PageLayout>
);

export default Team;
