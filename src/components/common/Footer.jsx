import React from 'react';
import { FaLinkedin,FaGithub } from 'react-icons/fa';
export default function Footer({darkMode}){
  const textWrapper = `${darkMode?'text-indigo-400':'text-indigo-900'} text-2xl`;
  return(
    <footer className={`py-8 mt-8 ${darkMode?'bg-gray-900' : 'bg-gray-200'}`}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://www.linkedin.com/in/bhagyashree-ph-a935a121a" target="_blank" rel="noreferrer" className={textWrapper}><FaLinkedin/></a>
          <a href="https://github.com/Bhagyashree-ph" target="_blank" rel="noreferrer" className={textWrapper}><FaGithub/></a>
        </div>
        <p className="text-sm">© 2025 Bhagyashree. All rights reserved.</p>
        <p className="text-xs opacity-70">Bengaluru, Karnataka, India</p>
      </div>
    </footer>
  );
}
