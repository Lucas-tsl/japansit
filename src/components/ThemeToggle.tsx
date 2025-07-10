'use client';

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function ThemeToggle() {
  const toggleTheme = () => {
    // Logique simplifiée pour l'instant
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200 hover-lift"
      aria-label="Changer de thème"
    >
      <div className="dark:hidden">
        <MoonIcon className="h-5 w-5 text-gray-600 animate-pulse-gentle" />
      </div>
      <div className="hidden dark:block">
        <SunIcon className="h-5 w-5 text-yellow-500 animate-gentle-rotate" />
      </div>
    </button>
  );
}
