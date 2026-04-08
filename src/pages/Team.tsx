import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const leadership = [
  { name: "Zahida Fizza Kabir", role: "Chairperson", years: "30+", expertise: ["Social Entrepreneurship & Development Leadership", "Healthcare & Women's Empowerment", "Mental Health & Care Economy"] },
  { name: "Muhymin Chowdhury", role: "Managing Director", years: "18+", expertise: ["Strategic Partnerships & Institutional Growth", "Startup & Venture Growth Financing", "Impact Fund Management", "Blended Finance Structuring"] },
  { name: "A.K. Faizan Salam", role: "Director & CAMLCO", years: "12+", expertise: ["Growth Strategy & Business Expansion", "Venture Development & Portfolio Management", "Digital Transformation & AI for Business", "Strategic Partnerships & Scaling"] },
  { name: "Sarah Iqbal", role: "Head — Impact Partners", years: "10+", expertise: ["Impact Investments & Fund Management", "Early-Stage Deal Structuring & Due Diligence", "Thematic & Donor-Funded Program Operations"] },
  { name: "Hridoy Islam", role: "Portfolio Manager", years: "10+", expertise: ["Fund Mobilization & Capital Raising", "Impact-Driven Finance", "Alternative Investment Management", "MSME Fund Structuring"] },
];

const team = [
  { name: "M. Samiul Haque", role: "Head — Research", years: "10+", expertise: ["Structuring & Deployment of SME Investments", "Design of Market-Based Solutions", "Policy Analysis and Insight"] },
  { name: "Saddam Khan Sumit", role: "Sr. Investment Associate", years: "10+", expertise: ["Deal Sourcing & Pipeline Development", "Early-stage Funding Support", "Financial Valuation & Investment Analysis"] },
  { name: "Lamia Hafiz", role: "Accelerator Manager", years: "12+", expertise: ["Program Design & Delivery", "Portfolio & Founder Support", "Innovation Fund Management"] },
  { name: "Kashfia Mahmud", role: "Gender Lens Strategist", years: "15+", expertise: ["Gender Equality & Social Inclusion (GESI)", "Microfinance & Financial Inclusion", "Fintech & Alternative Credit Models"] },
  { name: "Ahmed Jawad Yusuf", role: "Lead — Ecosystem Engagement", years: "12+", expertise: ["Fundraising & Fund Management", "Angel Investments & Venture Capital", "Impact Measurement & Management"] },
];

const TeamMemberCard = ({ member }: { member: typeof leadership[0] }) => (
  <div className="border border-border/30 rounded-lg p-8 bg-card/20 space-y-4">
    <div className="space-y-1">
      <h3 className="text-foreground text-lg" style={{ fontFamily: "var(--font-body)" }}>{member.name}</h3>
      <p className="text-accent text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)" }}>{member.role}</p>
      <p className="text-foreground/30 text-xs" style={{ fontFamily: "var(--font-body)" }}>{member.years} years of experience</p>
    </div>
    <ul className="space-y-1.5">
      {member.expertise.map((e, i) => (
        <li key={i} className="text-foreground/50 text-xs leading-relaxed pl-3 border-l border-accent/20" style={{ fontFamily: "var(--font-body)" }}>{e}</li>
      ))}
    </ul>
  </div>
);

const Team = () => (
  <PageTransition>
    <div className="min-h-screen bg-background text-foreground">
      <header className="px-6 md:px-12 lg:px-20 py-6">
        <Link to="/" className="text-foreground/60 hover:text-foreground transition-colors flex items-center gap-2 text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
      </header>

      <main className="px-6 md:px-12 lg:px-20 py-12 max-w-5xl mx-auto space-y-20">
        <section className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-light tracking-wide" style={{ fontFamily: "var(--font-display)" }}>Team</h1>
          <p className="text-foreground/60 text-lg leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-body)" }}>
            Our leadership team brings decades of experience across impact investing, venture building, fund management, and development finance.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-foreground/40 text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)" }}>Leadership</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((m) => <TeamMemberCard key={m.name} member={m} />)}
          </div>
        </section>

        <section className="space-y-8 border-t border-border/20 pt-12">
          <h2 className="text-foreground/40 text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)" }}>Core Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m) => <TeamMemberCard key={m.name} member={m} />)}
          </div>
        </section>
      </main>
    </div>
  </PageTransition>
);

export default Team;
