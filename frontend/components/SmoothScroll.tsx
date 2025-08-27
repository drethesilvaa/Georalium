"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

type Props = {
  children: React.ReactNode;
};

export default function SmoothScroll({ children }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: 0.08,
      multiplier: 1,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    // Update on route change or resize if needed
    const resizeHandler = () => scroll.update();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      scroll.destroy();
    };
  }, []);

  return (
    <div id="scroll-container" data-scroll-container ref={containerRef}>
      {children}
    </div>
  );
}
