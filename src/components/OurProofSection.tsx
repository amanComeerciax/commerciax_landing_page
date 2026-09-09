'use client';

import { motion } from 'framer-motion';
import {
  Clock,
  Users,
  Layers,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

const proofCards = [
  {
    icon: Clock,
    title: 'Outcomes, Not Hours',
    description:
      'Fixed weekly outcomes eliminate planning drag and billable-hour friction.',
    stat: '100%',
    statLabel: 'OUTCOME FOCUSED',
  },
  {
    icon: Users,
    title: 'AI-Native Engineering Team',
    description:
      'Senior engineers trained to ship real systems — not experiments.',
    stat: '7+ yrs',
    statLabel: 'AVG. EXPERIENCE',
  },
  {
    icon: Layers,
    title: 'Internal Agent System',
    description:
      'AI agents accelerate specs, code, testing, and deployment in parallel.',
    stat: '24/7',
    statLabel: 'BUILD · TEST · DEPLOY',
  },
  {
    icon: ShieldCheck,
    title: 'Built for Production',
    description:
      'Enterprise constraints are addressed early, not after "success."',
    stat: '99.99%',
    statLabel: 'PRODUCTION READY',
  },
];

export default function OurProofSection() {
  return (
    <section
      id="proof"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#FAF8F5] text-navy overflow-hidden"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-12 right-0 w-[550px] h-[550px] bg-gradient-to-b from-blue-100/35 via-indigo-50/20 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-blue-100/25 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Decorative Curved Arc Wireframe Line in Background */}
      <div className="hidden lg:block absolute -top-16 right-6 w-[700px] h-[700px] pointer-events-none z-0 opacity-40">
        <svg viewBox="0 0 700 700" fill="none" className="w-full h-full">
          <circle
            cx="480"
            cy="220"
            r="380"
            stroke="#93C5FD"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            fill="none"
          />
        </svg>
      </div>

      <div className="site-container relative px-4 sm:px-8 lg:px-12 max-w-[1340px] mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start mb-8">
          {/* ========================================================== */}
          {/* LEFT COLUMN: HEADLINE & EDITORIAL PROOF                    */}
          {/* ========================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span className="text-[11px] font-mono tracking-[0.2em] font-bold text-slate-700 uppercase">
                OUR PROOF
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h2 className="font-instrument text-[44px] sm:text-[56px] lg:text-[64px] font-normal text-[#0A1628] leading-[1.04] tracking-[-0.03em] mb-6">
              We Don’t <br />
              Just Claim. <br />
              <span className="italic text-blue-600">We Prove.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 font-dm-sans leading-relaxed mb-8 max-w-md">
              Progress accelerates when outcomes are fixed, systems are built weekly, and production requirements are handled early — not as an afterthought.
            </p>

            {/* Editorial Tag */}
            <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.2em] text-slate-500 uppercase mb-12 lg:mb-16">
              <span className="w-6 h-[1.5px] bg-slate-400" />
              <span>REAL WORK. MEASURABLE IMPACT.</span>
            </div>

            {/* Bottom-Left Decorative Arc Tag */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="text-[10px] font-mono tracking-[0.22em] text-slate-400 uppercase leading-snug border-b border-slate-300 pb-1">
                BUILD <br />
                LAUNCH <br />
                SCALE
              </div>
            </div>
          </div>

          {/* ========================================================== */}
          {/* RIGHT COLUMN: 4 HORIZONTAL PROOF CARDS                    */}
          {/* ========================================================== */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            {proofCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="group bg-white/85 hover:bg-white rounded-2xl sm:rounded-[22px] p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-5 cursor-pointer"
                >
                  {/* Left: Icon Badge & Content */}
                  <div className="flex items-start sm:items-center gap-4 sm:gap-5 flex-1">
                    {/* Icon Badge */}
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#EEF4FF] border border-blue-200/80 flex items-center justify-center text-blue-600 shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      <IconComp className="w-6 h-6 stroke-[1.8] text-blue-600" />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="font-instrument italic text-[22px] sm:text-[25px] font-normal text-[#0A1628] leading-tight group-hover:text-blue-600 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-[13px] text-slate-600 font-dm-sans leading-relaxed mt-1">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Stat Metric & Label with Vertical Divider */}
                  <div className="flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-center border-t sm:border-t-0 sm:border-l border-slate-200/80 pt-3 sm:pt-0 sm:pl-6 shrink-0">
                    <div className="font-instrument italic text-[32px] sm:text-[38px] font-normal text-[#0A1628] leading-none tracking-tight">
                      {card.stat}
                    </div>
                    <div className="text-[9.5px] font-mono tracking-[0.16em] text-slate-500 uppercase mt-1">
                      {card.statLabel}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Bottom Row: Thin Line + CTA Button */}
            <div className="pt-4 flex items-center justify-between gap-4">
              <div className="h-[1px] bg-slate-200 flex-1" />
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0A1628] hover:bg-slate-800 text-white font-dm-sans text-[13px] font-semibold transition-all shadow-md shadow-navy/15 hover:-translate-y-0.5 group shrink-0 cursor-pointer"
              >
                <span>See how we work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
