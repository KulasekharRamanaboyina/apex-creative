import Link from 'next/link';
import { SERVICES_DATA } from '@/lib/services/data';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'Services Architecture — APEX CREATIVE',
  description: 'Explore the 18 specialized capabilities across Brand Strategy, Creative Craft, Digital Architecture, and Performance Growth.'
});

const PILLARS = [
  {
    id: 'BRAND',
    name: 'Brand Strategy & Identity',
    color: 'text-[#ffc900]',
    accentColor: '#ffc900',
    borderGlow: 'hover:border-[#ffc900]/40',
    topBar: 'bg-[#ffc900]',
    badge: 'bg-[#ffc900]/10 text-[#ffc900]'
  },
  {
    id: 'CREATIVE',
    name: 'Creative Craft & Visual Motion',
    color: 'text-[#ffc900]',
    accentColor: '#ffc900',
    borderGlow: 'hover:border-[#ffc900]/40',
    topBar: 'bg-[#ffc900]',
    badge: 'bg-[#ffc900]/10 text-[#ffc900]'
  },
  {
    id: 'DIGITAL',
    name: 'Digital Architecture & Web Apps',
    color: 'text-[#ffc900]',
    accentColor: '#ffc900',
    borderGlow: 'hover:border-[#ffc900]/40',
    topBar: 'bg-[#ffc900]',
    badge: 'bg-[#ffc900]/10 text-[#ffc900]'
  },
  {
    id: 'GROWTH',
    name: 'Performance Growth & Marketing',
    color: 'text-[#ffc900]',
    accentColor: '#ffc900',
    borderGlow: 'hover:border-[#ffc900]/40',
    topBar: 'bg-[#ffc900]',
    badge: 'bg-[#ffc900]/10 text-[#ffc900]'
  }
];

export default function ServicesOverviewPage() {
  return (
    <div className="bg-[#f5f3ef] text-[#080908] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ffc900] block mb-3">
            CAPABILITIES ARCHITECTURE
          </span>
          <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight uppercase leading-[0.95] mb-6">
            OUR 18 SPECIALIZED <span className="apex-gradient-text">CAPABILITIES</span>
          </h1>
          <p className="text-lg text-[#080908]/75 font-sans leading-relaxed">
            We structure our capabilities across four core pillars: Brand, Creative, Digital, and Growth. Every service is a dedicated practice engineered to command market authority.
          </p>
        </div>

        {/* Quick Pillar Jump Navigation */}
        <div className="mb-16 pb-6 border-b border-[#080908]/10">
          <span className="mb-3 block text-xs font-mono font-bold text-[#080908]/40 uppercase">
            Pillars:
          </span>
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-4">
            {PILLARS.map((pillar) => (
              <a
                key={pillar.id}
                href={`#${pillar.id.toLowerCase()}`}
                className="services-pillar-capsule flex min-h-11 min-w-0 items-center justify-center rounded-full bg-[#f5f3ef] px-3 py-2 text-center text-[10px] font-heading font-bold uppercase leading-tight tracking-wide text-[#080908] border border-[#080908]/10 hover:bg-[#080908] hover:text-[#f5f3ef] hover:border-[#080908] transition-all shadow-sm sm:px-4 sm:text-xs"
              >
                {pillar.name}
              </a>
            ))}
          </div>
        </div>

        {/* Pillars Architecture */}
        <div className="space-y-24 mb-24">
          {PILLARS.map((pillar) => {
            const pillarServices = SERVICES_DATA.filter(s => s.category === pillar.id);

            return (
              <div key={pillar.id} id={pillar.id.toLowerCase()} className="space-y-8 scroll-mt-28">
                <div className="flex items-center gap-3 pb-4 border-b-2 border-[#080908]/10">
                  <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#080908]">
                    {pillar.name}
                  </h2>
                  <span className="ml-auto text-xs font-mono font-bold text-[#080908]/40 uppercase">
                    {pillarServices.length} MODULES
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pillarServices.map((service, idx) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className={`p-7 sm:p-8 rounded-3xl bg-[#f5f3ef] border border-[#080908]/10 shadow-sm hover:shadow-2xl ${pillar.borderGlow} hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden`}
                    >
                      {/* Top Laser Accent Line */}
                      <div className={`absolute top-0 left-0 right-0 h-[2.5px] opacity-0 group-hover:opacity-100 ${pillar.topBar} transition-opacity duration-300`} />

                      <div>
                        {/* Module Indicator & Category */}
                        <div className="flex items-center justify-between mb-4">
                          <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-md ${pillar.badge} uppercase tracking-wider`}>
                            MODULE 0{idx + 1}
                          </span>
                          <span className="text-[11px] font-mono font-bold text-[#080908]/40 group-hover:text-[#ffc900] transition-all transform group-hover:translate-x-1">
                            EXPLORE →
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-heading font-black tracking-tight text-[#ffc900] transition-colors mb-3">
                          {service.title}
                        </h3>

                        {/* Short Description */}
                        <p className="text-xs sm:text-sm text-[#080908]/70 font-sans leading-relaxed mb-6">
                          {service.shortDescription}
                        </p>

                        {/* Top Capabilities Tags */}
                        {service.capabilities && service.capabilities.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {service.capabilities.slice(0, 2).map((cap, i) => (
                              <span
                                key={i}
                                className="text-[10px] font-mono px-2 py-1 rounded bg-[#080908]/5 text-[#080908]/65 border border-[#080908]/5"
                              >
                                {cap}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Card Footer */}
                      <div className="pt-4 border-t border-[#080908]/10 flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#080908]/50 group-hover:text-[#080908] transition-colors">
                          FULL SPECIFICATION
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#ffc900] group-hover:text-[#ffc900] transition-colors">
                          <span>View Details</span>
                          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center bg-[#080908] text-[#f5f3ef] p-12 rounded-3xl space-y-6">
          <h3 className="text-3xl font-heading font-black">NEED A TAILORED CAPABILITY COMBINATION?</h3>
          <p className="text-sm text-[#f5f3ef]/70 max-w-xl mx-auto">
            We build custom capability suites tailored to your exact brand and growth goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full apex-gradient-bg text-[#f5f3ef] font-heading font-bold text-xs uppercase tracking-wider hover:scale-105 transition-transform"
          >
            <span>Initiate Project Brief</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
