import { ArrowUpRight, Globe2, Mail, Phone } from "lucide-react";

const navigation = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const productLinks = [
  "Architectural Lighting",
  "Landscape Lighting",
  "Commercial Lighting",
  "Infrastructure Lighting",
];

const Footer = () => {
  return (
    <footer className="bg-[#07131e] text-white">
      {/* Main CTA */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#e2b63d]" />

                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e2b63d]">
                  Start a Conversation
                </span>
              </div>

              <h2 className="mt-7 max-w-4xl text-[clamp(2.8rem,6vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.055em]">
                Let’s illuminate
                <span className="block font-serif font-normal italic text-[#e2b63d]">
                  your next project.
                </span>
              </h2>
            </div>

            <a
              href="mailto:info@nurshun.com"
              className="group flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#e2b63d] text-[#07131e] transition duration-500 hover:rotate-[-45deg] hover:bg-white sm:h-24 sm:w-24"
              aria-label="Contact Nurshun Energy"
            >
              <ArrowUpRight size={28} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -bottom-28 -right-12 select-none text-[14rem] font-semibold leading-none tracking-[-0.08em] text-white/[0.018] sm:text-[24rem]">
          NSE
        </div>

        <div className="relative mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.9fr_1fr] lg:px-12 lg:py-20">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#hero"
              className="group inline-flex items-center gap-4"
              aria-label="Nurshun Energy home"
            >
              <span className="flex h-14 w-30 items-center justify-center rounded-full border border-[#e2b63d]/40 bg-[#e2b63d]/10 text-sm font-bold tracking-[0.15em] text-[#e2b63d] transition group-hover:bg-[#e2b63d] group-hover:text-[#07131e]">
                <img
                  src="/logo.png"
                  alt=""
                  className="w-full h-full object-cover p-3"
                />
              </span>

              <span>
                <span className="block text-lg font-semibold tracking-[0.13em]">
                  NURSHUN ENERGY
                </span>

                <span className="mt-1 block text-[9px] uppercase tracking-[0.32em] text-white/35">
                  Lighting Solutions
                </span>
              </span>
            </a>

            <p className="mt-7 text-sm leading-7 text-white/45">
              Professional lighting solutions for residential, commercial,
              architectural, outdoor, and infrastructure applications.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e2b63d]">
              Navigation
            </h3>

            <nav className="mt-6 flex flex-col gap-4">
              {navigation.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-white/50 transition hover:translate-x-1 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Product ranges */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e2b63d]">
              Solutions
            </h3>

            <ul className="mt-6 flex flex-col gap-4">
              {productLinks.map((product) => (
                <li key={product}>
                  <a
                    href="#projects"
                    className="text-sm text-white/50 transition hover:text-white"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e2b63d]">
              Get in Touch
            </h3>

            <div className="mt-6 flex flex-col gap-5">
              <a
                href="mailto:info@nurshun.com"
                className="group flex items-start gap-4"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#e2b63d] transition group-hover:border-[#e2b63d]">
                  <Mail size={15} />
                </span>

                <span>
                  <span className="block text-[10px] uppercase tracking-[0.18em] text-white/25">
                    Email
                  </span>

                  <span className="mt-1 block text-sm text-white/60 transition group-hover:text-white">
                    info@nurshun.com
                  </span>
                </span>
              </a>

              <a
                href="tel:+966555857450"
                className="group flex items-start gap-4"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#e2b63d] transition group-hover:border-[#e2b63d]">
                  <Phone size={15} />
                </span>

                <span>
                  <span className="block text-[10px] uppercase tracking-[0.18em] text-white/25">
                    Phone
                  </span>

                  <span className="mt-1 block text-sm text-white/60 transition group-hover:text-white">
                    +966 55 585 7450
                  </span>
                </span>
              </a>

              <a
                href="https://www.nurshun.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#e2b63d] transition group-hover:border-[#e2b63d]">
                  <Globe2 size={15} />
                </span>

                <span>
                  <span className="block text-[10px] uppercase tracking-[0.18em] text-white/25">
                    Website
                  </span>

                  <span className="mt-1 block text-sm text-white/60 transition group-hover:text-white">
                    www.nurshun.com
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-6 text-[11px] uppercase tracking-[0.16em] text-white/25 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p>
            © {new Date().getFullYear()} Nurshun Energy. All rights reserved.
          </p>

          <p>
            Lighting with purpose
            <span className="mx-3 text-[#e2b63d]">•</span>
            Built for lasting impact
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
