'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface MenuButtonProps {
  label: string;
  delay: number;
  pulseSpeed: number;
  href: string;
}

export const MenuButton = ({ label, delay, pulseSpeed, href }: MenuButtonProps) => (
  <Link href={href} className="w-full">
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: [0.4, 1, 0.4], y: 0 }}
      transition={{ 
        opacity: { repeat: Infinity, duration: pulseSpeed, delay },
        y: { delay: delay + 0.5 }
      }}
      className="relative w-full p-8 md:p-10 border border-zinc-900 bg-zinc-950/20 hover:border-white/40 transition-all duration-500 group overflow-hidden flex items-center justify-center"
    >
      <span className="text-xl md:text-2xl font-bold uppercase tracking-tighter bg-gradient-to-br from-zinc-200 to-zinc-500 bg-clip-text text-transparent group-hover:from-white group-hover:to-zinc-400 transition-all font-mono">
        {label}
      </span>
      <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-zinc-800 group-hover:border-white/50" />
      <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-zinc-800 group-hover:border-white/50" />
    </motion.button>
  </Link>
);