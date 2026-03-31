'use client';

/**
 * @module Interface_Nodes
 * @description Telemetry-responsive navigation node for Rasa Core.
 * Features asynchronous pulse synchronization and high-fidelity hover states.
 */

import { motion } from 'framer-motion';
import Link from 'next/link';

interface MenuButtonProps {
  label: string;
  delay: number;
  pulseSpeed: number;
  href: string;
}

/**
 * @function MenuButton
 * @description Renders a high-fidelity FUI button with managed motion states.
 */
export const MenuButton = ({ label, delay, pulseSpeed, href }: MenuButtonProps) => (
  <Link href={href} className="w-full outline-none" prefetch={true}>
    <motion.button
      initial={{ opacity: 0, y: 15 }}
      animate={{ 
        opacity: [0.4, 1, 0.4], 
        y: 0 
      }}
      transition={{ 
        opacity: { 
          repeat: Infinity, 
          duration: pulseSpeed, 
          delay: delay,
          ease: "easeInOut" 
        },
        y: { 
          duration: 0.8, 
          delay: delay * 0.5, 
          ease: [0.22, 1, 0.36, 1] 
        }
      }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="relative w-full p-8 md:p-10 border border-zinc-900 bg-zinc-950/20 hover:border-white/30 transition-colors duration-500 group overflow-hidden flex items-center justify-center will-change-transform"
    >
      {/* Node: Aesthetic Scanning Overlay (Hover Only) */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />

      {/* Node: Primary Typography */}
      <span className="text-xl md:text-2xl font-bold uppercase tracking-tighter bg-gradient-to-br from-zinc-200 to-zinc-500 bg-clip-text text-transparent group-hover:from-white group-hover:to-zinc-300 transition-all font-mono select-none z-10">
        {label}
      </span>

      {/* Visual: Frame Decals (Corner Markers) */}
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-800 group-hover:border-cyan-500/50 transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zinc-800 group-hover:border-cyan-500/50 transition-colors duration-300" />
      
      {/* Visual: Passive HUD Elements (Hidden on Mobile) */}
      <div className="absolute top-2 left-2 w-1 h-[1px] bg-zinc-900 group-hover:bg-cyan-500/30 transition-colors hidden md:block" />
    </motion.button>
  </Link>
);