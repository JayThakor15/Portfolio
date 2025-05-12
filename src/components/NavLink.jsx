import { motion } from 'framer-motion';

const NavLink = ({ href, children, isActive }) => {
  return (
    <motion.a
      href={href}
      className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200
        ${isActive 
          ? 'text-accent-light dark:text-accent-dark' 
          : 'text-text-light dark:text-text-dark hover:text-accent-light dark:hover:text-accent-dark'
        }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      {isActive && (
        <motion.span
          layoutId="underline"
          className="absolute left-0 top-full block h-[2px] w-full bg-accent-light dark:bg-accent-dark"
        />
      )}
    </motion.a>
  );
};

export default NavLink;