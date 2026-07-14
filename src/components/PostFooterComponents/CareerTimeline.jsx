/**
 * What: vertical career timeline (one card per job), plus a "View full
 * experience" CTA, rendered in the home post-footer's "Experience" section.
 * Data from: src/data/homeShowcase.js (careerTimeline) and src/data/home.js
 * (experienceCta).
 * Used by: src/components/PostFooterHome.jsx.
 */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { careerTimeline } from "../../data/homeShowcase";
import { experienceCta } from "../../data/home";
import Bullet from "../Bullet";

const CareerTimeline = () => (
  <section className="mb-10 text-left">
    <p className="mb-4 font-source-code-pro text-xs font-bold uppercase tracking-[0.3em] text-[#5ce1e6] pixel-shadow">
      My career so far
    </p>
    <div className="mx-auto max-w-5xl space-y-4">
      {careerTimeline.map((job, i) => (
        <div key={job.id} className="flex gap-4 sm:gap-5">
          <div className="relative flex flex-none flex-col items-center">
            {i < careerTimeline.length - 1 && (
              <span className="absolute left-1/2 top-14 -bottom-5 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#5ce1e6]/60 to-[#5ce1e6]/0" />
            )}
            <div
              className={`relative z-10 grid h-12 w-12 place-items-center rounded-xl border bg-[#0b0f1f] ${job.current ? "border-[#5ce1e6]/50 shadow-[0_0_16px_rgba(92,225,230,0.4)]" : "border-white/10"}`}
            >
              <img src={job.logo} alt="" className="h-6 w-6 object-contain" />
            </div>
          </div>

          <div className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-[#0b0f1f]/40 p-5 transition-all duration-300 hover:border-white/20">
            <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
              <h3 className="text-xl font-bold leading-tight text-white font-source-code-pro">
                {job.company}
              </h3>
              <span
                className={`flex-none whitespace-nowrap rounded-full border px-2.5 py-0.5 font-source-code-pro text-xs font-semibold ${job.current ? "border-[#5ce1e6]/40 bg-[#5ce1e6]/10 text-[#5ce1e6]" : "border-white/10 text-white/50"}`}
              >
                {job.period}
              </span>
            </div>

            <p className="mt-0.5 mb-4 font-source-code-pro text-xs sm:text-sm text-white/60 font-medium">
              {job.subtitle}
            </p>

            <ul className="space-y-2 font-source-code-pro text-xs sm:text-sm text-white/75">
              {job.bullets.map((b, bi) => (
                <li key={bi} className="flex gap-2">
                  <span className="flex-none text-[#5ce1e6]">▸</span>
                  <span>
                    <Bullet text={b} />
                  </span>
                </li>
              ))}
            </ul>

            {job.tags?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1">
                {job.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/5 bg-white/[0.02] px-2 py-0.5 font-source-code-pro text-[11px] text-white/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>

    {experienceCta && (
      <div className="mt-6 flex justify-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link
            to={experienceCta.to}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-gradient px-7 py-3 font-source-code-pro text-base font-semibold text-black transition-colors duration-200 hover:bg-none hover:bg-[#0b0f1f] hover:text-[#5ce1e6]"
          >
            {experienceCta.label} <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    )}
  </section>
);

export default CareerTimeline;
