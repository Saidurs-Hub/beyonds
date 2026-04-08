import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Menu, X } from "lucide-react";
import { ReactNode, useState } from "react";
import PageTransition from "@/components/PageTransition";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Programs", path: "/programs" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Team", path: "/team" },
  { label: "Insights", path: "/insights" },
  { label: "Contact", path: "/contact" },
];

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  dark?: boolean;
}

const PageLayout = ({ children, title, subtitle, dark = true }: PageLayoutProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <PageTransition>
      <div className={`min-h-screen ${dark ? "bg-background text-foreground" : "bg-background text-foreground"}`}>
        {/* Nav */}
        <header className="px-6 md:px-12 lg:px-20 py-6 flex items-center justify-between">
          <Link
            to="/"
            className="text-foreground/60 hover:text-foreground transition-colors flex items-center gap-2 text-xs tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-foreground"
                    : "text-foreground/40 hover:text-foreground/70"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground/60 hover:text-foreground"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>

        {/* Mobile Nav */}
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

        {/* Page Header */}
        <div className="px-6 md:px-12 lg:px-20 pt-12 md:pt-20 pb-12 md:pb-16 max-w-6xl mx-auto">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="text-foreground/50 text-base md:text-lg leading-relaxed max-w-2xl"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Divider */}
        <div className="mx-6 md:mx-12 lg:mx-20 border-t border-border/20" />

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
