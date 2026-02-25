export default function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-transparent to-bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 gradient-text">
            Experience
          </h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="relative pl-4 sm:pl-6 lg:pl-8">
          <div className="timeline-item relative glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 hover-lift">
            <div className="mb-4">
              <span className="inline-block px-3 sm:px-4 py-1 bg-orange-500/20 text-orange-500 rounded-full text-xs sm:text-sm font-semibold mb-4 hover:bg-orange-500/30 transition-all">
                Aug 2025 – Present
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold mb-2">Intern</h3>
            <p className="text-lg sm:text-xl text-orange-500 mb-4">Nexcore Alliance</p>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Currently developing professional skills in web development, working on real-world projects, and gaining hands-on experience with modern technologies and industry best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}