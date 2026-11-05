'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import apexLogo from '@/assets/logo.png';

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [routeChanging, setRouteChanging] = useState(false);

  // Initial High-End Splash Loader Effect
  useEffect(() => {
    // Check if initial splash already ran in this tab session
    const hasLoaded = sessionStorage.getItem('apex_initial_splash_shown');

    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('apex_initial_splash_shown', 'true');
    }, 1650);

    return () => clearTimeout(timer);
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
            initial={{ clipPath: 'inset(0 0 0 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#080908] pointer-events-auto"
          >
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.72, rotate: -35 }}
              animate={{ opacity: [0, 0.7, 0.45], scale: [0.72, 1, 1.08], rotate: 0 }}
              transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute h-64 w-64 rounded-full border border-[#ffc900]/20 sm:h-80 sm:w-80"
            />
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.8, rotate: 25 }}
              animate={{ opacity: [0, 0.45, 0.25], scale: [0.8, 1, 1.12], rotate: 0 }}
              transition={{ duration: 1.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="absolute h-80 w-80 rounded-full border border-dashed border-[#f5f3ef]/10 sm:h-[26rem] sm:w-[26rem]"
            />
            <motion.div
              aria-hidden="true"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: [0, 1, 0.85], opacity: [0, 0.7, 0.35] }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute h-px w-72 bg-gradient-to-r from-transparent via-[#ffc900]/50 to-transparent sm:w-[26rem]"
            />
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: [0, 0.8, 0.4], scale: [0.4, 1, 0.8] }}
              transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
              className="absolute h-1.5 w-1.5 translate-x-32 rounded-full bg-[#ffc900] shadow-[0_0_14px_rgba(255,201,0,0.9)] sm:translate-x-40"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.76, y: 24, rotateX: 12, filter: 'blur(18px)' }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
              transition={{
                type: 'spring',
                stiffness: 115,
                damping: 16,
                delay: 0.08,
              }}
            >
              <motion.div
                animate={{ y: [0, -4, 0], scale: [1, 1.025, 1] }}
                transition={{ duration: 2.4, ease: 'easeInOut', repeat: Infinity, delay: 0.85 }}
              >
                <Image
                  src={apexLogo}
                  alt="APEX CREATIVE"
                  priority
                  className="h-auto w-40 select-none object-contain sm:w-48"
                />
              </motion.div>
            </motion.div>
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
