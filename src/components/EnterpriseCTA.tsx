'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Lock, Sparkles, CheckCircle2 } from 'lucide-react';

export default function EnterpriseCTA() {
  return (
    <section className="w-full py-24 px-6 sm:px-8 lg:px-12 bg-[#FAF8F5] relative overflow-hidden">
      <div className="site-container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-[#0A1628] text-white p-10 sm:p-14 lg:p-20 overflow-hidden shadow-2xl shadow-navy/30 border border-slate-800"
        >
          {/* Ambient radial glows */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl pointer-events-none" />

          {/* Grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Top pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-[12.5px] font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              Empower Your Commerce Operations
            </div>

            <h2 className="font-plus-jakarta text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Ready to unify and automate your{' '}
              <span className="font-instrument italic font-normal text-blue-400">
                enterprise commerce?
              </span>
            </h2>

            <p className="mt-6 text-slate-300 font-dm-sans text-[16px] sm:text-[18px] max-w-2xl mx-auto leading-relaxed">
              Join leading global retailers in transforming fragmented data into proactive, autonomous growth. Book a tailored session with our solution architects.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#demo"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[15px] shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                Schedule Private Demo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-[15px] transition-all duration-200 backdrop-blur-sm flex items-center justify-center cursor-pointer"
              >
                Talk to Sales
              </a>
            </div>

            {/* Badges / Guarantees */}
            <div className="mt-12 pt-10 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[13px] text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>SOC2 Type II Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-blue-400" />
                <span>GDPR & CCPA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>99.99% Guaranteed SLA</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
