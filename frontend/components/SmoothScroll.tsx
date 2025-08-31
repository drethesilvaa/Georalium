"use client";

import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { LocoProvider, LocoType } from "@/providers/LocoProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = { children: React.ReactNode };

export default function SmoothScroll({ children }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [loco, setLoco] = useState<LocoType>(null);

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

    setLoco(scroll);

    const resizeHandler = () => scroll.update();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      scroll.destroy();
      setLoco(null);
    };
  }, []);

  return (
    <LocoProvider value={loco}>
      <Navbar />
      <div id="scroll-container" data-scroll-container ref={containerRef}>
        {children}
        <Footer />
      </div>
    </LocoProvider>
  );
}
