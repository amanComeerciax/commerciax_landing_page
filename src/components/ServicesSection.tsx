'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu,
  TrendingUp,
  Users,
  Rocket,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Database,
  Send,
  Calendar,
  Layers,
  ShieldCheck,
  Zap,
  CheckCircle,
  Code2,
} from 'lucide-react';
import OriginButton from './OriginButton';
import FoldText from './FoldText';
import { gsap, useGSAP } from '@/lib/gsap';

/* ========================================================================= */
/* SIMPLIFIED SERVICE DATA INTERFACE                                          */
/* ========================================================================= */

export interface ServiceStory {
  id: string;
  num: string;
  pillar: string;
  category: string;
  badge: string;
  headlineMain: string;
  headlineItalic: string;
  tagline: string;
  features: string[];
  serviceUrl: string;
  ctaText: string;
  stats: { value: string; label: string }[];
  steps: { num: string; title: string; desc: string; metric: string; icon: React.ComponentType<{ className?: string }> }[];
  icon: React.ComponentType<{ className?: string }>;
  tintGradient: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
}

const SERVICES_DATA: ServiceStory[] = [
  /* 01 // BUILD: AI SOFTWARE DEVELOPMENT */
  {
    id: 'ai-dev',
    num: '01',
    pillar: 'Build',
    category: 'AI Software Development',
    badge: 'Week-One Prototypes',
    headlineMain: 'Week-One',
    headlineItalic: 'Prototypes',
    tagline: 'Custom LLM apps, RAG pipelines, and autonomous agents — shipped on your stack, in your cloud. Production in weeks.',
    features: [
      'Custom LLM apps & copilots',
      'RAG over docs, tickets & code',
      'Autonomous workflow agents',
    ],
    serviceUrl: 'https://commerciax.com/service-ai-software.html',
    ctaText: 'Explore service',
    stats: [
      { value: '7 Days', label: 'Prototype' },
      { value: '<24ms', label: 'Latency' },
      { value: '99.4%', label: 'Accuracy' },
    ],
    steps: [
      { num: '01', title: 'Ingest', desc: 'Index docs, code & tickets', metric: '100M+ tokens/s', icon: Database },
      { num: '02', title: 'Embed', desc: 'Hybrid vector semantic search', metric: '<14ms latency', icon: Layers },
      { num: '03', title: 'Reason', desc: 'Multi-agent privacy routing', metric: '99.8% confidence', icon: ShieldCheck },
      { num: '04', title: 'Execute', desc: 'Sandboxed autonomous dispatch', metric: 'Zero data leak', icon: Zap },
    ],
    icon: Cpu,
    tintGradient: 'linear-gradient(145deg, #DBEAFE 0%, #BFDBFE 100%)',
    accentBg: 'bg-blue-50',
    accentBorder: 'border-blue-200',
    accentText: 'text-blue-600',
  },

  /* 02 // GROW: B2B LEAD GENERATION */
  {
    id: 'lead-gen',
    num: '02',
    pillar: 'Grow',
    category: 'B2B Lead Generation',
    badge: 'Fixed-Price SLA',
    headlineMain: '3.4× Meeting',
    headlineItalic: 'Conversion',
    tagline: 'AI-powered pipeline engine — intent signals, ICP enrichment, and hyper-personalized outreach with a booked-meeting SLA.',
    features: [
      'ICP scoring & intent signals',
      'AI personalization across channels',
      'Qualified-meeting SLAs',
    ],
    serviceUrl: 'https://commerciax.com/service-b2b-leadgen.html',
    ctaText: 'Explore service',
    stats: [
      { value: '3.4×', label: 'Conversion' },
      { value: '18.4%', label: 'Reply rate' },
      { value: '11.2×', label: 'Avg ROI' },
    ],
    steps: [
      { num: '01', title: 'Intent', desc: 'Detect buying signals at scale', metric: '10M+ signals/day', icon: TrendingUp },
      { num: '02', title: 'Score', desc: 'AI-powered account prioritization', metric: '98% accuracy', icon: Database },
      { num: '03', title: 'Outreach', desc: 'Personalized multi-channel', metric: '3× higher response', icon: Send },
      { num: '04', title: 'Meeting', desc: 'Qualified meetings delivered', metric: '3.4× conversion', icon: Calendar },
    ],
    icon: TrendingUp,
    tintGradient: 'linear-gradient(145deg, #EFF6FF 0%, #DBEAFE 100%)',
    accentBg: 'bg-blue-50',
    accentBorder: 'border-blue-200',
    accentText: 'text-blue-600',
  },

  /* 03 // SCALE: EMPLOYEE PODS */
  {
    id: 'employee-pods',
    num: '03',
    pillar: 'Scale',
    category: 'Employee Pods',
    badge: '10-Day Deployment',
    headlineMain: '10 Days to',
    headlineItalic: 'Embed Squads',
    tagline: 'Pre-vetted squads of senior engineers, designers & AI specialists — embedded with your team. Month-to-month, senior always.',
    features: [
      '10-day time-to-start',
      'Senior-only talent (7+ years)',
      'Dedicated lead + SLAs',
    ],
    serviceUrl: '#contact',
    ctaText: 'Explore service',
    stats: [
      { value: '10 Days', label: 'Start time' },
      { value: '7+ Yrs', label: 'Experience' },
      { value: '96.2%', label: 'Retention' },
    ],
    steps: [
      { num: '01', title: 'Shape', desc: 'Choose pod type & stack', metric: '4 pod shapes', icon: Users },
      { num: '02', title: 'Match', desc: 'Curate 7+ yr senior talent', metric: '48h turnaround', icon: CheckCircle },
      { num: '03', title: 'Embed', desc: 'Slack, GitHub & daily syncs', metric: 'Day 10 first commit', icon: Layers },
      { num: '04', title: 'Scale', desc: 'Month-to-month, zero lock-in', metric: 'Dedicated lead', icon: Rocket },
    ],
    icon: Users,
    tintGradient: 'linear-gradient(145deg, #DBEAFE 0%, #93C5FD 100%)',
    accentBg: 'bg-blue-50',
    accentBorder: 'border-blue-200',
    accentText: 'text-blue-600',
  },

  /* 04 // LAUNCH: SAAS PRODUCT STUDIO */
  {
    id: 'saas-studio',
    num: '04',
    pillar: 'Launch',
    category: 'SaaS Product Studio',
    badge: '8–14 Weeks',
    headlineMain: 'Zero-to-One',
    headlineItalic: 'SaaS Products',
    tagline: 'Zero-to-one SaaS products in 8–14 weeks. Research, design, engineering, launch — all under one roof.',
    features: [
      'Fixed timeline, fixed price',
      'Go-to-market playbook included',
      'Battle-tested on our own products',
    ],
    serviceUrl: 'https://commerciax.com/service-saas-products.html',
    ctaText: 'Explore service',
    stats: [
      { value: '8–14 Wks', label: 'Delivery' },
      { value: 'Fixed $', label: 'Cost' },
      { value: '1st 100', label: 'Users' },
    ],
    steps: [
      { num: '01', title: 'Research', desc: 'Market research & UX blueprint', metric: 'Weeks 1–2', icon: Code2 },
      { num: '02', title: 'Build', desc: 'Core engine & high-fidelity UI', metric: 'Weeks 3–6', icon: Layers },
      { num: '03', title: 'Engineer', desc: 'Billing, multi-tenancy & AI', metric: 'Weeks 7–10', icon: Zap },
      { num: '04', title: 'Launch', desc: 'GTM playbook & first users', metric: 'Weeks 11–14', icon: Rocket },
    ],
    icon: Rocket,
    tintGradient: 'linear-gradient(145deg, #EFF6FF 0%, #BFDBFE 100%)',
    accentBg: 'bg-blue-50',
    accentBorder: 'border-blue-200',
    accentText: 'text-blue-600',
  },
];

