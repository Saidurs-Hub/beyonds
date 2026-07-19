import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedImage from "@/components/AnimatedImage";
import { Linkedin } from "lucide-react";
import { openExternalLink } from "@/lib/openExternalLink";
import teamHero from "@/assets/team-hero.jpeg";
import teamZahida from "@/assets/team-zahida.png";
import teamMuhymin from "@/assets/team-muhymin.png";
import teamAk from "@/assets/team-ak.png";
import teamSarah from "@/assets/team-sarah.png";
import teamHridoy from "@/assets/team-hridoy.png";
import teamSamiul from "@/assets/team-samiul.png";
import teamSaddam from "@/assets/team-saddam.png";
import teamLamia from "@/assets/team-lamia.png";
import teamKashfia from "@/assets/team-kashfia.png";
import teamJawad from "@/assets/team-jawad.png";

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
  { name: "Muhymin Chowdhury", role: "Managing Director", years: "18+", expertise: ["Strategic Partnerships & Institutional Growth", "Startup & Venture Growth Financing", "Impact Fund Management", "Blended Finance Structuring"], photo: teamMuhymin, linkedin: "https://www.linkedin.com/in/muhymin-chowdhury/" },
  { name: "A.K. Faizan Salam", role: "Director & CAMLCO", years: "12+", expertise: ["Growth Strategy & Business Expansion", "Venture Development & Portfolio Management", "Digital Transformation & AI for Business"], photo: teamAk, linkedin: "https://www.linkedin.com/in/faizan-salam-ak/" },
  { name: "Sarah Iqbal", role: "Head — Impact Partners", years: "10+", expertise: ["Impact Investments & Fund Management", "Early-Stage Deal Structuring", "Thematic & Donor-Funded Services"], photo: teamSarah, linkedin: "https://www.linkedin.com/in/sarah-iqbal-5962b641/" },
  { name: "Hridoy Islam", role: "Portfolio Manager", years: "10+", expertise: ["Fund Mobilization & Capital Raising", "Impact-Driven Finance", "Alternative Investment Management"], photo: teamHridoy, linkedin: "https://www.linkedin.com/in/hridoyislam/" },
];

const coreTeam: TeamMember[] = [
  { name: "M. Samiul Haque", role: "Head — Research", years: "10+", expertise: ["SME Investment Structuring", "Market-Based Solutions Design", "Policy Analysis"], photo: teamSamiul, linkedin: "https://www.linkedin.com/in/m-samiul-haque/" },
  { name: "Saddam Khan Sumit", role: "Sr. Investment Associate", years: "10+", expertise: ["Deal Sourcing & Pipeline Development", "Financial Valuation", "Investment Analysis"], photo: teamSaddam, linkedin: "https://www.linkedin.com/in/sksumit/" },
  { name: "Lamia Hafiz", role: "Accelerator Manager", years: "12+", expertise: ["Program Design & Delivery", "Portfolio & Founder Support", "Innovation Fund Management"], photo: teamLamia, linkedin: "https://www.linkedin.com/in/lamia-hafiz-4a3a303b9/" },
  { name: "Kashfia Mahmud", role: "Gender Lens Strategist", years: "15+", expertise: ["Gender Equality & Social Inclusion", "Microfinance & Financial Inclusion", "Fintech & Alternative Credit Models"], photo: teamKashfia, linkedin: "https://www.linkedin.com/in/kashfiamahmud-mfin/" },
  { name: "Ahmed Jawad Yusuf", role: "Lead — Ecosystem Engagement", years: "12+", expertise: ["Fundraising & Fund Management", "Angel Investments & VC", "Impact Measurement"], photo: teamJawad, linkedin: "https://www.linkedin.com/in/ahmed-jyusuf/" },
];

const MemberCard = ({ member, index }: { member: TeamMember; index: number }) => {
  const [showLinkedin, setShowLinkedin] = useState(false);

  return (
    <ScrollReveal delay={index * 0.08}>
      <div
        className={`group flex flex-row sm:flex-col gap-4 sm:gap-5 relative ${member.linkedin ? "cursor-pointer" : ""}`}
        onClick={() => member.linkedin && setShowLinkedin((v) => !v)}
      >
        <div className="relative w-20 h-20 sm:w-full sm:aspect-[3/4] sm:h-auto rounded-xl overflow-hidden bg-accent/10 flex-shrink-0">
          <AnimatedImage
            src={member.photo}
            alt={member.name}
            className="absolute inset-0 w-full h-full object-cover object-top bg-teal-50"
          />
        </div>
        <div className="flex flex-col justify-center sm:space-y-1 min-w-0">
          <h3 className="text-foreground text-sm sm:text-base font-medium" style={{ fontFamily: "var(--font-body)" }}>{member.name}</h3>
          <p className="text-accent text-[10px] sm:text-xs tracking-[0.15em] uppercase" style={{ fontFamily: "var(--font-body)" }}>{member.role}</p>
          <p className="text-foreground/40 text-[10px] sm:text-xs leading-relaxed mt-1 sm:mt-3 line-clamp-2 sm:line-clamp-none" style={{ fontFamily: "var(--font-body)" }}>
            {member.expertise.join(" · ")}
          </p>
        </div>

        {member.linkedin && showLinkedin && (
          <div
            className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-background/80 backdrop-blur-sm animate-scale-in"
            onClick={(e) => { e.stopPropagation(); setShowLinkedin(false); }}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                openExternalLink(member.linkedin);
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95"
              style={{ backgroundColor: "#0077b5", fontFamily: "var(--font-body)" }}
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn Profile
            </button>
          </div>
        )}
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
          {leadership.map((m, i) => <MemberCard key={m.name} member={m} index={i} />)}
        </div>
      </section>
      <section className="space-y-10">
        <ScrollReveal>
          <h2 className="text-foreground/40 text-[11px] tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "var(--font-body)" }}>Core Team</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8">
          {coreTeam.map((m, i) => <MemberCard key={m.name} member={m} index={i} />)}
        </div>
      </section>
    </div>
  </PageLayout>
);

export default Team;
