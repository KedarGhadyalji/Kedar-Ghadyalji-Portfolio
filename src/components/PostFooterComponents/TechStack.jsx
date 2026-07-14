/**
 * What: "Tech Stack" tool grid on the home post-footer (icon + name per
 * tool, with a "where I used it" tooltip on hover).
 * Data from: src/data/home.js (techStack).
 * Used by: src/components/PostFooterHome.jsx; also barrel-exported from
 * src/components/index.js for direct use elsewhere if needed.
 */
import { techStack } from "../../data/home";

const TechStack = () => {
  return (
    <section className="mb-14 text-left">
      <p className="mb-2 font-source-code-pro text-sm font-bold uppercase tracking-[0.3em] text-[#5ce1e6] sm:text-base pixel-shadow">
        Toolbox
      </p>
      <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl pixel-shadow">
        {techStack.heading}
      </h2>
      <p className="mb-8 text-sm sm:text-base text-white/60 max-w-2xl font-source-code-pro leading-relaxed">
        {techStack.subtitle}
      </p>

      {/* Tool wall Grid */}
      <div className="flex flex-wrap justify-start gap-3">
        {techStack.items.map((item) => {
          const IconComponent = item.logo;

          return (
            <div key={item.name} className="group/chip relative">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-[#0b0f1f]/50 backdrop-blur-sm py-1.5 pl-3 pr-4 font-source-code-pro text-sm text-white transition-all duration-300 hover:border-[#5ce1e6]/50 hover:bg-[#0b0f1f]/80 hover:shadow-[0_0_16px_rgba(92,225,230,0.25)] cursor-default">
                <span className="flex h-5 w-5 flex-none place-items-center justify-center">
                  {IconComponent && (
                    <IconComponent
                      className="h-full w-full transition-transform duration-300 group-hover/chip:scale-110"
                      style={{ color: item.color }}
                    />
                  )}
                </span>
                <span className="font-medium text-white/90">{item.name}</span>
              </span>

              {/* Hover Tooltip - Fixed flex header layout bugs */}
              <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-3 w-64 -translate-x-1/2 rounded-xl border border-white/10 bg-[#0b0f1f] p-3.5 text-left opacity-0 shadow-2xl transition-all duration-200 group-hover/chip:opacity-100 scale-95 group-hover/chip:scale-100 backdrop-blur-md">
                <span className="flex items-center gap-2 text-sm font-bold text-white mb-1.5">
                  {IconComponent && (
                    <IconComponent
                      className="h-4 w-4"
                      style={{ color: item.color }}
                    />
                  )}
                  {item.name}
                </span>
                <span className="block font-source-code-pro text-[11px] leading-relaxed text-white/70">
                  {item.where}
                </span>
                <span className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 border-b border-r border-white/10 bg-[#0b0f1f]" />
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStack;