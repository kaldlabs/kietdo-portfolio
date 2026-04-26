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
      <div className="relative h-60 overflow-hidden group">
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
        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-5 line-clamp-3">
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

// --- Main Project List Component ---
export function ProjectCardsCarousel() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const sortedProjects = [...projects].sort((a, b) => 
    new Date(b.timeline.startDate).getTime() - new Date(a.timeline.startDate).getTime()
  );
  
  const handleViewDetails = (project: Project) => setSelectedProject(project);
  const handleCloseDetails = () => setSelectedProject(null);

  return (
    <div className="w-full relative">
      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.title} project={project} onViewDetails={handleViewDetails} />
        ))}
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
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src={selectedProject.detailsImage || selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-contain"
                />
              </div>
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