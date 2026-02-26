export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { href: 'https://www.linkedin.com/in/ahmed-khan-222218338', icon: 'fa-linkedin', label: 'LinkedIn' },
    { href: 'https://instagram.com/aaddy.ly', icon: 'fa-instagram', label: 'Instagram' },
    { href: 'https://github.com/aaddy307', icon: 'fa-github', label: 'GitHub' }
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <footer className="relative py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 grid-animation"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-display font-bold gradient-text mb-3">
              Ahmed Khan
            </h3>
            <p className="text-text-secondary text-sm sm:text-base mb-4">
              Full-Stack Developer & AI Enthusiast crafting innovative digital experiences
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500 transition-all duration-300 group"
                  aria-label={link.label}
                >
                  <i className={`fab ${link.icon} text-base group-hover:scale-110 transition-transform`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-accent-primary transition-colors duration-300 text-sm sm:text-base inline-flex items-center gap-2 group"
                  >
                    <i className="fas fa-chevron-right text-xs group-hover:translate-x-1 transition-transform"></i>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-text-primary">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:aaddy.ly143@gmail.com"
                className="text-text-secondary hover:text-accent-primary transition-colors duration-300 text-sm sm:text-base flex items-center gap-2 justify-center md:justify-end group"
              >
                <i className="fas fa-envelope group-hover:scale-110 transition-transform"></i>
                aaddy.ly143@gmail.com
              </a>
              <a
                href="https://wa.me/919284299128"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-primary transition-colors duration-300 text-sm sm:text-base flex items-center gap-2 justify-center md:justify-end group"
              >
                <i className="fab fa-whatsapp group-hover:scale-110 transition-transform"></i>
                +91 9284299128
              </a>
              <p className="text-text-secondary text-sm sm:text-base flex items-center gap-2 justify-center md:justify-end">
                <i className="fas fa-map-marker-alt"></i>
                Mumbai, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-text-secondary text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} Ahmed Khan. All rights reserved.
            </p>
            <p className="text-text-secondary text-xs sm:text-sm text-center sm:text-right">
              Designed & Developed with{' '}
              <span className="text-accent-primary inline-block animate-pulse">❤</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}