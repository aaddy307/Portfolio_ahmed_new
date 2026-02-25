"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device supports touch (mobile/tablet)
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Don't initialize cursor on mobile devices
    if (isMobile) return;

    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");

    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => window.removeEventListener("mousemove", move);
  }, [isMobile]);

  // Don't render cursor on mobile devices
  if (isMobile) return null;

  return (
    <>
      {/* Dot - Highest z-index to appear above everything */}
      <div className="cursor-dot fixed top-0 left-0 z-99999 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-accent-primary to-accent-secondary pointer-events-none mix-blend-difference" />

      {/* Ring - Just below dot */}
      <div className="cursor-ring fixed top-0 left-0 z-99998 h-8 w-8 rounded-full border-2 border-accent-primary pointer-events-none transition-transform duration-150 mix-blend-difference" style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }} />
    </>
  );
}