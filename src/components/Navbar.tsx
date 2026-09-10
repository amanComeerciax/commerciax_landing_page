'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, ArrowRight, Menu, X } from 'lucide-react';
import OriginButton from './OriginButton';

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string; desc?: string }[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '#services',
    hasDropdown: true,
    dropdownItems: [
      { label: 'AI Software Development', href: '#services', desc: 'Custom LLM architectures & pipelines' },
      { label: 'Strategic AI Architecture', href: '#services', desc: 'Enterprise data & safety systems' },
      { label: 'Enterprise Agentic Systems', href: '#services', desc: 'Autonomous multi-agent orchestration' },
      { label: 'Rapid Prototype to MVP', href: '#services', desc: 'Day-one prototype to live production' },
    ],
  },
  {
    label: 'Products',
    href: '#products',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Neweb.ai', href: '#products', desc: 'Autonomous AI Web Creation Suite' },
      { label: 'Fonda.co', href: '#products', desc: 'AI-Powered Business & Pitch System' },
    ],
  },
  { label: 'Proof', href: '#proof' },
  { label: 'Programs', href: '#programs' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <header className="fixed top-3.5 sm:top-5 left-0 right-0 z-50 flex justify-center items-center px-3 xs:px-4 sm:px-6 pointer-events-none">
      {/* ========================================================== */}
      {/* 1. MAIN FLOATING WHITE FROSTED CAPSULE NAVBAR (DESKTOP)    */}
      {/* ========================================================== */}
      <motion.nav
        initial={{ opacity: 0, y: -18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto hidden md:flex items-center justify-between w-full max-w-[1240px] xl:max-w-[1300px] h-[64px] sm:h-[68px] px-6 lg:px-8 rounded-full bg-gradient-to-b from-white/70 via-white/45 to-white/55 hover:from-white/80 hover:to-white/65 backdrop-blur-2xl backdrop-saturate-150 border border-white/80 shadow-[0_20px_50px_-8px_rgba(10,25,50,0.10),0_4px_16px_rgba(37,99,235,0.05),inset_0_1.5px_2px_0_rgba(255,255,255,0.95),inset_0_-1px_1.5px_0_rgba(255,255,255,0.4)] transition-all duration-300 select-none"
      >
        {/* Left: Official Brand Logo Image (/logo.png) */}
        <a
          href="/"
          onClick={() => setActiveTab('Home')}
          className="flex items-center shrink-0 group py-1"
          id="nav-logo"
        >
          <Image
            src="/logo.png"
            alt="CommerciaX"
            width={190}
            height={55}
            priority
            className="h-8 sm:h-9 lg:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </a>

        {/* Center: Nav Items List with Smooth Sliding Hover Pill */}
        <ul className="flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.label;
            const isHovered = hoveredTab === item.label;
            const isDropdownOpen = openDropdown === item.label;

            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  setHoveredTab(item.label);
                  if (item.hasDropdown) setOpenDropdown(item.label);
                }}
                onMouseLeave={() => {
                  setHoveredTab(null);
                  if (item.hasDropdown) setOpenDropdown(null);
                }}
              >
                <a
                  href={item.href}
                  onClick={() => setActiveTab(item.label)}
                  id={`nav-${item.label.toLowerCase()}`}
                  className={`relative z-10 flex items-center gap-1.5 text-[13.5px] lg:text-[14px] font-semibold font-plus-jakarta transition-colors py-2 px-3.5 rounded-full ${
                    isActive || isHovered
                      ? 'text-[#0A1628]'
                      : 'text-slate-600 hover:text-[#0A1628]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isDropdownOpen ? 'rotate-180 text-navy' : 'text-slate-400'
                      }`}
                    />
                  )}
                </a>

                {/* Smooth Animated Sliding Hover Pill */}
                {(isHovered || (!hoveredTab && isActive)) && (
                  <motion.div
                    layoutId="navPillHover"
                    className="absolute inset-0 rounded-full bg-slate-200/50 backdrop-blur-sm border border-slate-300/40 z-0 shadow-2xs"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}

                {/* Dropdown Menu Popup (Desktop) */}
                {item.hasDropdown && isDropdownOpen && item.dropdownItems && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 p-2 rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200/80 shadow-[0_20px_40px_rgba(10,22,40,0.12)] z-50 flex flex-col gap-1"
                  >
                    {item.dropdownItems.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        onClick={() => {
                          setOpenDropdown(null);
                          setActiveTab(item.label);
                        }}
                        className="px-3.5 py-2.5 rounded-xl hover:bg-slate-100/80 text-left transition-colors group"
                      >
                        <span className="block text-[13px] font-bold font-plus-jakarta text-navy group-hover:text-blue-600">
                          {subItem.label}
                        </span>
                        {subItem.desc && (
                          <span className="block text-[11px] text-slate-500 font-dm-sans leading-tight mt-0.5">
                            {subItem.desc}
                          </span>
                        )}
                      </a>
                    ))}
                  </motion.div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Right: Search Icon + 'Book a Call ->' Pill Button */}
        <div className="flex items-center gap-3">
          {/* Search Button */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="w-9 h-9 rounded-full bg-white/60 hover:bg-white/90 border border-white/80 text-slate-700 hover:text-navy flex items-center justify-center transition-all shadow-xs backdrop-blur-md"
            aria-label="Search"
          >
            <Search className="w-4 h-4 stroke-[2.2]" />
          </button>

          {/* Book a Call Button with Origin Pro Effect */}
          <OriginButton
            href="#contact"
            id="nav-cta"
            variant="primary"
            size="sm"
            icon={<ArrowRight className="w-4 h-4 text-white/90" />}
          >
            Book a Call
          </OriginButton>
        </div>
      </motion.nav>

      {/* ========================================================== */}
      {/* 2. MAIN FLOATING CAPSULE NAVBAR (MOBILE)                   */}
      {/* ========================================================== */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        className="pointer-events-auto md:hidden w-full max-w-[440px] h-[58px] flex items-center justify-between px-4.5 rounded-full bg-gradient-to-b from-white/75 via-white/50 to-white/65 backdrop-blur-2xl border border-white/80 shadow-[0_12px_36px_rgba(10,25,50,0.09),inset_0_1.5px_2px_0_rgba(255,255,255,0.9)]"
      >
        <a href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="CommerciaX"
            width={140}
            height={42}
            priority
            className="h-7 sm:h-8 w-auto object-contain"
          />
        </a>

        <div className="flex items-center gap-2">
          <OriginButton
            href="#contact"
            variant="primary"
            size="xs"
            icon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            Book a Call
          </OriginButton>

          <button
            id="nav-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-8 h-8 rounded-full bg-slate-100/80 flex items-center justify-center text-navy hover:bg-slate-200 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.div>

      {/* ========================================================== */}
      {/* 3. MOBILE DROPDOWN DRAWER                                  */}
      {/* ========================================================== */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden pointer-events-auto fixed top-[76px] left-4 right-4 max-w-[440px] mx-auto rounded-3xl bg-white/95 backdrop-blur-2xl border border-white/90 shadow-[0_20px_50px_rgba(10,22,40,0.15)] p-5 overflow-hidden z-50"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => {
                      setActiveTab(item.label);
                      setMobileOpen(false);
                    }}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-[14.5px] font-semibold font-plus-jakarta transition-colors ${
                      activeTab === item.label
                        ? 'bg-blue-50/80 text-blue-600'
                        : 'text-slate-700 hover:text-navy hover:bg-slate-100/80'
                    }`}
                  >
                    <span>{item.label}</span>
                    {activeTab === item.label && (
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-3.5 border-t border-slate-200/80 flex flex-col gap-2">
              <OriginButton
                href="#contact"
                onClick={() => setMobileOpen(false)}
                variant="primary"
                size="md"
                className="w-full justify-center"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Book a Call
              </OriginButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}





