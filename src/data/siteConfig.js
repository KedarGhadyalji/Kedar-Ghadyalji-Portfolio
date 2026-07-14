/**
 * What: site-wide configuration — brand/navbar identity, contact info, nav
 * links, social links, per-route background/appearance profiles, and
 * per-route SEO metadata (title + description).
 * Data from: hardcoded below; images from src/assets, icons from react-icons.
 * Used by: src/components/Navbar.jsx (brand, navLinks, socialMedia),
 * src/components/Footer.jsx (socialMedia, contactInfo), src/App.jsx
 * (pageConfig, pageMeta, location), and src/data/contact.js (contactInfo).
 */
import Kedar_Logo from "/Kedar_Logo.png";

// Page background images, one per route (see pageConfig below).
import mountainsBG from "../assets/mountainsBG.gif";
import mario_coder from "../assets/mario_coder.gif"
import skybg from "../assets/skybg.gif";
import coder from "../assets/coder.gif";
import nature from "../assets/nature.gif"
import snow_city from "../assets/snow_city.gif"

// Social link icons.
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

// Brand / identity shown in the navbar.
export const brand = {
  logo: Kedar_Logo,
  alt: "Kedar logo",
};

// Contact details used by the footer and contact page.
export const contactInfo = {
  email: "kedarghadyalji@gmail.com",
  resumeUrl: "/Kedar_Ghadyalji_Resume.pdf",
  copiedMessage: "Email copied to clipboard!",
};

// Shown in the home page post-footer.
export const location = "Mumbai, India";

// Navbar links. `id` is the route path segment (e.g. "about" -> /about).
export const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

// Social links shown in the Footer (desktop) and the Navbar's mobile pause
// menu. `icon` is a react-icons component (rendered directly, not used as an
// <img src>); `label` provides the accessible name for these icon-only links.
export const socialMedia = [
  {
    id: "social-media-1",
    icon: SiGithub,
    label: "GitHub",
    link: "https://github.com/KedarGhadyalji",
  },
  {
    id: "social-media-2",
    icon: FaLinkedin,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/kedar-ghadyalji-98b7a6341",
  },
  {
    id: "social-media-3",
    icon: FaInstagram,
    label: "Instagram",
    link: "https://www.instagram.com/_kedar_ghadyalji_?igsh=MTJ0cjU2NDdjdDkyNw",
  },
  {
    id: "social-media-4",
    icon: FaTwitter,
    label: "Twitter",
    link: "https://x.com/kedarghadyalji?t=FmvbXvlo0zHJhsuLMV-0sA&s=09",
  },
];

// Per-route background image + overlay/darken settings, read by App.jsx via
// pageConfig[location.pathname], falling back to DEFAULT_PAGE.
export const DEFAULT_PAGE = {
  background: mountainsBG,
  showOverlay: false,
  isHome: false,
};

export const pageConfig = {
  "/": { background: coder, showOverlay: false, isHome: true },
  "/home": { background: mario_coder, showOverlay: false, isHome: true },
  "/about": {
    background: nature,
    showOverlay: true,
    darken: 0.45,
    isHome: false,
  },
  "/experience": {
    background: snow_city,
    showOverlay: true,
    darken: 0.3,
    isHome: false,
  },
  "/projects": {
    background: mountainsBG,
    showOverlay: true,
    darken: 0.3,
    isHome: false,
  },
  "/contact": { background: skybg, showOverlay: true, isHome: false },
};

// Per-route <title> and meta description, applied client-side on navigation
// (see hooks/useDocumentMeta.js) and mirrored as static defaults in index.html
// for the very first paint. Keep each description under ~160 characters.
const SITE_TITLE = "Kedar Ghadyalji";

export const DEFAULT_META = {
  title: `${SITE_TITLE} — AI Engineer & Full-Stack Developer`,
  description:
    "Portfolio of Kedar Ghadyalji, a software engineer building high-performance systems where architectural integrity meets seamless user experience.",
};

export const NOT_FOUND_META = {
  title: `Page Not Found — ${SITE_TITLE}`,
  description: "The page you're looking for doesn't exist.",
};

export const pageMeta = {
  "/": DEFAULT_META,
  "/home": DEFAULT_META,
  "/about": {
    title: `About — ${SITE_TITLE}`,
    description:
      "I design and deploy stable full-stack web applications and interactive client interfaces, specializing in MERN stack workflows and clean app architecture.",
  },
  "/experience": {
    title: `Experience — ${SITE_TITLE}`,
    description:
      "Career timeline and featured projects: software engineering internships spanning full-stack development, GenAI tooling, and applied systems work.",
  },
  "/projects": {
    title: `Projects — ${SITE_TITLE}`,
    description:
      "A collection of full-stack apps, developer tools, and experiments built by Kedar Ghadyalji, spanning React, Python, and AI-powered tooling.",
  },
  "/contact": {
    title: `Contact — ${SITE_TITLE}`,
    description:
      "Get in touch with Kedar Ghadyalji to discuss new opportunities, open-source projects, or web engineering work.",
  },
};
