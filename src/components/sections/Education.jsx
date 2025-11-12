import React from 'react';
import { motion } from 'framer-motion';

export default function Education({darkMode}) {
  const education = [
    {
      institution: 'Sharnbasva University, Kalaburagi',
      degree: 'B.Tech in Computer Science and Engineering',
      date: '2019 – 2023',
      desc: 'Graduated with strong foundations in software development, algorithms, and data structures. Completed various projects focused on web technologies and Java-based applications.',
    },
    {
      institution: 'Kayaka PU College of Science, Kalaburagi',
      degree: 'PUC in Science (PCMB)',
      date: '2017 – 2019',
      desc: 'Focused on core science and mathematics, laying the groundwork for problem-solving and analytical skills.',
    },
    {
      institution: 'Sri Sardar Vallabhabhai Patel Memorial High School, Kalaburagi',
      degree: 'SSLC (State Board)',
      date: '2016 – 2017',
      desc: 'Completed high school with distinction, developing a strong interest in mathematics and computer science.',
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className={`text-4xl font-bold ${darkMode?'text-indigo-400':'text-indigo-900'} mb-12 text-center`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Where It All Began
        </motion.h2>
        <br/>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-indigo-600 h-full"></div>
          <div className="space-y-12">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                className="relative min-h-[120px]"
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                // viewport={{ once: true }}
              >
                <div className="absolute left-1/2 top-5 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-11 h-11 rounded-full bg-indigo-600 flex items-center justify-center">
                    <h1 className="text-xl font-bold mt-1">{edu.institution.charAt(0)}</h1>
                  </div>
                </div>
                <div className={`${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} w-full md:w-1/2 ${i % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'}`}>
                  <div className={`${i % 2 === 0 ? 'text-right' : 'text-left'} ${darkMode?'bg-white/10':'bg-black/10'} p-6 rounded-lg shadow-lg`}>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-800'}`}>{edu.date}</div>
                    <h3 className="text-xl font-semibold mt-1">{edu.degree}</h3>
                    <div className={`${darkMode ? 'text-indigo-300' : 'text-indigo-700'}`}>{edu.institution}</div>
                    <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{edu.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}