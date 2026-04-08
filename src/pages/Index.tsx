import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import PageTransition from "@/components/PageTransition";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Team", path: "/team" },
  { label: "Insights", path: "/insights" },
  { label: "Contact", path: "/contact" },
];

const Index = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen overflow-hidden">
        <img src={heroBg} alt="Tea garden landscape in Bangladesh at sunrise" className="absolute inset-0 w-full h-full object-cover animate-ken-burns" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/30" />
        <div className="relative z-10 flex flex-col min-h-screen">
          <header className="px-6 md:px-12 lg:px-20 py-6 flex items-center justify-center">
            <div />
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="text-foreground/70 hover:text-foreground text-xs tracking-[0.2em] uppercase transition-colors duration-300" style={{ fontFamily: "var(--font-body)" }}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </header>
          <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
            <img src={logo} alt="Beyond S Ventures" className="opacity-0 animate-fade-up w-[280px] sm:w-[360px] md:w-[460px] lg:w-[560px] invert" />
            <p className="opacity-0 animate-fade-up animate-delay-500 mt-2 text-foreground/60 text-sm md:text-base tracking-[0.15em] uppercase max-w-md" style={{ fontFamily: "var(--font-body)" }}>
              Impact investing across the Global South
            </p>
          </main>
          <footer className="opacity-0 animate-fade-in animate-delay-800 px-6 md:px-12 lg:px-20 py-8 flex items-center justify-between">
            <span className="text-foreground/40 text-xs tracking-widest uppercase">Dhaka · New York · Kampala</span>
            <span className="text-foreground/40 text-xs tracking-widest">info@beyonds.ventures</span>
          </footer>
        </div>
      </div>
    </PageTransition>
  );
};

export default Index;
