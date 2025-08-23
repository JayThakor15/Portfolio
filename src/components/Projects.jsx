import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="relative w-72 h-96 flex-shrink-0 rounded-lg overflow-hidden shadow-xl group"
      whileHover={{
        y: -8,
        transition: {
          type: "spring",
          stiffness: 300,
        },
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
        <h3 className="font-bold text-2xl tracking-wide mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full"
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
            Code →
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-400 hover:text-purple-300"
            >
              Demo →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const [dragConstraint, setDragConstraint] = useState(0);

  const projects = [
    {
      title: "AI Chat Bot",
      description:
        "An AI-powered chatbot built using React, GenAI (Gemini API), and Tailwind CSS.",
      technologies: ["React", "GenAI", "Gemini API", "Tailwind CSS"],
      image: "/Ai-ChatBot.png",
      github: "https://github.com/JayThakor15/Ai-Chatbot",
      demo: "https://lucia-aichatbot.netlify.app/",
    },
    {
      title: "AI Interviewer",
      description:
        "Developed an AI-powered interviewer that extracts resume skills and roles.",
      technologies: ["React.js", "Node.js", "LangChain", "Gemini API"],
      image: "/Aiinterviewer.png",
      github: "https://github.com/JayThakor15/Ai-interviewer-Frontend",
      demo: "https://famous-gumdrop-d6b441.netlify.app/",
    },
    {
      title: "SignetFlow",
      description:
        "Built a secure digital document signing platform with JWT-based access.",
      technologies: ["React", "Node.js", "PDF.js", "JWT", "Nodemailer"],
      image: "./SignetFlow.png",
      github: "https://github.com/JayThakor15/SignetFlow_Frontend",
      demo: "https://signetflow.netlify.app/",
    },
    {
      title: "Giglyy",
      description:
        "A platform for freelancers to find jobs and showcase their skills.",
      technologies: ["React", "Node.js", "MongoDB", "JWT", "Stripe", "Socket.io"],
      image: "./Gigly.png",
      github: "https://github.com/JayThakor15/Gigly_Frontend",
      demo: "https://giglyy.netlify.app/",
    },
    {
      title: "RideNow",
      description:
        "Developed a mobile-first Uber clone with real-time fare calculation.",
      technologies: ["React", "Node.js", "Google Maps API", "JWT"],
      image: "./RIdeNow.png",
      github: "https://github.com/JayThakor15/RideNow",
    },
    {
      title: "TalentThread",
      description:
        "Developed a LinkedIn clone for professionals.",
      technologies: ["React", "Node.js", "MongoDB", "JWT","Cloudinary"],
      image: "./TalentThread.png",
      github: "https://github.com/JayThakor15/ThinkThreadFrontend",
      demo: "https://thinkthread.netlify.app/",
    },
    {
      title: "GuessTheEmoji",
      description:
        "Interactive emoji guessing game with engaging UI and animations.",
      technologies: ["React", "CSS3", "JavaScript", "Framer Motion"],
      image: "./Guesstheemoji.png",
      github: "https://github.com/JayThakor15/GuessTheEmoji",
      demo: "https://guess-the-emojie.netlify.app/",
    },
    {
      title: "Calculator",
      description: "Built a calculator app with a clean and responsive UI.",
      technologies: ["HTML", "CSS3", "JavaScript", "Framer Motion"],
      image: "./Calculator.png",
      github: "https://github.com/JayThakor15/Calculator",
      demo: "https://calculatei-it.netlify.app/",
    },
  ];

  useEffect(() => {
    const calculateConstraints = () => {
      if (containerRef.current && trackRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const trackWidth = trackRef.current.scrollWidth;
        const constraint = Math.min(0, containerWidth - trackWidth);
        setDragConstraint(constraint);
      }
    };

    calculateConstraints();
    window.addEventListener("resize", calculateConstraints);
    return () => window.removeEventListener("resize", calculateConstraints);
  }, [projects]);

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
          <h2 className="text-4xl font-bold text-text-light dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-text-light/70 dark:text-white/70">
            Drag to explore my recent work that showcases my skills
          </p>
        </motion.div>

        {/* Projects Carousel */}
        <motion.div
          ref={containerRef}
          className="overflow-hidden cursor-grab"
          whileTap={{
            cursor: "grabbing",
          }}
        >
          <motion.div
            ref={trackRef}
            className="flex space-x-6 pb-6 px-4"
            drag="x"
            dragConstraints={{
              right: 0,
              left: dragConstraint - 32,
            }}
            dragElastic={0.15}
          >
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </motion.div>
        </motion.div>

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
