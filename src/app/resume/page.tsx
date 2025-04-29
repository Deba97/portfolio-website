"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ResumePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-28 pb-16">
        <div className="container max-w-4xl mx-auto px-4">
          <div className={`flex justify-between items-center mb-8 opacity-0 ${isLoaded ? "animate-fadeIn opacity-100" : ""}`}>
            <h1 className="text-3xl font-bold">Resume</h1>
            <div className="flex gap-4">
              <Button asChild variant="outline" className="transition-transform hover:scale-105">
                <a href="/resume-export.html" target="_blank">View Full Resume</a>
              </Button>
              <Button className="transition-transform hover:scale-105">
                <a href="/Nosadeba_Joshua_Obaseki_Resume.pdf" download className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download PDF
                </a>
              </Button>
            </div>
          </div>
          
          <div className={`bg-card p-6 sm:p-8 rounded-lg border shadow-sm space-y-8 opacity-0 ${isLoaded ? "animate-fadeInUp opacity-100" : ""}`}>
            {/* Header Section */}
            <div className="text-center border-b pb-6 transition-transform hover:scale-[1.01]">
              <h2 className="text-3xl font-bold mb-2">Nosadeba Joshua Obaseki</h2>
              <p className="text-lg text-muted-foreground mb-4">Full-Stack Developer</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span>njobaseki97@gmail.com</span>
                <span>Chicago, IL</span>
              </div>
            </div>
            
            {/* Summary Section */}
            <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
              <h3 className="text-xl font-semibold mb-3">Professional Summary</h3>
              <p className="text-muted-foreground">
                Full Stack Developer and Project Manager skilled in JavaScript, React, Node.js, and PostgreSQL. 
                Experienced in leading Agile projects, streamlining operations, and delivering scalable, high-quality software solutions.
              </p>
            </div>
            
            {/* Skills Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted/20 p-4 rounded-md transition-all duration-300 hover:shadow-md hover:bg-muted/30">
                  <h4 className="font-medium mb-2">Frontend</h4>
                  <p className="text-sm text-muted-foreground">JavaScript, React, Vue.js, Next.js, Tailwind CSS, shadcn-ui, Radix UI</p>
                </div>
                <div className="bg-muted/20 p-4 rounded-md transition-all duration-300 hover:shadow-md hover:bg-muted/30">
                  <h4 className="font-medium mb-2">Backend</h4>
                  <p className="text-sm text-muted-foreground">Node.js, Express, FastAPI, PostgreSQL, Supabase, Firebase</p>
                </div>
                <div className="bg-muted/20 p-4 rounded-md transition-all duration-300 hover:shadow-md hover:bg-muted/30">
                  <h4 className="font-medium mb-2">Tools</h4>
                  <p className="text-sm text-muted-foreground">Git, GitHub, Jira, Agile (Scrum, Kanban)</p>
                </div>
                <div className="bg-muted/20 p-4 rounded-md transition-all duration-300 hover:shadow-md hover:bg-muted/30">
                  <h4 className="font-medium mb-2">Project Management</h4>
                  <p className="text-sm text-muted-foreground">Sprint Planning, Roadmap Creation, Backlog Grooming, Release Planning</p>
                </div>
              </div>
            </div>
            
            {/* Experience Section */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Work Experience</h3>
              
              <div className="space-y-8">
                <div className="border-l-2 border-primary/20 pl-5 relative transition-all duration-300 hover:border-primary/50 hover:pl-6 group">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1 transition-all duration-300 group-hover:scale-125"></div>
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                    <h4 className="font-medium text-lg">Project Manager</h4>
                    <span className="text-sm text-muted-foreground bg-muted/30 px-3 py-1 rounded-full">May 2022 - Present</span>
                  </div>
                  <p className="text-muted-foreground mb-3">Great Paragon Healthcare, Chicago, IL</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li className="transition-all duration-300 hover:translate-x-1">Built a full-stack management system with Next.js and Supabase, featuring a responsive UI that improved onboarding by 50%</li>
                    <li className="transition-all duration-300 hover:translate-x-1">Led end-to-end project planning with Jira, defining timelines, milestones, and deliverables</li>
                    <li className="transition-all duration-300 hover:translate-x-1">Spearheaded a HIPAA-compliance audit readiness initiative achieving zero audit deficiencies</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-primary/20 pl-5 relative transition-all duration-300 hover:border-primary/50 hover:pl-6 group">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1 transition-all duration-300 group-hover:scale-125"></div>
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                    <h4 className="font-medium text-lg">IT Manager</h4>
                    <span className="text-sm text-muted-foreground bg-muted/30 px-3 py-1 rounded-full">June 2019 - April 2022</span>
                  </div>
                  <p className="text-muted-foreground mb-3">Obaseki and Associates, Chicago, IL</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li className="transition-all duration-300 hover:translate-x-1">Deployed a centralized server for Drake Accounting with secure backups of 30+ years of client data</li>
                    <li className="transition-all duration-300 hover:translate-x-1">Implemented Kaspersky security solutions with 100% success rate preventing data breaches</li>
                    <li className="transition-all duration-300 hover:translate-x-1">Provided technical support for network, printers, scanners and server maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Projects Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Notable Projects</h3>
              
              <div className="space-y-6">
                <div className="transition-all duration-300 hover:translate-y-[-2px] hover:shadow-sm p-4 rounded-md -ml-4">
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                    <h4 className="font-medium text-lg">Inflato 3D</h4>
                    <span className="text-sm text-muted-foreground bg-muted/30 px-3 py-1 rounded-full">April 2025</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li className="transition-all duration-300 hover:translate-x-1">Built a responsive website using React, TypeScript, Vite, and Tailwind CSS</li>
                    <li className="transition-all duration-300 hover:translate-x-1">Integrated interactive 3D model viewing of inflatable products using Three.js</li>
                    <li className="transition-all duration-300 hover:translate-x-1">Developed a CMS with Supabase for secure content management</li>
                  </ul>
                </div>
                
                <div className="transition-all duration-300 hover:translate-y-[-2px] hover:shadow-sm p-4 rounded-md -ml-4">
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                    <h4 className="font-medium text-lg">Employee Portal</h4>
                    <span className="text-sm text-muted-foreground bg-muted/30 px-3 py-1 rounded-full">January - March 2023</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li className="transition-all duration-300 hover:translate-x-1">Architected and launched a comprehensive employee portal with Next.js and Supabase</li>
                    <li className="transition-all duration-300 hover:translate-x-1">Implemented dynamic employee listing functionality with advanced filtering options</li>
                    <li className="transition-all duration-300 hover:translate-x-1">Designed a responsive and user-friendly UI for optimal experience across all devices</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Education Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="border-l-2 border-primary/20 pl-5 relative transition-all duration-300 hover:border-primary/50 hover:pl-6 group">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1 transition-all duration-300 group-hover:scale-125"></div>
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <h4 className="font-medium text-lg">Bachelor of Science in Computer Science</h4>
                  <span className="text-sm text-muted-foreground bg-muted/30 px-3 py-1 rounded-full">2021</span>
                </div>
                <p className="text-muted-foreground transition-all duration-300 hover:translate-x-1">DePaul University</p>
              </div>
            </div>
            
            <div className="pt-4 text-center">
              <Button asChild variant="outline" className="transition-all duration-300 hover:scale-105">
                <Link href="/#projects">Back to Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 