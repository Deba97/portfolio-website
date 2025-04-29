"use client";

import { Button } from './ui/button';
import Link from 'next/link';
import { AnimatedHeading } from './AnimatedHeading';
import { AnimatedSection } from './AnimatedSection';

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container max-w-6xl mx-auto px-4">
        <AnimatedHeading
          subtitle="Learn more about my background, skills, and what drives me as a developer."
        >
          About Me
        </AnimatedHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <AnimatedSection direction="left" threshold={0.2}>
            <div className="flex flex-col items-center md:items-start">
              <div className="w-full max-w-md space-y-4">
                <p className="text-muted-foreground text-center md:text-left">
                  I am a passionate Full-Stack Developer with a love for creating elegant solutions to complex problems. 
                  My journey in programming began with a curiosity about how websites work, and has evolved into a 
                  career building applications that are both beautiful and functional.
                </p>
                <p className="text-muted-foreground text-center md:text-left">
                  I specialize in React, Next.js, and modern frontend technologies, but I'm also comfortable 
                  working across the stack with Node.js, Python, and database technologies. I'm constantly 
                  learning and exploring new technologies to improve my craft.
                </p>
                <p className="text-muted-foreground text-center md:text-left">
                  When I'm not coding, you can find me exploring new hiking trails, reading tech blogs, 
                  or experimenting with new recipes in the kitchen.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-6 justify-center md:justify-start w-full max-w-md">
                <Button asChild variant="default">
                  <Link href="/resume">View Resume</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/#contact">Contact Me</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="right" threshold={0.2} delay={200}>
            <div className="bg-muted/30 p-6 rounded-lg w-full max-w-md mx-auto md:max-w-none md:mx-0">
              <h3 className="text-2xl font-bold text-center md:text-left">My Skills</h3>
              <div className="space-y-6 mt-8">
                <div>
                  <h4 className="text-lg font-medium mb-3 text-center md:text-left">Frontend</h4>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Shadcn UI'].map((skill) => (
                      <span 
                        key={skill} 
                        className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3 text-center md:text-left">Backend</h4>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {['Node.js', 'Express', 'Python', 'SQL', 'MongoDB', 'RESTful APIs'].map((skill) => (
                      <span 
                        key={skill} 
                        className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3 text-center md:text-left">Tools & Other</h4>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {['Git', 'GitHub', 'VS Code', 'Figma', 'Vercel', 'Netlify', 'AWS'].map((skill) => (
                      <span 
                        key={skill} 
                        className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
} 