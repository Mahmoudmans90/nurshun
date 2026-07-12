import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // بدون + أو مسافات
  const phoneNumber = "201xxxxxxxxx";

  const message = encodeURIComponent(
    "Hello, I would like to know more about your lighting solutions.",
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div
      className="fixed bottom-5 right-5 z-[100] sm:bottom-7 sm:right-7"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating message card */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 12, scale: 0.96 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 10, scale: 0.96 }
            }
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute bottom-[76px] right-0 hidden w-[270px] overflow-hidden rounded-2xl border border-white/10 bg-[#11130f]/95 shadow-[0_20px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:block"
          >
            {/* Top accent */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#c9a45c] to-transparent" />

            <div className="p-4">
              <div className="mb-3 flex items-center gap-3">
                <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.28)]">
                  <FaWhatsapp className="text-2xl" />

                  <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-[#11130f] bg-[#7CFF8B]" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Chat with us
                  </p>

                  <div className="mt-0.5 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7CFF8B]" />
                    <span className="text-xs text-white/55">
                      Typically replies quickly
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm leading-6 text-white/65">
                Need help choosing the right lighting solution? Our team is
                ready to assist.
              </p>

              <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
                <span className="text-xs uppercase tracking-[0.18em] text-[#c9a45c]">
                  WhatsApp Support
                </span>

                <span className="text-lg text-white/30">↗</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulse effects */}
      {!shouldReduceMotion && (
        <>
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-full border border-[#25D366]/45"
            animate={{
              scale: [1, 1.45],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />

          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-[#25D366]/20 blur-md"
            animate={{
              scale: [0.9, 1.25, 0.9],
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}

      {/* Main button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        whileHover={shouldReduceMotion ? undefined : { scale: 1.07 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
        transition={{ type: "spring", stiffness: 350, damping: 20 }}
        className="group relative flex h-[62px] w-[62px] items-center justify-center overflow-hidden rounded-full border border-white/15 bg-gradient-to-br from-[#35e777] via-[#25D366] to-[#109e48] text-white shadow-[0_18px_45px_rgba(37,211,102,0.3)] outline-none transition-shadow duration-300 hover:shadow-[0_22px_60px_rgba(37,211,102,0.48)] focus-visible:ring-2 focus-visible:ring-[#c9a45c] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0b0c09]"
      >
        {/* Shine */}
        <span className="absolute -left-10 top-0 h-full w-8 rotate-12 bg-white/25 blur-md transition-all duration-700 group-hover:left-[120%]" />

        {/* Inner glow */}
        <span className="absolute inset-[5px] rounded-full border border-white/15" />

        <FaWhatsapp className="relative z-10 text-[31px] drop-shadow-sm transition-transform duration-300 group-hover:rotate-[-7deg] group-hover:scale-110" />

        {/* Notification badge */}
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
