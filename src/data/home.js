/**
 * What: all home-page content — hero copy, post-footer intro, "What I Do"
 * cards, tech-stack carousel, section-divider banners, contact band, and the
 * closing "keep exploring" cards.
 * Data from: hardcoded copy below; icons from react-icons/lucide-react.
 * Used by: src/pages/Home.jsx and the components under
 * src/components/PostFooterComponents/ (CentreBlock, AboutCapabilities,
 * TechStack, SectionDivider, KeepExploring) — each imports the one export it
 * needs from this file.
 */
import {
  SiCplusplus,
  SiPython,
  SiDatabricks,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiHtml5,
} from "react-icons/si";
import { FaCode, FaJava, FaCss3Alt } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { Server, Zap, BrainCircuit, ShieldAlert } from "lucide-react";
import { FiUser, FiBriefcase, FiFolder } from "react-icons/fi";

// Hero (CentreBlock). `titles` rotate in the typing animation; `name.nick` is
// the highlighted nickname shown in quotes. The component renders `prefix + title`,
// so the article (a/an) lives inside each title to read correctly before
// vowel-initial words ("an Audio…", "an Embedded…").
export const hero = {
  eyebrow: "Hello, I'm",
  name: { first: "KEDAR", last: "GHADYALJI" },
  prefix: "I am",
  titles: [
    " an AI Engineer",
    " a Full-Stack Developer",
    // " a Game Developer",
    // " a Game Designer",
  ],
};

// Label on the "View more" button under the home highlights.
export const featuredCta = "View more";

// "View full experience" button below the career timeline — bridges the
// home post-footer's Experience section to the full Experience page.
export const experienceCta = {
  label: "View full experience",
  to: "/experience",
};

// "View projects in detail" button below the featured-work list — bridges
// the home post-footer's Projects section to the full Projects page.
export const projectsCta = {
  label: "View projects in detail",
  to: "/projects",
};

// Post-footer intro band (AboutHomePage).
export const aboutIntro = {
  title: "Turning complex problems into elegant, functional reality.",
  body: "I am a Software Engineer focused on building high-performance systems where architectural integrity meets seamless user experience.",
  ctaLabel: "Learn more",
  ctaTo: "/about",
};

// "What I Do" numbered capability index on the home page.
export const whatIDo = {
  heading: "What I Do",
  subtitle: "Engineering High-Performance Digital Ecosystems",
  cards: [
    {
      title: "Full-Stack Dev",
      description:
        "Scalable MERN applications: optimized schemas, robust REST APIs, and fast, state-driven UI.",
      logo: Server,
    },
    {
      title: "Real-Time Logic",
      description:
        "Instant, bi-directional server communication using WebSockets, event logic, and Socket.io.",
      logo: Zap,
    },
    {
      title: "Intelligent Apps",
      description:
        "Integrating smart parsing, evaluation algorithms, and context-aware tools into core products.",
      logo: BrainCircuit,
    },
    {
      title: "Secure Code",
      description:
        "Defensive web programming: proactive client-side rate limiters, honeypots, and secure webhooks.",
      logo: ShieldAlert,
    },
  ],
};

// Tech stack, grouped by discipline (mirrors the "What I Do" areas).
// To add a tool: import its logo at the top of this file, then drop a
// { name, logo, where } object into the right group's `items` array.
// `where` is the text shown in the hover tooltip (where the skill was used).

