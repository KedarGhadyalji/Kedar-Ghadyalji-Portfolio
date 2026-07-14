/**
 * What: barrel export for top-level components used directly by App.jsx and
 * pages (Navbar, Footer, CentreBlock, ProjectCard, PostFooterHome,
 * CaveStalactites, TechStack).
 * Data from: n/a (re-exports only).
 * Used by: src/App.jsx, src/pages/Home.jsx, src/pages/Projects.jsx.
 */
import Navbar from "./Navbar";
import Footer from "./Footer";
import CentreBlock from "./CentreBlock";
import ProjectCard from "./ProjectCard";
import PostFooterHome from "./PostFooterHome";
import CaveStalactites from "./CaveStalactites";
import TechStack from "./PostFooterComponents/TechStack";

export {
  Navbar,
  Footer,
  CentreBlock,
  ProjectCard,
  PostFooterHome,
  CaveStalactites,
  TechStack,
};
