// hooks/useHideOnLocoScroll.ts
"use client";
import { useEffect, useRef, useState } from "react";
import { useLoco } from "@/providers/LocoProvider";

/**
 * Show when scrolling UP, hide when scrolling DOWN past a small offset.
 *
 * @param threshold   minimum delta in px to react (debounce)
 * @param minHideY    don't hide until you've scrolled at least this far (px)
 */
export function useHideOnLocoScroll(threshold = 6, minHideY = 80) {
  const loco = useLoco();
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    if (!loco) return;

    const handler = (args: any) => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const y = args?.scroll?.y ?? 0;
        const dir = args?.direction ?? (y > lastY.current ? "down" : "up");
        const delta = Math.abs(y - lastY.current);

        // Always show at very top
        if (y <= 0) {
          setHidden(false);
        } else if (delta > threshold) {
          if (dir === "up") {
            // Reveal immediately on upward scroll (even at bottom)
            setHidden(false);
          } else if (dir === "down") {
            // Only start hiding after you've scrolled a bit down the page
            if (y > minHideY) setHidden(true);
          }
        }

        lastY.current = y;
        ticking.current = false;
      });
    };

    loco.on("scroll", handler);
    // @ts-ignore some versions expose off()
    return () => loco.off?.("scroll", handler);
  }, [loco, threshold, minHideY]);

  return hidden;
}
