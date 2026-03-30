'use client';
import { motion } from 'framer-motion';

export const HUDRings = () => (
  <div className="absolute flex items-center justify-center pointer-events-none opacity-10">
    <motion.div 
      animate={{ rotate: 360 }} 
      transition={{ repeat: Infinity, duration: 25, ease: "linear" }} 
      className="absolute w-[300px] h-[300px] border border-blue-500/20 rounded-full border-dashed" 
    />
    <motion.div 
      animate={{ rotate: -360 }} 
      transition={{ repeat: Infinity, duration: 40, ease: "linear" }} 
      className="absolute w-[350px] h-[350px] border-t-2 border-blue-900/10 rounded-full" 
    />
  </div>
);