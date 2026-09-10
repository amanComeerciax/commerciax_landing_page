'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const memberAvatars = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces&auto=format&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces&auto=format&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop&crop=faces&auto=format&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces&auto=format&q=80',
];

export default function TeamCard() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const target = 48;
    const duration = 1100;
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
      <div className="flex items-center justify-between">
        <span className="text-[8.5px] xs:text-[9.5px] sm:text-[11px] font-medium font-dm-sans text-slate-400 truncate">Engineers</span>
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600" />
        </span>
      </div>
      <div className="mt-0.5 sm:mt-1">
        <span className="text-[15px] xs:text-[18px] sm:text-[24px] font-extrabold font-plus-jakarta text-navy tracking-tight">{count}+</span>
      </div>
      {/* 4 real engineer avatars with continuous subtle micro-float */}
      <div className="flex items-center gap-0.5 sm:gap-1 mt-1 sm:mt-2">
        <div className="flex -space-x-1.5 xs:-space-x-2">
          {memberAvatars.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt="Senior Engineer"
              className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 rounded-full object-cover border-[1.5px] border-white ring-1 ring-slate-100 shadow-xs"
              animate={{ y: [0, -2.5, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.35,
              }}
            />
          ))}
        </div>
        <motion.span
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          className="text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] font-medium font-dm-sans text-slate-600 bg-slate-200/80 px-1 xs:px-1.5 sm:px-2 py-0.5 rounded-full ml-0.5 sm:ml-1"
        >
          +44
        </motion.span>
      </div>
    </div>
  );
}
