'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ROTATING_TEXTS = [
  'smarter tools',
  'custom software',
  'AI platforms',
  'cloud systems',
];

export default function HeroContent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ROTATING_TEXTS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-instrument text-[32px] xs:text-[42px] sm:text-[60px] lg:text-[70px] xl:text-[80px] 2xl:text-[88px] leading-[1.05] sm:leading-[1.04] tracking-[-0.02em] text-navy"
        style={{ fontFamily: "var(--font-instrument-next), 'Instrument Serif', Georgia, serif" }}
      >
        <span 
          className="block font-normal text-navy"
        >
          We ship
        </span>
        <span 
          className="block italic font-normal text-[34px] xs:text-[44px] sm:text-[62px] lg:text-[72px] xl:text-[84px] 2xl:text-[92px] tracking-[-0.015em] overflow-hidden pr-2 sm:pr-4"
        >
          <AnimatePresence mode="wait">
            <motion.span 
              key={currentIndex}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -26 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="animated-dual-gradient inline-block pr-2"
              style={{
                backgroundImage: 'linear-gradient(100deg, #2563EB 0%, #06B6D4 48%, #2563EB 96%, #06B6D4 100%)',
                backgroundSize: '250% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'dual-gradient-flow 4.5s ease-in-out infinite',
              }}
            >
              {ROTATING_TEXTS[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </span>
        <span 
          className="block text-navy whitespace-nowrap text-[32px] xs:text-[42px] sm:text-[60px] lg:text-[70px] xl:text-[80px] 2xl:text-[88px] tracking-[-0.02em]"
        >
          <span className="font-normal not-italic">at </span>
          <span className="italic font-normal">high speed.</span>
        </span>
      </motion.h1>

      {/* Paragraph Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-[14.5px] sm:text-[17px] xl:text-[18.5px] 2xl:text-[19.5px] leading-[1.6] sm:leading-[1.65] text-slate-500 max-w-[530px] 2xl:max-w-[580px] font-normal"
      >
        From concept to production, we engineer custom software, scalable cloud systems, 
        and AI-driven enterprise solutions delivered at lightning speed.
      </motion.p>
    </div>
  );
}
