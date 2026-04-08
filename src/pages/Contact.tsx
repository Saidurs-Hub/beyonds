import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MapPin } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const contacts = [
  { name: "Muhymin Chowdhury", role: "Managing Director", emails: ["muhymin@beyonds.ventures", "muhymin@sajida.org"] },
  { name: "Sarah Iqbal", role: "Head — Impact Partners", emails: ["sarah@beyonds.ventures", "sarah.iqbal@sajida.org"] },
  { name: "Hridoy Islam", role: "Portfolio Manager", emails: ["hridoy@beyonds.ventures", "hridoy.i@sajida.org"] },
];

const Contact = () => (
  <PageTransition>
    <div className="min-h-screen bg-background text-foreground">
      <header className="px-6 md:px-12 lg:px-20 py-6">
        <Link to="/" className="text-foreground/60 hover:text-foreground transition-colors flex items-center gap-2 text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
      </header>

      <main className="px-6 md:px-12 lg:px-20 py-12 max-w-5xl mx-auto space-y-20">
        <section className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-light tracking-wide" style={{ fontFamily: "var(--font-display)" }}>Contact</h1>
          <p className="text-foreground/60 text-lg leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-body)" }}>
            Reach out to our team to learn more about our programs, investment opportunities, or partnership possibilities.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          {contacts.map((c) => (
            <div key={c.name} className="border border-border/30 rounded-lg p-8 bg-card/20 space-y-4">
              <div className="space-y-1">
                <h3 className="text-foreground text-lg" style={{ fontFamily: "var(--font-body)" }}>{c.name}</h3>
                <p className="text-accent text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)" }}>{c.role}</p>
              </div>
              <div className="space-y-2">
                {c.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`} className="flex items-center gap-2 text-foreground/50 hover:text-foreground text-sm transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                    <Mail className="w-3.5 h-3.5 shrink-0" />
                    {email}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="border-t border-border/20 pt-12 space-y-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
            <div className="space-y-1">
              <h3 className="text-foreground text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>Office</h3>
              <p className="text-foreground/50 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                OTOBI Center, 1st floor, Plot 12, Block CWS(C),<br />
                Gulshan South Avenue, Gulshan 1,<br />
                Dhaka 1212, Bangladesh
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  </PageTransition>
);

export default Contact;
