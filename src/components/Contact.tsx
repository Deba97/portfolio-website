"use client";

import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { AnimatedHeading } from './AnimatedHeading';
import { AnimatedSection } from './AnimatedSection';

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedHeading
          subtitle="Have a project in mind or want to chat? I'd love to hear from you!"
        >
          Get In Touch
        </AnimatedHeading>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Info Card */}
          <div className="w-full md:w-1/2">
            <AnimatedSection 
              direction="left" 
              threshold={0.2}
              preserveLayout={true}
            >
              <Card className="shadow-sm transition-all duration-300 hover:shadow-md h-full">
                <CardHeader className="text-center md:text-left">
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Reach out through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4 transition-all duration-300 hover:translate-x-1">
                    <div className="bg-primary/10 p-3 rounded-full transition-all duration-300 hover:bg-primary/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">njobaseki97@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 transition-all duration-300 hover:translate-x-1">
                    <div className="bg-primary/10 p-3 rounded-full transition-all duration-300 hover:bg-primary/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/nosadeba-obaseki-225680118/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm text-primary hover:underline transition-all duration-300 hover:text-primary/80"
                      >
                        linkedin.com/in/nosadeba-obaseki-225680118
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 transition-all duration-300 hover:translate-x-1">
                    <div className="bg-primary/10 p-3 rounded-full transition-all duration-300 hover:bg-primary/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <a 
                        href="https://github.com/Deba97" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm text-primary hover:underline transition-all duration-300 hover:text-primary/80"
                      >
                        github.com/Deba97
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
          
          {/* Message Form Card */}
          <div className="w-full md:w-1/2">
            <AnimatedSection 
              direction="right" 
              threshold={0.2} 
              delay={200}
              preserveLayout={true}
            >
              <Card className="shadow-sm transition-all duration-300 hover:shadow-md h-full">
                <CardHeader className="text-center md:text-left">
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>Fill out the form below and I'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <input
                          id="name"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 hover:border-primary/50"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <input
                          id="email"
                          type="email"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 hover:border-primary/50"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                      <input
                        id="subject"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 hover:border-primary/50"
                        placeholder="How can I help you?"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 hover:border-primary/50"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
} 