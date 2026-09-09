'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';

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
      {/* Background Soft Lighting Glows */}
      <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-gradient-to-b from-blue-100/35 via-indigo-50/20 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-blue-100/25 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="site-container relative px-4 sm:px-8 lg:px-12 max-w-[1340px] mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* ========================================================== */}
          {/* LEFT COLUMN: HEADLINE, DECORATIVE TRAJECTORY & CTA         */}
          {/* ========================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="text-[11px] font-mono tracking-[0.2em] font-bold text-slate-700 uppercase">
                  FAQ
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="font-plus-jakarta text-[44px] sm:text-[56px] lg:text-[64px] font-extrabold text-[#0A1628] leading-[1.04] tracking-[-0.03em] mb-6">
                Questions? <br />
                <span className="font-instrument italic font-normal text-blue-600">
                  We’ve got you
                </span>{' '}
                <br />
                covered.
              </h2>

              {/* Subtitle */}
              <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 font-dm-sans leading-relaxed mb-10 max-w-sm">
                Everything you need to know about how CommerciaX works, what we build, and how we deliver.
              </p>
            </div>

            {/* Middle Decorative Trajectory Curve + Handwritten Note */}
            <div className="relative my-8 sm:my-10 hidden sm:block">
              {/* Trajectory Blue Arc with Active Node */}
              <div className="relative flex items-center">
                <svg className="w-32 h-16 overflow-visible" viewBox="0 0 120 60" fill="none">
                  <path
                    d="M 0,55 Q 60,50 90,30 T 115,10"
                    stroke="#93C5FD"
                    strokeWidth="1.5"
                    strokeDasharray="4 5"
                    fill="none"
                  />
                  <circle cx="115" cy="10" r="5" fill="#2563EB" />
                  <circle cx="115" cy="10" r="10" stroke="#93C5FD" strokeWidth="1" opacity="0.6" className="animate-ping" />
                </svg>

                {/* Handwritten script note + arrow */}
                <div className="ml-6 flex flex-col items-start pointer-events-none">
                  <svg className="w-6 h-6 text-slate-600 -mb-1 rotate-[35deg]" viewBox="0 0 40 40" fill="none">
                    <path d="M 28,30 Q 14,24 16,10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    <path d="M 10,14 L 16,9 L 22,14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-serif italic text-[15px] sm:text-[16px] text-blue-600 tracking-wide rotate-[-4deg] select-none whitespace-nowrap">
                    Clear answers. <br />
                    <span className="font-medium text-blue-700">Faster decisions.</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Still Have Questions CTA */}
            <div className="pt-6 border-t border-slate-200/80">
              <div className="text-[10.5px] font-mono tracking-[0.2em] text-slate-400 uppercase mb-2">
                STILL HAVE QUESTIONS?
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[14.5px] font-semibold font-plus-jakarta text-[#0A1628] hover:text-blue-600 transition-colors group cursor-pointer"
              >
                <span>Book a call</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-blue-600" />
              </a>
            </div>
          </div>

          {/* ========================================================== */}
          {/* RIGHT COLUMN: 5 INTERACTIVE ACCORDION CARDS                */}
          {/* ========================================================== */}
          <div className="lg:col-span-7 flex flex-col gap-3.5 sm:gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
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
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
