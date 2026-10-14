/* HOW TO REMOVE THIS PAGE
 * Delete src/pages/Nava.tsx and src/pages/nava.css.
 * Remove the Nava lazy import and /nava route in src/App.tsx.
 * Remove the Nava navLinks entry in src/components/PageLayout.tsx.
 * Remove the Nava navLinks entry in src/pages/Index.tsx (homepage nav + mobile menu share one array).
 * Remove PageLayout's optional bare prop/branches if no other page uses it.
 * Remove the Co-invest with us bridge section and Link import in Portfolio.tsx.
 * Remove the nava-bridge tokens/styles in src/index.css.
 */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import sajidaLogo from "@/assets/sajida-logo.png";
import bsvLogoDark from "@/assets/bsv-logo-dark-trimmed.png";
import "./nava.css";

// CONTENT: All Nava display copy lives here. Edit these values without changing layout.
const content = {
  hero: {
    label: "Nava Capital Network", headline: "Ignite scale for", highlight: "high-growth SMEs.",
    lead: "A private investor consortium that connects Bangladesh's high-growth SMEs with smart private capital, backed by gated originations, shared diligence, and active monitoring after every deal.",
    buttons: ["Become a member", "Raise with Nava"],
  },
  // MARKET FIGURES — to remove: delete content.figures, the .nava-figures-band markup and all .nava-figures-band / .nava-figures / .nava-figure / .nava-number rules in nava.css; restore audience bottom and risk top padding to 64px and 100px on desktop.
  figures: [ ["< 1/3", "of managed funds in Bangladesh beat inflation"], ["4 Mn+", "SMEs borrow from informal lenders at over 5% a month"], ["$170 Bn", "sits in low-return, illiquid assets like fixed deposits and land"], ["$50k–500k", "the missing middle: too big for MFIs, too small for banks"] ],
  audiences: ([
    { label: "For smart private investors", title: "A trusted pipeline, with the work already done", text: "Performance-driven, proprietary deals with targeted returns of 300 to 500 bps above market rates and flexible ticket sizes.", benefits: ["End-to-end transaction advisory, from sourcing to recovery", "De-risked through co-investment and shared diligence", "Deal briefs, data room review, and investment memos", "Monthly business and field reports after you invest"], button: "Apply for membership", showButton: false }, // Membership CTA hidden for now, set showButton: true to restore
    { label: "For high-growth SMEs", title: "Capital, plus the network to grow with it", text: "For established SMEs ready to scale, with BDT 3 to 5 Cr in annual revenue and at least 3 years in operation.", benefits: ["Raise USD 50k to 200k, mainly debt or revenue share", "Market access and business development support", "Mentorship from like-minded investors and founders", "A seat at managed investor showcases"] },
  ] as { label: string; title: string; text: string; benefits: string[]; button?: string; showButton?: boolean }[]),
  // RISK SECTION — to remove: delete content.risk, the .nava-risk section markup below and the .nava-risk rules in nava.css.
  risk: {
    label: "HOW WE MANAGE RISK",
    heading: "From gated originations to skin in the game",
    items: ([
      { title: "Gated origination", text: "Every deal passes KYC, reference checks and readiness screens before it reaches an investor." },
      { title: "Shared diligence", text: "One independent desk runs diligence for all members, so each pays a fraction." },
      { title: "Active monitoring", text: "Regular site visits, business updates and cash flow reviews, enforced by NCN." },
      { title: "Planned recovery", text: "Repayment schedules are set at underwriting, with NCN support after the deal." },
      { title: "Skin in the game", text: "NCN, through BSV, may co-invest in the deals it brings." },
    ] as { title: string; text: string }[]),
  },
  // HOW IT WORKS — to remove: delete content.how, the .nava-how section markup below and the .nava-how rules in nava.css.
  how: {
    label: "HOW NAVA WORKS",
    heading: "One network between capital and growth.",
    steps: ([
      { title: "Private investors", text: "Bring capital and join as members" },
      { title: "NAVA Capital Network", text: "Sources, screens and runs shared diligence, then monitors every deal" },
      { title: "High-growth SMEs", text: "Receive capital, mentorship and market access" },
    ] as { title: string; text: string }[]),
  },
  backing: { label: "Our backing", title: "Housed under Beyond S Ventures & promoted by SAJIDA Foundation",
    entries: [
      { key: "sajida", alt: "SAJIDA Foundation logo", text: "A top-5 MFI in the country that also spearheads startup-ecosystem development through Impact Partners, a strategic impact advisory and thematic fund manager. Current portfolio includes OCBIF, CIF, & BSV." },
      { key: "bsv", alt: "Beyond S Ventures logo", text: "The private investment arm of SAJIDA Foundation, leverages its corporate relationships with direct access to investments, networks, pipelines, and markets." },
    ],
    stats: [["30 yrs", "of MFI experience in the market"], ["400k", "borrower network across the country"], ["$400 Mn", "deployed in the market to date"]] },
  // HIDDEN FOR NOW — the whole "Join us" section (label, heading, routes) is not rendered.
  // To restore it: re-add the section markup after "Our backing" and the .nava-join* / .nava-route* CSS.
  join: { label: "Join us", title: "Building the infrastructure that matches capital to growth.", text: "\n", routes: ([ {label:"Investors", title:"Apply for membership", link:"Start application →", show:false}, {label:"SMEs", title:"Submit your company", link:"Share your details →", show:false} ] as { label: string; title: string; link: string; show?: boolean }[]), },
  contact: { label: "CONTACT US", email: "ahmed.jawad@sajida.org", button: "Email us →", network: "NAVA CAPITAL NETWORK" },
};

