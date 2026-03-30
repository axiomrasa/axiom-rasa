'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SYSTEM_TEXTS } from '../../constants/site-data';

export const ChatSequencer = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = SYSTEM_TEXTS.intro;

  useEffect(() => {
    let currentIdx = 0;
    
    // Typing hızı (45ms)
    const interval = setInterval(() => {
      if (currentIdx <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIdx));
        currentIdx++;
      } else {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="flex items-center justify-center h-12">
      <h1 className="text-2xl md:text-4xl font-bold italic tracking-tighter bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-500 bg-clip-text text-transparent lowercase font-mono">
        {displayText}
        <motion.span 
          animate={{ opacity: [0, 1, 0] }} 
          transition={{ repeat: Infinity, duration: 0.8 }} 
          className="inline-block ml-1 w-2 h-6 md:h-8 bg-white align-middle"
        />
      </h1>
    </div>
  );
};