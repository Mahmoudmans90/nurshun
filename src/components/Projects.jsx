import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Eye } from "lucide-react";
import ProjectModal from "./ProjectModal";

const defaultProjects = [
  {
    id: "spot-lights",
    number: "01",
    page: "05",
    title: "Spot Lights",
    copy: "Directional lighting solutions for focused architectural and landscape illumination.",
    applications: ["Landscape", "Façades", "Feature Lighting"],
    cover: "./images/spot-lights.png",
    catalogSheet: "./images/spot-lights.png",
  },
  {
    id: "module-neon-lights",
    number: "02",
    page: "06",
    title: "Module & Neon Lights",
    copy: "Flexible lighting systems for contours, signage, decorative details, and custom installations.",
    applications: ["Contours", "Signage", "Decorative"],
    cover: "/images/garden-pole-lights.png",
  },
  {
    id: "spike-tree-lights",
    number: "03",
    page: "07",
    title: "Spike & Tree Lights",
    copy: "Outdoor accent fixtures created to highlight gardens, trees, and landscape features.",
    applications: ["Gardens", "Trees", "Landscape"],
    cover: "/images/spike-tree-lights.png",
  },
  {
    id: "window-uplights",
    number: "04",
    page: "08",
    title: "Window & Uplights",
    copy: "Discreet architectural fixtures for window details, vertical surfaces, and upward illumination.",
    applications: ["Windows", "Columns", "Architecture"],
    cover: "/images/window-uplights.png",
  },
  {
    id: "linear-wallwasher-lights",
    number: "05",
    page: "09",
    title: "Linear & Wallwasher Lights",
    copy: "Uniform linear illumination engineered to reveal façades, textures, and large wall surfaces.",
    applications: ["Façades", "Walls", "Linear Lighting"],
    cover: "/images/linear-wallwasher-lights.png",
    catalogSheet: "/images/portfolio/sheets/linear-wallwasher-lights.png",
  },
  {
    id: "step-moisture-proof-wall-lights",
    number: "06",
    page: "10",
    title: "Step & Moisture-Proof Wall Lights",
    copy: "Durable recessed wall lighting for steps, pathways, and moisture-exposed environments.",
    applications: ["Steps", "Pathways", "Wet Areas"],
    cover: "/images/step-moisture-proof-wall-lights.png",
    catalogSheet:
      "/images/portfolio/sheets/step-moisture-proof-wall-lights.png",
  },
  {
    id: "fountain-floor-tile-lights",
    number: "07",
    page: "11",
    title: "Fountain & Floor Tile Lights",
    copy: "Integrated lighting solutions for fountains, floors, and refined architectural surfaces.",
    applications: ["Fountains", "Floors", "In-Ground"],
    cover: "/images/fountain-floor-tile-lights.png",
    catalogSheet: "/images/portfolio/sheets/fountain-floor-tile-lights.png",
  },
  {
    id: "garden-light-heads",
    number: "08",
    page: "12",
    title: "Garden Light Heads",
    copy: "Decorative and functional luminaire heads for tailored garden and landscape schemes.",
    applications: ["Gardens", "Landscape", "Outdoor Areas"],
    cover: "/images/garden-light-heads.png",
  },
  {
    id: "garden-pole-lights",
    number: "09",
    page: "13",
    title: "Garden Pole Lights",
    copy: "Pole-mounted outdoor lighting for gardens, walkways, hospitality, and public spaces.",
    applications: ["Walkways", "Hospitality", "Public Spaces"],
    cover: "/images/garden-pole-lights.png",
  },
  {
    id: "bollard-lights",
    number: "10",
    page: "14",
    title: "Bollard Lights",
    copy: "Architectural pathway lighting that balances visual comfort, safety, and outdoor character.",
    applications: ["Paths", "Entrances", "Landscape"],
    cover: "/images/bollard-lights.png",
    catalogSheet: "/images/portfolio/sheets/bollard-lights.png",
  },
  {
    id: "wall-street-tunnel-controls",
    number: "11",
    page: "15",
    title: "Wall, Street, Tunnel & Controls",
    copy: "A broad range for exterior walls, roads, tunnels, infrastructure, and lighting control systems.",
    applications: ["Streets", "Tunnels", "Controls"],
    cover: "/images/wall-street-tunnel-controls.png",
    catalogSheet: "/images/portfolio/sheets/wall-street-tunnel-controls.png",
  },
];

