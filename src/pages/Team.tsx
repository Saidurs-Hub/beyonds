import { useState } from "react";
import { Linkedin } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { openExternalLink } from "@/lib/openExternalLink";
import teamHero from "@/assets/team-hero.jpeg";

import teamMuhymin from "@/assets/team-styled-samiul-centered.webp";
import teamAk from "@/assets/team-styled-aksalam.webp";
import teamFaizan from "@/assets/team-styled-faizan.webp";
import teamSarah from "@/assets/team-styled-sarah.webp";
import teamMuhyminZoomed from "@/assets/team-styled-suhymin-zoomed.webp";
import teamSaddam from "@/assets/team-styled-saddam.webp";
import teamKashfia from "@/assets/team-styled-kashfia.webp";
import teamLamia from "@/assets/team-styled-lamia.webp";
import teamJawadNew from "@/assets/team-styled-jawad.webp";
import teamMariya from "@/assets/team-styled-mariya.webp";
import teamTasfia from "@/assets/team-styled-tasfia.webp";
import teamSalwa from "@/assets/team-styled-salwa.webp";
import teamMeraj from "@/assets/team-styled-meraj.webp";
import teamHridoyOld from "@/assets/team-styled-hridoy.webp";
import teamShehzad from "@/assets/team-styled-shehzad.webp";
import teamAzad from "@/assets/team-styled-azad.webp";
import teamZahida from "@/assets/team-styled-zahida-zoomed.webp";
import teamRafid from "@/assets/team-styled-rafid.webp";


interface TeamMember {
  name: string;
  role: string;
  years: string;
  expertise: string[];
  photo: string;
  linkedin?: string;
}

const leadership: TeamMember[] = [
  { name: "Zahida Fizza Kabir", role: "Director", years: "", expertise: [], photo: teamZahida, linkedin: "https://www.linkedin.com/in/zahida-fizza-kabir-02456b8b/" },
  { name: "Muhymin Chowdhury", role: "DIRECTOR", years: "18+", expertise: [], photo: teamMuhyminZoomed, linkedin: "https://www.linkedin.com/in/muhymin-chowdhury/" },
  { name: "Md. Abul Kalam Azad", role: "Director", years: "", expertise: [], photo: teamAzad, linkedin: "https://www.linkedin.com/in/azadrubel/" },
  { name: "A.K. Faizan Salam", role: "Director & CAMLCO", years: "12+", expertise: [], photo: teamFaizan, linkedin: "https://www.linkedin.com/in/faizan-salam-ak/" },
];

const managementTeam: TeamMember[] = [
  { name: "Shehzad Munim", role: "CHIEF INVESTMENT STRATEGIST\u00a0", years: "", expertise: [], photo: teamShehzad, linkedin: "https://www.linkedin.com/in/shehzad-munim-38373865/" },
  { name: "Sarah Iqbal", role: "Portfolio Manager", years: "10+", expertise: [], photo: teamSarah, linkedin: "https://www.linkedin.com/in/sarah-iqbal-5962b641/" },
  { name: "Hridoy Islam", role: "Portfolio Manager", years: "10+", expertise: [], photo: teamHridoyOld, linkedin: "https://www.linkedin.com/in/hridoyislam/" },
];

