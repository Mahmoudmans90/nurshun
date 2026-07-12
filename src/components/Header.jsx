import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, SunMedium, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const marker = window.scrollY + window.innerHeight * 0.35;
      let currentSection = "hero";

      navLinks.forEach((link) => {
        const sectionId = link.href.replace("#", "");
        const section = document.getElementById(sectionId);

        if (section && section.offsetTop <= marker) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const handleLinkClick = (href) => {
    setActiveSection(href.replace("#", ""));
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled || isOpen
          ? "border-b border-white/10 bg-[#07131e]/90 shadow-2xl shadow-black/20 backdrop-blur-xl"
          : "bg-gradient-to-b from-[#07131e]/90 via-[#07131e]/55 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Brand */}
        <a
          href="#hero"
          onClick={() => handleLinkClick("#hero")}
          className="group flex shrink-0 items-center gap-3.5"
          aria-label="Nurshun Energy home"
        >
          <span className="relative flex h-10 w-20 items-center justify-center rounded-[1rem] border border-[#e2b63d]/40 bg-[#e2b63d]/10 transition duration-300 group-hover:border-[#e2b63d] group-hover:bg-[#e2b63d]">
            <span className="text-sm font-bold tracking-[-0.04em] flex items-start justify-center text-[#e2b63d] transition group-hover:text-[#07131e]">
              <img
                src="/logo.png"
                alt=""
                className="w-full h-full object-cover p-2.5"
              />
            </span>

            <SunMedium
              size={16}
              strokeWidth={1.8}
              className="absolute -right-1 -top-1 rounded-full bg-[#07131e] p-0.5 text-[#e2b63d]"
            />
          </span>

          <span className="flex flex-col">
            <span className="text-[15px] font-semibold tracking-[0.12em] text-white sm:text-base">
              NURSHUN ENERGY
            </span>

            <span className="mt-1 text-[8px] uppercase tracking-[0.32em] text-white/40">
              Lighting Solutions
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-5 xl:flex 2xl:gap-7"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                aria-current={isActive ? "page" : undefined}
                className={`group relative py-3 text-sm font-medium transition-colors duration-300 ${
                  isActive ? "text-[#e2b63d]" : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}

                <span
                  className={`absolute bottom-1 left-0 h-px bg-[#e2b63d] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={() => handleLinkClick("#contact")}
          className="group hidden shrink-0 items-center gap-3 rounded-full border border-[#e2b63d]/60 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:border-[#e2b63d] hover:bg-[#e2b63d] hover:text-[#07131e] xl:flex"
        >
          Request a Quote
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md transition hover:border-[#e2b63d] hover:text-[#e2b63d] xl:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`absolute left-0 top-full w-full overflow-hidden border-t border-white/10 bg-[#07131e]/95 backdrop-blur-2xl transition-all duration-500 xl:hidden ${
          isOpen
            ? "visible max-h-[calc(100svh-88px)] opacity-100"
            : "invisible pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav
          className="flex max-h-[calc(100svh-88px)] min-h-[calc(100svh-88px)] flex-col overflow-y-auto px-6 py-6 sm:px-8"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col">
            {navLinks.map((link, index) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`group flex items-center justify-between border-b border-white/10 py-4 text-2xl font-light transition ${
                    isActive
                      ? "text-[#e2b63d]"
                      : "text-white/70 hover:text-[#e2b63d]"
                  }`}
                >
                  <span>{link.label}</span>

                  <span
                    className={`text-[10px] tracking-[0.2em] ${
                      isActive ? "text-[#e2b63d]" : "text-white/25"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </a>
              );
            })}
          </div>

          <a
            href="#contact"
            onClick={() => handleLinkClick("#contact")}
            className="mt-auto flex items-center justify-between rounded-full bg-[#e2b63d] px-6 py-4 font-semibold text-[#07131e] transition hover:bg-white"
          >
            Request a Quote
            <ArrowUpRight size={19} />
          </a>

          <p className="mt-5 text-center text-[9px] uppercase tracking-[0.3em] text-white/25">
            Lighting with purpose
          </p>
        </nav>
      </div>
    </header>
  );
};

export default Header;
