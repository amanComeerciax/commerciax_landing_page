'use client';

import { motion } from 'framer-motion';

const avatars = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces&auto=format&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces&auto=format&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop&crop=faces&auto=format&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces&auto=format&q=80',
];

export default function IdeasImpactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.4 }}
      style={{
        boxShadow: '0 24px 50px -12px rgba(10, 22, 40, 0.18), 0 10px 24px -6px rgba(10, 22, 40, 0.08)',
      }}
      className="absolute -bottom-6 right-3 sm:right-8 z-30 flex items-center gap-3.5 px-4 py-3 bg-white/98 backdrop-blur-md rounded-2xl border border-slate-200/90 hover:border-slate-300 transition-all duration-300 cursor-default shadow-lg"
    >
      {/* Commerciax Logo Icon */}
      <div className="w-9 h-9 rounded-full bg-cobalt flex items-center justify-center shrink-0 shadow-md shadow-cobalt/30">
        <span className="text-white font-black text-[14px] tracking-tighter">C</span>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[13px] font-extrabold text-navy leading-tight">Ideas to Impact</span>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {avatars.map((url, i) => (
              <img
                key={i}
                src={url}
                alt="Team member"
                className="w-5 h-5 rounded-full object-cover border-[1.5px] border-white ring-1 ring-slate-100 shadow-xs"
              />
            ))}
          </div>
          <span className="text-[10px] font-extrabold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
            +200
          </span>
        </div>
      </div>
    </motion.div>
  );
}
