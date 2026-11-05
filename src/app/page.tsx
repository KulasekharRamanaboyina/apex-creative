import Link from 'next/link';
import { LandingHero } from '@/components/sections/LandingHero';
import { HomeCapabilities } from '@/components/sections/HomeCapabilities';
import { HomeMethodology } from '@/components/sections/HomeMethodology';
import { BrandGradientDivider } from '@/components/brand/BrandGradientDivider';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'APEX CREATIVE — Ideas · Visuals · Impact',
  description: 'APEX CREATIVE is a new creative design and digital marketing agency combining strategy, craft, design, and digital growth.'
});

export default function HomePage() {
  return (
    <div className="bg-[#f5f3ef] text-[#080908]">

      {/* 01 — ATTRACTIVE LANDING HERO */}
      <LandingHero />

      <BrandGradientDivider height="h-[2px]" animated={true} />

      {/* 02 — WHAT APEX IS (BUSINESS POSITIONING STATEMENT) */}
      <section className="py-20 sm:py-28 bg-[#080908] text-[#f5f3ef] relative overflow-hidden">
        {/* Background Precision Blueprint Micro-Grid & Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#f5f3ef_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#ffc900]/15 via-[#ffc900]/10 to-[#ffc900]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f5f3ef]/10 text-[10px] font-mono font-bold text-[#ffc900] uppercase tracking-widest border border-white/10 mb-6">
            <span>BUSINESS POSITIONING STATEMENT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.05] mb-8 uppercase">
            A NEW CREATIVE AGENCY <br className="hidden sm:inline" />
            BUILT TO <span className="apex-gradient-text">THINK DIFFERENTLY.</span>
          </h2>

          <p className="text-base sm:text-xl text-[#f5f3ef]/80 font-sans leading-relaxed max-w-3xl mx-auto mb-10">
            APEX CREATIVE carries zero legacy baggage. We combine strategic brand positioning, high-impact 3D visual craft, custom web app architecture, and performance SEO under one unified roof.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full apex-gradient-bg text-[#f5f3ef] text-xs font-heading font-bold uppercase tracking-widest hover:scale-105 shadow-xl shadow-[#ffc900]/20 transition-all duration-300"
            >
              <span>Our Story & Philosophy</span>
            </Link>

            <Link
              href="/approach"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#f5f3ef]/10 hover:bg-[#f5f3ef]/20 text-[#f5f3ef] text-xs font-heading font-bold uppercase tracking-widest border border-white/15 transition-all duration-300"
            >
              <span>Explore 5-Stage Framework</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 03 — INTERACTIVE CREATIVE CAPABILITIES PILLARS */}
      <HomeCapabilities />

      {/* 04 — INTERACTIVE STEP METHODOLOGY */}
      <HomeMethodology />

      {/* 05 — WHY APEX (THE NEW AGENCY ADVANTAGE) */}
      <section className="py-20 sm:py-28 bg-[#080908] text-[#f5f3ef] relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(#f5f3ef_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ffc900] block mb-2">
              The Advantage of Being New
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight uppercase">
              WHY WORK WITH <span className="apex-gradient-text">APEX?</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#f5f3ef]/70 font-sans leading-relaxed">
              We operate without junior account hand-offs, template formulas, or unnecessary agency bureaucracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'NO LEGACY THINKING',
                desc: 'Clean-slate strategic direction built for modern digital channels, not outdated agency playbooks.',
                accent: 'border-l-[#ffc900]',
                numColor: 'text-[#ffc900]'
              },
              {
                num: '02',
                title: 'FOUNDER-DRIVEN CRAFT',
                desc: 'Direct access to senior creative strategists and technical engineers on every brief.',
                accent: 'border-l-[#ffc900]',
                numColor: 'text-[#ffc900]'
              },
              {
                num: '03',
                title: 'DESIGN + DIGITAL GROWTH',
                desc: 'Unifying editorial brand craft with sub-second Next.js web code and performance SEO.',
                accent: 'border-l-[#ffc900]',
                numColor: 'text-[#ffc900]'
              }
            ].map((item, i) => (
              <div
                key={i}
                className={`p-8 rounded-3xl bg-[#f5f3ef]/[0.03] border border-white/10 ${item.accent} border-l-4 space-y-4 hover:bg-[#f5f3ef]/[0.06] hover:border-white/20 transition-all duration-300 shadow-xl`}
              >
                <div className={`text-xs font-mono font-bold ${item.numColor} tracking-widest uppercase`}>
                  DIRECTIVE {item.num}
                </div>
                <h3 className="text-lg font-heading font-black tracking-tight text-[#f5f3ef]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#f5f3ef]/70 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — STRONG CALL TO ACTION */}
      <section className="py-24 sm:py-32 bg-[#080908] text-[#f5f3ef] text-center relative overflow-hidden border-t border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#ffc900]/15 via-[#ffc900]/10 to-[#ffc900]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f5f3ef]/10 text-[10px] font-mono font-bold text-[#ffc900] uppercase tracking-widest border border-white/10">
            <span>START A PROJECT</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-heading font-black tracking-tight uppercase leading-[0.95]">
            READY TO BUILD SOMETHING <br />
            <span className="apex-gradient-text">WORTH REMEMBERING?</span>
          </h2>

          <p className="text-sm sm:text-lg text-[#f5f3ef]/70 max-w-2xl mx-auto font-sans leading-relaxed">
            Let's discuss how APEX can engineer your visual identity and digital growth system.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full apex-gradient-bg text-[#f5f3ef] font-heading font-bold text-xs uppercase tracking-widest shadow-2xl shadow-[#ffc900]/30 hover:scale-105 transition-all duration-300"
            >
              <span>Initiate Project Brief</span>
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-[#f5f3ef]/10 hover:bg-[#f5f3ef]/20 text-[#f5f3ef] font-heading font-bold text-xs uppercase tracking-widest border border-white/15 transition-all duration-300"
            >
              <span>Explore Capabilities</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
