'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OriginButton from './OriginButton';
import AnimatedNumber from './AnimatedNumber';
import FoldText from './FoldText';
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
import { gsap, useGSAP } from '@/lib/gsap';

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
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
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
      ref={sectionRef}
      id="products"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#FAF8F5] text-navy overflow-hidden"
    >
      {/* Seamless Edge Melting Gradients */}
      <div className="absolute top-0 left-0 right-0 h-32 sm:h-44 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-44 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent pointer-events-none z-[1]" />

      {/* Background Soft Lighting & Trajectory Lines */}
      <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-gradient-to-b from-blue-100/40 via-blue-50/20 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-blue-100/25 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="site-container relative px-4 sm:px-8 lg:px-12 max-w-[1340px] mx-auto z-10">
        {/* ========================================================== */}
        {/* CENTERED EDITORIAL HEADER                                  */}
        {/* ========================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200/80 shadow-xs mb-3.5 sm:mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.2em] font-bold text-slate-700 uppercase">
              SAAS PRODUCTS
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="font-plus-jakarta font-extrabold text-[36px] sm:text-[48px] lg:text-[58px] text-[#0A1628] leading-[1.08] tracking-[-0.03em] mb-4">
            <FoldText text="Two SaaS products," splitBy="word" trigger="scroll" duration={0.65} stagger={0.045} />{' '}
            <span className="font-instrument italic font-normal text-blue-600">
              <FoldText text="one promise." splitBy="word" trigger="scroll" duration={0.65} stagger={0.045} />
            </span>
          </h2>

          {/* Subtitle Description */}
          <p className="text-[14.5px] sm:text-[16px] text-slate-600 font-dm-sans max-w-xl mx-auto leading-relaxed">
            Forged on our own delivery frontlines. Battle-tested, self-serve, and ready for your team.
          </p>
        </div>

        {/* ========================================================== */}
        {/* 2-COLUMN BALANCED PRODUCT SHOWCASE GRID                    */}
        {/* ========================================================== */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch mb-16 sm:mb-20">
          
          {/* ---------------- PRODUCT 1: NEWEB.AI ---------------- */}
          <div
            className="group bg-white/95 hover:bg-white rounded-[28px] border border-slate-200/90 shadow-[0_12px_36px_-12px_rgba(10,22,40,0.08)] hover:shadow-[0_20px_48px_-12px_rgba(37,99,235,0.12)] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
          >
            <div>
              {/* Product Header Bar */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform p-2.5">
                    <img
                      src="/neweb.png"
                      alt="Neweb.ai"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-plus-jakarta font-bold text-[20px] sm:text-[22px] text-[#0A1628] leading-tight group-hover:text-blue-600 transition-colors">
                      Neweb.ai
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-wider text-blue-600 uppercase mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                      AI WEBSITE ENGINE
                    </span>
                  </div>
                </div>

                <div className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-300 group-hover:bg-blue-50 transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Description */}
              <h4 className="font-instrument text-[24px] sm:text-[28px] text-[#0A1628] font-normal leading-[1.12] tracking-tight mb-2">
                Your entire online presence, <br />
                <span className="italic text-blue-600">built by AI.</span>
              </h4>
              <p className="text-[13.5px] sm:text-[14px] text-slate-600 font-dm-sans leading-relaxed mb-6">
                Build, manage, and grow high-converting websites with AI — from copy generation to SEO optimization and live analytics.
              </p>

              {/* Browser Preview Window */}
              <div className="relative rounded-2xl bg-slate-50 border border-slate-200/80 p-4 mb-6 shadow-2xs">
                {/* Browser Topbar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/70 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  </div>
                  <span className="text-[10.5px] font-mono text-slate-500 bg-white px-2.5 py-0.5 rounded-md border border-slate-200/80">
                    neweb.ai/preview
                  </span>
                  <div className="w-2.5" />
                </div>

                {/* Website Preview Container */}
                <div className="relative rounded-xl overflow-hidden shadow-xs border border-slate-200/80 bg-white">
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="w-full h-[180px] sm:h-[200px] overflow-hidden bg-slate-100"
                  >
                    <img
                      src="/newweb.png"
                      alt="Neweb.ai website preview"
                      className="w-full h-full object-cover object-top"
                    />
                  </motion.div>

                  {/* Floating White Overlay Pill */}
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute bottom-3 right-3 left-3 bg-white/95 backdrop-blur-md rounded-xl px-3.5 py-2 border border-slate-200/90 shadow-md flex items-center justify-between gap-2 z-10"
                  >
                    <span className="text-[11px] font-semibold text-slate-800 font-plus-jakarta">
                      Better websites. Faster growth.
                    </span>
                    <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      LIVE
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Bottom Feature Tags */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-[11.5px] font-medium font-dm-sans">
                Autonomous SEO
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-[11.5px] font-medium font-dm-sans">
                Instant Generation
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-[11.5px] font-medium font-dm-sans">
                Real-time Analytics
              </span>
            </div>
          </div>

          {/* ---------------- PRODUCT 2: FONDA.CO ---------------- */}
          <div
            className="group bg-white/95 hover:bg-white rounded-[28px] border border-slate-200/90 shadow-[0_12px_36px_-12px_rgba(10,22,40,0.08)] hover:shadow-[0_20px_48px_-12px_rgba(37,99,235,0.12)] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
          >
            <div>
              {/* Product Header Bar */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform p-2.5">
                    <img
                      src="/fondaa.png"
                      alt="Fonda.co"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-plus-jakarta font-bold text-[20px] sm:text-[22px] text-[#0A1628] leading-tight group-hover:text-blue-600 transition-colors">
                      Fonda.co
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-wider text-blue-600 uppercase mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                      AI CO-FOUNDER
                    </span>
                  </div>
                </div>

                <div className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-300 group-hover:bg-blue-50 transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Description */}
              <h4 className="font-instrument text-[24px] sm:text-[28px] text-[#0A1628] font-normal leading-[1.12] tracking-tight mb-2">
                The AI co-founder <br />
                <span className="italic text-blue-600">for your idea.</span>
              </h4>
              <p className="text-[13.5px] sm:text-[14px] text-slate-600 font-dm-sans leading-relaxed mb-6">
                Validate markets, build 5-year financial models, write pitch decks, and launch — with investor-ready outputs in hours.
              </p>

              {/* Interactive Workspace Window */}
              <div className="relative rounded-2xl bg-slate-50 border border-slate-200/80 p-4 mb-6 shadow-2xs">
                {/* 6 Tabs Pill Strip */}
                <div className="flex items-center gap-1 overflow-x-auto pb-2 mb-3 border-b border-slate-200/70 scrollbar-none">
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
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-dm-sans whitespace-nowrap transition-all cursor-pointer ${
                          isActive
                            ? 'bg-white text-[#0A1628] font-semibold shadow-xs border border-slate-200/80'
                            : 'text-slate-500 hover:text-slate-800 hover:bg-white/60'
                        }`}
                      >
                        <IconComp className={`w-3 h-3 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab Content Box */}
                <div className="bg-white rounded-xl border border-slate-200/80 p-3.5 sm:p-4 min-h-[180px] sm:min-h-[200px] flex flex-col justify-between">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTab.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col justify-between h-full"
                    >
                      {/* Sub-Header */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-instrument italic text-[18px] sm:text-[20px] text-[#0A1628]">
                          {currentTab.title} <span className="text-blue-600">{currentTab.titleItalic}</span>
                        </span>
                        <span className="text-[9.5px] font-mono font-medium text-slate-500 bg-slate-50 border border-slate-200/70 px-2 py-0.5 rounded-md">
                          {currentTab.tag}
                        </span>
                      </div>

                      {/* 2 Sub-Columns */}
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                        {/* Checklist */}
                        <div className="sm:col-span-7 space-y-1.5">
                          {currentTab.checklist.map((item, idx) => (
                            <motion.div
                              key={item}
                              initial={{ opacity: 0, x: -4 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: idx * 0.04 }}
                              className="flex items-center gap-2 text-[11px] font-dm-sans text-slate-700 font-medium"
                            >
                              <div className="w-4 h-4 rounded-full bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0">
                                <Check className="w-2.5 h-2.5 text-blue-600 stroke-[3]" />
                              </div>
                              <span className="truncate">{item}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Visual Graph Preview */}
                        <div className="sm:col-span-5 relative rounded-xl bg-[#FBFDFF] border border-slate-100 p-2.5 flex flex-col justify-center overflow-hidden min-h-[95px]">
                          {/* Grid background */}
                          <div className="absolute inset-0 bg-[linear-gradient(to_right,#F1F5F9_1px,transparent_1px),linear-gradient(to_bottom,#F1F5F9_1px,transparent_1px)] bg-[size:14px_14px] pointer-events-none opacity-60" />

                          <div className="relative z-10 w-full">
                            {currentTab.chartType === 'curve' && (
                              <svg viewBox="0 0 160 50" className="w-full h-10 overflow-visible" fill="none">
                                <motion.path
                                  initial={{ pathLength: 0 }}
                                  animate={{ pathLength: 1 }}
                                  transition={{ duration: 0.8 }}
                                  d="M 5,45 Q 40,42 70,30 T 150,8"
                                  stroke="#2563EB"
                                  strokeWidth="2.2"
                                  strokeLinecap="round"
                                />
                                <circle cx="150" cy="8" r="6" fill="#93C5FD" fillOpacity="0.4" className="animate-ping" />
                                <circle cx="150" cy="8" r="3.5" fill="#2563EB" />
                              </svg>
                            )}

                            {currentTab.chartType === 'bars' && (
                              <div className="flex items-end justify-between gap-1.5 h-10 px-2">
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
                              <div className="flex flex-col justify-end h-10 px-1">
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
                              <div className="flex items-center justify-center gap-1.5 h-10">
                                {[1, 2, 3, 4].map((s) => (
                                  <div
                                    key={s}
                                    className={`w-5 h-7 rounded border flex items-center justify-center text-[7.5px] font-mono ${
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
                              <div className="flex flex-col gap-1 h-10 justify-center px-1">
                                <div className="w-full bg-blue-600 h-1.5 rounded-full" />
                                <div className="w-3/4 bg-blue-400 h-1.5 rounded-full" />
                                <div className="w-1/2 bg-blue-300 h-1.5 rounded-full" />
                              </div>
                            )}

                            {currentTab.chartType === 'crm' && (
                              <div className="flex items-center justify-between h-10 px-1 text-[9px] font-dm-sans">
                                <div className="flex -space-x-1">
                                  {['bg-blue-600', 'bg-blue-500', 'bg-blue-400'].map((c, i) => (
                                    <div
                                      key={i}
                                      className={`w-4 h-4 rounded-full ${c} text-white text-[7.5px] flex items-center justify-center font-bold ring-2 ring-white`}
                                    >
                                      {i + 1}
                                    </div>
                                  ))}
                                </div>
                                <span className="text-blue-600 font-semibold text-[9.5px]">
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
            </div>

            {/* Bottom Feature Tags */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-[11.5px] font-medium font-dm-sans">
                Pitch Deck Generator
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-[11.5px] font-medium font-dm-sans">
                5-Yr Financials
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-[11.5px] font-medium font-dm-sans">
                GTM Playbooks
              </span>
            </div>
          </div>

        </div>

        {/* ========================================================== */}
        {/* BOTTOM METRICS STRIP + CTA BUTTON                          */}
        {/* ========================================================== */}
        <div className="pt-10 sm:pt-12 border-t border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* 3 Metric Columns */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {/* Stat 1 */}
            <div className="text-center sm:text-left">
              <div className="font-instrument text-[38px] sm:text-[44px] font-normal text-[#0A1628] leading-none">
                <AnimatedNumber value={90} suffix="s" duration={1600} />
              </div>
              <p className="text-[12px] font-dm-sans text-slate-500 mt-1">
                Site generation
              </p>
            </div>

            <div className="h-10 w-[1px] bg-slate-200 hidden sm:block" />

            {/* Stat 2 */}
            <div className="text-center sm:text-left">
              <div className="font-instrument text-[38px] sm:text-[44px] font-normal text-[#0A1628] leading-none">
                <AnimatedNumber value={40} suffix="%" duration={1600} />
              </div>
              <p className="text-[12px] font-dm-sans text-slate-500 mt-1">
                Avg conversion lift
              </p>
            </div>

            <div className="h-10 w-[1px] bg-slate-200 hidden sm:block" />

            {/* Stat 3 */}
            <div className="text-center sm:text-left">
              <div className="font-instrument text-[38px] sm:text-[44px] font-normal text-[#0A1628] leading-none">
                <AnimatedNumber value={100} suffix="+" duration={1800} />
              </div>
              <p className="text-[12px] font-dm-sans text-slate-500 mt-1">
                Teams already building
              </p>
            </div>
          </div>

          {/* Right: Explore CTA Button + Built-For Tag */}
          <div className="flex items-center gap-6 w-full lg:w-auto justify-center lg:justify-end">
            <OriginButton
              href="#contact"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore our products
            </OriginButton>

            <div className="hidden sm:block text-[10px] font-mono tracking-[0.2em] text-slate-400 uppercase leading-tight text-right">
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
