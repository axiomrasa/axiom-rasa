'use client';

/**
 * @module Feedback_Dynamics
 * @description Character-based narrative sequencer. 
 * Handles temporal string injection with a hardware-accelerated terminal cursor.
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FeedbackTypingProps {
  message: string;
  onComplete: () => void;
}

/**
 * @function FeedbackTyping
 * @description Sequentially renders strings to simulate low-level data streaming.
 */
export const FeedbackTyping = ({ message, onComplete }: FeedbackTypingProps) => {
  const [text, setText] = useState('');

  useEffect(() => {
    let index = 0;
    
    /** @description Sequence logic: Stream characters at 45ms intervals */
    const typingInterval = setInterval(() => {
      setText(message.slice(0, index));
      index++;

      if (index > message.length) {
        clearInterval(typingInterval);
        
        /** @description Finalization: 2s hold period before state transition */
        const completionTimer = setTimeout(onComplete, 2000);
        return () => clearTimeout(completionTimer);
      }
    }, 45);

    return () => clearInterval(typingInterval);
  }, [message, onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98, filter: "blur(12px)" }}
      transition={{ duration: 0.5, ease: "circOut" }}
      className="text-xl md:text-2xl tracking-[0.4em] uppercase text-center font-mono px-6 leading-relaxed will-change-[opacity,transform,filter]"
      role="log"
      aria-live="polite"
    >
      {/* Node: Terminal Streaming Text */}
      <span className="bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent italic drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">
        {text}
      </span>

      {/* Node: Active System Cursor (Fixed TS Error via Keyframe Mapping) */}
      <motion.span 
        animate={{ opacity: [1, 1, 0, 0, 1] }}
        transition={{ 
          repeat: Infinity, 
          duration: 0.8, 
          times: [0, 0.5, 0.5, 1, 1],
          ease: "linear"
        }}
        className="text-cyan-500 ml-1 inline-block drop-shadow-[0_0_10px_#06b6d4]"
      >
        _
      </motion.span>
    </motion.div>
  );
};