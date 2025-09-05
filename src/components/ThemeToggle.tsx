import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, toggleTheme }) => {
  const handleToggle = () => {
    console.log('Theme toggle clicked, current mode:', darkMode);
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed top-20 right-4 z-40 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <Sun size={20} className="text-yellow-500" />
      ) : (
        <Moon size={20} className="text-blue-600" />
      )}
    </button>
  );
};

export default ThemeToggle;