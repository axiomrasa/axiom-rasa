'use client';

/**
 * @module Visual_Dynamics
 * @description Procedural HUD elements for Rasa Core. 
 * High-performance rotational nodes with zero-reflow rendering.
 */

import { motion } from 'framer-motion';

/**
 * @function HUDRings
 * @description Renders concentric telemetry rings with asynchronous rotation paths.
 */
export const HUDRings = () => {
  return (
    <div 
      className="absolute flex items-center justify-center pointer-events-none opacity-20"
      aria-hidden="true"
    >
      {/* Node: Primary Dashed Perimeter */}
      <motion.div 
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }} 
        transition={{ 
          repeat: Infinity, 
          duration: 25, 
          ease: "linear" 
        }} 
        className="absolute w-[300px] h-[300px] border border-blue-500/20 rounded-full border-dashed will-change-transform" 
      />

      {/* Node: Secondary Solid Perimeter (Counter-Rotation) */}
      <motion.div 
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }} 
        transition={{ 
          repeat: Infinity, 
          duration: 40, 
          ease: "linear" 
        }} 
        className="absolute w-[350px] h-[350px] border-t-2 border-blue-900/10 rounded-full will-change-transform" 
      />

      {/* Node: Tertiary Core Glow (Static Accent) */}
      <div className="absolute w-[250px] h-[250px] border border-purple-500/5 rounded-full blur-[2px]" />
    </div>
  );
};