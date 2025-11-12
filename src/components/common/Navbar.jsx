import React from 'react';
import { BsSun,BsMoon } from 'react-icons/bs';
import logo from '../../assets/logo.png';

export default function Navbar({darkMode,setDarkMode,onOpenResume}){
  const links=['hero','about','education','experience','skills','projects','contact'];
  const scrollTo=(id)=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
  return(
    <header className={`fixed top-0 w-full z-40 backdrop-blur ${darkMode?'bg-white/10':'bg-black/10'} border-b border-white/5`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">

      <div
        className="text-xl font-bold cursor-pointer flex items-center"
        onClick={() => scrollTo('hero')}
      >
        <img
          src={logo}
          alt="Bhagyashree Logo"
          className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

        <nav className="hidden md:flex gap-6">
          {links.map(link => {
            const label = link === 'hero' ? 'Home' : link.charAt(0).toUpperCase() + link.slice(1);
            return (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-md `${darkMode ? text-black-100 : text-gray-200} hover:text-indigo-300"
              >
                {label}
              </button>
            );
          })}
          <button onClick={onOpenResume} className={`'text-md' ${darkMode ? 'text-indigo-300' : 'text-indigo-900'}`}>Resume</button>
        </nav>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 w-[180px] justify-center"
        >
          {darkMode ? (
            <BsSun className="text-yellow-300 text-xl" />
          ) : (
            <BsMoon className="text-gray-700 text-xl" />
          )}
          <span className={`${darkMode ? 'text-yellow-200' : 'text-gray-800'} font-medium`}>
            Light / Dark
          </span>
        </button>
      </div>
    </header>
  );
}
