import React from 'react';

export interface BrandTaglinePillProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
}

export const BrandTaglinePill: React.FC<BrandTaglinePillProps> = ({
  className = '',
  size = 'md',
  theme = 'light'
}) => {
  const sizeClasses = {
    sm: 'text-[10px] tracking-[0.25em] px-3 py-1 gap-2',
    md: 'text-xs tracking-[0.3em] px-4 py-1.5 gap-2.5',
    lg: 'text-sm tracking-[0.35em] px-6 py-2 gap-3'
  };

  const themeClasses = {
    light: 'bg-[#080908]/[0.03] text-[#080908] border border-[#080908]/10',
    dark: 'bg-[#f5f3ef]/[0.06] text-[#f5f3ef] border border-white/15'
  };

  return (
    <div className={`inline-flex items-center justify-center font-heading font-bold uppercase rounded-full select-none transition-all duration-300 ${sizeClasses[size]} ${themeClasses[theme]} ${className}`}>
      <span>IDEAS</span>
      <span className="w-1.5 h-1.5 rounded-full bg-[#ffc900] inline-block shadow-sm" />
      <span>VISUALS</span>
      <span className="w-1.5 h-1.5 rounded-full bg-[#ffc900] inline-block shadow-sm" />
      <span>IMPACT</span>
    </div>
  );
};
