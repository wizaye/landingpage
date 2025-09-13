import React from 'react';

interface AnimatedShinyTextProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedShinyText: React.FC<AnimatedShinyTextProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`inline-block px-3 py-1 text-sm font-medium bg-gradient-to-r from-gray-100 to-gray-200 dark:from-neutral-800 dark:to-neutral-700 rounded-full border border-gray-200 dark:border-neutral-600 text-gray-700 dark:text-neutral-300 ${className}`}>
      {children}
    </div>
  );
};