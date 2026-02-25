"use client";

import { useEffect, useState } from 'react';

export default function EntranceLoader({ onSkip }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="entrance-loader">
      <div className="loader-gradient"></div>
      
      <div className="loader-content">
        <h1 className="loader-greeting font-display">
          Hello, I'm Ahmed! 👋
        </h1>
        <p className="loader-subtitle">
          Welcome to my portfolio
        </p>
        
        <div className="loader-progress-wrapper">
          <div className="loader-progress-bar">
            <div 
              className="loader-progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="loader-progress-text">Loading...</div>
        </div>
      </div>
      
      <button className="skip-button" onClick={onSkip}>
        <i className="fas fa-forward mr-2"></i>Skip
      </button>
    </div>
  );
}
