/**
 * What: canonical list of every project, plus three filtered views derived
 * from it (experienceProjects, cardProjects, featuredProjects).
 * Data from: hardcoded project entries below; images from ./projectImages.
 * Used by: src/pages/Projects.jsx (cardProjects), and, via
 * src/data/homeShowcase.js re-exporting featuredProjects as `featuredWork`,
 * also by the home post-footer's FeaturedWork.jsx and src/pages/Experience.jsx.
 * This is the single source of truth for project data — do not duplicate
 * project entries elsewhere.
 */
import { projectImages } from "./projectImages";

// Visible header for the Projects page (eyebrow, heading, intro copy).
export const projectsPageHeader = {
  eyebrow: "My Work",
  heading: "Projects",
  intro:
    "A collection of full-stack apps, developer tools, and experiments — spanning React, Python, and AI-powered tooling.",
};

export const projects = [
  {
    id: "twaf",
    image: projectImages.twaf,
    title: "Tailwind Warning Auto-Fix",
    kind: "SOFTWARE · VS CODE EXTENSION",
    summary:
      "A VS Code extension that automatically resolves TailwindCSS optimization warnings and class conflicts with a single click.",
    desc: "Tailwind Warning Auto-Fix is a specialized developer tool designed to streamline CSS maintenance by automatically resolving Tailwind optimization warnings. It features a one-command execution that corrects complex class issues and provides an interactive workflow for resolving class conflicts—such as conflicting alignment properties—without the risks of blind auto-resolution. By leveraging exact diagnostic ranges rather than document-wide searches, the extension ensures precise edits that remain safe for all supported file types, including JS, TS, Vue, and Blade. Its ability to apply changes through a single WorkspaceEdit means that developers can revert batch operations instantly with a standard undo command, providing a safe and efficient way to maintain clean, optimized class strings across any project.",
    tags: ["TypeScript", "VS Code", "VS Code Marketplace"],
    Github: {
      label: "Details",
      href: "https://github.com/KedarGhadyalji/tailwind-warning-auto-fix",
    },
    featured: true,
    showOnExperience: true,
    showOnProjects: true,
  },
  {
    id: "spawn",
    image: projectImages.spawn,
    title: "Spawn - A simple Git clone!",
    kind: "SOFTWARE · PYTHON",
    summary:
      "A lightweight implementation of core Git functionality built from scratch in Python.",
    desc: "Spawn serves as an educational Git clone written in Python, designed to demystify the internal mechanics of version control. It successfully replicates essential Git primitives, including object storage, commit hierarchies, branching, and a functional staging area, all while presenting a clean, accessible command-line interface. The project utilizes SHA-1 hashing and zlib compression to manage data integrity, effectively demonstrating how Git tracks snapshots of a file system. By implementing features such as branch management, commit history visualization, and repository initialization, Spawn provides a hands-on look at how version control systems manage data, making it an excellent resource for understanding the foundational concepts behind the world's most popular version control system.",
    tags: ["Python", "Git"],
    Github: {
      label: "Details",
      href: "https://github.com/KedarGhadyalji/Spawn_Git_Clone",
    },
    featured: true,
    showOnExperience: true,
    showOnProjects: true,
  },
  {
    id: "pj",
    image: projectImages.pj,
    title: "PixelJar - An IDE",
    kind: "SOFTWARE · FULL-STACK",
    summary:
      "A production-grade, multi-language code playground featuring a cloud-based execution engine and interactive UI.",
    desc: "PixelJar is a sophisticated, high-performance code playground built with Next.js 15, Clerk, and Convex, offering developers an ultra-low latency environment to execute scripts across over ten sandboxed runtimes. The platform prioritizes professional user experience through cinematic route transitions powered by Framer Motion and a highly customizable Monaco Editor workspace that supports multiple themes and font configurations. Beyond its execution capabilities, PixelJar differentiates itself with an innovative 'Sticker Login' layer, where authentication is managed through a physics-based, draggable canvas of programming language stickers. By combining server-side sandboxed runtime execution with hardware-accelerated micro-interactions, PixelJar delivers a seamless and engaging coding experience for developers who demand both speed and aesthetic excellence.",
    tags: ["Next.js", "Clerk", "Convex", "Framer Motion", "Tailwind CSS"],
    Github: {
      label: "Details",
      href: "https://github.com/KedarGhadyalji/PixelJar",
    },
    featured: true,
    showOnExperience: true,
    showOnProjects: true,
  },
  {
    id: "ccv",
    image: projectImages.ccv,
    title: "CraftedCV - AI-Powered Resume Builder",
    kind: "SOFTWARE · FULL-STACK",
    summary:
      "An intelligent resume builder that utilizes Generative AI to create professional, ATS-optimized documents.",
    desc: "CraftedCV is a high-performance full-stack application engineered to help job seekers navigate the competitive modern job market with ease. The platform integrates Generative AI to provide real-time, context-aware suggestions for summaries and work experience bullet points, ensuring that every resume remains impactful and professional. To guarantee the highest chance of recruitment success, the application uses layout templates specifically designed to pass through Applicant Tracking System (ATS) filters. With features like live preview, users can watch their resume transform in real-time as they edit content, and the platform’s easy export functionality ensures they can generate professional PDF versions in seconds. CraftedCV effectively bridges the gap between complex resume drafting and the technical requirements of modern hiring pipelines.",
    tags: ["React", "JavaScript", "TailwindCSS", "Gemini API", "MongoDB"],
    Github: {
      label: "Details",
      href: "https://github.com/KedarGhadyalji/craftedcv",
    },
    featured: true,
    showOnExperience: true,
    showOnProjects: true,
  },
  {
    id: "acv",
    image: projectImages.acv,
    title: "AnalyzedCV - Resume Diagnostic Tool",
    kind: "SOFTWARE · FULL-STACK",
    summary:
      "A smart career strategist tool that performs semantic analysis to optimize resumes against specific job descriptions.",
    desc: "AnalyzedCV functions as a comprehensive career strategist by leveraging semantic parsing and AI-driven insights to evaluate how well a user's professional profile matches a specific job description. By moving beyond basic keyword matching, the tool utilizes advanced semantic analysis to interpret the true depth of a user's experience and provide a clear compatibility percentage score. Users are provided with actionable feedback, including a detailed breakdown of keyword gaps and specific professional tips for optimizing their content to better align with industry standards. By identifying precisely which skills are missing from a CV, AnalyzedCV gives candidates the strategic edge needed to get noticed by recruiters and ultimately increases their success rate in a crowded job market.",
    tags: ["React", "JavaScript", "TailwindCSS", "Gemini API", "Puter.js"],
    Github: {
      label: "Details",
      href: "https://github.com/KedarGhadyalji/AnalyzedCV",
    },
    featured: true,
    showOnExperience: true,
    showOnProjects: true,
  },
  {
    id: "gaipa",
    image: projectImages.gaipa,
    title: "Genie - AI Pocket Agent",
    kind: "SOFTWARE · FULL-STACK",
    summary:
      "A mobile application powered by the Kravix API that enables the creation and management of small-scale AI agents in real-time.",
    desc: "Genie is a versatile mobile application that serves as a pocket-sized AI agent manager, built to provide users with direct access to sophisticated AI capabilities on the go. By utilizing the Kravix API, the application allows users to orchestrate and interact with small-scale AI agents in real-time, facilitating complex tasks through a simplified mobile interface. The project leverages the power of React Native and Expo to ensure a high-performance, cross-platform experience that remains responsive under varying conditions. Whether the goal is automating quick tasks or managing personalized intelligent workflows, Genie provides the infrastructure for users to build and deploy their own AI-driven utility tools instantly, bringing the benefits of edge-compatible AI support directly into the user's pocket.",
    tags: ["React Native", "TypeScript", "TailwindCSS", "Kravix API", "Expo"],
    Github: {
      label: "Details",
      href: "https://github.com/KedarGhadyalji/genie-ai-pocket-agent",
    },
    featured: true,
    showOnExperience: true,
    showOnProjects: true,
  },
];

export const experienceProjects = projects.filter((p) => p.showOnExperience);
export const cardProjects = projects.filter((p) => p.showOnProjects);
export const featuredProjects = projects.filter((p) => p.featured);
