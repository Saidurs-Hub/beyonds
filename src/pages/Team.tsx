import PageLayout from "@/components/PageLayout";
import teamLeadership from "@/assets/team-leadership.png";
import teamCore from "@/assets/team-core.png";
import teamAk from "@/assets/team-ak.png";

interface TeamMember {
  name: string;
  role: string;
  years: string;
  expertise: string[];
  photoIndex: number;
}

const leadership: TeamMember[] = [
  { name: "Zahida Fizza Kabir", role: "Chairperson", years: "30+", expertise: ["Social Entrepreneurship & Development Leadership", "Healthcare & Women's Empowerment", "Mental Health & Care Economy"], photoIndex: 0 },
  { name: "Muhymin Chowdhury", role: "Managing Director", years: "18+", expertise: ["Strategic Partnerships & Institutional Growth", "Startup & Venture Growth Financing", "Impact Fund Management", "Blended Finance Structuring"], photoIndex: 1 },
  { name: "A.K. Faizan Salam", role: "Director & CAMLCO", years: "12+", expertise: ["Growth Strategy & Business Expansion", "Venture Development & Portfolio Management", "Digital Transformation & AI for Business"], photoIndex: 2 },
  { name: "Sarah Iqbal", role: "Head — Impact Partners", years: "10+", expertise: ["Impact Investments & Fund Management", "Early-Stage Deal Structuring", "Thematic & Donor-Funded Programs"], photoIndex: 3 },
  { name: "Hridoy Islam", role: "Portfolio Manager", years: "10+", expertise: ["Fund Mobilization & Capital Raising", "Impact-Driven Finance", "Alternative Investment Management"], photoIndex: 4 },
];

const coreTeam: TeamMember[] = [
  { name: "M. Samiul Haque", role: "Head — Research", years: "10+", expertise: ["SME Investment Structuring", "Market-Based Solutions Design", "Policy Analysis"], photoIndex: 0 },
  { name: "Saddam Khan Sumit", role: "Sr. Investment Associate", years: "10+", expertise: ["Deal Sourcing & Pipeline Development", "Financial Valuation", "Investment Analysis"], photoIndex: 1 },
  { name: "Lamia Hafiz", role: "Accelerator Manager", years: "12+", expertise: ["Program Design & Delivery", "Portfolio & Founder Support", "Innovation Fund Management"], photoIndex: 2 },
  { name: "Kashfia Mahmud", role: "Gender Lens Strategist", years: "15+", expertise: ["Gender Equality & Social Inclusion", "Microfinance & Financial Inclusion", "Fintech & Alternative Credit Models"], photoIndex: 3 },
  { name: "Ahmed Jawad Yusuf", role: "Lead — Ecosystem Engagement", years: "12+", expertise: ["Fundraising & Fund Management", "Angel Investments & VC", "Impact Measurement"], photoIndex: 4 },
];

const MemberCard = ({ member, groupImage }: { member: TeamMember; groupImage: string }) => {
  // Each person occupies ~20% of the composite image width
  const xPercent = member.photoIndex * 20 + 10; // center of each person's slot

  return (
    <div className="group space-y-5">
      <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-accent/10">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat grayscale group-hover:grayscale-0 transition-all duration-500"
          style={{
            backgroundImage: `url(${groupImage})`,
            backgroundPosition: `${xPercent}% 15%`,
            backgroundSize: '500% auto',
          }}
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-foreground text-base font-medium" style={{ fontFamily: "var(--font-body)" }}>{member.name}</h3>
        <p className="text-accent text-xs tracking-[0.15em] uppercase" style={{ fontFamily: "var(--font-body)" }}>{member.role}</p>
      </div>
      <p className="text-foreground/40 text-xs leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
        {member.expertise.join(" · ")}
      </p>
    </div>
  );
};

const Team = () => (
  <PageLayout
    title="Team"
    subtitle="Decades of combined experience across impact investing, venture building, fund management, and development finance."
  >
    <div className="space-y-24">
      <section className="space-y-10">
        <h2 className="text-foreground/40 text-[11px] tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "var(--font-body)" }}>Leadership</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {leadership.map((m) => <MemberCard key={m.name} member={m} groupImage={teamLeadership} />)}
        </div>
      </section>
      <section className="space-y-10">
        <h2 className="text-foreground/40 text-[11px] tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "var(--font-body)" }}>Core Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {coreTeam.map((m) => <MemberCard key={m.name} member={m} groupImage={teamCore} />)}
        </div>
      </section>
    </div>
  </PageLayout>
);

export default Team;
