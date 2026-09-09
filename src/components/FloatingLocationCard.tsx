'use client';

import { motion } from 'framer-motion';

interface FloatingLocationCardProps {
  city: string;
  duration: string;
  delay: number;
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  animationDuration?: number;
}

export default function FloatingLocationCard({
  city,
  duration,
  delay,
  position = {},
  animationDuration = 5,
}: FloatingLocationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      style={{
        position: 'absolute',
        ...position,
        animation: `float-card ${animationDuration}s ease-in-out infinite`,
        animationDelay: `${delay * 0.4}s`,
        boxShadow: '0 20px 40px -10px rgba(10, 22, 40, 0.14), 0 8px 18px -4px rgba(10, 22, 40, 0.08)',
      }}
      className="z-20 flex items-center gap-3.5 px-4 py-3 bg-white/98 backdrop-blur-md rounded-2xl border border-slate-200/90 hover:border-slate-300 transition-all duration-300 cursor-default select-none pointer-events-auto shadow-md"
    >
      {/* 3D Isometric Blue Cube Icon matching Reference Image */}
      <div className="w-8 h-8 flex items-center justify-center shrink-0 drop-shadow-sm">
        <svg width="30" height="30" viewBox="0 0 28 28" fill="none">
          {/* Top facet */}
          <polygon points="14,3 24,8.5 14,14 4,8.5" fill="#38BDF8" />
          {/* Left facet */}
          <polygon points="4,8.5 14,14 14,25 4,19.5" fill="#2563EB" />
          {/* Right facet */}
          <polygon points="14,14 24,8.5 24,19.5 14,25" fill="#1D4ED8" />
          {/* Top highlight shine */}
          <line x1="14" y1="3" x2="14" y2="14" stroke="white" strokeWidth="0.8" strokeOpacity="0.7" />
          <line x1="4" y1="8.5" x2="14" y2="14" stroke="white" strokeWidth="0.5" strokeOpacity="0.4" />
          <line x1="24" y1="8.5" x2="14" y2="14" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className="text-[13px] font-extrabold text-navy leading-tight tracking-tight">
          {city}
        </span>
        <span className="text-[11px] text-slate-400 font-semibold tracking-normal mt-0.5">
          {duration}
        </span>
      </div>
    </motion.div>
  );
}
