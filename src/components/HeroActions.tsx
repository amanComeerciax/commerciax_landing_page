'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Users } from 'lucide-react';
import OriginButton from './OriginButton';

export default function HeroActions() {
  return (
    <div className="flex flex-col gap-6 relative">
      {/* Action Buttons with Origin Pro Effect */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap items-center gap-3 sm:gap-4"
      >
        <OriginButton
          href="#contact"
          id="cta-book-call"
          variant="primary"
          size="lg"
          icon={<ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />}
        >
          Book a call
        </OriginButton>
        <OriginButton
          href="#services"
          id="cta-explore"
          variant="secondary"
          size="lg"
        >
          Explore IT solutions
        </OriginButton>
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
