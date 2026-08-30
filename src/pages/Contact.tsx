import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { Mail, MapPin, ArrowUpRight, Linkedin } from "lucide-react";
import { openExternalLink } from "@/lib/openExternalLink";


const Contact = () => (
  <PageLayout
    title="Contact"
    subtitle="Reach out to learn more about our services, investment opportunities, or partnership possibilities."
  >
    <div className="space-y-24">
      <ScrollReveal>
        <section className="space-y-8">
          <h2 className="text-foreground/40 text-[11px] tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "var(--font-body)" }}>General Enquiries</h2>
          <a href="mailto:reach@beyonds.ventures" className="border border-border/20 rounded-xl p-8 md:p-10 flex items-center gap-5 max-w-lg group hover:border-border/40 transition-colors">
            <Mail className="w-5 h-5 text-accent shrink-0" />
            <span className="text-foreground/70 text-sm flex-1" style={{ fontFamily: "var(--font-body)" }}>reach@beyonds.ventures</span>
            <ArrowUpRight className="w-4 h-4 text-foreground/30 group-hover:text-foreground/70 transition-colors" />
          </a>
          <div className="max-w-2xl">
            <iframe
              className="airtable-embed"
              src="https://airtable.com/embed/appjjKitLzE9FeO3b/pagaLKf0iqUOQxPlY/form"
              title="Contact form"
              frameBorder="0"
              onmouseWheel=""
              width="100%"
              height="533"
              style={{ background: "transparent", border: "1px solid #ccc" }}
            />
          </div>
        </section>
      </ScrollReveal>


      <ScrollReveal delay={0.1}>
        <section className="space-y-8">
          <h2 className="text-foreground/40 text-[11px] tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "var(--font-body)" }}>Office</h2>
          <div className="border border-border/20 rounded-xl p-8 md:p-10 flex items-start gap-5 max-w-lg">
            <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-foreground/70 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>OTOBI Center, 1st Floor, Plot 12, Block CWS(C)</p>
              <p className="text-foreground/70 text-sm" style={{ fontFamily: "var(--font-body)" }}>Gulshan South Avenue, Gulshan 1</p>
              <p className="text-foreground/70 text-sm" style={{ fontFamily: "var(--font-body)" }}>Dhaka 1212, Bangladesh</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <section className="space-y-8">
          <h2 className="text-foreground/40 text-[11px] tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "var(--font-body)" }}>Connect</h2>
          <button
            type="button"
            onClick={() => openExternalLink("https://www.linkedin.com/company/beyondsventures/")}
            className="border border-border/20 rounded-xl p-8 md:p-10 flex items-center gap-5 max-w-lg group hover:border-border/40 transition-colors text-left"
          >
            <Linkedin className="w-5 h-5 text-accent shrink-0" />
            <span className="text-foreground/70 text-sm flex-1" style={{ fontFamily: "var(--font-body)" }}>Beyonds Ventures on LinkedIn</span>
            <ArrowUpRight className="w-4 h-4 text-foreground/30 group-hover:text-foreground/70 transition-colors" />
          </button>
        </section>
      </ScrollReveal>
    </div>
  </PageLayout>
);

export default Contact;
