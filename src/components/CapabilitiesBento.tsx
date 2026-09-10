'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  ArrowUpRight,
  Database,
  CheckCircle2,
  Lock,
  Eye,
  Box,
} from 'lucide-react';
import FoldText from './FoldText';
import { gsap, useGSAP } from '@/lib/gsap';

// Reusable 3D Photorealistic Sphere Marble with Specular Lighting
function MarbleSphere({
  color = 'blue',
  size = 40,
}: {
  color?: 'blue' | 'emerald' | 'gold' | 'cyan' | 'violet';
  size?: number;
}) {
  const colorMap = {
    blue: {
      id: 'marbleBlue',
      stops: [
        { offset: '0%', color: '#FFFFFF', opacity: 0.95 },
        { offset: '22%', color: '#93C5FD', opacity: 1 },
        { offset: '60%', color: '#2563EB', opacity: 1 },
        { offset: '100%', color: '#0F2557', opacity: 1 },
      ],
      glow: 'rgba(37, 99, 235, 0.35)',
      ring: 'rgba(147, 197, 253, 0.45)',
    },
    emerald: {
      id: 'marbleEmerald',
      stops: [
        { offset: '0%', color: '#FFFFFF', opacity: 0.95 },
        { offset: '24%', color: '#A7F3D0', opacity: 1 },
        { offset: '62%', color: '#059669', opacity: 1 },
        { offset: '100%', color: '#064E3B', opacity: 1 },
      ],
      glow: 'rgba(5, 150, 105, 0.32)',
      ring: 'rgba(167, 243, 208, 0.45)',
    },
    gold: {
      id: 'marbleGold',
      stops: [
        { offset: '0%', color: '#FFFFFF', opacity: 0.95 },
        { offset: '26%', color: '#FDE68A', opacity: 1 },
        { offset: '65%', color: '#D97706', opacity: 1 },
        { offset: '100%', color: '#78350F', opacity: 1 },
      ],
      glow: 'rgba(217, 119, 6, 0.32)',
      ring: 'rgba(253, 230, 138, 0.45)',
    },
    cyan: {
      id: 'marbleCyan',
      stops: [
        { offset: '0%', color: '#FFFFFF', opacity: 0.95 },
        { offset: '25%', color: '#BAE6FD', opacity: 1 },
        { offset: '60%', color: '#0284C7', opacity: 1 },
        { offset: '100%', color: '#075985', opacity: 1 },
      ],
      glow: 'rgba(2, 132, 199, 0.35)',
      ring: 'rgba(186, 230, 253, 0.45)',
    },
    violet: {
      id: 'marbleViolet',
      stops: [
        { offset: '0%', color: '#FFFFFF', opacity: 0.95 },
        { offset: '25%', color: '#DDD6FE', opacity: 1 },
        { offset: '62%', color: '#7C3AED', opacity: 1 },
        { offset: '100%', color: '#4C1D95', opacity: 1 },
      ],
      glow: 'rgba(124, 58, 237, 0.35)',
      ring: 'rgba(221, 214, 254, 0.45)',
    },
  };

  const scheme = colorMap[color];

  return (
    <div
      className="relative shrink-0 flex items-center justify-center select-none pointer-events-none"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {/* Soft Ambient Radial Glow Behind Sphere */}
      <div
        className="absolute rounded-full blur-md"
        style={{
          width: `${size * 0.95}px`,
          height: `${size * 0.95}px`,
          backgroundColor: scheme.glow,
        }}
      />

      <svg
        viewBox="0 0 100 100"
        className="w-full h-full relative z-10 drop-shadow-[0_4px_10px_rgba(0,0,0,0.18)]"
      >
        <defs>
          <radialGradient
            id={`${scheme.id}-${size}`}
            cx="32%"
            cy="28%"
            r="68%"
            fx="30%"
            fy="25%"
          >
            {scheme.stops.map((stop, i) => (
              <stop
                key={i}
                offset={stop.offset}
                stopColor={stop.color}
                stopOpacity={stop.opacity}
              />
            ))}
          </radialGradient>
        </defs>

        {/* 3D Sphere Body */}
        <circle cx="50" cy="50" r="46" fill={`url(#${scheme.id}-${size})`} />

        {/* 3D Wireframe Meridian Rings for Depth */}
        <ellipse
          cx="50"
          cy="50"
          rx="46"
          ry="18"
          fill="none"
          stroke={scheme.ring}
          strokeWidth="1.2"
          strokeDasharray="2 4"
          className="opacity-70"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="22"
          ry="46"
          fill="none"
          stroke={scheme.ring}
          strokeWidth="1.2"
          strokeDasharray="2 4"
          className="opacity-60"
        />

        {/* High-Gloss Specular Glint Highlight */}
        <ellipse
          cx="34"
          cy="28"
          rx="12"
          ry="7"
          transform="rotate(-25 34 28)"
          fill="#FFFFFF"
          fillOpacity="0.65"
          filter="blur(1px)"
        />
      </svg>
    </div>
  );
}

