'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Moon, Sun } from 'lucide-react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import apexLogo from '@/assets/logo.png';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileNavVisible, setMobileNavVisible] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('apex-theme');
    const preferredTheme = savedTheme === 'light' || savedTheme === 'dark'
      ? savedTheme
      : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(preferredTheme);
    document.documentElement.dataset.theme = preferredTheme;
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem('apex-theme', nextTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // On mobile, hide navbar when scrolling down past 50px; reveal on scroll up or top
      if (currentScrollY > 50 && currentScrollY > lastScrollY.current) {
        setMobileNavVisible(false);
      } else {
        setMobileNavVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'SERVICES', href: '/services' },
    { name: 'APPROACH', href: '/approach' },
    { name: 'ABOUT', href: '/about' },
    { name: 'INSIGHTS', href: '/insights' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        mobileNavVisible || mobileMenuOpen ? 'translate-y-0' : '-translate-y-full md:translate-y-0'
      } ${
        mobileMenuOpen
          ? 'bg-[#080908] py-2 shadow-sm'
          : isScrolled
          ? 'bg-[#f5f3ef]/95 backdrop-blur-md py-2 shadow-sm border-b border-[#080908]/10'
          : 'bg-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo Brand Touchpoint */}
          <Link href="/" className="inline-flex items-center group focus:outline-none">
            <Image src={apexLogo} alt="APEX CREATIVE" priority className="h-10 w-auto select-none object-contain" />
          </Link>

          {/* Desktop Multi-Page Route Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-xs font-heading font-bold uppercase tracking-wider py-1 relative group transition-colors duration-300 ${
                    isActive ? 'text-[#ffc900]' : 'text-[#080908]/80 hover:text-[#080908]'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#ffc900] to-[#ffc900] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Contact CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:bg-[#ffc900] hover:text-[#080908] ${mobileMenuOpen ? 'border-white/20 text-[#f5f3ef]' : 'border-[#080908]/15 text-[#080908]'}`}
            >
              {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
            </button>
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#080908] text-[#f5f3ef] text-xs font-heading font-bold uppercase tracking-wider shadow-md hover:shadow-xl hover:shadow-[#ffc900]/20 transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10">
                Contact APEX
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ffc900] via-[#ffc900] via-[#ffc900] to-[#ffc900] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </div>

          {/* Mobile Menu Animated Toggler Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:bg-[#ffc900] hover:text-[#080908] ${mobileMenuOpen ? 'border-white/20 text-[#f5f3ef]' : 'border-[#080908]/15 text-[#080908]'}`}
            >
              {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
            </button>
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`relative w-11 h-11 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 border focus:outline-none ${
                mobileMenuOpen
                  ? 'bg-[#ffc900] border-[#ffc900] text-[#080908] shadow-lg shadow-[#ffc900]/25'
                  : 'bg-[#080908]/5 border-[#080908]/15 text-[#080908] hover:bg-[#080908] hover:text-[#f5f3ef]'
              }`}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              <div className="w-5 h-4 flex flex-col justify-between items-center relative">
                {/* Top Line */}
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-5 h-[2px] rounded-full block transform-origin-center ${
                  mobileMenuOpen ? 'bg-[#080908]' : 'bg-current'
                  }`}
                />

                {/* Middle Line */}
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  className="w-4 h-[2px] rounded-full bg-current block"
                />

                {/* Bottom Line */}
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-5 h-[2px] rounded-full block transform-origin-center ${
                  mobileMenuOpen ? 'bg-[#080908]' : 'bg-current'
                  }`}
                />
              </div>
            </motion.button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu with Staggered Item Animations */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            id="mobile-navigation-drawer"
            className="fixed inset-0 z-40 h-dvh w-screen overflow-y-auto border-b border-white/10 bg-[#080908] px-6 pb-8 pt-24 text-[#f5f3ef] shadow-2xl shadow-black/40 md:hidden"
          >
            <div className="mx-auto flex max-w-lg flex-col">
              <div className="py-6">
                <span className="mb-2 block text-[9px] font-mono uppercase tracking-[0.22em] text-white/45">
                  Ideas · Visuals · Impact
                </span>
                <h2 className="font-heading text-[2rem] font-black uppercase leading-[0.95] tracking-tight text-[#f5f3ef]">
                  Move with <span className="apex-gradient-text">intent.</span>
                </h2>
              </div>

              {navItems.map((item, idx) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.32, delay: idx * 0.055 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`group flex min-h-[4.25rem] items-center justify-between border-b border-white/10 py-3 transition-colors ${
                        isActive
                          ? 'text-[#ffc900]'
                          : 'text-[#f5f3ef] hover:text-[#ffc900]'
                      }`}
                    >
                      <span className="flex min-w-0 items-baseline gap-5">
                        <span className="font-mono text-[10px] font-bold tracking-widest text-[#ffc900]/70">
                          0{idx + 1}
                        </span>
                        <span className="truncate font-heading text-2xl font-black uppercase leading-none tracking-tight sm:text-3xl">{item.name}</span>
                      </span>
                      <ArrowUpRight size={19} className="ml-3 shrink-0 text-[#ffc900] transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.28 }}
                className="pt-6"
              >
                <span className="mb-3 block text-[9px] font-mono uppercase tracking-[0.2em] text-white/45">
                  Have a big idea?
                </span>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex min-h-14 w-full items-center justify-between rounded-full apex-gradient-bg px-6 text-xs font-heading font-black uppercase tracking-[0.16em] shadow-xl shadow-[#ffc900]/20 transition-transform active:scale-[0.98]"
                >
                  <span>Start a Project</span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#080908]/10">
                    <ArrowUpRight size={16} />
                  </span>
                </Link>
              </motion.div>

            </div>
          </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </header>
  );
};
