'use client';

/**
 * @module Sequencer_Dynamics
 * @description High-speed character injection node for Rasa Core.
 * Orchestrates the primary greeting sequence with hardware-accelerated rendering.
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SYSTEM_TEXTS } from '../../constants/site-data';

/**
 * @function ChatSequencer
 * @description Renders a streaming text sequence with a simulated terminal cursor.
 */
export const ChatSequencer = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = SYSTEM_TEXTS.intro;

  useEffect(() => {
    let currentIdx = 0;
    
    /** @description Temporal injection: Stream characters at 45ms intervals */
    const typingInterval = setInterval(() => {
      if (currentIdx <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIdx));
        currentIdx++;
      } else {
        clearInterval(typingInterval);
      }
    }, 45);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <div className="flex items-center justify-center h-12" role="status" aria-live="polite">
      <h1 className="text-2xl md:text-4xl font-bold italic tracking-tighter bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600 bg-clip-text text-transparent lowercase font-mono select-none will-change-[contents]">
        {displayText}
        
        {/* Node: Terminal-Grade System Cursor */}
        <motion.span 
          animate={{ opacity: [1, 1, 0, 0, 1] }} 
          transition={{ 
            repeat: Infinity, 
            duration: 0.8, 
            times: [0, 0.5, 0.5, 1, 1],
            ease: "linear"
          }} 
          className="inline-block ml-1 w-2 h-6 md:h-8 bg-cyan-500 align-middle shadow-[0_0_15px_#06b6d4]"
        />
      </h1>
    </div>
  );
};