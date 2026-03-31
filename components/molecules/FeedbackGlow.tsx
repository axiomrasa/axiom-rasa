'use client';

/**
 * @module Feedback_Dynamics
 * @description Telemetry feedback node. Orchestrates transient narrative states 
 * with hardware-accelerated motion and high-fidelity typography.
 */

import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface FeedbackGlowProps {
  message: string;
  onComplete: () => void;
}

/**
 * @function FeedbackGlow
 * @description Renders a temporal feedback message with an atmospheric glow 
 * and managed lifecycle.
 */
export const FeedbackGlow = ({ message, onComplete }: FeedbackGlowProps) => {
  useEffect(() => {
    // Sequence: 0.6s ingress + 1.6s dwell time
    const timer = setTimeout(onComplete, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 0, filter: "blur(10px)", y: 5 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      exit={{ opacity: 0, filter: "blur(8px)", scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // Custom Quintic Easing
      className="text-lg md:text-2xl tracking-[0.4em] uppercase text-center font-mono px-6 leading-relaxed will-change-[opacity,transform,filter]"
      role="status"
      aria-live="polite"
    >
      {/* Node: High-Fidelity Gradient Text */}
      <span className="bg-gradient-to-b from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]">
        {message}
      </span>
    </motion.div>
  );
};