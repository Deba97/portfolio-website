"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ProjectModal } from './ProjectModal';
import { AnimatedHeading } from './AnimatedHeading';
import { AnimatedSection } from './AnimatedSection';

type ProjectImage = {
  url: string;
  alt: string;
};

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  demoUrl?: string;
  codeUrl?: string;
  galleryImages?: ProjectImage[];
  detailedDescription?: string;
};

const projects: Project[] = [
  {
    id: 'inflato',
    title: 'INFLATO3D',
    description: 'A custom inflatable design tool allowing users to create and customize stunning 3D inflatable models with an interactive design interface.',
    detailedDescription: 'Designed and developed a responsive website for Inflato 3D, a custom inflatable design company. The site features interactive 3D model viewing of products, a content management system for easy updates, and a secure customer inquiry system. Built with React, TypeScript, Three.js, and Tailwind CSS.',
    tags: ['React', 'Three.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/images/inflato.png',
    demoUrl: 'https://jamesapp.vercel.app/',
    galleryImages: [
      {
        url: '/images/inflato.png',
        alt: 'Inflato 3D Website'
      }
      // More images will be added later
    ]
  },
  {
    id: 'employee-portal',
    title: 'Employee Portal',
    description: 'A comprehensive employee management system built for a healthcare company to streamline HR processes, document management, and compliance tracking.',
    detailedDescription: 'Designed and built a full-stack employee management portal for Great Paragon Healthcare. This secure system manages employee information, tracks document compliance, handles onboarding, and provides real-time notifications for expiring credentials. The application significantly improved HR workflow efficiency by 50% and maintains healthcare compliance with automated document tracking.',
    tags: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/images/employee-portal/dashboard.png',
    galleryImages: [
      {
        url: '/images/employee-portal/login.png',
        alt: 'Employee Portal Login Screen - Secure authentication with email and password'
      },
      {
        url: '/images/employee-portal/dashboard.png',
        alt: 'Admin Dashboard - Overview of employee metrics, document compliance, and alerts'
      },
      {
        url: '/images/employee-portal/employee-directory.png',
        alt: 'Employee Directory - Searchable database with filtering by department and status'
      },
      {
        url: '/images/employee-portal/document-management.png',
        alt: 'Document Management - System for tracking licenses, certifications, and compliance'
      },
      {
        url: '/images/employee-portal/notifications.png',
        alt: 'Notification System - Real-time alerts for document expiration and employee updates'
      },
      {
        url: '/images/employee-portal/settings.png',
        alt: 'User Settings - Profile management and notification preferences'
      }
    ]
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="py-16 sm:py-24 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4">
        <AnimatedHeading 
          subtitle="Check out some of my recent work. These projects showcase my skills and passion for creating intuitive and engaging applications."
        >
          My Projects
        </AnimatedHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={project.id} 
              direction="up" 
              delay={index * 100} 
              threshold={0.1}
            >
              <Card className="flex flex-col h-full transition-all hover:shadow-md">
                <CardHeader className="pb-3">
                  <div className="h-48 bg-muted rounded-md mb-4 flex items-center justify-center overflow-hidden">
                    {project.imageUrl ? (
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover rounded-md"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-primary/5">
                        {project.title} Screenshot
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm mt-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pb-2">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-2 pb-4">
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex gap-2 w-full">
                      {project.galleryImages && project.galleryImages.length > 0 && (
                        <Button 
                          variant="secondary" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => openProjectModal(project)}
                        >
                          View Screenshots
                        </Button>
                      )}
                      {project.demoUrl && (
                        <Button asChild variant="default" size="sm" className="flex-1 font-medium">
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </Button>
                      )}
                    </div>
                    
                    {project.codeUrl && (
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">Source Code</a>
                      </Button>
                    )}
                    
                    {!project.demoUrl && !project.codeUrl && !project.galleryImages && (
                      <Button disabled variant="outline" size="sm" className="w-full">
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {selectedProject && modalOpen && (
        <ProjectModal 
          projectId={selectedProject.id}
          projectTitle={selectedProject.title}
          description={selectedProject.detailedDescription || selectedProject.description}
          images={selectedProject.galleryImages || []}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  );
} 