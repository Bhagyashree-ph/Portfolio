import React,{useState} from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';
import ResumeModal from './components/sections/ResumeModal';
import Education from './components/sections/Education';
import BackToTopButton from './components/common/BackToTop';

export default function BhagyashreePortfolioApp(){
  const [darkMode,setDarkMode]=useState(true);
  const [resumeOpen,setResumeOpen]=useState(false);
  return(
    <div className={darkMode?'text-white':'text-gray-900'}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} onOpenResume={()=>setResumeOpen(true)}/>
      <main>
        <Hero darkMode={darkMode}/>
        <About darkMode={darkMode}/>
        <Education darkMode={darkMode}/>
        <Experience darkMode={darkMode}/>
        <Skills darkMode={darkMode}/>
        <Projects darkMode={darkMode}/>
        <Contact darkMode={darkMode}/>
        <BackToTopButton darkMode={darkMode}/>
        <Footer darkMode={darkMode}/>
      </main>
      <ResumeModal isOpen={resumeOpen} onClose={()=>setResumeOpen(false)} darkMode={darkMode}/>
    </div>
  )
}
