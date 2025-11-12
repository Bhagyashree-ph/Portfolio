import React from 'react';
import { motion } from 'framer-motion';
import imgSrc from '../../assets/dev.png';

export default function About({ darkMode }) {
  return (
    <section id="about">
      <div className="text-center mb-6">
        <motion.h2
          className={`text-4xl py-20 font-bold ${darkMode?'text-indigo-400':'text-indigo-900'}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Who I Am
        </motion.h2>
        <h2 className={`text-4xl font-bold ${darkMode?'text-indigo-400':'text-indigo-900'}`}></h2>
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Left Circular Giphy */}
        <motion.div
          className="md:w-1/3 flex justify-center mb-8 md:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative w-80 h-80 overflow-hidden">
            <img
              src={imgSrc}
              alt="Developer at work"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Right Text Content */}
        <motion.div
          className="md:w-2/3 text-center md:text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <p className={darkMode ? 'text-gray-300 max-w-3xl mx-auto md:mx-0' : 'text-gray-700 max-w-3xl mx-auto md:mx-0'}>
            Hi, I’m Bhagyashree — a passionate <b>Full-Stack Developer</b> with expertise in <b>Java, Spring Boot, ReactJS, and MongoDB</b>. I specialize in building scalable web applications and modernizing microservices to deliver high-performance solutions. With experience in <b>Agile development</b>, I thrive in collaborative environments, ensuring timely delivery of robust and user-centric products. My technical toolkit spans <b>front-end and back-end technologies, database optimization</b>, and DevOps practices, enabling me to craft seamless digital experiences. Beyond coding, I enjoy mentoring peers and exploring innovative approaches to software design and architecture.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}