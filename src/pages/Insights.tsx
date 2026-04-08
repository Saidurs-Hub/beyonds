import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const Insights = () => (
  <PageTransition>
    <div className="min-h-screen bg-background text-foreground">
      <header className="px-6 md:px-12 lg:px-20 py-6 flex items-center justify-between">
        <Link to="/" className="text-foreground/60 hover:text-foreground transition-colors flex items-center gap-2 text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
      </header>
      <main className="px-6 md:px-12 lg:px-20 py-20 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-8" style={{ fontFamily: "var(--font-display)" }}>Insights</h1>
        <p className="text-foreground/60 text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
          Perspectives on emerging markets, impact investing, and the future of venture capital in the Global South.
        </p>
      </main>
    </div>
  </PageTransition>
);

export default Insights;
