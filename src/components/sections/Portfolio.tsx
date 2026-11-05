import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'Brand Identity' | '3D & Visual Motion' | 'Digital Experience' | 'Creative Direction';
  year: string;
  tagline: string;
  image: string;
  gradient: string;
  stats: string;
  description: string;
  deliverables: string[];
  impactMetrics: { label: string; value: string }[];
}

const PROJECTS: Project[] = [
  {
    id: 'hyperion',
    title: 'Hyperion Automotive',
    client: 'Hyperion Mobility Corp',
    category: 'Brand Identity',
    year: '2026',
    tagline: 'Next-Gen Electric Mobility Visual Identity & Global Launch System',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    gradient: 'from-[#ffc900] to-[#ffc900]',
    stats: '+340% Brand Recall Rate',
    description: 'Constructed an end-to-end brand identity system for Hyperion Electric, integrating aerodynamic geometry, signature luminous gradient accents, and precise brand governance guidelines across 14 global markets.',
    deliverables: ['Visual Identity Guidelines', 'Dynamic 3D Motion Package', 'Digital Flagship Website', 'Brand Governance Portal'],
    impactMetrics: [
      { label: 'Global Media Impressions', value: '42M+' },
      { label: 'Investor Engagement Rate', value: '88%' },
      { label: 'Brand Compliance Rating', value: '100%' }
    ]
  },
  {
    id: 'aura-sound',
    title: 'Aura Acoustic Flagship',
    client: 'Aura Labs Zurich',
    category: 'Digital Experience',
    year: '2025',
    tagline: 'Spatial Audio Interface & Premium Dark Theme Visual Experience',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    gradient: 'from-[#ffc900] to-[#ffc900]',
    stats: '1.2M Digital Engagements',
    description: 'Designed a dark-mode first web experience and spatial audio interactive showcase. Combined tactile sound physics with crisp Montserrat typography and fluid WebGL interactions.',
    deliverables: ['Web Design & Motion', 'Spatial Audio Configurator', '3D Soundwave Visualizer', 'Design Token Architecture'],
    impactMetrics: [
      { label: 'Conversion Rate Increase', value: '+142%' },
      { label: 'Average Session Duration', value: '4m 32s' },
      { label: 'Design Industry Awards', value: '6 Gold' }
    ]
  },
  {
    id: 'vortex-fintech',
    title: 'Vortex Quantum Trading',
    client: 'Vortex Global',
    category: 'Creative Direction',
    year: '2026',
    tagline: 'High-Frequency Financial Intelligence Platform & Brand Rebrand',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
    gradient: 'from-[#ffc900] to-[#ffc900]',
    stats: '$12B Transaction Volume',
    description: 'Re-engineered Vortex Financial from a traditional institution into a bold, digital-first fintech powerhouse. Established ultra-precise UI typography, teal metrics accents, and high-frequency data vis.',
    deliverables: ['Enterprise Brand Rebrand', 'Trading Interface Design', 'Motion Graphics Guidelines', 'Design System Library'],
    impactMetrics: [
      { label: 'Institutional Pre-Orders', value: '$2.4B' },
      { label: 'User Satisfaction', value: '99.1%' },
      { label: 'Latency Reduction', value: '40ms' }
    ]
  },
  {
    id: 'neon-horizon',
    title: 'Neon Horizon Campaign',
    client: 'Sony Music Interactive',
    category: '3D & Visual Motion',
    year: '2025',
    tagline: 'Immersive Cyberpunk Key Visuals & Global Stadium Tour Graphics',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
    gradient: 'from-[#ffc900] to-[#ffc900]',
    stats: '18 Stadium Sold Out',
    description: 'Created dynamic stadium visuals, 3D volumetric light graphics, and multi-screen synchronized concert experiences using APEX signature gradient color science.',
    deliverables: ['3D Motion Graphics', 'Volumetric Shader Effects', 'Key Visual Art Direction', 'Social Media Assets'],
    impactMetrics: [
      { label: 'Live Spectators', value: '450,000+' },
      { label: 'Social Video Views', value: '98M' },
      { label: 'Ticket Sales Speed', value: '<4 Mins' }
    ]
  }
];

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Brand Identity', '3D & Visual Motion', 'Digital Experience', 'Creative Direction'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="py-24 bg-[#f5f3ef] text-[#080908] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#080908]/5 text-xs font-mono font-bold uppercase tracking-widest text-[#ffc900] mb-4">
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-[#080908]">
              HIGH-IMPACT <span className="apex-gradient-text">SHOWCASE</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#080908]/5 border border-[#080908]/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-heading font-semibold transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-[#080908] text-[#f5f3ef] shadow-md'
                    : 'text-[#080908]/70 hover:text-[#080908] hover:bg-[#080908]/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-[#f5f3ef] rounded-3xl overflow-hidden border border-[#080908]/10 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Box */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#080908]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                  <span className="px-3 py-1 rounded-full bg-[#080908]/80 backdrop-blur-md text-[#f5f3ef] text-[10px] font-mono uppercase tracking-wider font-semibold">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#f5f3ef]/90 backdrop-blur-md text-[#080908] text-[10px] font-mono font-bold">
                    {project.year}
                  </span>
                </div>

                {/* Bottom Impact Metric Tag */}
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="px-3 py-1.5 rounded-xl bg-[#080908]/90 backdrop-blur-md text-[#f5f3ef] text-xs font-mono font-bold flex items-center gap-1.5 border border-white/10">
                    {project.stats}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-xs font-mono text-[#080908]/50 uppercase tracking-widest block mb-1">
                    {project.client}
                  </span>
                  <h3 className="text-2xl font-heading font-black text-[#080908] group-hover:text-[#ffc900] transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                  </h3>
                  <p className="text-sm text-[#080908]/70 mt-2 line-clamp-2">
                    {project.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#080908]/10 flex items-center justify-between text-xs font-heading font-bold text-[#ffc900]">
                  <span>INSPECT CASE STUDY</span>
                  <span className="w-2 h-2 rounded-full bg-[#ffc900] group-hover:animate-ping" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#080908]/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#f5f3ef] text-[#080908] w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl border border-[#080908]/20 flex flex-col relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#080908] text-[#f5f3ef] flex items-center justify-center hover:bg-[#ffc900] hover:text-[#080908] transition-colors"
              >
                <span className="text-base font-bold leading-none">✕</span>
              </button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto custom-scrollbar p-6 sm:p-10 space-y-8">

                {/* Image Banner */}
                <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-xl">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080908] via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-6 left-6 right-6 text-[#f5f3ef]">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#ffc900] font-bold block mb-1">
                      {selectedProject.category} · {selectedProject.client}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-heading font-black">
                      {selectedProject.title}
                    </h2>
                  </div>
                </div>

                {/* Case Study Description */}
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#080908]/50 font-bold mb-2">Executive Summary</h3>
                  <p className="text-base text-[#080908]/80 leading-relaxed font-sans font-normal">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Deliverables Grid */}
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#080908]/50 font-bold mb-4">Engineered Deliverables</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.deliverables.map((d, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-[#080908]/5 border border-[#080908]/10 flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffc900] shrink-0" />
                        <span className="text-xs font-heading font-semibold text-[#080908]">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact Metrics */}
                <div className="p-6 rounded-2xl bg-[#080908] text-[#f5f3ef]">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#ffc900] font-bold mb-4">Quantified Impact</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {selectedProject.impactMetrics.map((m, i) => (
                      <div key={i} className="text-center">
                        <span className="text-2xl sm:text-3xl font-heading font-black text-[#f5f3ef] block">{m.value}</span>
                        <span className="text-[11px] font-mono text-[#f5f3ef]/60 mt-1 block">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

