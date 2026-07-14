/**
 * What: the About page — hero intro, story, at-a-glance stats, core
 * discipline cards, and a closing CTA. (Certifications live on the
 * Experience page instead — see src/pages/Experience.jsx.)
 * Data from: src/data/about.js (aboutPage).
 * Used by: src/App.jsx, lazy-loaded on the /about route.
 */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { aboutPage } from "../data/about";
import { pageFade } from "../utils/motion";

const { eyebrow, photo, title, intro, chips, story, glance, disciplines, cta } =
  aboutPage;

const EYEBROW =
  "font-source-code-pro text-sm font-bold uppercase tracking-[0.3em] text-[#5ce1e6] pixel-shadow transition-colors duration-200 group-hover:text-black";

// Shared "flip to cyan on hover" treatment used by certain panels/cards.
const PANEL_HOVER =
  "group cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:border-[#5ce1e6] hover:bg-[#5ce1e6]";

const About = () => (
  <motion.div
    {...pageFade}
    className="mx-auto w-[min(92vw,1024px)] space-y-12 py-8 text-left sm:py-12"
  >
    {/* 1 — Hero panel */}
    <section className="group rounded-3xl border border-white/10 bg-[#222a47]/55 p-6 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:scale-[1.01] hover:border-[#5ce1e6] hover:shadow-[0_0_36px_rgba(92,225,230,0.5)] sm:p-9">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
        {/* Image profile holder */}
        <div className="relative h-24 w-24 flex-none overflow-hidden rounded-2xl border border-white/15 transition-colors duration-200 group-hover:border-black/20 sm:h-44 sm:w-44">
          <img
            src={photo}
            alt="Kedar Ghadyalji"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <p className={`mb-2 ${EYEBROW}`}>{eyebrow}</p>
          <h1 className="text-3xl font-bold leading-tight text-white transition-colors duration-200 group-hover:text-black pixel-shadow sm:text-5xl">
            {title.lead}
            <span className="text-[#5ce1e6] transition-colors duration-200 group-hover:text-black">
              {title.accent}
            </span>
            {title.tail}
          </h1>
          <p className="mt-3 font-source-code-pro text-base text-white/70 transition-colors duration-200 group-hover:text-black/80 sm:text-lg">
            {intro}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {chips.map((c) => {
              const ChipIcon = c.icon;
              return (
                <span
                  key={c.label}
                  className="inline-flex items-center gap-2 rounded-full border border-[#5ce1e6]/40 bg-[#0b0f1f]/50 px-3 py-1 font-source-code-pro text-sm text-[#7de7eb] transition-colors duration-200 group-hover:border-black/40 group-hover:bg-black/5 group-hover:text-black"
                >
                  {ChipIcon && <ChipIcon className="h-3.5 w-3.5" />}
                  {c.dot && !ChipIcon && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#5ce1e6] shadow-[0_0_6px_#5ce1e6] transition-colors duration-200 group-hover:bg-black group-hover:shadow-none" />
                  )}
                  {c.label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    {/* 2 — Story and Stat grid section */}
    <section className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
      <div>
        <p className="mb-3 font-source-code-pro text-sm font-bold uppercase tracking-[0.3em] text-[#5ce1e6] pixel-shadow">
          {story.eyebrow}
        </p>
        <div className="space-y-4 font-source-code-pro text-base text-white/80 pixel-shadow sm:text-lg">
          {story.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <Link
        to={glance.cta.to}
        className={`flex flex-col rounded-2xl border border-white/10 bg-[#0b0f1f]/50 p-6 backdrop-blur-sm hover:shadow-[0_0_28px_rgba(92,225,230,0.45)] ${PANEL_HOVER}`}
      >
        <p className={`mb-4 ${EYEBROW}`}>{glance.heading}</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-5">
          {glance.stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold leading-none text-[#5ce1e6] transition-colors duration-200 group-hover:text-black sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 font-source-code-pro text-sm text-white/60 transition-colors duration-200 group-hover:text-black/70">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <hr className="my-5 border-white/10 transition-colors duration-200 group-hover:border-black/20" />

        <p className="mb-3 font-source-code-pro text-xs font-bold uppercase tracking-[0.25em] text-white/50 transition-colors duration-200 group-hover:text-black/60">
          {glance.workedWithHeading}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            {glance.logos.map((l, index) => {
              const BrandIcon = l.logo;
              return (
                <div
                  key={index}
                  className="grid h-9 w-9 place-items-center overflow-hidden rounded-lg border border-white/10 bg-[#0b0f1f]/70 p-1.5 transition-colors duration-200 group-hover:border-black/20 group-hover:bg-[#0b0f1f]"
                  title={l.alt}
                >
                  {/* Handle inline functional icons */}
                  {BrandIcon && (
                    <BrandIcon
                      className="h-full w-full"
                      style={{ color: l.color }}
                    />
                  )}
                  {/* Handle static image file imports dynamically */}
                  {l.src && (
                    <img
                      src={l.src}
                      alt={l.alt}
                      className="h-full w-full object-contain"
                    />
                  )}
                </div>
              );
            })}
          </div>
          <span className="inline-flex items-center gap-1 rounded-lg border border-[#5ce1e6]/40 px-4 py-2 font-source-code-pro text-sm font-semibold text-[#5ce1e6] transition-colors duration-200 group-hover:border-black/50 group-hover:text-black">
            {glance.cta.label} <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </section>

    {/* 3 — Focus Domains mapping stack */}
    <section>
      <p className="mb-2 font-source-code-pro text-sm font-bold uppercase tracking-[0.3em] text-[#5ce1e6] pixel-shadow">
        {disciplines.eyebrow}
      </p>
      <h2 className="mb-6 text-3xl font-bold text-white pixel-shadow sm:text-4xl">
        {disciplines.heading}
      </h2>
      <div className="space-y-4">
        {disciplines.items.map((d) => {
          const DisciplineIcon = d.logo;
          return (
            <div
              key={d.title}
              className="flex gap-4 rounded-2xl border border-white/10 bg-[#0b0f1f]/40 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#5ce1e6] hover:shadow-[0_0_28px_rgba(92,225,230,0.45)] sm:gap-6"
            >
              <div className="grid h-12 w-12 flex-none place-items-center rounded-xl border border-[#5ce1e6]/30 bg-[#0b0f1f]/60 text-[#5ce1e6]">
                {DisciplineIcon && <DisciplineIcon className="h-6 w-6" />}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold leading-tight text-white sm:text-xl">
                  {d.title}
                </h3>
                <p className="mt-1 font-source-code-pro text-base text-white/70">
                  {d.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {d.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[#5ce1e6]/40 px-2 py-0.5 font-source-code-pro text-xs text-[#7de7eb]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>

    {/* 4 — Closing call to action panel */}
    <Link
      to={cta.to}
      className={`flex flex-col items-start justify-between gap-5 rounded-3xl border border-white/10 bg-[#222a47]/55 p-6 backdrop-blur-sm hover:scale-[1.01] hover:shadow-[0_0_36px_rgba(92,225,230,0.5)] sm:flex-row sm:items-center sm:p-9 ${PANEL_HOVER}`}
    >
      <div>
        <h2 className="text-2xl font-bold text-white transition-colors duration-200 group-hover:text-black pixel-shadow sm:text-3xl">
          {cta.title}
        </h2>
        <p className="mt-2 font-source-code-pro text-base text-white/70 transition-colors duration-200 group-hover:text-black/80 sm:text-lg">
          {cta.body}
        </p>
      </div>
      <motion.span
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex flex-none items-center gap-1 rounded-lg bg-blue-gradient px-6 py-3 font-source-code-pro text-base font-semibold text-black transition-colors duration-200 group-hover:bg-none group-hover:bg-[#0b0f1f] group-hover:text-[#5ce1e6]"
      >
        {cta.label} <span aria-hidden="true">→</span>
      </motion.span>
    </Link>
  </motion.div>
);

export default About;
