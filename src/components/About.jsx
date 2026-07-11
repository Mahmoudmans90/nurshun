import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Handshake, Lightbulb, Target } from "lucide-react";

const highlights = [
  {
    number: "01",
    icon: Target,
    title: "Proven Experience",
    copy: "Over a decade of experience transforming complex challenges into clear, effective solutions.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Forward Thinking",
    copy: "We combine fresh ideas with thoughtful execution to create solutions built for what comes next.",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Client Partnership",
    copy: "We work closely with every client, building lasting relationships around trust and shared success.",
  },
];

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  const revealUp = {
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
      id="about"
      className="relative overflow-hidden bg-[#f1eee8] py-24 text-[#111111] sm:py-28 lg:py-36"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-20 top-0 select-none font-serif text-[18rem] leading-none text-black/[0.025] sm:text-[28rem]">
        N
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.12 }}
          className="grid gap-8 border-b border-black/15 pb-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:pb-20"
        >
          <motion.div variants={revealUp} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#a77f3f]" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8b682f]">
                About Norshen
              </span>
            </div>
          </motion.div>

          <motion.div variants={revealUp} transition={{ duration: 0.8 }}>
            <h2 className="max-w-4xl text-[clamp(2.7rem,5.5vw,6rem)] font-medium leading-[0.95] tracking-[-0.05em]">
              Experience that shapes
              <span className="block font-serif font-normal italic text-[#9b763b]">
                what comes next.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-black/55 sm:text-lg">
              Norshen is built around a simple belief: meaningful progress
              starts with understanding the client, challenging convention, and
              delivering every detail with care.
            </p>
          </motion.div>
        </motion.div>

        {/* Main content */}
        <div className="mt-14 grid items-stretch gap-12 lg:mt-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-24">
          {/* Image */}
          <motion.div
            initial={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : -40,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-[500px] overflow-hidden rounded-[2rem] bg-[#1a1a1a] lg:min-h-[680px]"
          >
            <img
              src="./images/about-norshen.png"
              alt="The Norshen team working together"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

            {/* Experience card */}
            <div className="absolute inset-x-5 bottom-5 rounded-[1.5rem] border border-white/15 bg-black/30 p-6 text-white backdrop-blur-xl sm:inset-x-7 sm:bottom-7 sm:p-8">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <span className="block text-6xl font-medium tracking-[-0.06em] sm:text-7xl">
                    10
                    <span className="text-[#d8b97e]">+</span>
                  </span>

                  <span className="mt-2 block text-xs uppercase tracking-[0.25em] text-white/50">
                    Years of experience
                  </span>
                </div>

                <p className="hidden max-w-[180px] text-sm leading-6 text-white/55 sm:block">
                  Turning experience into meaningful value for every client.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ staggerChildren: 0.14 }}
            className="flex flex-col"
          >
            {highlights.map((highlight) => {
              const Icon = highlight.icon;

              return (
                <motion.article
                  key={highlight.number}
                  variants={revealUp}
                  transition={{ duration: 0.75 }}
                  className="group grid gap-5 border-b border-black/15 py-8 first:pt-0 sm:grid-cols-[70px_1fr] lg:py-10"
                >
                  <div className="flex items-start justify-between sm:block">
                    <span className="text-xs tracking-[0.2em] text-black/35">
                      {highlight.number}
                    </span>

                    <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-full border border-black/15 text-[#9b763b] transition-all duration-300 group-hover:border-[#b48b4a] group-hover:bg-[#b48b4a] group-hover:text-white">
                      <Icon size={20} strokeWidth={1.6} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-medium tracking-[-0.03em] sm:text-3xl">
                      {highlight.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-black/50 sm:text-base">
                      {highlight.copy}
                    </p>
                  </div>
                </motion.article>
              );
            })}

            {/* CTA */}
            <motion.div
              variants={revealUp}
              transition={{ duration: 0.75 }}
              className="mt-auto pt-10"
            >
              <motion.a
                href="#services"
                whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                className="group inline-flex items-center gap-4 text-sm font-semibold"
              >
                Discover What We Do
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#111] text-white transition-colors duration-300 group-hover:bg-[#b48b4a]">
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
