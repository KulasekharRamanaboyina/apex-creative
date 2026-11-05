import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'Terms of Service | APEX CREATIVE',
  description: 'APEX CREATIVE Terms of Service and Website Usage Terms.'
});

export default function TermsPage() {
  return (
    <div className="bg-[#f5f3ef] text-[#080908] pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-4xl font-heading font-black">TERMS OF SERVICE</h1>
        <p className="text-xs font-mono text-[#080908]/50">Effective Date: October 2026</p>

        <div className="prose font-sans text-sm text-[#080908]/80 space-y-4">
          <p>
            By accessing or using the APEX CREATIVE website, you agree to comply with and be bound by the following terms of service.
          </p>
          <h2 className="text-lg font-heading font-bold text-[#080908] pt-4">1. Intellectual Property</h2>
          <p>
            All brand identity elements, signature color systems, typography layouts, geometric lockups, and creative lab concepts displayed on this website are the exclusive intellectual property of APEX CREATIVE.
          </p>
          <h2 className="text-lg font-heading font-bold text-[#080908] pt-4">2. Permitted Use</h2>
          <p>
            You may inspect and download official brand assets from our public registry for verification and evaluation purposes. Unauthorized modification or reproduction of official logos is strictly prohibited under brand governance rules.
          </p>
        </div>
      </div>
    </div>
  );
}
