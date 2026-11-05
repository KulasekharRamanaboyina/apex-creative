'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const STAGES = [
  { step: '01', name: 'DISCOVER', subtitle: 'Understand the business & market gap', desc: 'Comprehensive audit of market landscape, audience signals, competitor visual gaps, and non-negotiable brand parameters.' },
  { step: '02', name: 'DEFINE', subtitle: 'Find the strategic opportunity', desc: 'Translating research into core narrative pillars, primary typography hierarchy, color science parameters, and digital channel focus.' },
  { step: '03', name: 'DESIGN', subtitle: 'Create the precise visual direction', desc: 'Engineering primary logo lockups, 3D motion assets, responsive UI components, and editorial graphics with clear-space governance.' },
  { step: '04', name: 'DEPLOY', subtitle: 'Bring the idea into the digital world', desc: 'Building Next.js App Router web flagships, deploying centralized brand asset maps, and configuring technical analytics tags.' },
  { step: '05', name: 'OPTIMIZE', subtitle: 'Learn, measure, and continuously improve', desc: 'Monitoring audience interaction signals, testing creative variants, and optimizing search performance for sustained growth.' }
];

export const HomeMethodology: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>('01');

  const selectedStep = STAGES.find(s => s.step === activeStep) || STAGES[0];

  return (
    <section className="py-24 bg-[#f5f3ef] text-[#080908] relative border-t border-[#080908]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ffc900] block mb-2">
            Engineered Process Framework
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-[#080908]">
            THE APEX <span className="apex-gradient-text">METHODOLOGY</span>
          </h2>
          <p className="mt-4 text-base text-[#080908]/70 font-sans">
            A 5-stage framework designed to eliminate guesswork, enforce visual discipline, and deliver measurable growth.
          </p>
        </div>

        {/* 5 Step Tab Row */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {STAGES.map((s) => {
            const isActive = activeStep === s.step;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(s.step)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between min-h-[100px] cursor-pointer ${
                  isActive
                    ? 'bg-[#080908] text-[#f5f3ef] border-[#080908] shadow-lg -translate-y-0.5'
                    : 'bg-[#f5f3ef] text-[#080908] border-[#080908]/10 hover:bg-[#080908]/5'
                }`}
              >
                <span className={`text-xl font-heading font-black ${isActive ? 'text-[#ffc900]' : 'text-[#080908]/40'}`}>
                  {s.step}
                </span>
                <span className="text-xs font-heading font-bold uppercase tracking-wider block mt-2">
                  {s.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Card */}
        <motion.div
          key={selectedStep.step}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-8 sm:p-10 rounded-3xl bg-[#f5f3ef] border border-[#080908]/10 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div className="space-y-3 max-w-2xl">
            <div>
              <span className="text-xs font-mono font-bold text-[#ffc900] uppercase">Stage {selectedStep.step}</span>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#080908]">{selectedStep.name}</h3>
            </div>
            <p className="text-xs font-mono font-bold text-[#080908]/60 uppercase">{selectedStep.subtitle}</p>
            <p className="text-sm text-[#080908]/80 font-sans leading-relaxed">{selectedStep.desc}</p>
          </div>

          <div className="shrink-0">
            <Link
              href="/approach"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#080908] text-[#f5f3ef] text-xs font-heading font-bold uppercase tracking-wider hover:bg-[#ffc900] hover:text-[#080908] transition-colors"
            >
              <span>Explore All 5 Stages</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
