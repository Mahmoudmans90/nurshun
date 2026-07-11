import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, BadgeCheck, Sparkles } from "lucide-react";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="hero"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#080808] text-white"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-52 top-24 h-[500px] w-[500px] rounded-full bg-[#c9a96e]/10 blur-[140px]" />
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-white/[0.04] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative mx-auto grid min-h-[100svh] max-w-[1440px] items-center gap-14 px-5 pb-14 pt-32 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:pb-16 lg:pt-28">
        {/* Left content */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12, delayChildren: 0.15 }}
          className="relative z-10 max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            variants={reveal}
            transition={{ duration: 0.7 }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#c9a96e]/30 bg-[#c9a96e]/10 px-4 py-2 backdrop-blur-md"
          >
            <Sparkles size={14} className="text-[#e7c98f]" />

            <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#e7c98f]">
              Built for lasting impact
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={reveal}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-[clamp(3.2rem,7vw,7.2rem)] font-medium leading-[0.9] tracking-[-0.055em]"
          >
            Solutions that
            <span className="mt-2 block font-serif font-normal italic text-[#d8b97e]">
              move you forward.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={reveal}
            transition={{ duration: 0.8 }}
            className="mt-8 max-w-xl text-base leading-8 text-white/55 sm:text-lg"
          >
            Norshen combines thoughtful strategy, quality execution, and
            dedicated support to turn ambitious ideas into real, lasting
            results.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={reveal}
            transition={{ duration: 0.8 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <motion.a
              href="#contact"
              whileHover={shouldReduceMotion ? undefined : { y: -3 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#c9a96e] px-7 py-4 text-sm font-semibold text-black transition-colors hover:bg-[#e2c58d]"
            >
              Start Your Project
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={shouldReduceMotion ? undefined : { y: -3 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-medium text-white backdrop-blur-md transition hover:border-white/30 hover:bg-white/[0.08]"
            >
              Explore Our Work
            </motion.a>
          </motion.div>

          {/* Trust points */}
          <motion.div
            variants={reveal}
            transition={{ duration: 0.8 }}
            className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-6"
          >
            {[
              "Tailored Solutions",
              "Quality Execution",
              "Reliable Support",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-xs text-white/45 sm:text-sm"
              >
                <BadgeCheck size={16} className="text-[#c9a96e]" />
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{
            opacity: 0,
            x: shouldReduceMotion ? 0 : 45,
            scale: shouldReduceMotion ? 1 : 0.97,
          }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[620px] lg:ml-auto"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-[#111] shadow-2xl shadow-black/50">
            <img
              src="./images/imagesnorshen-hero.png"
              alt="Norshen professional solutions"
              className="h-full w-full object-cover transition duration-1000 hover:scale-[1.03]"
            />

            {/* Image overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent" />

            {/* Top number */}
            <div className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/20 text-xs tracking-[0.2em] text-white backdrop-blur-md">
              01
            </div>

            <div className="absolute inset-x-5 bottom-5 rounded-[1.5rem] border border-white/15 bg-black/35 p-5 backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#e2b63d]">
                The Nurshun Standard
              </p>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {["Quality", "Efficiency", "Reliability"].map((item, index) => (
                  <div
                    key={item}
                    className={
                      index !== 0 ? "border-l border-white/15 pl-3" : ""
                    }
                  >
                    <span className="block text-sm font-medium text-white sm:text-base">
                      {item}
                    </span>

                    <span className="mt-1 block text-[10px] text-white/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative corners */}
          <div className="absolute -right-3 -top-3 h-24 w-24 rounded-tr-[2.5rem] border-r border-t border-[#c9a96e]/50" />
          <div className="absolute -bottom-3 -left-3 h-24 w-24 rounded-bl-[2.5rem] border-b border-l border-[#c9a96e]/30" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-white/35 transition hover:text-[#e7c98f] xl:flex"
      >
        Scroll
        <motion.span
          animate={shouldReduceMotion ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDown size={15} />
        </motion.span>
      </motion.a>
    </section>
  );
};

export default Hero;
