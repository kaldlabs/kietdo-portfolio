import { ExperienceTimeline } from "@/app/projects/containers/experience-timeline";
// import { ProjectCardsCarousel } from "@/app/projects/project-list"; // Đường dẫn sau khi di chuyển component
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience & Projects | LAB",
  description: "Explore my professional journey, key projects, and technical skills in AI and software development.",
};

export default function ExperiencePage() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-16">
      {/* Phần 1: Dòng thời gian kinh nghiệm và kỹ năng */}
      <section>
        <ExperienceTimeline />
      </section>

      {/* Dải phân cách */}
      <div className="my-16 md:my-24 border-b dark:border-neutral-800"></div>

      {/* Phần 2: Carousel các dự án nổi bật */}
      {/* <section>
        <h2 className="text-4xl font-bold tracking-tight mb-12 text-center">
          Featured Projects
        </h2>
        <ProjectCardsCarousel />
      </section> */}
    </main>
  );
}