/**
 * What: the home post-footer — four numbered "levels" (SectionDivider
 * banners) composing About (intro + capabilities + tech stack), Experience
 * (career timeline), Projects (featured work), and Contact (closing CTA +
 * nav cards).
 * Data from: src/data/home.js (sectionDividers); each child component pulls
 * its own content from src/data/.
 * Used by: src/App.jsx, rendered only on the home route.
 */
import {
  AboutCapabilities,
  TechStack,
  CareerTimeline,
  FeaturedWork,
  KeepExploring,
  SectionDivider,
} from './PostFooterComponents';
import { sectionDividers } from '../data/home';

const PostFooterHome = () => (
  <div className="mt-10">
    {/* 01 — About */}
    <SectionDivider {...sectionDividers.about} />
    <AboutCapabilities />
    <TechStack />

    {/* 02 — Experience */}
    <SectionDivider {...sectionDividers.experience} />
    <CareerTimeline />

    {/* 03 — Projects */}
    <SectionDivider {...sectionDividers.projects} />
    <FeaturedWork />

    {/* 04 — Contact */}
    <SectionDivider {...sectionDividers.contact} />
    <KeepExploring />
  </div>
);

export default PostFooterHome;
