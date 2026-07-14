import { useEffect } from "react";

/**
 * What: keeps document.title and <meta name="description"> in sync with the
 * current route.
 * Data from: the {title, description} object passed in by the caller (see
 * pageMeta / NOT_FOUND_META in src/data/siteConfig.js).
 * Used by: src/App.jsx, called once per navigation with the current route's
 * metadata. No external dependency needed for a change this small — just a
 * couple of direct DOM writes.
 */
export default function useDocumentMeta({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);
}
