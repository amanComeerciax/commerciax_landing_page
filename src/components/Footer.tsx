'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Send } from 'lucide-react';
import OriginButton from './OriginButton';

const footerLinks = {
  product: [
    { label: 'Services', href: '#services' },
    { label: 'AI Software Dev', href: '#services' },
    { label: 'Neweb.ai Suite', href: '#products' },
    { label: 'Fonda.co System', href: '#products' },
    { label: 'Agentic Workflows', href: '#services' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'How We Work', href: '#how-we-work' },
    { label: 'Our Proof', href: '#proof' },
    { label: 'Global Programs', href: '#programs' },
    { label: 'Contact Team', href: '#contact' },
  ],
  resources: [
    { label: 'FAQ & Support', href: '#faq' },
    { label: 'AI Strategy Guide', href: '#products' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Security & SLA', href: '#' },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="w-full bg-[#FAF8F5] pt-8 sm:pt-12 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden font-dm-sans">
      <div className="site-container max-w-[1280px] mx-auto">
        {/* ========================================================== */}
        {/* LIQUID GLASS FOOTER OUTER METALLIC FRAME                   */}
        {/* ========================================================== */}
        <div
          className="relative p-[2.5px] sm:p-[3px] rounded-[36px] sm:rounded-[44px] bg-gradient-to-b from-white via-slate-300/80 to-white shadow-[0_24px_60px_-12px_rgba(15,23,42,0.12),0_4px_16px_rgba(0,0,0,0.03)] overflow-hidden"
        >
          {/* ========================================================== */}
          {/* INNER LIQUID FROSTED GLASS BODY                            */}
          {/* ========================================================== */}
          <div className="relative rounded-[33.5px] sm:rounded-[41px] bg-gradient-to-br from-white/95 via-[#F1F4F9]/90 to-[#E2E8F0]/95 backdrop-blur-2xl p-6 sm:p-10 lg:p-14 shadow-[inset_0_1.5px_2px_rgba(255,255,255,1),inset_0_-1.5px_2px_rgba(0,0,0,0.06)] overflow-hidden">
            
            {/* Ambient Lighting Gradients Inside Card */}
            <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-sky-300/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* ========================================================== */}
              {/* TOP ROW: BRAND COLUMN + NEWSLETTER & LINK COLUMNS          */}
              {/* ========================================================== */}
              <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-14">
                
                {/* 1. LEFT BRAND & NEWSLETTER COLUMN */}
                <div className="flex flex-col justify-between max-w-md">
                  <div>
                    {/* Brand Logo */}
                    <a href="/" className="inline-block mb-4 group">
                      <Image
                        src="/logo.png"
                        alt="CommerciaX Logo"
                        width={180}
                        height={55}
                        priority
                        className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
                      />
                    </a>

                    {/* Tagline */}
                    <p className="text-[14px] sm:text-[14.5px] text-slate-600 leading-relaxed max-w-sm mb-6 sm:mb-8 font-dm-sans">
                      Liquid intelligence &amp; autonomous systems, crafted with care for modern enterprises building what&apos;s next.
                    </p>
                  </div>

                  {/* Liquid Glass Newsletter Form */}
                  <div className="w-full">
                    <form
                      onSubmit={handleSubmit}
                      className="relative flex items-center p-1.5 rounded-full bg-white/70 hover:bg-white/90 backdrop-blur-md border border-white/90 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-300 max-w-sm"
                    >
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="w-full pl-4 pr-2 py-1.5 text-[13.5px] text-navy placeholder:text-slate-400 bg-transparent outline-none font-dm-sans"
                      />
                      <OriginButton
                        type="submit"
                        variant="primary"
                        size="xs"
                        className="shrink-0"
                        icon={
                          subscribed ? (
                            <Check className="w-3.5 h-3.5 text-blue-300" />
                          ) : (
                            <ArrowRight className="w-3.5 h-3.5" />
                          )
                        }
                      >
                        {subscribed ? 'Joined' : 'Subscribe'}
                      </OriginButton>
                    </form>
                    <span className="block text-[11px] text-slate-500 font-dm-sans mt-2 pl-3">
                      Join 1,200+ founders &amp; leaders receiving weekly insights.
                    </span>
                  </div>
                </div>

                {/* 2. RIGHT LINK COLUMNS */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-14 pt-2 lg:pt-0">
                  {/* Column 1: Product */}
                  <div className="flex flex-col">
                    <h4 className="font-plus-jakarta font-bold text-[12px] uppercase tracking-[0.14em] text-slate-500 mb-3 sm:mb-4">
                      Product
                    </h4>
                    <ul className="flex flex-col gap-1 sm:gap-1.5">
                      {footerLinks.product.map((l) => (
                        <li key={l.label}>
                          <a
                            href={l.href}
                            className="inline-block px-2.5 py-1 -ml-2.5 rounded-lg text-[13.5px] sm:text-[14px] font-medium text-slate-600 hover:text-navy hover:bg-white/80 transition-all duration-150"
                          >
                            {l.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: Company */}
                  <div className="flex flex-col">
                    <h4 className="font-plus-jakarta font-bold text-[12px] uppercase tracking-[0.14em] text-slate-500 mb-3 sm:mb-4">
                      Company
                    </h4>
                    <ul className="flex flex-col gap-1 sm:gap-1.5">
                      {footerLinks.company.map((l) => (
                        <li key={l.label}>
                          <a
                            href={l.href}
                            className="inline-block px-2.5 py-1 -ml-2.5 rounded-lg text-[13.5px] sm:text-[14px] font-medium text-slate-600 hover:text-navy hover:bg-white/80 transition-all duration-150"
                          >
                            {l.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 3: Resources */}
                  <div className="flex flex-col col-span-2 sm:col-span-1">
                    <h4 className="font-plus-jakarta font-bold text-[12px] uppercase tracking-[0.14em] text-slate-500 mb-3 sm:mb-4">
                      Resources
                    </h4>
                    <ul className="flex flex-col gap-1 sm:gap-1.5">
                      {footerLinks.resources.map((l) => (
                        <li key={l.label}>
                          <a
                            href={l.href}
                            className="inline-block px-2.5 py-1 -ml-2.5 rounded-lg text-[13.5px] sm:text-[14px] font-medium text-slate-600 hover:text-navy hover:bg-white/80 transition-all duration-150"
                          >
                            {l.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* ========================================================== */}
              {/* HORIZONTAL GLASS DIVIDER                                   */}
              {/* ========================================================== */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/80 to-transparent my-8 sm:my-10" />

              {/* ========================================================== */}
              {/* BOTTOM ROW: COPYRIGHT + LIQUID GLASS SOCIAL BUTTONS        */}
              {/* ========================================================== */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-slate-500">
                <p className="text-center sm:text-left font-dm-sans">
                  © {new Date().getFullYear()} CommerciaX Technologies Inc. All rights reserved.
                </p>

                {/* 4 Liquid Glass Social Buttons */}
                <div className="flex items-center gap-2.5">
                  {/* X (Twitter) */}
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="X (Twitter)"
                    className="w-10 h-10 rounded-full bg-white/75 hover:bg-white border border-white/90 shadow-[inset_0_1px_1.5px_rgba(255,255,255,1),0_4px_12px_rgba(0,0,0,0.04)] flex items-center justify-center text-slate-700 hover:text-navy hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 23.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-full bg-white/75 hover:bg-white border border-white/90 shadow-[inset_0_1px_1.5px_rgba(255,255,255,1),0_4px_12px_rgba(0,0,0,0.04)] flex items-center justify-center text-slate-700 hover:text-navy hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 1.66-1.66 1.66 1.66 0 0 0-3.32 0c0 .92.74 1.66 1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="w-10 h-10 rounded-full bg-white/75 hover:bg-white border border-white/90 shadow-[inset_0_1px_1.5px_rgba(255,255,255,1),0_4px_12px_rgba(0,0,0,0.04)] flex items-center justify-center text-slate-700 hover:text-navy hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

