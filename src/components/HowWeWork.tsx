'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FileText, Layers } from 'lucide-react';
import FoldText from './FoldText';
import { gsap, useGSAP } from '@/lib/gsap';

export default function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Animate the path drawing on scroll
      if (pathRef.current) {
        const length = pathRef.current.getTotalLength();
        gsap.set(pathRef.current, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(pathRef.current, {
          strokeDashoffset: 0,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'center center',
            scrub: 1.2,
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="how-we-work"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#FAF8F5] text-navy overflow-hidden"
    >
      {/* Seamless Edge Melting Gradients */}
      <div className="absolute top-0 left-0 right-0 h-32 sm:h-44 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-44 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent pointer-events-none z-[1]" />

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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200/90 shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.2em] font-bold text-slate-700 uppercase">
              HOW WE WORK
            </span>
          </div>

          {/* Main 3-Line Editorial Headline */}
          <h2 className="font-instrument text-[36px] xs:text-[48px] sm:text-[62px] lg:text-[72px] font-normal leading-[1.08] sm:leading-[1.04] tracking-tight text-navy">
            <span className="italic text-blue-600 font-normal">
              <FoldText text="10x Speed" splitBy="word" trigger="scroll" duration={0.65} stagger={0.045} />{' '}
            </span>
            <FoldText text="to Production." splitBy="word" trigger="scroll" duration={0.65} stagger={0.045} />
            <br />
            <span className="italic text-navy/90 font-normal">
              <FoldText text="By Design." splitBy="word" trigger="scroll" duration={0.65} stagger={0.045} />
            </span>
          </h2>

          {/* Subtitle Description */}
          <p className="mt-6 text-[15px] sm:text-[16px] text-slate-600 font-dm-sans leading-relaxed max-w-xl mx-auto">
            AI-native engineers and internal agent systems work in parallel — compressing the path from problem definition to a running production system.
          </p>
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
              {/* Curved Trajectory Path with Ref for GSAP Self-Draw */}
              <path
                ref={pathRef}
                d="M 10,75 C 90,110 140,25 240,25 C 340,25 390,105 480,105 C 570,105 620,25 720,25 C 820,25 870,105 960,105 C 1030,105 1070,30 1100,-10"
                stroke="#2563EB"
                strokeWidth="1.6"
                fill="none"
              />

              {/* Far Left Focal Node */}
              <circle cx="10" cy="75" r="10" fill="#2563EB" fillOpacity="0.12" />
              <circle cx="10" cy="75" r="4.5" fill="#2563EB" />

              {/* Inter-Card Circular Node 1 */}
              <circle cx="480" cy="105" r="4.5" stroke="#2563EB" strokeWidth="1.6" fill="#FAF8F5" />
              <circle cx="480" cy="105" r="1.5" fill="#2563EB" />

              {/* Inter-Card Circular Node 2 */}
              <circle cx="960" cy="105" r="4.5" stroke="#2563EB" strokeWidth="1.6" fill="#FAF8F5" />
              <circle cx="960" cy="105" r="1.5" fill="#2563EB" />

              {/* Far Right Focal Node */}
              <circle cx="1100" cy="-10" r="10" fill="#2563EB" fillOpacity="0.12" />
              <circle cx="1100" cy="-10" r="4.5" fill="#2563EB" />
            </svg>
          </div>

          {/* 3 Process Cards */}
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 relative z-10">
            {steps.map((step, idx) => {
              return (
                <div
                  key={step.num}
                  className="group relative bg-[#FAF8F5]/90 rounded-[28px] border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 min-h-[380px]"
                >
                  {/* Top Bar: Circular Icon + Step Number */}
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      {/* Icon Container */}
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center group-hover:scale-105 transition-transform">
                        {step.icon}
                      </div>

                      {/* Step Number in Serif */}
                      <span className="font-instrument italic text-[36px] font-normal text-slate-400 group-hover:text-blue-600 transition-colors leading-none">
                        {step.num}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-instrument italic text-[28px] sm:text-[32px] font-normal text-[#0A1628] leading-[1.1] mb-3 group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-[13.5px] sm:text-[14px] text-slate-600 font-dm-sans leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Action Pill Badge */}
                  <div className="mt-8 pt-5 border-t border-slate-200/70 flex items-center justify-between">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-[0.18em] uppercase border ${step.badgeBg}`}
                    >
                      {step.action}
                    </span>
                    <span className="text-[11px] font-mono font-medium text-slate-400">
                      STEP {step.num}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-14 sm:mt-20 pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3 text-[12.5px] font-dm-sans text-slate-500">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Continuous delivery pipeline with enterprise SLAs and zero lock-in.</span>
          </div>

          <div className="text-[11px] font-mono tracking-[0.2em] text-slate-400 uppercase">
            SHIP WEEKLY · OWN FOREVER
          </div>
        </div>
      </div>
    </section>
  );
}
