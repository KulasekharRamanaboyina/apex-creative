import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'Privacy Policy | APEX CREATIVE',
  description: 'APEX CREATIVE Privacy Policy and Data Governance Statement.'
});

export default function PrivacyPage() {
  return (
    <div className="bg-[#f5f3ef] text-[#080908] pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-4xl font-heading font-black">PRIVACY POLICY</h1>
        <p className="text-xs font-mono text-[#080908]/50">Effective Date: October 2026</p>

        <div className="prose font-sans text-sm text-[#080908]/80 space-y-4">
          <p>
            At APEX CREATIVE, we prioritize data privacy and transparency. This Privacy Policy outlines how we collect, use, and protect information submitted via our digital flagship website.
          </p>
          <h2 className="text-lg font-heading font-bold text-[#080908] pt-4">1. Data Collection</h2>
          <p>
            We collect personal information (such as your name, corporate email address, and project brief details) only when voluntarily submitted via our project inquiry forms.
          </p>
          <h2 className="text-lg font-heading font-bold text-[#080908] pt-4">2. Use of Information</h2>
          <p>
            Information collected is strictly used to evaluate project inquiries, respond to corporate briefs, and provide requested services. We never sell or transfer your data to third-party data brokers.
          </p>
          <h2 className="text-lg font-heading font-bold text-[#080908] pt-4">3. Security Governance</h2>
          <p>
            We implement industry-standard encryption protocols and administrative safeguards to prevent unauthorized access or disclosure of confidential project briefs.
          </p>
        </div>
      </div>
    </div>
  );
}
