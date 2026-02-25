export default function Education() {
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
    <section id="education" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 gradient-text leading-relaxed pb-3">My Journey</h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {educationData.map((edu, index) => (
            <div key={index} className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 hover-lift flex flex-col">
              <div className="flex flex-col items-center text-center mb-3 sm:mb-4">
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center shrink-0 hover:rotate-12 transition-transform duration-500 shadow-lg ${edu.shadowColor} mb-3 sm:mb-4`}
                >
                  <i className={`fas ${edu.icon} text-xl sm:text-2xl text-white`}></i>
                </div>
                <span
                  className={`inline-block px-2.5 sm:px-3 py-1 bg-${edu.color}-500/20 text-${edu.color}-500 rounded-full text-xs font-semibold mb-2 sm:mb-3`}
                >
                  {edu.type}
                </span>
              </div>
              
              <div className="text-center flex-1">
                <h3 className="text-lg sm:text-xl font-display font-bold mb-2 leading-tight">{edu.institution}</h3>
                <p className={`text-sm sm:text-base text-${edu.color}-500 mb-2 sm:mb-3 font-medium`}>{edu.degree}</p>
                {edu.period && (
                  <p className="text-text-secondary text-xs sm:text-sm mb-2 flex items-center justify-center gap-2">
                    <i className="far fa-calendar-alt text-[10px] sm:text-xs"></i>
                    {edu.period}
                  </p>
                )}
                <p className="text-text-secondary text-xs sm:text-sm">{edu.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}