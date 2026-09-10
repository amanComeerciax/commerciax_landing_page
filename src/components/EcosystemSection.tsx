'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Globe, Users, ArrowUpRight, ArrowRight } from 'lucide-react';
import RotatingGlobe from './RotatingGlobe';
import OriginButton from './OriginButton';
import AnimatedNumber from './AnimatedNumber';
import FoldText from './FoldText';
import { gsap, useGSAP } from '@/lib/gsap';

export default function EcosystemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const orbitHubRef = useRef<HTMLDivElement>(null);
  const [globeSize, setGlobeSize] = useState(300);

  useEffect(() => {
    const updateSize = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth < 400) {
        setGlobeSize(250);
      } else if (window.innerWidth < 640) {
        setGlobeSize(290);
      } else if (window.innerWidth < 1024) {
        setGlobeSize(340);
      } else if (window.innerWidth < 1280) {
        setGlobeSize(380);
      } else {
        setGlobeSize(460);
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Animate the orbit hub elements on scroll
      if (orbitHubRef.current) {
        gsap.fromTo(
          orbitHubRef.current,
          { scale: 0.92, opacity: 0.7 },
          {
            scale: 1,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: 'center center',
              scrub: 1,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden py-14 sm:py-20 lg:py-28 bg-[#FAF8F5] text-navy">
      {/* Official High-Resolution 3D Orbit & Holographic Globe Background Graphic with Seamless Edge Melt */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 72%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 72%, transparent 100%)',
        }}
      >
        <Image
          src="/back2.png"
          alt="Ecosystem Network Background"
          fill
          priority
          quality={100}
          className="object-cover object-center w-full h-full opacity-90"
        />
      </div>

      {/* Seamless Section Blending Gradients (Melts top and bottom edges) */}
      <div className="absolute top-0 left-0 right-0 h-32 sm:h-44 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-44 sm:h-64 lg:h-80 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/85 to-transparent pointer-events-none z-[1]" />

      {/* Soft Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[850px] h-[400px] sm:h-[500px] bg-gradient-to-b from-blue-100/30 via-blue-50/15 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-12 -left-20 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-blue-100/20 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-20 -right-20 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-blue-100/15 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="site-container relative px-3.5 xs:px-4 sm:px-8 lg:px-12 z-10">
        {/* ========================================================== */}
        {/* 1. HEADER BLOCK WITH EDITORIAL TYPOGRAPHY */}
        {/* ========================================================== */}
        <div className="relative max-w-[850px] mx-auto text-center mb-10 sm:mb-16 lg:mb-20">
          {/* Eyebrow Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 border border-slate-200/80 shadow-xs mb-3.5 sm:mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cobalt animate-pulse" />
            <span className="text-[9.5px] xs:text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase text-slate-600 font-plus-jakarta">
              RECOGNIZED &amp; BACKED BY
            </span>
          </motion.div>

          {/* Main Heading */}
          <h2 className="font-plus-jakarta font-extrabold text-[32px] xs:text-[40px] sm:text-[52px] lg:text-[62px] xl:text-[68px] leading-[1.08] tracking-[-0.03em] text-[#0A1628]">
            <FoldText text="Built with" splitBy="word" trigger="scroll" duration={0.65} />{' '}
            <span className="font-instrument italic font-normal text-blue-600">
              <FoldText text="trust." splitBy="word" trigger="scroll" duration={0.65} />
            </span>{' '}
            <FoldText text="Backed by the right people." splitBy="word" trigger="scroll" duration={0.65} stagger={0.045} />
          </h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 sm:mt-4 text-[13.5px] sm:text-[16px] text-slate-500 font-dm-sans max-w-[620px] mx-auto leading-relaxed px-2"
          >
            Recognized by global programs, startup ecosystems, and technology communities building what&apos;s next.
          </motion.p>
        </div>

        {/* ========================================================== */}
        {/* 2. CENTRAL 3D ORBIT HUB + 6 FLOATING GLASSMORPHIC CARDS    */}
        {/* ========================================================== */}
        <div ref={orbitHubRef} className="relative w-full max-w-[1400px] mx-auto min-h-0 lg:min-h-[740px] flex flex-col lg:flex-row items-center justify-center mb-14 sm:mb-20 lg:mb-24 select-none">

          {/* ========================================================== */}
          {/* SVG 3D ORBITAL CONNECTION NETWORK & 3D BLUE SPHERES        */}
          {/* ========================================================== */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 1400 700"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* 3D Glossy Blue Marble Radial Gradient */}
                <radialGradient id="marble3d" cx="35%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                  <stop offset="25%" stopColor="#93C5FD" />
                  <stop offset="65%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#1E3A8A" />
                </radialGradient>

                {/* Cyan Marble Radial Gradient */}
                <radialGradient id="marbleCyan3d" cx="35%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                  <stop offset="28%" stopColor="#BAE6FD" />
                  <stop offset="70%" stopColor="#0284C7" />
                  <stop offset="100%" stopColor="#0369A1" />
                </radialGradient>

                {/* Soft Sphere Drop Shadow */}
                <filter id="sphereShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="3" stdDeviation="3.5" floodColor="#1E3A8A" floodOpacity="0.30" />
                </filter>

                {/* Outer Orbit Line Gradient */}
                <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.2" />
                  <stop offset="25%" stopColor="#3B82F6" stopOpacity="0.65" />
                  <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.8" />
                  <stop offset="75%" stopColor="#3B82F6" stopOpacity="0.65" />
                  <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* 1. Large Outer Elliptical Orbit Track connecting all 6 cards */}
              <ellipse
                cx="700"
                cy="350"
                rx="530"
                ry="225"
                stroke="url(#orbitGrad)"
                strokeWidth="1.5"
                strokeDasharray="4 7"
                className="opacity-75"
              />

              {/* 2. Secondary Inner Orbit Loop surrounding the Earth Globe */}
              <ellipse
                cx="700"
                cy="350"
                rx="330"
                ry="145"
                stroke="#93C5FD"
                strokeWidth="1.2"
                strokeDasharray="3 6"
                className="opacity-60"
              />

              {/* 3. Radial Connector Arcs linking Cards directly to the Central Globe */}
              {/* Left Top (AI for Good) */}
              <motion.path
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                d="M 350 165 Q 490 235 590 285"
                stroke="#BFDBFE"
                strokeWidth="1.2"
                strokeDasharray="3 5"
              />
              {/* Left Middle (GITEX) */}
              <motion.path
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.55 }}
                d="M 270 310 L 520 330"
                stroke="#BFDBFE"
                strokeWidth="1.2"
                strokeDasharray="3 5"
              />
              {/* Left Bottom (AIFOD) */}
              <motion.path
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.85 }}
                d="M 290 545 Q 430 495 580 435"
                stroke="#BFDBFE"
                strokeWidth="1.2"
                strokeDasharray="3 5"
              />

              {/* Right Top (Microsoft for Startups) */}
              <motion.path
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                d="M 1050 165 Q 910 235 810 285"
                stroke="#BFDBFE"
                strokeWidth="1.2"
                strokeDasharray="3 5"
              />
              {/* Right Middle (Startup India) */}
              <motion.path
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                d="M 1130 310 L 880 330"
                stroke="#BFDBFE"
                strokeWidth="1.2"
                strokeDasharray="3 5"
              />
              {/* Right Bottom (Function1) */}
              <motion.path
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
                d="M 1110 545 Q 970 495 820 435"
                stroke="#BFDBFE"
                strokeWidth="1.2"
                strokeDasharray="3 5"
              />

              {/* 4. Minimal Accent 3D Blue Sphere Marbles along the Orbit Loop */}
              <circle cx="700" cy="125" r="7" fill="url(#marble3d)" filter="url(#sphereShadow)" />
              <circle cx="170" cy="290" r="7" fill="url(#marbleCyan3d)" filter="url(#sphereShadow)" />
              <circle cx="1230" cy="290" r="7" fill="url(#marbleCyan3d)" filter="url(#sphereShadow)" />
              <circle cx="700" cy="575" r="7" fill="url(#marble3d)" filter="url(#sphereShadow)" />
            </svg>
          </div>

          {/* ========================================================== */}
          {/* HANDWRITTEN ANNOTATIONS (FROM REFERENCE DESIGN)            */}
          {/* ========================================================== */}
          {/* Left Annotation (Slides in from Left with Arrow Draw) */}
          <motion.div
            initial={{ opacity: 0, x: -70, rotate: -12, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, rotate: -6, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[-2%] left-[1.5%] xl:left-[3%] hidden lg:flex flex-col items-start pointer-events-none select-none z-15"
          >
            <span className="font-handwriting text-[#2563EB] text-[22px] xl:text-[25px] font-bold leading-[1.05] drop-shadow-xs">
              Global<br />
              opportunities.<br />
              Real impact.
            </span>
            <svg className="w-14 h-16 text-blue-500 ml-8 -mt-1" viewBox="0 0 50 60" fill="none">
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.45, ease: 'easeInOut' }}
                d="M 12 6 C 8 26, 22 46, 40 50"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.85, ease: 'easeInOut' }}
                d="M 30 47 L 41 51 L 39 39"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          {/* Right Annotation (Slides in from Right with Underline Draw) */}
          <motion.div
            initial={{ opacity: 0, x: 70, rotate: 10, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, rotate: 3, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.75, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[-2%] right-[1.5%] xl:right-[3%] hidden lg:flex flex-col items-start pointer-events-none select-none z-15"
          >
            <span className="font-handwriting text-slate-500 text-[19px] xl:text-[21px] font-medium leading-[1.1]">
              A stronger<br />
              ecosystem for<br />
              a brighter tomorrow.
            </span>
            <svg className="w-28 h-3.5 text-slate-400 mt-1" viewBox="0 0 110 14" fill="none">
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6, ease: 'easeInOut' }}
                d="M 5 5 Q 55 2 105 6"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.75, ease: 'easeInOut' }}
                d="M 15 10 Q 60 7 95 11"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

          {/* Orbiting Label Nodes */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block z-10">
            {/* "Ideas" Node */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute top-[26%] left-[32%] flex flex-col items-center"
            >
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-white/95 via-sky-200/70 to-blue-400/50 backdrop-blur-md shadow-[0_4px_12px_rgba(37,99,235,0.22)] border border-white/80 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cobalt/60" />
              </div>
              <span className="text-[11px] font-semibold font-dm-sans text-slate-600 mt-1">
                Ideas
              </span>
            </motion.div>

            {/* "Programs" Node */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute top-[52%] left-[31%] flex items-center gap-1.5"
            >
              <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-sky-300 via-blue-600 to-blue-900 shadow-[0_2px_6px_rgba(29,78,216,0.45)]" />
              <span className="text-[11px] font-semibold font-dm-sans text-slate-600">
                Programs
              </span>
            </motion.div>

            {/* "People" Node */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute top-[26%] right-[32%] flex flex-col items-center"
            >
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-white/95 via-sky-200/70 to-blue-400/50 backdrop-blur-md shadow-[0_4px_12px_rgba(37,99,235,0.22)] border border-white/80 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cobalt/60" />
              </div>
              <span className="text-[11px] font-semibold font-dm-sans text-slate-600 mt-1">
                People
              </span>
            </motion.div>

            {/* "Global Impact" Node */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute top-[52%] right-[30%] flex items-center gap-1.5"
            >
              <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-sky-300 via-blue-600 to-blue-900 shadow-[0_2px_6px_rgba(29,78,216,0.45)]" />
              <span className="text-[11px] font-semibold font-dm-sans text-slate-600">
                Global Impact
              </span>
            </motion.div>

            {/* Outer Metric Badge (Far Left: 50+ Countries) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.95 }}
              className="absolute left-[2%] xl:left-[3%] top-[55%] flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-cobalt shadow-[0_0_8px_rgba(37,99,235,0.6)] animate-pulse" />
              <div className="flex flex-col">
                <span className="text-[15px] font-extrabold font-plus-jakarta text-navy leading-none">
                  <AnimatedNumber value={50} suffix="+" duration={1600} />
                </span>
                <span className="text-[11px] text-slate-400 font-dm-sans mt-0.5">Countries</span>
              </div>
            </motion.div>

            {/* Outer Metric Badge (Far Right: 1000+ Builders) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 1.05 }}
              className="absolute right-[2%] xl:right-[3%] top-[55%] flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-cobalt shadow-[0_0_8px_rgba(37,99,235,0.6)] animate-pulse" />
              <div className="flex flex-col text-left">
                <span className="text-[15px] font-extrabold font-plus-jakarta text-navy leading-none">
                  <AnimatedNumber value={1000} suffix="+" duration={1800} />
                </span>
                <span className="text-[11px] text-slate-400 font-dm-sans mt-0.5">Builders</span>
              </div>
            </motion.div>
          </div>

          {/* ========================================================== */}
          {/* CENTRAL 3D ROTATING BLUE EARTH GLOBE & COMMERCIAX EMBLEM   */}
          {/* ========================================================== */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-20 flex flex-col items-center justify-center my-4 sm:my-6 lg:my-0 shrink-0"
          >
            {/* The 3D Rotating Blue Earth Ball */}
            <div className="relative flex items-center justify-center">
              <RotatingGlobe size={globeSize} />

              {/* Concentric Outer Frosted Glass Halo Ring */}
              <div
                style={{
                  width: `${globeSize * 0.58}px`,
                  height: `${globeSize * 0.58}px`,
                }}
                className="absolute z-15 rounded-full bg-white/25 backdrop-blur-sm border border-white/60 pointer-events-none shadow-inner transition-all duration-300"
              />

              {/* Central Pure White Glassmorphic COMMERCIAX Emblem */}
              <div
                style={{
                  width: `${globeSize * 0.44}px`,
                  height: `${globeSize * 0.44}px`,
                }}
                className="absolute z-20 rounded-full bg-white/95 backdrop-blur-md shadow-[0_20px_50px_rgba(37,99,235,0.12),0_4px_16px_rgba(0,0,0,0.03)] border border-white flex flex-col items-center justify-center p-2 sm:p-4 text-center transition-all duration-300"
              >
                {/* Official Commerciax Logo Image */}
                <div className="relative flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Commerciax"
                    width={180}
                    height={60}
                    className="w-[85px] xs:w-[105px] sm:w-[130px] lg:w-[150px] h-auto object-contain"
                    priority
                  />
                </div>

                {/* Spaced ECOSYSTEM Subtitle */}
                <span className="text-[7px] xs:text-[8.5px] sm:text-[9.5px] lg:text-[10.5px] font-semibold tracking-[0.28em] sm:tracking-[0.32em] text-slate-400 uppercase mt-1 sm:mt-1.5">
                  ECOSYSTEM
                </span>
              </div>
            </div>

            {/* Bottom Capsule Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-2.5 sm:mt-3 px-3.5 py-1 sm:px-4 sm:py-1.5 bg-white/95 backdrop-blur-md rounded-full border border-slate-200/90 shadow-sm flex items-center gap-2 z-20"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cobalt animate-pulse" />
              <span className="text-[10.5px] sm:text-[12px] font-semibold font-dm-sans text-slate-700">
                6 global programs · 1 ecosystem
              </span>
            </motion.div>
          </motion.div>

          {/* ========================================================== */}
          {/* 6 FLOATING GLASSMORPHIC PARTNER CARDS (STAGGERED SCROLL)   */}
          {/* ========================================================== */}
          
          {/* Desktop/Tablet Positioning (Slides in one-by-one on scroll) */}
          <div className="absolute inset-0 hidden lg:block pointer-events-none z-20">
            {/* 1. TOP-LEFT: AI for Good (Enters 1st from Left) */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[12%] left-[1%] xl:left-[6%] 2xl:left-[9%] pointer-events-auto"
              style={{ transform: 'rotate(-2deg)' }}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
                className="group bg-white/95 hover:bg-white backdrop-blur-md rounded-[20px] px-3.5 py-3 xl:px-4.5 xl:py-3.5 border border-white/95 shadow-[0_14px_34px_-6px_rgba(20,50,90,0.07),0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_42px_-6px_rgba(37,99,235,0.16)] hover:-translate-y-1 hover:rotate-0 transition-all duration-300 w-[245px] xl:w-[310px] flex items-center justify-between gap-3 cursor-pointer"
              >
                <div className="flex items-center gap-2.5 xl:gap-3 min-w-0 flex-1">
                  <div className="shrink-0 flex items-center justify-center w-7 h-7 xl:w-8 xl:h-8">
                    <svg className="w-6 h-6 xl:w-7 xl:h-7 text-navy drop-shadow-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <rect x="3.5" y="3.5" width="17" height="17" rx="2" transform="rotate(45 12 12)" />
                      <circle cx="12" cy="12" r="2.8" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[13.5px] xl:text-[14.5px] font-bold font-plus-jakarta text-navy group-hover:text-[#2563EB] transition-colors tracking-tight leading-tight">
                      AI for Good
                    </h4>
                    <p className="text-[10.5px] xl:text-[11.5px] text-[#64748B] font-dm-sans leading-snug mt-0.5 truncate xl:whitespace-normal">
                      Solving global challenges with AI.
                    </p>
                  </div>
                </div>
                <div className="w-6 h-6 xl:w-7 xl:h-7 rounded-full bg-[#EFF6FF] group-hover:bg-[#DBEAFE] flex items-center justify-center text-[#2563EB] shrink-0 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            </motion.div>

            {/* 4. TOP-RIGHT: Microsoft for Startups (Enters 2nd from Right) */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.75, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[12%] right-[1%] xl:right-[6%] 2xl:right-[9%] pointer-events-auto"
              style={{ transform: 'rotate(1.8deg)' }}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1.0 }}
                className="group bg-white/95 hover:bg-white backdrop-blur-md rounded-[20px] px-3.5 py-3 xl:px-4.5 xl:py-3.5 border border-white/95 shadow-[0_14px_34px_-6px_rgba(20,50,90,0.07),0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_42px_-6px_rgba(37,99,235,0.16)] hover:-translate-y-1 hover:rotate-0 transition-all duration-300 w-[250px] xl:w-[315px] flex items-center justify-between gap-3 cursor-pointer"
              >
                <div className="flex items-center gap-2.5 xl:gap-3 min-w-0 flex-1">
                  <div className="grid grid-cols-2 gap-1 w-5 h-5 xl:w-6 xl:h-6 shrink-0">
                    <div className="bg-[#F25022] rounded-[1.5px]" />
                    <div className="bg-[#7FBA00] rounded-[1.5px]" />
                    <div className="bg-[#00A4EF] rounded-[1.5px]" />
                    <div className="bg-[#FFB900] rounded-[1.5px]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[13.5px] xl:text-[14.5px] font-bold font-plus-jakarta text-navy group-hover:text-[#2563EB] transition-colors tracking-tight leading-tight">
                      Microsoft for Startups
                    </h4>
                    <p className="text-[10.5px] xl:text-[11.5px] text-[#64748B] font-dm-sans leading-snug mt-0.5 truncate xl:whitespace-normal">
                      Build, scale and go further with Microsoft.
                    </p>
                  </div>
                </div>
                <div className="w-6 h-6 xl:w-7 xl:h-7 rounded-full bg-[#EFF6FF] group-hover:bg-[#DBEAFE] flex items-center justify-center text-[#2563EB] shrink-0 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            </motion.div>

            {/* 2. MID-LEFT: GITEX GLOBAL (Enters 3rd from Left) */}
            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.75, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[40%] left-[0%] xl:left-[1.5%] 2xl:left-[3.5%] pointer-events-auto"
              style={{ transform: 'rotate(1.5deg)' }}
            >
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
                className="group bg-white/95 hover:bg-white backdrop-blur-md rounded-[20px] px-3.5 py-3 xl:px-4.5 xl:py-3.5 border border-white/95 shadow-[0_14px_34px_-6px_rgba(20,50,90,0.07),0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_42px_-6px_rgba(37,99,235,0.16)] hover:-translate-y-1 hover:rotate-0 transition-all duration-300 w-[235px] xl:w-[290px] flex flex-col justify-between cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[15px] xl:text-[17px] font-extrabold font-plus-jakarta tracking-tight text-navy leading-none">
                      GITEX
                    </span>
                    <span className="text-[8.5px] xl:text-[9.5px] font-bold tracking-[0.24em] text-slate-400 uppercase">
                      GLOBAL
                    </span>
                  </div>
                  <div className="w-6 h-6 xl:w-7 xl:h-7 rounded-full bg-[#EFF6FF] group-hover:bg-[#DBEAFE] flex items-center justify-center text-[#2563EB] shrink-0 transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
                <p className="text-[10.5px] xl:text-[11.5px] text-[#64748B] font-dm-sans leading-snug mt-1.5">
                  A global stage for innovation.
                </p>
              </motion.div>
            </motion.div>

            {/* 5. MID-RIGHT: Startup India (Enters 4th from Right) */}
            <motion.div
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.75, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[40%] right-[0%] xl:right-[1.5%] 2xl:right-[3.5%] pointer-events-auto"
              style={{ transform: 'rotate(-1.5deg)' }}
            >
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                className="group bg-white/95 hover:bg-white backdrop-blur-md rounded-[20px] px-3.5 py-3 xl:px-4.5 xl:py-3.5 border border-white/95 shadow-[0_14px_34px_-6px_rgba(20,50,90,0.07),0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_24px_48px_-8px_rgba(37,99,235,0.16)] hover:-translate-y-1 hover:rotate-0 transition-all duration-300 w-[240px] xl:w-[300px] flex items-center justify-between gap-3 cursor-pointer"
              >
                <div className="flex items-center gap-2.5 xl:gap-3 min-w-0 flex-1">
                  <div className="flex flex-col justify-center gap-[2.5px] shrink-0 w-5 xl:w-6">
                    <div className="w-full h-[3.5px] xl:h-[4px] bg-[#FF7700] rounded-full" />
                    <div className="w-full h-[3.5px] xl:h-[4px] bg-[#00D084] rounded-full relative flex items-center justify-center">
                      <div className="w-[4px] h-[4px] xl:w-[5px] xl:h-[5px] rounded-full bg-[#1E3A8A] absolute" />
                    </div>
                    <div className="w-full h-[3.5px] xl:h-[4px] bg-[#00A86B] rounded-full" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[13.5px] xl:text-[14.5px] font-bold font-plus-jakarta text-navy group-hover:text-[#2563EB] transition-colors tracking-tight leading-tight">
                      Startup India
                    </h4>
                    <p className="text-[10.5px] xl:text-[11.5px] text-[#64748B] font-dm-sans leading-snug mt-0.5 truncate xl:whitespace-normal">
                      Powering India&apos;s startup ecosystem.
                    </p>
                  </div>
                </div>
                <div className="w-6 h-6 xl:w-7 xl:h-7 rounded-full bg-[#EFF6FF] group-hover:bg-[#DBEAFE] flex items-center justify-center text-[#2563EB] shrink-0 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            </motion.div>

            {/* 3. BOTTOM-LEFT: AIFOD (Enters 5th from Left) */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.75, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[68%] left-[1%] xl:left-[3.5%] 2xl:left-[5%] pointer-events-auto"
              style={{ transform: 'rotate(-2deg)' }}
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.3 }}
                className="group bg-white/95 hover:bg-white backdrop-blur-md rounded-[20px] px-3.5 py-3 xl:px-4.5 xl:py-3.5 border border-white/95 shadow-[0_14px_34px_-6px_rgba(20,50,90,0.07),0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_42px_-6px_rgba(37,99,235,0.16)] hover:-translate-y-1 hover:rotate-0 transition-all duration-300 w-[245px] xl:w-[310px] flex items-center justify-between gap-3 cursor-pointer"
              >
                <div className="flex items-center gap-2.5 xl:gap-3 min-w-0 flex-1">
                  <div className="shrink-0 flex items-center justify-center w-7 h-7 xl:w-8 xl:h-8">
                    <Globe className="w-6 h-6 xl:w-7 xl:h-7 text-[#2563EB] stroke-[1.8]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[13.5px] xl:text-[14.5px] font-bold font-plus-jakarta text-navy group-hover:text-[#2563EB] transition-colors tracking-tight leading-tight">
                      AIFOD
                    </h4>
                    <p className="text-[10.5px] xl:text-[11.5px] text-[#64748B] font-dm-sans leading-snug mt-0.5 truncate xl:whitespace-normal">
                      Advancing inclusive and ethical development.
                    </p>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#EFF6FF] group-hover:bg-[#DBEAFE] flex items-center justify-center text-[#2563EB] shrink-0 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            </motion.div>

            {/* 6. BOTTOM-RIGHT: Function1 (Enters 6th from Right) */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.75, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[68%] right-[1%] xl:right-[3.5%] 2xl:right-[5%] pointer-events-auto"
              style={{ transform: 'rotate(2deg)' }}
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
                className="group bg-white/95 hover:bg-white backdrop-blur-md rounded-[20px] px-3.5 py-3 xl:px-4.5 xl:py-3.5 border border-white/95 shadow-[0_14px_34px_-6px_rgba(20,50,90,0.07),0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_42px_-6px_rgba(37,99,235,0.16)] hover:-translate-y-1 hover:rotate-0 transition-all duration-300 w-[240px] xl:w-[295px] flex items-center justify-between gap-3 cursor-pointer"
              >
                <div className="flex items-center gap-2.5 xl:gap-3 min-w-0 flex-1">
                  <div className="flex items-end gap-1.5 h-4.5 xl:h-5 shrink-0 px-1">
                    <div className="w-[3px] xl:w-[3.5px] h-3 xl:h-3.5 bg-navy rounded-full" />
                    <div className="w-[3px] xl:w-[3.5px] h-4.5 xl:h-5 bg-navy rounded-full" />
                    <div className="w-[3px] xl:w-[3.5px] h-2 xl:h-2.5 bg-navy rounded-full" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[13.5px] xl:text-[14.5px] font-bold font-plus-jakarta text-navy group-hover:text-[#2563EB] transition-colors tracking-tight leading-tight">
                      Function1
                    </h4>
                    <p className="text-[10.5px] xl:text-[11.5px] text-[#64748B] font-dm-sans leading-snug mt-0.5 truncate xl:whitespace-normal">
                      Investing in what&apos;s next.
                    </p>
                  </div>
                </div>
                <div className="w-6 h-6 xl:w-7 xl:h-7 rounded-full bg-[#EFF6FF] group-hover:bg-[#DBEAFE] flex items-center justify-center text-[#2563EB] shrink-0 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile / Tablet Responsive Grid Fallback */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 w-full max-w-[640px] mx-auto mt-6 sm:mt-8 lg:hidden z-20">
            {[
              {
                title: 'AI for Good',
                desc: 'Solving global challenges with AI.',
                icon: (
                  <div className="shrink-0 flex items-center justify-center w-7 h-7">
                    <svg className="w-6 h-6 text-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <rect x="3.5" y="3.5" width="17" height="17" rx="2" transform="rotate(45 12 12)" />
                      <circle cx="12" cy="12" r="2.8" fill="currentColor" />
                    </svg>
                  </div>
                ),
              },
              {
                title: 'Microsoft for Startups',
                desc: 'Build, scale and go further with Microsoft.',
                icon: (
                  <div className="grid grid-cols-2 gap-1 w-5 h-5 shrink-0">
                    <div className="bg-[#F25022] rounded-[1px]" />
                    <div className="bg-[#7FBA00] rounded-[1px]" />
                    <div className="bg-[#00A4EF] rounded-[1px]" />
                    <div className="bg-[#FFB900] rounded-[1px]" />
                  </div>
                ),
              },
              {
                title: 'GITEX GLOBAL',
                desc: 'A global stage for innovation.',
                isGitex: true,
              },
              {
                title: 'Startup India',
                desc: "Powering India's startup ecosystem.",
                icon: (
                  <div className="flex flex-col justify-center gap-[2.5px] shrink-0 w-5">
                    <div className="w-5 h-[3.5px] bg-[#FF7700] rounded-full" />
                    <div className="w-5 h-[3.5px] bg-[#00D084] rounded-full relative flex items-center justify-center">
                      <div className="w-[4px] h-[4px] rounded-full bg-[#1E3A8A] absolute" />
                    </div>
                    <div className="w-5 h-[3.5px] bg-[#00A86B] rounded-full" />
                  </div>
                ),
              },
              {
                title: 'AIFOD',
                desc: 'Advancing inclusive and ethical development.',
                icon: (
                  <div className="shrink-0 flex items-center justify-center w-7 h-7">
                    <Globe className="w-6 h-6 text-[#2563EB] stroke-[1.8]" />
                  </div>
                ),
              },
              {
                title: 'Function1',
                desc: "Investing in what's next.",
                icon: (
                  <div className="flex items-end gap-1 h-4 shrink-0 px-1">
                    <div className="w-1 h-3 bg-navy rounded-full" />
                    <div className="w-1 h-4 bg-navy rounded-full" />
                    <div className="w-1 h-2 bg-navy rounded-full" />
                  </div>
                ),
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/95 backdrop-blur-md rounded-[18px] sm:rounded-[20px] px-3.5 py-3 sm:px-4.5 sm:py-3.5 border border-white/95 shadow-[0_10px_28px_rgba(20,50,90,0.06)] flex items-center justify-between gap-2.5 sm:gap-3 cursor-pointer hover:shadow-md transition-shadow"
              >
                {card.isGitex ? (
                  <div className="flex flex-col justify-between w-full">
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[15px] sm:text-[16px] font-extrabold font-plus-jakarta tracking-tight text-navy leading-none">
                          GITEX
                        </span>
                        <span className="text-[8.5px] sm:text-[9px] font-bold tracking-[0.24em] text-slate-400 uppercase">
                          GLOBAL
                        </span>
                      </div>
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#2563EB] shrink-0">
                        <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
                      </div>
                    </div>
                    <p className="text-[11px] sm:text-[11.5px] text-[#64748B] font-dm-sans leading-tight mt-1">
                      {card.desc}
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                      {card.icon}
                      <div className="min-w-0 flex-1">
                        <h4 className="text-[13.5px] sm:text-[14px] font-bold font-plus-jakarta text-navy tracking-tight leading-tight">
                          {card.title}
                        </h4>
                        <p className="text-[10.5px] sm:text-[11.5px] text-[#64748B] font-dm-sans leading-snug mt-0.5 truncate">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#2563EB] shrink-0">
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================== */}
        {/* 3. BOTTOM DARK HIGHLIGHT BANNER                            */}
        {/* ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="relative w-full rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#070E1A] via-[#0A1628] to-[#0A1B33] border border-white/10 p-5 sm:p-8 lg:p-10 shadow-2xl overflow-hidden"
        >
          {/* Ambient Lighting Gradient Inside Card */}
          <div className="absolute top-0 right-1/4 w-[350px] h-[200px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-[300px] h-[180px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-6">
            {/* Left Headline */}
            <div className="flex flex-col text-center lg:text-left max-w-[360px] shrink-0">
              <span className="text-[9.5px] sm:text-[10.5px] font-extrabold font-plus-jakarta uppercase tracking-[0.22em] text-slate-400 mb-1.5 sm:mb-2">
                A STRONGER TOMORROW
              </span>
              <h3 className="font-plus-jakarta text-[22px] xs:text-[26px] sm:text-[30px] lg:text-[34px] font-extrabold leading-[1.1] sm:leading-[1.08] text-white">
                Recognized<br className="hidden xs:inline" />{' '}
                <span className="font-instrument italic font-normal text-blue-400">beyond</span> the product.
              </h3>
            </div>

            {/* Vertical Divider (Desktop) */}
            <div className="hidden lg:block w-px h-16 bg-white/10" />

            {/* Middle 3 Metric Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-8 xl:gap-12 text-white">
              {/* Stat 1 */}
              <div className="flex items-center gap-2.5 sm:gap-3.5">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-500 shrink-0">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[18px] sm:text-[22px] font-extrabold font-plus-jakarta text-white leading-none">
                    6+
                  </span>
                  <span className="text-[10.5px] sm:text-[11.5px] text-slate-400 font-dm-sans font-medium mt-0.5 sm:mt-1">
                    Programs
                  </span>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-2.5 sm:gap-3.5">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-500 shrink-0">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[18px] sm:text-[22px] font-extrabold font-plus-jakarta text-white leading-none">
                    Global
                  </span>
                  <span className="text-[10.5px] sm:text-[11.5px] text-slate-400 font-dm-sans font-medium mt-0.5 sm:mt-1">
                    Reach
                  </span>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-2.5 sm:gap-3.5">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-500 shrink-0">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[14px] sm:text-[17px] font-extrabold font-plus-jakarta text-white leading-tight">
                    Startup &amp;<br className="hidden sm:inline" />Enterprise
                  </span>
                  <span className="text-[10.5px] sm:text-[11.5px] text-slate-400 font-dm-sans font-medium mt-0.5">
                    Support
                  </span>
                </div>
              </div>
            </div>

            {/* Right Action Button with Origin Pro Effect */}
            <div className="shrink-0 pt-1 lg:pt-0 w-full sm:w-auto flex justify-center">
              <OriginButton
                href="#products"
                variant="white"
                size="md"
                className="w-full sm:w-auto text-center"
                icon={<ArrowRight className="w-4 h-4 text-navy group-hover:text-white" />}
              >
                Explore our ecosystem
              </OriginButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
