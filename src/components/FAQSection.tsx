'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import OriginButton from './OriginButton';
import FoldText from './FoldText';

const faqs = [
  {
    id: '01',
    question: 'How do you define a "Sprint"?',
    answer:
      'A Sprint is a fixed weekly outcome — a production-ready module, integration, or agent. Week one ships a working prototype; every following week compounds with deployed modules under evals and SLAs.',
  },
  {
    id: '02',
    question: 'What tech stack do you support?',
    answer:
      'We build full-stack across modern Next.js, React, Node, Python, PyTorch, LangChain, PostgreSQL, and enterprise cloud infrastructures (AWS, GCP, Azure, Cloudflare) tailored to your existing architecture.',
  },
  {
    id: '03',
    question: 'How does payment work?',
    answer:
      'We operate on simple, predictable weekly sprint pricing or milestone-based outcomes. No surprise fees, no billable-hour creep — you pay for delivered, tested production software.',
  },
  {
    id: '04',
    question: 'How is CommerciaX different from a traditional agency?',
    answer:
      'Traditional agencies bill hours and move slowly. We are AI-native engineering operators with battle-tested playbooks, our own SaaS products, and autonomous internal agent pipelines that ship 10x faster.',
  },
  {
    id: '05',
    question: 'Can CommerciaX integrate with existing enterprise systems securely?',
    answer:
      'Yes. All architectures are built SOC2-compliant, GDPR-ready, and enterprise-secured with zero-trust credentials, VPC peering, and customized data handling for your internal infrastructure.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#FAF8F5] text-navy overflow-hidden"
    >
      {/* Seamless Edge Melting Gradients */}
      <div className="absolute top-0 left-0 right-0 h-32 sm:h-44 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-44 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent pointer-events-none z-[1]" />

      {/* Background Soft Lighting Glows */}
      <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-gradient-to-b from-blue-100/35 via-blue-50/20 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
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
              FAQ
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="font-plus-jakarta font-extrabold text-[32px] xs:text-[40px] sm:text-[50px] lg:text-[58px] text-[#0A1628] leading-[1.08] tracking-[-0.03em] mb-4">
            <FoldText text="Questions?" splitBy="word" trigger="scroll" duration={0.65} />{' '}
            <span className="font-instrument italic font-normal text-blue-600">
              <FoldText text="We’ve got you" splitBy="word" trigger="scroll" duration={0.65} stagger={0.045} />
            </span>{' '}
            <FoldText text="covered." splitBy="word" trigger="scroll" duration={0.65} />
          </h2>

          {/* Subtitle */}
          <p className="text-[14.5px] sm:text-[16px] text-slate-600 font-dm-sans max-w-xl mx-auto leading-relaxed">
            Everything you need to know about how CommerciaX works, what we build, and how we deliver.
          </p>
        </div>

        {/* ========================================================== */}
        {/* CENTERED INTERACTIVE ACCORDION CARDS                       */}
        {/* ========================================================== */}
        <div className="max-w-3xl mx-auto flex flex-col gap-3.5 sm:gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className={`transition-all duration-300 rounded-2xl sm:rounded-[22px] overflow-hidden ${
                  isOpen
                    ? 'bg-white border-2 border-blue-400/90 shadow-[0_12px_36px_-8px_rgba(37,99,235,0.09)] p-5 sm:p-6'
                    : 'bg-white/85 hover:bg-white border border-slate-200/80 hover:border-slate-300 p-5 sm:p-6 shadow-xs hover:shadow-md cursor-pointer'
                }`}
                onClick={() => !isOpen && toggleFAQ(idx)}
              >
                {/* Top Bar: Number Badge + Question + Toggle Icon */}
                <div
                  className="flex items-center justify-between gap-4 cursor-pointer select-none"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFAQ(idx);
                  }}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 flex-1">
                    {/* Number Pill Badge */}
                    <span className="shrink-0 px-2.5 py-1 rounded-xl bg-slate-50 border border-slate-200/80 font-instrument italic text-[13px] sm:text-[14px] text-slate-500">
                      {faq.id}
                    </span>

                    {/* Question */}
                    <h3
                      className={`font-instrument italic text-[19px] sm:text-[22px] leading-tight transition-colors ${
                        isOpen ? 'text-[#0A1628] font-normal' : 'text-[#0A1628] group-hover:text-blue-600'
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* Toggle Circle Icon */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-slate-100 text-slate-700'
                        : 'bg-slate-100/70 text-slate-500 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.2]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.2]" />
                    )}
                  </div>
                </div>

                {/* Expanded Answer Content Box */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-[#F8FAFC]/90 border border-slate-100 text-[13px] sm:text-[14px] text-slate-600 font-dm-sans leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* Bottom Still Have Questions Banner */}
          <div className="mt-8 p-6 rounded-2xl bg-white border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
            <div>
              <div className="font-plus-jakarta font-bold text-[15px] text-[#0A1628]">
                Still have questions?
              </div>
              <p className="text-[13px] text-slate-500 font-dm-sans mt-0.5">
                Speak directly with our engineering team on a 30-minute discovery call.
              </p>
            </div>
            <OriginButton
              href="#contact"
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Book a Call
            </OriginButton>
          </div>
        </div>
      </div>
    </section>
  );
}
