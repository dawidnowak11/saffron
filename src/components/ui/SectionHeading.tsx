import React from 'react';
import clsx from 'clsx';
import { AnimatedElement } from '../utils/AnimatedElement';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  className
}) => {
  return (
    <div className={clsx(
      'mb-12', 
      centered && 'text-center',
      className
    )}>
      <AnimatedElement>
        <h2 className="section-heading">{title}</h2>
      </AnimatedElement>
      
      {subtitle && (
        <AnimatedElement delay={200}>
          <p className={clsx(
            'section-subheading',
            centered ? 'mx-auto text-center' : 'mx-0 text-left'
          )}>
            {subtitle}
          </p>
        </AnimatedElement>
      )}
    </div>
  );
};