const coreTeam: TeamMember[] = [
  { name: "M. Samiul Haque", role: "Head - Advisory and Research", years: "10+", expertise: [], photo: teamMuhymin, linkedin: "https://www.linkedin.com/in/m-samiul-haque/" },
  { name: "Saddam Khan Sumit", role: "Sr. Investment Associate", years: "10+", expertise: [], photo: teamSaddam, linkedin: "https://www.linkedin.com/in/sksumit/" },
  { name: "Lamia Hafiz", role: "Accelerator Manager", years: "12+", expertise: [], photo: teamLamia, linkedin: "https://www.linkedin.com/in/lamia-hafiz-4a3a303b9/" },
  { name: "Kashfia Mahmud", role: "Gender Lens Strategist", years: "15+", expertise: [], photo: teamKashfia, linkedin: "https://www.linkedin.com/in/kashfiamahmud-mfin/" },
  { name: "Ahmed Jawad Yusuf", role: "Lead - Ecosystem Engagement", years: "12+", expertise: [], photo: teamJawadNew, linkedin: "https://www.linkedin.com/in/ahmed-jyusuf/" },
  { name: "Meraj Ahmed, CFA", role: "Associate", years: "", expertise: [], photo: teamMeraj },
  { name: "Mariya Arafin Bristy", role: "ASSISTANT MANAGER - FINANCE & ACCOUNTS", years: "", expertise: [], photo: teamMariya, linkedin: "https://www.linkedin.com/in/mariya-arafin-bristy-58a23922b/" },
  { name: "Salwa Tasnim Silma", role: "Investment Analyst", years: "", expertise: [], photo: teamSalwa, linkedin: "https://www.linkedin.com/in/sk-salwa-tasnim-silma-5b45231a0/" },
  { name: "Tasfia Ahmed", role: "Data Analyst", years: "", expertise: [], photo: teamTasfia, linkedin: "https://www.linkedin.com/in/tasfia-ahmed/" },
  { name: "Mustafa Rafid Amin", role: "", years: "", expertise: [], photo: teamRafid },
];


const MemberCard = ({ member, priority = false }: { member: TeamMember; priority?: boolean }) => {
  const [hovered, setHovered] = useState(false);
  const hasDetails = !!member.linkedin;

  return (
    <ScrollReveal>
      <div
        className={`group relative ${hasDetails ? "cursor-pointer" : ""}`}
        onMouseEnter={() => hasDetails && setHovered(true)}
        onMouseLeave={() => hasDetails && setHovered(false)}
      >
        <div className="relative w-20 sm:w-full flex-shrink-0">
          <div
            className="relative w-full h-20 sm:h-auto sm:aspect-square rounded-lg"
          >
            {member.photo ? (
              <img
                src={member.photo}
                alt={member.name}
                loading={priority ? "eager" : "lazy"}
                decoding="async"
                // @ts-expect-error fetchpriority is valid HTML
                fetchpriority={priority ? "high" : "low"}
                className="absolute bottom-0 left-0 w-full pointer-events-none"
                style={{ height: "114.5%" }}

              />
            ) : (

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-foreground/50 text-2xl sm:text-4xl font-light" style={{ fontFamily: "var(--font-display)" }}>
                  {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </span>
              </div>
            )}

            {hasDetails && hovered && (
              <div
                className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 rounded-2xl bg-background/95 backdrop-blur-sm p-4 sm:p-5 animate-scale-in"
              >
                {member.linkedin && (
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); openExternalLink(member.linkedin); }}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-white transition-transform hover:scale-105 active:scale-95"
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
          {member.role.trim() && (
            <p className="text-accent text-[10px] sm:text-xs tracking-[0.15em] uppercase" style={{ fontFamily: "var(--font-body)" }}>{member.role}</p>
          )}
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
    headerExtra={
      <a
        href="https://www.linkedin.com/company/beyondsventures"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Beyond S Ventures on LinkedIn"
        className="text-white/70 hover:text-white transition-colors"
      >
        <Linkedin className="w-5 h-5" />
      </a>
    }
  >
    <div className="space-y-24">
      <section className="space-y-10">
        <ScrollReveal>
          <h2 className="text-foreground/40 text-[11px] tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "var(--font-body)" }}>Leadership</h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-4xl">
          {leadership.map((m, i) => <MemberCard key={m.name} member={m} priority={i < 2} />)}
        </div>
      </section>
      <section className="space-y-10">
        <ScrollReveal>
          <h2 className="text-foreground/40 text-[11px] tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "var(--font-body)" }}>Management Team</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-8 max-w-3xl">
          {managementTeam.map((m, i) => <MemberCard key={m.name} member={m} priority={i < 2} />)}
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
