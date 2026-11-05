import React from 'react';
import { motion } from 'framer-motion';
import { BrandLogo } from '../brand/BrandLogo';
import { BrandGradientDivider } from '../brand/BrandGradientDivider';

export const DarkCreed: React.FC<{ onOpenGovernance: () => void }> = ({ onOpenGovernance }) => {
  return (
    <section className="py-28 bg-[#080908] text-[#f5f3ef] relative overflow-hidden my-12 border-y border-white/10">
      {/* Signature Gradient Radial Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#ffc900]/15 via-[#ffc900]/15 to-[#ffc900]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Official Dark Variant Logo Asset Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          {/* Uses official inverted dark logo asset (/brand/logo/apex-logo-dark.png) */}
          <BrandLogo variant="dark" width={220} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight leading-tight mb-8"
        >
          "WE DO NOT COMPROMISE ON VISUAL IDENTITY. <br />
          WE ENGINEER <span className="apex-gradient-text">UNAPOLOGETIC IMPACT."</span>
        </motion.h2>

        <p className="text-base sm:text-lg text-[#f5f3ef]/70 max-w-2xl mx-auto font-sans leading-relaxed mb-10">
          Every vector line, signature gradient stop, and Montserrat letterform is strictly calibrated to represent leadership at the highest level.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenGovernance}
            className="px-8 py-4 rounded-full bg-[#f5f3ef]/10 hover:bg-[#f5f3ef]/20 text-[#f5f3ef] font-heading font-bold text-xs uppercase tracking-widest border border-white/20 transition-all duration-300"
          >
            <span>Verify Brand Governance Audit</span>
          </button>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <BrandGradientDivider height="h-[2px]" animated={true} />
      </div>
    </section>
  );
};

