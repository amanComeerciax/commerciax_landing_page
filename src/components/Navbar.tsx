'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'Services', href: '#services', hasDropdown: false },
  { label: 'Products', href: '#products', hasDropdown: false },
  { label: 'Proof', href: '#proof', hasDropdown: false },
  { label: 'Programs', href: '#programs', hasDropdown: false },
  { label: 'FAQ', href: '#faq', hasDropdown: false },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-slate-200/50 h-[72px] flex justify-center w-full"
    >
      <div className="site-container px-6 sm:px-8 lg:px-12 flex items-center justify-between h-full">
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0" id="nav-logo">
          <Image
            src="/logo.png"
            alt="Commerciax"
            width={200}
            height={80}
            priority
            className="h-9 sm:h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                id={`nav-${item.label.toLowerCase()}`}
                className="flex items-center gap-1 px-3.5 py-1.5 text-[14px] font-medium text-slate-600 hover:text-navy transition-colors rounded-lg hover:bg-slate-100/50"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#"
            id="nav-signin"
            className="px-5 py-2 bg-white/80 hover:bg-white text-[13.5px] font-semibold text-navy rounded-full border border-slate-200/90 hover:border-slate-300 transition-all shadow-sm"
          >
            Sign in
          </a>
          <a
            href="#"
            id="nav-get-started"
            className="group flex items-center gap-1.5 px-5 py-2.5 bg-[#0A1628] text-white text-[13.5px] font-semibold rounded-full hover:bg-slate-800 transition-all shadow-md shadow-navy/15 hover:-translate-y-0.5"
          >
            Get started
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          id="nav-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-slate-100/60 transition-colors"
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-[1.5px] bg-navy transition-all ${mobileOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
          <span className={`w-5 h-[1.5px] bg-navy transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-[1.5px] bg-navy transition-all ${mobileOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-[72px] left-0 right-0 bg-[#FAF8F5] border-b border-slate-200/80 px-6 py-4 shadow-xl">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  className="flex items-center justify-between py-2 text-[15px] font-medium text-slate-700 hover:text-navy"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4 opacity-40" />}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2.5 mt-4 pt-4 border-t border-slate-200/60">
            <a href="#" className="text-center py-2 text-[14px] font-medium text-slate-700">
              Sign in
            </a>
            <a href="#" className="text-center py-2.5 bg-navy text-white text-[13.5px] font-semibold rounded-full">
              Get started →
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
