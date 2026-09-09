'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    id: 'aifod',
    title: 'AIFOD · United Nations',
    subtitle: 'AI for Development working group',
    logoType: 'un',
    link: '#',
  },
  {
    id: 'aiforgood',
    title: 'AI for Good',
    subtitle: 'Global AI for Social Impact',
    logoType: 'aiforgood',
    link: '#',
  },
  {
    id: 'gitex',
    title: 'Gitex Global',
    subtitle: "World's largest tech expo · Dubai",
    logoType: 'gitex',
    link: '#',
  },
  {
    id: 'startupindia',
    title: 'Startup India · DPIIT',
    subtitle: 'Govt. of India — recognized startup',
    logoType: 'startupindia',
    link: '#',
  },
  {
    id: 'microsoft',
    title: 'Microsoft for Startups',
    subtitle: 'Founders Hub partner',
    logoType: 'microsoft',
    link: '#',
  },
  {
    id: 'function1',
    title: 'Function1',
    subtitle: 'Industry event & community',
    logoType: 'function',
    link: '#',
  },
];

const networkNodes = [
  { cx: 160, cy: 220, r: 4.5, delay: 0 },
  { cx: 220, cy: 340, r: 4, delay: 0.8 },
  { cx: 430, cy: 390, r: 5, delay: 1.6 },
  { cx: 720, cy: 190, r: 3.5, delay: 0.4 },
  { cx: 990, cy: 340, r: 5, delay: 1.2 },
  { cx: 1220, cy: 220, r: 4.5, delay: 2.0 },
  { cx: 1350, cy: 320, r: 4, delay: 0.6 },
];

function ProgramLogo({ type }: { type: string }) {
  switch (type) {
    case 'un':
      return (
        <svg
          viewBox="0 0 100 100"
          className="w-10 h-10 sm:w-11 sm:h-11 text-[#0A1628] shrink-0"
          fill="currentColor"
        >
          {/* Detailed UN Emblem Wreath & Grid */}
          <circle
            cx="50"
            cy="50"
            r="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeDasharray="3 3.5"
          />
          <circle
            cx="50"
            cy="50"
            r="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="50"
            y1="24"
            x2="50"
            y2="76"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="24"
            y1="50"
            x2="76"
            y2="50"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M22 68C12 55 12 35 22 22C24 25 24 30 22 34C20 42 20 52 24 60Z"
            fill="currentColor"
          />
          <path
            d="M78 68C88 55 88 35 78 22C76 25 76 30 78 34C80 42 80 52 76 60Z"
            fill="currentColor"
          />
          <path
            d="M28 76C18 65 16 45 28 30C28 35 29 40 28 46C27 54 28 64 32 70Z"
            fill="currentColor"
          />
          <path
            d="M72 76C82 65 84 45 72 30C72 35 71 40 72 46C73 54 72 64 68 70Z"
            fill="currentColor"
          />
        </svg>
      );
    case 'aiforgood':
      return (
        <svg
          viewBox="0 0 40 40"
          className="w-10 h-10 text-[#0A1628] shrink-0"
          fill="currentColor"
        >
          <circle cx="20" cy="20" r="7" />
          {[...Array(12)].map((_, i) => (
            <rect
              key={i}
              x="18.5"
              y="3"
              width="3"
              height="6"
              rx="1.5"
              transform={`rotate(${i * 30} 20 20)`}
            />
          ))}
        </svg>
      );
    case 'gitex':
      return (
        <div className="flex flex-col items-start leading-none shrink-0 pr-1">
          <span className="font-plus-jakarta font-black text-[15px] sm:text-[16px] tracking-tight text-[#0A1628]">
            GITEX
          </span>
          <span className="font-mono text-[7.5px] font-bold tracking-[0.28em] text-[#0A1628] mt-0.5">
            GLOBAL
          </span>
        </div>
      );
    case 'startupindia':
      return (
        <div className="shrink-0 flex items-center pr-1">
          <span className="font-plus-jakarta font-extrabold text-[13.5px] sm:text-[14.5px] text-[#0A1628] tracking-tight">
            #startupindia
          </span>
        </div>
      );
    case 'microsoft':
      return (
        <div className="grid grid-cols-2 gap-1 w-6 h-6 shrink-0 pr-1">
          <div className="w-2.5 h-2.5 bg-[#0A1628] rounded-xs" />
          <div className="w-2.5 h-2.5 bg-[#0A1628] rounded-xs" />
          <div className="w-2.5 h-2.5 bg-[#0A1628] rounded-xs" />
          <div className="w-2.5 h-2.5 bg-[#0A1628] rounded-xs" />
        </div>
      );
    case 'function':
      return (
        <div className="shrink-0 pr-1">
          <span className="font-mono font-bold text-[11px] sm:text-[12px] tracking-[0.2em] text-[#0A1628]">
            FUNCTION
          </span>
        </div>
      );
    default:
      return null;
  }
}

