/**
 * What: content for the About page (hero copy, story, stats, discipline
 * cards, and the closing CTA).
 * Data from: hardcoded copy in this file; icons come from react-icons,
 * logos from ./companyLogos, and the hero photo from /public/Kedar.png.
 * Used by: src/pages/About.jsx (the only consumer of `aboutPage`).
 */
import { SiLeetcode } from "react-icons/si";
import {
  FiLayout,
  FiActivity,
  FiSettings,
  FiCheckCircle,
  FiMapPin,
} from "react-icons/fi";
import Kedar from "/Kedar.png";
import { companyLogos } from "./companyLogos";

export const aboutPage = {
  // Hero intro panel: photo, headline, intro paragraph, and status chips.
  eyebrow: "About",
  photo: Kedar,

  title: {
    lead: "Building high-performance ",
    accent: "digital",
    tail: " solutions",
  },
  intro:
    "I design and deploy stable full-stack web applications and interactive client interfaces. Specializing in functional MERN stack workflows, asynchronous data communication, and clean app architecture.",

  chips: [
    { label: "Mumbai, India", icon: FiMapPin, dot: true },
    { label: "Available for Opportunities" },
    { label: "Software Developer" },
  ],

  // Longer-form narrative paragraphs shown below the hero.
  story: {
    eyebrow: "My Story",
    paragraphs: [
      "I develop web software and mobile applications where backend management logic connects cleanly with smooth, intuitive user interfaces. From modeling well-structured database objects and managing REST API paths to setting up dynamic frontend states, I enjoy delivering completed web platforms that are straightforward and easy to use.",
      "My approach to engineering emphasizes performance, readability, and software stability. I focus on creating production-ready components, writing robust data entry workflows, and establishing reliable application pathways. Outside of code design, I focus on project delivery metrics and building custom feature layouts.",
    ],
  },

  // Quick stats + platform logos worked with.
  glance: {
    heading: "At a glance",
    stats: [
      { value: "225+", label: "LeetCode Solved" },
      { value: "700+", label: "GitHub Commits" },
      { value: "1", label: "VS Code Extension" },
      { value: "ML", label: "Data Automation" },
    ],
    workedWithHeading: "Experience & Platforms",
    logos: [
      {
        logo: SiLeetcode,
        color: "#FFA116",
        alt: "LeetCode",
      },
      {
        src: companyLogos.Forage,
        alt: "Forage",
      },
      {
        src: companyLogos.CSI,
        alt: "Cyber Secured India",
      },
    ],
    cta: { label: "Learn more", to: "/experience" },
  },

  // Core competency cards ("What I Do" section on the About page).
  disciplines: {
    eyebrow: "What I Do",
    heading: "Core Development Focus",
    items: [
      {
        title: "Full-Stack Dev",
        description:
          "Building structured web applications featuring clean database models and highly responsive, state-driven user interfaces.",
        logo: FiLayout,
        tools: ["MongoDB", "Express", "React", "Node.js"],
      },
      {
        title: "Real-Time Logic",
        description:
          "Implementing live, bi-directional browser sync features with efficient network communication workflows.",
        logo: FiActivity,
        tools: ["WebSockets", "Socket.io", "Event Handlers"],
      },
      {
        title: "Product Engineering",
        description:
          "Developing practical evaluation tools, structured data mapping methods, and context-aware web utilities.",
        logo: FiSettings,
        tools: ["Data Processing", "Object Mapping", "Workflows"],
      },
      {
        title: "Reliable Architecture",
        description:
          "Writing standard software solutions backed by stable API controllers, input verification, and webhook notifications.",
        logo: FiCheckCircle,
        tools: ["Data Validation", "API Control", "Webhooks"],
      },
    ],
  },

  // Closing call-to-action panel, links to the Contact page.
  cta: {
    title: "Let's build something complete.",
    body: "Looking for an engineer to help build robust web applications and interactive client solutions? Let's connect.",
    label: "Get in touch",
    to: "/contact",
  },
};
