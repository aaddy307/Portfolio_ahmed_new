export default function Contact() {
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/ahmed-khan-222218338',
      icon: 'fa-linkedin',
      gradient: 'from-blue-600 via-blue-700 to-blue-800',
      shadowColor: 'shadow-blue-600/50',
      title: 'LinkedIn'
    },
    {
      href: 'https://instagram.com/aaddy.ly',
      icon: 'fa-instagram',
      gradient: 'from-purple-600 via-pink-600 to-orange-500',
      shadowColor: 'shadow-pink-600/50',
      title: 'Instagram'
    },
    {
      href: 'https://github.com/aaddy307',
      icon: 'fa-github',
      gradient: 'from-gray-700 via-gray-800 to-gray-900',
      shadowColor: 'shadow-gray-700/50',
      title: 'GitHub'
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 gradient-text leading-relaxed pb-3">
            Let's Connect
          </h2>
          <div className="section-divider"></div>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary">
            Let's collaborate and build something amazing together
          </p>
        </div>
        
        <div className="glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12">
          {/* Email Section */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-10 sm:mb-12">
            <a
              href="mailto:aaddy.ly143@gmail.com"
              className="flex items-center gap-3 sm:gap-4 p-5 sm:p-6 rounded-lg sm:rounded-xl bg-bg-secondary/50 hover:bg-bg-secondary transition-all hover-lift group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 shrink-0 shadow-lg shadow-orange-500/50 icon-float">
                <i className="fas fa-envelope text-xl sm:text-2xl text-white"></i>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm text-text-secondary mb-1">Email Me</p>
                <p className="font-semibold text-accent-primary text-sm sm:text-base truncate">
                  aaddy.ly143@gmail.com
                </p>
              </div>
            </a>
          </div>
          
          {/* Social Links Section */}
          <div className="text-center">
            <p className="text-text-secondary text-sm sm:text-base mb-5 sm:mb-6">
              Connect with me on social media
            </p>
            <div className="flex justify-center gap-4 sm:gap-5 lg:gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-icon w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center transition-transform hover:scale-110 shadow-lg ${link.shadowColor} icon-float`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                  title={link.title}
                >
                  <i className={`fab ${link.icon} text-xl sm:text-2xl text-white`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}