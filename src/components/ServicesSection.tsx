'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu,
  TrendingUp,
  Users,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Terminal,
  Activity,
  ShieldCheck,
  Zap,
  Layers,
  Database,
  Search,
  Code2,
  GitBranch,
  BarChart3,
  Calendar,
  Check,
  ChevronRight,
  Laptop,
} from 'lucide-react';

interface ServiceData {
  id: string;
  num: string;
  badge: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  metrics: { label: string; value: string }[];
  icon: typeof Cpu;
  accent: {
    gradient: string;
    border: string;
    text: string;
    bg: string;
  };
}

const SERVICES: ServiceData[] = [
  {
    id: 'ai-dev',
    num: '01',
    category: 'BUILD & AUTOMATE',
    badge: 'Enterprise AI Stack',
    title: 'AI Software Development',
    tagline: 'Custom LLM architectures, RAG pipelines, & autonomous agent systems.',
    description:
      'We design and deploy production-grade AI applications on your infrastructure, adhering to strict data privacy and security boundaries. From day-one functional prototypes to multi-tenant scalable software in weeks.',
    features: [
      'Custom LLM applications & contextual copilots',
      'High-throughput RAG over documents & internal codebases',
      'Predictive analytics & real-time feature ML pipelines',
      'Autonomous multi-agent workflow orchestration',
    ],
    metrics: [
      { label: 'Time-to-Prototype', value: '7 Days' },
      { label: 'Query Latency', value: '< 24ms' },
      { label: 'Accuracy SLA', value: '99.4%' },
    ],
    icon: Cpu,
    accent: {
      gradient: 'from-blue-600 via-indigo-600 to-violet-600',
      border: 'border-blue-500/40',
      text: 'text-blue-600',
      bg: 'bg-blue-50',
    },
  },
  {
    id: 'lead-gen',
    num: '02',
    category: 'GROWTH ENGINE',
    badge: 'Fixed-Price SLA',
    title: 'B2B Lead Generation',
    tagline: 'AI-powered pipeline engine with intent detection and booked-meeting SLAs.',
    description:
      'Turn cold pipeline into predictable revenue. Our proprietary AI engine identifies high-intent accounts, enriches decision-maker ICPs, and crafts personalized multi-channel outreach that books qualified sales conversations.',
    features: [
      'Real-time intent signal detection & ICP account scoring',
      'Hyper-personalized outreach across email, LinkedIn & calls',
      'Guaranteed qualified meeting SLA in your contract',
      'Live pipeline dashboard with attribution tracking',
    ],
    metrics: [
      { label: 'Meeting Conversion', value: '3.4×' },
      { label: 'ICP Accuracy', value: '98.8%' },
      { label: 'Avg ROI', value: '11.2×' },
    ],
    icon: TrendingUp,
    accent: {
      gradient: 'from-indigo-600 via-purple-600 to-pink-600',
      border: 'border-indigo-500/40',
      text: 'text-indigo-600',
      bg: 'bg-indigo-50',
    },
  },
  {
    id: 'employee-pods',
    num: '03',
    category: 'DEDICATED SQUADS',
    badge: '10-Day Fast Deployment',
    title: 'Employee Pods',
    tagline: 'Senior engineering squads embedded directly into your core team.',
    description:
      'Overcome hiring bottlenecks immediately. Get senior-only (7+ yrs) engineers, ML architects, and product designers fully embedded in your Slack, GitHub, and daily standups within 10 days on flexible month-to-month contracts.',
    features: [
      'Rapid 10-day onboarding from brief to first merged commit',
      'Senior-only talent vetted through rigorous production code tests',
      '4 tailored pod shapes: Core Build, AI/ML, Growth, & Platform',
      'Dedicated delivery lead with daily syncs & SLAs',
    ],
    metrics: [
      { label: 'Deployment Speed', value: '10 Days' },
      { label: 'Senior Talent Ratio', value: '100%' },
      { label: 'Retention Rate', value: '96.2%' },
    ],
    icon: Users,
    accent: {
      gradient: 'from-cyan-600 via-blue-600 to-indigo-600',
      border: 'border-cyan-500/40',
      text: 'text-cyan-700',
      bg: 'bg-cyan-50',
    },
  },
  {
    id: 'saas-studio',
    num: '04',
    category: 'VENTURE STUDIO',
    badge: 'Idea to First 100 Users',
    title: 'SaaS Product Studio',
    tagline: 'Zero-to-one SaaS products built, engineered, and launched in 8–14 weeks.',
    description:
      'We partner with founders and enterprise incubators to design, build, and take software products to market at lightning speed. Complete turn-key delivery with product strategy, brand design, full-stack development, and launch playbooks.',
    features: [
      'Fixed timeline & fixed-price guaranteed delivery',
      'Turnkey delivery: Research, UX, Architecture & Launch',
      'GTM playbook & initial user acquisition setup',
      'Battle-tested playbook proven on Neweb.ai & Fonda.co',
    ],
    metrics: [
      { label: 'Launch Timeline', value: '8–14 Wks' },
      { label: 'Products Shipped', value: '18+' },
      { label: 'Avg Time to MVP', value: '38 Days' },
    ],
    icon: Rocket,
    accent: {
      gradient: 'from-amber-600 via-orange-600 to-red-600',
      border: 'border-amber-500/40',
      text: 'text-amber-700',
      bg: 'bg-amber-50',
    },
  },
];

