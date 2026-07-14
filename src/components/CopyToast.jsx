/**
 * What: a small fixed-position "Copied to clipboard!" toast.
 * Data from: the `message` prop passed in by the caller — no data of its own.
 * Used by: src/components/Footer.jsx and src/pages/Contact.jsx, shown
 * briefly after copying the email address.
 */
const CopyToast = ({ show, message }) => (
  <div
    aria-live="polite"
    className={`pointer-events-none fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 rounded-xl border border-[#5ce1e6]/40 bg-[#0b0f1f]/95 px-4 py-2.5 font-source-code-pro text-xs font-semibold text-[#7de7eb] shadow-[0_4px_24px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-all duration-300 ${
      show ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
    }`}
  >
    {message}
  </div>
);

export default CopyToast;
