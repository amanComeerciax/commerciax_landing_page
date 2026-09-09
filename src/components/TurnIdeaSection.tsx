'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  Zap,
  Users,
  ShieldCheck,
  BarChart3,
  Box,
  Send,
} from 'lucide-react';

const steps = [
  {
    completed: true,
    title: 'Discovery Call',
    subtitle: 'Understand goals & constraints',
  },
  {
    completed: true,
    title: 'Solution & Roadmap',
    subtitle: 'Tailored to your use case',
  },
  {
    completed: true,
    title: 'Build & Iterate',
    subtitle: 'AI agents, integrations, testing',
  },
  {
    completed: false,
    title: 'Launch to Production',
    subtitle: 'Ship with confidence',
  },
];

export default function TurnIdeaSection() {
  return (
    <section
      id="cta-section"
      className="relative w-full py-16 sm:py-24 bg-[#FAF8F5] text-navy overflow-hidden"
    >
      <div className="site-container px-4 sm:px-8 lg:px-12 max-w-[1340px] mx-auto">
        {/* ========================================================== */}
        {/* MAIN HERO SPLIT-GRADIENT CARD CONTAINER                    */}
        {/* ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[32px] sm:rounded-[36px] bg-gradient-to-r from-[#FAF8F5] via-[#EEF5FF]/70 to-[#0C192E] border border-slate-200/90 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_20px_60px_-15px_rgba(15,23,42,0.08)]"
        >
          {/* Ambient Lighting Glows in Dark Right Area */}
          <div className="absolute -top-24 -right-24 w-[450px] h-[450px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 right-1/4 w-[350px] h-[350px] bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Right Circular Dotted Track & Pulse Radar Nodes */}
          <div className="hidden lg:block absolute -top-8 -right-8 w-[620px] h-[620px] pointer-events-none opacity-45">
            <svg viewBox="0 0 600 600" fill="none" className="w-full h-full">
              <circle
                cx="380"
                cy="300"
                r="240"
                stroke="#93C5FD"
                strokeWidth="1.2"
                strokeDasharray="4 6"
              />
              <circle cx="150" cy="220" r="4.5" fill="#2563EB" />
              <circle cx="150" cy="220" r="9" stroke="#93C5FD" strokeWidth="1" opacity="0.6" className="animate-ping" />

              <circle cx="340" cy="80" r="4" fill="#2563EB" />
              <circle cx="340" cy="80" r="8" stroke="#93C5FD" strokeWidth="1" opacity="0.6" className="animate-ping" />

              <circle cx="560" cy="320" r="4.5" fill="#2563EB" />
              <circle cx="560" cy="320" r="9" stroke="#93C5FD" strokeWidth="1" opacity="0.6" className="animate-ping" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center relative z-10">
            {/* ========================================================== */}
            {/* LEFT COLUMN: 6 COLS                                       */}
            {/* ========================================================== */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/60 border border-slate-300/60 mb-5 self-start">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="text-[11px] font-mono tracking-[0.2em] font-bold text-slate-700 uppercase">
                  READY TO SHIP?
                </span>
              </div>

              {/* Headline */}
              <h2 className="font-plus-jakarta text-[42px] sm:text-[54px] lg:text-[62px] font-extrabold text-[#0A1628] leading-[1.04] tracking-[-0.03em] mb-5">
                Turn your idea into <br />
                <span className="font-instrument italic font-normal text-blue-600">
                  production.
                </span>
              </h2>

              {/* Subtitle */}
              <p className="text-[15px] sm:text-[16px] text-slate-600 font-dm-sans leading-relaxed mb-8 max-w-md">
                Book a 30-minute strategy call. We’ll map the fastest path from your goal to shipped software.
              </p>

              {/* 2 Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-12 sm:mb-14">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0A1628] hover:bg-slate-800 text-white font-dm-sans text-[13.5px] font-semibold transition-all shadow-md shadow-navy/15 hover:-translate-y-0.5 group cursor-pointer"
                >
                  <span>Book a Strategy Call</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center px-7 py-3.5 rounded-full bg-white/95 hover:bg-white text-slate-800 border border-slate-200/90 font-dm-sans text-[13.5px] font-semibold transition-all shadow-2xs hover:shadow-xs hover:border-slate-300 cursor-pointer"
                >
                  Contact Us
                </a>
              </div>

              {/* Bottom 3 Feature / Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-slate-200/80">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <Zap className="w-4 h-4 fill-blue-600" />
                  </div>
                  <div>
                    <div className="text-[12.5px] font-bold font-plus-jakarta text-[#0A1628]">
                      No deck
                    </div>
                    <div className="text-[11px] text-slate-500 font-dm-sans">
                      Just a conversation
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-[12.5px] font-bold font-plus-jakarta text-[#0A1628]">
                      Expert team
                    </div>
                    <div className="text-[11px] text-slate-500 font-dm-sans">
                      Product to production
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-[12.5px] font-bold font-plus-jakarta text-[#0A1628]">
                      Real outcomes
                    </div>
                    <div className="text-[11px] text-slate-500 font-dm-sans">
                      Built for scale
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================== */}
            {/* RIGHT COLUMN: 6 COLS (SOFTWARE WINDOW & FLOATING BADGES)   */}
            {/* ========================================================== */}
            <div className="lg:col-span-6 relative flex items-center justify-center pt-8 sm:pt-4">
              {/* Floating Badge 1 (Left Middle: Strategy Today) */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden sm:flex absolute -left-4 sm:left-0 top-1/2 -translate-y-1/2 z-30 flex-col items-center justify-center p-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-md backdrop-blur-md text-center w-20"
              >
                <div className="w-7 h-7 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-1">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold font-plus-jakarta text-slate-900 leading-tight">
                  Strategy
                </span>
                <span className="text-[9.5px] text-slate-500 font-dm-sans">
                  today
                </span>
              </motion.div>

              {/* Floating Badge 2 (Top Right: Ideas to impact) */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="hidden sm:flex absolute top-0 right-4 sm:right-10 z-30 items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/95 border border-slate-200/90 shadow-md backdrop-blur-md"
              >
                <div className="w-7 h-7 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Box className="w-4 h-4" />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-[11px] font-bold font-plus-jakarta text-slate-900">
                    Ideas
                  </div>
                  <div className="text-[10px] text-slate-500 font-dm-sans">
                    to impact
                  </div>
                </div>
              </motion.div>

              {/* Curved Arrow 1: from Top-Right badge down to window */}
              <div className="hidden sm:block absolute top-14 right-14 z-25 pointer-events-none">
                <svg className="w-6 h-8 text-slate-400 rotate-[15deg]" viewBox="0 0 30 40" fill="none">
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

              {/* Floating Badge 3 (Bottom Right: Shipped tomorrow) */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="hidden sm:flex absolute bottom-12 right-2 sm:right-6 z-30 items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/95 border border-slate-200/90 shadow-md backdrop-blur-md"
              >
                <div className="w-7 h-7 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Send className="w-3.5 h-3.5 text-blue-600" />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-[11px] font-bold font-plus-jakarta text-slate-900">
                    Shipped
                  </div>
                  <div className="text-[10px] text-slate-500 font-dm-sans">
                    tomorrow
                  </div>
                </div>
              </motion.div>

              {/* Curved Arrow 2: from bottom right up to window */}
              <div className="hidden sm:block absolute bottom-24 right-10 z-25 pointer-events-none">
                <svg className="w-6 h-8 text-slate-400 rotate-[-15deg]" viewBox="0 0 30 40" fill="none">
                  <path
                    d="M 15,38 Q 26,24 18,6"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 12,12 L 18,5 L 24,11"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Bottom-Right Handwritten Script: Faster together. */}
              <div className="hidden sm:block absolute -bottom-4 right-8 z-30 pointer-events-none">
                <span className="font-serif italic text-[15px] sm:text-[16px] text-blue-200/90 tracking-wide rotate-[12deg] select-none whitespace-nowrap">
                  Faster <br />
                  together.
                </span>
              </div>

              {/* ========================================================== */}
              {/* MAIN TILTED SOFTWARE WINDOW                                */}
              {/* ========================================================== */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-[380px] sm:max-w-[420px] bg-white rounded-[26px] border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.22),0_0_1px_1px_rgba(0,0,0,0.04)] p-6 sm:p-7 rotate-[-2deg] my-4"
              >
                {/* Window Top Bar with 3 Dots */}
                <div className="flex items-center gap-1.5 mb-4 pb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                </div>

                {/* Sub Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
                  <span className="font-plus-jakarta font-bold text-[14px] sm:text-[14.5px] text-[#0A1628]">
                    Your Idea → Production
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-[10.5px] font-semibold text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    On track
                  </span>
                </div>

                {/* 4 Steps Timeline List */}
                <div className="space-y-3.5">
                  {steps.map((step, idx) => {
                    const isLast = idx === steps.length - 1;
                    return (
                      <div key={step.title} className="flex items-start gap-3.5 relative">
                        {/* Node */}
                        <div className="relative flex flex-col items-center shrink-0">
                          {step.completed ? (
                            <div className="w-5.5 h-5.5 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xs">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          ) : (
                            <div className="w-5.5 h-5.5 rounded-full border-2 border-blue-500 bg-white flex items-center justify-center" />
                          )}

                          {/* Line to next */}
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

                        {/* Text */}
                        <div className="pt-0.5">
                          <h4 className="font-plus-jakarta font-bold text-[12.5px] text-[#0A1628] leading-tight">
                            {step.title}
                          </h4>
                          <p className="text-[10.5px] text-slate-500 font-dm-sans leading-snug mt-0.5">
                            {step.subtitle}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
