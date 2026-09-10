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
        className="font-plus-jakarta font-extrabold text-[34px] xs:text-[44px] sm:text-[62px] lg:text-[72px] xl:text-[82px] 2xl:text-[90px] leading-[1.05] sm:leading-[1.04] tracking-[-0.03em] text-[#0A1628]"
      >
        <span className="block font-extrabold text-[#0A1628]">
          We ship
        </span>
        <span className="block font-instrument italic font-normal text-[36px] xs:text-[46px] sm:text-[64px] lg:text-[74px] xl:text-[86px] 2xl:text-[94px] tracking-[-0.015em] overflow-hidden pr-2 sm:pr-4">
          <AnimatePresence mode="wait">
            <motion.span 
              key={currentIndex}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -26 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="text-blue-600 inline-block pr-2"
            >
              {ROTATING_TEXTS[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </span>
        <span className="block text-[#0A1628] whitespace-nowrap text-[34px] xs:text-[44px] sm:text-[62px] lg:text-[72px] xl:text-[82px] 2xl:text-[90px] tracking-[-0.03em]">
          <span className="font-extrabold">at </span>
          <span className="font-instrument italic font-normal text-blue-600">high speed.</span>
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
