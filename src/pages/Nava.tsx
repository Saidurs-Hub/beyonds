/* HOW TO REMOVE THIS PAGE
 * Delete src/pages/Nava.tsx and src/pages/nava.css.
 * Remove the Nava lazy import and /nava route in src/App.tsx.
 * Remove the Nava navLinks entry in src/components/PageLayout.tsx.
 * Remove the Nava navLinks entry in src/pages/Index.tsx (homepage nav + mobile menu share one array).
 * Remove PageLayout's optional bare prop/branches if no other page uses it.
 * Remove the Co-invest with us bridge section and Link import in Portfolio.tsx.
 * Remove the nava-bridge tokens/styles in src/index.css.
 */
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import sajidaLogo from "@/assets/sajida-logo.png";
import bsvLogo from "@/assets/logo-white-maroon.png";
import "./nava.css";

// CONTENT: All Nava display copy lives here. Edit these values without changing layout.
const content = {
  hero: {
    label: "Nava Capital Network", headline: "Ignite scale for", highlight: "high-growth SMEs.",
    lead: "A private investor consortium that connects Bangladesh's high-growth SMEs with smart private capital, backed by gated originations, shared diligence, and active monitoring after every deal.",
    buttons: ["Become a member", "Raise with Nava"], glanceTitle: "At a glance",
    glance: [ ["Model", "Private investor syndication"], ["Cheque size", "BDT 50 Lacs to 5 Cr"], ["Instruments", "80% debt, 20% equity"], ["Holding tenure", "12 to 36 months"], ["Industry", "SME agnostic"] ],
  },
  figures: [ ["< 1/3", "of managed funds in Bangladesh beat inflation"], ["4 Mn+", "SMEs borrow from informal lenders at over 5% a month"], ["$170 Bn", "sits in low-return, illiquid assets like fixed deposits and land"], ["$50k–500k", "the missing middle: too big for MFIs, too small for banks"] ],
  audiences: ([
    { label: "For smart private investors", title: "A trusted pipeline, with the work already done", text: "Performance-driven, proprietary deals with targeted returns of 300 to 500 bps above market rates and flexible ticket sizes.", benefits: ["End-to-end transaction advisory, from sourcing to recovery", "De-risked through co-investment and shared diligence", "Deal briefs, data room review, and investment memos", "Monthly business and field reports after you invest"], button: "Apply for membership" },
    { label: "For high-growth SMEs", title: "Capital, plus the network to grow with it", text: "For established SMEs ready to scale, with BDT 3 to 5 Cr in annual revenue and at least 3 years in operation.", benefits: ["Raise USD 50k to 200k, mainly debt or revenue share", "Market access and business development support", "Mentorship from like-minded investors and founders", "A seat at managed investor showcases"] },
  ] as { label: string; title: string; text: string; benefits: string[]; button?: string }[]),
  backing: { label: "Our backing", title: "Housed under Beyond S Ventures, promoted by SAJIDA Foundation.", text: "Nava brings together SAJIDA's three decades of on-the-ground experience and BSV's investment platform, so every deal is backed by people who know the market.",
    panels: [
      { key: "sajida", alt: "SAJIDA Foundation logo", label: "Promoter", text: "One of Bangladesh's top five MFIs, with 30 years of experience and a nationwide borrower network." },
      { key: "bsv", alt: "Beyond S Ventures logo", label: "Home of Nava", text: "SAJIDA's private investment arm, giving Nava direct access to investments, networks, pipelines, and markets." },
    ],
    stats: [["30 years", "of microfinance experience"], ["400k", "borrowers across the country"], ["$400 Mn", "deployed in the market to date"]] },
  ahead: { label: "What's ahead", title: "Bringing structure to a fragmented market.", items: [
    ["Oct 2026", "First managed showcase", "Qualified deals presented to a small group at SAJIDA HQ, then new deals every quarter."],
    ["Dec 2026", "Official launch", "Launch event with selected investors, members, partners, and affiliates."],
    ["Mar 2027", "Investor town hall", "Networking on market access, business development, and investment readiness."],
    ["Jun 2027", "Partner expansion", "Partner networks that turn pipeline into portfolio."],
    ["Sep 2027", "BSV SME fund", "Managed investor funds for SME portfolio deployment."],
    ["Dec 2027", "Platform launch", "A digital investment platform and managed marketplace."],
  ] },
  join: { label: "Join us", title: "Building the infrastructure that matches capital to growth.", text: "Membership is BDT 30k a year for individuals and 50k for corporates (up to 3 representatives). Arranger fees of 3 to 5% are shared between investor and investee.", routes: [ {label:"Investors", title:"Apply for membership", link:"Start application →"}, {label:"SMEs", title:"Submit your company", link:"Share your details →"} ], email: "Or write to ahmed.jawad@sajida.org" },
  footer: { name:"NAVA CAPITAL NETWORK", parent:"HOUSED UNDER BEYOND S VENTURES", disclaimer:"Targeted returns are not guaranteed. Investing in private SMEs involves risk, including loss of capital and limited liquidity. Information on this page is for general purposes only and does not constitute an offer or investment advice. [Final disclaimer wording to be confirmed.]" },
};

