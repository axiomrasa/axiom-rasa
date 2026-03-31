'use client';

/**
 * @module MeetMe_Node
 * @description High-fidelity identity node within the Rasa Core ecosystem.
 * Features temporal synchronization and glitch-variant motion logic.
 */

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

/**
 * @constant GLITCH_VARIANTS
 * @description Aesthetic distortion parameters for FUI immersion.
 */
const GLITCH_VARIANTS = {
  initial: { x: 0, opacity: 1 },
  animate: {
    x: [0, -1, 1, 0],
    opacity: [1, 0.9, 1],
    transition: {
      duration: 0.25,
      repeat: Infinity,
      repeatDelay: 5,
    },
  },
};

/**
 * @function MeetMe
 * @description Renders the primary profile interface with real-time telemetry.
 */
export default function MeetMe() {
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    const updateClock = () => {
      setTimestamp(new Date().toLocaleTimeString('en-GB', { hour12: false }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#050505] text-zinc-400 font-mono relative overflow-hidden p-6">
      
      {/* Visual Layer: Ambient Matrix */}
      <motion.div 
        animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 pointer-events-none opacity-[0.1]"
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #4c1d95 1px, transparent 1px),
            linear-gradient(to bottom, #1e3a8a 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px' 
        }}
      />

      <motion.div 
        {...GLITCH_VARIANTS}
        className="relative w-full max-w-lg border border-zinc-900 bg-black/70 backdrop-blur-3xl p-12 md:p-16 shadow-2xl"
      >
        {/* UI Component: Frame Markers */}
        <div className="absolute top-0 left-0 w-8 h-[1px] bg-purple-500/30" />
        <div className="absolute top-0 left-0 w-[1px] h-8 bg-blue-500/30" />
        <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-blue-500/30" />
        <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-purple-500/30" />

        {/* Section: Identity Header */}
        <header className="mb-14 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-black tracking-tighter lowercase mb-6 drop-shadow-[0_0_20px_rgba(76,29,149,0.3)]">
            axiom rasa
          </h1>
          <div className="text-zinc-500 text-[11px] uppercase tracking-[0.5em] mb-2 italic font-bold">focus</div>
          <p className="text-zinc-200 text-[12px] uppercase tracking-widest leading-relaxed">
            creative technology // dsp // generative art
          </p>
        </header>

        {/* Section: Data Matrix Links */}
        <div className="space-y-10 mb-14 border-y border-zinc-900/50 py-12">
          <div className="flex justify-between items-center group">
            <span className="text-zinc-700 text-[10px] uppercase tracking-[0.5em] italic font-bold">repository</span>
            <a href="https://github.com/axiomrasa" target="_blank" rel="noreferrer"
               className="text-sm text-zinc-400 hover:text-white transition-all duration-300 uppercase tracking-widest border-b border-transparent hover:border-purple-500 pb-1">
              github.log
            </a>
          </div>
          
          <div className="flex justify-between items-center group">
            <span className="text-zinc-700 text-[10px] uppercase tracking-[0.5em] italic font-bold">business_id</span>
            <a href="https://linkedin.com/in/buse-ceren-demir-58a20823b" target="_blank" rel="noreferrer"
               className="text-sm text-zinc-400 hover:text-white transition-all duration-300 uppercase tracking-widest border-b border-transparent hover:border-blue-500 pb-1">
              linkedin.sync
            </a>
          </div>
        </div>

        {/* Section: Navigation & Telemetry */}
        <footer className="flex flex-col items-center gap-10">
          <Link href="/?session=active" prefetch={true}>
            <motion.button 
              whileHover={{ 
                y: -2, 
                color: "#ffffff",
                textShadow: "0 0 15px rgba(255,255,255,0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              className="text-zinc-600 text-[14px] tracking-[0.6em] uppercase font-bold transition-all duration-300 outline-none"
            >
              [ back_to_source ]
            </motion.button>
          </Link>
          
          <div className="text-[10px] text-zinc-800 tracking-[0.3em] uppercase text-center leading-loose">
            TIME_SYNC: {timestamp} <br />
            STATUS: STATIC
          </div>
        </footer>
      </motion.div>

      {/* Visual Effect: Screen Scanners */}
      <div className="absolute inset-0 pointer-events-none bg-[length:100%_4px] opacity-[0.02]" 
           style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0) 50%, rgba(255,255,255,0.1) 50%)` }} />
    </main>
  );
}