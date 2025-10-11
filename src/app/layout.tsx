import { LayoutWithHeader } from "@/components/layout/layout-with-header"
import { ThemeProvider } from "@/components/theme-provider"
import "@/styles/globals.css"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"

import { Exo_2 } from "next/font/google"

const exo2 = Exo_2({
  subsets: ["latin", "vietnamese", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-exo2",
})

export const metadata: Metadata = {
  title: "Lab Portfolio",
  description:
    "Explore our innovative lab portfolio – showcasing cutting-edge research in AI, computer vision, and advanced technology solutions. Featuring state-of-the-art projects and technical expertise.",
  keywords: [
    "AI Research",
    "Computer Vision",
    "Machine Learning",
    "Lab Portfolio",
    "Research Development",
    "Deep Learning",
    "Data Engineering",
    "AI Development",
    "Advanced Technology",
  ],
  openGraph: {
    title: "Lab Portfolio",
    description:
      "Discover our expertise in AI Research, Computer Vision, and Machine Learning. View innovative projects, research papers, and technical achievements.",
    url: "https://kyoz004.github.io/lab-portfolio/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lab Portfolio",
    description:
      "Explore our innovative research projects and expertise in AI, computer vision, and advanced technology solutions.",
  },
  icons: {
    icon: "/lab-portfolio/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${exo2.variable} antialiased scroll-smooth w-full max-w-dvw`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {/* Đảm bảo component này không có overflow:hidden */}
          <LayoutWithHeader>{children}</LayoutWithHeader>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}