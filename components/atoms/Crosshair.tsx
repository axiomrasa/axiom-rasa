'use client';

import { motion } from 'framer-motion';

/**
 * @module Targeting_Node
 * @description High-performance cursor tracking element with GPU acceleration.
 * Utilizes translate3d for sub-pixel rendering and zero reflow.
 */

interface CrosshairProps {
  mousePos: { x: number; y: number };
}

/**
 * @function Crosshair
 * @description Renders a high-fidelity HUD reticle synchronized with user interaction.
 */
export const Crosshair = ({ mousePos }: { mousePos: { x: number, y: number } }) => {
  return (
    <motion.div 
      className="fixed inset-0 pointer-events-none z-[100]"
      aria-hidden="true"
    >
      <motion.div 
        className="absolute flex items-center justify-center"
        animate={{ 
          x: mousePos.x, 
          y: mousePos.y 
        }}
        transition={{ 
          type: "spring", 
          damping: 30, 
          stiffness: 250, 
          mass: 0.5 
        }}
        style={{ x: "-50%", y: "-50%" }}
      >
        {/* Visual: Core Targeting Reticle */}
        <span className="text-cyan-400 text-xl font-light opacity-50 select-none">
          +
        </span>

        {/* Optional: Static Frame Indicators (Cyberpunk/FUI feel) */}
        <div className="absolute w-6 h-6 border border-cyan-500/20 rounded-full scale-150 animate-pulse" />
      </motion.div>
    </motion.div>
  );
};