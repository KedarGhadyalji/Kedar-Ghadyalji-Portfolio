/**
 * What: the Projects page — a visible page header, the full list of every
 * project marked showOnProjects (each a horizontal ProjectCard, one per
 * line), and a closing "view more on GitHub" CTA.
 * Data from: src/data/projects.js (projectsPageHeader, cardProjects) and
 * src/data/siteConfig.js (socialMedia, for the GitHub profile link).
 * Used by: src/App.jsx, lazy-loaded on the /projects route.
 */
import { motion } from "framer-motion";
import styles from "../style";
import ProjectCard from "../components/ProjectCard";
import { projectsPageHeader, cardProjects } from "../data/projects";
import { socialMedia } from "../data/siteConfig";
import { pageFade } from "../utils/motion";

const githubProfile = socialMedia.find((s) => s.label === "GitHub")?.link;

const Sparkles = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 select-none"
  >
    <span className="absolute left-8 top-7 text-[#5ce1e6]/40">+</span>
    <span className="absolute right-10 top-10 text-[#7de7eb]/30">✦</span>
    <span className="absolute right-24 top-1/4 h-1 w-1 rounded-full bg-[#5ce1e6]/40" />
    <span className="absolute left-1/4 top-1/3 h-px w-px rounded-full bg-white/40" />
    <span className="absolute bottom-24 left-12 h-1 w-1 rounded-full bg-white/30" />
    <span className="absolute bottom-16 right-16 text-[#5ce1e6]/30">+</span>
    <span className="absolute right-1/3 bottom-1/3 h-1 w-1 rounded-full bg-[#7de7eb]/30" />
  </div>
);

const Projects = () => {
  return (
    <div className="w-full">
      <div
        className={`${styles.paddingX || "px-6"} ${styles.flexCenter || "flex justify-center"} flex items-center`}
      >
        <div className={styles.boxWidth || "w-full max-w-[1280px]"}>
          <motion.div
            {...pageFade}
            className="relative mx-auto w-full overflow-hidden rounded-[28px] py-8 sm:py-12"
          >
            <Sparkles />

            <div className="relative">
              {/* Page header */}
              <div className="mb-8 max-w-2xl">
                <p className="mb-2 font-source-code-pro text-sm font-bold uppercase tracking-[0.3em] text-[#5ce1e6] pixel-shadow">
                  {projectsPageHeader.eyebrow}
                </p>
                <h1 className="mb-4 text-3xl font-bold text-white pixel-shadow sm:text-4xl">
                  {projectsPageHeader.heading}
                </h1>
                <p className="font-source-code-pro text-sm leading-relaxed text-white/70 sm:text-base">
                  {projectsPageHeader.intro}
                </p>
              </div>

              <p className="mb-4 font-source-code-pro text-xs font-bold uppercase tracking-wider text-white/40">
                {cardProjects.length}{" "}
                {cardProjects.length === 1 ? "Project" : "Projects"}
              </p>

              {/* Project list — one horizontal card per line. */}
              <div className="flex flex-col gap-6">
                {cardProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>

              {/* Closing CTA */}
              {githubProfile && (
                <div className="mt-12 flex justify-center">
                  <a
                    href={githubProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-gradient px-7 py-3 font-source-code-pro text-base font-semibold text-black transition-all duration-200 hover:shadow-[0_0_24px_rgba(92,225,230,0.4)]"
                  >
                    View more on GitHub <span aria-hidden="true">↗</span>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
