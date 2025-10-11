"use client"

import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { Project } from '@/types/project';

// --- Reusable Project Card Component ---
interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  return (
    <div className="relative bg-white dark:bg-neutral-900 rounded-2xl shadow-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-2xl transition-all duration-300 flex flex-col">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden group">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 z-10">
          <span className="px-4 py-1.5 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-md rounded-full text-xs font-semibold text-blue-600 dark:text-blue-400 shadow-lg border border-blue-100 dark:border-blue-900">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
          {project.title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Action Buttons */}
        <div className="mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onViewDetails(project)}
              className="flex-1 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-all duration-300"
            >
              View Details
            </button>
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2.5 border-2 border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-all">
                <Github className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2.5 border-2 border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-all">
                <ExternalLink className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Carousel Component ---
export function ProjectCardsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const sortedProjects = [...projects].sort((a, b) => 
    new Date(b.timeline.startDate).getTime() - new Date(a.timeline.startDate).getTime()
  );

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === sortedProjects.length - 1 ? 0 : prevIndex + 1));
  };

  const previousProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sortedProjects.length - 1 : prevIndex - 1));
  };
  
  const handleViewDetails = (project: Project) => setSelectedProject(project);
  const handleCloseDetails = () => setSelectedProject(null);

  return (
    <div className="w-full relative">
      {/* Navigation Buttons */}
      <button onClick={previousProject} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-white/80 dark:bg-neutral-800/80 shadow-md border dark:border-neutral-700">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <button onClick={nextProject} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full bg-white/80 dark:bg-neutral-800/80 shadow-md border dark:border-neutral-700">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
      </button>
      
      {/* Project Cards Container */}
      <div className="overflow-hidden relative mx-8">
        <div
          className="transition-transform duration-500 ease-in-out flex"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {sortedProjects.map((project, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <ProjectCard project={project} onViewDetails={handleViewDetails} />
            </div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <div className="sticky top-0 bg-white dark:bg-neutral-900 border-b dark:border-neutral-800 p-6 flex items-start justify-between z-10">
              <div>
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <p className="text-sm text-neutral-500">{selectedProject.category}</p>
              </div>
              <button onClick={handleCloseDetails} className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800">
                <X className="w-5 h-5"/>
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <p>{selectedProject.description}</p>
              {selectedProject.features && (
                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {selectedProject.features.map((feature, idx) => <li key={idx}>{feature}</li>)}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}