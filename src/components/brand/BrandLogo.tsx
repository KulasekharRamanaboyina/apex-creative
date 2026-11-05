import React from 'react';

export interface BrandLogoProps {
  variant?: 'transparent' | 'dark' | 'primary';
  width?: number; // width in pixels
  className?: string;
  showClearSpaceGrid?: boolean;
  alt?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'transparent',
  width = 180,
  className = '',
  showClearSpaceGrid = false,
  alt = 'APEX CREATIVE — Ideas · Visuals · Impact'
}) => {
  // Enforce minimum 120px rule per brand governance specification
  const enforcedWidth = Math.max(120, width);

  const getLogoSrc = () => {
    switch (variant) {
      case 'dark':
        return '/brand/logo/apex-logo-dark.png';
      case 'primary':
        return '/brand/logo/apex-logo-primary.png';
      case 'transparent':
      default:
        return '/brand/logo/apex-logo-transparent.png';
    }
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center transition-transform duration-300 ${className}`}
      style={{
        // Clear space: at minimum preserve whitespace around logo equal to height of X in APEX (~18% of logo height)
        padding: `${Math.round(enforcedWidth * 0.08)}px ${Math.round(enforcedWidth * 0.12)}px`
      }}
      title="Official APEX CREATIVE Primary Logo Lockup"
    >
      {showClearSpaceGrid && (
        <div
          className="absolute inset-0 border border-dashed border-[#ffc900]/40 bg-[#ffc900]/5 pointer-events-none rounded transition-all"
          style={{ padding: `${Math.round(enforcedWidth * 0.08)}px` }}
        >
          <span className="absolute top-0.5 right-1 text-[9px] font-mono text-[#ffc900] uppercase tracking-wider font-semibold">
            Clear Space 1X Height
          </span>
        </div>
      )}
      <img
        src={getLogoSrc()}
        alt={alt}
        style={{ width: `${enforcedWidth}px`, height: 'auto' }}
        className="max-w-full h-auto object-contain block select-none pointer-events-auto"
        loading="eager"
      />
    </div>
  );
};
