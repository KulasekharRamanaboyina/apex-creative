import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BrandLogo } from '../brand/BrandLogo';

const OFFICIAL_COLORS = [
  { name: 'Midnight Black', hex: '#080908', role: 'Primary dark surface', darkText: false },
  { name: 'Pure White', hex: '#f5f3ef', role: 'Light surface and text', darkText: true },
  { name: 'Vibrant Golden Yellow', hex: '#ffc900', role: 'Primary accent', darkText: true }
];

const COMPLIANCE_CHECKS = [
  { id: 'logo-lockup', label: 'Primary Logo Lockup Integrity', desc: 'Full APEX CREATIVE lockup used without text recreation or separation.', pass: true },
  { id: 'clear-space', label: 'Clear Space Compliance (1X Height)', desc: 'Whitespace padding equal to at least height of X preserved on all sides.', pass: true },
  { id: 'min-size', label: 'Minimum Digital Size (120px)', desc: 'Digital logo width strictly enforced at >= 120px.', pass: true },
  { id: 'signature-gradient', label: 'Golden Yellow Accent', desc: 'Use #ffc900 for primary accents.', pass: true },
  { id: 'typography', label: 'Brand Typography System', desc: 'Montserrat for headlines & display, Inter for body and UI elements.', pass: true },
  { id: 'tagline-accuracy', label: 'Official Tagline Usage', desc: 'IDEAS · VISUALS · IMPACT executed with brand colored dots.', pass: true },
  { id: 'icon-mark', label: 'Secondary Asset Protocol', desc: 'Flame icon reserved for mobile nav, loading state, and favicons.', pass: true },
  { id: 'background-contrast', label: 'Dark Section Asset Governance', desc: 'Official dark variant used on dark sections without synthetic CSS filters.', pass: true }
];

