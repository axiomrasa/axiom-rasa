'use client';

/**
 * @module RasaCore_Sequencer
 * @description Primary entry sequencer orchestrating state transitions, 
 * user telemetry feedback, and dashboard initialization.
 */

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { JetBrains_Mono } from 'next/font/google';

import { HUDRings } from '../components/atoms/HUDRings';
import { MenuButton } from '../components/molecules/MenuButton';
import { ChatSequencer } from '../components/organisms/ChatSequencer';
import { FeedbackGlow } from '../components/molecules/FeedbackGlow';
import { MENU_ITEMS, SYSTEM_TEXTS } from '../constants/site-data';

const mono = JetBrains_Mono({ subsets: ['latin'], display: 'swap' });

/**
 * @function AxiomOSContent
 * @description Core logic controller for the interface entry sequence and telemetry processing.
 */
function AxiomOSContent() {
  const [phase, setPhase] = useState<'intro' | 'feedback' | 'dashboard'>('intro');
  const [startTime] = useState(Date.now());
  const [feedbackMsg, setFeedbackMsg] = useState('');
  const searchParams = useSearchParams();

  /** * @description Persistence Layer: Bypasses intro sequence if an active session is detected.
   */
  useEffect(() => {
    if (searchParams.get('session') === 'active') {
      setPhase('dashboard');
    }
  }, [searchParams]);

  /**
   * @function handleInitiate
   * @description Processes user reaction time (telemetry) and triggers narrative feedback.
   */
  const handleInitiate = () => {
    const duration = (Date.now() - startTime) / 1000;
    const timeStr = duration.toFixed(2);
    
    const msg = duration < 10.0 
      ? `${timeStr}S FLAT. YOU’RE QUICK. I LIKE THAT. :)`
      : `${timeStr}S. TAKING YOUR TIME? I'M PATIENT.`;

    setFeedbackMsg(msg);
    setPhase('feedback');
  };

  return (
    <main className={`${mono.className} relative min-h-screen flex flex-col items-center justify-center p-6 bg-[#050505] text-white overflow-hidden`}>
      
      {/* Layer: Ambient Visual Matrix */}
      <div className="absolute inset-0 bg-radial-gradient from-purple-900/5 to-transparent pointer-events-none" />

      <AnimatePresence mode="wait">
        {/* State: Initialization Node */}
        {phase === 'intro' && (
          <motion.div 
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(20px)" }}
            className="flex flex-col items-center z-10"
          >
            <ChatSequencer />
            <button 
              onClick={handleInitiate} 
              className="mt-16 border-b border-zinc-900 px-10 py-3 hover:border-cyan-500 hover:text-white transition-all duration-500 text-[10px] tracking-[1.2em] uppercase font-mono text-zinc-500 group"
            >
              <span className="group-hover:drop-shadow-[0_0_10px_#22d3ee]">
                {SYSTEM_TEXTS.initiate}
              </span>
            </button>
          </motion.div>
        )}

        {/* State: Telemetry Feedback Loop */}
        {phase === 'feedback' && (
          <motion.div key="feedback" className="absolute inset-0 flex items-center justify-center p-6 z-20">
            <FeedbackGlow message={feedbackMsg} onComplete={() => setPhase('dashboard')} />
          </motion.div>
        )}

        {/* State: Primary Dashboard Node */}
        {phase === 'dashboard' && (
          <motion.div 
            key="dashboard"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="w-full max-w-5xl flex flex-col items-center z-10"
          >
            <div className="relative mb-24 flex items-center justify-center">
              <HUDRings />
              <motion.h2 
                initial={{ letterSpacing: "0.2em", opacity: 0 }}
                animate={{ letterSpacing: "0.8em", opacity: 1 }}
                className="text-sm md:text-base text-zinc-400 z-10 text-center uppercase font-mono px-4 ml-[0.8em]"
              >
                {SYSTEM_TEXTS.question}
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl px-4">
              {MENU_ITEMS.map((item, idx) => (
                <MenuButton 
                  key={item.id} 
                  label={item.label} 
                  href={item.href} 
                  delay={idx * 0.1} 
                  pulseSpeed={3} 
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Layer: Post-Process Scanlines */}
      <div className="absolute inset-0 pointer-events-none bg-[length:100%_2px] opacity-[0.03]" 
           style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0) 50%, rgba(255,255,255,0.1) 50%)` }} />
    </main>
  );
}

/**
 * @function AxiomOS
 * @description Entry wrapper with Hydration/Suspense boundary.
 */
export default function AxiomOS() {
  return (
    <Suspense fallback={<div className="bg-[#050505] min-h-screen" />}>
      <AxiomOSContent />
    </Suspense>
  );
}