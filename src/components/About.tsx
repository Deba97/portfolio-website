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
            <div className="space-y-6">
              <div className="space-y-4 text-left sm:text-left">
                <p className="text-muted-foreground">
                  I am a passionate Full-Stack Developer with a love for creating elegant solutions to complex problems. 
                  My journey in programming began with a curiosity about how websites work, and has evolved into a 
                  career building applications that are both beautiful and functional.
                </p>
                <p className="text-muted-foreground">
                  I specialize in React, Next.js, and modern frontend technologies, but I'm also comfortable 
                  working across the stack with Node.js, Python, and database technologies. I'm constantly 
                  learning and exploring new technologies to improve my craft.
                </p>
                <p className="text-muted-foreground">
                  When I'm not coding, you can find me exploring new hiking trails, reading tech blogs, 
                  or experimenting with new recipes in the kitchen.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-2 justify-start">
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
            <div className="space-y-8 bg-muted/30 p-6 rounded-lg">
              <h3 className="text-2xl font-bold">My Skills</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-3">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
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
                  <h4 className="text-lg font-medium mb-3">Backend</h4>
                  <div className="flex flex-wrap gap-2">
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
                  <h4 className="text-lg font-medium mb-3">Tools & Other</h4>
                  <div className="flex flex-wrap gap-2">
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