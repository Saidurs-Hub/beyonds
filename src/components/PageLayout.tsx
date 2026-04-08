import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ReactNode, useState } from "react";
import PageTransition from "@/components/PageTransition";
import bsvLogo from "@/assets/bsv-logo-nav.png";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Team", path: "/team" },
  { label: "Insights", path: "/insights" },
  { label: "Contact", path: "/contact" },
];

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  heroImage?: string;
  heroAlt?: string;
}

const PageLayout = ({ children, title, subtitle, heroImage, heroAlt }: PageLayoutProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <PageTransition>
      <div className="min-h-screen text-foreground" style={{ background: 'white', color: 'hsl(220 30% 6%)' }}>
        {/* Hero Section — full bleed like sajida.org */}
        {heroImage ? (
          <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
            <img
              src={heroImage}
              alt={heroAlt || title}
              className="absolute inset-0 w-full h-full object-cover"
              width={1920}
              height={800}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

            {/* Nav over hero */}
            <header className="relative z-20 px-6 md:px-12 lg:px-20 py-6 flex items-center justify-between">
              <Link
                to="/"
                className="flex items-center"
              >
                <img src={bsvLogo} alt="Beyond S Ventures" className="h-24 brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
              </Link>
              <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                      location.pathname === link.path ? "text-white" : "text-white/50 hover:text-white/80"
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white/70 hover:text-white">
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </header>

            {/* Mobile Nav */}
            {mobileOpen && (
              <div className="relative z-20 md:hidden px-6 pb-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-sm tracking-[0.15em] uppercase transition-colors ${
                      location.pathname === link.path ? "text-white" : "text-white/50"
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Hero Text — positioned at bottom like sajida.org */}
            <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-12 lg:px-20 pb-16">
              <div className="max-w-6xl mx-auto">
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-white mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {title}
                </h1>
                {subtitle && (
                  <p
                    className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <>
            <header className="px-6 md:px-12 lg:px-20 py-6 flex items-center justify-between">
              <Link
                to="/"
                className="flex items-center"
              >
                <img src={bsvLogo} alt="Beyond S Ventures" className="h-24 opacity-60 hover:opacity-100 transition-opacity" />
              </Link>
              <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                      location.pathname === link.path ? "text-foreground" : "text-foreground/40 hover:text-foreground/70"
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground/60 hover:text-foreground">
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </header>
            {mobileOpen && (
              <div className="md:hidden px-6 pb-6 space-y-4 border-b border-border/20">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-sm tracking-[0.15em] uppercase transition-colors ${
                      location.pathname === link.path ? "text-foreground" : "text-foreground/40"
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
            <div className="px-6 md:px-12 lg:px-20 pt-12 md:pt-20 pb-12 md:pb-16 max-w-6xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-6" style={{ fontFamily: "var(--font-display)" }}>{title}</h1>
              {subtitle && <p className="text-foreground/50 text-base md:text-lg leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>{subtitle}</p>}
            </div>
            <div className="mx-6 md:mx-12 lg:mx-20 border-t border-border/20" />
          </>
        )}

        {/* Content */}
        <main className="px-6 md:px-12 lg:px-20 py-16 md:py-20 max-w-6xl mx-auto">
          {children}
        </main>

        {/* Footer */}
        <footer className="px-6 md:px-12 lg:px-20 py-8 border-t border-border/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-foreground/30 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
            Beyond S Ventures
          </span>
          <span className="text-foreground/30 text-xs tracking-widest" style={{ fontFamily: "var(--font-body)" }}>
            Dhaka · New York · Kampala
          </span>
        </footer>
      </div>
    </PageTransition>
  );
};

export default PageLayout;
