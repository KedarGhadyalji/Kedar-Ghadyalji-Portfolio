/**
 * What: horizontal project card — image on one side, title/kind/description/
 * tags/repo-link on the other. Same visual language as the featured-work
 * cards on the Experience page, reused here for full project listings.
 * Data from: a single project object (see src/data/projects.js), passed in
 * via the `project` prop — this component holds no data of its own.
 * Used by: src/pages/Projects.jsx, once per entry in `cardProjects`.
 */
import { SiGithub } from "react-icons/si";

const CHIP =
  "rounded-full border border-[#5ce1e6]/30 bg-[#5ce1e6]/10 px-2.5 py-0.5 font-source-code-pro text-xs text-[#7de7eb]";

const ProjectCard = ({ project }) => {
  const hasLink = Boolean(project.Github?.href);

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f1f]/80 transition-all duration-200 hover:border-[#5ce1e6]/40 hover:shadow-[0_0_28px_rgba(92,225,230,0.2)]">
      <div className="flex flex-col md:flex-row">
        {/* Image, with a GitHub-icon overlay on hover if a repo link exists */}
        <div className="relative flex items-center justify-center border-b border-white/5 bg-[#0b0f1f] md:w-2/5 md:border-b-0 md:border-r lg:w-[38%]">
          <div className="relative aspect-video w-full overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {hasLink && (
              <a
                href={project.Github.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} repository`}
                className="absolute inset-0 flex items-center justify-center bg-[#0b0f1f]/0 opacity-0 transition-all duration-300 group-hover:bg-[#0b0f1f]/60 group-hover:opacity-100"
              >
                <SiGithub className="h-9 w-9 text-white drop-shadow-lg" />
              </a>
            )}
          </div>
        </div>

        {/* Title, kind, description, tags, and the repo-link button */}
        <div className="flex min-w-0 flex-1 flex-col justify-between p-5 sm:p-6">
          <div>
            <p className="mb-1 font-source-code-pro text-xs font-bold uppercase tracking-wider text-[#5ce1e6]">
              {project.kind}
            </p>
            <h2 className="mb-3 text-xl font-bold leading-tight text-white font-source-code-pro">
              {project.title}
            </h2>
            <p className="font-source-code-pro text-xs leading-relaxed text-white/70 sm:text-sm">
              {project.desc}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-4">
            <div className="flex flex-wrap gap-1.5">
              {project.tags?.map((t) => (
                <span key={t} className={CHIP}>
                  {t}
                </span>
              ))}
            </div>
            {hasLink && (
              <a
                href={project.Github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-blue-gradient px-4 py-2 font-source-code-pro text-xs font-bold text-black shadow-md transition-all hover:shadow-[0_0_16px_rgba(92,225,230,0.3)]"
              >
                {project.Github.label || "Details"}{" "}
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
