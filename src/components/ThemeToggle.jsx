import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2 rounded-full bg-secondary-light dark:bg-secondary-dark"
    >
      {isDarkMode ? (
        <SunIcon className="w-5 h-5 text-accent-dark" />
      ) : (
        <MoonIcon className="w-5 h-5 text-accent-light" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;