// Hero buttons scroll to the contact section while "Join us" is hidden for now.
const JoinButton = ({ children, className = "" }: { children: string; className?: string }) => <Button asChild className={`nava-button ${className}`}><a href="#contact">{children}</a></Button>;

// Render dash glyphs in the body font so Cormorant's slanted hyphen isn't used in headings or big numbers.
const Hyphens = ({ text }: { text: string }) => (
  <>
    {text.split(/([-–—])/).map((part, index) => (
      /^[-–—]$/.test(part) ? <span key={index} className="nava-dash">{part}</span> : part
    ))}
  </>
);

// Risk accordion: hover-capable devices open rows on mouse enter (last hovered stays open on
// leave, so the layout doesn't jump); click/tap and keyboard still work as before on all devices.
const canHover = typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

// HERO LINES — to remove: delete NavaHeroLines, its render below and .nava-hero-lines CSS.
const NavaHeroLines = () => (
  <svg className="nava-hero-lines" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="nava-lines-color" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="var(--mint)" stopOpacity="0.3" />
        <stop offset="55%" stopColor="var(--mint)" />
        <stop offset="100%" stopColor="var(--cyan)" />
      </linearGradient>
      <linearGradient id="nava-lines-fade" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="var(--lines-mask)" />
        <stop offset="35%" stopColor="var(--lines-mask)" stopOpacity="0.85" />
        <stop offset="100%" stopColor="var(--lines-mask)" stopOpacity="0" />
      </linearGradient>
      <mask id="nava-lines-mask"><rect width="1440" height="900" fill="url(#nava-lines-fade)" /></mask>
      <filter id="nava-lines-blur" x="-20%" y="-30%" width="140%" height="160%">
        <feGaussianBlur stdDeviation="24" />
      </filter>
    </defs>
    <g mask="url(#nava-lines-mask)" fill="none" stroke="url(#nava-lines-color)">
      <path d="M -180 -60 C 240 20 450 100 730 65 C 1060 20 1160 310 1580 590" strokeWidth="60" opacity="0.06" filter="url(#nava-lines-blur)" />
      {Array.from({ length: 16 }, (_, i) => (
        <path key={i}
          d={`M -180 ${-160 + i * 13} C 240 ${-80 + i * 12} 450 ${40 + i * 10} 730 ${5 + i * 9} C 1060 ${-40 + i * 11} 1160 ${210 + i * 16} 1580 ${440 + i * 23}`}
          strokeWidth={1 + (i % 3) * 0.2} opacity={0.08 + ((i * 7) % 10) * 0.03}
        />
      ))}
    </g>
  </svg>
);

