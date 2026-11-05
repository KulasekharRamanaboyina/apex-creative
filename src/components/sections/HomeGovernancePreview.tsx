'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BrandLogo } from '../brand/BrandLogo';

const HEX_CODES = [
  { name: 'Crimson', hex: '#ffc900' },
  { name: 'Magenta', hex: '#ffc900' },
  { name: 'Deep Purple', hex: '#ffc900' },
  { name: 'Electric Blue', hex: '#ffc900' },
  { name: 'Flame Orange', hex: '#ffc900' },
  { name: 'Teal Accent', hex: '#ffc900' },
  { name: 'Ink Black', hex: '#080908' },
  { name: 'Paper White', hex: '#f5f3ef' }
];

export const HomeGovernancePreview: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [showGrid, setShowGrid] = useState(true);

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopied(hex);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="py-24 bg-[#080908] text-[#f5f3ef] relative overflow-hidden">
      {/* Signature Gradient Radial Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#ffc900]/10 via-[#ffc900]/10 to-[#ffc900]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5f3ef]/10 text-xs font-mono font-bold uppercase tracking-widest text-[#ffc900] mb-3">
              <span>Live Visual System Audit</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight">
              BRAND GOVERNANCE <span className="apex-gradient-text">SYSTEM</span>
            </h2>
          </div>

          <a
            href="/brand/README.txt"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#f5f3ef] hover:text-[#ffc900] transition-colors py-2 border-b border-white/20"
          >
            <span>Download Asset Map Registry</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left: Logo Clear-Space Tester */}
          <div className="lg:col-span-6 bg-[#f5f3ef]/[0.04] border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[10px] font-mono text-[#f5f3ef]/50 uppercase tracking-widest block">Governance Rule</span>
                  <h3 className="text-lg font-heading font-bold text-[#f5f3ef]">1X Clear-Space Calculation</h3>
                </div>

                <label className="flex items-center gap-2 text-xs font-heading font-semibold text-[#f5f3ef]/80 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={showGrid}
                    onChange={(e) => setShowGrid(e.target.checked)}
                    className="w-4 h-4 rounded text-[#ffc900] focus:ring-[#ffc900]"
                  />
                  <span>Toggle Clear Space Grid</span>
                </label>
              </div>

              <div className="my-8 py-10 px-4 rounded-2xl bg-[#f5f3ef] border border-white/10 flex flex-col items-center justify-center min-h-[220px]">
                <BrandLogo variant="transparent" width={220} showClearSpaceGrid={showGrid} />
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#f5f3ef]/60">
              <span>Primary Lockup Width: 220px (Enforced &gt;=120px)</span>
              <span className="text-[#ffc900] font-bold">Clear Space: PASSED</span>
            </div>
          </div>

          {/* Right: Color System & Signature Gradient Hex Copy */}
          <div className="lg:col-span-6 bg-[#f5f3ef]/[0.04] border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between backdrop-blur-md space-y-6">
            <div>
              <span className="text-[10px] font-mono text-[#ffc900] uppercase tracking-widest font-bold block mb-1">
                Official Palette Tokens
              </span>
              <h3 className="text-xl font-heading font-bold text-[#f5f3ef] mb-6">
                Official Brand Color Hex Matrix
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {HEX_CODES.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => copyHex(c.hex)}
                    className="p-3 rounded-xl bg-[#f5f3ef]/[0.05] border border-white/10 hover:bg-[#f5f3ef]/10 transition-all text-left group flex flex-col justify-between min-h-[90px]"
                  >
                    <div className="w-full h-4 rounded-md mb-2" style={{ backgroundColor: c.hex }} />
                    <div className="flex items-center justify-between w-full">
                      <div>
                        <span className="text-[10px] font-heading font-bold text-[#f5f3ef] block leading-tight">{c.name}</span>
                        <span className="text-[9px] font-mono text-[#f5f3ef]/60 block">{c.hex}</span>
                      </div>
                      {copied === c.hex ? (
                        <span className="text-[9px] font-mono font-bold text-[#ffc900]">COPIED</span>
                      ) : (
                        <span className="text-[9px] font-mono opacity-50 group-hover:opacity-100">COPY</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 text-xs font-mono text-[#f5f3ef]/80">
              <span className="text-[#ffc900] font-bold block mb-1">APEX Signature Gradient:</span>
              <code>linear-gradient(135deg, #ffc900 0%, #ffc900 33%, #ffc900 66%, #ffc900 100%)</code>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

