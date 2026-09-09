'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  metricLabel: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Commerciax eliminated 80% of our cross-channel inventory discrepancies in under three weeks. The autonomous sync and prediction engine is unlike anything we've tested.",
    author: 'Elena Rostova',
    role: 'SVP of Global Digital Commerce',
    company: 'Nordic Retail Group',
    metric: '+38%',
    metricLabel: 'Fulfillment Efficiency',
  },
  {
    quote:
      'We replaced four fragmented analytics tools with Commerciax. Our engineering team gained back hundreds of hours each quarter while operational errors plummeted to near zero.',
    author: 'Marcus Vance',
    role: 'Chief Technology Officer',
    company: 'Aura Lifestyle Omnichannel',
    metric: '99.9%',
    metricLabel: 'Order Accuracy Rate',
  },
  {
    quote:
      'The multi-model scenario simulator gave our executive team the confidence to pivot pricing across 12 countries in real-time during peak holiday sales.',
    author: 'Samantha Chen',
    role: 'Head of Growth & Revenue Ops',
    company: 'Veloce Global Logistics',
    metric: '4.2×',
    metricLabel: 'Net Margin ROI',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-24 px-6 sm:px-8 lg:px-12 bg-white relative border-y border-slate-200/60">
      <div className="site-container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/60 text-[12px] font-semibold text-amber-800 uppercase tracking-wider mb-4">
            <div className="flex gap-0.5 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            Trusted Worldwide
          </div>
          <h2 className="font-instrument text-4xl sm:text-5xl font-normal text-navy tracking-tight leading-tight">
            Loved by leaders at <br />
            <span className="italic font-instrument bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
              global commerce scale
            </span>
          </h2>
          <p className="mt-4 text-[16px] text-slate-600 font-dm-sans leading-relaxed">
            See how enterprise retail brands and high-velocity commerce teams achieve unfair operational advantages.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative p-8 rounded-2xl bg-[#FAF8F5] border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 flex flex-col justify-between"
            >
              <div>
                {/* Metric pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-100/60 border border-blue-200/80 mb-6">
                  <TrendingUp className="w-4 h-4 text-blue-700" />
                  <span className="font-plus-jakarta font-bold text-[15px] text-blue-900">{t.metric}</span>
                  <span className="text-[12px] text-blue-800/80 font-medium">{t.metricLabel}</span>
                </div>

                <Quote className="w-8 h-8 text-slate-300 mb-3" />
                <p className="text-[15px] text-slate-700 font-dm-sans leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-200/80">
                <h4 className="font-plus-jakarta font-semibold text-[15.5px] text-navy">
                  {t.author}
                </h4>
                <p className="text-[13px] text-slate-500 font-dm-sans">
                  {t.role} &bull; <span className="font-medium text-slate-700">{t.company}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
