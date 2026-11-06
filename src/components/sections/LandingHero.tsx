'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useMotionTemplate, useTransform } from 'framer-motion';

export const LandingHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({
    x: -1000,
    y: -1000,
    prevX: -1000,
    prevY: -1000,
    vx: 0,
    vy: 0,
    isHovered: false
  });

  // Dynamic Cursor-Tracking Ambient Spotlight Aura
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const spotlightOpacity = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 220, mass: 0.2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const smoothOpacity = useSpring(spotlightOpacity, { damping: 20, stiffness: 150 });

  // 3D Perspective Tilt on Headline based on smooth cursor coordinates
  const tiltX = useTransform(smoothY, [0, 800], [2.5, -2.5]);
  const tiltY = useTransform(smoothX, [0, 1400], [-2.5, 2.5]);

  const spotlightBackground = useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(255, 201, 0, 0.12), rgba(255, 201, 0, 0.08), rgba(255, 201, 0, 0.05), transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (mouseRef.current.prevX > -500) {
      mouseRef.current.vx = (x - mouseRef.current.prevX) * 0.4;
      mouseRef.current.vy = (y - mouseRef.current.prevY) * 0.4;
    }
    mouseRef.current.prevX = x;
    mouseRef.current.prevY = y;
    mouseRef.current.x = x;
    mouseRef.current.y = y;
    mouseRef.current.isHovered = true;

    mouseX.set(x);
    mouseY.set(y);
    spotlightOpacity.set(1);
  };

  const handleMouseLeave = () => {
    mouseRef.current.isHovered = false;
    mouseRef.current.x = -1000;
    mouseRef.current.y = -1000;
    mouseRef.current.prevX = -1000;
    mouseRef.current.prevY = -1000;
    mouseRef.current.vx = 0;
    mouseRef.current.vy = 0;
    spotlightOpacity.set(0);
  };

  // 60FPS Dynamic Ambient Particle & Fluid Color Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    const handleResize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvas.parentElement ?? canvas);

    // Official APEX Signature Palette Nodes
    const colors = ['#ffc900', '#ffc900', '#ffc900', '#ffc900', '#ffc900', '#ffc900'];

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
      baseVx: number;
      baseVy: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < 45; i++) {
      const bVx = (Math.random() - 0.5) * 0.4;
      const bVy = (Math.random() - 0.5) * 0.4;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 100 + 40,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: bVx,
        vy: bVy,
        baseVx: bVx,
        baseVy: bVy,
        alpha: Math.random() * 0.14 + 0.05
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth decay cursor velocity
      mouseRef.current.vx *= 0.85;
      mouseRef.current.vy *= 0.85;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const isM = mouseRef.current.isHovered;

      particles.forEach((p) => {
        // Fluid dispersion away from moving cursor
        if (isM && mx > 0 && my > 0) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.hypot(dx, dy);
          const maxDist = 200;

          if (dist < maxDist && dist > 0) {
            const force = (1 - dist / maxDist) * 1.8;
            p.vx += (dx / dist) * force + mouseRef.current.vx * 0.03;
            p.vy += (dy / dist) * force + mouseRef.current.vy * 0.03;
          }
        }

        // Apply velocity with smooth liquid damping toward base drift
        p.vx = p.vx * 0.98 + (p.baseVx - p.vx) * 0.02;
        p.vy = p.vy * 0.98 + (p.baseVy - p.vy) * 0.02;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -p.radius) p.x = width + p.radius;
        if (p.x > width + p.radius) p.x = -p.radius;
        if (p.y < -p.radius) p.y = height + p.radius;
        if (p.y > height + p.radius) p.y = -p.radius;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, 'transparent');

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="apex-hero-frame relative flex flex-col items-center justify-center overflow-hidden bg-[#f5f3ef] pb-8 pt-20 text-[#080908] sm:pb-12 sm:pt-24"
    >

      {/* Precision Blueprint Micro-Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#080908_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035] pointer-events-none" />

      {/* Dynamic Cursor Spotlight Ambient Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[1] transition-opacity duration-300"
        style={{
          background: spotlightBackground,
          opacity: smoothOpacity,
        }}
      />

      {/* 60FPS Dynamic Ambient Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full pointer-events-none z-0 opacity-90"
      />

      {/* Radiant Signature Gradient Spotlight Auras */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-[#ffc900]/22 via-[#ffc900]/20 via-[#ffc900]/18 to-[#ffc900]/18 rounded-full blur-[130px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-2/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#ffc900]/15 via-[#ffc900]/15 to-[#ffc900]/12 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-gradient-to-tl from-[#ffc900]/15 via-[#ffc900]/15 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="apex-hero-content relative z-10 flex w-full flex-1 flex-col items-center justify-center px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8">
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="apex-hero-title font-heading font-black uppercase leading-[0.82] tracking-[-0.07em] drop-shadow-sm"
          >
            <span className="block text-[#080908]">IDEAS.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#080908] via-[#ffc900] to-[#ffc900]">VISUALS.</span>
            <span className="block apex-gradient-text drop-shadow-[0_10px_40px_rgba(255,201,0,0.2)]">IMPACT.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mx-auto mt-6 max-w-2xl text-sm font-sans leading-relaxed text-[#080908]/80 sm:mt-7 sm:text-base lg:text-lg"
          >
            Strategy, visual craft, 3D direction, and digital growth, brought together under one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-7 flex w-full flex-col items-center justify-center gap-3.5 sm:w-auto sm:flex-row sm:gap-5"
          >
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link
                href="/services"
                className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full apex-gradient-bg px-8 py-4 font-heading text-xs font-black uppercase tracking-[0.14em] shadow-xl shadow-[#ffc900]/30 transition-all duration-300 hover:shadow-[#ffc900]/50 sm:w-auto"
              >
                <span className="pointer-events-none absolute inset-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />
                <span className="relative z-10">Explore our services</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full border border-[#080908]/20 bg-[#080908] px-8 py-4 font-heading text-xs font-bold uppercase tracking-[0.14em] text-[#f5f3ef] shadow-lg shadow-[#080908]/20 transition-all duration-300 hover:bg-[#ffc900] hover:text-[#080908] sm:w-auto"
              >
                Start a project
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
