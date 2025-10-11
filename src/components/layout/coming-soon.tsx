"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

// Arch Linux Terminal Component
export const ArchTerminal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-[#1e1e1e] border border-[#3a3a3a] rounded-lg shadow-2xl overflow-hidden">
        {/* Arch Linux Terminal Header */}
        <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-[#3a3a3a]">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[#1793d1]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2.5 21h2.25l1.12-2h12.26l1.12 2h2.25L12 2zm0 3.5L17.75 17H6.25L12 5.5z"/>
            </svg>
            <span className="text-[#d4d4d4] text-sm font-mono">user@arch: ~</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-6 h-6 flex items-center justify-center hover:bg-[#3a3a3a] rounded">
              <span className="text-[#d4d4d4] text-lg leading-none">−</span>
            </button>
            <button className="w-6 h-6 flex items-center justify-center hover:bg-[#3a3a3a] rounded">
              <span className="text-[#d4d4d4] text-lg leading-none">□</span>
            </button>
            <button className="w-6 h-6 flex items-center justify-center hover:bg-[#e74c3c] rounded group">
              <span className="text-[#d4d4d4] group-hover:text-white text-lg leading-none">✕</span>
            </button>
          </div>
        </div>
        
        {/* Terminal Content */}
        <div className="bg-[#0d1117] p-6 font-mono text-sm min-h-[400px]">
          {children}
        </div>
      </div>
    </div>
  )
}

// Typing Animation Component
export const TypingAnimation = ({ 
  children, 
  delay = 0, 
  className = "" 
}: { 
  children: string
  delay?: number
  className?: string 
}) => {
  const [displayText, setDisplayText] = useState("")
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true)
    }, delay)

    return () => clearTimeout(startTimer)
  }, [delay])

  useEffect(() => {
    if (!started) return

    let index = 0
    const timer = setInterval(() => {
      if (index <= children.length) {
        setDisplayText(children.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 30)

    return () => clearInterval(timer)
  }, [children, started])

  if (!started) return null

  return (
    <div className={`text-[#d4d4d4] ${className}`}>
      {displayText}
      {displayText.length < children.length && (
        <span className="inline-block w-2 h-4 bg-[#1793d1] ml-1 animate-pulse" />
      )}
    </div>
  )
}

// Animated Span Component
export const AnimatedSpan = ({ 
  children, 
  delay = 0, 
  className = "" 
}: { 
  children: React.ReactNode
  delay?: number
  className?: string 
}) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  if (!visible) return null

  return <div className={`text-[#d4d4d4] animate-in fade-in duration-300 ${className}`}>{children}</div>
}

// Hover Border Gradient Button (Arch Linux themed)
export const ArchButton = ({
  children,
  onClick
}: {
  children: React.ReactNode
  onClick?: () => void
}) => {
  return (
    <button
      onClick={onClick}
      className="group relative px-6 py-3 bg-[#1e1e1e] border-2 border-[#1793d1] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#1793d1]/50 hover:scale-105"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#1793d1]/20 via-transparent to-[#1793d1]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative flex items-center gap-2 text-[#d4d4d4] font-mono text-sm">
        {children}
      </div>
    </button>
  )
}

// Logo Component
export const ArchLogo = ({ className = "" }: { className?: string }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2.5 21h2.25l1.12-2h12.26l1.12 2h2.25L12 2zm0 3.5L17.75 17H6.25L12 5.5z"/>
    </svg>
  )
}

// Full Screen Container
export const FullScreen = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode
  className?: string 
}) => {
  return (
    <div className={`min-h-screen w-full flex items-center justify-center p-4 ${className}`}>
      {children}
    </div>
  )
}

// Main Coming Soon Page
export const ComingSoonPage = ({ pageName }: { pageName?: string }) => {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <FullScreen className="flex-col">
      <ArchTerminal>
        <TypingAnimation>{`[user@arch ~]$ pnpm dlx lab@ai-web init`}</TypingAnimation>

        <AnimatedSpan delay={1500} className="text-[#98c379]">
          <span>✔ Setting up AI integration framework. Using Python.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2000} className="text-[#98c379]">
          <span>✔ Configuring Flask for backend development.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-[#98c379]">
          <span>✔ Integrating TensorFlow for machine learning models.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3000} className="text-[#98c379]">
          <span>✔ Implementing CAPTCHA solving module.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3500} className="text-[#98c379]">
          <span>✔ Building API endpoints for external services.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4000} className="text-[#98c379]">
          <span>✔ Developing image diagnosis with camera input.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4500} className="text-[#98c379]">
          <span>✔ Optimizing machine learning models for performance.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5000} className="text-[#98c379]">
          <span>✔ Setting up responsive design with Tailwind CSS.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5500} className="text-[#98c379]">
          <span>✔ Adding real-time processing capabilities.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={6000} className="text-[#61afef]">
          <span>ℹ {pageName || "About"}:</span>
          <span className="pl-2">Coming Soon: AI-powered web platform</span>
        </AnimatedSpan>

        <TypingAnimation delay={6500} className="text-[#abb2bf]">
          Success! AI web platform initialization completed.
        </TypingAnimation>

        <TypingAnimation delay={7000} className="text-[#abb2bf]">
          Launching soon at kyoz004.github.io/lab-portfolio/
        </TypingAnimation>
      </ArchTerminal>

      <div className="flex mt-10 justify-center text-center">
        <ArchButton onClick={() => router.push("/")}>
          <ArchLogo className="w-5 h-5 text-[#1793d1]" />
          <span>Back to home</span>
        </ArchButton>
      </div>
    </FullScreen>
  )
}