export const techStack = {
  heading: "Tech Stack",
  subtitle:
    "Tools and technologies I use to build secure, scalable applications",
  items: [
    {
      name: "C",
      logo: FaCode,
      color: "#A8B9CC",
      where:
        "Low-level logic, procedural programming fundamentals, and system analysis.",
    },
    {
      name: "C++",
      logo: SiCplusplus,
      color: "#00599C",
      where:
        "Object-oriented programming paradigms, memory management, and data structures.",
    },
    {
      name: "C#",
      logo: TbBrandCSharp,
      color: "#239120",
      where:
        "Application architecture, software design patterns, and cross-platform desktop development.",
    },
    {
      name: "Java",
      logo: FaJava,
      color: "#007396",
      where:
        "Enterprise-level backend logic, clean code architecture, and multi-paradigm design.",
    },
    {
      name: "Python",
      logo: SiPython,
      color: "#3776AB",
      where:
        "Scripting automation, backend algorithms, analytics tools, and procedural application design.",
    },
    {
      name: "SQL",
      logo: SiDatabricks,
      color: "#4479A1",
      where:
        "Relational database design, query optimization, data preprocessing, and analytics dashboards.",
    },
    {
      name: "React Native",
      logo: SiReact,
      color: "#61DAFB",
      where:
        "Cross-platform mobile client design, components lifecycle hooks, and rendering state optimization.",
    },
    {
      name: "React",
      logo: SiReact,
      color: "#61DAFB",
      where:
        "Interactive SPA interfaces, custom state management hooks, and this portfolio.",
    },
    {
      name: "JavaScript",
      logo: SiJavascript,
      color: "#F7DF1E",
      where:
        "Core logical engineering across full-stack applications and asynchronous flows.",
    },
    {
      name: "TypeScript",
      logo: SiTypescript,
      color: "#3178C6",
      where:
        "Type-safe application layers, explicit structural mapping, and predictable production deployments.",
    },
    {
      name: "HTML",
      logo: SiHtml5,
      color: "#E34F26",
      where:
        "Structuring semantic document typography, layout elements, and form layers.",
    },
    {
      name: "CSS",
      logo: FaCss3Alt,
      color: "#1572B6",
      where:
        "Custom root design layout setups, structural transitions, and typography variables.",
    },
    {
      name: "Tailwind CSS",
      logo: SiTailwindcss,
      color: "#06B6D4",
      where:
        "Designing fast, responsive styling architectures and maintaining theme design tokens.",
    },
    {
      name: "MongoDB",
      logo: SiMongodb,
      color: "#47A248",
      where:
        "Database architecture modeling, optimized document aggregation pipelines, and storage.",
    },
    {
      name: "Git",
      logo: SiGit,
      color: "#F05032",
      where:
        "Local repository lifecycle management, commit staging, and workspace branch tracking.",
    },
    {
      name: "GitHub",
      logo: SiGithub,
      color: "#181717",
      where:
        "Version control lifecycle, granular access setups, and code workspace deployment tracking.",
    },
    {
      name: "Postman",
      logo: SiPostman,
      color: "#FF6C37",
      where:
        "API diagnostic validation, integration load routines, and secure payload checks.",
    },
    {
      name: "Vercel",
      logo: SiVercel,
      color: "#000000",
      where:
        "Production cloud deployment, serverless hosting, and optimization configurations.",
    },
  ],
};

// Game-HUD banners that split the home post-footer into four "levels", in the
// natural first-visit reading order (who I am → what I've done → what I've
// built → reach out). `level`/`total` drive the LEVEL 0N label, the N / TOTAL
// counter, and how far the segmented meter fills. Rendered by
// SectionDivider.jsx, laid out in PostFooterHome.jsx.
export const sectionDividers = {
  about: { level: 1, total: 4, eyebrow: "Who I Am", title: "About Me" },
  experience: {
    level: 2,
    total: 4,
    eyebrow: "The Work I've Done",
    title: "My Experience",
  },
  projects: {
    level: 3,
    total: 4,
    eyebrow: "Selected Work",
    title: "My Projects",
  },
  contact: {
    level: 4,
    total: 4,
    eyebrow: "Let's Connect",
    title: "Contact Me",
  },
};

// Closing contact band that opens the 03 section — a centered call to reach out,
// sitting above the "Keep exploring" navigation cards.
export const contactBand = {
  heading: "Let's work together",
  body: "Available for software engineering opportunities. Let's connect and build reliable solutions.",
  ctaLabel: "Get in touch",
  ctaTo: "/contact",
};

// The last band on the home page, sending visitors to the three main
// destinations (who I am → what I've done → reach out). Rendered as compact
// navigation cards beneath the contact band.
export const keepExploring = {
  eyebrow: "Next Steps",
  heading: "Continue the Journey",
  cards: [
    {
      logo: FiUser,
      title: "About Me",
      description:
        "A closer look at my certifications, philosophy, and tech domain focus.",
      ctaLabel: "View profile",
      to: "/about",
    },
    {
      logo: FiBriefcase,
      title: "My Experience",
      description:
        "A comprehensive timeline of my technical roles and project metrics.",
      ctaLabel: "View timeline",
      to: "/experience",
    },
    {
      logo: FiFolder,
      title: "My Projects",
      description:
        "A closer look at the tools, apps, and experiments I've built.",
      ctaLabel: "View projects",
      to: "/projects",
    },
  ],
};
