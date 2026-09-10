'use client';

import { motion } from 'framer-motion';

export default function GlobeVisualization() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-visible">
      {/* Top-Right Flying Paper Plane & "Shipped Faster Together." Pill */}
      <div className="absolute top-[2%] right-[2%] z-20 flex items-center gap-2 pointer-events-none hidden sm:flex">
        {/* Shipped Faster Together Badge */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center gap-2 px-3.5 py-1.5 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-lg shadow-slate-200/60"
        >
          <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-cobalt">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </div>
          <span className="text-[10.5px] font-extrabold text-navy whitespace-nowrap tracking-tight">
            Shipped Faster Together.
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cobalt" />
        </motion.div>

        {/* Paper Plane Vector */}
        <motion.div
          animate={{
            y: [-3, 3, -3],
            rotate: [-2, 2, -2],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="text-cobalt drop-shadow-md"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="transform -rotate-12">
            <path
              d="M22 2L11 13"
              stroke="#2563EB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 2L15 22L11 13L2 9L22 2Z"
              fill="#2563EB"
              stroke="#2563EB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* Studio Depth: Soft Blurred Plant Leaf on Far Right Edge */}
      <div className="absolute -right-8 bottom-10 w-28 h-44 opacity-25 blur-sm pointer-events-none hidden xl:block select-none">
        <svg viewBox="0 0 100 160" fill="none" className="w-full h-full text-emerald-800">
          <path
            d="M 90,160 Q 50,110 30,70 Q 15,35 60,10 Q 95,50 85,110 Z"
            fill="currentColor"
            opacity="0.6"
          />
          <path
            d="M 100,140 Q 65,90 55,40 Q 80,20 95,60 Z"
            fill="currentColor"
            opacity="0.4"
          />
        </svg>
      </div>
    </div>
  );
}
