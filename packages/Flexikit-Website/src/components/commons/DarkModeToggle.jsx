import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

return (
    <button
        onClick={() => setDarkMode(!darkMode)}
        className=" mx-4 font-semibold p-2 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors text-gray-900 dark:text-gray-100 rounded-full focus:outline-none flex items-center"
    >
        {darkMode ? (
            <>
                <Sun />
            </>
        ) : (
            <>
                <Moon />
            </>
        )}
    </button>
);
};

export default DarkModeToggle;
