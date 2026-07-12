import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Layers3 } from "lucide-react";
import ProductModal from "./ProductModal";

const productRanges = [
  {
    id: "spot-lights",
    number: "01",
    page: "05",
    title: "Spot Lights",
    description:
      "Directional lighting solutions for focused architectural and landscape illumination.",
    applications: ["Landscape", "Façades", "Feature Lighting"],
    cover: "/images/portfolio/covers/spot-lights.png",
    sheet: "/images/portfolio/sheets/spot-lights.png",
  },
  {
    id: "module-neon-lights",
    number: "02",
    page: "06",
    title: "Module & Neon Lights",
    description:
      "Flexible lighting systems for contours, signage, decorative details, and custom installations.",
    applications: ["Contours", "Signage", "Decorative"],
    cover: "/images/portfolio/covers/module-neon-lights.png",
    sheet: "/images/portfolio/sheets/module-neon-lights.png",
  },
  {
    id: "spike-tree-lights",
    number: "03",
    page: "07",
    title: "Spike & Tree Lights",
    description:
      "Outdoor accent fixtures created to highlight gardens, trees, and landscape features.",
    applications: ["Gardens", "Trees", "Landscape"],
    cover: "/images/portfolio/covers/spike-tree-lights.png",
    sheet: "/images/portfolio/sheets/spike-tree-lights.png",
  },
  {
    id: "window-uplights",
    number: "04",
    page: "08",
    title: "Window & Uplights",
    description:
      "Discreet architectural fixtures for window details, vertical surfaces, and upward illumination.",
    applications: ["Windows", "Columns", "Architecture"],
    cover: "/images/portfolio/covers/window-uplights.png",
    sheet: "/images/portfolio/sheets/window-uplights.png",
  },
  {
    id: "linear-wallwasher-lights",
    number: "05",
    page: "09",
    title: "Linear & Wallwasher Lights",
    description:
      "Uniform linear illumination engineered to reveal façades, textures, and large wall surfaces.",
    applications: ["Façades", "Walls", "Linear Lighting"],
    cover: "/images/portfolio/covers/linear-wallwasher-lights.png",
    sheet: "/images/portfolio/sheets/linear-wallwasher-lights.png",
  },
  {
    id: "step-moisture-proof-wall-lights",
    number: "06",
    page: "10",
    title: "Step & Moisture-Proof Wall Lights",
    description:
      "Durable recessed wall lighting for steps, pathways, and moisture-exposed environments.",
    applications: ["Steps", "Pathways", "Wet Areas"],
    cover: "/images/portfolio/covers/step-moisture-proof-wall-lights.png",
    sheet: "/images/portfolio/sheets/step-moisture-proof-wall-lights.png",
  },
  {
    id: "fountain-floor-tile-lights",
    number: "07",
    page: "11",
    title: "Fountain & Floor Tile Lights",
    description:
      "Integrated lighting solutions for fountains, floors, and refined architectural surfaces.",
    applications: ["Fountains", "Floors", "In-Ground"],
    cover: "/images/portfolio/covers/fountain-floor-tile-lights.png",
    sheet: "/images/portfolio/sheets/fountain-floor-tile-lights.png",
  },
  {
    id: "garden-light-heads",
    number: "08",
    page: "12",
    title: "Garden Light Heads",
    description:
      "Decorative and functional luminaire heads for tailored garden and landscape schemes.",
    applications: ["Gardens", "Landscape", "Outdoor Areas"],
    cover: "/images/portfolio/covers/garden-light-heads.png",
    sheet: "/images/portfolio/sheets/garden-light-heads.png",
  },
  {
    id: "garden-pole-lights",
    number: "09",
    page: "13",
    title: "Garden Pole Lights",
    description:
      "Pole-mounted outdoor lighting for gardens, walkways, hospitality, and public spaces.",
    applications: ["Walkways", "Hospitality", "Public Spaces"],
    cover: "/images/portfolio/covers/garden-pole-lights.png",
    sheet: "/images/portfolio/sheets/garden-pole-lights.png",
  },
  {
    id: "bollard-lights",
    number: "10",
    page: "14",
    title: "Bollard Lights",
    description:
      "Architectural pathway lighting that balances visual comfort, safety, and outdoor character.",
    applications: ["Paths", "Entrances", "Landscape"],
    cover: "/images/portfolio/covers/bollard-lights.png",
    sheet: "/images/portfolio/sheets/bollard-lights.png",
  },
  {
    id: "wall-street-tunnel-controls",
    number: "11",
    page: "15",
    title: "Wall, Street, Tunnel & Controls",
    description:
      "A broad range for exterior walls, roads, tunnels, infrastructure, and lighting control systems.",
    applications: ["Streets", "Tunnels", "Controls"],
    cover: "/images/portfolio/covers/wall-street-tunnel-controls.png",
    sheet: "/images/portfolio/sheets/wall-street-tunnel-controls.png",
  },
];

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalProduct, setModalProduct] = useState(null);
  const shouldReduceMotion = useReducedMotion();
  const activeProduct = productRanges[activeIndex];

  const selectPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? productRanges.length - 1 : current - 1,
    );
  };

  const selectNext = () => {
    setActiveIndex((current) =>
      current === productRanges.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#f1eee8] py-24 text-[#111] sm:py-28 lg:py-36"
    >
      <div className="pointer-events-none absolute -right-20 top-0 select-none font-serif text-[18rem] leading-none text-black/[0.025] sm:text-[28rem]">
        P
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8 }}
          className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20"
        >
          <div className="flex items-start gap-4">
            <span className="mt-2 h-px w-10 bg-[#a77f3f]" />
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8b682f]">
              Product Portfolio
            </span>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(2.8rem,5.5vw,6.2rem)] font-medium leading-[0.95] tracking-[-0.055em]">
              Explore our complete
              <span className="block font-serif font-normal italic text-[#9b763b]">
                lighting portfolio.
              </span>
            </h2>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-2xl text-base leading-8 text-black/50 sm:text-lg">
                Browse the product ranges presented in the official Nurshun
                Energy company profile.
              </p>

              <span className="flex shrink-0 items-center gap-3 text-xs uppercase tracking-[0.22em] text-black/35">
                <Layers3 size={17} className="text-[#9b763b]" />
                11 Product Ranges
              </span>
            </div>
          </div>
        </motion.div>

        <div className="mt-14 flex gap-2 overflow-x-auto pb-3 lg:mt-20">
          {productRanges.map((product, index) => (
            <button
              key={product.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`shrink-0 rounded-full border px-5 py-3 text-xs font-medium transition ${
                activeIndex === index
                  ? "border-[#07131e] bg-[#07131e] text-white"
                  : "border-black/15 text-black/50 hover:border-[#9b763b] hover:text-[#9b763b]"
              }`}
            >
              {product.title}
            </button>
          ))}
        </div>

        <motion.div
          key={activeProduct.id}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 grid overflow-hidden rounded-[2rem] bg-[#07131e] shadow-2xl shadow-black/10 lg:grid-cols-[0.78fr_1.22fr]"
        >
          <div className="relative flex min-h-[470px] flex-col p-7 text-white sm:p-10 lg:min-h-[680px] lg:p-12">
            <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[#e2b63d]/10 blur-[100px]" />

            <div className="relative flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e2b63d]">
                Range {activeProduct.number}
              </span>
              <span className="text-xs tracking-[0.2em] text-white/25">
                Page {activeProduct.page}
              </span>
            </div>

            <div className="relative my-auto py-12">
              <h3 className="text-[clamp(2.6rem,4.5vw,5.2rem)] font-medium leading-[0.95] tracking-[-0.05em]">
                {activeProduct.title}
              </h3>

              <p className="mt-7 max-w-md text-base leading-8 text-white/50">
                {activeProduct.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {activeProduct.applications.map((application) => (
                  <span
                    key={application}
                    className="rounded-full border border-white/15 px-4 py-2 text-[10px] uppercase tracking-[0.15em] text-white/50"
                  >
                    {application}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setModalProduct(activeProduct)}
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#e2b63d] px-7 py-4 text-sm font-semibold text-[#07131e] transition hover:bg-white"
              >
                View Models & Specifications
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>

            <div className="relative flex items-center gap-3 border-t border-white/10 pt-7">
              <button
                type="button"
                onClick={selectPrevious}
                aria-label="Previous product range"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition hover:border-[#e2b63d] hover:text-[#e2b63d]"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                type="button"
                onClick={selectNext}
                aria-label="Next product range"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition hover:border-[#e2b63d] hover:text-[#e2b63d]"
              >
                <ArrowRight size={18} />
              </button>

              <span className="ml-auto text-xs tracking-[0.18em] text-white/30">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {productRanges.length}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setModalProduct(activeProduct)}
            className="group relative min-h-[420px] overflow-hidden bg-white lg:min-h-[680px]"
            aria-label={`View ${activeProduct.title} specifications`}
          >
            <img
              src={activeProduct.cover}
              alt={`${activeProduct.title} catalog sheet`}
              className="absolute inset-0 h-full w-full object-contain p-4 transition-transform duration-1000 group-hover:scale-[1.025] sm:p-8"
            />

            <span className="absolute bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#07131e] text-white shadow-xl transition group-hover:rotate-[-45deg] group-hover:bg-[#e2b63d] group-hover:text-[#07131e]">
              <ArrowUpRight size={19} />
            </span>
          </button>
        </motion.div>
      </div>

      <ProductModal
        isOpen={Boolean(modalProduct)}
        product={modalProduct}
        onClose={() => setModalProduct(null)}
      />
    </section>
  );
};

export default Products;
