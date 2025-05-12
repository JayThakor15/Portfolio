import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const TechBlock = ({ text, className }) => (
  <motion.div
    className={`absolute ${className} px-4 py-2 rounded-lg text-white text-sm font-medium shadow-lg`}
    animate={{
      y: [-10, 10, -10],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
      // Add random delay to create non-synchronized animations
      delay: Math.random() * 2,
    }}
  >
    {text}
  </motion.div>
);

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center py-20 bg-gradient-to-b from-transparent to-primary-light/10 dark:to-primary-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-purple-600 dark:text-purple-400 font-mono mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi there! I'm
            </motion.p>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 text-text-light dark:text-text-dark"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Jay
            </motion.h1>
            <div className="text-2xl md:text-3xl font-bold text-text-light/80 dark:text-text-dark/80 mb-6">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'UI/UX Enthusiast',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <motion.p
              className="text-lg text-text-light/70 dark:text-text-dark/70 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Crafting digital experiences with code and creativity. 
              Transforming ideas into elegant, user-centric solutions 
              that make a difference.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-x-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium inline-block"
              >
                View My Work
              </motion.a>
              <motion.a
                 href="mailto:jaysinhdarbar730@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg border-2 border-purple-600 dark:border-purple-500 text-purple-600 dark:text-purple-500 font-medium inline-block hover:bg-purple-600/10"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Illustration with Tech Blocks */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image - Steady and slightly elevated */}
            <div className="w-full h-full transform -translate-y-8">
              <img
                src="/Portfolio-image.png"
                alt="Developer Illustration"
                className="w-3/4 h-auto max-w-md mx-auto" // Reduced size
              />
            </div>

            {/* Floating Tech Blocks */}
            <TechBlock 
              text="Full Stack"
              className="bg-emerald-600 top-10 -left-4"
            />
            <TechBlock 
              text="Java"
              className="bg-blue-600 top-20 right-0"
            />
            <TechBlock 
              text="Prompt Engineer"
              className="bg-purple-600 bottom-40 -left-8"
            />
            <TechBlock 
              text="Gen AI"
              className="bg-rose-600 bottom-20 right-4"
            />
            <TechBlock 
              text="React"
              className="bg-cyan-600 top-40 left-20"
            />
            <TechBlock 
              text="Node.js"
              className="bg-green-600 bottom-32 right-20"
            />

            {/* Keep the existing floating elements */}
            <motion.div
              className="absolute top-1/4 right-1/4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
