'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import OriginButton from './OriginButton';
import AnimatedNumber from './AnimatedNumber';
import FoldText from './FoldText';
import {
  ArrowRight,
  Check,
  Zap,
  Users,
  ShieldCheck,
} from 'lucide-react';
import { gsap, useGSAP } from '@/lib/gsap';

const steps = [
  {
    completed: true,
    title: 'Discovery Call',
    subtitle: 'Understand goals & constraints',
  },
  {
    completed: true,
    title: 'Solution & Roadmap',
    subtitle: 'Tailored to your use case',
  },
  {
    completed: true,
    title: 'Build & Iterate',
    subtitle: 'AI agents, integrations, testing',
  },
  {
    completed: false,
    title: 'Launch to Production',
    subtitle: 'Ship with confidence',
  },
];

export default function TurnIdeaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const isProcessInView = useInView(processRef, { once: true, amount: 0.25 });

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      if (glowRef.current) {
        gsap.to(glowRef.current, {
          scale: 1.25,
          opacity: 0.8,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="cta-section"
      className="relative w-full py-16 sm:py-24 bg-[#FAF8F5] text-navy overflow-hidden"
    >
      {/* Seamless Edge Melting */}
      <div className="absolute top-0 left-0 right-0 h-28 sm:h-36 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-36 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent pointer-events-none z-[1]" />

      <div className="site-container px-4 sm:px-8 lg:px-12 max-w-[1340px] mx-auto z-10 relative">
        <div
          ref={cardRef}
          className="relative rounded-[28px] sm:rounded-[32px] bg-white border border-slate-200/80 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_8px_40px_-12px_rgba(10,22,40,0.08)]"
        >
          {/* Ambient Glow in Background */}
          <div
            ref={glowRef}
            className="absolute -right-24 -top-24 w-[450px] h-[450px] bg-gradient-to-br from-blue-400/10 via-blue-300/10 to-transparent rounded-full blur-3xl pointer-events-none z-0"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            {/* LEFT: Heading & Action Details */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="flex flex-col">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-100/90 mb-5 self-start shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  <span className="text-[11px] font-mono tracking-[0.2em] font-bold text-blue-700 uppercase">
                    READY TO SHIP?
                  </span>
                </div>

                {/* Headline */}
                <h2 className="font-plus-jakarta font-extrabold text-[34px] xs:text-[44px] sm:text-[54px] lg:text-[62px] text-[#0A1628] leading-[1.08] sm:leading-[1.04] tracking-[-0.03em] mb-5">
                  <FoldText text="Turn your idea into" splitBy="word" trigger="scroll" duration={0.65} stagger={0.045} /> <br />
                  <span className="font-instrument italic font-normal text-blue-600">
                    <FoldText text="production." splitBy="word" trigger="scroll" duration={0.65} />
                  </span>
                </h2>

                {/* Subtitle */}
                <p className="text-[15px] sm:text-[16px] text-slate-500 font-dm-sans leading-relaxed mb-8 max-w-md">
                  Book a 30-minute strategy call. We&apos;ll map the fastest path from your goal to shipped software.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <OriginButton
                    href="#contact"
                    variant="primary"
                    size="md"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Book a Strategy Call
                  </OriginButton>
                  <OriginButton
                    href="#services"
                    variant="outline"
                    size="md"
                  >
                    Explore Capabilities
                  </OriginButton>
                </div>
              </div>

              {/* Three Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-200/80">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/60">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[12.5px] font-bold font-plus-jakarta text-[#0A1628]">
                      Rapid kickoff
                    </div>
                    <div className="text-[11px] text-slate-400 font-dm-sans">
                      Start in 48 hours
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/60">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[12.5px] font-bold font-plus-jakarta text-[#0A1628]">
                      Expert team
                    </div>
                    <div className="text-[11px] text-slate-400 font-dm-sans">
                      Product to production
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/60">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[12.5px] font-bold font-plus-jakarta text-[#0A1628]">
                      Real outcomes
                    </div>
                    <div className="text-[11px] text-slate-400 font-dm-sans">
                      Built for scale
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Sequential Animated Process Card */}
            <div className="lg:col-span-5 w-full flex items-center justify-center lg:justify-end" ref={processRef}>
              <div className="w-full max-w-[420px] bg-slate-50/90 rounded-[22px] border border-slate-200/80 p-6 sm:p-7 shadow-sm">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-5">
                  <span className="font-plus-jakarta font-bold text-[14.5px] text-[#0A1628]">
                    Your Idea → Production
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/70 text-[10.5px] font-semibold text-blue-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                    On track
                  </span>
                </div>

                {/* Steps with Sequential Checkmark Animations */}
                <div className="space-y-3.5">
                  {steps.map((step, idx) => {
                    const isLast = idx === steps.length - 1;
                    const stepDelay = 0.25 + idx * 0.7;
                    const lineDelay = stepDelay + 0.35;

                    return (
                      <div key={step.title} className="flex items-start gap-3.5 relative">
                        {/* Step Check / Circle */}
                        <div className="relative flex flex-col items-center shrink-0">
                          {step.completed ? (
                            <motion.div
                              initial={{ scale: 0.85, backgroundColor: '#FFFFFF', borderColor: '#CBD5E1' }}
                              animate={
                                isProcessInView
                                  ? {
                                      scale: [0.85, 1.22, 1],
                                      backgroundColor: '#2563EB',
                                      borderColor: '#2563EB',
                                      boxShadow: '0 4px 14px -2px rgba(37, 99, 235, 0.45)',
                                    }
                                  : { scale: 0.85, backgroundColor: '#FFFFFF', borderColor: '#CBD5E1' }
                              }
                              transition={{
                                duration: 0.45,
                                delay: stepDelay,
                                ease: [0.34, 1.56, 0.64, 1],
                              }}
                              className="w-6 h-6 rounded-full border-2 flex items-center justify-center shadow-xs z-10"
                            >
                              <motion.svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-3.5 h-3.5 text-white"
                              >
                                <motion.path
                                  d="M20 6L9 17L4 12"
                                  initial={{ pathLength: 0, opacity: 0 }}
                                  animate={
                                    isProcessInView
                                      ? { pathLength: 1, opacity: 1 }
                                      : { pathLength: 0, opacity: 0 }
                                  }
                                  transition={{
                                    duration: 0.35,
                                    delay: stepDelay + 0.15,
                                    ease: 'easeOut',
                                  }}
                                />
                              </motion.svg>
                            </motion.div>
                          ) : (
                            <motion.div
                              initial={{ borderColor: '#CBD5E1', backgroundColor: '#FFFFFF' }}
                              animate={
                                isProcessInView
                                  ? {
                                      borderColor: '#3B82F6',
                                      backgroundColor: 'rgba(239, 246, 255, 0.8)',
                                    }
                                  : {}
                              }
                              transition={{ duration: 0.5, delay: stepDelay }}
                              className="w-6 h-6 rounded-full border-2 bg-white flex items-center justify-center relative z-10"
                            >
                              {/* Active Pulsing Core for Launch Step */}
                              <motion.span
                                animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.6, 1, 0.6] }}
                                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                                className="w-2 h-2 rounded-full bg-blue-600"
                              />
                            </motion.div>
                          )}

                          {/* Connecting Line to Next Step */}
                          {!isLast && (
                            <div className="w-[2px] h-5 bg-slate-200 relative overflow-hidden mt-1 rounded-full">
                              <motion.div
                                initial={{ scaleY: 0 }}
                                animate={isProcessInView ? { scaleY: 1 } : { scaleY: 0 }}
                                transition={{
                                  duration: 0.35,
                                  delay: lineDelay,
                                  ease: 'easeInOut',
                                }}
                                style={{ transformOrigin: 'top' }}
                                className="w-full h-full bg-blue-600 rounded-full"
                              />
                            </div>
                          )}
                        </div>

                        {/* Step Details */}
                        <div className="pt-0.5">
                          <motion.h4
                            initial={{ opacity: 0.7 }}
                            animate={isProcessInView ? { opacity: 1 } : { opacity: 0.7 }}
                            transition={{ duration: 0.3, delay: stepDelay }}
                            className="font-plus-jakarta font-bold text-[13px] text-[#0A1628] leading-tight"
                          >
                            {step.title}
                          </motion.h4>
                          <p className="text-[11px] text-slate-400 font-dm-sans leading-snug mt-0.5">
                            {step.subtitle}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-slate-200/80">
                  <div className="text-center">
                    <span className="block font-instrument italic text-[20px] font-medium text-[#0A1628] leading-none">
                      <AnimatedNumber value={1} suffix=" wk" duration={1000} />
                    </span>
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider mt-1 block">
                      Prototype
                    </span>
                  </div>
                  <div className="text-center border-x border-slate-200/80">
                    <span className="block font-instrument italic text-[20px] font-medium text-blue-600 leading-none">
                      <AnimatedNumber value={10} suffix="d" duration={1200} />
                    </span>
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider mt-1 block">
                      Team Live
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block font-instrument italic text-[20px] font-medium text-[#0A1628] leading-none">
                      <AnimatedNumber value={100} suffix="%" duration={1600} />
                    </span>
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider mt-1 block">
                      Ownership
                    </span>
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
