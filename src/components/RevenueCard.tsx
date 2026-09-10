'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function RevenueCard() {
  const [value, setValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const target = 1280;
    const duration = 1200;
    let startTime: number | undefined;

    const animate = (timestamp: number) => {
      if (startTime === undefined) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        animRef.current = requestAnimationFrame(animate);
      }
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isVisible]);

  const formatted = value.toLocaleString();

  return (
    <div className="bg-slate-50/70 rounded-xl p-1.5 xs:p-2.5 sm:p-4 border border-slate-100 flex flex-col justify-between hover:bg-slate-50 transition-colors shadow-xs">
      <span className="text-[8.5px] xs:text-[9.5px] sm:text-[11px] font-medium font-dm-sans text-slate-400 truncate">Deploys</span>
      <div className="flex items-end justify-between mt-0.5 sm:mt-1">
        <div>
          <span className="text-[15px] xs:text-[18px] sm:text-[24px] font-extrabold font-plus-jakarta text-navy tracking-tight">{formatted}+</span>
          <div className="flex items-center gap-1 mt-0.5 sm:mt-1 text-[8px] xs:text-[9px] sm:text-[10.5px] font-medium font-dm-sans text-blue-600">
            <motion.span
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              ↑
            </motion.span>
            <span className="hidden xs:inline">99.8% Success</span>
            <span className="xs:hidden">99.8%</span>
          </div>
        </div>

        {/* Mini continuous active build activity bars */}
        <div className="flex items-end gap-1.5 h-8 pb-1">
          {[
            { h: ['35%', '85%', '50%', '35%'], d: 2.0, delay: 0 },
            { h: ['55%', '30%', '90%', '55%'], d: 2.3, delay: 0.25 },
            { h: ['75%', '45%', '65%', '75%'], d: 2.1, delay: 0.5 },
            { h: ['95%', '60%', '100%', '95%'], d: 2.4, delay: 0.15 },
          ].map((bar, i) => (
            <motion.div
              key={i}
              className="w-1.5 sm:w-2 bg-cobalt rounded-t-[2px]"
              style={{ opacity: 0.45 + i * 0.18 }}
              animate={{ height: bar.h }}
              transition={{
                duration: bar.d,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: bar.delay,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