export default function GlobalProgramsSection() {
  return (
    <section
      id="programs"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#FAF8F5] text-navy overflow-hidden"
    >
      {/* Background Soft Lighting Glows */}
      <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-gradient-to-b from-blue-100/35 via-indigo-50/20 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-blue-100/25 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Background Global Network Map & Flight Arc Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-55 overflow-hidden">
        <svg
          viewBox="0 0 1440 600"
          className="w-full h-full object-cover"
          fill="none"
        >
          {/* Subtle World Map Dotted Pattern */}
          <pattern
            id="dotGridPrograms"
            x="0"
            y="0"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="#94A3B8" opacity="0.35" />
          </pattern>
          <rect width="1440" height="600" fill="url(#dotGridPrograms)" />

          {/* Curved Parabolic Global Flight Paths */}
          <path
            d="M 120,200 Q 300,90 480,240 T 880,220 T 1320,180"
            stroke="#93C5FD"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            fill="none"
          />
          <path
            d="M 220,320 Q 550,150 920,300 T 1380,260"
            stroke="#93C5FD"
            strokeWidth="1"
            strokeDasharray="3 5"
            fill="none"
          />

          {/* Active Global Blinking & Pulsing Radar Nodes */}
          {networkNodes.map((node, i) => (
            <g key={i}>
              {/* Expanding Radar Ring */}
              <motion.circle
                cx={node.cx}
                cy={node.cy}
                r={node.r}
                animate={{
                  r: [node.r, node.r * 3.2, node.r * 4],
                  opacity: [0.8, 0.25, 0],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: 'easeOut',
                  delay: node.delay,
                }}
                stroke="#2563EB"
                strokeWidth="1.4"
                fill="#93C5FD"
                fillOpacity="0.2"
              />

              {/* Secondary Soft Glow Pulse */}
              <motion.circle
                cx={node.cx}
                cy={node.cy}
                r={node.r * 1.8}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.35, 0.8, 0.35],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: node.delay,
                }}
                fill="#93C5FD"
                fillOpacity="0.35"
              />

              {/* Solid Core Blinking Dot */}
              <motion.circle
                cx={node.cx}
                cy={node.cy}
                r={node.r}
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.65, 1, 0.65],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: node.delay,
                }}
                fill="#2563EB"
              />
            </g>
          ))}
        </svg>
      </div>

      <div className="site-container relative px-4 sm:px-8 lg:px-12 max-w-[1340px] mx-auto z-10">
        {/* ========================================================== */}
        {/* TOP-RIGHT HANDWRITTEN SCRIPT ANNOTATION                    */}
        {/* ========================================================== */}
        <div className="hidden lg:flex absolute top-4 right-10 z-20 flex-col items-center pointer-events-none">
          <span className="font-serif italic text-[14.5px] sm:text-[15.5px] text-slate-700 tracking-wide rotate-[6deg] select-none text-left">
            Ideas <br />
            <span className="italic">in many places.</span> <br />
            <span className="italic font-medium">Impact everywhere.</span>
          </span>
          <svg
            className="w-8 h-8 text-slate-600 mt-1 rotate-[-25deg]"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M 28,6 Q 14,14 18,30"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 12,25 L 18,31 L 24,26"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* ========================================================== */}
        {/* CENTERED HEADER SECTION                                    */}
        {/* ========================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.2em] font-bold text-slate-700 uppercase">
              WHERE YOU&apos;LL FIND US
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="font-plus-jakarta text-[38px] sm:text-[50px] lg:text-[58px] font-extrabold text-[#0A1628] leading-[1.08] tracking-[-0.03em] mb-4">
            Part of the programs <br />
            shaping <span className="font-instrument italic font-normal text-blue-600">global AI</span>.
          </h2>

          {/* Subtitle */}
          <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 font-dm-sans leading-relaxed max-w-xl mx-auto">
            We contribute to, speak at, and build alongside the organizations driving AI forward.
          </p>
        </div>

        {/* ========================================================== */}
        {/* 6 PARTNER / PROGRAM CARDS (3 COLUMNS X 2 ROWS)             */}
        {/* ========================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-14 sm:mb-16">
          {programs.map((prog, idx) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group bg-white/85 hover:bg-white rounded-2xl sm:rounded-[22px] p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer"
            >
              <div className="flex items-center gap-4 sm:gap-5 min-w-0 flex-1">
                {/* Logo */}
                <ProgramLogo type={prog.logoType} />

                {/* Text Content */}
                <div className="min-w-0 flex-1">
                  <h3 className="font-instrument italic text-[17px] sm:text-[18.5px] font-normal text-blue-600 leading-tight truncate group-hover:text-blue-700 transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-[12px] sm:text-[12.5px] text-slate-500 font-dm-sans leading-snug mt-1 truncate">
                    {prog.subtitle}
                  </p>
                </div>
              </div>

              {/* Arrow Action Circle */}
              <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-300 group-hover:bg-blue-50 transition-all shrink-0">
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ========================================================== */}
        {/* BOTTOM METRICS STRIP + MISSION STATEMENT                   */}
        {/* ========================================================== */}
        <div className="pt-8 sm:pt-10 border-t border-slate-200/80 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Editorial Tag */}
          <div className="hidden lg:flex items-center gap-3">
            <span className="w-6 h-[1.5px] bg-slate-400" />
            <span className="text-[10px] font-mono tracking-[0.2em] text-slate-400 uppercase">
              GLOBAL PARTNERS · <span className="font-bold text-slate-600">REAL IMPACT</span>
            </span>
          </div>

          {/* 3 Metrics */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {/* Stat 1 */}
            <div className="flex items-baseline gap-2.5">
              <span className="font-instrument italic text-[34px] sm:text-[38px] font-normal text-blue-600 leading-none">
                6+
              </span>
              <span className="text-[10px] font-mono tracking-[0.18em] text-slate-500 uppercase">
                GLOBAL PROGRAMS
              </span>
            </div>

            <div className="h-6 w-[1px] bg-slate-200 hidden sm:block" />

            {/* Stat 2 */}
            <div className="flex items-baseline gap-2.5">
              <span className="font-instrument italic text-[34px] sm:text-[38px] font-normal text-blue-600 leading-none">
                4
              </span>
              <span className="text-[10px] font-mono tracking-[0.18em] text-slate-500 uppercase">
                CONTINENTS
              </span>
            </div>

            <div className="h-6 w-[1px] bg-slate-200 hidden sm:block" />

            {/* Stat 3 */}
            <div className="flex items-baseline gap-2.5">
              <span className="font-instrument italic text-[34px] sm:text-[38px] font-normal text-blue-600 leading-none">
                1
              </span>
              <span className="text-[10px] font-mono tracking-[0.18em] text-slate-500 uppercase">
                SHARED MISSION
              </span>
            </div>
          </div>

          {/* Right Quote / Tagline */}
          <div className="font-instrument italic text-[18px] sm:text-[20px] text-slate-700 text-center lg:text-right">
            A more capable, <br className="hidden sm:inline" />
            inclusive tomorrow.
          </div>
        </div>
      </div>
    </section>
  );
}
