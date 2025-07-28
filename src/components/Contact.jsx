import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const MailIcon = ({ className = "w-6 h-6" }) => (
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
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const PhoneIcon = ({ className = "w-6 h-6" }) => (
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
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const LocationIcon = ({ className = "w-6 h-6" }) => (
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
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const SkillTag = ({ skill }) => (
    <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
      {skill}
    </span>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text-light dark:text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-text-light/70 dark:text-white/70 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm here to help you build
            amazing digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-text-light dark:text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-text-light/70 dark:text-white/70 mb-8">
                I'm always open to discussing new opportunities, creative
                projects, or potential collaborations.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.a
                href="mailto:jaysinhdarbar730@gmail.com"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-gray-200/20 dark:border-white/10 hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
                  <MailIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-light dark:text-white">
                    Email
                  </h4>
                  <p className="text-text-light/70 dark:text-white/70">
                    jaysinhdarbar730@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+919106090862"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-gray-200/20 dark:border-white/10 hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-green-500/20 text-green-400">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-light dark:text-white">
                    Phone
                  </h4>
                  <p className="text-text-light/70 dark:text-white/70">
                    +91 91060 90862
                  </p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-gray-200/20 dark:border-white/10"
              >
                <div className="p-3 rounded-lg bg-purple-500/20 text-purple-400">
                  <LocationIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-light dark:text-white">
                    Location
                  </h4>
                  <p className="text-text-light/70 dark:text-white/70">
                    Mehsana, Gujarat, India
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <motion.a
                href="mailto:jaysinhdarbar730@gmail.com?subject=Hire%20Me%20-%20Project%20Inquiry"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold text-center transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Hire Me
              </motion.a>

              <motion.a
                href="https://drive.google.com/file/d/10ObisORNbJ-nGyFQQ9QZjLhlapoG6tWL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full px-6 py-3 bg-transparent border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white rounded-lg font-semibold text-center transition-all duration-300"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          <div className="flex justify-center">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl max-w-md w-full"
            >
              {/* Header */}
              <div className="p-6 bg-gradient-to-r from-purple-600 to-blue-600">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Passionate Full Stack Developer
                </h3>
                <p className="text-white/80 text-sm">
                  I'm a passionate full stack developer with a proven track
                  record of building successful projects. I have a strong
                  background in web development, UI/UX design, and backend
                  development.
                </p>
              </div>

              {/* Profile Info */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src="./Portfolio-image.png"
                    alt="Jaysinh Darbar"
                    className="w-20 h-20 object-contain rounded-full border-2 border-blue-500"
                  />
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-white">Jay Thakor</h4>
                    <p className="text-gray-400">@jaythakor15</p>
                  </div>
                </div>
                <p className="text-white mb-4">
                  I'm a dedicated and focused software developer with a strong
                  passion for technology. I have a proven track record of
                  building successful projects and have worked on various
                  industries, including e-commerce, healthcare, and finance. I'm
                  always looking for opportunities to expand my skills and
                  contribute to the tech industry.
                </p>
                {/* Skills */}
                <div>
                  <h5 className="text-lg font-semibold text-white mb-3">
                    Skills & Expertise
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    <SkillTag skill="Java" />
                    <SkillTag skill="React" />
                    <SkillTag skill="Node.js" />
                    <SkillTag skill="Express.js" />
                    <SkillTag skill="MongoDb" />
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 bg-gray-800 flex justify-between items-center">
                <div>
                  <div className="flex justify-center space-x-6">
                    <a
                      href="https://www.instagram.com/jayuu_.15/profilecard/?igsh=dHJpMndmZTlkNWNt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <FaInstagram size={24} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jay-thakor-39a580217/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <FaLinkedin size={24} />
                    </a>
                    <a
                      href="https://github.com/JayThakor15"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <FaGithub size={24} />
                    </a>
                  </div>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                  Follow
                </button>
              </div>
            </motion.div>
          </div>
        </div>
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
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
};

export default Contact;
