"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Briefcase,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";

// --- Type Definitions ---
type SkillType = 'language' | 'frontend' | 'backend' | 'database' | 'devops' | 'mlops' | 'os' | 'data-tool';

interface Skill {
  name: string;
  type: SkillType;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface Link {
  name: string;
  url: string;
}

interface ExperienceItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  date: string;
  image?: string;
  category?: string;
  teamSize?: string;
  content: {
    heading: string;
    subheading: string;
    description: string;
    points?: string[];
    skillCategories?: SkillCategory[];
    techStack?: string[];
    team?: {
      size: string;
      composition: string;
    };
    links?: Link[];
  };
}

// Convert projects to experience items
const projectsAsExperience: ExperienceItem[] = projects.map((project, index) => ({
  id: project.title.toLowerCase().replace(/\s+/g, '-') + `-${index}`,
  title: project.title,
  icon: <Briefcase />,
  category: project.category,
  image: project.detailsImage || project.image,
  date: new Date(project.timeline.startDate).toLocaleString('en-US', { month: 'long', year: 'numeric' }),
  teamSize: project.team?.size,
  content: {
    heading: project.title,
    subheading: project.role,
    description: project.description,
    points: project.features,
    techStack: project.techStack,
    team: project.team
  }
}));

// Combine projects with additional sections
const experienceData: ExperienceItem[] = [
  ...projectsAsExperience,
  

];

// --- Bảng màu cho các kỹ năng ---
const skillColors: Record<SkillType | 'default', string> = {
  language: "bg-sky-100 text-sky-800 dark:bg-sky-900/70 dark:text-sky-200 border border-sky-300/50",
  frontend: "bg-green-100 text-green-800 dark:bg-green-900/70 dark:text-green-200 border border-green-300/50",
  backend: "bg-amber-100 text-amber-800 dark:bg-amber-900/70 dark:text-amber-200 border border-amber-300/50",
  database: "bg-purple-100 text-purple-800 dark:bg-purple-900/70 dark:text-purple-200 border border-purple-300/50",
  devops: "bg-red-100 text-red-800 dark:bg-red-900/70 dark:text-red-200 border border-red-300/50",
  mlops: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/70 dark:text-indigo-200 border border-indigo-300/50",
  os: "bg-gray-100 text-gray-800 dark:bg-gray-700/70 dark:text-gray-200 border border-gray-300/50",
  "data-tool": "bg-pink-100 text-pink-800 dark:bg-pink-900/70 dark:text-pink-200 border border-pink-300/50",
  default: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 border border-gray-300/50",
};

// --- Reusable Content Block ---
interface ContentBlockProps {
  item: ExperienceItem;
  assignRef: (el: HTMLElement | null) => void;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ item, assignRef }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  // Gộp 2 ref: 1 cho `useInView` và 1 cho việc scroll khi click
  const combinedRef = (node: HTMLElement | null) => {
    ref(node);
    assignRef(node);
  };

  return (
    <motion.div
      ref={combinedRef}
      id={item.id}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-12 scroll-mt-24"
    >
      <div className="mb-4">
        <div className="flex items-center gap-4 mb-2">
          {item.category && (
            <span className="text-sm bg-blue-100 text-blue-800 dark:bg-blue-900/70 dark:text-blue-200 px-3 py-1 rounded-full font-medium">
              {item.category}
            </span>
          )}
          <span className="text-sm text-blue-500 dark:text-blue-400 font-semibold">{item.date}</span>
          {item.teamSize && (
            <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
              <Users className="w-4 h-4" />
              <span>{item.teamSize}</span>
            </div>
          )}
        </div>
        <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{item.content.heading}</h3>
        <p className="text-gray-600 dark:text-gray-300">{item.content.subheading}</p>
      </div>

      {item.image && (
        <div className="mb-6 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg relative h-96">
          <Image 
            src={item.image} 
            alt={item.title} 
            fill
            className="object-contain object-center"
          />
        </div>
      )}

      <p className="mb-4 text-gray-700 dark:text-gray-300">{item.content.description}</p>

      {item.content.points && (
        <ul className="space-y-3 mt-5">
          {item.content.points.map((point, idx) => (
            <li key={idx} className="flex gap-3 items-start">
              <span className="text-green-500 mt-1">✓</span>
              <span className="text-gray-800 dark:text-gray-200">{point}</span>
            </li>
          ))}
        </ul>
      )}

      {item.content.links && (
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          {item.content.links.map((link, idx) => (
            <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              {link.name}
            </a>
          ))}
        </div>
      )}

      {item.content.skillCategories && (
        <div className="mt-5 space-y-5">
          {item.content.skillCategories.map((category, idx) => (
            <div key={idx}>
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">{category.title}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span key={skillIdx} className={cn("px-3 py-1 rounded-full text-sm font-medium", skillColors[skill.type] || skillColors.default)}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

// --- Main Component ---
export function ExperienceTimeline() {
  const [activeSection, setActiveSection] = useState("experience");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Cập nhật logic active section khi scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" } // Kích hoạt khi mục ở khoảng giữa màn hình
    );

    const refs = sectionRefs.current;
    Object.values(refs).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(refs).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Function để scroll khi click
  const handleNavClick = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        <aside className="lg:col-span-3">
          <nav className="sticky top-24">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Sections</h2>
            <ul className="space-y-2">
              {experienceData.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-300 text-left font-medium",
                      activeSection === item.id
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    )}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="lg:col-span-9">
          {experienceData.map((item) => (
            <ContentBlock
              key={item.id}
              item={item}
              assignRef={(el) => (sectionRefs.current[item.id] = el)}
            />
          ))}
        </main>
      </div>
    </div>
  );
}