const Nava = () => {
  const [openItem, setOpenItem] = useState("item-0");
  return (
  <PageLayout title={content.hero.label} bare>
    <div className="nava">
      <NavaHeroLines />
      <main>
        <section className="nava-container nava-hero"><div><span className="nava-label">{content.hero.label}</span><h1><Hyphens text={content.hero.headline} /> <span><Hyphens text={content.hero.highlight} /></span></h1><p className="nava-lead">{content.hero.lead}</p><div className="nava-actions">{content.hero.buttons.map((label,index) => <JoinButton key={label} className={index ? "nava-button-outline" : ""}>{label}</JoinButton>)}</div></div><div className="nava-hero-spacer" aria-hidden="true" /></section>
        {/* HOW IT WORKS — to remove: delete content.how in Nava.tsx and the .nava-how rules in nava.css. */}
        <section className="nava-how">
          <div className="nava-container">
            <div className="nava-how-card">
              <span className="nava-label nava-how-label">{content.how.label}</span>
              <h2 className="nava-how-title"><Hyphens text={content.how.heading} /></h2>
              <div className="nava-how-flow">
                {content.how.steps.map((step, i) => (
                  <div key={step.title} className="nava-how-step-wrap">
                    {i > 0 && <span className="nava-how-arrow" aria-hidden="true">→</span>}
                    <div className={`nava-how-step ${i === 1 ? "nava-how-step-mid" : ""}`}>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="nava-section nava-audiences">{content.audiences.map((audience,index) => <div key={audience.label} className={`nava-audience nava-grain ${index ? "nava-smes" : "nava-investors"}`}><span className="nava-label">{audience.label}</span><h2><Hyphens text={audience.title} /></h2><p>{audience.text}</p><ul className="nava-benefits">{audience.benefits.map(text => <li key={text}>{text}</li>)}</ul>{index === 0 && audience.showButton && <JoinButton className="nava-button-dark">{audience.button}</JoinButton>}</div>)}</section>
        {/* MARKET FIGURES — remove this band, content.figures and its CSS; restore desktop audience/risk padding as noted above. */}
        <section className="nava-figures-band">
          <section className="nava-container nava-figures nava-grain">{content.figures.map(([value,caption]) => <div className="nava-figure" key={value}><span className="nava-number"><Hyphens text={value} /></span><p>{caption}</p></div>)}</section>
        </section>
        {/* RISK SECTION — to remove: delete content.risk in Nava.tsx and the .nava-risk rules in nava.css. */}
        <section className="nava-risk">
          <div className="nava-container nava-risk-grid">
            <div>
              <span className="nava-label nava-risk-label">{content.risk.label}</span>
              <h2 className="nava-risk-title"><Hyphens text={content.risk.heading} /></h2>
            </div>
            <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem} className="nava-risk-list">
              {content.risk.items.map((item, i) => (
                <AccordionItem key={item.title} value={`item-${i}`} className="nava-risk-item"
                  onMouseEnter={() => { if (canHover) setOpenItem(`item-${i}`); }}
                  // Leaving the list intentionally keeps the last hovered item open.
                >
                  <AccordionTrigger className="nava-risk-trigger">
                    <span>{item.title}</span>
                    <span className="nava-risk-plus" aria-hidden="true">+</span>
                  </AccordionTrigger>
                  <AccordionContent className="nava-risk-content">
                    <p>{item.text}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        <section className="nava-section nava-backing"><div className="nava-container"><span className="nava-label">{content.backing.label}</span><h2 className="nava-backing-title"><Hyphens text={content.backing.title} /></h2><div className="nava-backing-grid"><div className="nava-backing-entries">{content.backing.entries.map(entry => <div key={entry.key} className="nava-backing-entry"><img src={entry.key === "sajida" ? sajidaLogo : bsvLogoDark} alt={entry.alt} className="nava-backing-logo" /><p>{entry.text}</p></div>)}</div><dl className="nava-backing-stats">{content.backing.stats.map(([value,text]) => <div key={value}><dt>{value}</dt><dd>{text}</dd></div>)}</dl></div></div></section>
      </main>
      <section id="contact" className="nava-closing">
        <div className="nava-container">
          <div className="nava-contact-card">
            <div className="nava-contact-info">
              <span className="nava-contact-label">{content.contact.label}</span>
              <a className="nava-contact-email" href={`mailto:${content.contact.email}`}>{content.contact.email}</a>
            </div>
            <Button asChild className="nava-contact-button"><a href={`mailto:${content.contact.email}`}>{content.contact.button}</a></Button>
          </div>
          <p className="nava-closing-line">{content.contact.network}</p>
        </div>
      </section>
    </div>
  </PageLayout>
  );
};
export default Nava;
