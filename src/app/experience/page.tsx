// src/app/page.tsx

import { MyUniverse } from "@/containers/my-universe";
import { ProjectCardsCarousel } from "@/app/projects/project-list";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-16">
      {/* Hero section "Hello, I'm Kiet Do" */}
      <section className="mb-16 md:mb-24">
        <MyUniverse />
      </section>

      {/* Project Carousel section */}
      <section>
        <ProjectCardsCarousel />
      </section>
    </main>
  );
}