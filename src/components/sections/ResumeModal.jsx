import React from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { FiDownload } from 'react-icons/fi';
import myResume from '../../assets/Bhagyashree_Java_Full_Stack_developer.pdf';

export default function ResumeModal({isOpen,onClose,darkMode}){
  return(<AnimatePresence>{isOpen&&(<motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
    <motion.div initial={{scale:0.95,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:0.95,opacity:0}} transition={{duration:0.25}} className={`relative w-[90%] md:w-[80%] lg:w-[70%] h-[80vh] rounded-xl overflow-hidden ${darkMode?'bg-gray-900 text-white':'bg-white text-gray-900'}`}>
      <div className="flex justify-between items-center px-4 py-2 border-b border-gray-700">
        <h3 className="font-semibold">My Resume</h3>
        <div className="flex items-center gap-2">
          <a href={myResume} download className="px-3 py-1.5 rounded-md border hover:bg-indigo-600 hover:text-white transition flex items-center gap-2"><FiDownload/>Download</a>
          <button onClick={onClose} className="p-1 rounded hover:bg-gray-700"><IoClose/></button>
        </div>
      </div>
      <iframe src={myResume} title="resume" className="w-full h-full"/>
    </motion.div></motion.div>)}</AnimatePresence>);
}