const Projects = ({ projects = defaultProjects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#f1eee8] py-24 text-[#111] sm:py-28 lg:py-36"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-20 top-20 select-none font-serif text-[15rem] leading-none text-black/[0.025] sm:text-[25rem]">
        P
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ staggerChildren: 0.12 }}
          className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20"
        >
          <motion.div variants={reveal} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#a77f3f]" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8b682f]">
                Selected Projects
              </span>
            </div>
          </motion.div>

          <motion.div variants={reveal} transition={{ duration: 0.8 }}>
            <h2 className="max-w-4xl text-[clamp(2.8rem,5.5vw,6.2rem)] font-medium leading-[0.95] tracking-[-0.055em]">
              Ideas transformed into
              <span className="block font-serif font-normal italic text-[#9b763b]">
                meaningful results.
              </span>
            </h2>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-2xl text-base leading-8 text-black/50 sm:text-lg">
                A selection of projects where thoughtful strategy, purposeful
                design, and high-quality development come together.
              </p>

              <span className="shrink-0 text-xs uppercase tracking-[0.25em] text-black/30">
                Featured Work
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Projects grid */}
        {projects.length > 0 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            transition={{ staggerChildren: 0.15 }}
            className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-24"
          >
            {projects.map((project, index) => {
              const isFeatured = index === 0;

              return (
                <motion.article
                  key={project.id ?? project.title}
                  variants={reveal}
                  transition={{
                    duration: 0.85,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`group relative overflow-hidden rounded-[2rem] bg-[#111] ${
                    isFeatured
                      ? "aspect-[4/5] sm:col-span-2 sm:aspect-[16/9] lg:aspect-[16/7]"
                      : "aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]"
                  }`}
                >
                  {/* Project image */}
                  {project.cover ? (
                    <img
                      src={project.cover}
                      alt={project.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#29251f] via-[#151515] to-black" />
                  )}

                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/5" />
                  <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/25" />

                  {/* Top information */}
                  <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6 sm:p-8">
                    <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-white/75 backdrop-blur-md">
                      {project.category || "Featured Project"}
                    </span>

                    <span className="text-xs tracking-[0.2em] text-white/55">
                      {project.year || `0${index + 1}`}
                    </span>
                  </div>

                  {/* Project content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                    <div className={`${isFeatured ? "max-w-3xl" : "max-w-xl"}`}>
                      {/* Tags */}
                      <div className="mb-5 flex flex-wrap gap-2">
                        {project.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-white/55 backdrop-blur-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3
                        className={`font-medium leading-[1.05] tracking-[-0.045em] text-white ${
                          isFeatured
                            ? "text-3xl sm:text-5xl lg:text-6xl"
                            : "text-3xl sm:text-4xl"
                        }`}
                      >
                        {project.title}
                      </h3>

                      <div className="mt-5 flex items-end justify-between gap-6">
                        <p className="max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                          {project.summary}
                        </p>

                        <motion.button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          whileTap={
                            shouldReduceMotion ? undefined : { scale: 0.94 }
                          }
                          aria-label={`View details for ${project.title}`}
                          className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:rotate-[-45deg] hover:border-[#c9a96e] hover:bg-[#c9a96e] hover:text-black sm:h-14 sm:w-14"
                        >
                          <ArrowUpRight size={20} />
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Project number */}
                  <span className="pointer-events-none absolute right-7 top-1/2 hidden -translate-y-1/2 font-serif text-[9rem] leading-none text-white/[0.035] lg:block">
                    0{index + 1}
                  </span>
                </motion.article>
              );
            })}
          </motion.div>
        ) : (
          <div className="mt-16 rounded-[2rem] border border-black/10 p-10 text-center">
            <p className="text-black/50">Projects will be available soon.</p>
          </div>
        )}

        {/* Bottom action */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8 }}
          className="mt-12 flex flex-col gap-6 border-t border-black/15 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3 text-sm text-black/45">
            <Eye size={17} className="text-[#9b763b]" />
            Every project is built around a unique business goal.
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-sm font-semibold"
          >
            Start a Project With Us
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>

      <ProjectModal
        isOpen={Boolean(selectedProject)}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
