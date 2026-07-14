/**
 * What: "Featured Work" project list on the home post-footer — a compact
 * row per project, with a cursor-following tooltip showing the summary on
 * hover, and a CTA linking to the full Experience page.
 * Data from: src/data/homeShowcase.js (featuredWork, itself re-exported from
 * src/data/projects.js) and src/data/home.js (projectsCta).
 * Used by: src/components/PostFooterHome.jsx.
 */
import { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { featuredWork } from "../../data/homeShowcase";
import { projectsCta } from "../../data/home";

const TIP_WIDTH = 288; // matches w-72

const FeaturedWork = () => {
  const [active, setActive] = useState(null); // the hovered project (or null)
  const [pos, setPos] = useState({ x: 0, y: 0 }); // cursor position

  return (
    <section className="mb-10 text-left">
      <p className="mb-2 font-source-code-pro text-sm font-bold uppercase tracking-[0.3em] text-[#5ce1e6] sm:text-base pixel-shadow">
        Featured Work
      </p>
      <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl pixel-shadow">
        Selected projects
      </h2>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f1f]/50 backdrop-blur-sm">
        {featuredWork.map((p) => {
          // Only render as a link if the project actually has a repo URL.
          const hasLink = Boolean(p.Github?.href);
          const Wrapper = hasLink ? "a" : "div";
          const linkProps = hasLink
            ? {
                href: p.Github.href,
                target: "_blank",
                rel: "noopener noreferrer",
              }
            : {};

          return (
            <Wrapper
              key={p.id}
              {...linkProps}
              onMouseEnter={() => setActive(p)}
              onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
              onMouseLeave={() => setActive((cur) => (cur === p ? null : cur))}
              className={`group flex items-center gap-4 border-b border-white/[0.07] px-4 py-4 transition-colors duration-200 last:border-b-0 sm:px-5 ${
                hasLink ? "cursor-pointer hover:bg-[#5ce1e6]/[0.06]" : ""
              }`}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video w-20 flex-none overflow-hidden rounded-lg border border-white/10 sm:w-24 bg-[#0b0f1f]">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center bg-white/5 font-source-code-pro text-[10px] uppercase text-white/30 tracking-wider">
                    No Img
                  </div>
                )}
              </div>

              {/* Title, kind, and tags */}
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-lg font-bold leading-tight text-white sm:text-xl">
                  {p.title}
                </h3>
                <p className="mt-0.5 font-source-code-pro text-xs font-bold uppercase tracking-[0.15em] text-[#5ce1e6]">
                  {p.kind || "Software Utility"}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {p.tags?.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 px-2 py-0.5 font-source-code-pro text-xs text-white/70 bg-white/[0.02]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Repo link label, or "Private" when there's no public repo */}
              <span className="flex-none whitespace-nowrap font-source-code-pro text-sm font-semibold text-[#5ce1e6]">
                {hasLink ? (
                  <>
                    {p.Github?.label || "Details"}{" "}
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-200 group-hover:translate-x-0.5"
                    >
                      ↗
                    </span>
                  </>
                ) : (
                  <span className="text-white/40">Private</span>
                )}
              </span>
            </Wrapper>
          );
        })}
      </div>

      <div className="mt-6 flex justify-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link
            to={projectsCta?.to || "/projects"}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-gradient px-7 py-3 font-source-code-pro text-base font-semibold text-black transition-colors duration-200 hover:bg-none hover:bg-[#0b0f1f] hover:text-[#5ce1e6]"
          >
            {projectsCta?.label || "View projects in detail"}{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>

      {/* Tooltip showing the hovered project's summary, positioned next to the cursor.
          Rendered via a portal so it isn't clipped by this section's overflow-hidden. */}
      {active &&
        createPortal(
          <div
            className="pointer-events-none fixed z-[60] w-72 max-w-[80vw] rounded-lg border border-white/10 bg-[#0b0f1f] p-3 text-left shadow-xl backdrop-blur-md"
            style={{
              left: Math.min(pos.x + 16, window.innerWidth - TIP_WIDTH - 12),
              top: pos.y + 16,
            }}
          >
            <span className="block text-sm font-bold text-white">
              {active.title}
            </span>
            <span className="mt-1 block font-source-code-pro text-xs leading-relaxed text-white/75">
              {active.summary}
            </span>
          </div>,
          document.body,
        )}
    </section>
  );
};

export default FeaturedWork;
