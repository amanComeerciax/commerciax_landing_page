'use client';

import { motion } from 'framer-motion';

const logos = [
  {
    name: 'Stripe',
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 60 25" fill="currentColor">
        <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32c-1.22.61-2.91.95-4.79.95-4.49 0-7.14-2.61-7.14-7.14 0-4.22 2.58-7.16 6.64-7.16 4.14 0 6.1 3.01 6.1 6.84v1.59zm-4.45-2.73c0-1.57-.86-2.52-2.14-2.52-1.32 0-2.22.95-2.39 2.52h4.53zM37.89 12.98c0-2.36 1.48-3.76 3.49-3.76 2.06 0 3.39 1.48 3.39 3.76 0 2.4-1.38 3.84-3.41 3.84-2 0-3.47-1.46-3.47-3.84zm-4.63 0c0 4.6 3.47 7.19 7.67 7.19 2.2 0 3.86-.69 4.87-1.46v1.19h4.37V6.05h-4.37v1.27c-1.03-.79-2.67-1.48-4.87-1.48-4.2 0-7.67 2.59-7.67 7.14zm-5.08-6.93h4.63v13.88h-4.63V6.05zm0-4.84h4.63v3.41h-4.63V1.21zm-6.27 10.15c0-1.85-1.27-2.75-2.91-2.75-1.22 0-2.28.53-2.88 1.11v3.25c.61.64 1.72 1.14 2.94 1.14 1.64 0 2.85-.87 2.85-2.75zm4.6 2.62c0 3.78-2.62 4.97-5.9 4.97-1.64 0-3.36-.37-4.47-.95v-3.52c1.08.64 2.57 1.06 4.02 1.06 1.56 0 2.2-.48 2.2-1.3 0-1.93-5.98-1.06-5.98-5.74 0-3.2 2.38-4.87 5.71-4.87 1.53 0 3.02.32 4.07.82v3.47c-1.06-.53-2.35-.87-3.62-.87-1.38 0-2.01.5-2.01 1.19 0 1.83 5.98 1.06 5.98 5.67zM7.22 14.28H-.84c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32c-1.22.61-2.91.95-4.79.95-4.49 0-7.14-2.61-7.14-7.14 0-4.22 2.58-7.16 6.64-7.16 4.14 0 6.1 3.01 6.1 6.84v1.59zm-4.45-2.73c0-1.57-.86-2.52-2.14-2.52-1.32 0-2.22.95-2.39 2.52h4.53z" />
      </svg>
    ),
  },
  {
    name: 'Shopify',
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 80 24" fill="currentColor">
        <path d="M68.5 4.5l-3.2 1.9-2.1-4-4.5 1.5c-.3-1.1-.9-1.9-1.8-2.5-.9-.6-2-.8-3.1-.6l-1.3.4C52 1.4 51.5 1 50.8.7c-.7-.3-1.5-.4-2.3-.3-3.8.5-5.5 3.8-5.9 5.8l-4 1.3-3.1-1.8L32 10.2l-3.2-1.8-4.1 1.3-.2-.5c-.3-1.1-.9-1.9-1.8-2.5-.9-.6-2-.8-3.1-.6l-1.3.4c-.5-.4-1-.8-1.7-1.1-.7-.3-1.5-.4-2.3-.3C10.5 5.8 8.8 9.1 8.4 11.1L2 13.2l3.2 1.9-2.1 4 4.5-1.5c.3 1.1.9 1.9 1.8 2.5.9.6 2 .8 3.1.6l1.3-.4c.5.4 1 .8 1.7 1.1.7.3 1.5.4 2.3.3 3.8-.5 5.5-3.8 5.9-5.8l4-1.3 3.1 1.8 4.3-4.5 3.2 1.8 4.1-1.3.2.5c.3 1.1.9 1.9 1.8 2.5.9.6 2 .8 3.1.6l1.3-.4c.5.4 1 .8 1.7 1.1.7.3 1.5.4 2.3.3 3.8-.5 5.5-3.8 5.9-5.8l6.4-2.1-3.2-1.9 2.1-4-4.5 1.5z" opacity="0.15" />
        <text x="0" y="17" fontSize="15" fontWeight="700" fontFamily="sans-serif" letterSpacing="-0.5px">shopify</text>
      </svg>
    ),
  },
  {
    name: 'Notion',
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 75 24" fill="currentColor">
        <rect x="2" y="3" width="18" height="18" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M7 17V7l7 10V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <text x="26" y="17" fontSize="15" fontWeight="700" fontFamily="sans-serif" letterSpacing="-0.3px">Notion</text>
      </svg>
    ),
  },
  {
    name: 'Vercel',
    svg: (
      <svg className="h-5 w-auto" viewBox="0 0 85 24" fill="currentColor">
        <path d="M10 3L20 20H0L10 3Z" />
        <text x="26" y="17" fontSize="15" fontWeight="700" fontFamily="sans-serif" letterSpacing="-0.3px">Vercel</text>
      </svg>
    ),
  },
  {
    name: 'Slack',
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 75 24" fill="currentColor">
        <circle cx="5" cy="8" r="2.5" />
        <rect x="9" y="5.5" width="8" height="5" rx="2.5" />
        <circle cx="17" cy="19" r="2.5" />
        <rect x="5" y="13.5" width="8" height="5" rx="2.5" />
        <text x="24" y="17" fontSize="15" fontWeight="700" fontFamily="sans-serif" letterSpacing="-0.3px">Slack</text>
      </svg>
    ),
  },
  {
    name: 'Linear',
    svg: (
      <svg className="h-5 w-auto" viewBox="0 0 75 24" fill="currentColor">
        <circle cx="10" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M4 16L16 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <text x="24" y="17" fontSize="15" fontWeight="700" fontFamily="sans-serif" letterSpacing="-0.3px">Linear</text>
      </svg>
    ),
  },
];

export default function LogoMarquee() {
  return (
    <div className="w-full pt-6 pb-12 sm:pb-16 border-t border-slate-200/40 flex justify-center">
      <div className="site-container px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-[11px] font-semibold tracking-[0.18em] text-slate-400 uppercase mb-8"
        >
          Trusted by fast-moving companies
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-10 sm:gap-14 lg:gap-20 text-slate-400/80 hover:text-slate-600 transition-colors"
        >
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
            >
              {logo.svg}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
