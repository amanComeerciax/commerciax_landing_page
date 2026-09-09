'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Compass,
  FileText,
  DollarSign,
  PieChart,
  Megaphone,
  Users,
} from 'lucide-react';

const fondaTabs = [
  {
    id: 'overview',
    label: 'Overview',
    icon: Compass,
    title: 'Your idea,',
    titleItalic: 'unpacked.',
    checklist: [
      'Market size validated',
      'Business plan generated',
      'Financial model ready',
      'Pitch deck drafted',
    ],
    tag: 'From idea to investor-ready',
    chartType: 'curve',
  },
  {
    id: 'business_plan',
    label: 'Business Plan',
    icon: FileText,
    title: 'Executive strategy,',
    titleItalic: 'codified.',
    checklist: [
      'Problem & solution matrix',
      'Defensible moat & advantage',
      'Competitor breakdown',
      'Unit economics mapped',
    ],
    tag: 'Strategy Score: 98/100',
    chartType: 'bars',
  },
  {
    id: 'financial_model',
    label: 'Financial Model',
    icon: DollarSign,
    title: '5-year forecast,',
    titleItalic: 'automated.',
    checklist: [
      'MRR & ARR growth model',
      'CAC, LTV & payback periods',
      'Hiring plan & headcount',
      'Cash runway & burn multiple',
    ],
    tag: '$1.4M ARR projected Y2',
    chartType: 'growth',
  },
  {
    id: 'pitch_deck',
    label: 'Pitch Deck',
    icon: PieChart,
    title: '12 investor slides,',
    titleItalic: 'story-driven.',
    checklist: [
      'Narrative & problem framing',
      'Market opportunity & TAM',
      'Traction & milestones',
      'One-click PDF / PPT export',
    ],
    tag: 'Series A Ready Deck',
    chartType: 'deck',
  },
  {
    id: 'go_to_market',
    label: 'Go-to-Market',
    icon: Megaphone,
    title: 'Growth channels,',
    titleItalic: 'unlocked.',
    checklist: [
      'Ideal customer profile (ICP)',
      '4 launch funnel playbooks',
      'SEO & inbound strategy',
      'Cold outbound sequences',
    ],
    tag: '3.8x Acquisition Lift',
    chartType: 'funnel',
  },
  {
    id: 'investor_list',
    label: 'Investor List',
    icon: Users,
    title: 'Targeted VC,',
    titleItalic: 'matchmaking.',
    checklist: [
      '120+ active seed funds',
      'Partner thesis match',
      'Warm intro pathways',
      'CRM pipeline tracker',
    ],
    tag: '94% Thesis Alignment',
    chartType: 'crm',
  },
];

