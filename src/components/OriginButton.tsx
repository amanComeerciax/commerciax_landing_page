'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface OriginButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  variant?: 'primary' | 'secondary' | 'dark' | 'white' | 'glass' | 'outline' | 'blue';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'right' | 'left';
  className?: string;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export default function OriginButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  id,
  type = 'button',
  disabled = false,
  target,
  rel,
  ariaLabel,
}: OriginButtonProps) {
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setOrigin({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsHovered(true);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setOrigin({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsHovered(false);
  };

  // Base and Variant Styling Tokens
  let baseClasses = '';
  let fillClasses = '';
  let textClasses = '';

  switch (variant) {
    case 'primary':
    case 'dark':
      baseClasses =
        'bg-[#07131F] text-white border border-white/10 shadow-[0_8px_22px_rgba(7,19,31,0.24)] hover:shadow-[0_14px_30px_rgba(37,99,235,0.35)]';
      fillClasses = 'bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#3B82F6]';
      textClasses = 'text-white';
      break;

    case 'secondary':
    case 'outline':
      baseClasses =
        'bg-white/85 text-[#0A1628] border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300';
      fillClasses = 'bg-[#07131F]';
      textClasses = 'text-[#0A1628] group-hover:text-white';
      break;

    case 'white':
      baseClasses =
        'bg-white text-[#0A1628] border border-white shadow-sm hover:shadow-xl hover:shadow-white/10';
      fillClasses = 'bg-[#07131F]';
      textClasses = 'text-[#0A1628] group-hover:text-white';
      break;

    case 'glass':
      baseClasses =
        'bg-white/60 hover:bg-white/80 backdrop-blur-xl border border-white/80 text-[#0A1628] shadow-xs';
      fillClasses = 'bg-[#07131F]';
      textClasses = 'text-[#0A1628] group-hover:text-white';
      break;

    case 'blue':
      baseClasses =
        'bg-blue-600 text-white border border-blue-500 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35';
      fillClasses = 'bg-[#07131F]';
      textClasses = 'text-white';
      break;
  }

  // Size Styling Tokens
  let sizeClasses = '';
  switch (size) {
    case 'xs':
      sizeClasses = 'px-3.5 py-1.5 text-[12px] gap-1.5';
      break;
    case 'sm':
      sizeClasses = 'px-4.5 py-2.5 sm:px-5 sm:py-2.5 text-[13px] sm:text-[13.5px] lg:text-[14px] gap-2';
      break;
    case 'md':
      sizeClasses = 'px-6 sm:px-7 py-3 sm:py-3.5 text-[13.5px] sm:text-[14.5px] gap-2.5';
      break;
    case 'lg':
      sizeClasses = 'px-5 py-2.5 xs:px-7 xs:py-3.5 sm:px-8 sm:py-4 text-[13.5px] xs:text-[15px] sm:text-[16px] gap-2.5';
      break;
  }

  const combinedClasses = `group relative inline-flex items-center justify-center font-semibold font-plus-jakarta rounded-full overflow-hidden select-none transition-all duration-300 cursor-pointer ${baseClasses} ${sizeClasses} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
  }`;

  const content = (
    <>
      {/* 1. Origin Radial Fill Expansion Layer (Framer Origin Button Pro Effect) */}
      <motion.span
        className={`pointer-events-none absolute inset-0 rounded-[inherit] z-0 ${fillClasses}`}
        initial={false}
        animate={{
          clipPath: isHovered
            ? `circle(175% at ${origin.x}px ${origin.y}px)`
            : `circle(0% at ${origin.x}px ${origin.y}px)`,
        }}
        transition={{
          type: 'tween',
          ease: [0.19, 1, 0.22, 1], // easeOutExpo fluid animation
          duration: isHovered ? 0.55 : 0.4,
        }}
      />

      {/* 2. Button Content (Text + Icons) with Smooth Color and Translation Transition */}
      <span className={`relative z-10 flex items-center justify-center gap-2 transition-colors duration-300 ${textClasses}`}>
        {icon && iconPosition === 'left' && (
          <span className="shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5">
            {icon}
          </span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'right' && (
          <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        id={id}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.97 }}
        className={combinedClasses}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      id={id}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      className={combinedClasses}
    >
      {content}
    </motion.button>
  );
}
