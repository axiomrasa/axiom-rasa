'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FeedbackTypingProps {
  message: string;
  onComplete: () => void;
}

export const FeedbackTyping = ({ message, onComplete }: FeedbackTypingProps) => {
  const [text, setText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(message.slice(0, i));
      i++;
      if (i > message.length) {
        clearInterval(interval);
        // 2-second hold time after typing finishes
        setTimeout(onComplete, 2000); 
      }
    }, 45); // 45ms typing speed
    return () => clearInterval(interval);
  }, [message, onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
      className="text-xl md:text-2xl tracking-[0.4em] uppercase text-center bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent italic font-mono px-6 leading-relaxed"
    >
      {text}<span className="animate-pulse text-cyan-500">_</span>
    </motion.div>
  );
};