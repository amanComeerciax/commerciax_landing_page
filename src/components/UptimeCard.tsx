'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function UptimeCard() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const target = 99.9;
    const duration = 1200;
    let startTime: number | undefined;

    const animate = (timestamp: number) => {
      if (startTime === undefined) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Number((target * eased).toFixed(1)));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isVisible]);

  const circumference = 2 * Math.PI * 31;
  const strokeDashoffset = circumference - (count / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-between h-full py-0.5">
      <div className="flex items-center gap-1 sm:gap-1.5 self-start">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
        </span>
        <span className="text-[9px] xs:text-[10px] sm:text-[11px] font-medium font-dm-sans text-slate-400 tracking-tight">Uptime</span>
      </div>

      <div className="relative w-[50px] h-[50px] xs:w-[60px] xs:h-[60px] sm:w-[72px] sm:h-[72px] flex items-center justify-center my-0.5 sm:my-1.5">
        <svg viewBox="0 0 72 72" className="w-full h-full -rotate-90">
          <circle cx="36" cy="36" r="31" fill="none" stroke="#F1F5F9" strokeWidth="5" />
          <circle
            cx="36"
            cy="36"
            r="31"
            fill="none"
            stroke="#2563EB"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: 'stroke-dashoffset 0.15s ease-out' }}
          />
        </svg>

        {/* Continuous rotating glowing tracer along circumference */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#3B82F6] absolute top-[2px] left-1/2 -translate-x-1/2" />
        </motion.div>

        <motion.span
          animate={{ scale: [1, 1.025, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute text-[12px] xs:text-[14px] sm:text-[16px] font-extrabold font-plus-jakarta text-navy tracking-tight"
        >
          {count > 0 ? count.toFixed(1) : '0'}%
        </motion.span>
      </div>

      <div className="flex flex-col items-center text-center">
        <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-medium font-dm-sans text-emerald-600 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
          SLA 99.9%
        </span>
        <span className="text-[7px] xs:text-[8px] sm:text-[8.5px] text-slate-400 font-dm-sans font-normal whitespace-nowrap hidden xs:inline">
          Zero downtime
        </span>
      </div>
    </div>
  );
}
