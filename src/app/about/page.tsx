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

        {/* Full-screen framed About Hero */}
        <section aria-labelledby="about-hero-title" className="mx-auto mb-16 flex min-h-[calc(100dvh-7rem)] w-full max-w-5xl flex-col justify-center px-6 py-12 text-center sm:mb-20 sm:min-h-[calc(100dvh-8rem)] sm:px-12 sm:py-16">
          <h1 id="about-hero-title" className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight uppercase leading-[0.92] text-[#080908] mb-6">
            A NEW CREATIVE AGENCY <br className="hidden sm:inline" />
            BUILT TO <span className="apex-gradient-text">THINK DIFFERENTLY.</span>
          </h1>

          <p className="text-base sm:text-xl text-[#080908]/80 font-sans leading-relaxed max-w-3xl mx-auto">
            APEX CREATIVE is a next-generation design and digital marketing agency founded on a simple principle: brand strategy, visual craft, 3D direction, and digital growth belong under one unified roof.
          </p>
        </section>

        {/* Main Content & Quote Alignment Grid */}
        <div className="about-advantage-section grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 items-stretch">

          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#080908] block">
                OUR POSITIONAL ADVANTAGE
              </span>
              <h2 className="about-advantage-heading text-2xl sm:text-3xl font-heading font-black text-[#ffc900]">
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
                  <div key={d.num} className={`about-directive-card p-3.5 rounded-xl bg-[#f5f3ef] border border-[#080908]/10 ${d.color} border-l-4 shadow-sm`}>
                    <div className="text-[10px] font-mono font-bold text-[#080908]/40 mb-0.5">{d.num}</div>
                    <div className="text-xs font-heading font-bold text-[#080908]">{d.title}</div>
                    <div className="text-[11px] font-sans text-[#080908]/65 mt-0.5">{d.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Open APEX Philosophy Quote */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-8 border-l-2 border-[#ffc900] py-2 pl-6 sm:pl-8">

            <div className="space-y-5">
              <span className="text-[10px] font-mono font-bold text-[#080908] uppercase tracking-[0.2em]">
                APEX PHILOSOPHY
              </span>

              <blockquote className="text-xl sm:text-2xl font-heading font-bold leading-relaxed italic text-[#080908]">
                "We believe visual identity is an active instrument of market authority. When design is precise, strategic, and calm, it commands immediate respect."
              </blockquote>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div>
                  <span className="about-philosophy-leadership text-xs font-heading font-bold text-[#ffc900] block">APEX Leadership</span>
                  <span className="text-[10px] font-mono text-[#080908]/55">Strategy · Visual Craft · Digital Ops</span>
                </div>
              </div>

              <span className="text-xs font-mono font-bold text-[#080908] uppercase tracking-wider">
                EST. 2026
              </span>
            </div>

          </div>

        </div>

        {/* Action Call to Action (CTA) */}
        <div className="py-8 text-center space-y-6 sm:py-12">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-4xl font-heading font-black tracking-tight uppercase text-[#080908]">
              READY TO BUILD SOMETHING <span className="apex-gradient-text">REMARKABLE?</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#080908]/70 font-sans leading-relaxed">
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#080908]/5 hover:bg-[#080908]/10 text-[#080908] text-xs font-heading font-bold uppercase tracking-widest border border-[#080908]/15 transition-all duration-300"
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

