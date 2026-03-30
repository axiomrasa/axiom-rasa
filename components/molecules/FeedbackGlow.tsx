'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface FeedbackGlowProps {
  message: string;
  onComplete: () => void;
}

export const FeedbackGlow = ({ message, onComplete }: FeedbackGlowProps) => {
  useEffect(() => {
    // 2.2 seconds total: 0.6s fade-in + 1.6s reading time
    const timer = setTimeout(onComplete, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 0, filter: "blur(10px)", y: 5 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      exit={{ opacity: 0, filter: "blur(8px)", scale: 0.98 }}
      className="text-lg md:text-2xl tracking-[0.3em] uppercase text-center font-mono px-6 leading-relaxed"
    >
      <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]">
        {message}
      </span>
    </motion.div>
  );
};