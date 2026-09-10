'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import HeroContent from './HeroContent';
import HeroActions from './HeroActions';
import InteractiveDashboard from './InteractiveDashboard';
import GlobeVisualization from './GlobeVisualization';
import AnnouncementTicker from './AnnouncementTicker';
import { gsap, useGSAP } from '@/lib/gsap';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const globeBgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePosition({ x, y });
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener('mousemove', handleMouseMove);
    return () => el.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // GSAP ScrollTrigger Scroll Parallax & Perspective Scrub
  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Parallax scroll on background image
      if (globeBgRef.current) {
        gsap.to(globeBgRef.current, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      // Parallax & 3D tilt scrub on Dashboard as user scrolls away
      if (dashboardRef.current) {
        gsap.to(dashboardRef.current, {
          y: 60,
          scale: 0.95,
          rotateX: 6,
          opacity: 0.85,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }

      // Left content slight upward drift & fade
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          y: -40,
          opacity: 0.8,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'center top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden pt-[90px] sm:pt-[105px] lg:pt-[115px] pb-0 flex flex-col justify-between items-center min-h-screen bg-[#FAF8F5] [perspective:1000px]"
      id="hero-section"
    >
      {/* High-Resolution 3D Globe Background Image with Seamless Bottom Melt */}
      <div 
        ref={globeBgRef}
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
        }}
      >
        <Image
          src="/backgroundimage.png"
          alt="Commerciax Network Background"
          fill
          priority
          quality={100}
          className="object-cover object-center w-full h-full opacity-95"
        />
      </div>

      {/* Main 12-Column Grid Container — site-container ensures rock-solid centering */}
      <div className="site-container relative px-4 sm:px-8 lg:px-12 my-auto w-full pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">

          {/* Left Column — 5 cols (41.6%) */}
          <div
            ref={contentRef}
            className="lg:col-span-5 flex flex-col gap-6 lg:gap-7 z-10"
            style={{
              transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 1.5}px)`,
              transition: 'transform 0.4s ease-out',
            }}
          >
            <HeroContent />
            <HeroActions />
          </div>

          {/* Right Column — 7 cols (58.3%) */}
          <div className="lg:col-span-7 relative flex items-center justify-center pt-6 lg:pt-0">
            {/* 3D Globe visualization in background */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{
                transform: `translate(${mousePosition.x * -4}px, ${mousePosition.y * -3}px)`,
                transition: 'transform 0.5s ease-out',
              }}
            >
              <GlobeVisualization />
            </div>

            {/* Dashboard Container with Parallax */}
            <div
              ref={dashboardRef}
              className="relative z-10 w-full max-w-[840px] xl:max-w-[900px] 2xl:max-w-[960px] transform-gpu"
              style={{
                transform: `translate(${mousePosition.x * 3}px, ${mousePosition.y * 2.5}px)`,
                transition: 'transform 0.35s ease-out',
              }}
            >
              <InteractiveDashboard />
            </div>
          </div>
        </div>
      </div>

      {/* Announcement Marquee Ticker Banner */}
      <div className="w-full relative z-20 mt-auto">
        <AnnouncementTicker />
      </div>
    </section>
  );
}
