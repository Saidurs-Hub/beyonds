import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";
import PageTransition from "@/components/PageTransition";

const About = () => (
  <PageTransition>
    <div className="relative min-h-screen text-foreground">
      <img src={aboutBg} alt="Misty forest at twilight" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-background/50" />
      <div className="relative z-10">
        <header className="px-6 md:px-12 lg:px-20 py-6 flex items-center justify-between">
          <Link to="/" className="text-foreground/60 hover:text-foreground transition-colors flex items-center gap-2 text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
        </header>
        <main className="px-6 md:px-12 lg:px-20 py-20 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-8" style={{ fontFamily: "var(--font-display)" }}>About</h1>
          <p className="text-foreground/60 text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            Venture S Beyond is an impact investing firm focused on the Global South. We back visionary founders building transformative solutions across emerging markets.
          </p>
        </main>
      </div>
    </div>
  </PageTransition>
);

export default About;
