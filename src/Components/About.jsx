"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef(null);
  const profileRef = useRef(null);
  const bioRef = useRef(null);
  const journeyRef = useRef(null);
  const expertiseRef = useRef(null);

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

    if (profileRef.current) observer.observe(profileRef.current);
    if (bioRef.current) observer.observe(bioRef.current);
    if (journeyRef.current) observer.observe(journeyRef.current);
    if (expertiseRef.current) observer.observe(expertiseRef.current);

    return () => observer.disconnect();
  }, []);
  const stats = [
    { 
      icon: "fa-code", 
      number: "5+", 
      label: "Projects Completed",
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "shadow-blue-500/50"
    },
    { 
      icon: "fa-laptop-code", 
      number: "10+", 
      label: "Technologies",
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "shadow-purple-500/50"
    },
    { 
      icon: "fa-certificate", 
      number: "3+", 
      label: "Certifications",
      gradient: "from-orange-500 to-red-500",
      shadowColor: "shadow-orange-500/50"
    },
  ];

  const expertiseCategories = [
    {
      category: "Frontend Development",
      icon: "fa-laptop-code",
      gradient: "from-cyan-500 to-blue-600",
      skills: [
        { name: "React.js", percentage: 70, level: "Expert", icon: "fa-react", iconClass: "fab", gradient: "from-cyan-400 to-blue-500" },
        { name: "Next.js", percentage: 80, level: "Expert", icon: "fa-n", iconClass: "fas", gradient: "from-blue-400 to-indigo-500" },
        { name: "Tailwind CSS", percentage: 65, level: "Expert", icon: "fa-css3-alt", iconClass: "fab", gradient: "from-cyan-300 to-teal-500" },
        { name: "JavaScript", percentage: 60, level: "Expert", icon: "fa-js", iconClass: "fab", gradient: "from-yellow-400 to-orange-500" },
        { name: "HTML5 & CSS3", percentage: 80, level: "Expert", icon: "fa-html5", iconClass: "fab", gradient: "from-orange-400 to-red-500" },
      ]
    },
    {
      category: "Backend Development",
      icon: "fa-server",
      gradient: "from-green-500 to-emerald-600",
      skills: [
        { name: "Node.js", percentage: 70, level: "Expert", icon: "fa-node-js", iconClass: "fab", gradient: "from-green-400 to-emerald-600" },
        { name: "Express.js", percentage: 70, level: "Advanced", icon: "fa-code", iconClass: "fas", gradient: "from-emerald-400 to-teal-600" },
        { name: "MongoDB", percentage: 82, level: "Advanced", icon: "fa-database", iconClass: "fas", gradient: "from-green-500 to-lime-600" },
        { name: "MySQL", percentage: 78, level: "Advanced", icon: "fa-database", iconClass: "fas", gradient: "from-blue-500 to-cyan-600" },
      ]
    },
    {
      category: "UI/UX Design",
      icon: "fa-palette",
      gradient: "from-pink-500 to-rose-600",
      skills: [
        { name: "Figma", percentage: 90, level: "Expert", icon: "fa-figma", iconClass: "fab", gradient: "from-purple-400 to-pink-500" },
        { name: "UI/UX Design", percentage: 95, level: "Expert", icon: "fa-pen-nib", iconClass: "fas", gradient: "from-pink-400 to-rose-500" },
        { name: "WordPress", percentage: 100, level: "Advanced", icon: "fa-wordpress", iconClass: "fab", gradient: "from-blue-600 to-indigo-600" },
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: "fa-brain",
      gradient: "from-purple-500 to-indigo-600",
      skills: [
        { name: "Python", percentage: 45, level: "Advanced", icon: "fa-python", iconClass: "fab", gradient: "from-blue-500 to-yellow-500" },
        { name: "Deep Learning", percentage: 40, level: "Intermediate", icon: "fa-project-diagram", iconClass: "fas", gradient: "from-purple-500 to-indigo-600" },
        { name: "Data Science", percentage: 20, level: "Intermediate", icon: "fa-chart-line", iconClass: "fas", gradient: "from-indigo-500 to-purple-600" },
      ]
    },
    {
      category: "Tools & Others",
      icon: "fa-tools",
      gradient: "from-orange-500 to-amber-600",
      skills: [
        { name: "Git & GitHub", percentage: 75, level: "Expert", icon: "fa-github", iconClass: "fab", gradient: "from-gray-700 to-gray-900" },
        { name: "VS Code", percentage: 100, level: "Expert", icon: "fa-code", iconClass: "fas", gradient: "from-blue-500 to-blue-700" },
      ]
    },
  ];

  const getLevelColor = (level) => {
    switch(level) {
      case "Expert": return "text-green-500";
      case "Advanced": return "text-blue-500";
      case "Intermediate": return "text-yellow-500";
      case "Learner": return "text-orange-500";
      default: return "text-gray-500";
    }
  };

  const getLevelBadgeColor = (level) => {
    switch(level) {
      case "Expert": return "bg-green-500/20 text-green-500 border-green-500/30";
      case "Advanced": return "bg-blue-500/20 text-blue-500 border-blue-500/30";
      case "Intermediate": return "bg-yellow-500/20 text-yellow-500 border-yellow-500/30";
      case "Learner": return "bg-orange-500/20 text-orange-500 border-orange-500/30";
      default: return "bg-gray-500/20 text-gray-500 border-gray-500/30";
    }
  };

  const journey = [
    {
      icon: "fa-university",
      title: "Nexcore Institute of Technology",
      subtitle: "B.Voc AI & ML",
      period: "2025 - Present",
      status: "Current",
      color: "blue"
    },
    {
      icon: "fa-brain",
      title: "Universal AI University",
      subtitle: "Karjat",
      period: "2024 - 2025",
      status: "Alumni",
      color: "purple"
    },
    {
      icon: "fa-graduation-cap",
      title: "Maharashtra State Board",
      subtitle: "12th HSC - Science",
      period: "2023 - 2024",
      status: "Completed",
      color: "green"
    },
    {
      icon: "fa-briefcase",
      title: "Nexcore Alliance",
      subtitle: "Intern",
      period: "2025 - Present",
      status: "Present",
      color: "orange"
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 gradient-text leading-relaxed pb-3">
            My Story
          </h2>
          <div className="section-divider"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Profile Card - Full width on mobile, 1 column on desktop */}
          <div ref={profileRef} className="lg:col-span-1 order-1 opacity-0" style={{animationDelay: '0.1s'}}>
            <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 hover-lift h-full flex flex-col items-center justify-center">
              {/* Profile Image */}
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 mx-auto mb-3 sm:mb-4 shrink-0 rounded-full overflow-hidden bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer">
                <Image
                  src="/profile.jpeg"
                  alt="Profile Picture"
                  fill
                  priority
                  sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 144px"
                  className="object-cover"
                />
              </div>

              {/* Name & Title */}
              <div className="text-center mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-display font-bold mb-1 gradient-text">
                  Ahmed Khan
                </h3>
                <p className="text-text-secondary text-[10px] sm:text-xs lg:text-sm">
                  Full-Stack Developer & AI Enthusiast
                </p>
              </div>

              {/* Location */}
              <div className="flex items-center justify-center gap-1 sm:gap-2 mb-3 sm:mb-4 text-text-secondary">
                <i className="fas fa-map-marker-alt text-orange-500 text-xs sm:text-sm"></i>
                <span className="text-[10px] sm:text-xs lg:text-sm">Mumbai, India</span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 lg:gap-3 w-full max-w-xs">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-1.5 sm:p-2 lg:p-3 rounded-md sm:rounded-lg bg-white/5 border border-white/10 hover:border-accent-primary/50 transition-all"
                  >
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mx-auto mb-1 rounded-md sm:rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg ${stat.shadowColor}`}>
                      <i className={`fas ${stat.icon} text-white text-[10px] sm:text-xs lg:text-sm`}></i>
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg font-bold text-accent-primary mb-0.5">
                      {stat.number}
                    </p>
                    <p className="text-[8px] sm:text-[10px] lg:text-xs text-text-secondary leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Who I Am + My Journey */}
          <div className="lg:col-span-2 order-2 space-y-6 sm:space-y-8">
            {/* Bio Section - Who I Am */}
            <div ref={bioRef} className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 hover-lift opacity-0" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-lg shadow-orange-500/50 shrink-0">
                  <i className="fas fa-user text-white text-xs sm:text-sm lg:text-base"></i>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-display font-bold">
                  Who I Am
                </h3>
              </div>
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex items-start gap-2 text-[10px] sm:text-xs lg:text-sm text-text-secondary leading-relaxed">
                  <i className="fas fa-check-circle text-accent-primary mt-0.5 shrink-0 text-[10px] sm:text-xs"></i>
                  <span>
                    Passionate first-year <span className="text-accent-primary font-semibold">B.Voc AI & ML student</span> at Nexcore Institute of Technology
                  </span>
                </li>
                <li className="flex items-start gap-2 text-[10px] sm:text-xs lg:text-sm text-text-secondary leading-relaxed">
                  <i className="fas fa-check-circle text-accent-primary mt-0.5 shrink-0 text-[10px] sm:text-xs"></i>
                  <span>
                    Strong foundation in <span className="text-accent-primary font-semibold">full-stack web development</span> with modern technologies
                  </span>
                </li>
                <li className="flex items-start gap-2 text-[10px] sm:text-xs lg:text-sm text-text-secondary leading-relaxed">
                  <i className="fas fa-check-circle text-accent-primary mt-0.5 shrink-0 text-[10px] sm:text-xs"></i>
                  <span>
                    <span className="text-accent-primary font-semibold">Ex-student of Universal AI University, Karjat</span> with deep appreciation for artificial intelligence
                  </span>
                </li>
                <li className="flex items-start gap-2 text-[10px] sm:text-xs lg:text-sm text-text-secondary leading-relaxed">
                  <i className="fas fa-check-circle text-accent-primary mt-0.5 shrink-0 text-[10px] sm:text-xs"></i>
                  <span>
                    Actively seeking <span className="text-accent-primary font-semibold">internships, projects, and collaborations</span> to contribute skills and grow as a developer
                  </span>
                </li>
              </ul>
            </div>

            {/* Journey Timeline */}
            <div ref={journeyRef} className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 hover-lift opacity-0" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center shadow-lg shadow-green-500/50 shrink-0">
                  <i className="fas fa-route text-white text-xs sm:text-sm lg:text-base"></i>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-display font-bold">
                  My Journey
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {journey.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 lg:p-4 rounded-lg bg-white/5 border border-white/10 hover:border-accent-primary/50 transition-all group"
                  >
                    <div className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 flex items-center justify-center shadow-lg shadow-${item.color}-500/50 group-hover:scale-110 transition-transform shrink-0`}>
                      <i className={`fas ${item.icon} text-white text-xs sm:text-sm lg:text-base`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-[10px] sm:text-xs lg:text-sm mb-0.5 truncate">
                        {item.title}
                      </h4>
                      <p className="text-[9px] sm:text-[10px] lg:text-xs text-text-secondary mb-0.5 truncate">
                        {item.subtitle}
                      </p>
                      {item.period && (
                        <p className="text-[8px] sm:text-[9px] lg:text-[10px] text-text-secondary/70 flex items-center gap-1">
                          <i className="far fa-calendar-alt text-[7px] sm:text-[8px]"></i>
                          {item.period}
                        </p>
                      )}
                    </div>
                    <span className={`px-1.5 sm:px-2 lg:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[9px] lg:text-xs font-semibold bg-${item.color}-500/20 text-${item.color}-500 border border-${item.color}-500/30 shrink-0`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Section - Full width */}
        <div ref={expertiseRef} className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 hover-lift opacity-0" style={{animationDelay: '0.4s'}}>
          <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
            <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/50 shrink-0">
              <i className="fas fa-star text-white text-xs sm:text-sm lg:text-base"></i>
            </div>
            <h3 className="text-base sm:text-lg lg:text-xl font-display font-bold">
              My Expertise
            </h3>
          </div>

          {/* Categories Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {expertiseCategories.map((categoryData, catIndex) => (
              <div key={catIndex} className="glass-card rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 hover:border-accent-primary/30 transition-all duration-300">
                {/* Category Header */}
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-white/10">
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-lg bg-gradient-to-br ${categoryData.gradient} flex items-center justify-center shadow-lg shrink-0`}>
                    <i className={`fas ${categoryData.icon} text-white text-xs sm:text-sm lg:text-base`}></i>
                  </div>
                  <h4 className="text-sm sm:text-base lg:text-lg font-display font-bold text-text-primary">
                    {categoryData.category}
                  </h4>
                  <div className="ml-auto hidden sm:block">
                    <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-accent-primary/20 text-accent-primary border border-accent-primary/30">
                      {categoryData.skills.length} skills
                    </span>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-2.5 sm:space-y-3">
                  {categoryData.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="p-2.5 sm:p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-accent-primary/30 hover:shadow-lg hover:shadow-accent-primary/10 transition-all duration-300 group cursor-pointer"
                    >
                      {/* Skill Header */}
                      <div className="flex items-center gap-2 sm:gap-2.5 mb-2">
                        <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br ${skill.gradient} flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shrink-0`}>
                          <i className={`${skill.iconClass} ${skill.icon} text-white text-xs sm:text-sm group-hover:text-sm sm:group-hover:text-base transition-all duration-300`}></i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h5 className="font-semibold text-xs sm:text-sm text-text-primary truncate group-hover:text-accent-primary transition-colors duration-300">
                              {skill.name}
                            </h5>
                            <span className="text-xs sm:text-sm font-bold text-accent-primary shrink-0 group-hover:scale-110 transition-transform duration-300">
                              {skill.percentage}%
                            </span>
                          </div>
                          <span className={`inline-block text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded mt-0.5 ${getLevelBadgeColor(skill.level)} border font-medium`}>
                            {skill.level}
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full transition-all duration-700 group-hover:shadow-lg`}
                          style={{ width: `${skill.percentage}%`, transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
