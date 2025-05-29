import React, { useEffect, useRef, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({ 
  children, 
  className, 
  delay = 0 
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView && elementRef.current) {
      setTimeout(() => {
        if (elementRef.current) {
          elementRef.current.classList.add('visible');
        }
      }, delay);
    }
  }, [inView, delay]);

  return (
    <div 
      ref={(node) => {
        // Assign the ref to both the intersection observer and our local ref
        if (node) {
          ref(node);
          elementRef.current = node;
        }
      }}
      className={clsx('fade-in', className)}
    >
      {children}
    </div>
  );
};