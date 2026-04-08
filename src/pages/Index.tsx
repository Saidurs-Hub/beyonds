import heroBg from "@/assets/hero-bg.jpg";

const navLinks = ["About", "Programs", "Portfolio", "Team", "Insights", "Contact"];

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Mountain landscape reflected in still lake at twilight"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <header className="animate-fade-in px-6 md:px-12 lg:px-20 py-6 flex items-center justify-between">
          <h2
            className="text-foreground tracking-[0.35em] text-sm md:text-base font-medium uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Beyonds Ventures
          </h2>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-foreground/70 hover:text-foreground text-xs tracking-[0.2em] uppercase transition-colors duration-300"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link}
              </a>
            ))}
          </nav>
        </header>

        {/* Hero */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
          <h1
            className="opacity-0 animate-fade-up text-foreground text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light italic tracking-wide"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Launching Soon
          </h1>
          <p
            className="opacity-0 animate-fade-up animate-delay-500 mt-6 text-foreground/60 text-sm md:text-base tracking-[0.15em] uppercase max-w-md"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Impact investing across the Global South
          </p>
        </main>

        {/* Footer */}
        <footer className="opacity-0 animate-fade-in animate-delay-800 px-6 md:px-12 lg:px-20 py-8 flex items-center justify-between">
          <span className="text-foreground/40 text-xs tracking-widest uppercase">
            Dhaka · New York · Kampala
          </span>
          <span className="text-foreground/40 text-xs tracking-widest">
            info@beyonds.ventures
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Index;
