import PageLayout from "@/components/PageLayout";


interface TeamMember {
  name: string;
  role: string;
  years: string;
  expertise: string[];
}

const leadership: TeamMember[] = [
  { name: "Zahida Fizza Kabir", role: "Chairperson", years: "30+", expertise: ["Social Entrepreneurship & Development Leadership", "Healthcare & Women's Empowerment", "Mental Health & Care Economy"] },
  { name: "Muhymin Chowdhury", role: "Managing Director", years: "18+", expertise: ["Strategic Partnerships & Institutional Growth", "Startup & Venture Growth Financing", "Impact Fund Management", "Blended Finance Structuring"] },
  { name: "A.K. Faizan Salam", role: "Director & CAMLCO", years: "12+", expertise: ["Growth Strategy & Business Expansion", "Venture Development & Portfolio Management", "Digital Transformation & AI for Business"] },
  { name: "Sarah Iqbal", role: "Head — Impact Partners", years: "10+", expertise: ["Impact Investments & Fund Management", "Early-Stage Deal Structuring", "Thematic & Donor-Funded Programs"] },
  { name: "Hridoy Islam", role: "Portfolio Manager", years: "10+", expertise: ["Fund Mobilization & Capital Raising", "Impact-Driven Finance", "Alternative Investment Management"] },
];

const coreTeam: TeamMember[] = [
  { name: "M. Samiul Haque", role: "Head — Research", years: "10+", expertise: ["SME Investment Structuring", "Market-Based Solutions Design", "Policy Analysis"] },
  { name: "Saddam Khan Sumit", role: "Sr. Investment Associate", years: "10+", expertise: ["Deal Sourcing & Pipeline Development", "Financial Valuation", "Investment Analysis"] },
  { name: "Lamia Hafiz", role: "Accelerator Manager", years: "12+", expertise: ["Program Design & Delivery", "Portfolio & Founder Support", "Innovation Fund Management"] },
  { name: "Kashfia Mahmud", role: "Gender Lens Strategist", years: "15+", expertise: ["Gender Equality & Social Inclusion", "Microfinance & Financial Inclusion", "Fintech & Alternative Credit Models"] },
  { name: "Ahmed Jawad Yusuf", role: "Lead — Ecosystem Engagement", years: "12+", expertise: ["Fundraising & Fund Management", "Angel Investments & VC", "Impact Measurement"] },
];

const MemberCard = ({ member }: { member: TeamMember }) => (
  <div className="py-8 border-b border-border/10 last:border-b-0 grid grid-cols-[1fr_auto] md:grid-cols-[200px_180px_1fr] gap-4 md:gap-8 items-start">
    <div className="space-y-1">
      <h3 className="text-foreground text-base" style={{ fontFamily: "var(--font-body)" }}>{member.name}</h3>
      <p className="text-accent text-xs tracking-[0.15em] uppercase" style={{ fontFamily: "var(--font-body)" }}>{member.role}</p>
    </div>
    <div className="text-right md:text-left">
      <span className="text-foreground/30 text-xs" style={{ fontFamily: "var(--font-body)" }}>{member.years} yrs exp.</span>
    </div>
    <div className="col-span-2 md:col-span-1">
      <p className="text-foreground/40 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{member.expertise.join(" · ")}</p>
    </div>
  </div>
);

const Team = () => (
  <PageLayout
    title="Team"
    subtitle="Decades of combined experience across impact investing, venture building, fund management, and development finance."
  >
    <div className="space-y-20">
      <section className="space-y-4">
        <h2 className="text-foreground/40 text-[11px] tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "var(--font-body)" }}>Leadership</h2>
        <div>{leadership.map((m) => <MemberCard key={m.name} member={m} />)}</div>
      </section>
      <section className="space-y-4">
        <h2 className="text-foreground/40 text-[11px] tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "var(--font-body)" }}>Core Team</h2>
        <div>{coreTeam.map((m) => <MemberCard key={m.name} member={m} />)}</div>
      </section>
    </div>
  </PageLayout>
);

export default Team;
