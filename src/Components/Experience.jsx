"use client";

import { useEffect, useRef } from "react";

export default function Experience() {
  const cardRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 grid-animation"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        {[0, 1].map((i) => (
          <div
            key={i}
            className="floating-particle"
            style={{
              top: `${[40, 70][i]}%`,
              left: `${[25, 80][i]}%`,
              animationDelay: `${i * 0.6}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-4 gradient-text leading-relaxed pb-3">
            Experience
          </h2>
          <div className="section-divider"></div>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto mt-4">
            Building real-world skills through hands-on professional experience
          </p>
        </div>
        
        <div className="relative pl-6 sm:pl-8 lg:pl-10">
          <div ref={cardRef} className="timeline-item relative glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 hover-lift opacity-0 group">
            {/* Icon Badge */}
            <div className="absolute -left-3 sm:-left-4 top-8 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 flex items-center justify-center shadow-lg shadow-orange-500/50 icon-float group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <i className="fas fa-briefcase text-white text-lg sm:text-xl"></i>
            </div>

            <div className="mb-5">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-500 rounded-full text-xs sm:text-sm font-semibold border border-orange-500/30 hover:bg-orange-500/30 transition-all">
                  <i className="far fa-calendar-alt text-xs"></i>
                  Aug 2025 – Present
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-500 rounded-full text-xs sm:text-sm font-semibold border border-green-500/30">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Active
                </span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold mb-2 group-hover:text-accent-primary transition-colors duration-300">
              Intern
            </h3>
            <p className="text-xl sm:text-2xl text-orange-500 mb-5 font-semibold flex items-center gap-2">
              <i className="fas fa-building text-lg"></i>
              Nexcore Alliance
            </p>

            <div className="space-y-3">
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Currently developing professional skills in web development, working on real-world projects, and gaining hands-on experience with modern technologies and industry best practices.
              </p>

              {/* Key Highlights */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                  <i className="fas fa-star text-accent-primary"></i>
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-text-secondary">
                    <i className="fas fa-check-circle text-accent-primary mt-0.5 shrink-0"></i>
                    <span>Hands-on experience with modern web technologies</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-text-secondary">
                    <i className="fas fa-check-circle text-accent-primary mt-0.5 shrink-0"></i>
                    <span>Contributing to real-world projects and solutions</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-text-secondary">
                    <i className="fas fa-check-circle text-accent-primary mt-0.5 shrink-0"></i>
                    <span>Learning industry best practices and workflows</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}