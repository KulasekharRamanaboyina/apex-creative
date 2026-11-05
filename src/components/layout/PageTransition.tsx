'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import apexLogo from '@/assets/logo.png';

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [routeChanging, setRouteChanging] = useState(false);

  // Initial High-End Splash Loader Effect
  useEffect(() => {
    // Check if initial splash already ran in this tab session
    const hasLoaded = sessionStorage.getItem('apex_initial_splash_shown');

    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    // Step-wise progress counter for realistic luxury load feel
    const duration = 1200; // 1.2s total
    const intervalTime = 30;
    const increment = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem('apex_initial_splash_shown', 'true');
          }, 200);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  // Top Page Route Progress Bar on Navigation
  useEffect(() => {
    setRouteChanging(true);
    const timer = setTimeout(() => {
      setRouteChanging(false);
    }, 450);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* 01 — TOP ROUTE PROGRESS BAR (APEX SIGNATURE GRADIENT) */}
      <AnimatePresence>
        {routeChanging && (
          <motion.div
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: '0% 50%' }}
            className="fixed top-0 left-0 right-0 h-[3px] apex-gradient-bg z-[9999] pointer-events-none shadow-md shadow-[#ffc900]/30"
          />
        )}
      </AnimatePresence>

      {/* 02 — INITIAL LUXURY BRAND SPLASH CURTAIN */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="initial-splash-curtain"
            initial={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99999] bg-[#080908] text-[#f5f3ef] flex flex-col items-center justify-center overflow-hidden pointer-events-auto"
          >
            {/* Ambient Background Gradient Aura */}
            <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-[#ffc900]/20 via-[#ffc900]/20 to-[#ffc900]/20 rounded-full blur-3xl animate-pulse pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center space-y-8 px-4 text-center">
              {/* Animated Brand Logo */}
              <motion.div
                initial={{ opacity: 0, y: 14, scale: 0.96, filter: 'blur(12px)' }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative drop-shadow-[0_0_24px_rgba(255,201,0,0.18)]"
              >
                <Image
                  src={apexLogo}
                  alt="APEX CREATIVE"
                  priority
                  className="h-auto w-40 select-none object-contain sm:w-48"
                />
              </motion.div>

              <motion.div
                aria-hidden="true"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.65, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="h-px w-24 origin-center bg-gradient-to-r from-transparent via-[#ffc900] to-transparent"
              />

              {/* Brand Tagline */}
              <div className="space-y-2">
                <motion.p
                  initial={{ opacity: 0, y: 8, letterSpacing: '0.12em' }}
                  animate={{ opacity: 0.7, y: 0, letterSpacing: '0.25em' }}
                  transition={{ delay: 0.5, duration: 0.55, ease: 'easeOut' }}
                  className="text-[11px] font-mono tracking-[0.25em] text-[#f5f3ef]/70 uppercase"
                >
                  IDEAS · VISUALS · IMPACT
                </motion.p>
              </div>

              {/* High-Precision Progress Bar & Counter */}
              <div className="w-48 sm:w-64 space-y-2">
                <div className="h-[2px] w-full bg-[#f5f3ef]/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full w-full origin-left apex-gradient-bg"
                    style={{ scaleX: loadingProgress / 100 }}
                    transition={{ duration: 0.12, ease: 'linear' }}
                  />
                </div>
                <div className="flex justify-between items-center text-[10px] font-mono text-[#f5f3ef]/50 tracking-wider">
                  <span>INITIALIZING STUDIO ARCHITECTURE</span>
                  <span className="font-bold text-[#ffc900]">{Math.round(loadingProgress)}%</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 03 — ROUTE CONTENT PAGE TRANSITION WRAPPER */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 14, filter: 'blur(3px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(2px)' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex-grow flex flex-col"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
