/**
 * What: desktop footer bar — resume link, social icons, and a copy-to-
 * clipboard email button (hidden below 768px, where the same links live in
 * the Navbar's mobile pause menu instead).
 * Data from: src/data/siteConfig.js (socialMedia, contactInfo); email icon
 * from ../assets.
 * Used by: src/App.jsx.
 */
import styles from "../style";
import { socialMedia, contactInfo } from "../data/siteConfig";
import { motion } from 'framer-motion';
import { email } from '../assets';
import useCopyToast from "../hooks/useCopyToast";
import CopyToast from "./CopyToast";

const Footer = () => {
  const { copied, copy } = useCopyToast();

  const hoverVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  return (
    <section className={`${styles.flexCenter} py-4  px-8 flex-col mt-auto`}>
      <div className="w-full flex flex-col sm:flex-row justify-between items-center ">
        {/* Resume link — hidden below 768px (lives in the mobile pause menu instead). */}
        <motion.div
          whileHover="hover"
          variants={hoverVariants}
          className="hidden sm:block mb-6 sm:mb-0 z-10"
        >
          <a
            href={contactInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white rock-surface text-xs py-2 px-4 pixel-shadow"
          >
            Resume
          </a>
        </motion.div>

        {/* Social icons — hidden below 768px (live in the mobile pause menu instead).
            Rendered as react-icons components (not <img>), since `social.icon`
            is a component reference, not an image URL. */}
        <div className="hidden sm:flex flex-wrap justify-center gap-3 mb-4 sm:mb-0 ">
          {socialMedia.map((social) => {
            const Icon = social.icon;
            return (
              <motion.div
                key={social.id}
                whileHover="hover"
                variants={hoverVariants}
                className="flex items-center justify-center rock-surface text-xs py-2 px-2"
              >
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center"
                >
                  <Icon
                    aria-hidden="true"
                    className="w-[25px] h-[25px] text-white cursor-pointer block"
                  />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Email — copies the address instead of relying on a mailto: link
            (unreliable across visitors without a mail client configured). */}
        <motion.div
          whileHover="hover"
          variants={hoverVariants}
          className="sm:mb-0"
        >
          <button
            type="button"
            onClick={() => copy(contactInfo.email)}
            className="flex items-center text-white rock-surface text-xs py-2 px-4 pixel-shadow"
          >
            <img src={email} alt="Email Icon" loading="lazy" decoding="async" className="w-[25px] h-[15px] mr-2" />
            {contactInfo.email}
          </button>
        </motion.div>
      </div>

      <CopyToast show={copied} message={contactInfo.copiedMessage} />
    </section>
  );
};

export default Footer;
