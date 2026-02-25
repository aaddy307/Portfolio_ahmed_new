"use client";

export default function Skills() {
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
    <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-transparent to-bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 hover-lift"
            >
              {/* Icon Container - Responsive sizing */}
              <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 hover:rotate-12 transition-transform duration-500 shrink-0 shadow-lg ${category.shadowColor}`}>
                <i className={`fas ${category.icon} text-xl sm:text-2xl lg:text-3xl text-white`}></i>
              </div>
              
              {/* Title - Responsive sizing */}
              <h3 className="text-xl sm:text-2xl font-display font-bold mb-3 sm:mb-4">
                {category.title}
              </h3>
              
              {/* Skills badges - Responsive layout */}
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