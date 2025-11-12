import { motion } from 'framer-motion';
import { ReactTyped } from "react-typed";
import DaySky from '../backgrounds/DaySky';
import NightSky from '../backgrounds/NightSky';
import imgSrc from '../../assets/profile.png';

export default function Hero({ darkMode }) {

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const svgFallback = (initials = 'B') => {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'><rect width='100%' height='100%' fill='${darkMode ? '#0b1220' : '#e6eef8'}'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Arial' font-size='220' fill='${darkMode ? '#7c3aed' : '#3730a3'}' font-weight='700'>${initials}</text></svg>`;
    return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
  };

  return (
    <div id='hero'
      className={`${darkMode ? 'text-white' : 'text-gray-900'} relative overflow-hidden min-h-screen transition-all duration-500`}
    >
      {darkMode ? <NightSky /> : <DaySky />}

      {/* Hero Section */}
      <motion.section
        className="py-40 text-center flex flex-col md:flex-row items-center justify-center gap-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        // viewport={{ once: true }}
      >
        {/* Left Text */}
        <div className="md:w-1/2">

          <motion.div
            className="text-center md:text-center mb-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.4, ease: "easeOut" },
              },
            }}
          >
            {/* "Hi there 👋" */}
            <motion.p
              className={`text-5xl font-semibold mb-2 tracking-wide ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Hi there 👋,
            </motion.p>

            {/* "I'm Bhagyashree" */}
            <motion.h1
              className="text-6xl font-bold tracking-wide"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              I’m <span className="text-indigo-400">Bhagyashree</span>
            </motion.h1>
          </motion.div>

          <motion.h2
            className={`text-2xl mb-6`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <ReactTyped
              strings={[
                "Full-Stack Developer",
                "Java Developer",
                "ReactJS Enthusiast",
                "Spring Boot Specialist",
                "Microservices Architect",
              ]}
              typeSpeed={60}      // typing speed
              backSpeed={30}      // deleting speed
              backDelay={1500}    // pause before deleting
              loop                // enables continuous typing
            />
          </motion.h2>
          <motion.p
            className={`max-w-2xl mx-auto text-lg opacity-90 mb-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
          >
            I create elegant and efficient digital solutions — blending clean architecture with interactive user experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <button className="px-8 py-3 bg-indigo-600 rounded-full text-white text-lg font-semibold hover:bg-indigo-700 transition-all mr-4" onClick={()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
              Hire Me
            </button>
            <button className="px-8 py-3 border-2 border-indigo-400 rounded-full text-indigo-400 text-lg font-semibold hover:bg-indigo-400 hover:text-black transition-all" onClick={()=>document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}>
              View Projects
            </button>
          </motion.div>
        </div>

        {/* Right Circular Image */}
        <motion.div
          className="md:w-1/3 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <div
            className={`relative w-72 h-72 rounded-full overflow-hidden shadow-2xl border-4 
            ${darkMode ? 'border-white hover:shadow-[0_0_40px_white]' : 'border-orange-300 hover:shadow-[0_0_40px_yellow]'}
            hover:scale-105 transition-transform`}
          >
            <img
              src={imgSrc}
              alt="Bhagyashree profile"
              className="object-cover w-full h-full"
              onError={(e)=>{ e.currentTarget.onerror=null; e.currentTarget.src = svgFallback('B'); }}
            />
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
