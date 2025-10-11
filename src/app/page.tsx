import { ProjectCardsCarousel } from "@/app/projects/project-list"; // Đường dẫn sau khi di chuyển component
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-16">
      {/* Hero Section */}
      <section className="text-center mb-16 md:mb-24">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Welcome to LAB
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
          A showcase of journey in AI and Software Development.
        </p>
      </section>

      {/* Project Carousel Section */}
      <section>
        <ProjectCardsCarousel />
        <div className="mt-12 text-center">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Explore Full Details Of Ours Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}