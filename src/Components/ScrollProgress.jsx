"use client";

import { useState, useEffect } from 'react';

const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

function ScrollProgressBar({ targetId, onlyWhenInView = false }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(!onlyWhenInView);

  useEffect(() => {
    const handleScroll = () => {
      // Default: page scroll progress
      if (!targetId) {
        const scrollHeight =
          document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
        setProgress(clamp(scrolled, 0, 100));
        setVisible(true);
        return;
      }

      // Target: section scroll progress (0 when section enters viewport, 100 when it leaves)
      const el = document.getElementById(targetId);
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || 1;

      // Absolute positions in document coordinates
      const sectionTop = window.scrollY + rect.top;
      const sectionBottom = sectionTop + rect.height;

      // Show only while section intersects viewport (if enabled)
      const inView = window.scrollY + viewportH > sectionTop && window.scrollY < sectionBottom;
      setVisible(onlyWhenInView ? inView : true);

      const start = sectionTop - viewportH; // when section first touches viewport bottom
      const end = sectionBottom; // when section fully passes viewport top
      const denom = end - start || 1;
      const scrolled = ((window.scrollY - start) / denom) * 100;
      setProgress(clamp(scrolled, 0, 100));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [targetId, onlyWhenInView]);

  return (
    <div
      className="scroll-progress"
      style={{
        width: `${progress}%`,
        opacity: visible ? 1 : 0,
        transition: 'opacity 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94), width 100ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    ></div>
  );
}



export default ScrollProgressBar;
