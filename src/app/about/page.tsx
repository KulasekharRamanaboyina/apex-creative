import Link from 'next/link';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'About APEX CREATIVE — Why We Exist & Our Philosophy',
  description: 'Learn about APEX CREATIVE: a new, ambitious creative agency built without legacy baggage to combine strategy, design, and digital growth.'
});

export default function AboutPage() {
  return (
    <div className="bg-[#f5f3ef] text-[#080908] pt-28 pb-20 sm:pt-32 sm:pb-24 relative overflow-hidden">

      {/* Background Precision Blueprint Micro-Grid & Spotlight Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(#080908_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#ffc900]/12 via-[#ffc900]/10 to-[#ffc900]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f5f3ef]/90 border border-[#080908]/12 shadow-sm backdrop-blur-md mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ffc900]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#080908] uppercase">
              ABOUT APEX CREATIVE
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight uppercase leading-[0.92] text-[#080908] mb-6">
            A NEW CREATIVE AGENCY <br className="hidden sm:inline" />
            BUILT TO <span className="apex-gradient-text">THINK DIFFERENTLY.</span>
          </h1>

          <p className="text-base sm:text-xl text-[#080908]/80 font-sans leading-relaxed max-w-3xl mx-auto">
            APEX CREATIVE is a next-generation design and digital marketing agency founded on a simple principle: brand strategy, visual craft, 3D direction, and digital growth belong under one unified roof.
          </p>
        </div>

        {/* 3 Executive Directives Summary Ribbon */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {[
            { tag: '01 FREEDOM', title: 'Zero Legacy Overhead', desc: 'No outdated agency baggage, template formulas, or unnecessary bureaucracy.' },
            { tag: '02 CRAFT', title: 'Founder-Driven Execution', desc: 'Direct access to senior creative strategists and technical engineers on every project.' },
            { tag: '03 PERFORMANCE', title: 'Sub-Second Web Speed', desc: 'Next.js App Router flagships built for 60FPS animations and technical SEO excellence.' }
          ].map((item) => (
            <div key={item.tag} className="p-6 rounded-2xl bg-[#f5f3ef] border border-[#080908]/10 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-[10px] font-mono font-bold text-[#ffc900] tracking-widest uppercase block mb-1">
                {item.tag}
              </span>
              <h3 className="text-base font-heading font-bold text-[#080908] mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-[#080908]/70 font-sans leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content & Quote Alignment Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 items-stretch">

          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ffc900] block">
                OUR POSITIONAL ADVANTAGE
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#080908]">
                The Advantage of Being New
              </h2>
              <p className="text-sm sm:text-base text-[#080908]/80 font-sans leading-relaxed">
                We don’t pretend to have decades of legacy experience or thousands of past client case studies. We are a fresh, ambitious team of creative strategists, UI designers, 3D artists, and digital growth engineers.
              </p>
              <p className="text-sm sm:text-base text-[#080908]/80 font-sans leading-relaxed">
                Being new is our competitive advantage. We carry zero bloated agency overhead, zero legacy templates, and zero formulaic thinking. Every brand we touch receives senior-level attention, uncompressed visual craft, and state-of-the-art technical architecture.
              </p>
            </div>

            {/* 4 Non-Negotiable Directives Grid */}
            <div className="pt-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#080908] mb-3">
                OUR FOUR NON-NEGOTIABLE DIRECTIVES
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { num: '01', title: 'Truth in Capability', desc: 'No fabricated clients or artificial social proof.', color: 'border-l-[#ffc900]' },
                  { num: '02', title: 'Visual Discipline', desc: 'Strict color science & clear-space governance.', color: 'border-l-[#ffc900]' },
                  { num: '03', title: 'Technical Speed', desc: 'Sub-second web performance and 60FPS UI.', color: 'border-l-[#ffc900]' },
                  { num: '04', title: 'Senior Execution', desc: 'Founder-driven involvement on every brief.', color: 'border-l-[#ffc900]' }
                ].map((d) => (
                  <div key={d.num} className={`p-3.5 rounded-xl bg-[#f5f3ef] border border-[#080908]/10 ${d.color} border-l-4 shadow-sm`}>
                    <div className="text-[10px] font-mono font-bold text-[#080908]/40 mb-0.5">{d.num}</div>
                    <div className="text-xs font-heading font-bold text-[#080908]">{d.title}</div>
                    <div className="text-[11px] font-sans text-[#080908]/65 mt-0.5">{d.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: APEX Philosophy Showcase Card */}
          <div className="lg:col-span-5 bg-[#080908] text-[#f5f3ef] p-8 sm:p-10 rounded-3xl flex flex-col justify-between space-y-6 shadow-2xl relative overflow-hidden group">

            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ffc900]/20 via-[#ffc900]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5f3ef]/10 text-[10px] font-mono font-bold text-[#ffc900] uppercase tracking-widest border border-white/10">
                <span>APEX PHILOSOPHY</span>
              </div>

              <blockquote className="text-xl sm:text-2xl font-heading font-bold leading-relaxed italic text-[#f5f3ef]/95">
                "We believe visual identity is an active instrument of market authority. When design is precise, strategic, and calm, it commands immediate respect."
              </blockquote>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#f5f3ef]/10 p-2 flex items-center justify-center border border-white/15">
                  <img src="/brand/icon/apex-icon-mark.png" alt="APEX Icon" className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="text-xs font-heading font-bold text-[#f5f3ef] block">APEX Leadership</span>
                  <span className="text-[10px] font-mono text-[#f5f3ef]/50">Strategy · Visual Craft · Digital Ops</span>
                </div>
              </div>

              <span className="text-xs font-mono font-bold text-[#ffc900] uppercase tracking-wider">
                EST. 2026
              </span>
            </div>

          </div>

        </div>

        {/* Action Call to Action (CTA) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#080908] text-[#f5f3ef] text-center space-y-6 relative overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffc900]/10 via-[#ffc900]/10 to-[#ffc900]/10 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-4xl font-heading font-black tracking-tight uppercase">
              READY TO BUILD SOMETHING <span className="apex-gradient-text">REMARKABLE?</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#f5f3ef]/70 font-sans leading-relaxed">
              Let's discuss how our strategic design approach and technical precision can elevate your digital flagship.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full apex-gradient-bg text-[#f5f3ef] text-xs font-heading font-bold uppercase tracking-widest hover:scale-105 shadow-xl shadow-[#ffc900]/30 transition-all duration-300"
              >
                <span>Initiate Project Brief</span>
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#f5f3ef]/10 hover:bg-[#f5f3ef]/20 text-[#f5f3ef] text-xs font-heading font-bold uppercase tracking-widest border border-white/15 transition-all duration-300"
              >
                <span>Explore Capabilities</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

