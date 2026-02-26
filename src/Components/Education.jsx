"use client";

import { useEffect, useRef } from "react";

export default function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.education-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-fade-in-up');
            }, index * 150);
          });
        }
      });
    }, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);
  // Helper function to get badge colors
  const getBadgeStyle = (color) => {
    const colors = {
      orange: { bg: 'bg-orange-500/20', text: 'text-orange-500', border: 'border-orange-500/30' },
      purple: { bg: 'bg-purple-500/20', text: 'text-purple-500', border: 'border-purple-500/30' },
      green: { bg: 'bg-green-500/20', text: 'text-green-500', border: 'border-green-500/30' },
    };
    return colors[color] || colors.orange;
  };

  // Helper function to get text color
  const getTextColor = (color) => {
    const colors = {
      orange: 'text-orange-500',
      purple: 'text-purple-500',
      green: 'text-green-500',
    };
    return colors[color] || 'text-orange-500';
  };

  const educationData = [
    {
      type: 'Current',
      color: 'orange',
      icon: 'fa-university',
      gradient: 'from-blue-500 via-indigo-500 to-purple-600',
      shadowColor: 'shadow-blue-500/50',
      institution: 'Nexcore Institute of Technology',
      degree: 'B.Voc in Artificial Intelligence & Machine Learning',
      status: 'First Year Student',
      description:
        'Pursuing a comprehensive program focused on artificial intelligence, machine learning, and their practical applications. Building expertise in programming, data structures, algorithms, and deep learning.',
    },
    {
      type: 'Alumni',
      color: 'purple',
      icon: 'fa-brain',
      gradient: 'from-purple-500 via-pink-500 to-rose-600',
      shadowColor: 'shadow-purple-500/50',
      institution: 'Universal AI University',
      degree: 'Karjat',
      period: '2024 - 2025',
      status: 'Ex-Student',
      description:
        'Gained foundational knowledge in artificial intelligence and its applications, which sparked my passion for pursuing advanced studies in AI and machine learning.',
    },
    {
      type: 'Completed',
      color: 'green',
      icon: 'fa-graduation-cap',
      gradient: 'from-green-500 via-emerald-500 to-teal-600',
      shadowColor: 'shadow-green-500/50',
      institution: 'Maharashtra State Board',
      degree: '12th HSC - Science Stream',
      period: '2023 - 2024',
      status: 'Completed',
      description:
        'Successfully completed Higher Secondary Certificate with Science stream, building a strong foundation in Physics, Chemistry, Mathematics, and Biology that paved the way for advanced studies in AI and technology.',
    },
  ];

  return (
    <section ref={sectionRef} id="education" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 grid-animation"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="floating-particle"
            style={{
              top: `${[20, 55, 80][i]}%`,
              left: `${[10, 65, 35][i]}%`,
              animationDelay: `${i * 0.8}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-4 gradient-text leading-relaxed pb-3">
            My Journey
          </h2>
          <div className="section-divider"></div>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto mt-4">
            The educational path that shaped my passion for technology and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card glass-card rounded-xl sm:rounded-2xl p-6 sm:p-7 hover-lift flex flex-col opacity-0 group">
              <div className="flex flex-col items-center text-center mb-4 sm:mb-5">
                <div
                  className={`w-16 h-16 sm:w-18 sm:h-18 rounded-xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center shrink-0 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg ${edu.shadowColor} mb-4 icon-float`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <i className={`fas ${edu.icon} text-2xl sm:text-3xl text-white`}></i>
                </div>
                <span
                  className={`inline-block px-3 sm:px-4 py-1.5 ${getBadgeStyle(edu.color).bg} ${getBadgeStyle(edu.color).text} border ${getBadgeStyle(edu.color).border} rounded-full text-xs sm:text-sm font-semibold`}
                >
                  {edu.type}
                </span>
              </div>
              
              <div className="text-center flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-display font-bold mb-2 leading-tight group-hover:text-accent-primary transition-colors duration-300">
                  {edu.institution}
                </h3>
                <p className={`text-sm sm:text-base ${getTextColor(edu.color)} mb-3 font-medium`}>
                  {edu.degree}
                </p>
                {edu.period && (
                  <p className="text-text-secondary text-xs sm:text-sm mb-2 flex items-center justify-center gap-2">
                    <i className="far fa-calendar-alt"></i>
                    {edu.period}
                  </p>
                )}
                <p className="text-text-secondary text-xs sm:text-sm mb-4">{edu.status}</p>
                
                {/* Description */}
                <div className="mt-auto pt-4 border-t border-white/10">
                  <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}