import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BrandTaglinePill } from '../brand/BrandTaglinePill';
import { BrandGradientDivider } from '../brand/BrandGradientDivider';

export interface HeroProps {
  onExploreWork: () => void;
  onOpenGovernance: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onOpenGovernance }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Smooth background particle canvas featuring the official APEX gradient colors
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Official APEX Brand Colors for Particles
    const colors = ['#ffc900', '#ffc900', '#ffc900', '#ffc900'];

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 80 + 30,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.12 + 0.04
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
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
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-[#f5f3ef] text-[#080908]">
      {/* Interactive Particle & Gradient Flow Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-70"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Tagline Pill */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BrandTaglinePill size="md" />
          </motion.div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-5xl mx-auto mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-black tracking-tight leading-[0.95] text-[#080908]"
          >
            ENGINEERING BOLD <br className="hidden sm:block" />
            <span className="apex-gradient-text uppercase">VISUAL IMPACT</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-lg sm:text-xl lg:text-2xl text-[#080908]/75 max-w-3xl mx-auto font-sans font-normal leading-relaxed"
          >
            APEX CREATIVE is the high-precision digital design studio engineering world-class visual identities, dynamic motion systems, and digital flagship experiences.
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-20"
        >
          <a
            href="#work"
            onClick={onExploreWork}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#080908] text-[#f5f3ef] font-heading font-bold text-xs uppercase tracking-widest shadow-xl shadow-[#080908]/20 hover:shadow-2xl hover:shadow-[#ffc900]/30 hover:scale-[1.02] transition-all duration-300 group"
          >
            <span>Explore Selected Work</span>
          </a>

          <button
            onClick={onOpenGovernance}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#080908]/5 border border-[#080908]/15 text-[#080908] font-heading font-bold text-xs uppercase tracking-widest hover:bg-[#080908] hover:text-[#f5f3ef] hover:border-[#080908] transition-all duration-300"
          >
            <span>Brand Governance Portal</span>
          </button>
        </motion.div>

        {/* Live Brand Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-[#f5f3ef]/80 border border-[#080908]/10 shadow-xl backdrop-blur-md"
        >
          {[
            { metric: '150+', label: 'Global Campaigns' },
            { metric: '48', label: 'Design & Visual Awards' },
            { metric: '100%', label: 'Governance Precision' },
            { metric: '4.9/5', label: 'Enterprise Impact Score' }
          ].map((item, idx) => {
            return (
              <div key={idx} className="flex flex-col items-center text-center p-4 border-r last:border-r-0 border-[#080908]/10">
                <span className="text-3xl lg:text-4xl font-heading font-black text-[#080908] tracking-tight">
                  {item.metric}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#080908]/60 mt-1">
                  {item.label}
                </span>
              </div>
            );
          })}
        </motion.div>

      </div>

      {/* Signature Gradient Divider Accent at Section Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <BrandGradientDivider height="h-[2px]" animated={true} />
      </div>
    </section>
  );
};

