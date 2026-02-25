"use client";

import { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    // Fixed z-index to be below cursor (cursor is z-9999/9998, modal should be z-9997 or lower)
    <div 
      className="fixed inset-0 z-9990 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 overflow-y-auto" 
      onClick={handleBackdropClick}
    >
      {/* Scrollable container for mobile */}
      <div className="w-full min-h-full flex items-center justify-center py-8">
        <div className="modal-content p-5 sm:p-6 lg:p-8 max-w-3xl w-full my-auto relative bg-linear-to-br from-background-secondary/95 to-background-primary/95 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-md">
          {/* Header - Responsive */}
          <div className="flex justify-between items-start gap-4 mb-5 sm:mb-6">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold gradient-text flex-1 pr-2 wrap-break-words">
              {project.title}
            </h3>
            <button
              onClick={onClose}
              className="text-2xl sm:text-3xl hover:text-accent-primary transition-all hover:rotate-90 duration-300 shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full hover:bg-white/10"
              aria-label="Close modal"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div>
            {/* Description - Responsive text */}
            <p className="text-text-secondary text-sm sm:text-base lg:text-lg mb-5 sm:mb-6 lg:mb-8 leading-relaxed">
              {project.fullDescription}
            </p>
            
            {/* Technologies Section - Responsive */}
            <div className="mb-5 sm:mb-6 lg:mb-8">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-display font-bold mb-3 sm:mb-4 text-orange-500">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2.5 sm:px-3 lg:px-4 py-1 sm:py-1.5 bg-orange-500/20 text-orange-500 rounded-lg text-xs sm:text-sm lg:text-base hover:bg-orange-500/30 hover:scale-105 transition-all duration-200 cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Features Section - Responsive */}
            <div className="mb-5 sm:mb-6 lg:mb-8">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-display font-bold mb-3 sm:mb-4 text-orange-500">
                Key Features
              </h4>
              <ul className="space-y-2 sm:space-y-2.5 lg:space-y-3">
                {project.features.map((feature, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-2 sm:gap-3 text-text-secondary hover:text-text-primary transition-colors text-sm sm:text-base lg:text-lg group"
                  >
                    <i className="fas fa-check-circle text-orange-500 mt-0.5 sm:mt-1 shrink-0 group-hover:scale-110 transition-transform"></i>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Action Buttons - Responsive layout */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-5 sm:pt-6 lg:pt-8 border-t border-white/10">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-outline text-sm sm:text-base py-2.5 sm:py-3 px-5 sm:px-6 flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                >
                  <i className="fab fa-github"></i>
                  <span>View Code</span>
                </a>
              )}
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary text-sm sm:text-base py-2.5 sm:py-3 px-5 sm:px-6 flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                >
                  <i className="fas fa-external-link-alt"></i>
                  <span>Live Demo</span>
                </a>
              )}
              {project.figma && (
                <a 
                  href={project.figma} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary text-sm sm:text-base py-2.5 sm:py-3 px-5 sm:px-6 flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                >
                  <i className="fab fa-figma"></i>
                  <span>View Design</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}