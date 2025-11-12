import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BackToTopButton({ darkMode }) {
  const [isVisible, setIsVisible] = useState(false);

  // 🧭 Detect scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) { // show after scrolling 200px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className={`fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center rounded-full text-4xl font-bold shadow-lg transition-all duration-300 ${
            darkMode
              ? 'bg-indigo-500 text-white hover:bg-indigo-400 hover:shadow-[0_0_20px_#818cf8]'
              : 'bg-indigo-600 text-white hover:bg-indigo-500 hover:shadow-[0_0_20px_#6366f1]'
          }`}
        >
          ↑
        </motion.button>
      )}
    </>
  );
}