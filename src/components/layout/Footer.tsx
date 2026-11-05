'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BrandGradientDivider } from '../brand/BrandGradientDivider';
import apexLogo from '@/assets/logo.png';
export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="apex-footer apex-footer-backdrop bg-[#080908] text-[#f5f3ef] relative pt-10 pb-6 sm:pt-12 sm:pb-8 overflow-hidden border-t border-white/10">

      {/* Signature Gradient Top Border Bar */}
      <div className="absolute top-0 left-0 right-0">
        <BrandGradientDivider height="h-[3px]" animated={true} />
      </div>

      {/* Radiant Background Spotlight Auras */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#ffc900]/10 via-[#ffc900]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[150px] h-[150px] bg-gradient-to-l from-[#ffc900]/10 via-[#ffc900]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Newsletter & Quick Executive Briefing Ribbon */}
        <div className="pb-8 border-b border-white/10">
          <div className="p-5 sm:p-6 rounded-2xl bg-[#f5f3ef]/[0.03] border border-white/10 backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden group hover:border-white/20 transition-all">

            <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-[#ffc900]/20 to-[#ffc900]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-xl space-y-1.5 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ffc900]/15 border border-[#ffc900]/30 text-[9px] font-mono font-bold text-[#ffc900] uppercase tracking-widest">
                <span>EXECUTIVE BRIEFINGS</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-heading font-black tracking-tight text-[#f5f3ef] uppercase">
                Subscribe to APEX Insights
              </h3>
              <p className="text-xs text-[#f5f3ef]/70 font-sans leading-relaxed">
                Monthly strategic briefings on visual identity governance, Next.js architecture, and digital growth.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1 sm:w-72">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email..."
                  required
                  className="w-full px-4 py-2.5 rounded-full bg-[#f5f3ef]/10 border border-white/15 text-[#f5f3ef] placeholder-white/40 text-xs font-mono focus:outline-none focus:border-[#ffc900] focus:ring-1 focus:ring-[#ffc900] transition-all"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full apex-gradient-bg text-[#f5f3ef] font-heading font-bold text-xs uppercase tracking-widest hover:scale-105 shadow-lg shadow-[#ffc900]/30 transition-all duration-300 cursor-pointer"
              >
                {subscribed ? (
                  <span>Subscribed!</span>
                ) : (
                  <span>Join Briefing</span>
                )}
              </button>
            </form>

          </div>
        </div>

        {/* Main Sitemap Grid */}
        <div className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-white/10">

          {/* Column 1: Primary Brand Identity & Studio Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="inline-flex hover:scale-105 transition-transform">
              <Image src={apexLogo} alt="APEX CREATIVE" width={120} height={59} className="h-12 w-auto object-contain" />
            </div>

            <p className="text-xs text-[#f5f3ef]/70 font-sans leading-relaxed max-w-sm">
              APEX CREATIVE is a next-generation creative design and digital marketing agency combining strategy, visual craft, 3D direction, and digital growth under one unified roof.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="apex-footer-social w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter X"
                className="apex-footer-social w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/__apexcreative_?dlrf=MXJvMXY5cmRrMGptMQ=="
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="apex-footer-social w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="apex-footer-social w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Capabilities & Services */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="apex-footer-section-title text-xs font-mono font-bold uppercase tracking-widest text-[#ffc900]">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs font-sans text-[#f5f3ef]/75">
              <li><Link href="/services/branding" className="hover:text-[#f5f3ef] hover:translate-x-1 inline-block transition-all">Brand Strategy &amp; Identity</Link></li>
              <li><Link href="/services/graphic-design" className="hover:text-[#f5f3ef] hover:translate-x-1 inline-block transition-all">Graphic &amp; 3D Visual Craft</Link></li>
              <li><Link href="/services/social-media-marketing" className="hover:text-[#f5f3ef] hover:translate-x-1 inline-block transition-all">Social Media Marketing</Link></li>
              <li><Link href="/services/website-design" className="hover:text-[#f5f3ef] hover:translate-x-1 inline-block transition-all">Next.js Web Architecture</Link></li>
              <li><Link href="/services/performance-marketing" className="hover:text-[#f5f3ef] hover:translate-x-1 inline-block transition-all">SEO &amp; Performance Growth</Link></li>
              <li><Link href="/services" className="hover:text-[#f5f3ef] hover:translate-x-1 inline-block transition-all">Digital Flagship Systems</Link></li>
            </ul>
          </div>

          {/* Column 3: Navigation Sitemap & Global Operations */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="apex-footer-section-title text-xs font-mono font-bold uppercase tracking-widest text-[#ffc900]">
              Company
            </h4>
            <ul className="space-y-2 text-xs font-sans text-[#f5f3ef]/75">
              <li><Link href="/" className="hover:text-[#f5f3ef] hover:translate-x-1 inline-block transition-all">Home Flagship</Link></li>
              <li><Link href="/about" className="hover:text-[#f5f3ef] hover:translate-x-1 inline-block transition-all">About APEX</Link></li>
              <li><Link href="/approach" className="hover:text-[#f5f3ef] hover:translate-x-1 inline-block transition-all">The Methodology</Link></li>
              <li><Link href="/insights" className="hover:text-[#f5f3ef] hover:translate-x-1 inline-block transition-all">Insights &amp; Articles</Link></li>
              <li><Link href="/contact" className="hover:text-[#f5f3ef] hover:translate-x-1 inline-block transition-all">Initiate Brief</Link></li>
            </ul>

            <div className="flex items-center gap-2 text-[10px] font-mono text-[#f5f3ef]/50 pt-2.5 border-t border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffc900]" />
              <span>GLOBAL STUDIO · 24/7 REMOTE OPS</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Back To Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#f5f3ef]/50">
          <div className="flex flex-wrap items-center gap-3">
            <span>© {new Date().getFullYear()} APEX CREATIVE. All rights reserved.</span>
            <span>·</span>
            <Link href="/privacy" className="hover:text-[#f5f3ef] transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-[#f5f3ef] transition-colors">Terms of Service</Link>
          </div>

          <button
            onClick={scrollToTop}
            className="apex-footer-backtop px-3.5 py-2 rounded-full transition-all duration-300 text-xs font-heading font-bold shadow-md hover:scale-105 cursor-pointer"
          >
            <span>Back to top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
