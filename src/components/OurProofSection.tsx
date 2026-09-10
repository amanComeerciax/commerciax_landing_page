'use client';

import { motion } from 'framer-motion';
import OriginButton from './OriginButton';
import AnimatedNumber from './AnimatedNumber';
import FoldText from './FoldText';
import {
  Clock,
  Users,
  Layers,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

const proofCards = [
  {
    icon: Clock,
    title: 'Outcomes, Not Hours',
    description:
      'Fixed weekly outcomes eliminate planning drag and billable-hour friction.',
    numValue: 100,
    suffix: '%',
    statLabel: 'OUTCOME FOCUSED',
  },
  {
    icon: Users,
    title: 'AI-Native Engineering Team',
    description:
      'Senior engineers trained to ship real systems — not experiments.',
    numValue: 7,
    suffix: '+ yrs',
    statLabel: 'AVG. EXPERIENCE',
  },
  {
    icon: Layers,
    title: 'Internal Agent System',
    description:
      'AI agents accelerate specs, code, testing, and deployment in parallel.',
    numValue: 24,
    suffix: '/7',
    statLabel: 'BUILD · TEST · DEPLOY',
  },
  {
    icon: ShieldCheck,
    title: 'Built for Production',
    description:
      'Enterprise constraints are addressed early, not after "success."',
    numValue: 99.99,
    suffix: '%',
    decimals: 2,
    statLabel: 'PRODUCTION READY',
  },
];

export default function OurProofSection() {
  return (
    <section
      id="proof"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#FAF8F5] text-navy overflow-hidden"
    >
      {/* Seamless Edge Melting Gradients */}
      <div className="absolute top-0 left-0 right-0 h-32 sm:h-44 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-44 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent pointer-events-none z-[1]" />

      {/* Background Soft Glows */}
      <div className="absolute top-12 right-0 w-[550px] h-[550px] bg-gradient-to-b from-blue-100/35 via-blue-50/20 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-blue-100/25 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="site-container relative px-4 sm:px-8 lg:px-12 max-w-[1340px] mx-auto z-10">
        {/* ========================================================== */}
        {/* CENTERED EDITORIAL HEADER                                  */}
        {/* ========================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200/80 shadow-xs mb-3.5 sm:mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.2em] font-bold text-slate-700 uppercase">
              OUR PROOF
            </span>
          </div>

          {/* Main Editorial Headline */}
          <h2 className="font-plus-jakarta font-extrabold text-[36px] sm:text-[48px] lg:text-[58px] text-[#0A1628] leading-[1.08] tracking-[-0.03em] mb-4">
            <FoldText text="We Don’t Just Claim." splitBy="word" trigger="scroll" duration={0.65} stagger={0.045} />{' '}
            <span className="font-instrument italic font-normal text-blue-600">
              <FoldText text="We Prove." splitBy="word" trigger="scroll" duration={0.65} stagger={0.045} />
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-[14.5px] sm:text-[16px] text-slate-600 font-dm-sans leading-relaxed max-w-xl mx-auto">
            Progress accelerates when outcomes are fixed, systems are built weekly, and production requirements are handled early — not as an afterthought.
          </p>
        </div>

        {/* ========================================================== */}
        {/* 4 PROOF CARDS GRID (2x2 GRID)                              */}
        {/* ========================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-[1100px] mx-auto">
          {proofCards.map((card) => {
            const IconComp = card.icon;
            return (
              <div
                key={card.title}
                className="group bg-white/85 hover:bg-white rounded-2xl sm:rounded-[22px] p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between gap-5 cursor-pointer"
              >
                {/* Top: Icon Badge & Content */}
                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Icon Badge */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#EEF4FF] border border-blue-200/80 flex items-center justify-center text-blue-600 shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    <IconComp className="w-6 h-6 stroke-[1.8] text-blue-600" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-instrument italic text-[22px] sm:text-[24px] font-normal text-[#0A1628] leading-tight group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[13px] text-slate-600 font-dm-sans leading-relaxed mt-1.5">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Bottom: Stat Metric & Label */}
                <div className="flex items-baseline justify-between border-t border-slate-100 pt-3.5 mt-2">
                  <div className="text-[9.5px] font-mono tracking-[0.16em] text-slate-500 uppercase">
                    {card.statLabel}
                  </div>
                  <div className="font-instrument italic text-[30px] sm:text-[36px] font-normal text-[#0A1628] leading-none tracking-tight group-hover:text-blue-600 transition-colors">
                    <AnimatedNumber
                      value={card.numValue}
                      suffix={card.suffix}
                      decimals={card.decimals || 0}
                      duration={1600}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-10 sm:mt-12 flex items-center justify-center">
          <OriginButton
            href="#how-we-work"
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            See how we work
          </OriginButton>
        </div>
      </div>
    </section>
  );
}
