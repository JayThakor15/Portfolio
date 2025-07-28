import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "./ThemeToggle";

const HomeIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const UserIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const FolderIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
  </svg>
);

const WorkExperienceIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);
const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: {
    width: "auto",
    opacity: 1,
    transition: { delay: 0.05, duration: 0.2, ease: "easeOut" },
  },
  exit: {
    width: 0,
    opacity: 0,
    transition: { duration: 0.1, ease: "easeIn" },
  },
};

const ExpandedTabs = ({ tabs, className, onChange }) => {
  const [selected, setSelected] = useState(0);
  const containerRef = useRef(null);

  const handleSelect = (index) => {
    setSelected(index);
    if (onChange) onChange(index);

    // Scroll to section
    const tab = tabs[index];
    if (tab.href) {
      const element = document.querySelector(tab.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`flex items-center gap-1 rounded-full border border-slate-200 bg-white/70 dark:bg-black dark:border-slate-700 p-1 shadow-md backdrop-blur-sm ${
        className || ""
      }`}
    >
      {tabs.map((tab, index) => {
        const Icon = tab.icon;
        const isSelected = selected === index;

        return (
          <button
            key={tab.title}
            onClick={() => handleSelect(index)}
            className={`relative z-10 flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none 
              ${
                isSelected
                  ? "text-slate-900 dark:text-green-300"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100"
              }`}
          >
            {isSelected && (
              <motion.div
                layoutId="pill"
                className="absolute inset-0 z-0 rounded-full bg-white dark:bg-green-500/20 backdrop-blur-sm border border-green-400/30 shadow-sm"
                transition={{ type: "spring", stiffness: 500, damping: 40 }}
              />
            )}

            <span className="relative z-10 flex items-center gap-2">
              <Icon className="h-5 w-5 flex-shrink-0" />
              <AnimatePresence initial={false}>
                {isSelected && (
                  <motion.span
                    variants={spanVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="overflow-hidden whitespace-nowrap"
                  >
                    {tab.title}
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </button>
        );
      })}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { href: "#home", label: "Home", icon: HomeIcon },
    { href: "#contact", label: "About", icon: UserIcon },
    { href: "#projects", label: "Projects", icon: FolderIcon },
    { href: "#experince", label: "Contact", icon: WorkExperienceIcon },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-transparent backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-2xl font-fira font-bold text-accent-light dark:text-white"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex md:items-center md:justify-center flex-1">
            <ExpandedTabs tabs={navItems} />
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <ThemeToggle />
            <motion.a
              href="https://drive.google.com/file/d/10ObisORNbJ-nGyFQQ9QZjLhlapoG6tWL/view?usp=sharing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-colors duration-200"
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-light dark:text-text-dark"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col space-y-4 pb-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-2 text-lg text-text-light dark:text-white hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </a>
                ))}
                <motion.a
                  href="https://drive.google.com/file/d/13hcHhtso8EOFzLjgGAcX5r8ltj6z27CF/view?usp=sharing"
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium text-center transition-colors duration-200"
                >
                  Resume
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
