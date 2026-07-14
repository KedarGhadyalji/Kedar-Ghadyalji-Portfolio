/**
 * What: the Home page — hero (CentreBlock) plus the home-only post-footer,
 * which App.jsx renders separately below this component when on "/" or
 * "/home".
 * Data from: n/a directly — CentreBlock and PostFooterHome each pull their
 * own content from src/data/.
 * Used by: src/App.jsx, eagerly loaded (not code-split, since it's the
 * landing route).
 */
import { motion } from 'framer-motion';
import CentreBlock from '../components/CentreBlock';
import styles from '../style';
import { pageFade } from '../utils/motion';

const Home = () => {
  return (
    <div className={styles.flexStart}>
      <div className={styles.boxWidth}>
        <motion.div {...pageFade}>
          <CentreBlock />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;