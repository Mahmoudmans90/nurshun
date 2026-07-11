import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  ChevronDown,
  Globe2,
  Mail,
  Phone,
  Send,
} from "lucide-react";

const initialFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("");
  const shouldReduceMotion = useReducedMotion();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Lighting Project Enquiry - ${formData.company || formData.name}`,
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}
Company: ${formData.company || "Not provided"}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Project Type: ${formData.projectType || "Not selected"}

Project Details:
${formData.message}`,
    );

    setStatus("Your email application should open with the enquiry details.");

    window.location.href = `mailto:info@nurshun.com?subject=${subject}&body=${body}`;
  };

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

  const inputClasses =
    "mt-3 w-full border-b border-white/15 bg-transparent px-0 pb-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#e2b63d]";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f1eee8] py-24 text-[#111] sm:py-28 lg:py-36"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-16 bottom-0 select-none font-serif text-[16rem] leading-none text-black/[0.025] sm:text-[27rem]">
        C
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
                Contact Us
              </span>
            </div>
          </motion.div>

          <motion.div variants={reveal} transition={{ duration: 0.8 }}>
            <h2 className="max-w-5xl text-[clamp(2.8rem,5.5vw,6.2rem)] font-medium leading-[0.95] tracking-[-0.055em]">
              Bring your lighting
              <span className="block font-serif font-normal italic text-[#9b763b]">
                vision to life.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-black/50 sm:text-lg">
              Tell us about your project, requirements, and vision. Our team
              will help you explore the right lighting solutions for your space.
            </p>
          </motion.div>
        </motion.div>

        {/* Contact content */}
        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 xl:gap-24">
          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/35">
              Direct Contact
            </p>

            <div className="mt-6 border-t border-black/15">
              <ContactLink
                icon={Mail}
                label="Email"
                value="info@nurshun.com"
                href="mailto:info@nurshun.com"
              />

              <ContactLink
                icon={Phone}
                label="Phone"
                value="+966 55 585 7450"
                href="tel:+966555857450"
              />

              <ContactLink
                icon={Globe2}
                label="Website"
                value="www.nurshun.com"
                href="https://www.nurshun.com"
                external
              />
            </div>

            <div className="mt-10 rounded-[1.5rem] border border-black/10 p-6 sm:p-7">
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#9b763b]">
                Response
              </span>

              <p className="mt-3 text-sm leading-7 text-black/50">
                Share as much information as possible about your project so our
                team can provide a more relevant response.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 40,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-[2rem] bg-[#07131e] p-6 text-white shadow-2xl shadow-black/10 sm:p-9 lg:p-12"
          >
            {/* Form decoration */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#e2b63d]/10 blur-[100px]" />

            <div className="relative">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e2b63d]">
                    Project Enquiry
                  </span>

                  <h3 className="mt-4 text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                    Tell us about your project.
                  </h3>
                </div>

                <span className="hidden text-xs tracking-[0.2em] text-white/25 sm:block">
                  NSE / 01
                </span>
              </div>

              <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-medium uppercase tracking-[0.18em] text-white/45"
                  >
                    Your Name *
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="Enter your full name"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-company"
                    className="text-xs font-medium uppercase tracking-[0.18em] text-white/45"
                  >
                    Company
                  </label>

                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    autoComplete="organization"
                    placeholder="Company or organization"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-medium uppercase tracking-[0.18em] text-white/45"
                  >
                    Email Address *
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    placeholder="name@company.com"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="text-xs font-medium uppercase tracking-[0.18em] text-white/45"
                  >
                    Phone Number
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    placeholder="+966"
                    className={inputClasses}
                  />
                </div>

                <div className="relative sm:col-span-2">
                  <label
                    htmlFor="contact-project-type"
                    className="text-xs font-medium uppercase tracking-[0.18em] text-white/45"
                  >
                    Project Type
                  </label>

                  <select
                    id="contact-project-type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`${inputClasses} cursor-pointer appearance-none pr-10`}
                  >
                    <option value="" className="bg-[#07131e]">
                      Select a project type
                    </option>

                    <option
                      value="Residential Lighting"
                      className="bg-[#07131e]"
                    >
                      Residential Lighting
                    </option>

                    <option
                      value="Commercial Lighting"
                      className="bg-[#07131e]"
                    >
                      Commercial Lighting
                    </option>

                    <option
                      value="Architectural Lighting"
                      className="bg-[#07131e]"
                    >
                      Architectural Lighting
                    </option>

                    <option value="Landscape Lighting" className="bg-[#07131e]">
                      Landscape Lighting
                    </option>

                    <option
                      value="Infrastructure Lighting"
                      className="bg-[#07131e]"
                    >
                      Infrastructure Lighting
                    </option>

                    <option value="Other" className="bg-[#07131e]">
                      Other
                    </option>
                  </select>

                  <ChevronDown
                    size={17}
                    className="pointer-events-none absolute bottom-4 right-0 text-[#e2b63d]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-medium uppercase tracking-[0.18em] text-white/45"
                  >
                    Project Details *
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about the space, requirements, timeline, and lighting goals..."
                    className={`${inputClasses} min-h-[150px] resize-y`}
                  />
                </div>
              </div>

              <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xs text-xs leading-6 text-white/30">
                  Submitting will open your email application with the enquiry
                  details prepared.
                </p>

                <motion.button
                  type="submit"
                  whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#e2b63d] px-7 py-4 text-sm font-semibold text-[#07131e] transition hover:bg-white"
                >
                  Send Enquiry
                  <Send
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </motion.button>
              </div>

              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className="mt-5 text-xs text-[#e2b63d]"
                >
                  {status}
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const ContactLink = ({ icon: Icon, label, value, href, external = false }) => {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between gap-6 border-b border-black/15 py-6"
    >
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-[#9b763b] transition group-hover:border-[#9b763b] group-hover:bg-[#9b763b] group-hover:text-white">
          <Icon size={17} />
        </span>

        <span>
          <span className="block text-[10px] uppercase tracking-[0.18em] text-black/35">
            {label}
          </span>

          <span className="mt-1 block text-sm font-medium sm:text-base">
            {value}
          </span>
        </span>
      </div>

      <ArrowUpRight
        size={17}
        className="text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#9b763b]"
      />
    </a>
  );
};

export default Contact;
