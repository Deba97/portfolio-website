"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-4 left-0 right-0 z-50 w-full mx-auto px-4 transition-all duration-300 ${
      scrolled ? 'max-w-4xl' : 'max-w-5xl'
    }`}>
      <div className={`mx-auto rounded-full border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-md transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-3'
      }`}>
        <nav className="flex items-center justify-center space-x-1 sm:space-x-6 md:space-x-8 px-4">
          <Link 
            href="/#projects" 
            className="px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-foreground/80 text-foreground/60 relative group"
          >
            Projects
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link 
            href="/#about" 
            className="px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-foreground/80 text-foreground/60 relative group"
          >
            About
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link 
            href="/#contact" 
            className="px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-foreground/80 text-foreground/60 relative group"
          >
            Contact
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Button asChild variant="outline" size="sm" className="transition-transform hover:scale-105">
            <Link href="/resume">Resume</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
} 