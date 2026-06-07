import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="py-20 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-text-light dark:text-white">
          Education
        </h2>
      </motion.div>

      <motion.div
        className="relative w-full max-w-2xl h-80 flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl group border border-white/10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -10 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{
            backgroundImage:
              "url('vishwakarma-government-engineering-college-vgec-ahmedabad.png')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end h-full p-8 text-white">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-blue-500/30 border border-blue-400/30 rounded-full backdrop-blur-md">
              University Education
            </span>
            <h3 className="text-3xl font-bold mb-2 tracking-tight group-hover:text-blue-400 transition-colors">
              Vishwakarma Government Engineering College
            </h3>
            <p className="text-lg text-blue-200 font-medium mb-1">
              Bachelor in Computer Engineering
            </p>
            <div className="flex items-center text-gray-300 space-x-4">
              <span className="flex items-center bg-white/10 px-3 py-1 rounded-lg backdrop-blur-sm">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                2023 - 2026
              </span>
              <span className="flex items-center bg-white/10 px-3 py-1 rounded-lg backdrop-blur-sm">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Ahmedabad, Gujarat
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
