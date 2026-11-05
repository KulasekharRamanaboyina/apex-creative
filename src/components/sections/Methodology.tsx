import React from 'react';
import { motion } from 'framer-motion';
import { BrandTaglinePill } from '../brand/BrandTaglinePill';

const STAGES = [
  {
    step: '01',
    title: 'Audit & Brand Blueprint',
    desc: 'Deep audit of existing identity, competitor visual gap analysis, and establishment of non-negotiable brand parameters.',
    tags: ['Identity Audit', 'Clear-Space Mapping', 'Color System Audit']
  },
  {
    step: '02',
    title: 'Core Identity Synthesis',
    desc: 'Synthesizing the signature gradient, Montserrat typography hierarchy, and icon mark rules into an unshakeable design system.',
    tags: ['Hex Science', 'Typography Hierarchy', 'Icon Governance']
  },
  {
    step: '03',
    title: 'Dynamic Ecosystem Build',
    desc: 'Engineering high-performance web flagships, 3D motion assets, and interactive component libraries with fluid micro-interactions.',
    tags: ['React & Vite Stack', '3D Motion Shaders', 'Web Flagships']
  },
  {
    step: '04',
    title: 'Governance & Deployment',
    desc: 'Deploying the centralized asset map, continuous automated compliance verification, and global campaign rollout.',
    tags: ['Asset Directory Map', '100% Verification', 'Global Rollout']
  }
];

export const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-24 bg-[#f5f3ef] text-[#080908] relative border-t border-[#080908]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <BrandTaglinePill size="sm" className="mb-4" />
          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-[#080908]">
            THE APEX <span className="apex-gradient-text">METHODOLOGY</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#080908]/70 max-w-2xl">
            A 4-stage engineered framework ensuring nothing is accidental and every visual decision commands attention.
          </p>
        </div>

        {/* 4 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAGES.map((stage, idx) => {
            return (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#f5f3ef] rounded-3xl p-8 border border-[#080908]/10 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-heading font-black text-[#080908]/20 group-hover:text-[#ffc900] transition-colors">
                      {stage.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-[#080908] mb-3">
                    {stage.title}
                  </h3>

                  <p className="text-sm text-[#080908]/70 font-sans leading-relaxed mb-6">
                    {stage.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#080908]/10 flex flex-wrap gap-1.5">
                  {stage.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-[#080908]/5 text-[10px] font-mono font-semibold text-[#080908]/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

