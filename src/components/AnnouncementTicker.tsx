'use client';

const TICKER_ITEMS = [
  {
    type: 'launch',
    icon: '⚡',
    badge: 'Launching',
    title: 'Commerciax Engine',
    desc: 'the AI-powered website builder',
  },
  {
    type: 'metric',
    icon: '✦',
    title: '50+ AI Projects Shipped across 5 Countries',
  },
  {
    type: 'feature',
    icon: '✦',
    title: 'Build B2B Pipeline with our AI Lead Gen Engine',
  },
  {
    type: 'service',
    icon: '✦',
    title: 'Remote Employee Pods — senior engineers on demand',
  },
  {
    type: 'sla',
    icon: '✦',
    title: '99.99% Enterprise Cloud Uptime SLA Guaranteed',
  },
  {
    type: 'devops',
    icon: '✦',
    title: 'End-to-End Full-Stack & DevOps Automation',
  },
];

export default function AnnouncementTicker() {
  return (
    <div className="w-full bg-[#080E1A] border-y border-white/[0.08] relative overflow-hidden py-2.5 sm:py-3 select-none group shadow-inner">
      {/* Edge gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#080E1A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#080E1A] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max animate-ticker group-hover:[animation-play-state:paused]">
        {/* Track 1 */}
        <div className="flex items-center gap-7 sm:gap-9 shrink-0 pr-7 sm:pr-9">
          {TICKER_ITEMS.map((item, idx) => (
            <div
              key={`t1-${idx}`}
              className="flex items-center gap-2.5 text-[12.5px] sm:text-[13.5px] font-dm-sans tracking-tight whitespace-nowrap text-slate-300"
            >
              {item.icon === '⚡' ? (
                <span className="text-amber-400 font-bold text-sm animate-pulse">{item.icon}</span>
              ) : (
                <span className="text-cyan-400 text-[11px] opacity-80">{item.icon}</span>
              )}

              {item.badge && (
                <span className="text-white font-semibold font-plus-jakarta">{item.badge}</span>
              )}

              {item.desc ? (
                <span>
                  <strong className="text-white font-semibold font-plus-jakarta mr-1.5">{item.title}</strong>
                  <span className="text-slate-400 font-normal">— {item.desc}</span>
                </span>
              ) : (
                <span className="text-slate-200 font-normal">{item.title}</span>
              )}
            </div>
          ))}
        </div>

        {/* Track 2 (Identical for seamless infinite marquee) */}
        <div className="flex items-center gap-7 sm:gap-9 shrink-0 pr-7 sm:pr-9" aria-hidden="true">
          {TICKER_ITEMS.map((item, idx) => (
            <div
              key={`t2-${idx}`}
              className="flex items-center gap-2.5 text-[12.5px] sm:text-[13.5px] font-dm-sans tracking-tight whitespace-nowrap text-slate-300"
            >
              {item.icon === '⚡' ? (
                <span className="text-amber-400 font-bold text-sm animate-pulse">{item.icon}</span>
              ) : (
                <span className="text-cyan-400 text-[11px] opacity-80">{item.icon}</span>
              )}

              {item.badge && (
                <span className="text-white font-semibold font-plus-jakarta">{item.badge}</span>
              )}

              {item.desc ? (
                <span>
                  <strong className="text-white font-semibold font-plus-jakarta mr-1.5">{item.title}</strong>
                  <span className="text-slate-400 font-normal">— {item.desc}</span>
                </span>
              ) : (
                <span className="text-slate-200 font-normal">{item.title}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
