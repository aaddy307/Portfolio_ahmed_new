"use client";

import Image from "next/image";

import { useState, useEffect } from "react";

import gsap from "gsap";

export default function Hero() {
  const roles = [
    { icon: "fa-code", color: "orange", label: "Web Developer" },
    { icon: "fa-palette", color: "purple", label: "UI/UX Designer" },
    { icon: "fa-brain", color: "orange", label: "AI & ML Enthusiast" },
  ];

  useEffect(() => {
    gsap.fromTo("#hii", {
      x: -200
    }, {
      x: 10,
      duration: 1.5,
      ease: "power2.out",
      stagger: 3
    });

    gsap.fromTo("#name", {
      x: -400
    }, {
      x: 10,
      duration: 1.5,
      ease: "power2.out",
      stagger: 2
    });

    gsap.fromTo("#rotation", {
      rotate: 0,
      opacity: 0,
      y: 0,
      x:0
    }, {
      opacity: 1,
      rotate: 180,
      y: 80,
      x:-40,
      duration: 1.2,
      ease: "power2.inOut",
      repeat:-1,
      scrollTrigger: {
        trigger: Hero,
        start: "top 10%",
        end: "top 80%",
        scrub: 1.2,
      },
    });

    gsap.fromTo("#logo", {
      scale: 0,
      opacity: 0,
      x: 10
    }, {
      scale: 1,
      opacity: 1,
      // x:10,
      duration: 1,
      ease: "power2.out",
      stagger: 1
    });

    gsap.fromTo("#roleicon", {
      x: -300
    }, {
      x: 10,
      duration: 1,
      ease: "power2.out",
      // stagger:1
    });

    gsap.fromTo("#rolename", {
      x: -400
    }, {
      x: 10,
      duration: 1,
      ease: "power2.out",
      // stagger:1
    },);

    gsap.fromTo("#right-content", {
      scale: 0
    }, {
      scale: 1,
      duration: 1.2,
      ease: "power2.out",
      stagger: 2
    },);

    gsap.fromTo("#photo", {
      scale: 0,
      opacity:0
    }, {
      scale: 1,
      duration: 1.2,
      ease: "power2.out",
      stagger: 2,
      opacity:1
    },);

    gsap.fromTo("#right-content-1", {
      scale: 0
    }, {
      scale: 1,
      duration: 1,
      ease: "power2.out",
      stagger: 2
    },);

    gsap.fromTo("#right-content-2", {
      scale: 0
    }, {
      scale: 1,
      duration: 1,
      ease: "power2.out",
      stagger: 2
    },);

  }, []);

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/ahmed-khan-222218338",
      icon: "fa-linkedin",
    },
    { href: "https://instagram.com/aaddy.ly", icon: "fa-instagram" },
    { href: "https://github.com/aaddy307", icon: "fa-github" },
  ];

  return (
    <section
      id="home"
      className="flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-[5em] md:pt-20 pb-20 sm:pb-16 md:pb-8 relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 grid-animation"></div>
      </div>

      {/* Floating Particles - Hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        {[0, 2, 1, 3, 1.5].map((delay, i) => (
          <div
            key={i}
            className="floating-particle"
            style={{
              top: `${[20, 60, 40, 70, 30][i]}%`,
              left: `${[10, 15, 80, 85, 50][i]}%`,
            }}
          ></div>
        ))}
      </div>

      {/* Geometric Shapes - Responsive positioning */}
      <div className="absolute bottom-20 sm:bottom-32 right-8 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 border-2 border-purple-500/20 rounded-lg rotate-45 animate-spin-slow" id="rotation"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-linear-to-br from-orange-500/10 to-transparent rounded-full blur-xl hidden lg:block animate-pulse"></div>

      {/* Orbiting Circles - Hidden on small screens */}
      <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-orange-500/40 rounded-full hidden lg:block animate-ping"></div>
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-purple-500/40 rounded-full hidden lg:block animate-ping" style={{ animationDelay: '0.5s' }}></div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-left order-2 lg:order-1">
            <div className="fade-in delay-100">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-2 leading-tight" id="hii">
                Hi, I'm
              </h1>
              <h1 id="name" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 sm:mb-8 leading-tight pb-2">
                <span className="gradient-text">Ahmed Khan</span>
              </h1>
            </div>

            <div className="fade-in delay-200 mb-6 sm:mb-8 space-y-2 sm:space-y-3">
              {roles.map((role, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 lg:gap-2 icon-bounce group"
                >
                  <div id="roleicon"
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-${role.color}-500/10 flex items-center justify-center shrink-0 border border-${role.color}-500/20 group-hover:bg-${role.color}-500/20 group-hover:scale-110 transition-all duration-300 icon-float`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <i
                      className={`fas ${role.icon} text-${role.color}-500 text-base sm:text-lg`}
                    ></i>
                  </div>
                  <div
                    className={`hidden sm:block lg:hidden w-12 sm:w-16 h-0.5 bg-linear-to-r from-${role.color}-500 to-transparent`}
                  ></div>
                  <p id="rolename" className="text-sm sm:text-lg md:text-xl text-text-primary font-medium">
                    {role.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mb-6 sm:mb-8">
              <p className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed max-w-xl">
                Ex-student of Universal AI University, Karjat. Now crafting
                intelligent web solutions at the intersection of design and
                technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 relative z-10">
              <a
                href="#projects"
                className="btn-primary inline-flex items-center justify-center text-sm sm:text-base py-2.5 px-5 mr-4 cursor-pointer"
              >
                <span>View My Work</span>
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </a>
              <a
                href="https://wa.me/919284299128?text=Hi%20Ahmed!%20I'd%20like%20to%20connect%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center justify-center text-sm sm:text-base py-2.5 px-5 mr-4 cursor-pointer"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                <span>WhatsApp Connect</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 relative z-10" id="logo" >
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500 group cursor-pointer relative z-10 icon-float"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <i
                    className={`fab ${link.icon} text-sm sm:text-base group-hover:scale-110 transition-transform pointer-events-none`}
                  ></i>
                </a>
              ))}
            </div>
          </div>

          {/* Right Visual Element */}
          <div className="order-1 lg:order-2">
            <div className="relative flex items-center justify-center lg:justify-end " >
              <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px] relative">
                {/* Rotating Rings */}
                <div className="absolute inset-0 border-2 border-orange-500/20 rounded-full"></div>
                <div className="absolute inset-4 sm:inset-6 border-2 border-purple-500/20 rounded-full"></div>
                <div className="absolute inset-8 sm:inset-10 border border-dashed border-orange-500/15 rounded-full"></div>
                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center" id="right-content">
                  <div className="relative">
                    {/* Glowing Background */}
                    <div className="absolute inset-0 bg-linear-to-br from-accent-primary/30 to-accent-secondary/30 rounded-full blur-3xl"></div>

                    {/* Avatar Circle */}
                    <div id="photo" className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 overflow-hidden rounded-full bg-linear-to-br from-accent-primary to-accent-secondary shadow-2xl hover:scale-105 transition-transform duration-500 cursor-pointer">
                      <Image
                        src="/profile.jpeg"
                        alt="Ahmed Khan"
                        width={300}
                        height={300}
                        priority
                        className="object-cover w-full h-full"
                        style={{ objectPosition: 'center' }}
                      />
                    </div>

                    {/* Floating Tech Icons */}
                    <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-6 md:-right-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl bg-bg-secondary/90 border border-orange-500/30 flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer backdrop-blur-sm animate-float">
                      <i className="fab fa-react text-lg sm:text-xl md:text-2xl text-orange-500"></i>
                    </div>
                    <div className="absolute bottom-24 -left-6 sm:-bottom-4 sm:-left-4 md:bottom-56 md:-left-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl bg-bg-secondary/90 border border-purple-500/30 flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer backdrop-blur-sm animate-float" style={{ animationDelay: '0.5s' }}>
                      <i className="fas fa-brain text-lg sm:text-xl md:text-2xl text-purple-500"></i>
                    </div>
                    <div className="absolute top-1/2 -right-3 sm:-right-4 md:-right-6 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg bg-bg-secondary/90 border border-orange-500/30 flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer backdrop-blur-sm animate-float" style={{ animationDelay: '1s' }}>
                      <i className="fas fa-code text-base sm:text-lg md:text-xl text-orange-500"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Cards - Responsive positioning - Hidden on mobile */}
              <div className="hidden md:block absolute -bottom-8 sm:-bottom-6 md:left-20 left-4 glass-card rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 md:px-2 md:py-4 hover:scale-105 transition-transform cursor-pointer animate-float" style={{ animationDelay: '0.3s' }}>
                <div id="right-content-1" className="flex items-center gap-2 sm:gap-3" >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/50 icon-float">
                    <i className="fas fa-graduation-cap text-sm sm:text-base md:text-lg text-white"></i>
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary">Student at</p>
                    <p className="font-semibold text-xs sm:text-sm md:text-base leading-tight">
                      Nexcore Institute
                      <br />
                      of technology
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden md:block absolute -bottom-24 sm:-bottom-20 md:-bottom-6 right-4 md:right-0 glass-card rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-4 hover:scale-105 transition-transform cursor-pointer animate-float" style={{ animationDelay: '0.7s' }}>
                <div id="right-content-2" className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-purple-500 via-purple-600 to-pink-600 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/50 icon-float-delay-1">
                    <i className="fas fa-briefcase text-sm sm:text-base md:text-lg text-white"></i>
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary">Intern at</p>
                    <p className="font-semibold text-xs sm:text-sm md:text-base">
                      Nexcore Alliance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}