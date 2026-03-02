"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroller() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // 묵직하고 우아한 스크롤 속도
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple 특유의 Easing 곡선
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null; // UI 없이 스크롤 물리엔진만 담당합니다.
}