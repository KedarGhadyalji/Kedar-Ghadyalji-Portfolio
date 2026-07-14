/**
 * What: the 404 page shown for any unmatched route.
 * Data from: src/data/notFound.js (notFound).
 * Used by: src/App.jsx, matched by the catch-all "/*" route.
 */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "../style";
import { notFound } from "../data/notFound";
import { pageFade } from "../utils/motion";

const Page404 = () => {
  return (
    <div className={styles.flexStart || "flex justify-start items-start"}>
      <div
        className={`${styles.boxWidth || "w-full max-w-[1280px] mx-auto"} px-6 flex justify-center`}
      >
        <motion.div {...pageFade} className="w-full max-w-xl">
          <section className="flex justify-center items-center py-20">
            <div className="w-full rounded-2xl border border-white/10 bg-[#0b0f1f]/50 p-8 sm:p-12 backdrop-blur-sm text-center">
              {/* HTTP Status Code */}
              <h1 className="font-source-code-pro font-black text-[#5ce1e6] text-6xl sm:text-8xl mb-4 pixel-shadow tracking-tight">
                {notFound.code || "404"}
              </h1>

              {/* Status Message */}
              <p className="font-source-code-pro font-bold text-white text-lg sm:text-xl mb-2 pixel-shadow">
                {notFound.message || "Route Not Found"}
              </p>

              {/* Sub-explanation narrative */}
              {notFound.subtitle && (
                <p className="font-source-code-pro text-xs text-white/50 mb-8 max-w-sm mx-auto leading-relaxed">
                  {notFound.subtitle}
                </p>
              )}

              {/* Navigation help description links */}
              <p className="font-source-code-pro text-xs sm:text-sm leading-relaxed text-white/70 border-t border-white/5 pt-6">
                {notFound.before}
                <Link
                  to={notFound.linkTo || "/"}
                  className="mx-1 text-[#5ce1e6] font-bold hover:underline transition-all underline-offset-4"
                >
                  {notFound.linkText || "homepage"}
                </Link>
                {notFound.after}
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Page404;
