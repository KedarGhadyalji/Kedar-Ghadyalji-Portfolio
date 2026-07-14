/**
 * What: the career timeline and the "featured work" project list shared by
 * the home post-footer (compact versions) and the Experience page (full
 * versions).
 * Data from: careerTimeline is hand-written below (no other canonical
 * source exists for it); featuredWork is re-exported from src/data/projects.js
 * rather than duplicated, so the two lists can never drift out of sync.
 * Used by: src/components/PostFooterComponents/CareerTimeline.jsx and
 * FeaturedWork.jsx (home post-footer), and src/pages/Experience.jsx.
 *
 * In a bullet, wrap a stat in {curly braces} to render it as a highlighted chip,
 * e.g. "Trained ML models on {20K+ samples} via Bash pipelines".
 */

import { companyLogos } from "./companyLogos";
import { featuredProjects } from "./projects";
export const careerTimeline = [
  {
    id: "csi",
    company: "Cyber Secured India",
    logo: companyLogos.CSI,
    subtitle: "Research and Innovation Intern · Software Development",
    bullets: [
      "Engineered the core system mechanics, interactive modules, and progress tracking layouts for a centralized Learning Management System (LMS).",
      "Implemented a secure dual-mode authentication pathway alongside dynamic evaluation tools, portal discussion forums, and automated certificate generation engines.",
      "Optimized front-facing platform delivery channels, enhancing mobile responsiveness, layout performance, and user interface stability.",
    ],
    tags: ["React", "TypeScript", "MongoDB", "UI/UX"],
    period: "Jan 2026 - Apr 2026",
    current: false,
  },
  {
    id: "claidroid",
    company: "Claidroid Technologies",
    logo: companyLogos.Claidroid,
    subtitle: "Full-Stack Software Developer Intern · GenAI & Agentic AI",
    bullets: [
      "Architected and deployed a full-stack Generative AI Applicant Tracking System (ATS) integrated with an interactive Resume Builder utility.",
      "Leveraged the Gemini API to build intelligent resume parsing pipelines, automated profile evaluations, and contextual feedback mechanisms.",
      "Developed a fluid user experience featuring dynamic state-driven input fields, clean object management structures, and tailored SCSS layouts.",
    ],
    tags: ["MongoDB", "Express", "React", "Node.js"],
    period: "Dec 2025 - Jan 2026",
    current: false,
  },
  {
    id: "forage",
    company: "Electronic Arts (via Forage)",
    logo: companyLogos.Forage,
    subtitle: "Software Engineering Job Simulation",
    bullets: [
      "Authored a structured technical feature blueprint detailing modular game mechanics for corporate stakeholders.",
      "Designed clean object-oriented class systems and architectural definitions utilizing robust C++ header layouts.",
      "Patched logic errors and optimized data retrieval performance inside a core simulation engine using efficient data structures.",
    ],
    tags: ["C++", "Object-Oriented Design", "Data Structures", "Code Review"],
    period: "Nov 2025 - Dec 2025",
    current: false,
  },
];

// featuredWork: re-exported from src/data/projects.js (featuredProjects),
// not duplicated — see the file header above for why.
export const featuredWork = featuredProjects;
