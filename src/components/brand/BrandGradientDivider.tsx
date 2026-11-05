import React from 'react';

export interface BrandGradientDividerProps {
  height?: string;
  className?: string;
  animated?: boolean;
}

export const BrandGradientDivider: React.FC<BrandGradientDividerProps> = ({
  height = 'h-[2px]',
  className = '',
  animated = false
}) => {
  return (
    <div className={`w-full ${height} ${className} relative overflow-hidden`}>
      <div
        className={`w-full h-full ${animated ? 'apex-animated-gradient' : 'bg-gradient-to-r from-[#ffc900] via-[#ffc900] via-[#ffc900] to-[#ffc900]'}`}
      />
    </div>
  );
};
