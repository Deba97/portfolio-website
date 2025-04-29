"use client";

import { useRef, useEffect, useState, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  threshold?: number;
  preserveLayout?: boolean;
}

export function AnimatedSection({ 
  children, 
  className = "", 
  direction = 'up',
  delay = 0,
  threshold = 0.1,
  preserveLayout = false
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Map directions to transform values - using smaller translations
  const transformMap = {
    up: 'translate-y-6',
    down: '-translate-y-6',
    left: 'translate-x-6',
    right: '-translate-x-6'
  };
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(section);
      }
    }, { threshold });
    
    observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, [threshold]);
  
  // If preserveLayout is true, we'll use a different approach to animations
  if (preserveLayout) {
    return (
      <div 
        ref={sectionRef}
        className={`${className} w-full h-full`}
      >
        <div 
          className={`w-full h-full opacity-0 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100' : ''
          }`}
          style={{ transitionDelay: `${delay}ms` }}
        >
          {children}
        </div>
      </div>
    );
  }
  
  return (
    <div 
      ref={sectionRef}
      className={`${className} opacity-0 transform ${transformMap[direction]} transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : ''
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
} 