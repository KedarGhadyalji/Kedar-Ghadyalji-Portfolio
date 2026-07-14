/**
 * What: the Experience page — full career timeline and a Certifications
 * grid. (The "Featured Projects" band that used to live here has moved to
 * its own page — see src/pages/Projects.jsx.)
 * Data from: src/data/homeShowcase.js (careerTimeline) and
 * src/data/experience.js (experienceContent, for the page title) and
 * src/data/certifications.js (certifications).
 * Used by: src/App.jsx, lazy-loaded on the /experience route.
 */
import { motion } from "framer-motion";
import { careerTimeline } from "../data/homeShowcase";
import { experienceContent } from "../data/experience";
import { certifications } from "../data/certifications";
import { pageFade } from "../utils/motion";
import Bullet from "../components/Bullet";
import CertificationCard from "../components/CertificationCard";

const CARD = "rounded-2xl border border-white/10 bg-[#0b0f1f]/80";
const CHIP =
  "rounded-full border border-[#5ce1e6]/30 bg-[#5ce1e6]/10 px-2.5 py-0.5 font-source-code-pro text-xs text-[#7de7eb]";

const Sparkles = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 select-none"
  >
    <span className="absolute left-8 top-7 text-[#5ce1e6]/40">+</span>
    <span className="absolute right-10 top-10 text-[#7de7eb]/30">✦</span>
    <span className="absolute right-24 top-1/4 h-1 w-1 rounded-full bg-[#5ce1e6]/40" />
    <span className="absolute left-1/4 top-1/3 h-px w-px rounded-full bg-white/40" />
    <span className="absolute bottom-24 left-12 h-1 w-1 rounded-full bg-white/30" />
    <span className="absolute bottom-16 right-16 text-[#5ce1e6]/30">+</span>
    <span className="absolute right-1/3 bottom-1/3 h-1 w-1 rounded-full bg-[#7de7eb]/30" />
  </div>
);

const CALENDAR_GLYPH = (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="4.5" width="18" height="16.5" rx="2" />
    <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
  </svg>
);

const AWARD_GLYPH = (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5" />
  </svg>
);

const SectionHeader = ({ icon, title, count, className = "" }) => (
  <div
    className={`flex items-center gap-3 border-b border-white/10 pb-3 ${className}`}
  >
    <span className="grid h-10 w-10 flex-none place-items-center rounded-lg border border-[#5ce1e6]/30 bg-[#5ce1e6]/10 text-[#5ce1e6]">
      {icon}
    </span>
    <h2 className="text-2xl font-bold text-white pixel-shadow sm:text-3xl font-source-code-pro">
      {title}
    </h2>
    <span className="ml-auto flex-none whitespace-nowrap rounded-full border border-[#5ce1e6]/30 bg-[#5ce1e6]/5 px-3 py-1 font-source-code-pro text-[10px] font-bold uppercase tracking-wider text-[#7de7eb]">
      {count}
    </span>
  </div>
);

const Experience = () => (
  <motion.div
    {...pageFade}
    className="mx-auto w-[min(94vw,1120px)] py-8 text-left sm:py-12 sm:px-10 px-4"
  >
    <section className="relative overflow-hidden rounded-[28px]">
      <Sparkles />

      <div className="relative">
        <h1 className="sr-only">{experienceContent.title}</h1>
        {/* Work Experience */}
        <SectionHeader
          icon={CALENDAR_GLYPH}
          title="Work Experience"
          count={`${careerTimeline.length} ${careerTimeline.length === 1 ? "ROLE" : "ROLES"}`}
          className="mb-6"
        />
        <div className="group/roles space-y-6">
          {careerTimeline.map((job, i) => (
            <div
              key={job.id}
              className="flex gap-4 transition-opacity duration-200 group-hover/roles:opacity-40 hover:!opacity-100 sm:gap-5"
            >
              <div className="relative flex flex-none flex-col items-center">
                {i < careerTimeline.length - 1 && (
                  <span className="absolute left-1/2 top-14 -bottom-6 w-px -translate-x-1/2 bg-gradient-to-b from-[#5ce1e6]/60 to-[#5ce1e6]/0" />
                )}
                <div
                  className={`relative z-10 grid h-12 w-12 place-items-center overflow-hidden rounded-xl border bg-[#0b0f1f] sm:h-14 sm:w-14 ${job.current ? "border-[#5ce1e6]/60 shadow-[0_0_18px_rgba(92,225,230,0.45)]" : "border-white/15"}`}
                >
                  <img
                    src={job.logo}
                    alt=""
                    className="h-7 w-7 object-contain"
                  />
                </div>
              </div>

              <div
                className={`min-w-0 flex-1 overflow-hidden ${CARD} transition-all duration-200 hover:border-[#5ce1e6]/40`}
              >
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2 border-b border-white/10 bg-[#5ce1e6]/[0.04] px-5 py-3.5">
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold leading-tight text-white font-source-code-pro">
                      {job.company}
                    </h3>
                    {job.subtitle && (
                      <p className="mt-0.5 font-source-code-pro text-xs text-white/50">
                        {job.subtitle}
                      </p>
                    )}
                  </div>
                  <span
                    className={`flex-none whitespace-nowrap rounded-full px-3 py-1 font-source-code-pro text-[11px] font-bold uppercase tracking-wider ${job.current ? "bg-blue-gradient text-black" : "border border-[#5ce1e6]/30 text-[#7de7eb]"}`}
                  >
                    {job.period}
                  </span>
                </div>

                <div className="px-5 py-4">
                  <ul className="space-y-2 font-source-code-pro text-xs sm:text-sm text-white/80">
                    {job.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2">
                        <span className="flex-none text-[#5ce1e6]">›</span>
                        <span>
                          <Bullet text={b} />
                        </span>
                      </li>
                    ))}
                  </ul>

                  {job.tags?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {job.tags.map((t) => (
                        <span key={t} className={CHIP}>
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <SectionHeader
          icon={AWARD_GLYPH}
          title={certifications.heading}
          count={`${certifications.items.length} ${certifications.items.length === 1 ? "CREDENTIAL" : "CREDENTIALS"}`}
          className="mb-6 mt-14"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.items.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} />
          ))}
        </div>
      </div>
    </section>
  </motion.div>
);

export default Experience;
