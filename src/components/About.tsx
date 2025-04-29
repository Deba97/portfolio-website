"use client";

import { Button } from './ui/button';
import Link from 'next/link';
import { AnimatedHeading } from './AnimatedHeading';
import { AnimatedSection } from './AnimatedSection';

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <AnimatedHeading
          subtitle="Learn more about my background, skills, and what drives me as a developer."
        >
          About Me
        </AnimatedHeading>
        
        <div className="flex flex-col md:flex-row md:justify-between max-w-6xl mx-auto gap-12 lg:gap-20">
          {/* Left column - Bio */}
          <AnimatedSection direction="left" threshold={0.2} className="w-full md:w-1/2">
            <p className="text-muted-foreground text-center md:text-left mb-4">
              I am a passionate Full-Stack Developer with a love for creating elegant solutions to complex problems. 
              My journey in programming began with a curiosity about how websites work, and has evolved into a 
              career building applications that are both beautiful and functional.
            </p>
            <p className="text-muted-foreground text-center md:text-left mb-4">
              I specialize in React, Next.js, and modern frontend technologies, but I'm also comfortable 
              working across the stack with Node.js, Python, and database technologies. I'm constantly 
              learning and exploring new technologies to improve my craft.
            </p>
            <p className="text-muted-foreground text-center md:text-left mb-6">
              When I'm not coding, you can find me exploring new hiking trails, reading tech blogs, 
              or experimenting with new recipes in the kitchen.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild variant="default">
                <Link href="/resume">View Resume</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/#contact">Contact Me</Link>
              </Button>
            </div>
          </AnimatedSection>
          
          {/* Right column - Skills */}
          <AnimatedSection direction="right" threshold={0.2} delay={200} className="w-full md:w-1/2">
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-center md:text-left mb-6">My Skills</h3>
              
              <div className="mb-6">
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
              
              <div className="mb-6">
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
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
} 