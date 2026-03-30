'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { JetBrains_Mono } from 'next/font/google';

import { HUDRings } from '../components/atoms/HUDRings';
import { MenuButton } from '../components/molecules/MenuButton';
import { ChatSequencer } from '../components/organisms/ChatSequencer';
import { FeedbackGlow } from '../components/molecules/FeedbackGlow';
import { MENU_ITEMS, SYSTEM_TEXTS } from '../constants/site-data';

const mono = JetBrains_Mono({ subsets: ['latin'], display: 'swap' });

export default function AxiomOS() {
  const [phase, setPhase] = useState<'intro' | 'feedback' | 'dashboard'>('intro');
  const [startTime] = useState(Date.now());
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleInitiate = () => {
    const duration = (Date.now() - startTime) / 1000;
    const timeStr = duration.toFixed(2);
    
    let msg = duration < 10.0 
      ? `${timeStr}S FLAT. YOU’RE QUICK. I LIKE THAT. :)`
      : `${timeStr}S. TAKING YOUR TIME? I'M PATIENT.`;

    setFeedbackMsg(msg);
    setPhase('feedback');
  };

  return (
    <main className={`${mono.className} relative min-h-screen flex flex-col items-center justify-center p-6 bg-black text-white`}>
      <AnimatePresence mode="wait">
        
        {phase === 'intro' && (
          <motion.div 
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            className="flex flex-col items-center"
          >
            <ChatSequencer />
            <button 
              onClick={handleInitiate} 
              className="mt-16 border-b border-zinc-800 px-10 py-2 hover:border-white hover:text-white transition-all duration-300 text-[10px] tracking-[1em] uppercase font-mono text-zinc-500"
            >
              {SYSTEM_TEXTS.initiate}
            </button>
          </motion.div>
        )}

        {phase === 'feedback' && (
          <motion.div key="feedback" className="absolute inset-0 flex items-center justify-center p-6">
            <FeedbackGlow message={feedbackMsg} onComplete={() => setPhase('dashboard')} />
          </motion.div>
        )}

        {phase === 'dashboard' && (
          <motion.div 
            key="dashboard"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-5xl flex flex-col items-center"
          >
            <div className="relative mb-20 flex items-center justify-center">
              <HUDRings />
              <h2 className="text-lg md:text-xl tracking-[0.7em] text-zinc-500 z-10 text-center uppercase font-mono px-4">
                {SYSTEM_TEXTS.question}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl px-4">
              {MENU_ITEMS.map((item, idx) => (
                <MenuButton key={item.id} label={item.label} href={item.href} delay={idx * 0.05} pulseSpeed={2} />
              ))}
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </main>
  );
}