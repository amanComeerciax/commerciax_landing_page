'use client';

import { motion } from 'framer-motion';

const bars = [
  { base: 35, min: 28, max: 42, label: 'Sprint 1' },
  { base: 50, min: 40, max: 58, label: 'Sprint 2' },
  { base: 62, min: 52, max: 70, label: 'Sprint 3' },
  { base: 75, min: 65, max: 82, label: 'Sprint 4' },
  { base: 88, min: 78, max: 94, label: 'Sprint 5' },
  { base: 100, min: 88, max: 100, label: 'Sprint 6' },
];

export default function RevenueChart() {
  return (
    <div className="flex flex-col items-start gap-1 sm:gap-2 pt-0.5 sm:pt-1 w-full max-w-[160px]">
      {/* Badge: Sprint Velocity with live pulse */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: [1, 1.025, 1] }}
        transition={{
          opacity: { delay: 0.4, duration: 0.4 },
          scale: { delay: 1, duration: 2.8, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="inline-flex items-center gap-1 xs:gap-1.5 px-1.5 xs:px-2.5 py-0.5 xs:py-1 rounded-md bg-emerald-50 border border-emerald-100/80 shadow-xs"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
        </span>
        <span className="text-[8.5px] xs:text-[10px] font-bold font-plus-jakarta text-emerald-600 flex items-center gap-0.5">
          +62%
        </span>
        <span className="text-[7.5px] xs:text-[9.5px] font-medium font-dm-sans text-emerald-700/70 hidden xs:inline">Velocity</span>
      </motion.div>

      {/* Ascending Blue Gradient Bars with continuous rhythmic wave */}
      <div className="flex items-end gap-1 xs:gap-1.5 sm:gap-2 h-[65px] xs:h-[85px] sm:h-[105px] w-full pt-1 sm:pt-2">
        {bars.map((bar, index) => (
          <motion.div
            key={index}
            initial={{ height: '0%' }}
            animate={{
              height: [`${bar.min}%`, `${bar.max}%`, `${bar.base}%`, `${bar.min}%`],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.22,
            }}
            className="flex-1 bg-gradient-to-t from-cobalt-dark via-cobalt to-sky-400 rounded-t-[3px] sm:rounded-t-[4px] hover:brightness-110 transition-colors duration-200 cursor-pointer relative group shadow-sm shadow-cobalt/20"
          >
            {/* Tooltip on hover */}
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none bg-navy text-white text-[9px] font-bold py-0.5 px-1.5 rounded shadow whitespace-nowrap z-20">
              {bar.label}: {bar.base}% speed
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