export default function ServicesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  const total = SERVICES_DATA.length;
  const AUTOPLAY_DURATION = 6500;

  const handleNext = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % total);
    setProgress(0);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + total) % total);
    setProgress(0);
  }, [total]);

  const handleSelect = (idx: number) => {
    setActiveIdx(idx);
    setProgress(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Autoplay countdown timer
  useEffect(() => {
    const stepMs = 50;
    const increment = (stepMs / AUTOPLAY_DURATION) * 100;

    const timer = setInterval(() => {
      if (isHovered) return;
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + increment;
      });
    }, stepMs);

    return () => clearInterval(timer);
  }, [isHovered, handleNext]);

  const active = SERVICES_DATA[activeIdx];

  // Receding side card indices
  const leftIdx1 = (activeIdx - 1 + total) % total;
  const leftIdx2 = (activeIdx - 2 + total) % total;
  const rightIdx1 = (activeIdx + 1) % total;
  const rightIdx2 = (activeIdx + 2) % total;

  const sectionRef = useRef<HTMLElement>(null);
  const dockRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full py-16 sm:py-24 lg:py-28 bg-[#FAF8F5] text-navy overflow-hidden"
    >
      {/* Seamless Edge Blending Gradients */}
      <div className="absolute top-0 left-0 right-0 h-32 sm:h-44 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5]/85 to-transparent pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-44 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/85 to-transparent pointer-events-none z-[1]" />

      {/* Ambient Radial Lighting Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-100/30 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="site-container relative px-3 xs:px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto z-10">
        {/* SECTION HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200/80 shadow-xs mb-3.5 sm:mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.2em] font-bold text-slate-700 uppercase">
              CAPABILITIES &amp; ENGAGEMENTS
            </span>
          </div>
          <h2 className="font-plus-jakarta font-extrabold text-[32px] xs:text-[40px] sm:text-[52px] lg:text-[60px] text-[#0A1628] leading-[1.08] tracking-[-0.03em] mb-4">
            <FoldText text="Architected for" splitBy="word" trigger="scroll" duration={0.65} />{' '}
            <span className="font-instrument italic font-normal text-blue-600">
              <FoldText text="speed." splitBy="word" trigger="scroll" duration={0.65} />
            </span>{' '}
            <FoldText text="Engineered for" splitBy="word" trigger="scroll" duration={0.65} />{' '}
            <span className="font-instrument italic font-normal text-blue-600">
              <FoldText text="scale." splitBy="word" trigger="scroll" duration={0.65} />
            </span>
          </h2>
          <p className="text-[14.5px] sm:text-[16px] text-slate-600 font-dm-sans max-w-xl mx-auto leading-relaxed">
            Choose a dedicated service model tailored to where your business is right now — from tactical AI development to full venture co-building.
          </p>
        </div>

        {/* TOP SEGMENTED DOCK: 4 PILLARS */}
        <div
          ref={dockRef}
          className="relative mb-6 sm:mb-8 p-1.5 sm:p-2 bg-slate-200/50 backdrop-blur-md rounded-2xl sm:rounded-[24px] border border-slate-200/80 grid grid-cols-2 lg:grid-cols-4 gap-2 shadow-inner"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {SERVICES_DATA.map((service, idx) => {
            const isAct = activeIdx === idx;
            const Icon = service.icon;

            return (
              <button
                key={service.id}
                onClick={() => handleSelect(idx)}
                className={`relative px-3.5 py-3 sm:py-3.5 rounded-xl sm:rounded-[18px] text-left transition-all duration-300 flex items-center justify-between group overflow-hidden cursor-pointer ${
                  isAct
                    ? 'bg-white text-[#0A1628] shadow-[0_8px_20px_rgba(10,22,40,0.08)] border border-slate-200/80'
                    : 'text-slate-600 hover:text-[#0A1628] hover:bg-white/60'
                }`}
              >
                <div className="flex items-center gap-2.5 sm:gap-3 relative z-10 min-w-0">
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isAct
                        ? `${service.accentBg} ${service.accentText}`
                        : 'bg-slate-200/80 text-slate-500 group-hover:bg-slate-200 group-hover:text-[#0A1628]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[9.5px] sm:text-[10px] font-mono font-bold tracking-wider uppercase opacity-60">
                      {service.num} // {service.pillar.toUpperCase()}
                    </span>
                    <span className="block text-[12.5px] sm:text-[13.5px] font-bold font-plus-jakarta truncate">
                      {service.category}
                    </span>
                  </div>
                </div>

                {isAct && (
                  <span className="relative z-10 w-2 h-2 rounded-full bg-blue-600 ml-1 shrink-0 animate-ping" />
                )}
              </button>
            );
          })}
        </div>

        {/* PROOFCHAIN PRO PERSPECTIVE CAROUSEL STAGE */}
        <div
          className="relative w-full flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* LEFT FLANKING CARDS */}
          <div className="hidden 2xl:flex items-center gap-3 shrink-0 select-none mr-3">
            <FlankingSideCard
              service={SERVICES_DATA[leftIdx2]}
              onClick={() => handleSelect(leftIdx2)}
              scale={0.72}
              opacity={0.35}
              width={90}
              height={380}
            />
            <FlankingSideCard
              service={SERVICES_DATA[leftIdx1]}
              onClick={() => handleSelect(leftIdx1)}
              scale={0.86}
              opacity={0.7}
              width={116}
              height={420}
            />
          </div>

          {/* MAIN CENTER SPOTLIGHT */}
          <div className="relative w-full max-w-[1240px] shrink-0 z-20">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 0.97, y: 18, filter: 'blur(4px)' }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.97, y: -10, filter: 'blur(4px)' }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-white/95 via-white/90 to-white/95 backdrop-blur-2xl border border-white/90 shadow-[0_24px_70px_rgba(10,25,50,0.11),inset_0_1.5px_2px_0_rgba(255,255,255,0.95)] p-5 sm:p-7 lg:p-9 overflow-hidden"
              >
                {/* Ambient glow */}
                <div
                  className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20"
                  style={{ background: active.tintGradient }}
                />

                {/* CLEAN 2-COLUMN LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start relative z-10">
                  {/* LEFT COLUMN: Content */}
                  <div className="flex flex-col">
                    {/* Tags */}
                    <motion.div
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-center gap-2 mb-4 flex-wrap"
                    >
                      <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-mono text-[10.5px] font-bold tracking-wider uppercase border border-slate-200/80">
                        {active.num} // {active.pillar.toUpperCase()}
                      </span>
                      <span className={`px-2.5 py-1 rounded-md text-[10.5px] font-mono font-bold ${active.accentBg} ${active.accentText} border ${active.accentBorder}`}>
                        {active.badge}
                      </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                      className="mb-4"
                    >
                      <h3 className="font-plus-jakarta text-[34px] sm:text-[42px] lg:text-[48px] font-extrabold text-[#0A1628] leading-[1.04] tracking-tight">
                        {active.headlineMain}
                      </h3>
                      <span className="font-instrument italic font-normal text-blue-600 text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.02] block -mt-1">
                        {active.headlineItalic}
                      </span>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="text-[13.5px] sm:text-[14.5px] text-slate-600 font-dm-sans leading-relaxed mb-5 max-w-lg"
                    >
                      {active.tagline}
                    </motion.p>

                    {/* Feature Points */}
                    <div className="space-y-2.5 mb-7">
                      {active.features.map((feat, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.35, delay: 0.28 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                          className="flex items-center gap-2.5 text-[13px] sm:text-[13.5px] text-slate-700 font-dm-sans"
                        >
                          <span className="text-blue-600 font-bold shrink-0">→</span>
                          <span className="font-medium">{feat}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-wrap items-center gap-3"
                    >
                      <OriginButton
                        href={active.serviceUrl}
                        variant="primary"
                        size="md"
                        icon={<ArrowRight className="w-4 h-4" />}
                      >
                        {active.ctaText}
                      </OriginButton>
                      <OriginButton
                        href="#contact"
                        variant="secondary"
                        size="md"
                        icon={<ArrowRight className="w-3.5 h-3.5" />}
                      >
                        Book intro call
                      </OriginButton>
                    </motion.div>
                  </div>

                  {/* RIGHT COLUMN: Process Steps + Stats */}
                  <div className="flex flex-col gap-5">
                    {/* Process Steps Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                      className="rounded-2xl bg-white/90 border border-slate-200/80 p-5 shadow-[0_8px_24px_rgba(10,25,50,0.05)]"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-[10.5px] font-mono font-bold text-slate-500 tracking-wider uppercase">
                          How it works
                        </span>
                        <div className="flex-1 h-[1px] bg-slate-200/80" />
                      </div>

                      <div className="relative">
                        {/* Vertical connecting line */}
                        <motion.div
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute left-[17px] top-5 bottom-5 w-[1.5px] bg-gradient-to-b from-blue-500 via-blue-400 to-blue-600 z-0 origin-top"
                        />

                        <div className="flex flex-col gap-4">
                          {active.steps.map((step, stepIdx) => {
                            const StepIcon = step.icon;
                            return (
                              <motion.div
                                key={step.num}
                                initial={{ opacity: 0, x: 14 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.38, delay: 0.25 + stepIdx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                className="relative flex items-center justify-between gap-3 z-10 group"
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <div className="w-9 h-9 rounded-xl bg-blue-50/95 border border-blue-200/80 shadow-sm flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                                    <StepIcon className="w-4 h-4" />
                                  </div>
                                  <div className="min-w-0">
                                    <div className="flex items-center gap-1.5">
                                      <span className="text-[10.5px] font-mono font-bold text-slate-400">
                                        {step.num}
                                      </span>
                                      <span className="text-[12.5px] font-bold font-plus-jakarta text-slate-900 uppercase tracking-wide">
                                        {step.title}
                                      </span>
                                    </div>
                                    <span className="text-[11px] text-slate-500 font-dm-sans leading-tight block mt-0.5 truncate">
                                      {step.desc}
                                    </span>
                                  </div>
                                </div>
                                <span className="px-2 py-0.5 rounded-md bg-blue-50/80 border border-blue-100 text-[9.5px] font-mono font-bold text-blue-600 shrink-0 whitespace-nowrap">
                                  {step.metric}
                                </span>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>

                    {/* Key Metrics Strip */}
                    <div className="grid grid-cols-3 gap-3">
                      {active.stats.map((stat, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 14, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.55 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                          className="rounded-xl bg-white/90 border border-slate-200/70 p-3.5 text-center shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
                        >
                          <span className="block font-instrument italic text-[22px] sm:text-[24px] font-medium text-blue-600 leading-none">
                            {stat.value}
                          </span>
                          <span className="text-[9.5px] font-mono font-bold text-slate-500 uppercase tracking-wider block mt-1.5">
                            {stat.label}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT FLANKING CARDS */}
          <div className="hidden 2xl:flex items-center gap-3 shrink-0 select-none ml-3">
            <FlankingSideCard
              service={SERVICES_DATA[rightIdx1]}
              onClick={() => handleSelect(rightIdx1)}
              scale={0.86}
              opacity={0.7}
              width={116}
              height={420}
            />
            <FlankingSideCard
              service={SERVICES_DATA[rightIdx2]}
              onClick={() => handleSelect(rightIdx2)}
              scale={0.72}
              opacity={0.35}
              width={90}
              height={380}
            />
          </div>
        </div>

        {/* BOTTOM CONTROLS */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
          <button
            onClick={handlePrev}
            aria-label="Previous capability"
            className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-navy border border-slate-200/90 shadow-sm flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer group"
          >
            <ChevronLeft className="w-4 h-4 text-slate-700 group-hover:text-navy group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/70 backdrop-blur-md border border-slate-200/80 shadow-2xs">
            {SERVICES_DATA.map((service, index) => {
              const isAct = index === activeIdx;
              return (
                <button
                  key={service.id}
                  onClick={() => handleSelect(index)}
                  aria-label={`Go to ${service.category}`}
                  className="relative h-2 rounded-full overflow-hidden transition-all duration-300 cursor-pointer"
                  style={{ width: isAct ? 60 : 8 }}
                >
                  <div
                    className={`w-full h-full rounded-full ${
                      isAct ? 'bg-slate-200' : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                  {isAct && (
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full bg-blue-600"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next capability"
            className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-navy border border-slate-200/90 shadow-sm flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer group"
          >
            <ChevronRight className="w-4 h-4 text-slate-700 group-hover:text-navy group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================= */
/* FLANKING SIDE CARD                                                        */
/* ========================================================================= */
interface FlankingSideCardProps {
  service: ServiceStory;
  onClick: () => void;
  scale: number;
  opacity: number;
  width: number;
  height: number;
}

function FlankingSideCard({
  service,
  onClick,
  scale,
  opacity,
  width,
  height,
}: FlankingSideCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: scale * 1.04, opacity: Math.min(1, opacity + 0.25) }}
      className="relative rounded-2xl bg-white/85 backdrop-blur-md border border-white/90 shadow-sm p-3 flex flex-col justify-between cursor-pointer overflow-hidden transition-all duration-300 group select-none"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        opacity,
        background: service.tintGradient,
      }}
    >
      {/* Top Number & Icon */}
      <div className="flex flex-col items-center gap-1.5">
        <div className="w-7 h-7 rounded-lg bg-white/90 shadow-2xs flex items-center justify-center text-slate-800">
          <Icon className="w-3.5 h-3.5" />
        </div>
        <span className="text-[10px] font-mono font-bold text-slate-800 tracking-wider">
          {service.num}
        </span>
      </div>

      {/* Vertical Category Title */}
      <div className="my-auto py-2 flex items-center justify-center">
        <span
          className="text-[11.5px] font-bold font-plus-jakarta text-slate-800 whitespace-nowrap"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          {service.category}
        </span>
      </div>

      {/* Bottom Metric Preview */}
      <div className="w-full text-center py-1 rounded bg-white/80 backdrop-blur-xs border border-white/70">
        <span className="text-[9px] font-mono font-bold text-slate-700 truncate block">
          {service.stats[0].value}
        </span>
      </div>
    </motion.div>
  );
}
