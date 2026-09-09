'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowUpRight, Zap, Shield, RefreshCw } from 'lucide-react';

interface Integration {
  name: string;
  category: 'ERP' | 'Commerce' | 'Data & AI' | 'Payments';
  description: string;
  badge: string;
  status: 'Active Sync' | 'Native Ready' | 'Realtime';
  color: string;
}

const integrations: Integration[] = [
  {
    name: 'Salesforce Commerce Cloud',
    category: 'Commerce',
    description: 'Bi-directional multi-store catalog and order orchestration at sub-second latency.',
    badge: 'Enterprise',
    status: 'Realtime',
    color: '#00A1E0',
  },
  {
    name: 'SAP S/4HANA',
    category: 'ERP',
    description: 'Autonomous inventory allocation and automated enterprise fulfillment feeds.',
    badge: 'Certified Partner',
    status: 'Active Sync',
    color: '#0070F2',
  },
  {
    name: 'Shopify Plus',
    category: 'Commerce',
    description: 'High-volume checkout streams, custom webhooks, and headless store pipelines.',
    badge: 'Native App',
    status: 'Realtime',
    color: '#95BF47',
  },
  {
    name: 'Snowflake Data Cloud',
    category: 'Data & AI',
    description: 'Zero-copy telemetry sync directly into Commerciax autonomous decision engine.',
    badge: 'Data Share',
    status: 'Realtime',
    color: '#29B5E8',
  },
  {
    name: 'Oracle NetSuite',
    category: 'ERP',
    description: 'Automated ledger reconciliation, purchase order synthesis, and multi-currency billing.',
    badge: 'Direct API',
    status: 'Active Sync',
    color: '#C74634',
  },
  {
    name: 'Stripe Global',
    category: 'Payments',
    description: 'Smart routing, unified dispute AI intelligence, and multi-entity payout settlements.',
    badge: 'Verified',
    status: 'Native Ready',
    color: '#635BFF',
  },
];

const categories = ['All', 'Commerce', 'ERP', 'Data & AI', 'Payments'] as const;

export default function IntegrationsHub() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filtered = activeCategory === 'All' 
    ? integrations 
    : integrations.filter((item) => item.category === activeCategory);

  return (
    <section id="integrations" className="w-full py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden bg-[#FAF8F5]">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="site-container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-[12px] font-semibold tracking-wider text-blue-700 uppercase mb-4 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            Seamless Interoperability
          </div>
          <h2 className="font-instrument text-4xl sm:text-5xl font-normal text-navy tracking-tight leading-tight">
            Connects seamlessly with your <br />
            <span className="italic font-instrument bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
              entire commerce stack
            </span>
          </h2>
          <p className="mt-4 text-[16px] text-slate-600 font-dm-sans leading-relaxed">
            Commerciax hooks directly into your enterprise ERPs, storefronts, payment gateways, and data warehouses in minutes with zero disruption.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-[13.5px] font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0A1628] text-white shadow-md shadow-navy/20'
                  : 'bg-white/80 text-slate-600 hover:text-navy hover:bg-white border border-slate-200/80 shadow-xs'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Integration Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11.5px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {item.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-[12px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {item.status}
                  </div>
                </div>

                <h3 className="font-plus-jakarta text-[18px] font-semibold text-navy group-hover:text-blue-600 transition-colors">
                  {item.name}
                </h3>
                <p className="mt-2 text-[13.5px] text-slate-600 font-dm-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[13px] font-medium text-slate-500 group-hover:text-blue-600 transition-colors">
                <span>Configure pipeline</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Bottom Callout */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/80 border border-blue-200/70 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/30">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-plus-jakarta text-[15px] font-semibold text-navy">
                Need a custom proprietary ERP or custom webhook?
              </h4>
              <p className="text-[13px] text-slate-600 font-dm-sans">
                Our universal GraphQL/REST bridge connector maps any legacy schema with zero code.
              </p>
            </div>
          </div>
          <button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-navy font-semibold text-[13px] transition-all shadow-xs hover:shadow-sm">
            Read API Docs →
          </button>
        </div>
      </div>
    </section>
  );
}
