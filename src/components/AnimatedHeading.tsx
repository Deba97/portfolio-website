"use client";

import { useRef, useEffect, useState, ReactNode } from 'react';

interface AnimatedHeadingProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
  subtitleClassName?: string;
}

export function AnimatedHeading({ 
  children, 
  subtitle, 
  className = "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4",
  subtitleClassName = "mx-auto max-w-[700px] text-muted-foreground md:text-xl"
}: AnimatedHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;
    
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(heading);
      }
    }, { threshold: 0.2 });
    
    observer.observe(heading);
    
    return () => {
      if (heading) observer.unobserve(heading);
    };
  }, []);
  
  return (
    <div className="text-center mb-12">
      <h2 
        ref={headingRef}
        className={`${className} opacity-0 transform translate-y-6 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : ''
        }`}
      >
        {children}
      </h2>
      
      {subtitle && (
        <p 
          ref={subtitleRef}
          className={`${subtitleClassName} opacity-0 transform translate-y-4 transition-all duration-700 delay-150 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
} 