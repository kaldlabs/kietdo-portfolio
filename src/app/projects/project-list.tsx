"use client"

import React, { useState } from 'react';
import { ExternalLink, Github, Code2, Users, Trophy, X } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/types/project';
import { projects } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {

  return (
    <div className="relative bg-white dark:bg-neutral-900 rounded-2xl shadow-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-2xl transition-all duration-300 flex flex-col">
      {/* Image Section - Improved aspect ratio and styling */}
      <div className="relative h-64 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-neutral-800 dark:via-neutral-850 dark:to-neutral-900 overflow-hidden group">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
          priority
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category badge with improved styling */}
        <div className="absolute top-4 right-4 z-10">
          <span className="px-4 py-1.5 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-md rounded-full text-xs font-semibold text-blue-600 dark:text-blue-400 shadow-lg border border-blue-100 dark:border-blue-900">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Title with better spacing */}
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 leading-tight">
          {project.title}
        </h3>

        {/* Description with improved readability */}
        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech Stack with improved design */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-3">
            <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wide">Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg text-xs font-medium text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Role section with better icon */}
        <div className="flex items-start gap-2 mb-5 text-sm text-neutral-600 dark:text-neutral-400">
          <Users className="w-4 h-4 mt-0.5 text-neutral-500 flex-shrink-0" />
          <span className="leading-relaxed">{project.role}</span>
        </div>

        {/* Action Buttons - moved to bottom with spacer */}
        <div className="mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onViewDetails(project)}
              className="flex-1 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              View Details
            </button>
            
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border-2 border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 rounded-lg transition-all duration-300"
                title="View on GitHub"
              >
                <Github className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
              </a>
            )}
            
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border-2 border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 rounded-lg transition-all duration-300"
                title="View Live Demo"
              >
                <ExternalLink className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export function ProjectCardsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Sort projects by start date
  const sortedProjects = [...projects].sort((a, b) => 
    new Date(b.timeline.startDate).getTime() - new Date(a.timeline.startDate).getTime()
  );

  const nextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === sortedProjects.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500); // Match duration with CSS transition
  };

  const previousProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? sortedProjects.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500); // Match duration with CSS transition
  };

  const goToProject = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 w-full relative">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Projects</h2>
      
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={previousProject}
          disabled={isAnimating}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 p-3 rounded-full bg-white/90 dark:bg-neutral-800/90 shadow-lg border border-neutral-200 dark:border-neutral-700 hover:bg-white dark:hover:bg-neutral-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous project"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>
        
        <button
          onClick={nextProject}
          disabled={isAnimating}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 p-3 rounded-full bg-white/90 dark:bg-neutral-800/90 shadow-lg border border-neutral-200 dark:border-neutral-700 hover:bg-white dark:hover:bg-neutral-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next project"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>

        {/* Project Cards */}
        <div className="overflow-hidden relative mx-8">
          <div
            className="transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              display: 'grid',
              gridTemplateColumns: `repeat(${sortedProjects.length}, 100%)`,
              width: `${sortedProjects.length * 100}%`
            }}
          >
            {sortedProjects.map((project, index) => (
              <div
                key={index}
                className="w-full px-4 flex-shrink-0"
                style={{ width: `${100 / sortedProjects.length}%` }}
              >
                <ProjectCard project={project} onViewDetails={handleViewDetails} />
                {project.competition && (
                  <div className="mt-4 p-5 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-neutral-800 dark:to-neutral-850 rounded-xl border border-yellow-200 dark:border-yellow-900/30">
                    <div className="flex items-center gap-2 mb-3">
                      <Trophy className="w-5 h-5 text-yellow-600 dark:text-yellow-500" />
                      <h4 className="font-semibold text-neutral-900 dark:text-white">{project.competition.name}</h4>
                    </div>
                    {project.competition.result && (
                      <p className="text-sm text-green-700 dark:text-green-400 mb-3 font-medium">
                        Result: {project.competition.result}
                      </p>
                    )}
                    {project.competition.teamMembers && (
                      <div className="text-sm">
                        <p className="font-medium mb-2 text-neutral-700 dark:text-neutral-300">Team Members:</p>
                        <ul className="list-disc list-inside space-y-1">
                          {project.competition.teamMembers.map((member, idx) => (
                            <li key={idx} className="text-neutral-600 dark:text-neutral-400">
                              {member}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {sortedProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              disabled={isAnimating}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-blue-600 w-6'
                  : 'bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500'
              } ${isAnimating ? 'cursor-not-allowed opacity-50' : ''}`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Expandable Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 p-6 flex items-start justify-between z-10">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-1">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {selectedProject.category}
                </p>
              </div>
              <button
                onClick={handleCloseDetails}
                className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
              </button>
            </div>

            {/* Modal Image */}
            {selectedProject.image && (
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={`Image for ${selectedProject.title}`}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Description */}
              <div>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Key Features */}
              {selectedProject.features && (
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                    Key Features
                  </h4>
                  <ul className="space-y-2 pl-1">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-neutral-600 dark:text-neutral-400 flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Timeline & Role */}
              <div className="flex flex-col gap-3 p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
                {selectedProject.timeline && (
                  <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="font-semibold">Timeline:</span>
                    <span>{`${new Date(selectedProject.timeline.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - ${new Date(selectedProject.timeline.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`}</span>
                  </div>
                )}
                {selectedProject.role && (
                  <div className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <Users className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{selectedProject.role}</span>
                  </div>
                )}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    <Github className="w-5 h-5" />
                    View on GitHub
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}