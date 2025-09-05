import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
    
    // Set loading to false after a short delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    // Update theme class on document
    console.log('Theme changed to:', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation darkMode={darkMode} />
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;