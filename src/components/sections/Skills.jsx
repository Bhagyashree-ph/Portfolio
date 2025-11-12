import { motion } from 'framer-motion';
import { FaJava, FaReact, FaDatabase, FaDocker, FaGitAlt, FaCogs } from 'react-icons/fa';
import { SiSpringboot, SiMongodb, SiMysql, SiMui, SiRabbitmq, SiTypescript, SiJavascript, SiSonarqube, SiJunit5 } from 'react-icons/si';

export default function Skills({ darkMode }) {
  const skills = [
    { name: 'Java', icon: <FaJava className="text-5xl text-orange-400" /> },
    { name: 'Spring Boot', icon: <SiSpringboot className="text-5xl text-green-400" /> },
    { name: 'ReactJS', icon: <FaReact className="text-5xl text-sky-400" /> },
    { name: 'Microservices', icon: <FaCogs className="text-5xl text-indigo-300" /> },
    { name: 'Javascript', icon: <SiJavascript className="text-5xl text-yellow-300" /> },
    { name: 'Oracle DB', icon: <FaDatabase className="text-5xl text-amber-500" /> },
    { name: 'MySQL', icon: <SiMysql className="text-5xl text-blue-400" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-5xl text-green-400" /> },
    { name: 'RabbitMQ', icon: <SiRabbitmq className="text-5xl text-orange-400" /> },
    { name: 'Material UI', icon: <SiMui className="text-5xl text-sky-400" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-5xl text-blue-400" /> },
    { name: 'Docker', icon: <FaDocker className="text-5xl text-blue-400" /> },
    { name: 'Git', icon: <FaGitAlt className="text-5xl text-orange-400" /> },
    { name: 'JUnit', icon: <SiJunit5 className="text-5xl text-green-400" /> },
    { name: 'SonarQube', icon: <SiSonarqube className="text-5xl text-indigo-300" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    hover: { scale: 1.1, rotate: 5, transition: { duration: 0.3 } },
  };

  return (
    <section id='skills' className="py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className={`text-4xl font-bold ${darkMode?'text-indigo-400':'text-indigo-900'} mb-12`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What I Excel At
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center gap-2 p-4 rounded-2xl ${darkMode?'bg-white/10 border-gray-700':'bg-black/10 border-gray-300'} border hover:border-indigo-400 hover:shadow-indigo-500/30 shadow-md transition-all cursor-pointer`}
              variants={itemVariants}
              whileHover="hover"
            >
              {skill.icon}
              <span className={`text-lg font-semibold mt-2 ${darkMode?'text-gray-200':'text-gray-600'}`}>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}