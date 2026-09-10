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
import { gsap, useGSAP } from '@/lib/gsap';
import FoldText from './FoldText';

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
  const bgImgRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

  const projectsCount = useAnimatedCount(50, 1800, isInView, 0);
  const countriesCount = useAnimatedCount(5, 1400, isInView, 0);
  const speedCount = useAnimatedCount(10, 1600, isInView, 0);
  const uptimeCount = useAnimatedCount(99.99, 2200, isInView, 2);

  useGSAP(
    () => {
      if (!sectionRef.current || !bgImgRef.current) return;

      gsap.to(bgImgRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] text-navy overflow-hidden"
    >
      {/* Background Graphic Asset: numners.png with Seamless Edge Melt */}
      <div 
        ref={bgImgRef}
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 60%, transparent 95%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 60%, transparent 95%)',
        }}
      >
        <Image
          src="/numners.png"
          alt="Global Network Infrastructure"
          fill
          priority
          className="object-cover object-right sm:object-center opacity-85"
        />
        {/* Soft edge gradients for seamless blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/40 via-transparent to-[#FAF8F5]/50 pointer-events-none" />
      </div>

      {/* Top and Bottom Melting Gradients */}
      <div className="absolute top-0 left-0 right-0 h-32 sm:h-44 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-44 sm:h-64 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/90 to-transparent pointer-events-none z-[1]" />

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
              <FoldText text="Shipped in the last" splitBy="word" trigger="scroll" duration={0.65} stagger={0.045} /> <br />
              <span className="italic text-blue-600">
                <FoldText text="24 months." splitBy="word" trigger="scroll" duration={0.65} stagger={0.045} />
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
          <div
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
          </div>

          {/* ---------------- CARD 2: 5 COUNTRIES LIVE ---------------- */}
          <div
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

              {/* Right Graphic: High-Fidelity World Map with Route Arcs & Live Pulsing Radar Nodes */}
              <div className="w-[125px] xs:w-[135px] sm:w-[150px] h-[75px] shrink-0 flex items-end justify-end pointer-events-none pb-0.5">
                <svg viewBox="0 0 150 78" className="w-full h-full overflow-visible" fill="none">
                  <defs>
                    <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.85" />
                      <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#2563EB" stopOpacity="0.85" />
                    </linearGradient>
                  </defs>

                  {/* World Map Continent Silhouettes */}
                  <g fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="0.6" opacity="0.95">
                    {/* North America */}
                    <path d="M 8 15 C 10 11, 18 9, 26 11 C 32 12, 38 17, 40 23 C 37 27, 31 30, 26 32 C 22 36, 20 41, 16 39 C 12 36, 12 28, 10 24 C 7 20, 7 16, 8 15 Z" />
                    {/* Greenland */}
                    <path d="M 36 7 C 42 6, 45 9, 44 13 C 40 15, 36 12, 36 7 Z" />
                    {/* South America */}
                    <path d="M 24 39 C 30 39, 35 43, 34 51 C 32 59, 28 67, 24 69 C 22 67, 21 57, 22 49 C 23 44, 23 41, 24 39 Z" />
                    {/* Europe & UK */}
                    <path d="M 56 15 C 62 11, 70 11, 74 17 C 72 23, 66 25, 62 25 C 57 24, 55 19, 56 15 Z" />
                    <path d="M 52 14 C 54 13, 56 15, 55 18 C 53 19, 51 17, 52 14 Z" />
                    {/* Africa */}
                    <path d="M 58 29 C 72 27, 80 31, 79 41 C 78 51, 72 61, 66 63 C 61 59, 58 49, 57 39 C 57 34, 57 30, 58 29 Z" />
                    {/* Eurasia / Northern Asia */}
                    <path d="M 76 13 C 90 9, 112 10, 124 15 C 130 21, 126 29, 118 33 C 108 35, 98 32, 90 31 C 84 29, 78 23, 76 13 Z" />
                    {/* Middle East */}
                    <path d="M 76 31 C 82 29, 86 33, 84 38 C 80 40, 75 36, 76 31 Z" />
                    {/* India */}
                    <path d="M 92 33 C 98 33, 102 37, 100 45 C 96 47, 92 43, 92 33 Z" />
                    {/* East Asia & Japan */}
                    <path d="M 110 25 C 118 25, 124 31, 122 37 C 116 45, 110 43, 108 35 C 107 29, 108 26, 110 25 Z" />
                    <path d="M 126 23 C 128 22, 130 25, 128 28 C 126 28, 125 25, 126 23 Z" />
                    {/* Australia */}
                    <path d="M 118 49 C 130 47, 138 51, 136 59 C 132 65, 122 66, 118 61 C 116 56, 116 51, 118 49 Z" />
                    <path d="M 140 61 C 143 60, 144 64, 142 67 C 140 67, 139 64, 140 61 Z" />
                  </g>

                  {/* Background Matrix Dots on Landmass */}
                  <g fill="#94A3B8" opacity="0.4">
                    <circle cx="18" cy="22" r="1.2" />
                    <circle cx="28" cy="28" r="1.2" />
                    <circle cx="26" cy="54" r="1.2" />
                    <circle cx="64" cy="18" r="1.2" />
                    <circle cx="66" cy="46" r="1.2" />
                    <circle cx="88" cy="20" r="1.2" />
                    <circle cx="106" cy="24" r="1.2" />
                    <circle cx="114" cy="36" r="1.2" />
                    <circle cx="128" cy="56" r="1.2" />
                  </g>

                  {/* Interconnecting Global Data Routes (US -> UAE -> IN -> KR -> AU) */}
                  <g stroke="url(#routeGradient)" strokeWidth="1.1" strokeDasharray="2.5,2.5" opacity="0.85" fill="none">
                    {/* US to UAE */}
                    <path d="M 24 23 Q 50 11 79 34" />
                    {/* UAE to IN */}
                    <path d="M 79 34 Q 87 29 96 39" />
                    {/* IN to KR */}
                    <path d="M 96 39 Q 108 26 120 28" />
                    {/* KR to AU */}
                    <path d="M 120 28 Q 130 40 126 55" />
                  </g>

                  {/* 5 Live Radar Beacons on Exact Coordinates */}
                  {/* 1. US (North America) */}
                  <g>
                    <motion.circle
                      cx="24"
                      cy="23"
                      r="5.5"
                      stroke="#2563EB"
                      strokeWidth="1.2"
                      fill="none"
                      animate={{ scale: [1, 2.2], opacity: [0.9, 0] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
                    />
                    <circle cx="24" cy="23" r="2.8" fill="#2563EB" />
                    <circle cx="24" cy="23" r="1" fill="#FFFFFF" />
                  </g>

                  {/* 2. UAE (Middle East) */}
                  <g>
                    <motion.circle
                      cx="79"
                      cy="34"
                      r="5.5"
                      stroke="#2563EB"
                      strokeWidth="1.2"
                      fill="none"
                      animate={{ scale: [1, 2.2], opacity: [0.9, 0] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: 0.4 }}
                    />
                    <circle cx="79" cy="34" r="2.8" fill="#2563EB" />
                    <circle cx="79" cy="34" r="1" fill="#FFFFFF" />
                  </g>

                  {/* 3. India (IN) */}
                  <g>
                    <motion.circle
                      cx="96"
                      cy="39"
                      r="5.5"
                      stroke="#2563EB"
                      strokeWidth="1.2"
                      fill="none"
                      animate={{ scale: [1, 2.2], opacity: [0.9, 0] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: 0.8 }}
                    />
                    <circle cx="96" cy="39" r="2.8" fill="#2563EB" />
                    <circle cx="96" cy="39" r="1" fill="#FFFFFF" />
                  </g>

                  {/* 4. Korea (KR) */}
                  <g>
                    <motion.circle
                      cx="120"
                      cy="28"
                      r="5.5"
                      stroke="#2563EB"
                      strokeWidth="1.2"
                      fill="none"
                      animate={{ scale: [1, 2.2], opacity: [0.9, 0] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: 1.2 }}
                    />
                    <circle cx="120" cy="28" r="2.8" fill="#2563EB" />
                    <circle cx="120" cy="28" r="1" fill="#FFFFFF" />
                  </g>

                  {/* 5. Australia (AU) */}
                  <g>
                    <motion.circle
                      cx="126"
                      cy="55"
                      r="5.5"
                      stroke="#2563EB"
                      strokeWidth="1.2"
                      fill="none"
                      animate={{ scale: [1, 2.2], opacity: [0.9, 0] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: 1.6 }}
                    />
                    <circle cx="126" cy="55" r="2.8" fill="#2563EB" />
                    <circle cx="126" cy="55" r="1" fill="#FFFFFF" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* ---------------- CARD 3: 10X FASTER DELIVERY ---------------- */}
          <div
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
          </div>

          {/* ---------------- CARD 4: 99.99% UPTIME SLA ---------------- */}
          <div
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
          </div>
        </div>
      </div>
    </section>
  );
}
