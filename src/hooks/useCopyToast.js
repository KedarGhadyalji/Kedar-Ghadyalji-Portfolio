import { useState, useCallback, useRef } from "react";

/**
 * What: copies a string to the clipboard and flags `copied` true for
 * `duration` ms, for driving a "Copied!" toast.
 * Data from: the text passed into `copy()` by the caller — no data of its
 * own.
 * Used by: src/components/Footer.jsx and src/pages/Contact.jsx, both of
 * which copy the email address instead of relying on a mailto: link (which
 * only works if the visitor's OS/browser has a mail client configured).
 */
export default function useCopyToast(duration = 2000) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  const copy = useCallback(
    (text) => {
      navigator.clipboard.writeText(text);
      setCopied(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), duration);
    },
    [duration],
  );

  return { copied, copy };
}
