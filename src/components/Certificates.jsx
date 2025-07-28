"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const SparklesIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9.93 2.25 12 7.5l2.07-5.25a.5.5 0 0 1 .9 0L17.25 8.5l4.16.34a.5.5 0 0 1 .29.88l-3.2 3.1.95 4.5a.5.5 0 0 1-.73.53L12 14.5l-3.72 2.33a.5.5 0 0 1-.73-.53l.95-4.5-3.2-3.1a.5.5 0 0 1 .29-.88l4.16-.34Z" />
  </svg>
);

const ChevronLeftIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const Badge = ({ children, className }) => (
  <div className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium ${className}`}>
    {children}
  </div>
);

const certificatesData = [
  {
    id: 1,
    imageUrl: "./Certificates/PhaseOneTech.png",
    title: "Phase 1 of TechVarsity",
    issuer: "Coding Ninjas",
    date: "August 2024"
  },
  {
    id: 2,
    imageUrl: "./Certificates/DSA.png",
    title: "Data Structures and Algorithms",
    issuer: "Coding Ninjas",
    date: "Feb 2025"
  },
  {
    id: 3,
    imageUrl: "./Certificates/Frontend.png",
    title: "Frontend Web Development",
    issuer: "Coding Ninjas",
    date: "May 2025"
  },
  {
    id: 4,
    imageUrl: "./Certificates/GenAi.png",
    title: "Generative AI Specialization",
    issuer: "Coding Ninjas",
    date: "March 2025"
  },
  {
    id: 5,
    imageUrl: "./Certificates/GoogleSpread.png",
    title: "Google Spreadsheet Specialization",
    issuer: "Coding Ninjas",
    date: "March 2025"
  },
  {
    id: 6,
    imageUrl: "./Certificates/Hackathon.png",
    title: "Smart India Hackathon 2024",
    issuer: "Smart India Hackathon 2024",
    date: "September 2025"
  },
  {
    id: 6,
    imageUrl: "./Certificates/Java.png",
    title: "Java Specialization",
    issuer: "Coding Ninjas",
    date: "December 2025"
  },

];

function Card({ card, index, activeIndex, totalCards }) {
  let offset = index - activeIndex;
  if (offset > totalCards / 2) {
    offset -= totalCards;
  } else if (offset < -totalCards / 2) {
    offset += totalCards;
  }

  const isVisible = Math.abs(offset) <= 1;

  const animate = {
    x: `${offset * 50}%`,
    scale: offset === 0 ? 1 : 0.8,
    zIndex: totalCards - Math.abs(offset),
    opacity: isVisible ? 1 : 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 30
    }
  };

  return (
    <motion.div
      className="absolute w-2/3 md:w-1/2 h-[95%]"
      style={{ transformStyle: "preserve-3d" }}
      animate={animate}
      initial={false}
    >
      <div className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden bg-gray-200 dark:bg-neutral-800">
        <img
          src={card.imageUrl}
          alt={card.title}
          className="w-full h-full object-cover pointer-events-none"
          onError={(e) => {
            const target = e.target;
            target.onerror = null;
            target.src = "https://placehold.co/600x400/1e1e1e/ffffff?text=Certificate";
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h4 className="text-white text-lg font-semibold mb-1">{card.title}</h4>
          <p className="text-gray-300 text-sm">{card.issuer} • {card.date}</p>
        </div>
      </div>
    </motion.div>
  );
}

const Certificates = () => {
  const [activeIndex, setActiveIndex] = useState(Math.floor(certificatesData.length / 2));
  const [isPaused, setIsPaused] = useState(false);
  const autoplayIntervalRef = useRef(null);
  const autoplayDelay = 3000;

  const goToNext = () => {
    setActiveIndex(prev => (prev + 1) % certificatesData.length);
  };

  useEffect(() => {
    if (!isPaused) {
      autoplayIntervalRef.current = setInterval(goToNext, autoplayDelay);
    }
    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [isPaused, activeIndex]);

  const changeSlide = (newIndex) => {
    const newSafeIndex = (newIndex + certificatesData.length) % certificatesData.length;
    setActiveIndex(newSafeIndex);
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }
    if (!isPaused) {
      autoplayIntervalRef.current = setInterval(goToNext, autoplayDelay);
    }
  };

  const onDragEnd = (event, info) => {
    const dragThreshold = 75;
    const dragOffset = info.offset.x;
    if (dragOffset > dragThreshold) {
      changeSlide(activeIndex - 1);
    } else if (dragOffset < -dragThreshold) {
      changeSlide(activeIndex + 1);
    }
  };

  return (
    <section id="certificates" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text-light dark:text-white mb-4">
            Achievements and Certifications
          </h2>
          <p className="text-lg text-text-light/70 dark:text-white/70">
            Professional certifications and achievements that validate my expertise
          </p>
        </motion.div>

        {/* Carousel */}
        <div 
          className="w-full max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative flex w-full flex-col rounded-3xl border border-white/10 dark:border-white/10 bg-white/5 dark:bg-neutral-900/50 backdrop-blur-sm p-4 pt-6 md:p-6">
            <Badge className="absolute left-4 top-6 rounded-xl border border-gray-300 dark:border-white/10 text-base text-gray-700 dark:text-white/80 bg-gray-100/80 dark:bg-black/20 backdrop-blur-sm md:left-6">
              <SparklesIcon className="fill-[#EEBDE0] stroke-1 text-neutral-800 h-5 w-5 mr-1" />
              Certifications
            </Badge>

            <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden pt-12">
              <motion.div
                className="w-full h-full flex items-center justify-center"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={onDragEnd}
              >
                {certificatesData.map((card, index) => (
                  <Card
                    key={card.id}
                    card={card}
                    index={index}
                    activeIndex={activeIndex}
                    totalCards={certificatesData.length}
                  />
                ))}
              </motion.div>
            </div>

            <div className="flex items-center justify-center gap-6 mt-6">
              <button
                onClick={() => changeSlide(activeIndex - 1)}
                className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-300 dark:border-white/10 text-gray-700 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>

              <div className="flex items-center justify-center gap-2">
                {certificatesData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => changeSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                      activeIndex === index
                        ? "w-6 bg-purple-400"
                        : "w-2 bg-gray-300 dark:bg-neutral-600 hover:bg-gray-400 dark:hover:bg-neutral-500"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => changeSlide(activeIndex + 1)}
                className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-300 dark:border-white/10 text-gray-700 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
};

export default Certificates;