export const BrandGovernancePortal: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [logoWidth, setLogoWidth] = useState<number>(200);
  const [showClearSpace, setShowClearSpace] = useState<boolean>(true);
  const [previewVariant, setPreviewVariant] = useState<'transparent' | 'dark' | 'primary'>('transparent');
  const [activeTab, setActiveTab] = useState<'overview' | 'palette' | 'clearspace' | 'assetmap'>('overview');

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <section id="governance" className="py-24 bg-[#f5f3ef] relative overflow-hidden border-t border-[#080908]/10">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#ffc900]/5 via-[#ffc900]/5 to-[#ffc900]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Badge & Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#080908] text-[#f5f3ef] text-xs font-mono tracking-wider uppercase mb-6 shadow-lg shadow-[#080908]/10"
          >
            <span>Single Source of Truth Visual Identity</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#080908] tracking-tight mb-4"
          >
            BRAND ASSET <span className="apex-gradient-text">GOVERNANCE</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#080908]/70 max-w-2xl"
          >
            Explore the official APEX CREATIVE visual identity system. Strict adherence to hex parameters, clear space calculations, and logo integrity.
          </motion.p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-[#080908]/5 border border-[#080908]/10">
            {[
              { id: 'overview', label: 'System Overview' },
              { id: 'palette', label: 'Color System' },
              { id: 'clearspace', label: 'Clear-Space Lab' },
              { id: 'assetmap', label: 'Asset Map Registry' }
            ].map(tab => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-semibold text-xs uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'bg-[#080908] text-[#f5f3ef] shadow-md'
                      : 'text-[#080908]/70 hover:text-[#080908] hover:bg-[#080908]/5'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* TAB 1: OVERVIEW & COMPLIANCE */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Primary Logo Lockup Display */}
            <div className="lg:col-span-7 bg-[#f5f3ef] rounded-3xl p-8 border border-[#080908]/10 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#080908]/50 block">Official Asset</span>
                  <h3 className="text-xl font-heading font-bold text-[#080908]">Primary Brand Lockup</h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#080908]/5 border border-[#080908]/10 text-xs font-mono font-semibold text-[#ffc900]">
                  Vector Master High-Res
                </div>
              </div>

              {/* Logo Presentation Frame */}
              <div className="my-8 py-12 px-6 rounded-2xl bg-[#f5f3ef] border border-[#080908]/10 flex flex-col items-center justify-center relative min-h-[260px] shadow-inner">
                <BrandLogo
                  variant="transparent"
                  width={240}
                  showClearSpaceGrid={true}
                />
                <div className="mt-4 text-center">
                  <p className="text-xs font-mono text-[#080908]/60">
                    File: <code className="text-[#ffc900] font-semibold">/brand/logo/apex-logo-transparent.png</code>
                  </p>
                </div>
              </div>

              {/* Signature Gradient Bar */}
              <div className="mt-4 pt-6 border-t border-[#080908]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#ffc900] via-[#ffc900] via-[#ffc900] to-[#ffc900] shadow-md" />
                  <div>
                    <span className="text-xs font-heading font-bold text-[#080908] block">APEX Signature Gradient</span>
                    <span className="text-[11px] font-mono text-[#080908]/60">#ffc900 → #ffc900 → #ffc900 → #ffc900</span>
                  </div>
                </div>
                <a
                  href="/brand/README.txt"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#080908] text-[#f5f3ef] text-xs font-heading font-semibold hover:bg-[#ffc900] hover:text-[#080908] transition-colors"
                >
                  View Asset Map
                </a>
              </div>
            </div>

            {/* Compliance Matrix */}
            <div className="lg:col-span-5 bg-[#080908] text-[#f5f3ef] rounded-3xl p-8 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-heading font-bold">Brand Verification Audit</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#ffc900]/20 text-[#ffc900] text-xs font-mono font-bold">
                    8 / 8 PASSED
                  </span>
                </div>

                <div className="space-y-3 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                  {COMPLIANCE_CHECKS.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-xl bg-[#f5f3ef]/[0.04] border border-white/10 flex items-start gap-3 hover:bg-[#f5f3ef]/[0.08] transition-colors"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#ffc900]/20 border border-[#ffc900] flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-black text-[#ffc900]">✓</span>
                      </div>
                      <div>
                        <h4 className="text-xs font-heading font-bold text-[#f5f3ef]">{item.label}</h4>
                        <p className="text-[11px] text-[#f5f3ef]/60 leading-normal mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <span className="text-[11px] font-mono text-[#f5f3ef]/50">
                  Strictly enforced per official Apex_Creative_Brand_Guidelines
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: OFFICIAL COLOR SYSTEM */}
        {activeTab === 'palette' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            {/* Color Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {OFFICIAL_COLORS.map((color) => (
                <div
                  key={color.name}
                  onClick={() => copyToClipboard(color.hex)}
                  className="group relative bg-[#f5f3ef] rounded-2xl p-4 border border-[#080908]/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[190px]"
                >
                  <div
                    className="w-full h-20 rounded-xl shadow-inner mb-3 transition-transform group-hover:scale-105"
                    style={{ backgroundColor: color.hex }}
                  />

                  <div>
                    <h4 className="text-xs font-heading font-bold text-[#080908]">{color.name}</h4>
                    <span className="text-[11px] font-mono text-[#080908]/60 block mt-0.5">{color.hex}</span>
                    <span className="text-[9px] text-[#080908]/50 block mt-1 leading-tight line-clamp-2">{color.role}</span>
                  </div>

                  <div className="mt-2 pt-2 border-t border-[#080908]/10 flex items-center justify-between text-[10px] font-mono text-[#ffc900]">
                    <span>{copiedHex === color.hex ? 'COPIED!' : 'COPY HEX'}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Signature Gradient In-Depth Inspector */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-[#080908] to-[#ffc900]/30 text-[#f5f3ef] border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="max-w-3xl relative z-10">
                <span className="text-xs font-mono uppercase tracking-widest text-[#ffc900] font-bold block mb-2">
                  OFFICIAL SIGNATURE GRADIENT
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-black mb-4">
                  Crimson → Magenta → Deep Purple → Electric Blue
                </h3>
                <p className="text-sm text-[#f5f3ef]/70 mb-6 leading-relaxed">
                  The APEX signature gradient represents maximum dynamic momentum. According to governance directives, it is applied SPARINGLY to hero visual accents, dividers, text lockups, and interactive hover states.
                </p>

                {/* CSS Code Snippet Box */}
                <div className="p-4 rounded-xl bg-black/60 border border-white/15 font-mono text-xs flex items-center justify-between gap-4">
                  <code className="text-[#ffc900] overflow-x-auto whitespace-nowrap">
                    background: linear-gradient(135deg, #ffc900 0%, #ffc900 33%, #ffc900 66%, #ffc900 100%);
                  </code>
                  <button
                    onClick={() => copyToClipboard('linear-gradient(135deg, #ffc900 0%, #ffc900 33%, #ffc900 66%, #ffc900 100%)')}
                    className="px-3 py-1.5 rounded-lg bg-[#f5f3ef]/10 hover:bg-[#f5f3ef]/20 text-[#f5f3ef] transition-colors shrink-0 font-mono text-xs"
                  >
                    Copy CSS
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 3: CLEAR SPACE & LOGO LAB */}
        {activeTab === 'clearspace' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Interactive Logo Tester Controls */}
            <div className="lg:col-span-4 bg-[#f5f3ef] rounded-3xl p-6 border border-[#080908]/10 shadow-lg space-y-6">
              <h3 className="text-lg font-heading font-bold text-[#080908] border-b border-[#080908]/10 pb-4">
                Logo Governance Controls
              </h3>

              {/* Variant Selector */}
              <div>
                <label className="text-xs font-heading font-bold text-[#080908]/80 uppercase block mb-2">
                  Asset Variant
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'transparent', label: 'Transparent' },
                    { id: 'dark', label: 'Inverted' },
                    { id: 'primary', label: 'Primary' }
                  ].map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setPreviewVariant(v.id as any)}
                      className={`px-3 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                        previewVariant === v.id
                          ? 'bg-[#080908] text-[#f5f3ef] shadow'
                          : 'bg-[#080908]/5 text-[#080908] hover:bg-[#080908]/10'
                      }`}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider for Width */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-heading font-bold text-[#080908]/80 uppercase">
                    Logo Render Width
                  </label>
                  <span className={`text-xs font-mono font-bold ${logoWidth < 120 ? 'text-[#ffc900]' : 'text-[#ffc900]'}`}>
                    {logoWidth}px {logoWidth < 120 ? '(VIOLATION!)' : '(VALID)'}
                  </span>
                </div>
                <input
                  type="range"
                  min="90"
                  max="360"
                  value={logoWidth}
                  onChange={(e) => setLogoWidth(Number(e.target.value))}
                  className="w-full accent-[#ffc900] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#080908]/50 mt-1">
                  <span>90px (Too small)</span>
                  <span>120px Min Digital Limit</span>
                  <span>360px</span>
                </div>
              </div>

              {/* Clear space Toggle */}
              <div className="pt-2">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={showClearSpace}
                    onChange={(e) => setShowClearSpace(e.target.checked)}
                    className="w-4 h-4 rounded text-[#ffc900] focus:ring-[#ffc900]"
                  />
                  <span className="text-xs font-heading font-semibold text-[#080908]">
                    Highlight 1X Clear Space Zone
                  </span>
                </label>
              </div>

              {/* Warning Notice if <120px */}
              {logoWidth < 120 && (
                <div className="p-3 rounded-xl bg-[#ffc900]/10 border border-[#ffc900]/30 text-xs text-[#ffc900]">
                  <p><strong className="font-bold">Governance Rule Violation:</strong> Primary logo width must never drop below 120px. On smaller screens, switch to the official Flame Icon Mark.</p>
                </div>
              )}
            </div>

            {/* Live Interactive Rendering Canvas */}
            <div className={`lg:col-span-8 rounded-3xl p-12 border flex flex-col items-center justify-center relative min-h-[380px] transition-colors duration-500 ${
              previewVariant === 'dark'
                ? 'bg-[#080908] border-white/10'
                : 'bg-[#f5f3ef] border-[#080908]/10 shadow-xl'
            }`}>
              <BrandLogo
                variant={previewVariant}
                width={logoWidth}
                showClearSpaceGrid={showClearSpace}
              />

              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[11px] font-mono opacity-60">
                <span>Rendering Mode: {previewVariant.toUpperCase()}</span>
                <span>Calculated Width: {logoWidth}px</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 4: ASSET MAP REGISTRY */}
        {activeTab === 'assetmap' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#080908] text-[#f5f3ef] rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-[#ffc900] tracking-widest uppercase font-bold block mb-1">
                  Central Asset Registry
                </span>
                <h3 className="text-2xl font-heading font-black">Official Asset Directory Mapping</h3>
              </div>
              <a
                href="/brand/README.txt"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#ffc900] text-[#080908] font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#ffc900] hover:text-[#080908] transition-colors shadow-lg shadow-[#ffc900]/30"
              >
                Download README.txt Asset Map
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
              <div className="p-5 rounded-2xl bg-[#f5f3ef]/[0.04] border border-white/10 space-y-3">
                <span className="text-[#ffc900] font-bold uppercase tracking-wider block">/brand/logo/</span>
                <p className="text-[#f5f3ef]/80"><strong className="text-[#f5f3ef]">apex-logo-primary.png</strong> — Full resolution original lockup</p>
                <p className="text-[#f5f3ef]/80"><strong className="text-[#f5f3ef]">apex-logo-transparent.png</strong> — Clean background removal</p>
                <p className="text-[#f5f3ef]/80"><strong className="text-[#f5f3ef]">apex-logo-dark.png</strong> — High-contrast inverted Paper White text</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#f5f3ef]/[0.04] border border-white/10 space-y-3">
                <span className="text-[#ffc900] font-bold uppercase tracking-wider block">/brand/icon/</span>
                <p className="text-[#f5f3ef]/80"><strong className="text-[#f5f3ef]">apex-icon-mark.png</strong> — Standalone APEX flame mark</p>
                <p className="text-[#f5f3ef]/60 text-[11px] leading-relaxed">Reserved for mobile navigation collapse, favicon, PWA, and brand moments.</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#f5f3ef]/[0.04] border border-white/10 space-y-3">
                <span className="text-[#ffc900] font-bold uppercase tracking-wider block">/brand/favicon/</span>
                <p className="text-[#f5f3ef]/80"><strong className="text-[#f5f3ef]">favicon.png</strong> — 32x32 crisp favicon</p>
                <p className="text-[#f5f3ef]/80"><strong className="text-[#f5f3ef]">apple-touch-icon.png</strong> — 180x180 iOS home icon</p>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};

