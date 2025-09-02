"use client";

import { useEffect, useRef, useState } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { LocoProvider, LocoType } from "@/providers/LocoProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";

type Props = { children: React.ReactNode };

export default function SmoothScroll({ children }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [loco, setLoco] = useState<LocoType>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // SSR/Prerender guard
    if (typeof window === "undefined") return;
    if (!containerRef.current) return;

    let scroll: any; // or your Locomotive type if you’ve declared it
    let resizeHandler: (() => void) | null = null;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      scroll = new LocomotiveScroll({
        el: containerRef.current!,
        smooth: true,
        multiplier: 1,
        lerp: 0.5,
        tablet: { smooth: true },
      });

      setLoco(scroll);
      setLoading(false);

      resizeHandler = () => scroll.update();
      window.addEventListener("resize", resizeHandler);
    })();

    return () => {
      if (resizeHandler) window.removeEventListener("resize", resizeHandler);
      scroll?.destroy();
      setLoco(null);
    };
  }, []);

  return (
    <>
      {loading && <Loader />}
      <LocoProvider value={loco}>
        <Navbar />
        <div id="scroll-container" data-scroll-container ref={containerRef}>
          {children}
          <Footer />
        </div>
      </LocoProvider>
    </>
  );
}
