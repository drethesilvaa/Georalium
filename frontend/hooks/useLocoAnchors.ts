// hooks/useLocoAnchors.ts
"use client";
import { useEffect } from "react";
import { useLoco } from "@/providers/LocoProvider";

export function useLocoAnchors() {
  const loco = useLoco();

  // Handle anchors present on initial load (?…#hash) and later hash changes
  useEffect(() => {
    const scrollToHash = () => {
      if (!loco || typeof window === "undefined") return;
      const hash = window.location.hash;
      if (!hash) return;
      const el = document.querySelector(hash) as HTMLElement | null;
      if (el) {
        // tweak offset to account for your fixed navbar height
        loco.scrollTo!(el, { offset: 0, duration: 2500 });
      }
    };

    // run once after Locomotive is ready
    scrollToHash();

    // run again on hash changes (e.g. user pastes #who-we-are)
    const onHashChange = () => scrollToHash();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [loco]);

  // A click handler you can attach to <a href="#…"> to prevent default and use loco
  const onAnchorClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    // 1. Prefer href if present (anchors), otherwise fall back to data-target (buttons)
    const href = (
      e.currentTarget.getAttribute("href") ||
      e.currentTarget.getAttribute("data-target") ||
      ""
    ).trim();

    if (!href.startsWith("#")) return; // not an in-page anchor

    const target = document.querySelector(href) as HTMLElement | null;
    if (!target) return;

    if (loco) {
      e.preventDefault?.(); // only defined on <a>, but safe to call
      loco.scrollTo!(target, { offset: 0, duration: 3000 });

      // keep URL hash in sync only for anchors
      if (e.currentTarget.tagName.toLowerCase() === "a") {
        history.pushState(null, "", href);
      }
    }
  };

  return { onAnchorClick };
}
