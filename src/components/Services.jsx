import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  PackageCheck,
  TreePine,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Product Sourcing & Supply",
    icon: PackageCheck,
    copy: "Reliable access to lighting products from established international manufacturers for projects of different scales and requirements.",
  },
  {
    number: "02",
    title: "Architectural & Commercial Lighting",
    icon: Building2,
    copy: "Lighting solutions for residential, retail, hospitality, workplace, and architectural environments.",
  },
  {
    number: "03",
    title: "Outdoor & Specialized Lighting",
    icon: TreePine,
    copy: "Solutions for landscapes, façades, gardens, streets, tunnels, fountains, and other demanding outdoor applications.",
  },
];

const Services = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#07131e] py-24 text-white sm:py-28 lg:py-36"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-64 top-0 h-[600px] w-[600px] rounded-full bg-[#e2b63d]/10 blur-[160px]" />

        <div className="absolute -left-64 bottom-0 h-[450px] w-[450px] rounded-full bg-white/[0.03] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ staggerChildren: 0.12 }}
          className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20"
        >
          <motion.div variants={reveal} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#e2b63d]" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e2b63d]">
                Our Services
              </span>
            </div>
          </motion.div>

          <motion.div variants={reveal} transition={{ duration: 0.8 }}>
            <h2 className="max-w-4xl text-[clamp(2.8rem,5.5vw,6.2rem)] font-medium leading-[0.95] tracking-[-0.055em]">
              Lighting solutions shaped
              <span className="block font-serif font-normal italic text-[#e2b63d]">
                around your project.
              </span>
            </h2>

            <div className="mt-8 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
                From product selection to supply, Nurshun Energy helps clients
                choose practical lighting solutions that support performance,
                reliability, and lasting visual impact.
              </p>

              <span className="shrink-0 text-xs uppercase tracking-[0.25em] text-white/25">
                03 Core Services
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Services list */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          transition={{ staggerChildren: 0.12 }}
          className="mt-16 border-t border-white/15 lg:mt-24"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                variants={reveal}
                transition={{ duration: 0.8 }}
                className="group relative overflow-hidden border-b border-white/15"
              >
                {/* Hover background */}
                <div className="absolute inset-0 -translate-x-[101%] bg-[#e2b63d] transition-transform duration-500 ease-out group-hover:translate-x-0" />

                <div className="relative z-10 grid gap-6 px-1 py-9 sm:px-5 lg:grid-cols-[70px_80px_0.9fr_1.1fr_56px] lg:items-center lg:gap-8 lg:px-7 lg:py-11">
                  {/* Number */}
                  <span className="text-xs tracking-[0.2em] text-[#e2b63d] transition-colors duration-300 group-hover:text-[#07131e]/45">
                    {service.number}
                  </span>

                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 text-[#e2b63d] transition-all duration-300 group-hover:border-[#07131e]/20 group-hover:bg-[#07131e] group-hover:text-[#e2b63d]">
                    <Icon size={23} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-medium tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#07131e] sm:text-3xl lg:text-[2rem]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="max-w-xl text-sm leading-7 text-white/45 transition-colors duration-300 group-hover:text-[#07131e]/65 sm:text-base">
                    {service.copy}
                  </p>

                  {/* Action */}
                  <a
                    href="#contact"
                    aria-label={`Enquire about ${service.title}`}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 group-hover:rotate-[-45deg] group-hover:border-[#07131e]/20 group-hover:bg-[#07131e]"
                  >
                    <ArrowRight size={18} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mt-14 flex flex-col gap-7 rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:p-9 lg:mt-20"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#e2b63d]">
              Have a lighting project?
            </p>

            <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] sm:text-3xl">
              Let’s illuminate it with the right solution.
            </h3>
          </div>

          <motion.a
            href="#contact"
            whileHover={shouldReduceMotion ? undefined : { y: -3 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#e2b63d] px-7 py-4 text-sm font-semibold text-[#07131e] transition hover:bg-white"
          >
            Request a Lighting Quote
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
