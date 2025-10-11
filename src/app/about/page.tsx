import { Metadata } from "next"
import { ComingSoonPage } from "@/components/layout/coming-soon"

export const metadata: Metadata = {
  title: "About LAB",
  description:
    "Read the proccess of lab portfolio development with many AI technologies.",
  keywords: [
    "Software Engineer",
    "Full-stack Developer",
    "JavaScript",
    "Next.js",
    "AI Team Developer",
  ],
  openGraph: {
    title: "About | LAB",
    description:
      "Discover the story and journey of LAB in the world of software engineering.",
    url: "https://kyoz004.github.io/lab-portfolio/about",
    siteName: "Kiet Do",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About",
    description:
      "Learn more about LAB - Projects about AI System.",
    // images: ["https://kyoz004.github.io/lab-portfolio/images/seo/about-og-image.png"],
  },
  alternates: {
    canonical: "https://kyoz004.github.io/lab-portfolio/about",
  },
}

export default function Page() {
  return <ComingSoonPage pageName="About" />
}
