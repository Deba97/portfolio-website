"use client";

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';

interface ProjectImage {
  url: string;
  alt: string;
}

interface ProjectModalProps {
  projectId: string;
  projectTitle: string;
  description: string;
  images: ProjectImage[];
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ projectId, projectTitle, description, images, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  
  const nextImage = () => {
    setImageError(false);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const prevImage = () => {
    setImageError(false);
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl">{projectTitle}</DialogTitle>
          <DialogDescription className="mt-2">{description}</DialogDescription>
        </DialogHeader>
        
        <div className="mt-4 relative">
          <div className="h-[400px] md:h-[500px] bg-muted rounded-md overflow-hidden relative flex items-center justify-center">
            {imageError ? (
              <div className="text-center p-4">
                <p className="text-muted-foreground">Image could not be loaded.</p>
                <p className="text-sm mt-2">{images[currentImageIndex].alt}</p>
              </div>
            ) : (
              <img 
                src={images[currentImageIndex].url} 
                alt={images[currentImageIndex].alt}
                className="w-full h-full object-contain"
                onError={() => setImageError(true)}
              />
            )}
          </div>
          
          {images.length > 1 && (
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-2">
              <Button 
                onClick={prevImage} 
                size="icon" 
                variant="outline" 
                className="rounded-full bg-white/80 hover:bg-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </Button>
              <Button 
                onClick={nextImage} 
                size="icon" 
                variant="outline" 
                className="rounded-full bg-white/80 hover:bg-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </div>
          )}
        </div>
        
        <div className="mt-2 text-sm text-muted-foreground">
          {images[currentImageIndex].alt}
        </div>
        
        <div className="flex justify-center mt-4 gap-2 flex-wrap">
          {images.map((_, index) => (
            <Button
              key={index}
              variant={index === currentImageIndex ? "default" : "outline"}
              size="sm"
              className="w-8 h-8 p-0 rounded-full"
              onClick={() => {
                setImageError(false);
                setCurrentImageIndex(index);
              }}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
} 