export default function CapabilitiesBento() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeScenario, setActiveScenario] = useState<'base' | 'opt'>('opt');

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden py-16 sm:py-24 lg:py-32 bg-[#FAF8F5] text-navy">
      {/* Seamless Edge Melting Gradients */}
      <div className="absolute top-0 left-0 right-0 h-32 sm:h-44 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-44 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent pointer-events-none z-[1]" />

      {/* Background Soft Lighting Gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-b from-blue-100/35 via-indigo-50/15 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 -right-20 w-[400px] h-[400px] bg-amber-50/40 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="site-container relative px-4 sm:px-8 lg:px-12 z-10">
        {/* ========================================================== */}
        {/* 1. EDITORIAL SECTION HEADER                                */}
        {/* ========================================================== */}
        <div className="max-w-[850px] mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200/85 shadow-xs mb-3.5 sm:mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cobalt animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase text-slate-600 font-plus-jakarta">
              ENTERPRISE CAPABILITIES
            </span>
          </motion.div>

          {/* Heading */}
          <h2 className="font-instrument text-[32px] xs:text-[40px] sm:text-[52px] lg:text-[60px] font-normal leading-[1.1] sm:leading-[1.06] tracking-tight text-navy">
            <FoldText text="Architected for" splitBy="word" trigger="scroll" duration={0.65} />{' '}
            <span className="italic text-cobalt font-normal">
              <FoldText text="clarity." splitBy="word" trigger="scroll" duration={0.65} />
            </span>{' '}
            <FoldText text="Engineered for" splitBy="word" trigger="scroll" duration={0.65} />{' '}
            <span className="italic text-cobalt font-normal">
              <FoldText text="speed." splitBy="word" trigger="scroll" duration={0.65} />
            </span>
          </h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3.5 sm:mt-4 text-[14px] sm:text-[16.5px] text-slate-500 font-dm-sans max-w-[620px] mx-auto leading-relaxed px-2"
          >
            Connect live enterprise data, constrain AI systems with auditable safety bounds, and drive autonomous workflows without replacing your stack.
          </motion.p>
        </div>

        {/* ========================================================== */}
        {/* 2. BENTO GRID (3 Top Cards + 2 Bottom Cards)                */}
        {/* ========================================================== */}
        <div ref={gridRef} className="flex flex-col gap-5 sm:gap-6 w-full max-w-[1380px] mx-auto">
          {/* ---------------- TOP ROW: 3 CARDS ---------------- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {/* ---------------- CARD 1: NO MORE BOTTLENECKS ---------------- */}
            <div
              className="group relative bg-gradient-to-br from-[#EBF3FF] via-[#F2F7FF] to-[#D6E7FC] hover:from-[#E3EFFF] hover:to-[#CCE1FA] rounded-[24px] sm:rounded-[30px] p-6 sm:p-7 border border-blue-200/80 shadow-[0_8px_25px_-5px_rgba(37,99,235,0.08)] hover:shadow-[0_18px_40px_-8px_rgba(37,99,235,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Inner ambient blue glow */}
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-gradient-to-bl from-blue-400/25 via-sky-300/15 to-transparent rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-gradient-to-tr from-indigo-400/15 to-transparent rounded-full blur-xl pointer-events-none" />

              <div className="relative z-10">
                {/* Header: Title + 3D Blue Sphere */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-instrument text-[26px] sm:text-[29px] font-normal leading-tight text-navy">
                    No More <span className="italic text-cobalt">Bottlenecks</span>
                  </h3>
                  <MarbleSphere color="blue" size={38} />
                </div>

                {/* Body Text */}
                <p className="text-[13.5px] sm:text-[14px] text-slate-600 font-dm-sans leading-relaxed">
                  Teams ask live system questions in{' '}
                  <span className="italic font-medium text-navy">natural language</span>, with safe access controls and reliable answers.
                </p>
              </div>

              {/* Visual Graphic: 3D Animated Atomic / Satellite Orbit */}
              <div className="relative w-full h-[180px] sm:h-[195px] mt-6 flex items-center justify-center">
                {/* 3 Fixed Orbital Rings with Continuous Flowing Dotted Dashes */}
                <svg className="w-full h-full overflow-visible" viewBox="0 0 260 180" fill="none">
                  {/* ORBIT 1: FIXED HORIZONTAL PLANE (0°) */}
                  <g>
                    <motion.path
                      d="M 25,90 a 105,42 0 1,0 210,0 a 105,42 0 1,0 -210,0"
                      fill="none"
                      stroke="#93C5FD"
                      strokeWidth="1.3"
                      strokeDasharray="4 6"
                      className="opacity-75"
                      animate={{ strokeDashoffset: [0, -100] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    />
                    {/* Rotating Black Dots on Orbit 1 */}
                    <circle r="4.2" fill="#0F172A">
                      <animateMotion
                        path="M 25,90 a 105,42 0 1,0 210,0 a 105,42 0 1,0 -210,0"
                        dur="8s"
                        repeatCount="indefinite"
                        begin="0s"
                      />
                    </circle>
                    <circle r="4.2" fill="#0F172A">
                      <animateMotion
                        path="M 25,90 a 105,42 0 1,0 210,0 a 105,42 0 1,0 -210,0"
                        dur="8s"
                        repeatCount="indefinite"
                        begin="-4s"
                      />
                    </circle>
                  </g>

                  {/* ORBIT 2: FIXED TILTED PLANE (35°) */}
                  <g transform="rotate(35 130 90)">
                    <motion.path
                      d="M 25,90 a 105,42 0 1,0 210,0 a 105,42 0 1,0 -210,0"
                      fill="none"
                      stroke="#60A5FA"
                      strokeWidth="1.3"
                      strokeDasharray="4 6"
                      className="opacity-70"
                      animate={{ strokeDashoffset: [0, -100] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
                    />
                    {/* Rotating Black Dots on Orbit 2 */}
                    <circle r="4.2" fill="#0F172A">
                      <animateMotion
                        path="M 25,90 a 105,42 0 1,0 210,0 a 105,42 0 1,0 -210,0"
                        dur="9s"
                        repeatCount="indefinite"
                        begin="-2.25s"
                      />
                    </circle>
                    <circle r="4.2" fill="#0F172A">
                      <animateMotion
                        path="M 25,90 a 105,42 0 1,0 210,0 a 105,42 0 1,0 -210,0"
                        dur="9s"
                        repeatCount="indefinite"
                        begin="-6.75s"
                      />
                    </circle>
                  </g>

                  {/* ORBIT 3: FIXED COUNTER-TILTED PLANE (-35°) */}
                  <g transform="rotate(-35 130 90)">
                    <motion.path
                      d="M 25,90 a 105,42 0 1,0 210,0 a 105,42 0 1,0 -210,0"
                      fill="none"
                      stroke="#93C5FD"
                      strokeWidth="1.3"
                      strokeDasharray="4 6"
                      className="opacity-70"
                      animate={{ strokeDashoffset: [0, 100] }}
                      transition={{ duration: 4.2, repeat: Infinity, ease: 'linear' }}
                    />
                    {/* Rotating Black Dots on Orbit 3 */}
                    <circle r="4.2" fill="#0F172A">
                      <animateMotion
                        path="M 235,90 a 105,42 0 1,0 -210,0 a 105,42 0 1,0 210,0"
                        dur="8.5s"
                        repeatCount="indefinite"
                        begin="-1.5s"
                      />
                    </circle>
                    <circle r="4.2" fill="#0F172A">
                      <animateMotion
                        path="M 235,90 a 105,42 0 1,0 -210,0 a 105,42 0 1,0 210,0"
                        dur="8.5s"
                        repeatCount="indefinite"
                        begin="-5.75s"
                      />
                    </circle>
                  </g>
                </svg>

                {/* Central Glossy Blue Sphere with Pulse Waves */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div
                    className="absolute w-16 h-16 rounded-full bg-blue-400/20"
                    animate={{ scale: [1, 1.55, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
                  />
                  <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#1E3A8A] via-[#2563EB] to-[#93C5FD] shadow-[0_4px_16px_rgba(37,99,235,0.45)] border border-white/60 flex items-center justify-center">
                    <div className="w-3.5 h-3.5 rounded-full bg-white/40 blur-[0.5px]" />
                  </div>
                </div>

                {/* Live Pill Query Overlay on Hover */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="absolute -bottom-1 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full border border-slate-200 shadow-xs flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-semibold text-slate-600 font-dm-sans">
                    Natural Language · Live Answers
                  </span>
                </motion.div>
              </div>
            </div>

            {/* ---------------- CARD 2: ONE TRUSTED VIEW ---------------- */}
            <div
              className="group relative bg-gradient-to-br from-[#EBF3FF] via-[#F2F7FF] to-[#D6E7FC] hover:from-[#E3EFFF] hover:to-[#CCE1FA] rounded-[24px] sm:rounded-[30px] p-6 sm:p-7 border border-blue-200/80 shadow-[0_8px_25px_-5px_rgba(37,99,235,0.08)] hover:shadow-[0_18px_40px_-8px_rgba(37,99,235,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Inner ambient blue glow */}
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-gradient-to-bl from-emerald-400/20 via-sky-300/15 to-transparent rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-gradient-to-tr from-blue-400/15 to-transparent rounded-full blur-xl pointer-events-none" />

              <div className="relative z-10">
                {/* Header: Title + 3D Emerald Sphere */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-instrument text-[26px] sm:text-[29px] font-normal leading-tight text-navy">
                    One <span className="italic text-emerald-700">Trusted</span> View
                  </h3>
                  <MarbleSphere color="emerald" size={38} />
                </div>

                {/* Body Text */}
                <p className="text-[13.5px] sm:text-[14px] text-slate-600 font-dm-sans leading-relaxed">
                  We connect CRM, ERP, and BI data into a single{' '}
                  <span className="italic font-medium text-navy">source of truth</span> — for analytics, ops, and decisions.
                </p>
              </div>

              {/* Visual Graphic: Converging Data Pipeline to Unified API */}
              <div className="relative w-full h-[180px] sm:h-[195px] mt-6 flex items-center justify-center px-1">
                <svg className="w-full h-full" viewBox="0 0 280 160" fill="none">
                  {/* Curved Connection Lines from 4 Sources converging to Central Gateway */}
                  {/* CRM Path (top) */}
                  <path d="M 68 30 C 115 30, 125 80, 148 80" stroke="#94A3B8" strokeWidth="1.5" />
                  {/* ERP Path (mid-top) */}
                  <path d="M 68 62 C 105 62, 125 80, 148 80" stroke="#94A3B8" strokeWidth="1.5" />
                  {/* BI Path (mid-bottom) */}
                  <path d="M 68 98 C 105 98, 125 80, 148 80" stroke="#94A3B8" strokeWidth="1.5" />
                  {/* DW Path (bottom) */}
                  <path d="M 68 130 C 115 130, 125 80, 148 80" stroke="#94A3B8" strokeWidth="1.5" />

                  {/* Outgoing Path from Gateway to API */}
                  <path d="M 166 80 L 210 80" stroke="#0F172A" strokeWidth="1.8" />

                  {/* Flowing Signal Dots */}
                  <motion.circle
                    r="2.5"
                    fill="#059669"
                    animate={{
                      cx: [68, 110, 148],
                      cy: [30, 50, 80],
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.circle
                    r="2.5"
                    fill="#0284C7"
                    animate={{
                      cx: [68, 105, 148],
                      cy: [62, 70, 80],
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.55 }}
                  />
                  <motion.circle
                    r="2.5"
                    fill="#7C3AED"
                    animate={{
                      cx: [68, 105, 148],
                      cy: [98, 90, 80],
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
                  />
                  <motion.circle
                    r="2.5"
                    fill="#D97706"
                    animate={{
                      cx: [68, 110, 148],
                      cy: [130, 110, 80],
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 1.65 }}
                  />
                </svg>

                {/* Left 4 Source Badges */}
                <div className="absolute left-2 flex flex-col gap-2.5">
                  {['CRM', 'ERP', 'BI', 'DW'].map((source) => (
                    <div
                      key={source}
                      className="px-2.5 py-0.5 bg-white/95 rounded-full border border-blue-100/90 shadow-xs text-[10.5px] font-bold text-slate-700 font-dm-sans min-w-[42px] text-center"
                    >
                      {source}
                    </div>
                  ))}
                </div>

                {/* Central Verified Gateway Junction */}
                <div className="absolute left-[51%] -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#0A1628] text-white flex items-center justify-center shadow-md shadow-navy/20 border border-slate-700/80">
                    <Check className="w-4 h-4 stroke-[2.8] text-emerald-400" />
                  </div>
                </div>

                {/* Right API Capsule */}
                <div className="absolute right-4 px-3.5 py-1 bg-[#0A1628] rounded-full border border-slate-700/80 shadow-md flex items-center gap-1.5">
                  <span className="text-[11px] font-bold text-white tracking-wide font-dm-sans">
                    API
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>
            </div>

            {/* ---------------- CARD 3: SAFE AI OUTPUTS ---------------- */}
            <div
              className="group relative bg-gradient-to-br from-[#EBF3FF] via-[#F2F7FF] to-[#D6E7FC] hover:from-[#E3EFFF] hover:to-[#CCE1FA] rounded-[24px] sm:rounded-[30px] p-6 sm:p-7 border border-blue-200/80 shadow-[0_8px_25px_-5px_rgba(37,99,235,0.08)] hover:shadow-[0_18px_40px_-8px_rgba(37,99,235,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Inner ambient blue glow */}
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-gradient-to-bl from-amber-400/20 via-sky-300/15 to-transparent rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-gradient-to-tr from-blue-400/15 to-transparent rounded-full blur-xl pointer-events-none" />

              <div className="relative z-10">
                {/* Header: Title + 3D Gold Sphere */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-instrument text-[26px] sm:text-[29px] font-normal leading-tight text-navy">
                    Safe AI <span className="italic text-amber-700">Outputs</span>
                  </h3>
                  <MarbleSphere color="gold" size={38} />
                </div>

                {/* Body Text */}
                <p className="text-[13.5px] sm:text-[14px] text-slate-600 font-dm-sans leading-relaxed">
                  LLMs are constrained with{' '}
                  <span className="italic font-medium text-navy">code, evals, and human checks</span> — so results stay predictable and auditable.
                </p>
              </div>

              {/* Visual Graphic: Mindmap of Deterministic Verification Nodes */}
              <div className="relative w-full h-[180px] sm:h-[195px] mt-6 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 260 170" fill="none">
                  {/* Radiating lines from center to 4 corner nodes */}
                  <line x1="130" y1="85" x2="60" y2="40" stroke="#CBD5E1" strokeWidth="1.4" />
                  <line x1="130" y1="85" x2="200" y2="40" stroke="#CBD5E1" strokeWidth="1.4" />
                  <line x1="130" y1="85" x2="60" y2="130" stroke="#CBD5E1" strokeWidth="1.4" />
                  <line x1="130" y1="85" x2="200" y2="130" stroke="#CBD5E1" strokeWidth="1.4" />

                  {/* Pulsing signal on lines */}
                  <motion.circle
                    r="2.2"
                    fill="#D97706"
                    animate={{ cx: [130, 60], cy: [85, 40], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.circle
                    r="2.2"
                    fill="#D97706"
                    animate={{ cx: [130, 200], cy: [85, 40], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  />
                  <motion.circle
                    r="2.2"
                    fill="#D97706"
                    animate={{ cx: [130, 60], cy: [85, 130], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  />
                  <motion.circle
                    r="2.2"
                    fill="#D97706"
                    animate={{ cx: [130, 200], cy: [85, 130], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                  />
                </svg>

                {/* Central Dark Pill Badge: deterministic */}
                <div className="absolute z-10 px-3 py-1 rounded-full bg-[#0A1628] text-white border border-slate-700/80 shadow-md flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-[11px] font-bold font-dm-sans tracking-wide">
                    deterministic
                  </span>
                </div>

                {/* 4 Connected Verification Nodes */}
                <div className="absolute top-4 left-4 px-2.5 py-0.5 rounded-full bg-white/95 border border-slate-200/90 shadow-xs flex items-center gap-1">
                  <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                  <span className="text-[10px] font-semibold text-slate-700 font-dm-sans">
                    Trusted
                  </span>
                </div>

                <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-white/95 border border-slate-200/90 shadow-xs flex items-center gap-1">
                  <span className="text-[10px] font-semibold text-slate-700 font-dm-sans">
                    Scored 99%
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 px-2.5 py-0.5 rounded-full bg-white/95 border border-slate-200/90 shadow-xs flex items-center gap-1">
                  <Eye className="w-2.5 h-2.5 text-blue-600" />
                  <span className="text-[10px] font-semibold text-slate-700 font-dm-sans">
                    Transparent
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 px-2.5 py-0.5 rounded-full bg-white/95 border border-slate-200/90 shadow-xs flex items-center gap-1">
                  <Lock className="w-2.5 h-2.5 text-amber-600" />
                  <span className="text-[10px] font-semibold text-slate-700 font-dm-sans">
                    Verifiable
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------- BOTTOM ROW: 2 WIDER CARDS ---------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
            {/* ---------------- CARD 4 (7 Cols): ROI FROM TOOLS ---------------- */}
            <div
              className="lg:col-span-7 group relative bg-gradient-to-br from-[#EBF3FF] via-[#F2F7FF] to-[#D6E7FC] hover:from-[#E3EFFF] hover:to-[#CCE1FA] rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 border border-blue-200/80 shadow-[0_8px_25px_-5px_rgba(37,99,235,0.08)] hover:shadow-[0_18px_40px_-8px_rgba(37,99,235,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Inner ambient blue glow */}
              <div className="absolute -top-12 -right-12 w-56 h-56 bg-gradient-to-bl from-cyan-400/25 via-blue-400/15 to-transparent rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-gradient-to-tr from-indigo-400/15 to-transparent rounded-full blur-xl pointer-events-none" />

              <div className="relative z-10">
                {/* Header: Title + 3D Cyan Sphere */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-instrument text-[26px] sm:text-[32px] font-normal leading-tight text-navy">
                    ROI From <span className="italic text-cyan-600">Tools</span>
                  </h3>
                  <MarbleSphere color="cyan" size={42} />
                </div>

                {/* Body Text */}
                <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 font-dm-sans leading-relaxed max-w-[560px]">
                  We layer <span className="italic font-medium text-navy">agents</span> on top of your existing data lakes and SaaS stack — driving real decisions and workflows without rip-and-replace.
                </p>
              </div>

              {/* Visual Graphic: Enterprise Agent Deployment Console Card */}
              <div className="mt-8 flex flex-col gap-3 relative z-10">
                {/* Deployment Pill Card with Cube Icon */}
                <div className="bg-white/95 rounded-2xl p-3.5 sm:p-4 border border-blue-100/90 shadow-xs flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-cobalt shrink-0">
                      <Box className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[13px] sm:text-[14px] text-slate-700 font-dm-sans leading-snug">
                        Deploy <strong className="font-bold text-navy uppercase font-plus-jakarta tracking-wide">AGENTS</strong> on top of existing data lakes and SaaS.
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 rounded-full border border-emerald-100">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-emerald-700 uppercase font-dm-sans">
                      Active
                    </span>
                  </div>
                </div>

                {/* Connected Enterprise Stack Integrations */}
                <div className="flex flex-wrap items-center justify-between gap-2 px-1 text-[11px] sm:text-[12px] font-medium text-slate-500 font-dm-sans">
                  <div className="flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-slate-400" />
                    <span>Snowflake</span>
                    <span className="text-slate-300">•</span>
                    <span>PostgreSQL</span>
                    <span className="text-slate-300">•</span>
                    <span>Salesforce</span>
                    <span className="text-slate-300">•</span>
                    <span>AWS S3</span>
                  </div>
                  <div className="flex items-center gap-1 text-cobalt font-semibold">
                    <span>Zero Migration</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* ---------------- CARD 5 (5 Cols): FAST SCENARIOS ---------------- */}
            <div
              className="lg:col-span-5 group relative bg-gradient-to-br from-[#EBF3FF] via-[#F2F7FF] to-[#D6E7FC] hover:from-[#E3EFFF] hover:to-[#CCE1FA] rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 border border-blue-200/80 shadow-[0_8px_25px_-5px_rgba(37,99,235,0.08)] hover:shadow-[0_18px_40px_-8px_rgba(37,99,235,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Inner ambient blue glow */}
              <div className="absolute -top-12 -right-12 w-56 h-56 bg-gradient-to-bl from-blue-400/25 via-indigo-400/15 to-transparent rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-gradient-to-tr from-sky-400/15 to-transparent rounded-full blur-xl pointer-events-none" />

              <div className="relative z-10">
                {/* Header: Title */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-instrument text-[26px] sm:text-[32px] font-normal leading-tight text-navy">
                    Fast <span className="italic text-cobalt">Scenarios</span>
                  </h3>
                  <div className="flex items-center gap-1 bg-white/90 p-1 rounded-full border border-slate-200/90 shadow-xs">
                    <button
                      type="button"
                      onClick={() => setActiveScenario('base')}
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold font-dm-sans transition-all cursor-pointer ${
                        activeScenario === 'base'
                          ? 'bg-[#0A1628] text-white shadow-xs'
                          : 'text-slate-500 hover:text-navy'
                      }`}
                    >
                      Base
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveScenario('opt')}
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold font-dm-sans transition-all cursor-pointer ${
                        activeScenario === 'opt'
                          ? 'bg-cobalt text-white shadow-xs'
                          : 'text-slate-500 hover:text-navy'
                      }`}
                    >
                      What If
                    </button>
                  </div>
                </div>

                {/* Body Text */}
                <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 font-dm-sans leading-relaxed">
                  &ldquo;What If&rdquo; changes run quickly and correctly with{' '}
                  <span className="italic font-medium text-navy">deterministic models</span>, not fragile spreadsheets.
                </p>
              </div>

              {/* Visual Graphic: Interactive Financial / Operational Scenario Table */}
              <div className="bg-white/95 rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs mt-8">
                {/* 3 Metric Columns */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-medium text-slate-400 font-dm-sans">
                      Revenue
                    </div>
                    <motion.div
                      key={`rev-${activeScenario}`}
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      className="text-[14px] xs:text-[16px] sm:text-[18px] font-extrabold text-navy font-plus-jakarta mt-0.5"
                    >
                      {activeScenario === 'opt' ? '$12,480K' : '$10,000K'}
                    </motion.div>
                  </div>

                  <div>
                    <div className="text-[10px] sm:text-[11px] font-medium text-slate-400 font-dm-sans">
                      Service
                    </div>
                    <motion.div
                      key={`serv-${activeScenario}`}
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      className="text-[14px] xs:text-[16px] sm:text-[18px] font-extrabold text-emerald-600 font-plus-jakarta mt-0.5"
                    >
                      {activeScenario === 'opt' ? '99.8%' : '98.4%'}
                    </motion.div>
                  </div>

                  <div>
                    <div className="text-[10px] sm:text-[11px] font-medium text-slate-400 font-dm-sans">
                      Cost
                    </div>
                    <motion.div
                      key={`cost-${activeScenario}`}
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      className="text-[14px] xs:text-[16px] sm:text-[18px] font-extrabold text-navy font-plus-jakarta mt-0.5"
                    >
                      {activeScenario === 'opt' ? '$23,200K' : '$28,000K'}
                    </motion.div>
                  </div>
                </div>

                {/* Animated Gradient Velocity / Confidence Progress Bar */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-1.5">
                  <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 font-dm-sans">
                    <span>Deterministic Speed</span>
                    <span className="text-cobalt">180ms SLA</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden relative">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-blue-600 via-sky-400 to-emerald-400"
                      animate={{
                        width: activeScenario === 'opt' ? ['70%', '94%', '88%'] : ['55%', '65%', '60%'],
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
