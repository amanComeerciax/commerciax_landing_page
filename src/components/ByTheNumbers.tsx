'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import {
  Box,
  Globe,
  Zap,
  Shield,
  ArrowUpRight,
  ArrowRight,
} from 'lucide-react';

// Animated Counter Hook with Decimals & Smooth Deceleration
function useAnimatedCount(
  target: number,
  duration: number = 2000,
  active: boolean = false,
  decimals: number = 0
) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!active) {
      setVal(0);
      return;
    }

    let startTime: number | undefined;
    let animId: number;

    const step = (timestamp: number) => {
      if (startTime === undefined) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = target * eased;
      setVal(current);

      if (progress < 1) {
        animId = requestAnimationFrame(step);
      } else {
        setVal(target);
      }
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [target, duration, active]);

  if (decimals > 0) {
    return val.toFixed(decimals);
  }
  return Math.round(val);
}

export default function ByTheNumbers() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

  const projectsCount = useAnimatedCount(50, 1800, isInView, 0);
  const countriesCount = useAnimatedCount(5, 1400, isInView, 0);
  const speedCount = useAnimatedCount(10, 1600, isInView, 0);
  const uptimeCount = useAnimatedCount(99.99, 2200, isInView, 2);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] text-navy overflow-hidden"
    >
      {/* Background Graphic Asset: numners.png */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <Image
          src="/numners.png"
          alt="Global Network Infrastructure"
          fill
          priority
          className="object-cover object-right sm:object-center opacity-90"
        />
        {/* Soft edge gradients for seamless blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/30 via-transparent to-[#FAF8F5]/40 pointer-events-none" />
      </div>

      <div className="site-container relative px-4 sm:px-8 lg:px-12 max-w-[1320px] mx-auto z-10">
        {/* ========================================================== */}
        {/* TOP ROW: CENTERED HEADLINE & IMPACT SUBTEXT                 */}
        {/* ========================================================== */}
        <div className="relative mb-12 sm:mb-16">
          {/* Centered Heading & Impact Subtext */}
          <div className="max-w-[850px] mx-auto text-center z-10 relative">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span className="text-[11px] font-mono tracking-[0.2em] font-bold text-slate-700 uppercase">
                REAL IMPACT
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-instrument text-[42px] sm:text-[56px] lg:text-[66px] font-normal text-[#0A1628] leading-[1.08] tracking-[-0.02em]">
              Shipped in the last <br />
              <span className="italic text-blue-600">
                24 months.
              </span>
            </h2>

            {/* Description & Vertical Manifesto Pillar */}
            <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 font-dm-sans leading-relaxed max-w-sm text-center sm:text-left">
                Not vanity metrics — what we&apos;ve actually delivered across clients and our own products.
              </p>

              {/* Vertical Bracket Divider with Real Values */}
              <div className="hidden sm:flex items-center gap-3 pl-6 border-l border-slate-300/80 py-0.5 shrink-0 text-left">
                <div className="text-[9.5px] font-mono font-medium tracking-[0.18em] uppercase text-slate-500 flex flex-col gap-1 leading-tight">
                  <span>REAL</span>
                  <span>PROJECTS</span>
                  <span>REAL PEOPLE</span>
                  <span>REAL PROGRESS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Top-Right Handwritten / Script Note + Curved Arrow */}
          <div className="hidden lg:flex absolute -top-2 right-4 xl:right-12 z-20 flex-col items-center pointer-events-none">
            <span className="font-serif italic text-[14px] sm:text-[15px] text-slate-600 tracking-wide rotate-[-6deg] select-none">
              Building globally,
              <br />
              Delivering locally.
            </span>
            <svg
              className="w-9 h-9 text-slate-500 mt-0.5 rotate-[15deg]"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M 12,8 Q 30,12 26,28"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 22,25 L 26,29 L 30,24"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Floating Pill: "5 countries and counting" */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden xl:flex absolute top-14 right-20 z-10 px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.06)] items-center gap-2 pointer-events-none"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[11.5px] font-semibold text-slate-700 font-dm-sans whitespace-nowrap">
              5 countries <span className="font-normal text-slate-500">and counting</span>
            </span>
          </motion.div>
        </div>

        {/* ========================================================== */}
        {/* 4 HORIZONTAL WHITE CARDS WITH DARK, ANIMATED MINI GRAPHICS */}
        {/* ========================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* ---------------- CARD 1: 50+ PROJECTS SHIPPED ---------------- */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="group relative bg-[#FDFBF7]/90 sm:bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-[22px] p-6 border border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_-6px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Row: Circular Icon Badge + Growth Pill */}
            <div className="flex items-center justify-between w-full mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-100/70 border border-blue-200/60 flex items-center justify-center text-navy group-hover:scale-105 transition-transform">
                <Box className="w-5 h-5 stroke-[1.8] text-slate-800" />
              </div>
              <div className="inline-flex items-center gap-0.5 px-2.5 py-1 rounded-full bg-blue-50/90 border border-blue-100 text-[11px] font-bold text-blue-600 font-mono">
                <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                <span>+42%</span>
              </div>
            </div>

            {/* Bottom Row: Left Info + Right Graphic (Side-by-Side) */}
            <div className="flex items-end justify-between gap-3 w-full">
              {/* Left Info */}
              <div className="flex-1 min-w-0">
                <div className="font-instrument text-[46px] sm:text-[50px] font-normal tracking-tight text-[#0A1628] leading-none mb-1.5">
                  {projectsCount}+
                </div>
                <h3 className="text-[14px] font-bold text-slate-900 font-plus-jakarta leading-snug">
                  Projects Shipped
                </h3>
                <p className="mt-1.5 text-[10px] sm:text-[10.5px] font-mono uppercase tracking-wider text-slate-500 whitespace-nowrap">
                  AI + WEB + GROWTH STACKS
                </p>
              </div>

              {/* Right Graphic: 4 Ascending Equalizer Bars */}
              <div className="w-[100px] sm:w-[110px] h-[68px] shrink-0 flex items-end justify-end gap-1.5 pointer-events-none pb-0.5">
                <motion.div
                  className="w-2.5 rounded-t-sm bg-gradient-to-t from-slate-200 to-blue-200"
                  animate={{ height: [20, 26, 22, 20] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="w-2.5 rounded-t-sm bg-gradient-to-t from-blue-200 to-blue-300"
                  animate={{ height: [32, 40, 35, 32] }}
                  transition={{ duration: 2.7, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                />
                <motion.div
                  className="w-2.5 rounded-t-sm bg-gradient-to-t from-blue-300 to-blue-400"
                  animate={{ height: [44, 54, 47, 44] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                />
                <motion.div
                  className="w-2.5 rounded-t-sm bg-gradient-to-t from-blue-500 to-blue-600 shadow-[0_2px_8px_rgba(37,99,235,0.35)]"
                  animate={{ height: [56, 66, 59, 56] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
                />
              </div>
            </div>
          </motion.div>

          {/* ---------------- CARD 2: 5 COUNTRIES LIVE ---------------- */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="group relative bg-[#FDFBF7]/90 sm:bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-[22px] p-6 border border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_-6px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Row: Circular Icon Badge + Growth Pill */}
            <div className="flex items-center justify-between w-full mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-100/70 border border-blue-200/60 flex items-center justify-center text-navy group-hover:scale-105 transition-transform">
                <Globe className="w-5 h-5 stroke-[1.8] text-slate-800" />
              </div>
              <div className="inline-flex items-center gap-0.5 px-2.5 py-1 rounded-full bg-blue-50/90 border border-blue-100 text-[11px] font-bold text-blue-600 font-mono">
                <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                <span>+100%</span>
              </div>
            </div>

            {/* Bottom Row: Left Info + Right Graphic (Side-by-Side) */}
            <div className="flex items-end justify-between gap-2 w-full">
              {/* Left Info */}
              <div className="flex-1 min-w-0">
                <div className="font-instrument text-[46px] sm:text-[50px] font-normal tracking-tight text-[#0A1628] leading-none mb-1.5">
                  {countriesCount}
                </div>
                <h3 className="text-[14px] font-bold text-slate-900 font-plus-jakarta leading-snug">
                  Countries Live
                </h3>
                <p className="mt-1.5 text-[10px] sm:text-[10.5px] font-mono uppercase tracking-wider text-slate-500 whitespace-nowrap">
                  IN · US · UAE · KR · AU
                </p>
              </div>

              {/* Right Graphic: World Map with Live Pulsing Radar Nodes */}
              <div className="w-[110px] sm:w-[120px] h-[68px] shrink-0 flex items-end justify-end pointer-events-none pb-0.5">
                <svg viewBox="0 0 130 65" className="w-full h-full overflow-visible" fill="none">
                  <g fill="#94A3B8" opacity="0.45">
                    <circle cx="24" cy="22" r="1.8" />
                    <circle cx="32" cy="30" r="2" />
                    <circle cx="38" cy="16" r="2.2" />
                    <circle cx="62" cy="24" r="1.8" />
                    <circle cx="74" cy="20" r="2.2" />
                    <circle cx="90" cy="28" r="2.5" />
                    <circle cx="100" cy="36" r="2" />
                    <circle cx="110" cy="50" r="2.4" />
                  </g>

                  {/* 5 Live Radar Nodes */}
                  {/* US */}
                  <circle cx="30" cy="24" r="2.5" fill="#2563EB" />
                  <motion.circle
                    cx="30"
                    cy="24"
                    r="5.5"
                    stroke="#2563EB"
                    strokeWidth="1"
                    animate={{ scale: [1, 2], opacity: [0.9, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                  />

                  {/* UAE */}
                  <circle cx="44" cy="36" r="2.2" fill="#2563EB" />

                  {/* India (IN) */}
                  <circle cx="72" cy="26" r="2.5" fill="#2563EB" />

                  {/* Korea (KR) */}
                  <circle cx="88" cy="30" r="2.8" fill="#2563EB" />
                  <motion.circle
                    cx="88"
                    cy="30"
                    r="6"
                    stroke="#2563EB"
                    strokeWidth="1"
                    animate={{ scale: [1, 2], opacity: [0.9, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
                  />

                  {/* Australia (AU) */}
                  <circle cx="110" cy="50" r="2.5" fill="#2563EB" />
                  <motion.circle
                    cx="110"
                    cy="50"
                    r="5.5"
                    stroke="#2563EB"
                    strokeWidth="1"
                    animate={{ scale: [1, 2], opacity: [0.9, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 1 }}
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* ---------------- CARD 3: 10X FASTER DELIVERY ---------------- */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="group relative bg-[#FDFBF7]/90 sm:bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-[22px] p-6 border border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_-6px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Row: Circular Icon Badge + Growth Pill */}
            <div className="flex items-center justify-between w-full mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-100/70 border border-blue-200/60 flex items-center justify-center text-navy group-hover:scale-105 transition-transform">
                <Zap className="w-5 h-5 stroke-[1.8] text-slate-800" />
              </div>
              <div className="inline-flex items-center gap-0.5 px-2.5 py-1 rounded-full bg-blue-50/90 border border-blue-100 text-[11px] font-bold text-blue-600 font-mono">
                <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                <span>+60%</span>
              </div>
            </div>

            {/* Bottom Row: Left Info + Right Graphic (Side-by-Side) */}
            <div className="flex items-end justify-between gap-2 w-full">
              {/* Left Info */}
              <div className="flex-1 min-w-0">
                <div className="font-instrument text-[46px] sm:text-[50px] font-normal tracking-tight text-[#0A1628] leading-none mb-1.5">
                  {speedCount}×
                </div>
                <h3 className="text-[14px] font-bold text-slate-900 font-plus-jakarta leading-snug">
                  Faster Delivery
                </h3>
                <p className="mt-1.5 text-[10px] sm:text-[10.5px] font-mono uppercase tracking-wider text-slate-500 whitespace-nowrap">
                  VS. TRADITIONAL STUDIOS
                </p>
              </div>

              {/* Right Graphic: Upward Growth Curve */}
              <div className="w-[110px] sm:w-[120px] h-[68px] shrink-0 flex items-end justify-end pointer-events-none pb-0.5">
                <svg viewBox="0 0 120 60" className="w-full h-full overflow-visible" fill="none">
                  <defs>
                    <linearGradient id="gradDelivery" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563EB" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  <path d="M 5,55 Q 65,50 115,10 L 115,60 L 5,60 Z" fill="url(#gradDelivery)" />
                  <path d="M 5,55 Q 65,50 115,10" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />

                  {/* Traveling Pulse Node */}
                  <circle r="3" fill="#60A5FA">
                    <animateMotion path="M 5,55 Q 65,50 115,10" dur="2.4s" repeatCount="indefinite" />
                  </circle>

                  {/* Endpoint Node with Ping */}
                  <circle cx="115" cy="10" r="3.5" fill="#2563EB" />
                  <motion.circle
                    cx="115"
                    cy="10"
                    r="8"
                    stroke="#2563EB"
                    strokeWidth="1.2"
                    animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* ---------------- CARD 4: 99.99% UPTIME SLA ---------------- */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.24 }}
            className="group relative bg-[#FDFBF7]/90 sm:bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-[22px] p-6 border border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_-6px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Row: Circular Icon Badge + Growth Pill */}
            <div className="flex items-center justify-between w-full mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-100/70 border border-blue-200/60 flex items-center justify-center text-navy group-hover:scale-105 transition-transform">
                <Shield className="w-5 h-5 stroke-[1.8] text-slate-800" />
              </div>
              <div className="inline-flex items-center gap-0.5 px-2.5 py-1 rounded-full bg-blue-50/90 border border-blue-100 text-[11px] font-bold text-blue-600 font-mono">
                <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                <span>+12%</span>
              </div>
            </div>

            {/* Bottom Row: Left Info + Right Graphic (Side-by-Side) */}
            <div className="flex items-end justify-between gap-2 w-full">
              {/* Left Info */}
              <div className="flex-1 min-w-0">
                <div className="font-instrument text-[46px] sm:text-[50px] font-normal tracking-tight text-[#0A1628] leading-none mb-1.5">
                  {uptimeCount}%
                </div>
                <h3 className="text-[14px] font-bold text-slate-900 font-plus-jakarta leading-snug">
                  Uptime SLA
                </h3>
                <p className="mt-1.5 text-[10px] sm:text-[10.5px] font-mono uppercase tracking-wider text-slate-500 whitespace-nowrap">
                  MONITORED 24 / 7
                </p>
              </div>

              {/* Right Graphic: Harmonic SLA Wave Curve */}
              <div className="w-[110px] sm:w-[120px] h-[68px] shrink-0 flex items-end justify-end pointer-events-none pb-0.5">
                <svg viewBox="0 0 120 60" className="w-full h-full overflow-visible" fill="none">
                  <defs>
                    <linearGradient id="gradUptime" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563EB" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M 5,55 C 35,55 50,28 75,32 C 95,35 105,16 115,10 L 115,60 L 5,60 Z"
                    fill="url(#gradUptime)"
                  />
                  <path
                    d="M 5,55 C 35,55 50,28 75,32 C 95,35 105,16 115,10"
                    stroke="#2563EB"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Traveling Pulse Node */}
                  <circle r="3" fill="#60A5FA">
                    <animateMotion
                      path="M 5,55 C 35,55 50,28 75,32 C 95,35 105,16 115,10"
                      dur="2.6s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Endpoint Node with Ping */}
                  <circle cx="115" cy="10" r="3.5" fill="#2563EB" />
                  <motion.circle
                    cx="115"
                    cy="10"
                    r="8"
                    stroke="#2563EB"
                    strokeWidth="1.2"
                    animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