const JoinButton = ({ children, className = "" }: { children: string; className?: string }) => <Button asChild className={`nava-button ${className}`}><a href="#join">{children}</a></Button>;

// Render dash glyphs in the body font so Cormorant's slanted hyphen isn't used in headings or big numbers.
const Hyphens = ({ text }: { text: string }) => (
  <>
    {text.split(/([-–—])/).map((part, index) => (
      /^[-–—]$/.test(part) ? <span key={index} className="nava-dash">{part}</span> : part
    ))}
  </>
);

const Nava = () => (
  <PageLayout title={content.hero.label} bare>
    <div className="nava">
      <main>
        <section className="nava-container nava-hero">
          <div><span className="nava-label">{content.hero.label}</span><h1><Hyphens text={content.hero.headline} /> <span><Hyphens text={content.hero.highlight} /></span></h1><p className="nava-lead">{content.hero.lead}</p><div className="nava-actions">{content.hero.buttons.map((label,index) => <JoinButton key={label} className={index ? "nava-button-outline" : ""}>{label}</JoinButton>)}</div></div>
          <div className="nava-hero-panel nava-grain"><div className="nava-glance"><span className="nava-label">{content.hero.glanceTitle}</span><dl>{content.hero.glance.map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div></div>
        </section>
        <section className="nava-container nava-figures nava-grain">{content.figures.map(([value,caption]) => <div className="nava-figure" key={value}><span className="nava-number"><Hyphens text={value} /></span><p>{caption}</p></div>)}</section>
        <section className="nava-section nava-audiences">{content.audiences.map((audience,index) => <div key={audience.label} className={`nava-audience nava-grain ${index ? "nava-smes" : "nava-investors"}`}><span className="nava-label">{audience.label}</span><h2><Hyphens text={audience.title} /></h2><p>{audience.text}</p><ul className="nava-benefits">{audience.benefits.map(text => <li key={text}>{text}</li>)}</ul>{index === 0 && <JoinButton className="nava-button-dark">{audience.button}</JoinButton>}</div>)}</section>
        <section className="nava-container nava-section nava-backing nava-grain"><div className="nava-backing-head"><div><span className="nava-label">{content.backing.label}</span><h2>{content.backing.title}</h2></div><p>{content.backing.text}</p></div><div className="nava-backing-panels">{content.backing.panels.map(panel => <div key={panel.key} className="nava-backing-panel"><img src={panel.key === "sajida" ? sajidaLogo : bsvLogo} alt={panel.alt} width={182} height={50} className={panel.key === "sajida" ? "nava-backing-logo nava-logo-white" : "nava-backing-logo"} /><span className="nava-label">{panel.label}</span><p>{panel.text}</p></div>)}</div><dl className="nava-backing-stats">{content.backing.stats.map(([value,text]) => <div key={value}><dt>{value}</dt><dd>{text}</dd></div>)}</dl></section>
        <section className="nava-section nava-band nava-grain"><div className="nava-container"><span className="nava-label">{content.ahead.label}</span><h2>{content.ahead.title}</h2><div className="nava-roadmap">{content.ahead.items.map(([date,title,text]) => <article key={date} className="nava-roadmap-card"><span className="nava-label">{date}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
        <section id="join" className="nava-band nava-join nava-grain"><div className="nava-container nava-join-grid"><div><span className="nava-label">{content.join.label}</span><h2>{content.join.title}</h2><p>{content.join.text}</p></div><div><div className="nava-routes">{content.join.routes.map(route => <Link key={route.label} to="/contact" className="nava-route"><span className="nava-label">{route.label}</span><h3>{route.title}</h3><span>{route.link}</span></Link>)}</div><div className="nava-email">{content.join.email}</div></div></div></section>
      </main>
      <footer className="nava-footer"><div className="nava-container"><div className="nava-footer-top"><span className="nava-label">{content.footer.name}</span><span className="nava-label">{content.footer.parent}</span></div><p>{content.footer.disclaimer}</p></div></footer>
    </div>
  </PageLayout>
);
export default Nava;
