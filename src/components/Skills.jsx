import { motion } from 'framer-motion';
import { SiReact, SiNodedotjs, SiSpring, SiMongodb, SiDocker, 
         SiKubernetes, SiPython, SiTensorflow, SiAwsamplify } from 'react-icons/si';
import { BsRobot } from 'react-icons/bs';

const SkillCard = ({ icon: Icon, name, color }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.1 }}
    className="flex flex-col items-center p-6 bg-white/5 rounded-xl backdrop-blur-sm"
  >
    <motion.div
      animate={{
        y: [-5, 5, -5],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 2,
      }}
    >
      <Icon className={`text-5xl ${color}`} />
    </motion.div>
    <p className="mt-4 text-sm font-medium text-gray-300">{name}</p>
  </motion.div>
);

const Skills = () => {
  const skills = [
    { icon: SiReact, name: "React", color: "text-blue-400" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
    { icon: BsRobot, name: "Gen AI", color: "text-purple-500" },
    {
      icon: () => (
        <img
          src="https://clipground.com/images/java-logo-png-6.png"
          alt="Java Logo"
          className="w-28 h-24"
        />
      ),
      name: "DSA",
      color: "",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary-light/10 to-transparent dark:from-primary-dark/10 dark:to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text-light dark:text-text-dark mb-4">
            Technical Arsenal
          </h2>
          <p className="text-lg text-text-light/70 dark:text-text-dark/70">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              icon={skill.icon}
              name={skill.name}
              color={skill.color}
            />
          ))}
        </motion.div>

        {/* Background Decorations */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
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
            className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/20 rounded-full blur-xl"
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
        </div>
      </div>
    </section>
  );
};

export default Skills;


