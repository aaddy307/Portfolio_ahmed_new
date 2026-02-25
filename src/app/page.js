"use client";


import { useState, useEffect } from 'react';
import EntranceLoader from '@/Components/EntranceLoader';
import CustomCursor from '@/Components/CustomCursor';
import Navbar from '@/Components/Navbar';
import Hero from '@/Components/Hero';
import About from '@/Components/About';
import Projects from '@/Components/Projects';
import Education from '@/Components/Education';
import Certifications from '@/Components/Certifications';
import Contact from '@/Components/Contact';
import Footer from '@/Components/Footer';
import BackgroundElements from '@/Components/BackgroundElements';

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Auto hide loader after 2.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleSkipLoader = () => {
    setLoading(false);
  };

  return (
    <>
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      <BackgroundElements />
      <Navbar />

      <main className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-800'}>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
