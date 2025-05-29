import React from 'react';
import { AnimatedElement } from '../utils/AnimatedElement';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle,
  backgroundImage = 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
}) => {
  return (
    <div 
      className="relative h-[40vh] min-h-[300px] flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container text-center text-white">
        <AnimatedElement>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            {title}
          </h1>
        </AnimatedElement>
        
        {subtitle && (
          <AnimatedElement delay={200}>
            <p className="text-xl md:text-2xl font-display max-w-2xl mx-auto">
              {subtitle}
            </p>
          </AnimatedElement>
        )}
      </div>
    </div>
  );
};