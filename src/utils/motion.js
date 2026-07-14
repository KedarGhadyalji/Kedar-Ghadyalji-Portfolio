/**
 * What: shared framer-motion animation presets.
 * Data from: n/a (pure config, no external data).
 * Used by: every page component (Home, About, Experience, Projects, Contact,
 * Page404) — each spreads {...pageFade} onto its top-level wrapper so all
 * routes fade in identically on mount.
 */
export const pageFade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};
