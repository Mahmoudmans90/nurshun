import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Check, ExternalLink, X } from "lucide-react";

const ProjectModal = ({ isOpen, onClose, project }) => {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocusedElement = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      // Keep keyboard focus inside the modal
      if (event.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (!firstElement || !lastElement) return;

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocusedElement?.focus();
    };
  }, [isOpen, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/75 p-0 backdrop-blur-md sm:items-center sm:p-5 lg:p-8"
        >
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 60,
              scale: shouldReduceMotion ? 1 : 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 40,
              scale: shouldReduceMotion ? 1 : 0.98,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative grid max-h-[95svh] w-full max-w-[1320px] overflow-hidden rounded-t-[2rem] bg-[#f1eee8] shadow-2xl shadow-black/50 sm:max-h-[90svh] sm:rounded-[2rem] lg:grid-cols-[0.95fr_1.05fr]"
          >
            {/* Close button */}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-xl transition duration-300 hover:rotate-90 hover:border-[#c9a96e] hover:bg-[#c9a96e] hover:text-black sm:right-6 sm:top-6"
            >
              <X size={19} />
            </button>

            {/* Project visual */}
            <div className="relative min-h-[300px] overflow-hidden bg-[#111] sm:min-h-[400px] lg:min-h-[720px]">
              {project.cover ? (
                <img
                  src={project.cover}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#342b20] via-[#181818] to-black" />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-black/15" />

              <div className="absolute left-6 top-6 sm:left-8 sm:top-8">
                <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-white/75 backdrop-blur-md">
                  {project.category || "Featured Project"}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 lg:p-10">
                <span className="text-xs uppercase tracking-[0.25em] text-[#d8b97e]">
                  {project.year || "Norshen Project"}
                </span>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/55">
                  Thoughtfully created to deliver clarity, performance, and a
                  lasting impression.
                </p>
              </div>
            </div>

            {/* Project information */}
            <div className="overflow-y-auto px-6 pb-9 pt-10 text-[#111] sm:px-10 sm:pb-12 sm:pt-12 lg:px-14 lg:py-16">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9b763b]">
                Project Overview
              </span>

              <h2
                id="project-modal-title"
                className="mt-5 max-w-2xl text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-5xl lg:text-6xl"
              >
                {project.title}
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-black/55 sm:text-lg">
                {project.summary}
              </p>

              {/* Tags */}
              {project.tags?.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/15 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.15em] text-black/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Project details */}
              <div className="mt-10 border-t border-black/15">
                {project.challenge && (
                  <DetailItem
                    number="01"
                    title="The Challenge"
                    copy={project.challenge}
                  />
                )}

                {project.solution && (
                  <DetailItem
                    number="02"
                    title="Our Solution"
                    copy={project.solution}
                  />
                )}

                {project.result && (
                  <DetailItem
                    number="03"
                    title="The Result"
                    copy={project.result}
                  />
                )}
              </div>

              {/* Actions */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#111] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#a77f3f]"
                >
                  Start a Similar Project
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                {/* {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-black/15 px-7 py-4 text-sm font-semibold transition-colors hover:border-black hover:bg-black hover:text-white"
                  >
                    Visit Project
                    <ExternalLink size={17} />
                  </a>
                )} */}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

const DetailItem = ({ number, title, copy }) => {
  return (
    <div className="grid gap-4 border-b border-black/15 py-7 sm:grid-cols-[55px_1fr]">
      <div className="flex items-center gap-3 sm:block">
        <span className="text-xs tracking-[0.2em] text-black/35">{number}</span>

        <Check size={16} className="text-[#9b763b] sm:mt-4" strokeWidth={1.8} />
      </div>

      <div>
        <h3 className="text-xl font-medium tracking-[-0.025em]">{title}</h3>

        <p className="mt-3 text-sm leading-7 text-black/50 sm:text-base">
          {copy}
        </p>
      </div>
    </div>
  );
};

export default ProjectModal;
