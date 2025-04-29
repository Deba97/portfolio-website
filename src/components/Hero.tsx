"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32 border-b border-border/10">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 
              className={`text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight opacity-0 ${
                isLoaded ? 'animate-fadeIn opacity-100' : ''
              }`}
              style={{ animationDelay: '0.1s' }}
            >
              Hi, I'm Nosadeba Obaseki
            </h1>
            <p 
              className={`text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 ${
                isLoaded ? 'animate-fadeIn opacity-100' : ''
              }`}
              style={{ animationDelay: '0.3s' }}
            >
              Full-Stack Developer passionate about building beautiful and functional applications.
            </p>
            <div 
              className={`flex flex-wrap gap-4 justify-center md:justify-start opacity-0 ${
                isLoaded ? 'animate-fadeIn opacity-100' : ''
              }`}
              style={{ animationDelay: '0.5s' }}
            >
              <Button asChild size="lg" className="transition-transform hover:scale-105">
                <Link href="/#projects">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="transition-transform hover:scale-105">
                <Link href="/#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div 
            className={`w-full md:w-1/2 flex justify-center md:justify-end opacity-0 ${
              isLoaded ? 'animate-fadeInUp opacity-100' : ''
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden border-4 border-primary/20 transition-transform hover:scale-[1.02] duration-300 hover:border-primary/40">
              <Image 
                src="/images/nosadeba-profile.png" 
                alt="Nosadeba Obaseki" 
                fill 
                priority
                className="object-cover"
                sizes="(max-width: 768px) 200px, (max-width: 1024px) 300px, 350px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 