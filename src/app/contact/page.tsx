'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const SCOPE_OPTIONS = [
  {
    id: 'branding',
    title: 'Brand Strategy & Visual Identity',
    desc: 'Identity Systems, Clear-Space Protocols, Design Tokens & Governance',
    accent: '#ffc900',
    tag: 'PILLAR 01'
  },
  {
    id: 'web',
    title: 'Website Design & Development',
    desc: 'Next.js Digital Flagships, Micro-Interactions, 60FPS UI & Technical SEO',
    accent: '#ffc900',
    tag: 'PILLAR 02'
  },
  {
    id: 'motion',
    title: '3D Motion & Video Renders',
    desc: 'Volumetric 3D Product Renders, Particle Loops & Dynamic Key Visuals',
    accent: '#ffc900',
    tag: 'PILLAR 03'
  },
  {
    id: 'growth',
    title: 'Performance & SEO Strategy',
    desc: 'Organic Growth Architecture, Performance Marketing & Conversion Strategy',
    accent: '#ffc900',
    tag: 'PILLAR 04'
  },
  {
    id: 'full-suite',
    title: 'Full-Service Integrated Retainer',
    desc: 'End-to-End Strategic Brand, Motion, Flagship Web & Marketing Deployment',
    accent: '#ffc900',
    tag: 'FULL SUITE'
  }
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isScopeOpen, setIsScopeOpen] = useState(false);
  const scopeDropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: SCOPE_OPTIONS[0].title,
    message: ''
  });

  const selectedScope = SCOPE_OPTIONS.find(s => s.title === formData.service) || SCOPE_OPTIONS[0];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (scopeDropdownRef.current && !scopeDropdownRef.current.contains(event.target as Node)) {
        setIsScopeOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsScopeOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const MAX_WORDS = 150;
  const wordCount = formData.message.trim() ? formData.message.trim().split(/\s+/).length : 0;

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    const words = val.trim() ? val.trim().split(/\s+/) : [];
    if (words.length <= MAX_WORDS) {
      setFormData({ ...formData, message: val });
    } else {
      const truncated = words.slice(0, MAX_WORDS).join(' ');
      setFormData({ ...formData, message: truncated });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="bg-[#f5f3ef] text-[#080908] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-4xl mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ffc900] block mb-3">
            INITIATE CONVERSATION
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight uppercase leading-[0.92] mb-6">
            LET'S BUILD SOMETHING <br />
            <span className="apex-gradient-text">WORTH REMEMBERING.</span>
          </h1>
          <p className="text-lg text-[#080908]/75 font-sans leading-relaxed">
            Partner with APEX CREATIVE to engineer your visual identity and digital growth strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-[#f5f3ef] rounded-3xl p-8 sm:p-12 border border-[#080908]/10 shadow-xl">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono font-bold text-[#080908]/70 uppercase block mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alexandra Vance"
                      className="w-full px-4 py-3 rounded-xl bg-[#080908]/5 border border-[#080908]/15 text-xs focus:ring-2 focus:ring-[#ffc900] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono font-bold text-[#080908]/70 uppercase block mb-1">Corporate Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alexandra@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#080908]/5 border border-[#080908]/15 text-xs focus:ring-2 focus:ring-[#ffc900] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-mono font-bold text-[#080908]/70 uppercase block mb-1">Company / Organization</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Global Corp"
                    className="w-full px-4 py-3 rounded-xl bg-[#080908]/5 border border-[#080908]/15 text-xs focus:ring-2 focus:ring-[#ffc900] focus:outline-none"
                  />
                </div>

                {/* Primary Scope Styled Dropdown (Submenu) */}
                <div ref={scopeDropdownRef} className="relative">
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[11px] font-mono font-bold text-[#080908]/70 uppercase">
                      Primary Scope
                    </label>
                    <span className="text-[10px] font-mono text-[#080908]/50">
                      Select capability focus
                    </span>
                  </div>

                  {/* Dropdown Trigger Button */}
                  <button
                    type="button"
                    onClick={() => setIsScopeOpen(!isScopeOpen)}
                    className={`w-full px-4 py-3 rounded-xl text-left text-xs transition-all flex items-center justify-between border cursor-pointer ${
                      isScopeOpen
                        ? 'bg-[#f5f3ef] border-[#ffc900] ring-2 ring-[#ffc900]/20 shadow-md'
                        : 'bg-[#080908]/5 border-[#080908]/15 hover:bg-[#080908]/8 hover:border-[#080908]/25'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0 shadow-sm"
                        style={{ backgroundColor: selectedScope.accent }}
                      />
                      <div>
                        <span className="font-heading font-bold text-[#080908] block">
                          {selectedScope.title}
                        </span>
                        <span className="text-[10px] font-mono text-[#080908]/60 block line-clamp-1">
                          {selectedScope.desc}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 ml-3">
                      <span className="px-2 py-0.5 rounded-md bg-[#080908]/10 text-[9px] font-mono font-bold text-[#080908]/70 uppercase">
                        {selectedScope.tag}
                      </span>
                      <span
                        className={`text-xs text-[#080908]/50 transition-transform duration-200 block ${
                          isScopeOpen ? 'rotate-180 text-[#ffc900]' : ''
                        }`}
                      >
                        ▾
                      </span>
                    </div>
                  </button>

                  {/* Dropdown Submenu Popup */}
                  <AnimatePresence>
                    {isScopeOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        className="absolute top-full left-0 right-0 mt-2 z-40 bg-[#f5f3ef]/95 backdrop-blur-xl border border-[#080908]/15 rounded-2xl p-2 shadow-2xl space-y-1"
                      >
                        <div className="px-3 py-1.5 border-b border-[#080908]/10 flex items-center justify-between text-[9px] font-mono uppercase text-[#080908]/50 font-bold">
                          <span>Studio Capability Tracks</span>
                          <span>Click to select</span>
                        </div>

                        {SCOPE_OPTIONS.map((opt) => {
                          const isSelected = formData.service === opt.title;
                          return (
                            <button
                              type="button"
                              key={opt.id}
                              onClick={() => {
                                setFormData({ ...formData, service: opt.title });
                                setIsScopeOpen(false);
                              }}
                              className={`w-full p-3 rounded-xl flex items-center justify-between text-left transition-all duration-150 cursor-pointer ${
                                isSelected
                                  ? 'bg-[#080908] text-[#f5f3ef] shadow-md'
                                  : 'hover:bg-[#080908]/5 text-[#080908]'
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <span
                                  className="w-2.5 h-2.5 rounded-full shrink-0 mt-1 shadow-sm"
                                  style={{ backgroundColor: opt.accent }}
                                />
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span
                                      className={`text-xs font-heading font-bold ${
                                        isSelected ? 'text-[#f5f3ef]' : 'text-[#080908]'
                                      }`}
                                    >
                                      {opt.title}
                                    </span>
                                  </div>
                                  <p
                                    className={`text-[11px] font-sans mt-0.5 leading-tight ${
                                      isSelected ? 'text-[#f5f3ef]/70' : 'text-[#080908]/60'
                                    }`}
                                  >
                                    {opt.desc}
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center gap-2.5 shrink-0 ml-3">
                                <span
                                  className={`px-2 py-0.5 rounded-md text-[9px] font-mono font-bold uppercase ${
                                    isSelected
                                      ? 'bg-[#f5f3ef]/15 text-[#f5f3ef]/90'
                                      : 'bg-[#080908]/5 text-[#080908]/60'
                                  }`}
                                >
                                  {opt.tag}
                                </span>
                                {isSelected && (
                                  <span className="text-xs font-black text-[#ffc900]">✓</span>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[11px] font-mono font-bold text-[#080908]/70 uppercase">
                      Project Message & Vision
                    </label>
                    <span className={`text-[10px] font-mono font-semibold transition-colors ${
                      wordCount >= MAX_WORDS ? 'text-[#ffc900]' : 'text-[#080908]/50'
                    }`}>
                      {wordCount} / {MAX_WORDS} words
                    </span>
                  </div>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={handleMessageChange}
                    placeholder="Tell us about your goals, timelines, and requirements..."
                    className="w-full h-32 px-4 py-3 rounded-xl bg-[#080908]/5 border border-[#080908]/15 text-xs focus:ring-2 focus:ring-[#ffc900] focus:outline-none resize-none transition-all leading-relaxed"
                  />
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#080908]/40 mt-1">
                    <span>Fixed brief container</span>
                    <span>Max {MAX_WORDS} words limit</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full apex-gradient-bg text-[#f5f3ef] font-heading font-bold text-xs uppercase tracking-widest shadow-xl hover:scale-[1.01] transition-transform flex items-center justify-center cursor-pointer"
                >
                  <span>Submit Project Inquiry</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#ffc900]/20 border-2 border-[#ffc900] flex items-center justify-center mx-auto text-[#ffc900] font-mono font-bold text-lg">
                  ✓
                </div>
                <h2 className="text-3xl font-heading font-black text-[#080908]">INQUIRY RECEIVED</h2>
                <p className="text-sm text-[#080908]/70 max-w-md mx-auto">
                  Thank you, <strong className="text-[#080908]">{formData.name}</strong>. Our senior leadership team will respond within 24 business hours regarding <strong className="text-[#ffc900]">{formData.service}</strong>.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 rounded-full bg-[#080908] text-[#f5f3ef] text-xs font-heading font-bold uppercase tracking-wider cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Contact Specs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#080908] text-[#f5f3ef] space-y-6 shadow-2xl">
              <span className="text-xs font-mono text-[#ffc900] font-bold uppercase tracking-widest block">
                DIRECT CHANNELS
              </span>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <span className="text-[#f5f3ef]/50 block mb-1">Corporate Inquiries</span>
                  <a href="mailto:hello@apexcreative.agency" className="text-[#f5f3ef] font-bold hover:text-[#ffc900]">
                    hello@apexcreative.agency
                  </a>
                </div>

                <div>
                  <span className="text-[#f5f3ef]/50 block mb-1">Studio Headquarters</span>
                  <p className="text-[#f5f3ef]/90 leading-relaxed">
                    APEX CREATIVE Studio <br />
                    Digital Flagship Architecture
                  </p>
                </div>

                <div>
                  <span className="text-[#f5f3ef]/50 block mb-1">Standard Response Time</span>
                  <p className="text-[#ffc900] font-bold">Within 24 Business Hours</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#f5f3ef] border border-[#080908]/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-heading font-bold text-[#080908]">
                <span>Governance Commitment</span>
              </div>
              <p className="text-xs text-[#080908]/70 font-sans">
                We respect your data privacy. All project details are kept strictly confidential under non-disclosure governance.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
