'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ProjectsCard() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const target = 148;
    const duration = 1200;
    let startTime: number | undefined;

    const animate = (timestamp: number) => {
      if (startTime === undefined) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));

      if (progress < 1) {
        animRef.current = requestAnimationFrame(animate);
      }
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isVisible]);

  return (
    <div className="bg-slate-50/70 rounded-xl p-1.5 xs:p-2.5 sm:p-4 border border-slate-100 flex flex-col justify-between hover:bg-slate-50 transition-colors shadow-xs">
      <span className="text-[8.5px] xs:text-[9.5px] sm:text-[11px] font-medium font-dm-sans text-slate-400 truncate">Projects</span>
      <div className="flex items-baseline justify-between mt-0.5 sm:mt-1">
        <span className="text-[15px] xs:text-[18px] sm:text-[24px] font-extrabold font-plus-jakarta text-navy tracking-tight">{count}+</span>
        <motion.span
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="text-[7px] xs:text-[8px] sm:text-[9px] font-medium font-dm-sans text-cobalt bg-blue-50 border border-blue-100/60 px-1 sm:px-1.5 py-0.5 rounded shadow-xs hidden xs:inline-block"
        >
          On-Time
        </motion.span>
      </div>
      {/* Smooth continuous animated blue delivery wave line */}
      <div className="w-full h-8 mt-1.5 relative overflow-hidden">
        <svg viewBox="0 0 100 28" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,20 Q20,26 40,16 T80,8 T100,14 L100,28 L0,28 Z"
            fill="url(#waveGradient)"
            animate={{
              d: [
                'M0,20 Q20,26 40,16 T80,8 T100,14 L100,28 L0,28 Z',
                'M0,22 Q20,23 40,14 T80,10 T100,13 L100,28 L0,28 Z',
                'M0,20 Q20,26 40,16 T80,8 T100,14 L100,28 L0,28 Z',
              ],
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.path
            d="M0,20 Q20,26 40,16 T80,8 T100,14"
            fill="none"
            stroke="#2563EB"
            strokeWidth="2.4"
            strokeLinecap="round"
            animate={{
              d: [
                'M0,20 Q20,26 40,16 T80,8 T100,14',
                'M0,22 Q20,23 40,14 T80,10 T100,13',
                'M0,20 Q20,26 40,16 T80,8 T100,14',
              ],
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Continuous tracer dot following the delivery wave */}
          <motion.circle
            r="2.2"
            fill="#2563EB"
            stroke="#FFFFFF"
            strokeWidth="1"
            animate={{
              cx: [0, 20, 40, 60, 80, 100],
              cy: [20, 24, 16, 12, 8, 14],
              opacity: [0, 1, 1, 1, 1, 0],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </svg>
      </div>
    </div>
  );
}
