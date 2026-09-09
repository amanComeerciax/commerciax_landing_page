'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Globe } from 'lucide-react';

const footerLinks = {
  platform: [
    { label: 'Services', href: '#services' },
    { label: 'SaaS Products', href: '#products' },
    { label: 'Our Proof', href: '#proof' },
    { label: 'Global Programs', href: '#programs' },
    { label: 'Sprint Planning', href: '#contact' },
  ],
  solutions: [
    { label: 'AI Strategy & Architecture', href: '#services' },
    { label: 'Agentic Workflows', href: '#services' },
    { label: 'Full-Stack Delivery', href: '#services' },
    { label: 'Enterprise Scaling', href: '#services' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'How We Work', href: '#how-it-works' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
  resources: [
    { label: 'Neweb.ai', href: '#products' },
    { label: 'Fonda.co', href: '#products' },
    { label: 'AI Strategy Suite', href: '#products' },
    { label: 'Book a Strategy Call', href: '#contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAF8F5] border-t border-slate-200/80 pt-16 pb-12 px-6 sm:px-8 lg:px-12 text-slate-600 font-dm-sans">
      <div className="site-container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-16 border-b border-slate-200/70">
          {/* Brand info */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-5">
              <Image
                src="/logo.png"
                alt="Commerciax Logo"
                width={180}
                height={70}
                className="h-9 w-auto object-contain"
              />
            </a>
            <p className="text-[14px] text-slate-600 leading-relaxed max-w-sm mb-6">
              The autonomous enterprise commerce intelligence platform. Unifying operational data and orchestrating real-time decisions at scale.
            </p>
            <div className="flex items-center gap-3 text-slate-500">
              <a href="#" aria-label="X (Twitter)" className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:text-navy hover:border-slate-300 transition-colors shadow-xs">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 23.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:text-navy hover:border-slate-300 transition-colors shadow-xs">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 1.66-1.66 1.66 1.66 0 0 0-3.32 0c0 .92.74 1.66 1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z"/></svg>
              </a>
              <a href="#" aria-label="GitHub" className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:text-navy hover:border-slate-300 transition-colors shadow-xs">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="font-plus-jakarta font-semibold text-[13.5px] uppercase tracking-wider text-navy mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              {footerLinks.platform.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-navy transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-plus-jakarta font-semibold text-[13.5px] uppercase tracking-wider text-navy mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              {footerLinks.solutions.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-navy transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-plus-jakarta font-semibold text-[13.5px] uppercase tracking-wider text-navy mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              {footerLinks.resources.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-navy transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-plus-jakarta font-semibold text-[13.5px] uppercase tracking-wider text-navy mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              {footerLinks.company.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-navy transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-slate-500">
          <p>© {new Date().getFullYear()} Commerciax Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-navy transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-navy transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-navy transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
