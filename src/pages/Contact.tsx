import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Contact = () => (
  <div className="min-h-screen bg-background text-foreground">
    <header className="px-6 md:px-12 lg:px-20 py-6 flex items-center justify-between">
      <Link to="/" className="text-foreground/60 hover:text-foreground transition-colors flex items-center gap-2 text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
        <ArrowLeft className="w-4 h-4" /> Back
      </Link>
    </header>
    <main className="px-6 md:px-12 lg:px-20 py-20 max-w-3xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-8" style={{ fontFamily: "var(--font-display)" }}>Contact</h1>
      <p className="text-foreground/60 text-lg leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
        Get in touch with us at <a href="mailto:info@beyonds.ventures" className="text-accent hover:text-accent/80 transition-colors">info@beyonds.ventures</a>
      </p>
      <p className="text-foreground/40 text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
        Dhaka · New York · Kampala
      </p>
    </main>
  </div>
);

export default Contact;
