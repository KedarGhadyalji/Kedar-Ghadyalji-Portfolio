/**
 * What: shared Tailwind class-name presets for common layout patterns
 * (width, flex centering, section padding).
 * Data from: n/a (pure config, no external data).
 * Used by: App.jsx and most page/component files via `styles.<key>`.
 */
const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-10 py-6",
};

export default styles;