export default function SaaSProductsSection() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-cycle through menu items every 3.2 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveTabIdx((prev) => (prev + 1) % fondaTabs.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentTab = fondaTabs[activeTabIdx];

  return (
    <section
      id="products"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#FAF8F5] text-navy overflow-hidden"
    >
      {/* Background Soft Lighting & Trajectory Lines */}
      <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-gradient-to-b from-blue-100/40 via-indigo-50/20 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-blue-100/25 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Decorative Curved Arc Wireframe Background Line */}
      <div className="hidden lg:block absolute -top-10 right-10 w-[700px] h-[700px] pointer-events-none z-0 opacity-40">
        <svg viewBox="0 0 700 700" fill="none" className="w-full h-full">
          <circle
            cx="500"
            cy="200"
            r="380"
            stroke="#93C5FD"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            fill="none"
          />
        </svg>
      </div>

      <div className="site-container relative px-4 sm:px-8 lg:px-12 max-w-[1340px] mx-auto z-10">
        {/* ========================================================== */}
        {/* MAIN 2-COLUMN GRID (LEFT: CONTENT & CARDS | RIGHT: MOCKUPS) */}
        {/* ========================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start mb-16 sm:mb-20">
          {/* ---------------- LEFT COLUMN (5 COLS) ---------------- */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span className="text-[11px] font-mono tracking-[0.2em] font-bold text-slate-700 uppercase">
                SAAS PRODUCTS
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-instrument text-[42px] sm:text-[54px] lg:text-[62px] font-normal text-[#0A1628] leading-[1.06] tracking-[-0.03em] mb-5">
              Two SaaS products, <br />
              <span className="italic text-blue-600">one promise</span>.
            </h2>

            {/* Subtitle Description */}
            <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 font-dm-sans leading-relaxed mb-8 sm:mb-10 max-w-md">
              Forged on our own delivery frontlines. Battle-tested, self-serve, and ready for your team.
            </p>

            {/* Two Stacked Product Feature Cards */}
            <div className="space-y-4 sm:space-y-5">
              {/* Product 1: Neweb.ai */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white/85 hover:bg-white rounded-2xl sm:rounded-[22px] p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Icon Badge */}
                  <div className="w-14 h-14 sm:w-15 sm:h-15 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform p-2.5">
                    <img
                      src="/neweb.png"
                      alt="Neweb.ai"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-plus-jakarta font-bold text-[18px] sm:text-[19px] text-[#0A1628] leading-tight group-hover:text-blue-600 transition-colors">
                      Neweb.ai
                    </h3>
                    <p className="text-[13px] font-semibold text-slate-700 font-plus-jakarta mt-0.5">
                      Your entire online presence, on AI.
                    </p>
                    <p className="text-[12px] text-slate-500 font-dm-sans leading-relaxed mt-1">
                      Build, manage, and grow your website with AI — from content to SEO to performance.
                    </p>
                  </div>
                </div>

                {/* Arrow Action Circle */}
                <div className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-300 group-hover:bg-blue-50 transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.div>

              {/* Product 2: Fonda.co */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="group relative bg-white/85 hover:bg-white rounded-2xl sm:rounded-[22px] p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Icon Badge */}
                  <div className="w-14 h-14 sm:w-15 sm:h-15 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform p-2.5">
                    <img
                      src="/fondaa.png"
                      alt="Fonda.co"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-plus-jakarta font-bold text-[18px] sm:text-[19px] text-[#0A1628] leading-tight group-hover:text-blue-600 transition-colors">
                      Fonda.co
                    </h3>
                    <p className="text-[13px] font-semibold text-slate-700 font-plus-jakarta mt-0.5">
                      The AI co-founder for your idea.
                    </p>
                    <p className="text-[12px] text-slate-500 font-dm-sans leading-relaxed mt-1">
                      Validate, plan, and launch — with investor-ready outputs in hours, not months.
                    </p>
                  </div>
                </div>

                {/* Arrow Action Circle */}
                <div className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-300 group-hover:bg-blue-50 transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* ---------------- RIGHT COLUMN (7 COLS): OVERLAPPING UI MOCKUPS ---------------- */}
          <div className="lg:col-span-7 relative pt-16 sm:pt-20">
            {/* Handwritten Script Note + Arrow for Fonda.co (Lowered towards Fonda card) */}
            <div className="hidden sm:flex absolute top-36 sm:top-40 lg:top-44 -left-2 sm:left-2 lg:left-4 z-30 flex-col items-center pointer-events-none">
              <span className="font-serif italic text-[14.5px] sm:text-[15.5px] text-slate-700 tracking-wide rotate-[-8deg] select-none whitespace-nowrap">
                Go from
                <br />
                idea to impact.
              </span>
              <svg
                className="w-7 h-7 text-slate-600 mt-1 rotate-[-15deg]"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M 16,6 Q 28,18 20,32"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 14,27 L 20,33 L 26,28"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Top-Right Handwritten Script Note + Arrow for Neweb (Moved higher above the card) */}
            <div className="hidden sm:flex absolute top-0 sm:top-2 right-6 lg:right-10 z-30 flex-col items-center pointer-events-none">
              <span className="font-serif italic text-[14.5px] sm:text-[15.5px] text-slate-700 tracking-wide rotate-[6deg] select-none whitespace-nowrap">
                Build
                <br />
                what&apos;s next.
              </span>
              <svg
                className="w-7 h-7 text-slate-600 mt-0.5 rotate-[-20deg]"
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
            {/* BACK CARD: NEWEB.AI BROWSER WINDOW                         */}
            {/* ========================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative ml-auto w-full max-w-[560px] bg-white rounded-[24px] border border-slate-200/90 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.06)] overflow-hidden pt-5 px-6 pb-28 sm:pb-32"
            >
              {/* Browser Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                {/* Logo */}
                <div className="flex items-center gap-2">
                  <img
                    src="/neweb.png"
                    alt="neweb.ai"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="font-plus-jakarta font-bold text-[15px] text-[#0A1628] tracking-tight">
                    neweb.ai
                  </span>
                </div>

                {/* Nav Links */}
                <div className="hidden sm:flex items-center gap-5 text-[12px] font-dm-sans text-slate-500">
                  <span className="text-slate-900 font-medium">Home</span>
                  <span className="hover:text-slate-800 transition-colors">Pages</span>
                  <span className="hover:text-slate-800 transition-colors">SEO</span>
                  <span className="hover:text-slate-800 transition-colors">Analytics</span>
                </div>

                {/* Publish Button */}
                <button className="px-4 py-1.5 rounded-full bg-[#0A1628] text-white text-[11.5px] font-semibold font-dm-sans shadow-xs hover:bg-slate-800 transition-colors">
                  Publish
                </button>
              </div>

              {/* Mockup Body Content */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                {/* Left Editorial Headline */}
                <div className="sm:col-span-6">
                  <h4 className="font-instrument text-[28px] sm:text-[34px] text-[#0A1628] font-normal leading-[1.08] tracking-[-0.02em]">
                    Your website, <br />
                    <span className="relative inline-block">
                      built by AI.
                      {/* Subtle curved blue highlight underline */}
                      <svg
                        className="absolute -bottom-1 left-0 w-full h-2 text-blue-500 pointer-events-none"
                        viewBox="0 0 120 8"
                        fill="none"
                      >
                        <path
                          d="M2 5C35 2 85 2 118 5"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </h4>
                </div>

                {/* Right Preview Image with Continuous Floating / Hovering Animation */}
                <div className="sm:col-span-6 relative rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 group bg-slate-50">
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="w-full h-[140px] sm:h-[150px] overflow-hidden"
                  >
                    <img
                      src="/newweb.png"
                      alt="Neweb.ai website preview"
                      className="w-full h-full object-cover object-top"
                    />
                  </motion.div>

                  {/* Floating White Overlay Pill */}
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute bottom-2.5 right-2.5 left-2.5 sm:left-auto bg-white/95 backdrop-blur-md rounded-xl px-3 py-1.5 border border-slate-200/90 shadow-md flex items-center justify-between gap-2 z-10"
                  >
                    <span className="text-[10px] font-semibold text-slate-800 font-plus-jakarta leading-tight">
                      Better websites. Faster growth.
                    </span>
                    <div className="w-5 h-5 rounded-full bg-blue-100/90 flex items-center justify-center text-blue-600 shrink-0">
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* ========================================================== */}
            {/* FRONT CARD: FONDA.CO APP WORKSPACE WINDOW (OVERLAPPING)    */}
            {/* ========================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative -mt-24 sm:-mt-28 w-full max-w-[620px] bg-white rounded-[26px] border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.12),0_0_1px_1px_rgba(0,0,0,0.04)] p-6 sm:p-7 z-20"
            >
              {/* Window Header */}
              <div className="flex items-center gap-2 pb-4 border-b border-slate-100 mb-5">
                <img
                  src="/fondaa.png"
                  alt="fonda.co"
                  className="w-5 h-5 object-contain"
                />
                <span className="font-plus-jakarta font-bold text-[16px] text-[#0A1628] tracking-tight">
                  fonda.co
                </span>
                <span className="ml-auto text-[9.5px] font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/50">
                  AI WORKSPACE
                </span>
              </div>

              {/* Main 2-Column App Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-start">
                {/* Left Sidebar Menu (4 Cols) - Interactive Switcher */}
                <div className="sm:col-span-4 flex flex-col gap-1 text-[11px] font-dm-sans border-r-0 sm:border-r border-slate-100 sm:pr-3">
                  {fondaTabs.map((tab, idx) => {
                    const IconComp = tab.icon;
                    const isActive = idx === activeTabIdx;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => {
                          setActiveTabIdx(idx);
                          setIsAutoPlaying(false);
                        }}
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                        className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-all relative cursor-pointer ${
                          isActive
                            ? 'bg-slate-100 text-slate-900 font-semibold border border-slate-200/80 shadow-2xs'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent'
                        }`}
                      >
                        <IconComp
                          className={`w-3.5 h-3.5 shrink-0 transition-colors ${
                            isActive ? 'text-blue-600' : 'text-slate-400'
                          }`}
                        />
                        <span className="truncate">{tab.label}</span>
                        {isActive && (
                          <motion.span
                            layoutId="activeTabIndicator"
                            className="absolute right-1.5 w-1.5 h-1.5 rounded-full bg-blue-600"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Right Area: Dynamic Checklist + Visual Preview (8 Cols) */}
                <div className="sm:col-span-8 flex flex-col justify-between h-full min-h-[190px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTab.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col justify-between h-full"
                    >
                      {/* Title */}
                      <h4 className="font-instrument text-[24px] sm:text-[28px] font-normal text-[#0A1628] leading-[1.08] mb-3.5">
                        {currentTab.title} <br />
                        <span className="italic text-blue-600">{currentTab.titleItalic}</span>
                      </h4>

                      {/* 2 Sub-Columns: Checklist on left, Chart/Visual on right */}
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                        {/* Checklist (6 Cols) */}
                        <div className="sm:col-span-6 space-y-1.5">
                          {currentTab.checklist.map((item, idx) => (
                            <motion.div
                              key={item}
                              initial={{ opacity: 0, x: -4 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: idx * 0.05 }}
                              className="flex items-center gap-2 text-[11px] font-dm-sans text-slate-700 font-medium"
                            >
                              <div className="w-4 h-4 rounded-full bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0">
                                <Check className="w-2.5 h-2.5 text-blue-600 stroke-[3]" />
                              </div>
                              <span className="truncate">{item}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Visual Graph / Metrics Preview (6 Cols) */}
                        <div className="sm:col-span-6 relative rounded-xl bg-[#FBFDFF] border border-slate-100 p-2.5 flex flex-col justify-between overflow-hidden min-h-[115px]">
                          {/* Subtle Grid Lines */}
                          <div className="absolute inset-0 bg-[linear-gradient(to_right,#F1F5F9_1px,transparent_1px),linear-gradient(to_bottom,#F1F5F9_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-60" />

                          {/* Floating Pill Tag */}
                          <div className="relative z-10 self-end">
                            <span className="inline-block px-2 py-0.5 rounded-md bg-white border border-slate-200/80 text-[9px] font-medium text-slate-600 shadow-2xs leading-tight truncate max-w-[150px]">
                              {currentTab.tag}
                            </span>
                          </div>

                          {/* Dynamic Visual depending on active tab */}
                          <div className="relative z-10 w-full mt-1.5">
                            {currentTab.chartType === 'curve' && (
                              <svg
                                viewBox="0 0 160 50"
                                className="w-full h-12 overflow-visible"
                                fill="none"
                              >
                                <motion.path
                                  initial={{ pathLength: 0 }}
                                  animate={{ pathLength: 1 }}
                                  transition={{ duration: 0.8 }}
                                  d="M 5,45 Q 40,42 70,30 T 150,8"
                                  stroke="#2563EB"
                                  strokeWidth="2.2"
                                  strokeLinecap="round"
                                />
                                <circle
                                  cx="150"
                                  cy="8"
                                  r="7"
                                  fill="#93C5FD"
                                  fillOpacity="0.4"
                                  className="animate-ping"
                                />
                                <circle cx="150" cy="8" r="4" fill="#2563EB" />
                              </svg>
                            )}

                            {currentTab.chartType === 'bars' && (
                              <div className="flex items-end justify-between gap-1.5 h-12 px-2 pt-2">
                                {[40, 65, 80, 55, 95, 85].map((h, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    className={`w-full rounded-xs ${
                                      i === 4 ? 'bg-blue-600' : 'bg-blue-200/80'
                                    }`}
                                  />
                                ))}
                              </div>
                            )}

                            {currentTab.chartType === 'growth' && (
                              <div className="flex flex-col justify-end h-12 px-1">
                                <div className="flex items-center justify-between text-[9px] font-mono text-slate-500 mb-1">
                                  <span>MRR</span>
                                  <span className="font-bold text-blue-600">+182%</span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                                  <motion.div
                                    initial={{ width: '0%' }}
                                    animate={{ width: '84%' }}
                                    transition={{ duration: 0.7 }}
                                    className="bg-blue-600 h-full rounded-full"
                                  />
                                </div>
                              </div>
                            )}

                            {currentTab.chartType === 'deck' && (
                              <div className="flex items-center justify-center gap-1.5 h-12">
                                {[1, 2, 3, 4].map((s) => (
                                  <div
                                    key={s}
                                    className={`w-6 h-8 rounded border flex items-center justify-center text-[8px] font-mono ${
                                      s === 1
                                        ? 'bg-blue-600 text-white border-blue-600 shadow-2xs'
                                        : 'bg-white text-slate-400 border-slate-200'
                                    }`}
                                  >
                                    {s}
                                  </div>
                                ))}
                              </div>
                            )}

                            {currentTab.chartType === 'funnel' && (
                              <div className="flex flex-col gap-1 h-12 justify-center px-1">
                                <div className="w-full bg-blue-600 h-1.5 rounded-full" />
                                <div className="w-3/4 bg-blue-400 h-1.5 rounded-full" />
                                <div className="w-1/2 bg-blue-300 h-1.5 rounded-full" />
                              </div>
                            )}

                            {currentTab.chartType === 'crm' && (
                              <div className="flex items-center justify-between h-12 px-1 text-[9.5px] font-dm-sans">
                                <div className="flex -space-x-1">
                                  {['bg-blue-500', 'bg-indigo-500', 'bg-emerald-500'].map((c, i) => (
                                    <div
                                      key={i}
                                      className={`w-5 h-5 rounded-full ${c} text-white text-[8px] flex items-center justify-center font-bold ring-2 ring-white`}
                                    >
                                      {i + 1}
                                    </div>
                                  ))}
                                </div>
                                <span className="text-blue-600 font-semibold text-[10px]">
                                  +12 Matches
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ========================================================== */}
        {/* BOTTOM METRICS STRIP + CTA BUTTON                          */}
        {/* ========================================================== */}
        <div className="pt-10 sm:pt-12 border-t border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* 3 Metric Columns */}
          <div className="flex flex-wrap items-center gap-8 sm:gap-12">
            {/* Stat 1 */}
            <div>
              <div className="font-instrument text-[38px] sm:text-[44px] font-normal text-[#0A1628] leading-none">
                90s
              </div>
              <p className="text-[12px] font-dm-sans text-slate-500 mt-1">
                Site generation
              </p>
            </div>

            <div className="h-10 w-[1px] bg-slate-200" />

            {/* Stat 2 */}
            <div>
              <div className="font-instrument text-[38px] sm:text-[44px] font-normal text-[#0A1628] leading-none">
                40%
              </div>
              <p className="text-[12px] font-dm-sans text-slate-500 mt-1">
                Avg conversion lift
              </p>
            </div>

            <div className="h-10 w-[1px] bg-slate-200" />

            {/* Stat 3 */}
            <div>
              <div className="font-instrument text-[38px] sm:text-[44px] font-normal text-[#0A1628] leading-none">
                100+
              </div>
              <p className="text-[12px] font-dm-sans text-slate-500 mt-1">
                Teams already building
              </p>
            </div>
          </div>

          {/* Right: Explore CTA Button + Editorial Built-For Tag */}
          <div className="flex items-center gap-6 w-full lg:w-auto justify-between lg:justify-end">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0A1628] hover:bg-slate-800 text-white font-dm-sans text-[13.5px] font-semibold transition-all shadow-md shadow-navy/15 hover:-translate-y-0.5 group cursor-pointer"
            >
              <span>Explore our products</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <div className="text-[10px] font-mono tracking-[0.2em] text-slate-400 uppercase leading-tight text-right">
              <span>BUILT FOR</span>
              <br />
              <span className="font-bold text-slate-600">REAL IMPACT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
