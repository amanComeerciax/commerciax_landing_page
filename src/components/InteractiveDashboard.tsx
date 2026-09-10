'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Bell, Sun, LayoutDashboard, Code2, Sparkles, Cloud,
  Server, Users2, Settings, ShieldCheck, CheckCircle2, Cpu,
  GitBranch, Activity, Zap, Layers,
} from 'lucide-react';
import RevenueChart from './RevenueChart';
import UptimeCard from './UptimeCard';
import RevenueCard from './RevenueCard';
import ProjectsCard from './ProjectsCard';
import TeamCard from './TeamCard';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Workspace' },
  { icon: Code2, label: 'Custom Dev' },
  { icon: Sparkles, label: 'AI Solutions' },
  { icon: Cloud, label: 'Cloud & DevOps' },
  { icon: Server, label: 'APIs & Infra' },
  { icon: Users2, label: 'Tech Team' },
  { icon: Settings, label: 'Settings' },
];

export default function InteractiveDashboard() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-cycle through the sidebar options every 4.5 seconds, pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTabIndex((prev) => (prev + 1) % sidebarItems.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [0, -7, 0] }}
      transition={{
        opacity: { duration: 0.7, delay: 0.4, ease: 'easeOut' },
        y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.1 },
      }}
      className="relative w-full max-w-[840px] xl:max-w-[900px] 2xl:max-w-[960px] mx-auto px-0"
      style={{
        perspective: isMobile ? 'none' : '1400px',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 3D Tilted Dashboard Card for IT Company */}
      <div
        className="relative bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 overflow-hidden w-full transition-transform duration-500"
        style={{
          transform: isMobile ? 'none' : 'rotateY(-10deg) rotateX(6deg) rotateZ(-1.8deg)',
          transformStyle: isMobile ? 'flat' : 'preserve-3d',
          boxShadow: isMobile
            ? '0 10px 25px -5px rgba(10, 22, 40, 0.10), 0 4px 12px -2px rgba(10, 22, 40, 0.05)'
            : '0 40px 80px -15px rgba(10, 22, 40, 0.18), 0 20px 40px -10px rgba(10, 22, 40, 0.08)',
        }}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-2 xs:px-3.5 sm:px-5 py-2 sm:py-3 border-b border-slate-100 bg-white">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <img
              src="/logo.png"
              alt="Commerciax IT Solutions"
              className="h-4.5 xs:h-5 sm:h-7 w-auto object-contain"
            />
          </div>

          {/* Search bar */}
          <div className="flex items-center gap-1 sm:gap-2 bg-slate-100/70 rounded-full px-2 sm:px-3.5 py-1 sm:py-1.5 w-[90px] xs:w-[135px] sm:w-[260px]">
            <Search className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-slate-400 shrink-0" />
            <span className="text-[9px] xs:text-[10px] sm:text-[11px] text-slate-400 font-medium font-dm-sans truncate">
              {activeTabIndex === 0 && 'Search repos, services...'}
              {activeTabIndex === 1 && 'Search git commits...'}
              {activeTabIndex === 2 && 'Search AI models...'}
              {activeTabIndex === 3 && 'Search clusters, pods...'}
              {activeTabIndex === 4 && 'Search API routes...'}
              {activeTabIndex === 5 && 'Search squads, sprints...'}
              {activeTabIndex === 6 && 'Search security rules...'}
            </span>
          </div>

          {/* Actions: Bell, Sun, Avatar, Circle A */}
          <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2.5">
            <div className="relative cursor-pointer text-slate-400 hover:text-navy transition-colors">
              <Bell className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-cobalt rounded-full ring-2 ring-white animate-ping" />
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-cobalt rounded-full ring-2 ring-white" />
            </div>
            <Sun className="w-4 h-4 text-slate-400 cursor-pointer hover:text-navy transition-colors hidden sm:block" />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces&auto=format&q=80"
              alt="Tech Lead Profile"
              className="w-4.5 h-4.5 xs:w-5 xs:h-5 sm:w-6 sm:h-6 rounded-full object-cover ring-1.5 ring-slate-200"
            />
            <div className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 rounded-full bg-blue-100 text-cobalt flex items-center justify-center text-[7.5px] xs:text-[8px] sm:text-[9px] font-extrabold font-plus-jakarta">
              IT
            </div>
          </div>
        </div>

        {/* Dashboard Body */}
        <div className="flex min-h-[290px] sm:min-h-[350px]">
          {/* Left Sidebar with interactive + auto-cycling options */}
          <div className="flex flex-col w-[34px] xs:w-[42px] sm:w-[135px] border-r border-slate-100 bg-slate-50/50 py-2 sm:py-3.5 px-0.5 xs:px-1 sm:px-2.5 shrink-0 justify-between">
            <nav className="flex flex-col gap-0.5 sm:gap-1">
              {sidebarItems.map((item, index) => {
                const isActive = activeTabIndex === index;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActiveTabIndex(index)}
                    title={item.label}
                    className={`relative flex items-center justify-center sm:justify-start gap-2 px-1 sm:px-2.5 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-[11.5px] font-medium font-dm-sans transition-all text-left w-full cursor-pointer ${
                      isActive
                        ? 'bg-blue-100/80 text-cobalt font-bold shadow-xs'
                        : 'text-slate-500 hover:text-navy hover:bg-slate-100/70'
                    }`}
                  >
                    <item.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-colors ${isActive ? 'text-cobalt' : 'text-slate-400'}`} />
                    <span className="truncate hidden sm:inline">{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeSidebarIndicator"
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-cobalt shrink-0 hidden sm:inline-block"
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Live auto-cycle progress indicator */}
            <div className="pt-2 border-t border-slate-200/50 flex items-center justify-center sm:justify-between px-0.5 sm:px-1">
              <span className="text-[9px] font-medium text-slate-400 font-dm-sans hidden sm:inline">
                {isPaused ? 'Paused' : 'Auto Sync'}
              </span>
              <span className="relative flex h-1.5 w-1.5">
                <span className={`absolute inline-flex h-full w-full rounded-full ${isPaused ? 'bg-slate-400' : 'bg-cobalt animate-ping'} opacity-75`} />
                <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${isPaused ? 'bg-slate-500' : 'bg-cobalt'}`} />
              </span>
            </div>
          </div>

          {/* Main Dashboard Panel with AnimatePresence sliding transitions */}
          <div className="flex-1 flex flex-col p-2 xs:p-3 sm:p-5 bg-white min-w-0 overflow-hidden">
            <AnimatePresence mode="wait">
              {/* TAB 0: WORKSPACE OVERVIEW (Classic Bar Chart + Uptime Circle) */}
              {activeTabIndex === 0 && (
                <motion.div
                  key="tab-workspace"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.32, ease: 'easeOut' }}
                  className="flex flex-col gap-2.5 sm:gap-4 h-full justify-between"
                >
                  <div className="grid grid-cols-12 gap-2 sm:gap-3.5 items-center">
                    <div className="col-span-5 flex flex-col justify-center">
                      <h3 className="text-[15px] xs:text-[18px] sm:text-[25px] font-extrabold font-plus-jakarta text-navy leading-[1.1] tracking-tight">
                        Build<br />
                        Ship<br />
                        Scale
                      </h3>
                      <p className="mt-1 text-[8px] xs:text-[9.5px] sm:text-[10.5px] text-slate-400 leading-snug font-dm-sans font-normal line-clamp-2 sm:line-clamp-none">
                        Full-cycle enterprise IT solutions & custom AI software engineering.
                      </p>
                      <button className="mt-1.5 sm:mt-2.5 inline-flex items-center gap-1 sm:gap-1.5 px-2 xs:px-2.5 sm:px-3.5 py-1 sm:py-1.5 bg-[#0A1628] text-white text-[8.5px] xs:text-[9.5px] sm:text-[10.5px] font-medium font-dm-sans rounded-lg hover:bg-slate-800 transition-all w-fit shadow-sm">
                        Deploy solution
                        <span className="text-[9px] sm:text-[11px]">→</span>
                      </button>
                    </div>
                    <div className="col-span-4 flex justify-center">
                      <RevenueChart />
                    </div>
                    <div className="col-span-3 flex justify-end">
                      <UptimeCard />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 xs:gap-2.5 sm:gap-3 pt-1">
                    <ProjectsCard />
                    <TeamCard />
                    <RevenueCard />
                  </div>
                </motion.div>
              )}

              {/* TAB 1: CUSTOM DEV (Git Spline Area Curve + Concentric Quality Arcs) */}
              {activeTabIndex === 1 && (
                <motion.div
                  key="tab-custom-dev"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.32, ease: 'easeOut' }}
                  className="flex flex-col gap-2.5 sm:gap-4 h-full justify-between"
                >
                  <div className="grid grid-cols-12 gap-2 sm:gap-3.5 items-center">
                    <div className="col-span-5 flex flex-col justify-center">
                      <h3 className="text-[15px] xs:text-[18px] sm:text-[25px] font-extrabold font-plus-jakarta text-navy leading-[1.1] tracking-tight">
                        Ship Code<br />
                        Faster<br />
                        Clean
                      </h3>
                      <p className="mt-1 text-[8px] xs:text-[9.5px] sm:text-[10.5px] text-slate-400 leading-snug font-dm-sans font-normal line-clamp-2 sm:line-clamp-none">
                        Next.js, TypeScript, Go & Microservices clean architecture.
                      </p>
                      <button className="mt-1.5 sm:mt-2.5 inline-flex items-center gap-1 sm:gap-1.5 px-2 xs:px-2.5 sm:px-3.5 py-1 sm:py-1.5 bg-[#0A1628] text-white text-[8.5px] xs:text-[9.5px] sm:text-[10.5px] font-medium font-dm-sans rounded-lg hover:bg-slate-800 transition-all w-fit shadow-sm">
                        Inspect repos
                        <span className="text-[9px] sm:text-[11px]">→</span>
                      </button>
                    </div>

                    {/* DIFFERENT CHART 1: Smooth Git Commit Spline Area Curve */}
                    <div className="col-span-4 flex justify-center">
                      <div className="flex flex-col items-start gap-1 sm:gap-1.5 pt-0.5 sm:pt-1 w-full max-w-[170px]">
                        <div className="inline-flex items-center gap-1 xs:gap-1.5 px-1.5 xs:px-2.5 py-0.5 xs:py-1 rounded-md bg-blue-50 border border-blue-100/80 shadow-xs">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600" />
                          </span>
                          <span className="text-[8.5px] xs:text-[10px] font-bold font-plus-jakarta text-blue-600">+88%</span>
                          <span className="text-[7.5px] xs:text-[9.5px] font-medium font-dm-sans text-blue-700/70 hidden xs:inline">Velocity</span>
                        </div>

                        {/* Git Commit Spline SVG */}
                        <div className="w-full h-[60px] xs:h-[80px] sm:h-[105px] flex items-end pt-1">
                          <svg viewBox="0 0 150 75" className="w-full h-full overflow-visible">
                            <defs>
                              <linearGradient id="gitSplineGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.35" />
                                <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            {/* Animated filled spline */}
                            <motion.path
                              d="M0,60 C30,65 45,35 75,40 C105,45 120,15 150,22 L150,75 L0,75 Z"
                              fill="url(#gitSplineGrad)"
                              animate={{
                                d: [
                                  "M0,60 C30,65 45,35 75,40 C105,45 120,15 150,22 L150,75 L0,75 Z",
                                  "M0,58 C30,52 45,45 75,32 C105,38 120,10 150,18 L150,75 L0,75 Z",
                                  "M0,60 C30,65 45,35 75,40 C105,45 120,15 150,22 L150,75 L0,75 Z",
                                ],
                              }}
                              transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            {/* Animated line stroke */}
                            <motion.path
                              d="M0,60 C30,65 45,35 75,40 C105,45 120,15 150,22"
                              fill="none"
                              stroke="#2563EB"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              animate={{
                                d: [
                                  "M0,60 C30,65 45,35 75,40 C105,45 120,15 150,22",
                                  "M0,58 C30,52 45,45 75,32 C105,38 120,10 150,18",
                                  "M0,60 C30,65 45,35 75,40 C105,45 120,15 150,22",
                                ],
                              }}
                              transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            {/* Pulsing commit node markers */}
                            <motion.circle cx="75" cy="40" r="3" fill="#3B82F6" stroke="#fff" strokeWidth="1.5" animate={{ r: [2.5, 4, 2.5] }} transition={{ duration: 2, repeat: Infinity }} />
                            <motion.circle cx="150" cy="22" r="3.5" fill="#1D4ED8" stroke="#fff" strokeWidth="1.5" animate={{ r: [3, 4.5, 3] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.5 }} />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* DIFFERENT RIGHT 1: Multi-Arc Quality Target Meter */}
                    <div className="col-span-3 flex justify-end">
                      <div className="flex flex-col items-center justify-between h-full py-0.5">
                        <div className="flex items-center gap-1 self-start">
                          <GitBranch className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-blue-600" />
                          <span className="text-[9px] xs:text-[9.5px] sm:text-[11px] font-medium font-dm-sans text-slate-400 tracking-tight truncate">Review</span>
                        </div>
                        <div className="relative w-[48px] h-[48px] xs:w-[58px] xs:h-[58px] sm:w-[72px] sm:h-[72px] flex items-center justify-center my-0.5 sm:my-1">
                          {/* Concentric Arcs */}
                          <svg viewBox="0 0 72 72" className="w-full h-full -rotate-90">
                            <circle cx="36" cy="36" r="31" fill="none" stroke="#F1F5F9" strokeWidth="3" />
                            <circle cx="36" cy="36" r="31" fill="none" stroke="#1D4ED8" strokeWidth="3" strokeDasharray="194" strokeDashoffset="10" strokeLinecap="round" />
                            <circle cx="36" cy="36" r="23" fill="none" stroke="#F1F5F9" strokeWidth="3" />
                            <circle cx="36" cy="36" r="23" fill="none" stroke="#3B82F6" strokeWidth="3" strokeDasharray="144" strokeDashoffset="14" strokeLinecap="round" />
                          </svg>
                          <div className="absolute flex flex-col items-center">
                            <span className="text-[11px] xs:text-[12px] sm:text-[15px] font-black font-plus-jakarta text-blue-700 leading-none">A+</span>
                            <span className="text-[6px] sm:text-[7.5px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Grade</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <span className="text-[7.5px] xs:text-[8.5px] sm:text-[10px] font-medium font-dm-sans text-blue-600 flex items-center gap-0.5 sm:gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block animate-pulse" />
                            99.4%
                          </span>
                          <span className="text-[7px] sm:text-[8.5px] text-slate-400 font-dm-sans font-normal whitespace-nowrap hidden xs:inline">Clean Lint</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="grid grid-cols-3 gap-1 xs:gap-2 sm:gap-3 pt-1">
                    <div className="bg-slate-50/70 rounded-xl p-1 xs:p-2 sm:p-4 border border-slate-100 flex flex-col justify-between min-w-0 shadow-xs">
                      <span className="text-[8px] xs:text-[9.5px] sm:text-[11px] font-medium font-dm-sans text-slate-400 truncate">PRs Merged</span>
                      <div className="flex items-baseline justify-between mt-0.5 sm:mt-1">
                        <span className="text-[13px] xs:text-[16px] sm:text-[22px] font-extrabold font-plus-jakarta text-navy tracking-tight truncate">384+</span>
                        <span className="text-[7px] sm:text-[9px] font-medium font-dm-sans text-blue-700 bg-blue-50 px-1 sm:px-1.5 py-0.5 rounded border border-blue-100/60 hidden xs:inline-block">100%</span>
                      </div>
                      <div className="w-full h-5 sm:h-8 mt-1 flex items-center">
                        <div className="w-full bg-blue-100/60 h-1 sm:h-1.5 rounded-full overflow-hidden">
                          <motion.div
                            className="bg-blue-600 h-full rounded-full"
                            animate={{ width: ['70%', '95%', '70%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-50/70 rounded-xl p-1 xs:p-2 sm:p-4 border border-slate-100 flex flex-col justify-between min-w-0 shadow-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] xs:text-[9.5px] sm:text-[11px] font-medium font-dm-sans text-slate-400 truncate">Tech Stack</span>
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600" />
                        </span>
                      </div>
                      <div className="mt-0.5 sm:mt-1">
                        <span className="text-[13px] xs:text-[16px] sm:text-[22px] font-extrabold font-plus-jakarta text-navy tracking-tight">16+</span>
                      </div>
                      <div className="flex items-center gap-0.5 sm:gap-1 mt-1 sm:mt-2 text-[7px] xs:text-[8px] sm:text-[9px] font-medium font-dm-sans">
                        <span className="bg-blue-50 text-cobalt px-1 sm:px-1.5 py-0.5 rounded font-bold">React</span>
                        <span className="bg-slate-200/80 text-slate-700 px-1 sm:px-1.5 py-0.5 rounded font-bold">Next</span>
                        <span className="bg-blue-50 text-blue-700 px-1 sm:px-1.5 py-0.5 rounded font-bold hidden xs:inline">Go</span>
                      </div>
                    </div>
                    <div className="bg-slate-50/70 rounded-xl p-1 xs:p-2 sm:p-4 border border-slate-100 flex flex-col justify-between min-w-0 shadow-xs">
                      <span className="text-[8px] xs:text-[9.5px] sm:text-[11px] font-medium font-dm-sans text-slate-400 truncate">Review Speed</span>
                      <div className="flex items-end justify-between mt-0.5 sm:mt-1">
                        <div className="min-w-0 flex-1">
                          <span className="text-[13px] xs:text-[16px] sm:text-[22px] font-extrabold font-plus-jakarta text-navy tracking-tight block">14m</span>
                          <div className="flex items-center gap-0.5 sm:gap-1 mt-0.5 text-[7.5px] xs:text-[8.5px] sm:text-[10px] font-medium font-dm-sans text-blue-600">
                            <span>↑</span>
                            <span>4.2x</span>
                          </div>
                        </div>
                        <div className="flex items-end gap-1 sm:gap-1.5 h-5 sm:h-8 pb-0.5 shrink-0">
                          {[30, 60, 45, 90].map((h, i) => (
                            <motion.div
                              key={i}
                              className="w-1 xs:w-1.5 sm:w-2 bg-blue-600 rounded-t-[2px]"
                              animate={{ height: [`${h * 0.7}%`, `${h}%`, `${h * 0.7}%`] }}
                              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: ENTERPRISE AI (Neural Network Mesh + Token Speedometer) */}
              {activeTabIndex === 2 && (
                <motion.div
                  key="tab-ai-systems"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.32, ease: 'easeOut' }}
                  className="flex flex-col gap-2.5 sm:gap-4 h-full justify-between"
                >
                  <div className="grid grid-cols-12 gap-2 sm:gap-3.5 items-center">
                    <div className="col-span-5 flex flex-col justify-center">
                      <h3 className="text-[15px] xs:text-[18px] sm:text-[25px] font-extrabold font-plus-jakarta text-navy leading-[1.1] tracking-tight">
                        Enterprise<br />
                        AI Models<br />
                        At Scale
                      </h3>
                      <p className="mt-1 text-[8px] xs:text-[9.5px] sm:text-[10.5px] text-slate-400 leading-snug font-dm-sans font-normal line-clamp-2 sm:line-clamp-none">
                        Fine-tuned LLMs, neural search & autonomous workflow agents.
                      </p>
                      <button className="mt-1.5 sm:mt-2.5 inline-flex items-center gap-1 sm:gap-1.5 px-2 xs:px-2.5 sm:px-3.5 py-1 sm:py-1.5 bg-[#0A1628] text-white text-[8.5px] xs:text-[9.5px] sm:text-[10.5px] font-medium font-dm-sans rounded-lg hover:bg-slate-800 transition-all w-fit shadow-sm">
                        Launch cluster
                        <span className="text-[9px] sm:text-[11px]">→</span>
                      </button>
                    </div>

                    {/* DIFFERENT CHART 2: Neural Network Connected Node Mesh */}
                    <div className="col-span-4 flex justify-center">
                      <div className="flex flex-col items-start gap-1 sm:gap-1.5 pt-0.5 sm:pt-1 w-full max-w-[170px]">
                        <div className="inline-flex items-center gap-1 xs:gap-1.5 px-1.5 xs:px-2.5 py-0.5 xs:py-1 rounded-md bg-blue-50 border border-blue-100/80 shadow-xs">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600" />
                          </span>
                          <span className="text-[8.5px] xs:text-[10px] font-bold font-plus-jakarta text-blue-600">+94%</span>
                          <span className="text-[7.5px] xs:text-[9.5px] font-medium font-dm-sans text-blue-700/70 hidden xs:inline">Weights</span>
                        </div>

                        {/* Neural Graph SVG */}
                        <div className="w-full h-[60px] xs:h-[80px] sm:h-[105px] flex items-center justify-center pt-1 relative">
                          <svg viewBox="0 0 150 75" className="w-full h-full overflow-visible">
                            <line x1="20" y1="20" x2="75" y2="15" stroke="#93C5FD" strokeWidth="1" strokeDasharray="3,3" />
                            <line x1="20" y1="20" x2="75" y2="40" stroke="#93C5FD" strokeWidth="1.2" />
                            <line x1="20" y1="55" x2="75" y2="40" stroke="#93C5FD" strokeWidth="1" />
                            <line x1="20" y1="55" x2="75" y2="65" stroke="#93C5FD" strokeWidth="1.2" strokeDasharray="3,3" />

                            <line x1="75" y1="15" x2="130" y2="28" stroke="#3B82F6" strokeWidth="1.5" />
                            <line x1="75" y1="40" x2="130" y2="28" stroke="#3B82F6" strokeWidth="1.5" />
                            <line x1="75" y1="40" x2="130" y2="52" stroke="#3B82F6" strokeWidth="1.5" />
                            <line x1="75" y1="65" x2="130" y2="52" stroke="#3B82F6" strokeWidth="1.5" />

                            <motion.circle cx="20" cy="20" r="4.5" fill="#2563EB" animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                            <motion.circle cx="20" cy="55" r="4.5" fill="#2563EB" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.3 }} />

                            <motion.circle cx="75" cy="15" r="5" fill="#1D4ED8" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.8, repeat: Infinity, delay: 0.2 }} />
                            <motion.circle cx="75" cy="40" r="6" fill="#0A1628" animate={{ scale: [1, 1.35, 1] }} transition={{ duration: 2.1, repeat: Infinity, delay: 0.4 }} />
                            <motion.circle cx="75" cy="65" r="5" fill="#1D4ED8" animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 1.9, repeat: Infinity, delay: 0.6 }} />

                            <motion.circle cx="130" cy="28" r="5.5" fill="#3B82F6" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2.4, repeat: Infinity, delay: 0.5 }} />
                            <motion.circle cx="130" cy="52" r="5.5" fill="#60A5FA" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2.3, repeat: Infinity, delay: 0.7 }} />

                            <motion.circle r="2" fill="#93C5FD" animate={{ cx: [20, 75, 130], cy: [20, 40, 28], opacity: [0, 1, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }} />
                            <motion.circle r="2" fill="#3B82F6" animate={{ cx: [20, 75, 130], cy: [55, 40, 52], opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.8 }} />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* DIFFERENT RIGHT 2: Token Speedometer Arc Dial */}
                    <div className="col-span-3 flex justify-end">
                      <div className="flex flex-col items-center justify-between h-full py-0.5">
                        <div className="flex items-center gap-1 self-start">
                          <Cpu className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-blue-600" />
                          <span className="text-[9px] xs:text-[9.5px] sm:text-[11px] font-medium font-dm-sans text-slate-400 tracking-tight truncate">Throughput</span>
                        </div>

                        <div className="relative w-[48px] h-[48px] xs:w-[58px] xs:h-[58px] sm:w-[76px] sm:h-[76px] flex items-center justify-center my-0.5 sm:my-1">
                          <svg viewBox="0 0 76 76" className="w-full h-full overflow-visible">
                            <defs>
                              <linearGradient id="gpu-speed-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#2563EB" />
                                <stop offset="100%" stopColor="#60A5FA" />
                              </linearGradient>
                            </defs>

                            <circle
                              cx="38"
                              cy="38"
                              r="28"
                              fill="none"
                              stroke="#F1F5F9"
                              strokeWidth="5.5"
                              strokeLinecap="round"
                              strokeDasharray="117 176"
                              strokeDashoffset="0"
                              transform="rotate(150 38 38)"
                            />

                            <motion.circle
                              cx="38"
                              cy="38"
                              r="28"
                              fill="none"
                              stroke="url(#gpu-speed-grad)"
                              strokeWidth="5.5"
                              strokeLinecap="round"
                              strokeDasharray="98 176"
                              strokeDashoffset="0"
                              transform="rotate(150 38 38)"
                              animate={{ strokeDasharray: ['94 176', '101 176', '94 176'] }}
                              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            />
                          </svg>

                          <div className="absolute inset-0 flex flex-col items-center justify-center pt-0.5 pointer-events-none">
                            <span className="text-[11px] xs:text-[12px] sm:text-[15px] font-extrabold font-plus-jakarta text-navy leading-none">84</span>
                            <span className="text-[6px] sm:text-[8px] font-bold text-blue-600 uppercase tracking-tight mt-0.5">Tok/s</span>
                          </div>
                        </div>

                        <div className="flex flex-col items-center text-center">
                          <span className="text-[7.5px] xs:text-[8.5px] sm:text-[10px] font-medium font-dm-sans text-blue-600 flex items-center gap-0.5 sm:gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block animate-pulse" />
                            H100
                          </span>
                          <span className="text-[7px] sm:text-[8.5px] text-slate-400 font-dm-sans font-normal whitespace-nowrap hidden xs:inline">24ms Latency</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="grid grid-cols-3 gap-1 xs:gap-2 sm:gap-3 pt-1">
                    <div className="bg-slate-50/70 rounded-xl p-1 xs:p-2 sm:p-4 border border-slate-100 flex flex-col justify-between min-w-0 shadow-xs">
                      <span className="text-[8px] xs:text-[9.5px] sm:text-[11px] font-medium font-dm-sans text-slate-400 truncate">AI Agents</span>
                      <div className="flex items-baseline justify-between mt-0.5 sm:mt-1">
                        <span className="text-[13px] xs:text-[16px] sm:text-[22px] font-extrabold font-plus-jakarta text-navy tracking-tight">36+</span>
                        <span className="text-[7px] sm:text-[9px] font-medium font-dm-sans text-blue-700 bg-blue-50 px-1 sm:px-1.5 py-0.5 rounded border border-blue-100/60 hidden xs:inline-block">Auto</span>
                      </div>
                      <div className="w-full h-5 sm:h-8 mt-1 flex items-center">
                        <div className="w-full bg-blue-100/60 h-1 sm:h-1.5 rounded-full overflow-hidden">
                          <motion.div
                            className="bg-blue-600 h-full rounded-full"
                            animate={{ width: ['60%', '98%', '60%'] }}
                            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-50/70 rounded-xl p-1 xs:p-2 sm:p-4 border border-slate-100 flex flex-col justify-between min-w-0 shadow-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] xs:text-[9.5px] sm:text-[11px] font-medium font-dm-sans text-slate-400 truncate">Models</span>
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600" />
                        </span>
                      </div>
                      <div className="mt-0.5 sm:mt-1">
                        <span className="text-[13px] xs:text-[16px] sm:text-[22px] font-extrabold font-plus-jakarta text-navy tracking-tight">18+</span>
                      </div>
                      <div className="flex items-center gap-0.5 sm:gap-1 mt-1 sm:mt-2 text-[7px] xs:text-[8px] sm:text-[9px] font-medium font-dm-sans">
                        <span className="bg-blue-50 text-blue-700 px-1 sm:px-1.5 py-0.5 rounded font-bold">Claude</span>
                        <span className="bg-blue-50 text-blue-700 px-1 sm:px-1.5 py-0.5 rounded font-bold">GPT-4</span>
                        <span className="bg-slate-200/80 text-slate-700 px-1 sm:px-1.5 py-0.5 rounded font-bold hidden xs:inline">Llama</span>
                      </div>
                    </div>
                    <div className="bg-slate-50/70 rounded-xl p-1 xs:p-2 sm:p-4 border border-slate-100 flex flex-col justify-between min-w-0 shadow-xs">
                      <span className="text-[8px] xs:text-[9.5px] sm:text-[11px] font-medium font-dm-sans text-slate-400 truncate">Daily Tokens</span>
                      <div className="flex items-end justify-between mt-0.5 sm:mt-1">
                        <div className="min-w-0 flex-1">
                          <span className="text-[13px] xs:text-[16px] sm:text-[22px] font-extrabold font-plus-jakarta text-navy tracking-tight block">4.2M+</span>
                          <div className="flex items-center gap-0.5 sm:gap-1 mt-0.5 text-[7.5px] xs:text-[8.5px] sm:text-[10px] font-medium font-dm-sans text-blue-600">
                            <span>↑</span>
                            <span>GPU Fast</span>
                          </div>
                        </div>
                        <div className="flex items-end gap-1 sm:gap-1.5 h-5 sm:h-8 pb-0.5 shrink-0">
                          {[40, 75, 55, 95].map((h, i) => (
                            <motion.div
                              key={i}
                              className="w-1 xs:w-1.5 sm:w-2 bg-blue-600 rounded-t-[2px]"
                              animate={{ height: [`${h * 0.7}%`, `${h}%`, `${h * 0.7}%`] }}
                              transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.2 }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: CLOUD & DEVOPS (Multi-Region Server Blades + Kubernetes Pod Matrix) */}
              {activeTabIndex === 3 && (
                <motion.div
                  key="tab-cloud-devops"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.32, ease: 'easeOut' }}
                  className="flex flex-col gap-2.5 sm:gap-4 h-full justify-between"
                >
                  <div className="grid grid-cols-12 gap-2 sm:gap-3.5 items-center">
                    <div className="col-span-5 flex flex-col justify-center">
                      <h3 className="text-[15px] xs:text-[18px] sm:text-[25px] font-extrabold font-plus-jakarta text-navy leading-[1.1] tracking-tight">
                        Cloud &<br />
                        DevOps<br />
                        Zero Risk
                      </h3>
                      <p className="mt-1 text-[8px] xs:text-[9.5px] sm:text-[10.5px] text-slate-400 leading-snug font-dm-sans font-normal line-clamp-2 sm:line-clamp-none">
                        AWS, GCP & Azure Kubernetes auto-scaling clusters with zero downtime.
                      </p>
                      <button className="mt-1.5 sm:mt-2.5 inline-flex items-center gap-1 sm:gap-1.5 px-2 xs:px-2.5 sm:px-3.5 py-1 sm:py-1.5 bg-[#0A1628] text-white text-[8.5px] xs:text-[9.5px] sm:text-[10.5px] font-medium font-dm-sans rounded-lg hover:bg-slate-800 transition-all w-fit shadow-sm">
                        Manage clusters
                        <span className="text-[9px] sm:text-[11px]">→</span>
                      </button>
                    </div>

                    {/* DIFFERENT CHART 3: Multi-Region Cluster Server Blades */}
                    <div className="col-span-4 flex justify-center">
                      <div className="flex flex-col items-start gap-1 sm:gap-1.5 pt-0.5 sm:pt-1 w-full max-w-[170px]">
                        <div className="inline-flex items-center gap-1 xs:gap-1.5 px-1.5 xs:px-2.5 py-0.5 xs:py-1 rounded-md bg-blue-50 border border-blue-100/80 shadow-xs">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600" />
                          </span>
                          <span className="text-[8.5px] xs:text-[10px] font-bold font-plus-jakarta text-blue-600">3 Regions</span>
                          <span className="text-[7.5px] xs:text-[9.5px] font-medium font-dm-sans text-blue-700/70 hidden xs:inline">Synced</span>
                        </div>

                        {/* 3 Horizontal Blade Servers */}
                        <div className="w-full flex flex-col gap-1 sm:gap-1.5 pt-0.5 sm:pt-1 justify-center">
                          {[
                            { name: 'us-east', pct: '88%', col: 'bg-blue-600' },
                            { name: 'eu-west', pct: '74%', col: 'bg-blue-500' },
                            { name: 'ap-south', pct: '92%', col: 'bg-blue-700' },
                          ].map((cluster, i) => (
                            <div key={i} className="bg-slate-50 border border-slate-200/70 rounded sm:rounded-lg p-0.5 sm:p-1.5 flex flex-col gap-0.5">
                              <div className="flex justify-between items-center text-[7px] sm:text-[8.5px] font-bold text-slate-600">
                                <span className="truncate">{cluster.name}</span>
                                <span className="text-blue-700">{cluster.pct}</span>
                              </div>
                              <div className="w-full bg-slate-200 h-1 sm:h-1.5 rounded-full overflow-hidden">
                                <motion.div
                                  className={`${cluster.col} h-full rounded-full`}
                                  animate={{ width: [cluster.pct, `${parseInt(cluster.pct) - 10}%`, cluster.pct] }}
                                  transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* DIFFERENT RIGHT 3: Kubernetes Pod Health Matrix (Hexagonal Grid) */}
                    <div className="col-span-3 flex justify-end">
                      <div className="flex flex-col items-center justify-between h-full py-0.5">
                        <div className="flex items-center gap-1 self-start">
                          <Layers className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-blue-600" />
                          <span className="text-[9px] xs:text-[9.5px] sm:text-[11px] font-medium font-dm-sans text-slate-400 tracking-tight truncate">Pod Grid</span>
                        </div>

                        {/* 12 Mini Glowing Health Pods */}
                        <div className="grid grid-cols-4 gap-0.5 sm:gap-1 p-1 sm:p-2 bg-slate-50 rounded-lg sm:rounded-xl border border-slate-100 my-0.5 sm:my-1">
                          {Array.from({ length: 12 }).map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 rounded-[1.5px] sm:rounded-[3px] bg-blue-600 shadow-[0_0_4px_#3B82F6]"
                              animate={{ opacity: [0.6, 1, 0.6] }}
                              transition={{ duration: 1.8, repeat: Infinity, delay: (i % 4) * 0.25 }}
                            />
                          ))}
                        </div>

                        <div className="flex flex-col items-center text-center">
                          <span className="text-[7.5px] xs:text-[8.5px] sm:text-[10px] font-bold font-dm-sans text-blue-600 flex items-center gap-0.5 sm:gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block animate-pulse" />
                            192 Pods
                          </span>
                          <span className="text-[7px] sm:text-[8.5px] text-slate-400 font-dm-sans font-normal whitespace-nowrap hidden xs:inline">Auto-Healing</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="grid grid-cols-3 gap-1 xs:gap-2 sm:gap-3 pt-1">
                    <div className="bg-slate-50/70 rounded-xl p-1 xs:p-2 sm:p-4 border border-slate-100 flex flex-col justify-between min-w-0 shadow-xs">
                      <span className="text-[8px] xs:text-[9.5px] sm:text-[11px] font-medium font-dm-sans text-slate-400 truncate">K8s Pods</span>
                      <div className="flex items-baseline justify-between mt-0.5 sm:mt-1">
                        <span className="text-[13px] xs:text-[16px] sm:text-[22px] font-extrabold font-plus-jakarta text-navy tracking-tight">192+</span>
                        <span className="text-[7px] sm:text-[9px] font-medium font-dm-sans text-blue-700 bg-blue-50 px-1 sm:px-1.5 py-0.5 rounded border border-blue-100/60 hidden xs:inline-block">Scale</span>
                      </div>
                      <div className="w-full h-5 sm:h-8 mt-1 flex items-center">
                        <div className="w-full bg-blue-100/60 h-1 sm:h-1.5 rounded-full overflow-hidden">
                          <motion.div
                            className="bg-blue-600 h-full rounded-full"
                            animate={{ width: ['75%', '96%', '75%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-50/70 rounded-xl p-1 xs:p-2 sm:p-4 border border-slate-100 flex flex-col justify-between min-w-0 shadow-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] xs:text-[9.5px] sm:text-[11px] font-medium font-dm-sans text-slate-400 truncate">Regions</span>
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600" />
                        </span>
                      </div>
                      <div className="mt-0.5 sm:mt-1">
                        <span className="text-[13px] xs:text-[16px] sm:text-[22px] font-extrabold font-plus-jakarta text-navy tracking-tight">6 Global</span>
                      </div>
                      <div className="flex items-center gap-0.5 sm:gap-1 mt-1 sm:mt-2 text-[7px] xs:text-[8px] sm:text-[9px] font-medium font-dm-sans">
                        <span className="bg-blue-50 text-cobalt px-1 sm:px-1.5 py-0.5 rounded font-bold">US</span>
                        <span className="bg-blue-50 text-blue-700 px-1 sm:px-1.5 py-0.5 rounded font-bold">EU</span>
                        <span className="bg-slate-200/80 text-slate-700 px-1 sm:px-1.5 py-0.5 rounded font-bold hidden xs:inline">Asia</span>
                      </div>
                    </div>
                    <div className="bg-slate-50/70 rounded-xl p-1 xs:p-2 sm:p-4 border border-slate-100 flex flex-col justify-between min-w-0 shadow-xs">
                      <span className="text-[8px] xs:text-[9.5px] sm:text-[11px] font-medium font-dm-sans text-slate-400 truncate">Latency</span>
                      <div className="flex items-end justify-between mt-0.5 sm:mt-1">
                        <div className="min-w-0 flex-1">
                          <span className="text-[13px] xs:text-[16px] sm:text-[22px] font-extrabold font-plus-jakarta text-navy tracking-tight block">18ms</span>
                          <div className="flex items-center gap-0.5 sm:gap-1 mt-0.5 text-[7.5px] xs:text-[8.5px] sm:text-[10px] font-medium font-dm-sans text-blue-600">
                            <span>↑</span>
                            <span>Edge</span>
                          </div>
                        </div>
                        <div className="flex items-end gap-1 sm:gap-1.5 h-5 sm:h-8 pb-0.5 shrink-0">
                          {[35, 70, 50, 85].map((h, i) => (
                            <motion.div
                              key={i}
                              className="w-1 xs:w-1.5 sm:w-2 bg-blue-600 rounded-t-[2px]"
                              animate={{ height: [`${h * 0.7}%`, `${h}%`, `${h * 0.7}%`] }}
                              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 4: APIS & INFRA (Real-Time ECG Traffic Waveform + Edge Latency Thermometer) */}
              {activeTabIndex === 4 && (
                <motion.div
                  key="tab-apis-infra"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.32, ease: 'easeOut' }}
                  className="flex flex-col gap-2.5 sm:gap-4 h-full justify-between"
                >
                  <div className="grid grid-cols-12 gap-2 sm:gap-3.5 items-center">
                    <div className="col-span-5 flex flex-col justify-center">
                      <h3 className="text-[15px] xs:text-[18px] sm:text-[25px] font-extrabold font-plus-jakarta text-navy leading-[1.1] tracking-tight">
                        Scalable<br />
                        APIs & Infra<br />
                        High Speed
                      </h3>
                      <p className="mt-1 text-[8px] xs:text-[9.5px] sm:text-[10.5px] text-slate-400 leading-snug font-dm-sans font-normal line-clamp-2 sm:line-clamp-none">
                        High-concurrency GraphQL & REST gateways with ultra-low latency.
                      </p>
                      <button className="mt-1.5 sm:mt-2.5 inline-flex items-center gap-1 sm:gap-1.5 px-2 xs:px-2.5 sm:px-3.5 py-1 sm:py-1.5 bg-[#0A1628] text-white text-[8.5px] xs:text-[9.5px] sm:text-[10.5px] font-medium font-dm-sans rounded-lg hover:bg-slate-800 transition-all w-fit shadow-sm">
                        Inspect routes
                        <span className="text-[9px] sm:text-[11px]">→</span>
                      </button>
                    </div>

                    {/* DIFFERENT CHART 4: High-Frequency Real-time ECG Traffic Waveform */}
                    <div className="col-span-4 flex justify-center">
                      <div className="flex flex-col items-start gap-1 sm:gap-1.5 pt-0.5 sm:pt-1 w-full max-w-[170px]">
                        <div className="inline-flex items-center gap-1 xs:gap-1.5 px-1.5 xs:px-2.5 py-0.5 xs:py-1 rounded-md bg-blue-50 border border-blue-100/80 shadow-xs">
                          <Activity className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-600 animate-pulse" />
                          <span className="text-[8.5px] xs:text-[10px] font-bold font-plus-jakarta text-blue-600">85K/s</span>
                          <span className="text-[7.5px] xs:text-[9.5px] font-medium font-dm-sans text-blue-700/70 hidden xs:inline">Peak</span>
                        </div>

                        {/* ECG Traffic Waveform SVG */}
                        <div className="w-full h-[60px] xs:h-[80px] sm:h-[105px] flex items-center justify-center pt-1 relative">
                          <svg viewBox="0 0 150 70" className="w-full h-full overflow-visible">
                            <defs>
                              <linearGradient id="ecgGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            <motion.path
                              d="M0,45 L30,45 L40,25 L48,55 L58,15 L68,60 L78,35 L88,45 L150,45"
                              fill="none"
                              stroke="#2563EB"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              animate={{
                                d: [
                                  "M0,45 L30,45 L40,25 L48,55 L58,15 L68,60 L78,35 L88,45 L150,45",
                                  "M0,45 L25,45 L38,18 L46,58 L56,22 L66,52 L76,40 L90,45 L150,45",
                                  "M0,45 L30,45 L40,25 L48,55 L58,15 L68,60 L78,35 L88,45 L150,45",
                                ],
                              }}
                              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            <motion.circle
                              r="3"
                              fill="#2563EB"
                              stroke="#FFFFFF"
                              strokeWidth="1.5"
                              animate={{
                                cx: [0, 58, 150],
                                cy: [45, 15, 45],
                                opacity: [0, 1, 0],
                              }}
                              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* DIFFERENT RIGHT 4: Edge Latency Barometer */}
                    <div className="col-span-3 flex justify-end">
                      <div className="flex flex-col items-center justify-between h-full py-0.5">
                        <div className="flex items-center gap-1 self-start">
                          <Zap className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-blue-600" />
                          <span className="text-[9px] xs:text-[9.5px] sm:text-[11px] font-medium font-dm-sans text-slate-400 tracking-tight truncate">Latency</span>
                        </div>

                        <div className="relative w-[48px] h-[48px] xs:w-[58px] xs:h-[58px] sm:w-[72px] sm:h-[72px] flex items-center justify-center my-0.5 sm:my-1 bg-blue-50/50 rounded-xl sm:rounded-2xl border border-blue-100">
                          <div className="flex flex-col items-center">
                            <span className="text-[13px] xs:text-[15px] sm:text-[18px] font-black font-plus-jakarta text-blue-700 leading-none">18</span>
                            <span className="text-[6.5px] sm:text-[8px] font-extrabold text-blue-600 uppercase tracking-wide">ms</span>
                          </div>
                          <div className="absolute top-1 right-1 sm:top-1.5 sm:right-1.5">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-600 inline-block animate-ping" />
                          </div>
                        </div>

                        <div className="flex flex-col items-center text-center">
                          <span className="text-[7.5px] xs:text-[8.5px] sm:text-[10px] font-medium font-dm-sans text-blue-600 flex items-center gap-0.5 sm:gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
                            CDN
                          </span>
                          <span className="text-[7px] sm:text-[8.5px] text-slate-400 font-dm-sans font-normal whitespace-nowrap hidden xs:inline">&lt;20ms SLA</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="grid grid-cols-3 gap-1 xs:gap-2 sm:gap-3 pt-1">
                    <div className="bg-slate-50/70 rounded-xl p-1 xs:p-2 sm:p-4 border border-slate-100 flex flex-col justify-between min-w-0 shadow-xs">
                      <span className="text-[8px] xs:text-[9.5px] sm:text-[11px] font-medium font-dm-sans text-slate-400 truncate">Endpoints</span>
                      <div className="flex items-baseline justify-between mt-0.5 sm:mt-1">
                        <span className="text-[13px] xs:text-[16px] sm:text-[22px] font-extrabold font-plus-jakarta text-navy tracking-tight">260+</span>
                        <span className="text-[7px] sm:text-[9px] font-medium font-dm-sans text-blue-700 bg-blue-50 px-1 sm:px-1.5 py-0.5 rounded border border-blue-100/60 hidden xs:inline-block">Live</span>
                      </div>
                      <div className="w-full h-5 sm:h-8 mt-1 flex items-center">
                        <div className="w-full bg-blue-100/60 h-1 sm:h-1.5 rounded-full overflow-hidden">
                          <motion.div
                            className="bg-blue-600 h-full rounded-full"
                            animate={{ width: ['70%', '98%', '70%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-50/70 rounded-xl p-1 xs:p-2 sm:p-4 border border-slate-100 flex flex-col justify-between min-w-0 shadow-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] xs:text-[9.5px] sm:text-[11px] font-medium font-dm-sans text-slate-400 truncate">Cache Hit</span>
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600" />
                        </span>
                      </div>
                      <div className="mt-0.5 sm:mt-1">
                        <span className="text-[13px] xs:text-[16px] sm:text-[22px] font-extrabold font-plus-jakarta text-navy tracking-tight">98.8%</span>
                      </div>
                      <div className="flex items-center gap-0.5 sm:gap-1 mt-1 sm:mt-2 text-[7px] xs:text-[8px] sm:text-[9px] font-medium font-dm-sans">
                        <span className="bg-blue-50 text-blue-700 px-1 sm:px-1.5 py-0.5 rounded font-bold">Redis</span>
                        <span className="bg-slate-200/80 text-slate-700 px-1 sm:px-1.5 py-0.5 rounded font-bold">Edge</span>
                        <span className="bg-blue-50 text-blue-700 px-1 sm:px-1.5 py-0.5 rounded font-bold hidden xs:inline">Fast</span>
                      </div>
                    </div>
                    <div className="bg-slate-50/70 rounded-xl p-1 xs:p-2 sm:p-4 border border-slate-100 flex flex-col justify-between min-w-0 shadow-xs">
                      <span className="text-[8px] xs:text-[9.5px] sm:text-[11px] font-medium font-dm-sans text-slate-400 truncate">Requests</span>
                      <div className="flex items-end justify-between mt-0.5 sm:mt-1">
                        <div className="min-w-0 flex-1">
                          <span className="text-[13px] xs:text-[16px] sm:text-[22px] font-extrabold font-plus-jakarta text-navy tracking-tight block">14.2M</span>
                          <div className="flex items-center gap-0.5 sm:gap-1 mt-0.5 text-[7.5px] xs:text-[8.5px] sm:text-[10px] font-medium font-dm-sans text-blue-600">
                            <span>↑</span>
                            <span>Zero Lag</span>
                          </div>
                        </div>
                        <div className="flex items-end gap-1 sm:gap-1.5 h-5 sm:h-8 pb-0.5 shrink-0">
                          {[30, 65, 45, 95].map((h, i) => (
                            <motion.div
                              key={i}
                              className="w-1 xs:w-1.5 sm:w-2 bg-blue-600 rounded-t-[2px]"
                              animate={{ height: [`${h * 0.7}%`, `${h}%`, `${h * 0.7}%`] }}
                              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 5: TECH TEAM (Weekly Sprint Heatmap + Segmented Squad Donut) */}
              {activeTabIndex === 5 && (
                <motion.div
                  key="tab-tech-team"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.32, ease: 'easeOut' }}
                  className="flex flex-col gap-2.5 sm:gap-4 h-full justify-between"
                >
                  <div className="grid grid-cols-12 gap-2 sm:gap-3.5 items-center">
                    <div className="col-span-5 flex flex-col justify-center">
                      <h3 className="text-[15px] xs:text-[18px] sm:text-[25px] font-extrabold font-plus-jakarta text-navy leading-[1.1] tracking-tight">
                        Elite Tech<br />
                        Squads<br />
                        Vetted
                      </h3>
                      <p className="mt-1 text-[8px] xs:text-[9.5px] sm:text-[10.5px] text-slate-400 leading-snug font-dm-sans font-normal line-clamp-2 sm:line-clamp-none">
                        Top 1% senior software engineers, architects & tech leads.
                      </p>
                      <button className="mt-1.5 sm:mt-2.5 inline-flex items-center gap-1 sm:gap-1.5 px-2 xs:px-2.5 sm:px-3.5 py-1 sm:py-1.5 bg-[#0A1628] text-white text-[8.5px] xs:text-[9.5px] sm:text-[10.5px] font-medium font-dm-sans rounded-lg hover:bg-slate-800 transition-all w-fit shadow-sm">
                        Meet leads
                        <span className="text-[9px] sm:text-[11px]">→</span>
                      </button>
                    </div>

                    {/* DIFFERENT CHART 5: Sprint Execution Activity Heatmap Grid */}
                    <div className="col-span-4 flex justify-center">
                      <div className="flex flex-col items-start gap-1 sm:gap-1.5 pt-0.5 sm:pt-1 w-full max-w-[170px]">
                        <div className="inline-flex items-center gap-1 xs:gap-1.5 px-1.5 xs:px-2.5 py-0.5 xs:py-1 rounded-md bg-blue-50 border border-blue-100/80 shadow-xs">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600" />
                          </span>
                          <span className="text-[8.5px] xs:text-[10px] font-bold font-plus-jakarta text-blue-600">Sprint 18</span>
                          <span className="text-[7.5px] xs:text-[9.5px] font-medium font-dm-sans text-blue-700/70 hidden xs:inline">Heatmap</span>
                        </div>

                        {/* GitHub-style Sprint Activity Heatmap Matrix in Blues */}
                        <div className="grid grid-cols-6 gap-0.5 sm:gap-1 p-1 sm:p-2 bg-slate-50/80 rounded-lg sm:rounded-xl border border-slate-100 my-0.5 sm:my-1 w-full">
                          {[
                            'bg-blue-200', 'bg-blue-400', 'bg-blue-600', 'bg-blue-300', 'bg-blue-500', 'bg-blue-700',
                            'bg-blue-300', 'bg-blue-500', 'bg-blue-700', 'bg-blue-400', 'bg-blue-600', 'bg-blue-300',
                            'bg-blue-400', 'bg-blue-700', 'bg-blue-500', 'bg-blue-600', 'bg-blue-700', 'bg-blue-400',
                          ].map((col, i) => (
                            <motion.div
                              key={i}
                              className={`h-2.5 xs:h-3 sm:h-4 rounded-[1.5px] sm:rounded-[3px] ${col}`}
                              animate={{ opacity: [0.7, 1, 0.7] }}
                              transition={{ duration: 2, repeat: Infinity, delay: (i % 6) * 0.15 }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* DIFFERENT RIGHT 5: Segmented Squad Donut Chart */}
                    <div className="col-span-3 flex justify-end">
                      <div className="flex flex-col items-center justify-between h-full py-0.5">
                        <div className="flex items-center gap-1 self-start">
                          <Users2 className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-blue-600" />
                          <span className="text-[9px] xs:text-[9.5px] sm:text-[11px] font-medium font-dm-sans text-slate-400 tracking-tight truncate">Squads</span>
                        </div>

                        <div className="relative w-[48px] h-[48px] xs:w-[58px] xs:h-[58px] sm:w-[72px] sm:h-[72px] flex items-center justify-center my-0.5 sm:my-1">
                          <svg viewBox="0 0 72 72" className="w-full h-full -rotate-90">
                            <circle cx="36" cy="36" r="28" fill="none" stroke="#2563EB" strokeWidth="6" strokeDasharray="176" strokeDashoffset="96" strokeLinecap="round" />
                            <circle cx="36" cy="36" r="28" fill="none" stroke="#3B82F6" strokeWidth="6" strokeDasharray="176" strokeDashoffset="120" strokeLinecap="round" transform="rotate(160 36 36)" />
                            <circle cx="36" cy="36" r="28" fill="none" stroke="#60A5FA" strokeWidth="6" strokeDasharray="176" strokeDashoffset="140" strokeLinecap="round" transform="rotate(285 36 36)" />
                          </svg>
                          <div className="absolute flex flex-col items-center">
                            <span className="text-[11px] xs:text-[12px] sm:text-[14px] font-black font-plus-jakarta text-navy leading-none">48+</span>
                            <span className="text-[6px] sm:text-[7.5px] font-bold text-slate-400 uppercase tracking-tight">Leads</span>
                          </div>
                        </div>

                        <div className="flex flex-col items-center text-center">
                          <span className="text-[7.5px] xs:text-[8.5px] sm:text-[10px] font-medium font-dm-sans text-blue-600 flex items-center gap-0.5 sm:gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block animate-pulse" />
                            Full Stack
                          </span>
                          <span className="text-[7px] sm:text-[8.5px] text-slate-400 font-dm-sans font-normal whitespace-nowrap hidden xs:inline">6 Squads</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="grid grid-cols-3 gap-1 xs:gap-2 sm:gap-3 pt-1">
                    <div className="bg-slate-50/70 rounded-xl p-1 xs:p-2 sm:p-4 border border-slate-100 flex flex-col justify-between min-w-0 shadow-xs">
                      <span className="text-[8px] xs:text-[9.5px] sm:text-[11px] font-medium font-dm-sans text-slate-400 truncate">Engineers</span>
                      <div className="flex items-baseline justify-between mt-0.5 sm:mt-1">
                        <span className="text-[13px] xs:text-[16px] sm:text-[22px] font-extrabold font-plus-jakarta text-navy tracking-tight">48+</span>
                        <span className="text-[7px] sm:text-[9px] font-medium font-dm-sans text-blue-700 bg-blue-50 px-1 sm:px-1.5 py-0.5 rounded border border-blue-100/60 hidden xs:inline-block">Top 1%</span>
                      </div>
                      <div className="w-full h-5 sm:h-8 mt-1 flex items-center">
                        <div className="w-full bg-blue-100/60 h-1 sm:h-1.5 rounded-full overflow-hidden">
                          <motion.div
                            className="bg-blue-600 h-full rounded-full"
                            animate={{ width: ['75%', '98%', '75%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-50/70 rounded-xl p-1 xs:p-2 sm:p-4 border border-slate-100 flex flex-col justify-between min-w-0 shadow-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] xs:text-[9.5px] sm:text-[11px] font-medium font-dm-sans text-slate-400 truncate">Hubs</span>
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600" />
                        </span>
                      </div>
                      <div className="mt-0.5 sm:mt-1">
                        <span className="text-[13px] xs:text-[16px] sm:text-[22px] font-extrabold font-plus-jakarta text-navy tracking-tight">6 Zones</span>
                      </div>
                      <div className="flex items-center gap-0.5 sm:gap-1 mt-1 sm:mt-2 text-[7px] xs:text-[8px] sm:text-[9px] font-medium font-dm-sans">
                        <span className="bg-blue-50 text-blue-700 px-1 sm:px-1.5 py-0.5 rounded font-bold">US</span>
                        <span className="bg-blue-50 text-cobalt px-1 sm:px-1.5 py-0.5 rounded font-bold">UK</span>
                        <span className="bg-slate-200/80 text-slate-700 px-1 sm:px-1.5 py-0.5 rounded font-bold hidden xs:inline">IN</span>
                      </div>
                    </div>
                    <div className="bg-slate-50/70 rounded-xl p-1 xs:p-2 sm:p-4 border border-slate-100 flex flex-col justify-between min-w-0 shadow-xs">
                      <span className="text-[8px] xs:text-[9.5px] sm:text-[11px] font-medium font-dm-sans text-slate-400 truncate">Client NPS</span>
                      <div className="flex items-end justify-between mt-0.5 sm:mt-1">
                        <div className="min-w-0 flex-1">
                          <span className="text-[12px] xs:text-[15px] sm:text-[20px] font-extrabold font-plus-jakarta text-navy tracking-tight block">98/100</span>
                          <div className="flex items-center gap-0.5 sm:gap-1 mt-0.5 text-[7.5px] xs:text-[8.5px] sm:text-[10px] font-medium font-dm-sans text-blue-600">
                            <span>↑</span>
                            <span className="truncate">Top Class</span>
                          </div>
                        </div>
                        <div className="flex items-end gap-1 sm:gap-1.5 h-5 sm:h-8 pb-0.5 shrink-0">
                          {[40, 70, 60, 95].map((h, i) => (
                            <motion.div
                              key={i}
                              className="w-1 xs:w-1.5 sm:w-2 bg-blue-600 rounded-t-[2px]"
                              animate={{ height: [`${h * 0.7}%`, `${h}%`, `${h * 0.7}%`] }}
                              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 6: SETTINGS (Security Inspection Gates + Verified Shield Trust Seal) */}
              {activeTabIndex === 6 && (
                <motion.div
                  key="tab-settings"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.32, ease: 'easeOut' }}
                  className="flex flex-col gap-2.5 sm:gap-4 h-full justify-between"
                >
                  <div className="grid grid-cols-12 gap-2 sm:gap-3.5 items-center">
                    <div className="col-span-5 flex flex-col justify-center">
                      <h3 className="text-[15px] xs:text-[18px] sm:text-[25px] font-extrabold font-plus-jakarta text-navy leading-[1.1] tracking-tight">
                        Enterprise<br />
                        Security &<br />
                        Governance
                      </h3>
                      <p className="mt-1 text-[8px] xs:text-[9.5px] sm:text-[10.5px] text-slate-400 leading-snug font-dm-sans font-normal line-clamp-2 sm:line-clamp-none">
                        SOC2 Type II, ISO 27001, end-to-end AES-256 data compliance.
                      </p>
                      <button className="mt-1.5 sm:mt-2.5 inline-flex items-center gap-1 sm:gap-1.5 px-2 xs:px-2.5 sm:px-3.5 py-1 sm:py-1.5 bg-[#0A1628] text-white text-[8.5px] xs:text-[9.5px] sm:text-[10.5px] font-medium font-dm-sans rounded-lg hover:bg-slate-800 transition-all w-fit shadow-sm">
                        View audit
                        <span className="text-[9px] sm:text-[11px]">→</span>
                      </button>
                    </div>

                    {/* DIFFERENT CHART 6: 3 Flowing Security Checkpoint Gates */}
                    <div className="col-span-4 flex justify-center">
                      <div className="flex flex-col items-start gap-1 sm:gap-1.5 pt-0.5 sm:pt-1 w-full max-w-[170px]">
                        <div className="inline-flex items-center gap-1 xs:gap-1.5 px-1.5 xs:px-2.5 py-0.5 xs:py-1 rounded-md bg-blue-50 border border-blue-100/80 shadow-xs">
                          <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-600" />
                          <span className="text-[8.5px] xs:text-[10px] font-bold font-plus-jakarta text-blue-600">SOC2 II</span>
                          <span className="text-[7.5px] xs:text-[9.5px] font-medium font-dm-sans text-blue-700/70 hidden xs:inline">Passed</span>
                        </div>

                        {/* Security Gates Pipeline */}
                        <div className="w-full flex items-center justify-between p-1 sm:p-2 bg-slate-50/90 rounded-lg sm:rounded-xl border border-slate-100 my-0.5 sm:my-1">
                          {[
                            { name: 'WAF', status: 'Active' },
                            { name: 'AES', status: 'Locked' },
                            { name: 'Zero', status: 'Passed' },
                          ].map((gate, i) => (
                            <div key={i} className="flex flex-col items-center gap-0.5 sm:gap-1">
                              <motion.div
                                className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 rounded sm:rounded-lg bg-blue-100/80 border border-blue-200 flex items-center justify-center text-blue-700"
                                animate={{ scale: [1, 1.08, 1] }}
                                transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.3 }}
                              >
                                <CheckCircle2 className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 text-blue-600" />
                              </motion.div>
                              <span className="text-[6px] sm:text-[7.5px] font-bold text-slate-500">{gate.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* DIFFERENT RIGHT 6: Verified Security Shield Trust Seal */}
                    <div className="col-span-3 flex justify-end">
                      <div className="flex flex-col items-center justify-between h-full py-0.5">
                        <div className="flex items-center gap-1 self-start">
                          <ShieldCheck className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-blue-600" />
                          <span className="text-[9px] xs:text-[9.5px] sm:text-[11px] font-medium font-dm-sans text-slate-400 tracking-tight truncate">Trust</span>
                        </div>

                        {/* Shield Badge Visual */}
                        <div className="relative w-[48px] h-[48px] xs:w-[58px] xs:h-[58px] sm:w-[72px] sm:h-[72px] flex items-center justify-center my-0.5 sm:my-1">
                          <motion.div
                            className="w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-2xl bg-gradient-to-tr from-blue-700 to-blue-500 flex items-center justify-center text-white shadow-md shadow-blue-500/25"
                            animate={{ rotate: [0, 2, -2, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                          >
                            <ShieldCheck className="w-4 h-4 xs:w-5 xs:h-5 sm:w-7 sm:h-7 text-white" />
                          </motion.div>
                          <motion.div
                            className="absolute inset-0 rounded-full border border-blue-400/40"
                            animate={{ scale: [1, 1.15, 1], opacity: [0.8, 0, 0.8] }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                          />
                        </div>

                        <div className="flex flex-col items-center text-center">
                          <span className="text-[7.5px] xs:text-[8.5px] sm:text-[10px] font-bold font-dm-sans text-blue-600 flex items-center gap-0.5 sm:gap-1">
                            100%
                          </span>
                          <span className="text-[7px] sm:text-[8.5px] text-slate-400 font-dm-sans font-normal whitespace-nowrap hidden xs:inline">Zero Vuln</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="grid grid-cols-3 gap-1 xs:gap-2 sm:gap-3 pt-1">
                    <div className="bg-slate-50/70 rounded-xl p-1 xs:p-2 sm:p-4 border border-slate-100 flex flex-col justify-between min-w-0 shadow-xs">
                      <span className="text-[8px] xs:text-[9.5px] sm:text-[11px] font-medium font-dm-sans text-slate-400 truncate">Encryption</span>
                      <div className="flex items-baseline justify-between mt-0.5 sm:mt-1">
                        <span className="text-[12px] xs:text-[15px] sm:text-[22px] font-extrabold font-plus-jakarta text-navy tracking-tight truncate">AES-256</span>
                        <span className="text-[7px] sm:text-[9px] font-medium font-dm-sans text-blue-700 bg-blue-50 px-1 sm:px-1.5 py-0.5 rounded border border-blue-100/60 hidden xs:inline-block">Rest</span>
                      </div>
                      <div className="w-full h-5 sm:h-8 mt-1 flex items-center">
                        <div className="w-full bg-blue-100/60 h-1 sm:h-1.5 rounded-full overflow-hidden">
                          <motion.div
                            className="bg-blue-600 h-full rounded-full"
                            animate={{ width: ['80%', '100%', '80%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-50/70 rounded-xl p-1 xs:p-2 sm:p-4 border border-slate-100 flex flex-col justify-between min-w-0 shadow-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] xs:text-[9.5px] sm:text-[11px] font-medium font-dm-sans text-slate-400 truncate">Compliance</span>
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600" />
                        </span>
                      </div>
                      <div className="mt-0.5 sm:mt-1">
                        <span className="text-[13px] xs:text-[16px] sm:text-[22px] font-extrabold font-plus-jakarta text-navy tracking-tight">Passed</span>
                      </div>
                      <div className="flex items-center gap-0.5 sm:gap-1 mt-1 sm:mt-2 text-[7px] xs:text-[8px] sm:text-[9px] font-medium font-dm-sans">
                        <span className="bg-blue-50 text-blue-700 px-1 sm:px-1.5 py-0.5 rounded font-bold">ISO</span>
                        <span className="bg-blue-50 text-cobalt px-1 sm:px-1.5 py-0.5 rounded font-bold">GDPR</span>
                      </div>
                    </div>
                    <div className="bg-slate-50/70 rounded-xl p-1 xs:p-2 sm:p-4 border border-slate-100 flex flex-col justify-between min-w-0 shadow-xs">
                      <span className="text-[8px] xs:text-[9.5px] sm:text-[11px] font-medium font-dm-sans text-slate-400 truncate">Recovery</span>
                      <div className="flex items-end justify-between mt-0.5 sm:mt-1">
                        <div className="min-w-0 flex-1">
                          <span className="text-[13px] xs:text-[16px] sm:text-[22px] font-extrabold font-plus-jakarta text-navy tracking-tight block">&lt;1m</span>
                          <div className="flex items-center gap-0.5 sm:gap-1 mt-0.5 text-[7.5px] xs:text-[8.5px] sm:text-[10px] font-medium font-dm-sans text-blue-600">
                            <span>↑</span>
                            <span>Multi-Zone</span>
                          </div>
                        </div>
                        <div className="flex items-end gap-1 sm:gap-1.5 h-5 sm:h-8 pb-0.5 shrink-0">
                          {[50, 80, 65, 100].map((h, i) => (
                            <motion.div
                              key={i}
                              className="w-1 xs:w-1.5 sm:w-2 bg-blue-600 rounded-t-[2px]"
                              animate={{ height: [`${h * 0.7}%`, `${h}%`, `${h * 0.7}%`] }}
                              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* 3D Architectural Podium Slab (Plinth) Directly Underneath Dashboard */}
      <div
        className="w-[96%] sm:w-[94%] mx-auto -mt-2.5 sm:-mt-3 relative z-0 pointer-events-none hidden sm:block"
        style={{
          transform: isMobile ? 'none' : 'rotateY(-10deg) rotateX(10deg) rotateZ(-1.8deg)',
          transformStyle: isMobile ? 'flat' : 'preserve-3d',
        }}
      >
        <div
          className="relative w-full rounded-2xl bg-gradient-to-b from-white/95 via-[#F1F5F9]/90 to-[#E2E8F0]/80 backdrop-blur-xl border border-white/95 shadow-[0_16px_36px_-10px_rgba(15,23,42,0.14)] overflow-hidden py-3 sm:py-3.5 px-6"
        >
          {/* Top highlight shine line */}
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

          {/* Front Face Engraved Text */}
          <div className="flex items-center justify-between text-slate-500 font-extrabold tracking-[0.24em] text-[9px] sm:text-[9.5px] uppercase select-none">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="text-slate-700">Build</span>
              <span className="text-[7px] text-blue-500 font-bold">•</span>
              <span className="text-slate-700">Launch</span>
              <span className="text-[7px] text-blue-500 font-bold">•</span>
              <span className="text-slate-700">Scale</span>
              <span className="text-[7px] text-blue-500 font-bold">•</span>
              <span className="text-blue-600 font-black">Together</span>
            </div>
            <div className="text-slate-400 tracking-[0.18em] text-[8.5px] sm:text-[9px] font-bold hidden sm:block">
              A FASTER TOMORROW —
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
