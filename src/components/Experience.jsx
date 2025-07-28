import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div
      className="relative w-80 h-96 flex-shrink-0 rounded-lg overflow-hidden shadow-xl group bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/20"
      whileHover={{
        y: -8,
        transition: {
          type: "spring",
          stiffness: 300,
        },
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="relative z-10 flex flex-col justify-between h-full p-6 text-white">
        <div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold text-xl tracking-wide">
              {experience.company}
            </h3>
            <span className="text-xs bg-purple-500/30 px-2 py-1 rounded-full">
              {experience.type}
            </span>
          </div>
          <h4 className="text-purple-300 font-semibold mb-2">
            {experience.role}
          </h4>
          <p className="text-sm text-gray-400 mb-4">{experience.duration}</p>
          <p className="text-xs text-gray-300 mb-4">{experience.location}</p>
        </div>

        <div>
          <ul className="text-sm text-gray-300 space-y-2 mb-4">
            {experience.highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span className="line-clamp-2">{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const [dragConstraint, setDragConstraint] = useState(0);

  const experiences = [
    {
      company: "Labmentix Pvt Limited",
      role: "Full Stack Web Developer Intern",
      duration: "June 2025 – Present",
      location: "Remote",
      type: "Internship",
      highlights: [
        "Led development of SignetFlow, a real-world document signing web app",
        "Engineered secure PDF uploads, interactive signature placement, detailed audit trails, and email-based delivery",
        "Built scalable full-stack solutions with React.js, Node.js, Express.js, and MongoDB Atlas",
        "Integrated Nodemailer for automated PDF delivery, improving client workflows",
        "Deployed production-ready apps on Netlify (frontend) and Render (backend)",
        "Currently developing a Freelance Clone Website with advanced features for user authentication, project listings, bidding system, and secure payments",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Netlify",
        "Render",
        "Nodemailer",
      ],
    },
    {
      company: "CreArt Solutions Pvt Ltd",
      role: "MERN Stack Developer Intern",
      duration: "July 2025 – July 2025",
      location: "Remote",
      type: "Internship",
      highlights: [
        "Contributed to the development of a full-stack Employee Management System, enabling secure CRUD operations for employee records",
        "Built responsive frontend UI in React.js with form validations and dynamic data rendering using Axios",
        "Developed RESTful APIs in Node.js + Express.js for employee data handling and role-based authentication",
        "Integrated MongoDB Atlas for cloud-based data storage and used Mongoose for schema validation",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Axios",
        "Mongoose",
      ],
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
  }, [experiences]);

  return (
    <section id="experince" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text-light dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-text-light/70 dark:text-white/70">
            Real-world projects and internships shaping my practical development
            skills
          </p>
        </motion.div>

        {/* Experience Carousel */}
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
              left: dragConstraint,
            }}
            dragElastic={0.1}
            dragMomentum={false}
          >
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
};

export default Experience;
