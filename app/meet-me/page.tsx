'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MeetMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-black text-zinc-400 font-mono">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl w-full border border-zinc-900 bg-zinc-950/40 p-8 md:p-12 relative overflow-hidden"
      >
        {/* Aesthetic Corner Accent */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30" />

        {/* Header Section */}
        <motion.div variants={itemVariants} className="mb-12">
          <h1 className="text-white text-xl md:text-2xl font-bold tracking-tighter uppercase mb-2">
            Subject_Profile: Axiom Rasa
          </h1>
          <div className="h-px w-full bg-gradient-to-r from-zinc-800 to-transparent" />
        </motion.div>

        {/* Technical Data Section */}
        <div className="space-y-6 mb-12">
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <span className="text-zinc-600 text-xs uppercase tracking-widest">Position:</span>
            <span className="md:col-span-2 text-zinc-200">Creative Technologist</span>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <span className="text-zinc-600 text-xs uppercase tracking-widest">Specialization:</span>
            <span className="md:col-span-2 text-zinc-200 uppercase">DSP / Generative Systems / UI Engineering</span>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-4 border-t border-zinc-900">
            <p className="text-sm leading-relaxed italic text-zinc-500">
              "Engineering digital environments where technical precision meets high-fidelity aesthetics. I build interactive systems that function as instruments, bridging the gap between abstract logic and sensory experience."
            </p>
          </motion.div>
        </div>

        {/* External Uplinks (Socials) */}
        <motion.div variants={itemVariants} className="space-y-3 mb-12">
          <h3 className="text-[10px] text-zinc-600 tracking-[0.4em] uppercase mb-4">External_Uplinks:</h3>
          <div className="flex flex-col gap-2">
            <a href="https://instagram.com/axiomrasa" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors flex items-center gap-2 group">
              <span className="text-zinc-800 group-hover:text-cyan-500">[{'>'}]</span> INSTAGRAM / @axiomrasa
            </a>
            <a href="https://github.com/axiomrasa" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors flex items-center gap-2 group">
              <span className="text-zinc-800 group-hover:text-cyan-500">[{'>'}]</span> GITHUB / Source_Logs
            </a>
            <a href="https://linkedin.com/in/axiomrasa" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors flex items-center gap-2 group">
              <span className="text-zinc-800 group-hover:text-cyan-500">[{'>'}]</span> LINKEDIN / Professional_Sync
            </a>
          </div>
        </motion.div>

        {/* Navigation Section */}
        <motion.div variants={itemVariants} className="flex justify-start">
          <Link href="/">
            <button className="group text-[10px] tracking-[0.5em] text-zinc-600 hover:text-white transition-all uppercase flex items-center gap-2">
              <span className="group-hover:-translate-x-1 transition-transform inline-block">{'<<<'}</span> REVERT_TO_ROOT
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}