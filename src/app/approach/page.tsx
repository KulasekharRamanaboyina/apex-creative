import Link from 'next/link';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'The APEX Approach — Our 5-Stage Methodology',
  description: 'Explore the 5-stage APEX engineered methodology: Discover, Define, Design, Deploy, and Optimize.'
});

const STEPS = [
  {
    number: '01',
    title: 'DISCOVER',
    subtitle: 'Understand the business & market gap',
    desc: 'We begin by conducting a comprehensive audit of your market landscape, audience signals, competitor visual gaps, and business objectives. We extract core invariants that will define the visual and strategic trajectory.',
    points: ['Market Landscape Audit', 'Competitor Visual Gap Analysis', 'Audience Intent Mapping', 'Brand Positioning Blueprint']
  },
  {
    number: '02',
    title: 'DEFINE',
    subtitle: 'Find the strategic opportunity',
    desc: 'We translate raw research into an unshakeable strategic direction. Defining your core narrative pillars, primary typography hierarchy, color science parameters, and digital channel focus.',
    points: ['Core Value Proposition', 'Signature Color Science Mapping', 'Typography Hierarchy System', 'Channel Distribution Strategy']
  },
  {
    number: '03',
    title: 'DESIGN',
    subtitle: 'Create the precise visual direction',
    desc: 'This is where strategy becomes tangible. We engineer primary logo lockups, 3D motion assets, responsive UI components, and editorial content graphics with disciplined clear-space governance.',
    points: ['Primary & Secondary Logo Architecture', 'UI/UX Component Tokens', '3D Motion & Video Ident Renders', 'Clear-Space Protocol Enforcements']
  },
  {
    number: '04',
    title: 'DEPLOY',
    subtitle: 'Bring the idea into the digital world',
    desc: 'We build high-performance web flagships using Next.js App Router, deploy centralized brand governance portals, and configure technical analytics tags for launch readiness.',
    points: ['Production Next.js & React Build', 'Brand Asset Directory Deployment', 'GA4 & Technical Tag Infrastructure', 'Sub-Second Page Load Tuning']
  },
  {
    number: '05',
    title: 'OPTIMIZE',
    subtitle: 'Learn, measure, and continuously improve',
    desc: 'Deployment is not the finish line. We monitor audience interaction signals, test ad creative variants, and optimize search performance to ensure sustained digital growth.',
    points: ['Conversion Rate Creative Optimization', 'Organic SEO Keyword Expansion', 'Continuous Creative Testing', 'Executive Impact Analytics']
  }
];

export default function ApproachPage() {
  return (
    <div className="bg-[#f5f3ef] text-[#080908] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ffc900] block mb-3">
            METHODOLOGY
          </span>
          <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight uppercase leading-[0.95] mb-6">
            THE APEX <span className="apex-gradient-text">APPROACH</span>
          </h1>
          <p className="text-lg text-[#080908]/75 font-sans leading-relaxed">
            A 5-stage engineered framework designed to eliminate guesswork, enforce visual discipline, and deliver measurable growth.
          </p>
        </div>

        {/* 5 Stages Vertical Sequence */}
        <div className="space-y-12 mb-24">
          {STEPS.map((step) => {
            return (
              <div
                key={step.number}
                className="bg-[#f5f3ef] rounded-3xl p-8 sm:p-12 border border-[#080908]/10 shadow-lg hover:shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-4 space-y-4">
                  <span className="text-4xl sm:text-5xl font-heading font-black text-[#ffc900] block">
                    {step.number}
                  </span>

                  <h2 className="text-2xl font-heading font-black text-[#080908]">
                    {step.title}
                  </h2>
                  <p className="text-xs font-mono text-[#ffc900] font-semibold uppercase tracking-wider">
                    {step.subtitle}
                  </p>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  <p className="text-base text-[#080908]/80 font-sans leading-relaxed">
                    {step.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {step.points.map((pt, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#080908]/5 border border-[#080908]/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffc900] shrink-0" />
                        <span className="text-xs font-heading font-semibold text-[#080908]">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center bg-[#080908] text-[#f5f3ef] p-12 rounded-3xl space-y-6">
          <h3 className="text-3xl font-heading font-black">READY TO APPLY THE APEX METHODOLOGY?</h3>
          <p className="text-sm text-[#f5f3ef]/70 max-w-xl mx-auto">
            Let's discuss how our 5-stage framework can transform your brand's digital presence.
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
