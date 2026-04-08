import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Programs = () => (
  <div className="min-h-screen bg-background text-foreground">
    <header className="px-6 md:px-12 lg:px-20 py-6 flex items-center justify-between">
      <Link to="/" className="text-foreground/60 hover:text-foreground transition-colors flex items-center gap-2 text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
        <ArrowLeft className="w-4 h-4" /> Back
      </Link>
    </header>
    <main className="px-6 md:px-12 lg:px-20 py-20 max-w-3xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-8" style={{ fontFamily: "var(--font-display)" }}>Programs</h1>
      <p className="text-foreground/60 text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
        Our programs support early-stage ventures through capital, mentorship, and access to a global network of partners and investors.
      </p>
    </main>
  </div>
);

export default Programs;
