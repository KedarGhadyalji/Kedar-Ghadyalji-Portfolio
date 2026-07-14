/**
 * What: splits a bullet string on {chip} markers and renders the marked
 * spans as highlighted pills (e.g. "20K+ samples"), leaving the rest as
 * plain text.
 * Data from: the `text` prop passed in by the caller — no data of its own.
 * Used by: src/components/PostFooterComponents/CareerTimeline.jsx and
 * src/pages/Experience.jsx, wherever a career-timeline bullet is rendered.
 */
const Bullet = ({ text }) => (
  <>
    {text.split(/(\{[^}]+\})/g).map((part, i) =>
      part.startsWith('{') && part.endsWith('}') ? (
        <span
          key={i}
          className="mx-0.5 inline-flex items-center rounded-md border border-[#5ce1e6]/40 bg-[#5ce1e6]/10 px-1.5 py-px text-[0.9em] text-[#5ce1e6]"
        >
          {part.slice(1, -1)}
        </span>
      ) : (
        <span key={i}>{part}</span>
      )
    )}
  </>
);

export default Bullet;
