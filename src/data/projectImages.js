/**
 * What: image imports for project screenshots used across project cards.
 * Data from: static files under src/assets/Projects. Every project in
 * src/data/projects.js currently points at the same placeholder image
 * (gaipa) — swap in real per-project screenshots here as they become
 * available.
 * Used by: src/data/projects.js and, transitively, every component that
 * renders project cards (ProjectCard.jsx, FeaturedWork.jsx, Experience.jsx).
 */

import gaipa from "../assets/Projects/gaipa.png";
import acv from "../assets/Projects/acv.png";
import ccv from "../assets/Projects/ccv.png";
import pj from "../assets/Projects/pj.png";
import spawn from "../assets/Projects/spawn.png";
import twaf from "../assets/Projects/twaf.png";

export const projectImages = { gaipa, acv, ccv, pj, spawn, twaf };
