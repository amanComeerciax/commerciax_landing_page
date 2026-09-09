'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, Globe, Zap } from 'lucide-react';

const sprintSteps = [
  {
    completed: true,
    title: 'Discovery Call',
    subtitle: 'Understand goals & constraints',
  },
  {
    completed: true,
    title: 'Custom Roadmap',
    subtitle: 'Tailored to your use case',
  },
  {
    completed: true,
    title: 'Team Alignment',
    subtitle: 'Engineers, tools & timelines',
  },
  {
    completed: false,
    title: 'Kickoff',
    subtitle: 'From idea to execution',
  },
];

export default function WelcomeCTASection() {
  return (
    <section
      id="contact"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#FAF8F5] text-navy overflow-hidden"
    >
      {/* Ambient Lighting Background Glows */}
      <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-gradient-to-b from-blue-100/35 via-indigo-50/20 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-blue-100/25 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="site-container relative px-4 sm:px-8 lg:px-12 max-w-[1340px] mx-auto z-10">
        {/* ========================================================== */}
        {/* MAIN 2-COLUMN GRID (LEFT: HEADLINE & CTA | RIGHT: WORKSPACE)*/}
        {/* ========================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* ---------------- LEFT COLUMN (6 COLS) ---------------- */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span className="text-[11px] font-mono tracking-[0.2em] font-bold text-slate-700 uppercase">
                WELCOME TO COMMERCIAX
              </span>
            </div>

            {/* Main Display Headline */}
            <h2 className="font-plus-jakarta text-[42px] sm:text-[54px] lg:text-[64px] font-extrabold text-[#0A1628] leading-[1.04] tracking-[-0.03em] mb-6">
              Welcome to the <br />
              <span className="font-instrument italic font-normal text-blue-600">
                AI-powered era
              </span>{' '}
              of <br />
              software delivery.
            </h2>

            {/* Subtitle */}
            <p className="text-[15px] sm:text-[16px] text-slate-600 font-dm-sans leading-relaxed mb-8 max-w-lg">
              Book a free strategy session and get a sprint roadmap tailored to your goals — no deck templates, no filler.
            </p>

            {/* Action Buttons (Side by Side) */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0A1628] hover:bg-slate-800 text-white font-dm-sans text-[13.5px] font-semibold transition-all shadow-md shadow-navy/15 hover:-translate-y-0.5 group cursor-pointer"
              >
                <span>Book a Call</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-white/90 hover:bg-white text-slate-800 border border-slate-200/90 font-dm-sans text-[13.5px] font-semibold transition-all shadow-2xs hover:shadow-xs hover:border-slate-300 cursor-pointer"
              >
                Explore Our Approach
              </a>
            </div>
          </div>

          {/* ---------------- RIGHT COLUMN (6 COLS): MOCKUP & GLOBE ---------------- */}
          <div className="lg:col-span-6 relative pt-8 sm:pt-4 min-h-[380px] sm:min-h-[420px] flex items-center justify-center lg:justify-end">
            {/* Top-Left Handwritten Script Note + Arrow */}
            <div className="hidden sm:flex absolute -top-8 left-2 lg:left-6 z-30 flex-col items-center pointer-events-none">
              <span className="font-serif italic text-[15px] sm:text-[16px] text-blue-600 tracking-wide rotate-[-8deg] select-none text-left">
                Strategy today. <br />
                <span className="font-medium">Real progress tomorrow.</span>
              </span>
              <svg
                className="w-8 h-8 text-slate-600 mt-1 rotate-[20deg]"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M 12,8 Q 28,12 24,28"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 20,25 L 24,29 L 28,24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Top-Right Floating Pill: Global Teams */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden sm:flex absolute -top-2 right-2 sm:right-6 z-30 items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 border border-slate-200/90 shadow-md backdrop-blur-md"
            >
              <div className="w-7 h-7 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Globe className="w-4 h-4" />
              </div>
              <div className="text-left leading-tight">
                <div className="text-[11px] font-bold font-plus-jakarta text-slate-900">
                  Global teams
                </div>
                <div className="text-[10px] text-slate-500 font-dm-sans">
                  Real impact.
                </div>
              </div>
            </motion.div>

            {/* Curved Arrow pointing from Global Teams badge down to globe */}
            <div className="hidden sm:block absolute top-12 right-12 z-25 pointer-events-none">
              <svg className="w-6 h-8 text-slate-600 rotate-[10deg]" viewBox="0 0 30 40" fill="none">
                <path
                  d="M 15,2 Q 26,16 18,34"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 12,28 L 18,35 L 24,29"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* ========================================================== */}
            {/* BACK CARD: TILTED TRANSLUCENT GLOBE CANVAS                */}
            {/* ========================================================== */}
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1, rotate: 3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[420px] sm:max-w-[450px] bg-white/80 rounded-[28px] border border-slate-200/85 shadow-sm p-6 overflow-hidden h-[330px] sm:h-[350px] flex items-center justify-center ml-auto"
            >
              {/* Background Dot Grid */}
              <div className="absolute inset-0 bg-[radial-gradient(#94A3B8_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none" />

              {/* 3D Dotted World Globe with Orbital Curves */}
              <div className="relative w-[240px] h-[240px] sm:w-[260px] sm:h-[260px]">
                <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible" fill="none">
                  {/* Outer Orbit Rings */}
                  <ellipse
                    cx="100"
                    cy="100"
                    rx="95"
                    ry="45"
                    stroke="#93C5FD"
                    strokeWidth="1.2"
                    strokeDasharray="4 6"
                    className="rotate-[-20deg] origin-center"
                  />
                  <ellipse
                    cx="100"
                    cy="100"
                    rx="90"
                    ry="85"
                    stroke="#BFDBFE"
                    strokeWidth="1"
                    strokeDasharray="3 5"
                    className="rotate-[15deg] origin-center opacity-60"
                  />

                  {/* Globe Sphere Outline */}
                  <circle cx="100" cy="100" r="75" stroke="#93C5FD" strokeWidth="1.2" fill="#F8FAFC" fillOpacity="0.7" />

                  {/* Latitude / Longitude lines */}
                  <ellipse cx="100" cy="100" rx="40" ry="75" stroke="#93C5FD" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.6" />
                  <ellipse cx="100" cy="100" rx="75" ry="30" stroke="#93C5FD" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.6" />
                  <line x1="25" y1="100" x2="175" y2="100" stroke="#93C5FD" strokeWidth="0.8" opacity="0.5" />
                  <line x1="100" y1="25" x2="100" y2="175" stroke="#93C5FD" strokeWidth="0.8" opacity="0.5" />

                  {/* World Map Dotted Continents Simulation */}
                  {[
                    [75, 65], [85, 60], [95, 68], [110, 62], [125, 70],
                    [65, 90], [78, 95], [90, 85], [105, 95], [120, 90], [135, 85],
                    [80, 120], [95, 125], [110, 115], [125, 130],
                    [60, 110], [140, 110], [90, 145], [105, 140]
                  ].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="2.2" fill="#64748B" opacity="0.55" />
                  ))}

                  {/* Glowing Active Flight Nodes */}
                  <circle cx="65" cy="90" r="3.5" fill="#2563EB" />
                  <circle cx="65" cy="90" r="7" stroke="#93C5FD" strokeWidth="1" opacity="0.6" className="animate-ping" />

                  <circle cx="125" cy="70" r="3.5" fill="#2563EB" />
                  <circle cx="125" cy="70" r="7" stroke="#93C5FD" strokeWidth="1" opacity="0.6" className="animate-ping" />

                  <circle cx="140" cy="110" r="3.5" fill="#2563EB" />
                  <circle cx="140" cy="110" r="7" stroke="#93C5FD" strokeWidth="1" opacity="0.6" className="animate-ping" />
                </svg>
              </div>
            </motion.div>

            {/* ========================================================== */}
            {/* FRONT CARD: "YOUR SPRINT PLAN" STEPPER (OVERLAPPING)       */}
            {/* ========================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="absolute top-4 left-0 sm:left-2 lg:left-0 z-20 w-full max-w-[340px] sm:max-w-[370px] bg-white rounded-[24px] border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.13),0_0_1px_1px_rgba(0,0,0,0.04)] p-5 sm:p-6"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <span className="font-plus-jakarta font-bold text-[14.5px] text-[#0A1628]">
                  Your Sprint Plan
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-[10.5px] font-semibold text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Ready in 24 hours
                </span>
              </div>

              {/* Stepper Timeline List */}
              <div className="space-y-4 relative">
                {sprintSteps.map((step, idx) => {
                  const isLast = idx === sprintSteps.length - 1;
                  return (
                    <div key={step.title} className="flex items-start gap-3.5 relative">
                      {/* Left Step Indicator Node */}
                      <div className="relative flex flex-col items-center shrink-0">
                        {step.completed ? (
                          <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xs">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full border-2 border-blue-500 bg-white flex items-center justify-center" />
                        )}

                        {/* Connecting Line to next step */}
                        {!isLast && (
                          <div
                            className={`w-[1.5px] h-6 mt-1 ${
                              step.completed
                                ? 'bg-blue-600/70'
                                : 'border-l border-dashed border-slate-300'
                            }`}
                          />
                        )}
                      </div>

                      {/* Text Content */}
                      <div className="pt-0.5">
                        <h4 className="font-plus-jakarta font-bold text-[13px] text-[#0A1628] leading-tight">
                          {step.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 font-dm-sans leading-snug mt-0.5">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Bottom-Right Floating Pill: Ideas to Production */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden sm:flex absolute bottom-6 right-2 sm:right-6 z-30 items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 border border-slate-200/90 shadow-md backdrop-blur-md"
            >
              <div className="w-7 h-7 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4 fill-blue-600" />
              </div>
              <div className="text-left leading-tight">
                <div className="text-[11px] font-bold font-plus-jakarta text-slate-900">
                  Ideas to
                </div>
                <div className="text-[10px] text-slate-500 font-dm-sans">
                  Production
                </div>
              </div>
            </motion.div>

            {/* Bottom-Right Handwritten Script Note + Arrow */}
            <div className="hidden sm:flex absolute -bottom-8 right-6 sm:right-10 z-30 flex-col items-center pointer-events-none">
              <svg
                className="w-7 h-7 text-slate-600 mb-0.5 rotate-[15deg]"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M 28,32 Q 12,28 16,12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 10,16 L 16,11 L 22,16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-serif italic text-[15px] text-slate-700 tracking-wide rotate-[8deg] select-none whitespace-nowrap">
                Faster <br />
                together.
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================== */}
        {/* BOTTOM METRICS STRIP + TAGLINE                             */}
        {/* ========================================================== */}
        <div className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-slate-200/80 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* 4 Stats */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-8 sm:gap-12 w-full lg:w-auto">
            {/* Stat 1 */}
            <div>
              <div className="font-instrument italic text-[36px] sm:text-[42px] font-normal text-blue-600 leading-none">
                100+
              </div>
              <p className="text-[12px] font-dm-sans text-slate-500 mt-1">
                Products Delivered
              </p>
            </div>

            <div className="h-10 w-[1px] bg-slate-200 hidden sm:block" />

            {/* Stat 2 */}
            <div>
              <div className="font-instrument italic text-[36px] sm:text-[42px] font-normal text-blue-600 leading-none">
                4
              </div>
              <p className="text-[12px] font-dm-sans text-slate-500 mt-1">
                Continents
              </p>
            </div>

            <div className="h-10 w-[1px] bg-slate-200 hidden sm:block" />

            {/* Stat 3 */}
            <div>
              <div className="font-instrument italic text-[36px] sm:text-[42px] font-normal text-blue-600 leading-none">
                6+
              </div>
              <p className="text-[12px] font-dm-sans text-slate-500 mt-1">
                Industries
              </p>
            </div>

            <div className="h-10 w-[1px] bg-slate-200 hidden sm:block" />

            {/* Stat 4 */}
            <div>
              <div className="font-instrument italic text-[36px] sm:text-[42px] font-normal text-blue-600 leading-none">
                24/7
              </div>
              <p className="text-[12px] font-dm-sans text-slate-500 mt-1">
                Delivery Support
              </p>
            </div>
          </div>

          {/* Right Editorial Monospace Tag */}
          <div className="flex items-center gap-3 self-center lg:self-auto">
            <span className="w-6 h-[1.5px] bg-slate-400" />
            <span className="text-[10px] font-mono tracking-[0.2em] text-slate-500 uppercase leading-snug">
              SOFTWARE FOR <br className="hidden sm:inline" />
              A BRIGHTER TOMORROW.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
