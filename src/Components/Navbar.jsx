"use client";

import { useState, useEffect } from 'react';
import gsap from 'gsap';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    gsap.fromTo("#contac", {
      scale:0.2,
      opacity:0,
    },{
      opacity:1,
      scale:1,
      duration:1,
      yoyo:true,
      stagger:1
    },);

    gsap.fromTo("#navsec", {
      scale:0.2,
      opacity:0,
    },{
      opacity:1,
      scale:1,
      duration:1,
      yoyo:true,
      stagger:1
    },);

    gsap.fromTo("#logo", {
      scale:0.2,
      opacity:0,
      
    },{
      opacity:1,
      scale:1,
      duration:1,
      yoyo:true,
      stagger:1
    },);

    gsap.fromTo("#logo", {
      scale:0.2,
      opacity:0,
      
    },{
      opacity:1,
      scale:1,
      duration:1,
      yoyo:true,
      stagger:1
    },);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Intro', icon: 'fa-home' },
    { href: '#about', label: 'Story', icon: 'fa-user' },
    { href: '#projects', label: 'Portfolio', icon: 'fa-briefcase' },
    { href: '#education', label: 'Journey', icon: 'fa-graduation-cap' },
    { href: '#certifications', label: 'Achievements', icon: 'fa-certificate' },
    { href: '#contact', label: 'Connect', icon: 'fa-envelope' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-bg-primary/80 backdrop-blur-xl shadow-lg shadow-orange-500/5 border-b border-white/5' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id='navbar'>
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a 
              href="#home" 
              className="relative group"
              onClick={(e) => handleNavClick(e, '#home')}
              id='logo'
            >
              <div className="relative px-4 py-2 bg-bg-primary rounded-xl border border-white/10 group-hover:border-orange-500/50 transition-all duration-300">
                <span className="text-xl sm:text-2xl font-display font-bold gradient-text">
                  Ahmed khan
                </span>
              </div>
            </a>
            
            {/* Desktop Navigation with unique pill design */}
            <div className="hidden lg:flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-full px-2 py-2 border border-white/10" id='navsec'>
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${
                    activeSection === link.href.substring(1)
                      ? 'text-white'
                      : 'text-text-secondary hover:text-white'
                  }`}
                >
                  {/* Active background with gradient */}
                  {activeSection === link.href.substring(1) && (
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full"></span>
                  )}
                  
                  {/* Hover effect */}
                  <span className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  
                  {/* Content */}
                  <span className="relative flex items-center gap-2">
                    <i className={`fas ${link.icon} text-xs`}></i>
                    {link.label}
                  </span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              id='contac'
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full text-white font-semibold text-sm hover:shadow-lg hover:shadow-orange-500/50 scale-0.5 hover:scale-105 transition-all duration-300"
            >
              <span>Let's Talk</span>
              <i className="fas fa-arrow-right text-xs"></i>
            </a>
            
            {/* Mobile Menu Button with animation */}
            <button
              className="lg:hidden relative w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-orange-500/50 transition-all duration-300 group"
              onClick={() => setMobileMenuOpen(true)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <i className="fas fa-bars text-lg relative z-10"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu with slide animation */}
      <div className={`fixed top-0 right-0 w-80 max-w-[85vw] h-full bg-bg-secondary/95 backdrop-blur-xl z-50 lg:hidden shadow-2xl border-l border-white/10 transition-transform duration-500 ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header with close button - Fixed */}
          <div className="flex-shrink-0 p-4 sm:p-6 border-b border-white/10">
            <button
              className="ml-auto w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="fas fa-times text-lg"></i>
            </button>
          </div>

          {/* Scrollable content area */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 sm:px-6">
            <div className="py-4">
              {/* Mobile nav links */}
              <div className="flex flex-col gap-2 mb-6">
                {navLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 ${
                      activeSection === link.href.substring(1)
                        ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg shadow-orange-500/30'
                        : 'bg-white/5 text-text-secondary hover:bg-white/10 hover:text-white border border-white/10 hover:border-orange-500/50'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      activeSection === link.href.substring(1)
                        ? 'bg-white/20'
                        : 'bg-white/5'
                    }`}>
                      <i className={`fas ${link.icon}`}></i>
                    </div>
                    <span className="font-medium">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer with CTA - Fixed */}
          <div className="flex-shrink-0 p-4 sm:p-6 border-t border-white/10">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-purple-500 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
            >
              <span>Let's Talk</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}