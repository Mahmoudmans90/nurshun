import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, FileText, X } from "lucide-react";

const ProductModal = ({ isOpen, onClose, product }) => {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/80 p-0 backdrop-blur-md sm:items-center sm:p-5"
        >
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 50,
              scale: shouldReduceMotion ? 1 : 0.98,
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : 35 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
            className="relative grid max-h-[95svh] w-full max-w-[1450px] overflow-hidden rounded-t-[2rem] bg-[#f4f3ef] shadow-2xl sm:max-h-[92svh] sm:rounded-[2rem] lg:grid-cols-[360px_1fr]"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close product details"
              className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/90 text-[#07131e] backdrop-blur-xl transition hover:rotate-90 hover:bg-[#e2b63d] sm:right-6 sm:top-6"
            >
              <X size={19} />
            </button>

            <aside className="relative flex flex-col overflow-hidden bg-[#07131e] px-7 pb-8 pt-16 text-white sm:px-10 lg:px-11 lg:py-14">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e2b63d]">
                Product Range {product.number}
              </span>

              <h2
                id="product-modal-title"
                className="mt-5 text-4xl font-medium leading-[1] tracking-[-0.045em] sm:text-5xl"
              >
                {product.title}
              </h2>

              <p className="mt-6 text-sm leading-7 text-white/55">
                {product.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {product.applications.map((application) => (
                  <span
                    key={application}
                    className="rounded-full border border-white/15 px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-white/55"
                  >
                    {application}
                  </span>
                ))}
              </div>

              <div className="mt-9 border-t border-white/10 pt-7 lg:mt-auto">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/35">
                  <FileText size={16} className="text-[#e2b63d]" />
                  Official portfolio page {product.page}
                </div>

                <a
                  href={product.sheet}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-6 inline-flex items-center gap-3 text-sm font-semibold"
                >
                  Open Full Sheet
                  <ArrowUpRight
                    size={17}
                    className="text-[#e2b63d] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </aside>

            <div className="overflow-auto bg-[#deddd8] p-4 sm:p-7 lg:p-10">
              <div className="mx-auto overflow-hidden rounded-xl bg-white shadow-xl shadow-black/10">
                <img
                  src={product.sheet}
                  alt={`${product.title} models and specifications`}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default ProductModal;
