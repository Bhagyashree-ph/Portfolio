import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects({ darkMode }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Medication Management Tool (Med Tracker)",
      duration: "July 2024 – August 2024",
      desc: "Developed a full-stack web application to help patients manage prescriptions and medication reminders.",
      details: "This project was built using Java, Spring Boot, Microservices, Oracle DB, and ReactJS. It enables patients to manage their prescriptions, set medication reminders, and track dosage adherence. A secure Spring Boot REST API ensures encrypted data communication, while ReactJS and Material UI provide a modern, responsive interface. Role-based authentication was implemented for patients and pharmacists, improving privacy and data security. The system also integrates real-time notifications and analytics for better medication compliance.",
      github: "https://github.com/Bhagyashree-ph/med-tracker"
    },
    {
      title: "Traffic Management System (TMS)",
      duration: "April 2024 – June 2024",
      desc: "Built a desktop-based Traffic Management System with Java Swing, JDBC, and Oracle DB.",
      details: "The Traffic Management System was designed for the Bangalore Traffic Police to streamline vehicle offence management. The application features offence tracking, fine calculation, record generation, and vehicle/owner data management. It was developed using Java Swing for the GUI, JDBC for database interaction, and Oracle DB for secure data storage. The system supports role-based access and includes detailed reporting and data validation mechanisms for accuracy and efficiency.",
      github: "https://github.com/Bhagyashree-ph/tms"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className={`text-3xl font-bold mb-8 ${darkMode?'text-indigo-400':'text-indigo-900'} text-center`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              onClick={() => setSelectedProject(p)}
              className={`p-6 rounded-lg ${darkMode?'bg-white/10 border-gray-700':'bg-black/10 border-gray-300'} border hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/30 transition-all cursor-pointer transform hover:scale-105`}
            >
              <div className={`text-sm ${darkMode?'text-gray-400':'text-gray-900'}`}>{p.duration}</div>
              <h3 className={`text-xl font-semibold mt-1 ${darkMode?'text-indigo-300':'text-indigo-700'}`}>{p.title}</h3>
              <p className={`mt-2 ${darkMode?'text-gray-300':'text-gray-700'}`}>{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className={`fixed inset-0 flex items-center justify-center ${darkMode?'bg-black/60':'bg-black/10'} z-50`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                key={selectedProject.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className={`${darkMode 
                  ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700'
                  : 'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300'} 
                  border border-indigo-400 rounded-xl p-8 max-w-2xl w-full text-left shadow-2xl relative overflow-y-auto max-h-[90vh]`}
              >
                <button
                  className={`absolute top-3 right-3 ${darkMode?'text-gray-400':'text-gray-900'} hover:text-white text-xl`}
                  onClick={() => setSelectedProject(null)}
                >
                  ✕
                </button>
                <h3 className={`text-2xl font-bold ${darkMode?'text-indigo-400':'text-indigo-900'} mb-3 text-center`}>{selectedProject.title}</h3>
                <div className={`text-sm ${darkMode?'text-gray-400':'text-gray-900'} mb-4 text-center`}>{selectedProject.duration}</div>
                <p className={`${darkMode?'text-gray-400':'text-gray-900'} mb-6 leading-relaxe`}>{selectedProject.details}</p>
                <div className="text-center">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
                  >
                    🔗 View Source on GitHub
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}