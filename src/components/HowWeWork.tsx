'use client';

import { motion } from 'framer-motion';
import { FileText, Layers } from 'lucide-react';

export default function HowWeWork() {
  const steps = [
    {
      num: '01',
      title: 'System Review',
      description:
        'We align early on the problem, constraints, and decision flow — clarifying users, data dependencies, and success criteria before execution begins.',
      action: 'DISCOVER & PLAN',
      badgeBg: 'bg-[#EEF4FF] border-[#BFDBFE]',
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-[25px] h-[25px] text-blue-600 fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="8" y1="13" x2="16" y2="13" />
          <line x1="8" y1="17" x2="13" y2="17" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Weekly Delivery',
      description:
        'Work progresses in steady weekly increments, with continuous integration and regular reviews that keep momentum high while allowing scope to adapt.',
      action: 'BUILD & ITERATE',
      badgeBg: 'bg-[#FFF7ED] border-[#FED7AA]',
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-[25px] h-[25px] text-[#C2410C] fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round"
        >
          <rect x="4" y="11" width="3.6" height="9" rx="1.8" />
          <rect x="10.2" y="5" width="3.6" height="15" rx="1.8" />
          <rect x="16.4" y="8" width="3.6" height="12" rx="1.8" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Production',
      description:
        'Security, reliability, and operational readiness are built in from the start — with clear documentation and smooth handover to support long-term use.',
      action: 'LAUNCH & SCALE',
      badgeBg: 'bg-[#EEF4FF] border-[#BFDBFE]',
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-[25px] h-[25px] text-blue-600 fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round"
        >
          <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
          <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
          <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="how-we-work"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#FAF8F5] text-navy overflow-hidden"
    >
      {/* Soft Ambient Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-blue-100/30 via-indigo-50/15 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      {/* Blueprint Crosshair Accent on Right */}
      <div className="hidden lg:block absolute top-36 right-36 w-14 h-14 pointer-events-none opacity-25">
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-slate-400" />
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-slate-400" />
      </div>

      {/* Left Editorial Side Label */}
      <div className="hidden lg:block absolute left-8 xl:left-14 top-1/2 -translate-y-1/2 z-10 select-none pointer-events-none">
        <div className="flex flex-col gap-1 text-[10px] font-mono tracking-[0.2em] uppercase text-slate-400 font-medium">
          <span className="font-bold text-slate-500">IDEAS</span>
          <span>INTO REAL</span>
          <span>OUTCOMES</span>
          <div className="w-5 h-[1.5px] bg-slate-300 mt-2" />
        </div>
      </div>

      {/* Right Editorial Side Label */}
      <div className="hidden lg:block absolute right-8 xl:right-14 top-24 z-10 select-none pointer-events-none">
        <div className="flex flex-col gap-1 text-[10px] font-mono tracking-[0.2em] uppercase text-slate-400 font-medium border-l border-slate-300/90 pl-3">
          <span className="font-bold text-slate-500">BUILD</span>
          <span>LAUNCH</span>
          <span>SCALE</span>
          <span className="font-bold text-slate-600">FASTER</span>
        </div>
      </div>

      <div className="site-container relative px-4 sm:px-8 lg:px-12 max-w-[1240px] mx-auto z-10">
        {/* ========================================================== */}
        {/* 1. CENTERED EDITORIAL HEADLINE BLOCK                       */}
        {/* ========================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200/90 shadow-xs mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.2em] font-bold text-slate-700 uppercase">
              HOW WE WORK
            </span>
          </motion.div>

          {/* Main 3-Line Editorial Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[44px] sm:text-[60px] lg:text-[72px] leading-[1.04] tracking-[-0.03em] text-[#0A1628]"
          >
            <span className="font-instrument italic font-normal text-blue-600">
              10x Speed{' '}
            </span>
            <span className="font-plus-jakarta font-extrabold text-[#0A1628]">
              To
            </span>
            <br />
            <span className="font-plus-jakarta font-extrabold text-[#0A1628]">
              Production.
            </span>
            <br />
            <span className="font-instrument italic font-normal text-[#1E293B]">
              By Design.
            </span>
          </motion.h2>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-[15px] sm:text-[16px] text-slate-600 font-dm-sans leading-relaxed max-w-xl mx-auto"
          >
            AI-native engineers and internal agent systems work in parallel — compressing the path from problem definition to a running production system.
          </motion.p>
        </div>

        {/* ========================================================== */}
        {/* 2. 3 CARDS ROW WITH CONNECTING CURVED FLIGHT LINE          */}
        {/* ========================================================== */}
        <div className="relative pt-12 sm:pt-14 max-w-[1080px] mx-auto">
          {/* Continuous Curved Flight Trajectory Line */}
          <div className="hidden md:block absolute top-[-6px] left-[-8%] right-[-8%] w-[116%] h-[150px] pointer-events-none select-none z-0">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1100 150"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Curved Trajectory Path */}
              <path
                d="M 10,75 C 90,110 140,25 240,25 C 340,25 390,105 480,105 C 570,105 620,25 720,25 C 820,25 870,105 960,105 C 1030,105 1070,30 1100,-10"
                stroke="#CBD5E1"
                strokeWidth="1.3"
                strokeDasharray="4 4"
                fill="none"
              />

              {/* Far Left Focal Node */}
              <circle cx="10" cy="75" r="10" fill="#2563EB" fillOpacity="0.12" />
              <circle cx="10" cy="75" r="4.5" fill="#2563EB" />

              {/* Inter-Card Circular Node 1 */}
              <circle cx="480" cy="105" r="4.5" stroke="#64748B" strokeWidth="1.6" fill="#FAF8F5" />
              <circle cx="480" cy="105" r="1.5" fill="#64748B" />

              {/* Inter-Card Circular Node 2 */}
              <circle cx="960" cy="105" r="4.5" stroke="#64748B" strokeWidth="1.6" fill="#FAF8F5" />
              <circle cx="960" cy="105" r="1.5" fill="#64748B" />

              {/* Far Right Focal Node */}
              <circle cx="1100" cy="-10" r="10" fill="#2563EB" fillOpacity="0.12" />
              <circle cx="1100" cy="-10" r="4.5" fill="#2563EB" />
            </svg>
          </div>

          {/* 3 Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 relative z-10">
            {steps.map((step, idx) => {
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="group relative bg-[#FDFBF7] rounded-[22px] p-7 sm:p-8 pt-9 pb-8 border border-[#E7E2D9] shadow-[0_10px_32px_-8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_40px_-6px_rgba(37,99,235,0.07)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Step Number placed directly above top-left edge */}
                  <span className="absolute -top-7 left-6 sm:left-7 font-instrument italic text-[38px] sm:text-[42px] font-normal text-slate-400 select-none pointer-events-none leading-none">
                    {step.num}
                  </span>

                  {/* Centered Overlapping Top Icon Badge */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                    <div
                      className={`w-[54px] h-[54px] rounded-[18px] border-[1.5px] flex items-center justify-center shadow-xs transition-transform group-hover:scale-105 duration-300 ${step.badgeBg}`}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="mt-3">
                    {/* Title */}
                    <h3 className="font-instrument italic text-[24px] sm:text-[26px] font-normal text-[#0A1628] mb-3 leading-snug">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[13px] sm:text-[13.5px] text-slate-600 font-dm-sans leading-[1.68]">
                      {step.description}
                    </p>
                  </div>

                  {/* Action Link at Bottom */}
                  <div className="mt-8 flex items-center">
                    <span className="inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.14em] text-blue-600 uppercase group-hover:text-blue-700 transition-colors">
                      <span className="text-blue-600 font-bold">→</span>
                      <span>{step.action}</span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ========================================================== */}
        {/* 3. BOTTOM DIVIDER BAR WITH EDITORIAL LABELS                */}
        {/* ========================================================== */}
        <div className="mt-20 sm:mt-28 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 font-mono text-[10.5px] tracking-[0.18em] uppercase">
          <span className="font-semibold text-slate-500 shrink-0">
            A CLEARER PATH FORWARD
          </span>

          {/* Dividing Hairline */}
          <div className="hidden sm:block flex-1 h-[1px] bg-slate-200 mx-6" />

          <span className="font-semibold text-slate-500 shrink-0">
            BUILT FOR WHAT&apos;S NEXT
          </span>
        </div>
      </div>
    </section>
  );
}
