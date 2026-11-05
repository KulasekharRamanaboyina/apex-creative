import React from 'react';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    quote: "APEX CREATIVE completely elevated our enterprise brand. Their strict adherence to brand governance combined with dynamic motion design produced an immediate 340% increase in brand recall.",
    author: "Elena Rostova",
    role: "Chief Marketing Officer",
    company: "Hyperion Automotive",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Working with APEX was a revelation. Their signature gradient system and Montserrat display typography gave our quantum fintech platform authority and kinetic energy.",
    author: "Marcus Vance",
    role: "Founder & CEO",
    company: "Vortex Financial",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The precision of their asset mapping and digital flagship web application set a new benchmark for luxury sound audio design. 100% compliance across all 14 markets.",
    author: "Dr. Adrian Thorne",
    role: "Head of Product Design",
    company: "Aura Labs Zurich",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#f5f3ef] text-[#080908] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#080908]/5 text-xs font-mono font-bold uppercase tracking-widest text-[#ffc900] mb-4">
            <span>Enterprise Impact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-[#080908]">
            TRUSTED BY <span className="apex-gradient-text">INDUSTRY LEADERS</span>
          </h2>
          <p className="mt-4 text-base text-[#080908]/70">
            Hear from executive stakeholders who transformed their global brand presence with APEX CREATIVE.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#f5f3ef] rounded-3xl p-8 border border-[#080908]/10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono font-bold tracking-widest text-[#ffc900] mb-6">
                  ★★★★★ 5.0
                </div>

                <p className="text-sm text-[#080908]/80 font-sans leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#080908]/10 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#ffc900]"
                />
                <div>
                  <h4 className="text-sm font-heading font-bold text-[#080908]">{t.author}</h4>
                  <p className="text-xs text-[#080908]/60 font-sans">{t.role}</p>
                  <span className="text-[11px] font-mono text-[#ffc900] font-semibold">{t.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

