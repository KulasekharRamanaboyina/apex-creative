import React, { useState } from 'react';

const SERVICES = [
  {
    id: 'governance',
    num: '01',
    title: 'Brand Strategy & Governance Systems',
    tagline: 'Single Source of Truth Identity Engineering',
    desc: 'We construct unshakeable visual identity systems, strict clear-space governance, color palette science, and automated brand guideline portals for global brands.',
    points: ['Visual Identity Master Blueprint', 'Brand Asset Governance Portals', 'Hex Science & Gradient Systems', 'Clear-Space & Minimum Size Protocols']
  },
  {
    id: 'motion',
    num: '02',
    title: 'Dynamic Visuals & 3D Motion Design',
    tagline: 'Kinetic Energy & High-Impact Visual Motion',
    desc: 'Transforming static assets into dynamic visual experiences. We design 3D product renders, signature gradient particle loops, and stage visual packages.',
    points: ['3D Volumetric Visualizers', 'Signature Gradient Motion Loops', 'Key Visual Art Direction', 'High-Impact Campaign Motion']
  },
  {
    id: 'digital',
    num: '03',
    title: 'Next-Gen Digital Flagship Web Apps',
    tagline: 'State-of-the-Art Web Architecture & UI/UX',
    desc: 'Crafting bespoke web applications that wow visitors at first glance. Fluid micro-interactions, responsive design token systems, and lightning-fast speed.',
    points: ['High-Performance Web Applications', 'Design System Token Libraries', 'Micro-Animation & Shader FX', 'Accessibility & SEO Optimization']
  },
  {
    id: 'campaign',
    num: '04',
    title: 'Integrated Campaign Architecture',
    tagline: 'Multi-Channel Brand Execution & Product Launch',
    desc: 'End-to-end execution for high-stakes product launches. Synchronized across web, social, broadcast, and physical installations.',
    points: ['Product Launch Strategy', 'Multi-Channel Asset Pipelines', 'Performance Visual Direction', 'Global Brand Deployment']
  }
];

export const Services: React.FC<{ onStartProject: () => void }> = ({ onStartProject }) => {
  const [activeTab, setActiveTab] = useState<string>('governance');

  const selectedService = SERVICES.find(s => s.id === activeTab) || SERVICES[0];

  return (
    <section id="services" className="py-24 bg-[#080908] text-[#f5f3ef] relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#ffc900]/10 via-[#ffc900]/10 to-[#ffc900]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5f3ef]/10 text-xs font-mono font-bold uppercase tracking-widest text-[#ffc900] mb-4">
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight">
            ENGINEERED <span className="apex-gradient-text">CAPABILITIES</span>
          </h2>
          <p className="mt-4 text-base text-[#f5f3ef]/70">
            Precision design, dynamic motion, and unshakeable brand governance built for ambitious enterprises.
          </p>
        </div>

        {/* Interactive Capability Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Side: Service Selector Cards */}
          <div className="lg:col-span-5 space-y-4">
            {SERVICES.map((srv) => {
              const isActive = activeTab === srv.id;
              return (
                <div
                  key={srv.id}
                  onClick={() => setActiveTab(srv.id)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-4 ${
                    isActive
                      ? 'bg-[#f5f3ef]/10 border-[#ffc900] shadow-xl shadow-[#ffc900]/10'
                      : 'bg-[#f5f3ef]/[0.03] border-white/10 hover:bg-[#f5f3ef]/[0.06] hover:border-white/20'
                  }`}
                >
                  <div className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold ${isActive ? 'bg-[#ffc900] text-[#080908]' : 'bg-[#f5f3ef]/10 text-[#f5f3ef]/70'}`}>
                    {srv.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-[#f5f3ef]">{srv.title}</h3>
                    <p className="text-xs font-mono text-[#f5f3ef]/60 mt-1">{srv.tagline}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Detailed Service View */}
          <div className="lg:col-span-7 bg-[#f5f3ef]/[0.05] border border-white/15 rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden backdrop-blur-xl">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffc900]/20 text-[#ffc900] text-xs font-mono font-bold">
                Capability Blueprint
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#f5f3ef]">
                {selectedService.title}
              </h3>

              <p className="text-base text-[#f5f3ef]/80 leading-relaxed font-sans font-normal">
                {selectedService.desc}
              </p>

              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#ffc900] font-bold mb-4">Core Deliverable Modules</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#f5f3ef]/[0.04] border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ffc900] shrink-0" />
                      <span className="text-xs font-heading font-semibold text-[#f5f3ef]/90">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-[#f5f3ef]/50">APEX CREATIVE Precision Standard</span>
              <button
                onClick={onStartProject}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#ffc900] via-[#ffc900] via-[#ffc900] to-[#ffc900] text-[#f5f3ef] text-xs font-heading font-bold uppercase tracking-wider hover:scale-105 transition-transform shadow-lg shadow-[#ffc900]/20"
              >
                <span>Initiate Capability Brief</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

