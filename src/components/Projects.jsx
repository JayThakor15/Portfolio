import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ProjectCard = ({ project, isEven }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={cardRef} className="relative grid grid-cols-12 gap-4 items-center my-24">
      {/* Timeline dot and line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
        <div className="h-full w-[2px] bg-purple-500/20">
          <motion.div
            className="sticky top-1/2 w-4 h-4 rounded-full bg-purple-500 transform -translate-x-[7px]"
            style={{ y }}
          />
        </div>
      </div>

      {/* Content containers */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`col-span-12 md:col-span-5 ${isEven ? 'md:col-start-1' : 'md:col-start-7'}`}
      >
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
          <h3 className="text-xl font-bold text-purple-500 mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-purple-500/10 text-purple-400 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-400 hover:text-purple-300"
            >
              View Code →
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-400 hover:text-purple-300"
              >
                Live Demo →
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Laptop with project image */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`col-span-12 md:col-span-5 ${isEven ? 'md:col-start-7' : 'md:col-start-1'}`}
      >
        <div className="relative laptop-mockup">
          <div className="relative w-full aspect-[16/10] bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Laptop frame */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
          {/* Laptop stand */}
          <div className="h-4 bg-gray-700 mx-auto w-1/4 rounded-b-lg" />
          <div className="h-1 bg-gray-600 mx-auto w-1/3" />
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
       title: "AI Chat Bot",
      description: "An AI-powered chatbot built using React, GenAI (Gemini API), and Tailwind CSS. It provides intelligent and interactive responses, making it ideal for customer support and personal assistance.",
      technologies: ["React", "GenAI", "Gemini API", "Tailwind CSS"],
      image: "/Ai-ChatBot.png", // Replace with the correct path to the provided image
      github: "https://github.com/yourusername/ai-chatbot", // Update with your GitHub link
      demo: "https://demo-url.com" // Update with your live demo link
    },
    {
      title: "AI Interviewer",
      description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and an admin dashboard for analytics and order management.",
      technologies: ["Next.js", "Spring Boot", "PostgreSQL", "Stripe"],
      image: "/project2.png", // Add your project image
      github: "https://github.com/yourusername/project2",
      demo: "https://demo-url.com"
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text-light dark:text-text-dark mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-text-light/70 dark:text-text-dark/70">
            Some of my recent work that showcases my skills
          </p>
        </motion.div>

        {/* Projects Timeline */}
        <div className="relative">
          {projects.map((project, index) => (
            <div key={project.title}>
              <ProjectCard
                project={project}
                isEven={index % 2 === 0}
              />
              {index === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex justify-center my-8"
                >
                  <div className="bg-yellow-100/10 border border-yellow-400 text-yellow-300 px-6 py-4 rounded-lg text-center max-w-xl w-full shadow-lg">
                    <span className="font-semibold">Note:</span> This portfolio website is currently <span className="font-bold text-yellow-400">under development</span>. Some features and sections may not be complete yet.
                  </div>
                </motion.div>
              )}
            </div>
          ))}
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
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
};

export default Projects;