export default function ServicesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = SERVICES[activeIdx];

  // Optional auto-rotate or timer indicator
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIdx((curr) => (curr + 1) % SERVICES.length);
          return 0;
        }
        return prev + 1;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [isHovered, activeIdx]);

  const handleSelect = (idx: number) => {
    setActiveIdx(idx);
    setProgress(0);
  };

  return (
    <section
      id="services"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#FAF8F5] text-navy overflow-hidden"
    >
      {/* Background Decorative Ambient Radial Glows */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-blue-100/50 via-indigo-50/30 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-20 right-0 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="site-container relative px-4 sm:px-8 lg:px-12 max-w-[1360px] mx-auto z-10">
        {/* ========================================================== */}
        {/* SECTION TOP HEADER: EDITORIAL BRANDING                     */}
        {/* ========================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200/80 shadow-xs mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[11px] font-mono tracking-[0.2em] font-bold text-slate-700 uppercase">
                CAPABILITIES & ENGAGEMENTS
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-plus-jakarta text-[36px] sm:text-[48px] lg:text-[54px] font-extrabold text-[#0A1628] leading-[1.08] tracking-[-0.03em]">
              Architected for speed.{' '}
              <span className="font-instrument italic font-normal text-blue-600 block sm:inline">
                Engineered for scale.
              </span>
            </h2>
          </div>

          <p className="text-[15px] sm:text-[16px] text-slate-600 font-dm-sans max-w-md leading-relaxed">
            Choose a dedicated service model tailored to where your business is right now — from tactical AI development to full venture co-building.
          </p>
        </div>

        {/* ========================================================== */}
        {/* TOP FLOATING SEGMENTED DOCK: 4 INTERACTIVE SERVICE SELECTORS */}
        {/* ========================================================== */}
        <div
          className="relative mb-8 sm:mb-10 p-1.5 sm:p-2 bg-slate-200/50 backdrop-blur-md rounded-2xl sm:rounded-[24px] border border-slate-200/80 grid grid-cols-2 lg:grid-cols-4 gap-2 shadow-inner"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {SERVICES.map((service, idx) => {
            const isActive = activeIdx === idx;
            const Icon = service.icon;

            return (
              <button
                key={service.id}
                onClick={() => handleSelect(idx)}
                className={`relative px-4 py-3.5 sm:py-4 rounded-xl sm:rounded-[18px] text-left transition-all duration-300 flex items-center justify-between group overflow-hidden cursor-pointer ${
                  isActive
                    ? 'text-[#0A1628]'
                    : 'text-slate-600 hover:text-navy hover:bg-white/40'
                }`}
              >
                {/* Active Backdrop Pill with LayoutId Spring Animation */}
                {isActive && (
                  <motion.div
                    layoutId="activeServiceTabBackdrop"
                    className="absolute inset-0 bg-white rounded-xl sm:rounded-[18px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-200/90 z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}

                {/* Content Inside Tab Button */}
                <div className="relative z-10 flex items-center gap-3 min-w-0">
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center font-mono text-[11px] sm:text-[12px] font-bold transition-colors ${
                      isActive
                        ? 'bg-[#0A1628] text-white shadow-xs'
                        : 'bg-slate-200/70 text-slate-600 group-hover:bg-slate-300/80'
                    }`}
                  >
                    {service.num}
                  </div>

                  <div className="min-w-0">
                    <span className="block font-plus-jakarta font-bold text-[13px] sm:text-[14px] truncate leading-tight">
                      {service.title}
                    </span>
                    <span className="hidden sm:block text-[11px] font-mono text-slate-500 uppercase tracking-wider truncate mt-0.5">
                      {service.badge}
                    </span>
                  </div>
                </div>

                {/* Right Icon */}
                <div className="relative z-10 hidden sm:flex items-center justify-center pl-2">
                  <Icon
                    className={`w-4 h-4 transition-transform ${
                      isActive
                        ? 'text-blue-600 scale-110'
                        : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                  />
                </div>

                {/* Active Progress Bar Underneath */}
                {isActive && (
                  <div className="absolute bottom-0 left-3 right-3 h-[2px] bg-slate-100 rounded-full overflow-hidden z-10">
                    <motion.div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* ========================================================== */}
        {/* MAIN SHOWCASE CANVAS: SPLIT-SCREEN INTERACTIVE STAGE       */}
        {/* ========================================================== */}
        <div
          className="relative bg-white/90 backdrop-blur-xl rounded-3xl sm:rounded-[36px] border border-slate-200/90 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.06)] overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Top Edge Gradient Stripe */}
          <motion.div
            key={`stripe-${activeService.id}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`h-1.5 w-full bg-gradient-to-r ${activeService.accent.gradient} origin-left`}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="p-6 sm:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
            >
              {/* ---------------- LEFT 5 COLS: CONTENT & FEATURES ---------------- */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  {/* Category & Service Number */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-mono text-[11px] font-bold tracking-wider uppercase">
                      {activeService.category}
                    </span>
                    <span className="text-[12px] font-mono text-slate-400 font-medium">
                      STEP {activeService.num} / 04
                    </span>
                  </div>

                  {/* Big Instrument Serif Title */}
                  <h3 className="font-instrument italic text-[36px] sm:text-[46px] lg:text-[52px] font-normal text-[#0A1628] leading-[1.06] mb-3">
                    {activeService.title}
                  </h3>

                  {/* Subtitle / Tagline */}
                  <p className="text-[15px] sm:text-[16px] font-semibold text-blue-950 font-plus-jakarta mb-4">
                    {activeService.tagline}
                  </p>

                  {/* Detailed Description */}
                  <p className="text-[14px] sm:text-[15px] text-slate-600 font-dm-sans leading-relaxed mb-6">
                    {activeService.description}
                  </p>

                  {/* Features List with Styled Chip Cards */}
                  <div className="space-y-2.5 mb-8">
                    {activeService.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.08 }}
                        className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-xs transition-all"
                      >
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-blue-700 stroke-[3]" />
                        </div>
                        <span className="text-[13px] sm:text-[13.5px] font-medium text-slate-800 font-dm-sans">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0A1628] hover:bg-blue-900 text-white font-dm-sans text-[14px] font-semibold shadow-md shadow-navy/15 hover:-translate-y-0.5 transition-all group cursor-pointer"
                  >
                    <span>Start with {activeService.title.split(' ')[0]}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-1.5 text-[13px] font-medium text-slate-600 hover:text-blue-600 font-dm-sans transition-colors cursor-pointer"
                  >
                    <span>View case studies</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* ---------------- RIGHT 7 COLS: INTERACTIVE TECH SIMULATION ---------------- */}
              <div className="lg:col-span-7">
                {activeService.id === 'ai-dev' && <AiDevWidget />}
                {activeService.id === 'lead-gen' && <LeadGenWidget />}
                {activeService.id === 'employee-pods' && <EmployeePodsWidget />}
                {activeService.id === 'saas-studio' && <SaaSStudioWidget />}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ================================================================= */
/* 1. LIGHT-THEMED VISUAL: AI SOFTWARE DEVELOPMENT ARCHITECTURE      */
/* ================================================================= */
function AiDevWidget() {
  return (
    <div className="relative rounded-2xl sm:rounded-[28px] bg-gradient-to-br from-white via-[#F8FAFC] to-blue-50/40 p-6 sm:p-8 shadow-[0_16px_48px_-12px_rgba(37,99,235,0.08)] border border-blue-200/70 overflow-hidden">
      {/* Background Soft Glow & Grid Accent */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-indigo-400/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top Status Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
            <Cpu className="w-4 h-4 stroke-[2.2]" />
          </div>
          <div>
            <span className="block text-[13px] font-bold text-slate-900 font-plus-jakarta">
              Neural Architecture & RAG Engine
            </span>
            <span className="text-[11px] font-mono text-blue-600 font-medium">
              hybrid-rag.production // zero-hallucination SLA
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-mono font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>STATUS: 200 OK</span>
        </div>
      </div>

      {/* Interactive Pipeline Steps */}
      <div className="mt-5 space-y-3.5 relative z-10">
        {/* Step 1: Multimodal Vector Embeddings */}
        <div className="p-4 rounded-xl bg-white/90 border border-slate-200/90 shadow-xs flex items-center justify-between hover:border-blue-400 transition-all">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
              <Database className="w-4 h-4 stroke-[2]" />
            </div>
            <div>
              <span className="block text-[13px] font-bold text-slate-800">
                01. Proprietary Vector Knowledge Index
              </span>
              <span className="text-[11.5px] text-slate-500 font-dm-sans">
                Dense semantic retrieval over documents, codebases & customer history
              </span>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-mono text-[10.5px] font-bold shrink-0 ml-2">
            &lt; 14ms
          </span>
        </div>

        {/* Step 2: Multi-Agent Reasoning & Guardrails */}
        <div className="p-4 rounded-xl bg-white/90 border border-slate-200/90 shadow-xs flex items-center justify-between hover:border-indigo-400 transition-all">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
              <ShieldCheck className="w-4 h-4 stroke-[2]" />
            </div>
            <div>
              <span className="block text-[13px] font-bold text-slate-800">
                02. Multi-Agent Reasoning & PII Guardrails
              </span>
              <span className="text-[11.5px] text-slate-500 font-dm-sans">
                Claude 3.7 + Custom LLMs with strict privacy compliance & confidence scoring
              </span>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 font-mono text-[10.5px] font-bold shrink-0 ml-2">
            99.8% Conf.
          </span>
        </div>

        {/* Step 3: Production API & Tool Dispatch */}
        <div className="p-4 rounded-xl bg-white/90 border border-slate-200/90 shadow-xs flex items-center justify-between hover:border-emerald-400 transition-all">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
              <Zap className="w-4 h-4 stroke-[2]" />
            </div>
            <div>
              <span className="block text-[13px] font-bold text-slate-800">
                03. Automated Tool & Action Execution
              </span>
              <span className="text-[11.5px] text-slate-500 font-dm-sans">
                Sandboxed SQL queries, CRM updates, and scheduled background workers
              </span>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-mono text-[10.5px] font-bold shrink-0 ml-2">
            Zero-Leakage
          </span>
        </div>

        {/* Bottom Key Metrics Row */}
        <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-200/70">
          <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-center shadow-2xs">
            <span className="block text-[18px] font-instrument italic text-[#0A1628]">
              7 Days
            </span>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
              To Prototype
            </span>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-center shadow-2xs">
            <span className="block text-[18px] font-instrument italic text-blue-600">
              &lt; 24ms
            </span>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
              Avg Latency
            </span>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-center shadow-2xs">
            <span className="block text-[18px] font-instrument italic text-emerald-600">
              99.4%
            </span>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
              Accuracy SLA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================= */
/* 2. LIGHT-THEMED VISUAL: B2B LEAD GENERATION ENGINE                */
/* ================================================================= */
function LeadGenWidget() {
  return (
    <div className="relative rounded-2xl sm:rounded-[28px] bg-gradient-to-br from-white via-[#FAF5FF] to-indigo-50/40 p-6 sm:p-8 shadow-[0_16px_48px_-12px_rgba(99,102,241,0.08)] border border-indigo-200/70 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
            <TrendingUp className="w-4 h-4 stroke-[2.2]" />
          </div>
          <div>
            <span className="block text-[13px] font-bold text-slate-900 font-plus-jakarta">
              B2B Revenue Pipeline Radar
            </span>
            <span className="text-[11px] font-mono text-indigo-600 font-medium">
              Multi-Channel Intent Signals · Booked SLA
            </span>
          </div>
        </div>

        <div className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-[11px] font-mono font-bold text-indigo-700">
          Booked: 24 Meetings/Wk
        </div>
      </div>

      {/* Live Pipeline Feed Cards */}
      <div className="mt-5 space-y-3 relative z-10">
        {[
          {
            name: 'Stripe Ecosystem Partner',
            contact: 'VP Engineering · $45M Series B',
            match: '99.2% ICP Match',
            status: 'Meeting Confirmed',
            tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          },
          {
            name: 'Enterprise Cloud Security',
            contact: 'Chief Technology Officer · 850 Employees',
            match: '98.5% Intent Signal',
            status: 'Follow-up Scheduled',
            tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
          },
          {
            name: 'High-Growth AI Platform',
            contact: 'Head of Product & Infrastructure',
            match: '97.8% High Intent',
            status: 'Outreach Sequence Live',
            tagColor: 'bg-purple-50 text-purple-700 border-purple-200',
          },
        ].map((lead, i) => (
          <div
            key={i}
            className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-between hover:border-indigo-300 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-[11px] font-bold text-white shadow-2xs">
                {lead.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
              </div>
              <div>
                <span className="block text-[13px] font-bold text-slate-900 leading-tight">
                  {lead.name}
                </span>
                <span className="text-[11px] text-slate-500 font-dm-sans leading-tight">
                  {lead.contact}
                </span>
              </div>
            </div>

            <div className="text-right shrink-0 ml-2">
              <span className={`inline-block px-2 py-0.5 rounded-md border text-[10px] font-mono font-bold ${lead.tagColor}`}>
                {lead.status}
              </span>
              <span className="block text-[10px] font-mono text-slate-400 mt-0.5">
                {lead.match}
              </span>
            </div>
          </div>
        ))}

        {/* Performance Metric Row */}
        <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-200/70">
          <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-center shadow-2xs">
            <span className="block text-[18px] font-instrument italic text-indigo-600">
              3.4×
            </span>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
              Meeting Conv.
            </span>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-center shadow-2xs">
            <span className="block text-[18px] font-instrument italic text-[#0A1628]">
              18.4%
            </span>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
              Reply Rate
            </span>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-center shadow-2xs">
            <span className="block text-[18px] font-instrument italic text-emerald-600">
              11.2×
            </span>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
              Average ROI
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================= */
/* 3. LIGHT-THEMED VISUAL: EMPLOYEE PODS SQUAD HUB                   */
/* ================================================================= */
function EmployeePodsWidget() {
  return (
    <div className="relative rounded-2xl sm:rounded-[28px] bg-gradient-to-br from-white via-[#F0FDF4] to-cyan-50/40 p-6 sm:p-8 shadow-[0_16px_48px_-12px_rgba(6,182,212,0.08)] border border-cyan-200/70 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-700">
            <Users className="w-4 h-4 stroke-[2.2]" />
          </div>
          <div>
            <span className="block text-[13px] font-bold text-slate-900 font-plus-jakarta">
              Dedicated Squad Architecture
            </span>
            <span className="text-[11px] font-mono text-cyan-700 font-medium">
              Squad #POD-774 · Embedded in 10 Days
            </span>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[11px] font-mono font-bold text-cyan-800">
          ● 4 Members Active
        </span>
      </div>

      {/* 4 Pod Member Cards Grid */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
        {[
          {
            name: 'Kavita Raman',
            role: 'Staff ML / LLM Architect',
            exp: '8+ Yrs Exp',
            stack: 'PyTorch · LangChain · CUDA',
          },
          {
            name: 'Marcus Bell',
            role: 'Principal Full-Stack Lead',
            exp: '9+ Yrs Exp',
            stack: 'Next.js · Go · Distributed APIs',
          },
          {
            name: 'Elena Rostova',
            role: 'Lead Product Designer',
            exp: '7+ Yrs Exp',
            stack: 'Figma · Design Systems · UX',
          },
          {
            name: 'David Kim',
            role: 'Staff DevOps & Cloud Eng',
            exp: '8+ Yrs Exp',
            stack: 'AWS · Kubernetes · Terraform',
          },
        ].map((member, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-cyan-300 transition-all"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[13px] font-bold text-slate-900">
                {member.name}
              </span>
              <span className="text-[10px] font-mono text-cyan-700 bg-cyan-50 border border-cyan-200 px-1.5 py-0.5 rounded font-bold">
                {member.exp}
              </span>
            </div>
            <span className="block text-[11.5px] text-slate-600 font-medium font-dm-sans">
              {member.role}
            </span>
            <span className="block text-[10px] font-mono text-slate-400 mt-2">
              {member.stack}
            </span>
          </div>
        ))}
      </div>

      {/* Integration Strip */}
      <div className="mt-4 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-between text-[12px] font-dm-sans">
        <span className="text-slate-600 font-medium">
          Direct Slack + GitHub + Daily 9:30 AM Standup Syncs.
        </span>
        <span className="font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-[10.5px] font-bold shrink-0 ml-2">
          10-Day SLA ✓
        </span>
      </div>
    </div>
  );
}

/* ================================================================= */
/* 4. LIGHT-THEMED VISUAL: SAAS PRODUCT STUDIO LAUNCH TRACK          */
/* ================================================================= */
function SaaSStudioWidget() {
  return (
    <div className="relative rounded-2xl sm:rounded-[28px] bg-gradient-to-br from-white via-[#FFFBEB] to-amber-50/40 p-6 sm:p-8 shadow-[0_16px_48px_-12px_rgba(245,158,11,0.08)] border border-amber-200/70 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700">
            <Rocket className="w-4 h-4 stroke-[2.2]" />
          </div>
          <div>
            <span className="block text-[13px] font-bold text-slate-900 font-plus-jakarta">
              Zero-to-One Launch Radar
            </span>
            <span className="text-[11px] font-mono text-amber-700 font-medium">
              8–14 Week Rapid Production Sprint
            </span>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[11px] font-mono font-bold text-amber-800">
          Fixed Timeline & Cost
        </span>
      </div>

      {/* 4-Phase Roadmap Timeline */}
      <div className="mt-5 space-y-2.5 relative z-10">
        {[
          {
            phase: 'Weeks 1–2',
            title: 'Discovery & System Architecture Blueprint',
            status: 'COMPLETED',
            tagColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
          },
          {
            phase: 'Weeks 3–6',
            title: 'Core Product Engine & High-Fidelity UI',
            status: 'COMPLETED',
            tagColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
          },
          {
            phase: 'Weeks 7–10',
            title: 'Billing, Multi-Tenancy & AI Integrations',
            status: 'ACTIVE SPRINT',
            tagColor: 'text-amber-700 bg-amber-50 border-amber-200',
          },
          {
            phase: 'Weeks 11–14',
            title: 'Public Launch & First 100 Paying Users',
            status: 'SCHEDULED',
            tagColor: 'text-blue-700 bg-blue-50 border-blue-200',
          },
        ].map((step, idx) => (
          <div
            key={idx}
            className="p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-between hover:border-amber-300 transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono font-bold text-slate-500 w-20 shrink-0">
                {step.phase}
              </span>
              <span className="text-[12.5px] font-bold text-slate-900 font-plus-jakarta">
                {step.title}
              </span>
            </div>
            <span
              className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border shrink-0 ml-2 ${step.tagColor}`}
            >
              {step.status}
            </span>
          </div>
        ))}
      </div>

      {/* Proof of Work Shipped Badge */}
      <div className="mt-4 pt-3.5 border-t border-slate-200/70 flex items-center justify-between text-[11px] font-mono text-slate-500">
        <span>Shipped on internal ventures:</span>
        <div className="flex items-center gap-3 font-bold text-slate-800">
          <span className="text-amber-700 font-semibold">Neweb.ai ($42k MRR)</span>
          <span>•</span>
          <span className="text-amber-700 font-semibold">Fonda.co (14k Users)</span>
        </div>
      </div>
    </div>
  );
}

