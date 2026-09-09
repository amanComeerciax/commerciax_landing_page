'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Users } from 'lucide-react';

export default function HeroActions() {
  return (
    <div className="flex flex-col gap-6 relative">
      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap items-center gap-3 sm:gap-4"
      >
        <a
          href="#"
          id="cta-book-call"
          className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 xs:px-7 xs:py-3.5 sm:px-8 sm:py-4 bg-navy text-white text-[13.5px] xs:text-[15px] sm:text-[16px] font-semibold rounded-full hover:bg-navy-light transition-all duration-200 hover:shadow-xl hover:shadow-navy/20 hover:-translate-y-0.5 active:translate-y-0"
        >
          Book a call
          <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
        <a
          href="#"
          id="cta-explore"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 xs:px-7 xs:py-3.5 sm:px-8 sm:py-4 bg-white/85 hover:bg-white text-navy text-[13.5px] xs:text-[15px] sm:text-[16px] font-semibold rounded-full border border-slate-200/90 hover:border-slate-300 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
        >
          Explore IT solutions
        </a>
      </motion.div>

      {/* Feature Highlights Row for IT Company */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-wrap items-center gap-3.5 xs:gap-5 sm:gap-7 pt-1"
      >
        {[
          { icon: Zap, label: 'Rapid delivery' },
          { icon: Shield, label: 'Enterprise security' },
          { icon: Users, label: 'Dedicated IT team' },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 text-[12.5px] xs:text-[13.5px] sm:text-[14.5px] text-slate-600 font-medium font-dm-sans"
          >
            <div className="w-5 h-5 xs:w-6 xs:h-6 rounded-md bg-blue-50 text-cobalt flex items-center justify-center shrink-0">
              <item.icon className="w-3 h-3 xs:w-3.5 xs:h-3.5" />
            </div>
            <span>{item.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
