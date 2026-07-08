import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import bsvLogo from "@/assets/bsv-logo-nav.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

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
      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section — full bleed like sajida.org */}
        {heroImage ? (
          <div className="relative h-[50vh] sm:h-[70vh] min-h-[350px] sm:min-h-[500px] overflow-hidden">
            <motion.img
              src={heroImage}
              alt={heroAlt || title}
              className="absolute inset-0 w-full h-full object-cover"
              width={1920}
              height={800}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

            {/* Nav over hero */}
            <header className="relative z-20 px-6 md:px-12 lg:px-20 py-6 flex items-center justify-center">
              <Link
                to="/"
                className="absolute left-6 md:left-12 lg:left-20 flex items-center"
              >
                <img src={bsvLogo} alt="Beyond S Ventures" className="h-24 brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
              </Link>
              <nav className="hidden md:flex items-center bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                      location.pathname === link.path ? "text-black font-semibold" : "text-black/50 hover:text-black/80"
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="absolute right-6 md:right-12 lg:right-20 md:hidden text-white/70 hover:text-white">
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

            {/* Hero Text */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-12 lg:px-20 pb-16"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <div className="max-w-4xl">
                <motion.h1
                  variants={fadeUp}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-white mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {title}
                </motion.h1>
                {subtitle && (
                  <motion.p
                    variants={fadeUp}
                    className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {subtitle}
                  </motion.p>
                )}
              </div>
            </motion.div>
          </div>
        ) : (
          <>
            <header className="px-6 md:px-12 lg:px-20 py-6 flex items-center justify-center">
              <Link
                to="/"
                className="absolute left-6 md:left-12 lg:left-20 flex items-center"
              >
                <img src={bsvLogo} alt="Beyond S Ventures" className="h-24 opacity-60 hover:opacity-100 transition-opacity" />
              </Link>
              <nav className="hidden md:flex items-center bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                      location.pathname === link.path ? "text-black font-semibold" : "text-black/50 hover:text-black/80"
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="absolute right-6 md:right-12 lg:right-20 md:hidden text-foreground/60 hover:text-foreground">
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
            <motion.div
              className="px-6 md:px-12 lg:px-20 pt-12 md:pt-20 pb-12 md:pb-16 max-w-6xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-6" style={{ fontFamily: "var(--font-display)" }}>{title}</motion.h1>
              {subtitle && <motion.p variants={fadeUp} className="text-foreground/50 text-base md:text-lg leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>{subtitle}</motion.p>}
            </motion.div>
            <div className="mx-6 md:mx-12 lg:mx-20 border-t border-border/20" />
          </>
        )}

        {/* Content */}
        <motion.main
          className="px-6 md:px-12 lg:px-20 py-16 md:py-20 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {children}
        </motion.main>

        {/* Footer */}
        <motion.footer
          className="px-6 md:px-12 lg:px-20 py-8 border-t border-border/10 flex flex-col md:flex-row items-center justify-between gap-4"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <span className="text-foreground/30 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
            Beyond S Ventures
          </span>
          <span className="text-foreground/30 text-xs tracking-widest" style={{ fontFamily: "var(--font-body)" }}>
            Dhaka · New York · Kampala
          </span>
        </motion.footer>
      </div>
    </PageTransition>
  );
};

export default PageLayout;
