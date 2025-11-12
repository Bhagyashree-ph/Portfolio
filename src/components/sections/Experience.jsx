import React from "react";
import { motion } from "framer-motion";

export default function Experience({darkMode}) {
  const experience = {
    company: "iQGateway Pvt. Ltd.",
    title: "Associate Software Developer",
    date: "Feb 2024 – Nov 2025",
    desc: "Contributed to full-stack enterprise solutions and optimized microservices using Java, Spring Boot, and ReactJS. Collaborated across teams in an Agile environment to improve performance and scalability.",
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          className={`text-4xl font-bold mb-12 ${darkMode?'text-indigo-400':'text-indigo-900'}`}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          // viewport={{ once: true }}
        >
          Experience That Shaped Me
        </motion.h2>

        <motion.div
          className={`${darkMode?'bg-white/10':'bg-black/10'} p-10 rounded-2xl shadow-2xl border border-indigo-500 backdrop-blur-md relative overflow-hidden`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          // viewport={{ once: true }}
        >
          {/* Subtle background animation */}
          <motion.div
          // bg-gradient-to-br from-indigo-700/20 via-purple-600/10 to-transparent
            className="absolute inset-0 rounded-2xl"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Main Content */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            // viewport={{ once: true }}
          >
            <motion.div
              className="flex justify-center mb-6"
              initial={{ rotate: -20, scale: 0 }}
              whileInView={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.7, type: "spring" }}
            >
              <div className={`w-20 h-20 rounded-full ${darkMode?'bg-indigo-600':'bg-indigo-900'} flex items-center justify-center text-white text-3xl font-bold shadow-lg border-4 border-indigo-400 animate-pulse`}>
                {experience.company.charAt(0)}
              </div>
            </motion.div>

            <h3 className={`text-2xl font-semibold ${darkMode?'text-indigo-300':'text-indigo-600'} mb-2`}>
              {experience.title}
            </h3>
            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-700'} mb-1`}>{experience.company}</div>
            <div className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-800'} mb-4`}>{experience.date}</div>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg leading-relaxed max-w-2xl mx-auto`}>
              {experience.desc}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}