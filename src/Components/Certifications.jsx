"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Helper function to get shadow color based on cert color
  const getShadowColor = (color) => {
    const colors = {
      green: '34, 197, 94',      // green-500
      blue: '59, 130, 246',       // blue-500
      purple: '168, 85, 247',     // purple-500
      cyan: '6, 182, 212',        // cyan-500
      orange: '249, 115, 22',     // orange-500
      indigo: '99, 102, 241',     // indigo-500
      pink: '236, 72, 153',       // pink-500
    };
    return colors[color] || '249, 115, 22'; // default to orange
  };

  const certifications = [
    {
      title: 'Understanding Prompt Engineering',
      issuer: 'DataCamp',
      date: 'Nov 07, 2024',
      duration: '1 Hour',
      color: 'green',
      icon: 'fa-brain',
      image: '/Promt.jpg',
      description: 'Successfully completed a comprehensive course on Prompt Engineering, learning techniques to effectively communicate with AI models and optimize their responses for various applications.'
    },
    {
      title: 'AI For All - AI Appreciate',
      issuer: 'Intel & Digital India',
      date: 'Jan 06, 2026',
      duration: '2 Hour',
      color: 'blue',
      icon: 'fa-award',
      image: '/intel.jpg',
      description: 'Participated in AI For All program by Intel and Digital India, completing the AI Appreciate stage. Gained foundational knowledge in artificial intelligence concepts and applications.'
    },
    {
      title: 'Climate Change: Carbon Capture and Storage',
      issuer: 'University of Edinburgh',
      date: 'Feb 27, 2025',
      duration: '2 Hour',
      color: 'purple',
      icon: 'fa-leaf',
      image: '/edX.jpg',
      description: 'Successfully completed and received a passing grade in CCSx: Climate Change: Carbon Capture and Storage course offered by EdinburghX, an online learning initiative of University of Edinburgh.'
    },
    {
      title: 'Professional Ethics Webinar',
      issuer: 'HCLTech Career Shaper',
      date: 'Sep-Nov 2024',
      duration: 'Webinar Series',
      color: 'cyan',
      icon: 'fa-users',
      image: '/HCL.jpg',
      description: 'Successfully participated in the webinar series on Professional Ethics conducted by HCLTech Career Shaper during September 2024 and November 2024, learning about workplace ethics and professional conduct.'
    },
    {
      title: 'Error Detection & Debugging Appreciation',
      issuer: 'Nexcore Alliance',
      date: 'Oct 05, 2025',
      duration: 'Testing Phase',
      color: 'orange',
      icon: 'fa-bug',
      image: '/Error.jpg',
      description: 'Received appreciation from Nexcore Alliance for proactive efforts in detecting and reporting multiple errors during User Panel and Admin Mobile Testing phase, identifying over ten critical and minor issues.'
    },
    {
      title: 'AI For All - AI Aware',
      issuer: 'Intel & Digital India',
      date: 'Jan 06, 2026',
      duration: '1 Hour',
      color: 'indigo',
      icon: 'fa-award',
      image: '/Intell.jpg',
      description: 'Participated in AI For All program by Intel and Digital India, completing the AI Aware stage. Demonstrated awareness and understanding of AI technologies and their real-world applications.'
    },
    {
      title: 'Yuva AI For ALL - English',
      issuer: 'AISECT LEARN (IndiaAI)',
      date: 'Jan 21, 2026',
      duration: '1 Hour',
      color: 'pink',
      icon: 'fa-certificate',
      image: '/India.jpg',
      description: 'Successfully completed Yuva AI For ALL English course offered by AISECT LEARN, a unit of AISECT LTD in collaboration with IndiaAI. Comprehensive AI education program for youth empowerment.'
    }
  ];

  return (
    <>
      <section id="certifications" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-transparent to-bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-14 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 gradient-text leading-relaxed pb-3">
              My Achievements
            </h2>
            <div className="section-divider"></div>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
              Professional certifications and recognitions showcasing continuous learning and expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                onClick={() => setSelectedCert(cert)}
                className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 hover-lift cursor-pointer group flex flex-col"
              >
                <div className="flex flex-col gap-4 flex-1">
                  {/* Icon and Badge */}
                  <div className="flex items-start justify-between">
                    <div 
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-${cert.color}-500 to-${cert.color}-600 flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform duration-500 icon-float`}
                      style={{
                        boxShadow: `0 10px 15px -3px rgba(${getShadowColor(cert.color)}, 0.4), 0 4px 6px -4px rgba(${getShadowColor(cert.color)}, 0.4)`
                      }}
                    >
                      <i className={`fas ${cert.icon} text-white text-lg sm:text-xl`}></i>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/20 text-orange-500 border border-orange-500/30">
                      Verified
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-display font-bold mb-2 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-purple-500 transition-all duration-300">
                      {cert.title}
                    </h3>
                    <p 
                      className="text-sm font-semibold mb-2"
                      style={{ color: `rgb(${getShadowColor(cert.color)})` }}
                    >
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-text-secondary mb-3">
                      <span className="flex items-center gap-1">
                        <i className="far fa-calendar-alt"></i>
                        {cert.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <i className="far fa-clock"></i>
                        {cert.duration}
                      </span>
                    </div>
                    <p className="text-text-secondary text-xs sm:text-sm line-clamp-2">
                      {cert.description}
                    </p>
                  </div>

                  {/* View Button - Always at bottom */}
                  <button className="w-full py-2 px-4 rounded-lg bg-orange-500/10 text-orange-500 border border-orange-500/30 text-sm font-medium hover:bg-orange-500/20 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105 mt-auto">
                    <span>View Certificate</span>
                    <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform duration-300"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-bg-secondary rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden mx-auto max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 flex items-center justify-center text-red-500 hover:scale-110 transition-all duration-300"
            >
              <i className="fas fa-times text-xs sm:text-sm"></i>
            </button>

            <div className="grid md:grid-cols-2 gap-3 sm:gap-6 p-3 sm:p-6 md:p-8">
              {/* Certificate Image */}
              <div className="relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden bg-white/5 border border-white/10">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain p-1 sm:p-4"
                />
              </div>

              {/* Certificate Details */}
              <div className="flex flex-col gap-2 sm:gap-4">
                <div>
                  <div className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1 sm:py-2 rounded-full bg-${selectedCert.color}-500/20 text-${selectedCert.color}-500 border border-${selectedCert.color}-500/30 mb-2 sm:mb-4`}>
                    <i className={`fas ${selectedCert.icon} text-[10px] sm:text-sm`}></i>
                    <span className="text-[10px] sm:text-sm font-semibold">Verified Certificate</span>
                  </div>
                  <h3 className="text-base sm:text-2xl md:text-3xl font-display font-bold mb-1 sm:mb-2 leading-tight">
                    {selectedCert.title}
                  </h3>
                  <p 
                    className="text-sm sm:text-lg font-semibold mb-2 sm:mb-4"
                    style={{ color: `rgb(${getShadowColor(selectedCert.color)})` }}
                  >
                    {selectedCert.issuer}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-4 text-[10px] sm:text-sm">
                  <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-lg bg-white/5 border border-white/10">
                    <i className="far fa-calendar-alt text-orange-500 text-[10px] sm:text-sm"></i>
                    <span className="text-text-secondary">{selectedCert.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-lg bg-white/5 border border-white/10">
                    <i className="far fa-clock text-purple-500 text-[10px] sm:text-sm"></i>
                    <span className="text-text-secondary">{selectedCert.duration}</span>
                  </div>
                </div>

                <div className="flex-1">
                  <h4 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">Description</h4>
                  <p className="text-text-secondary leading-relaxed text-xs sm:text-base">
                    {selectedCert.description}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-full py-2 sm:py-3 px-3 sm:px-6 rounded-lg bg-gradient-to-r from-orange-500 to-purple-500 text-white text-xs sm:text-base font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
