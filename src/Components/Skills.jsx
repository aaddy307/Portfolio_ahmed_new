"use client";

import { useEffect, useRef } from "react";

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.skill-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-fade-in-up');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Web Development',
      icon: 'fa-code',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      shadowColor: 'shadow-blue-500/50',
      skills: ['React.js', 'Node.js', 'Express.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      title: 'Databases',
      icon: 'fa-database',
      gradient: 'from-green-500 via-emerald-500 to-teal-600',
      shadowColor: 'shadow-green-500/50',
      skills: ['MongoDB', 'MySQL', 'API Integration']
    },
    {
      title: 'UI/UX Design',
      icon: 'fa-palette',
      gradient: 'from-pink-500 via-rose-500 to-red-500',
      shadowColor: 'shadow-pink-500/50',
      skills: ['Figma', 'WordPress', 'Responsive Design', 'User Research', 'Prototyping']
    },
    {
      title: 'Video Editing',
      icon: 'fa-video',
      gradient: 'from-purple-500 via-violet-500 to-indigo-600',
      shadowColor: 'shadow-purple-500/50',
      skills: ['Video Production', 'Creative Editing']
    },
    {
      title: 'Tools & More',
      icon: 'fa-tools',
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      shadowColor: 'shadow-orange-500/50',
      skills: ['Git & GitHub', 'VS Code', 'Responsive Design']
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
              top: `${[25, 65, 85][i]}%`,
              left: `${[15, 75, 40][i]}%`,
              animationDelay: `${i * 0.7}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-4 gradient-text leading-relaxed pb-3">
            Skills & Expertise
          </h2>
          <div className="section-divider"></div>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto mt-4">
            A comprehensive toolkit of technologies and skills I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="skill-card glass-card rounded-xl sm:rounded-2xl p-6 sm:p-7 lg:p-8 hover-lift opacity-0 group"
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-5 sm:mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shrink-0 shadow-lg ${category.shadowColor} icon-float`} style={{ animationDelay: `${index * 0.15}s` }}>
                <i className={`fas ${category.icon} text-2xl sm:text-3xl text-white`}></i>
              </div>
              
              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-display font-bold mb-4 sm:mb-5 group-hover:text-accent-primary transition-colors duration-300">
                {category.title}
              </h3>
              
              {/* Skills Count Badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs px-3 py-1 rounded-full bg-accent-primary/20 text-accent-primary border border-accent-primary/30 font-semibold">
                  {category.skills.length} Skills
                </span>
              </div>
              
              {/* Skills badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="skill-badge text-xs sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}