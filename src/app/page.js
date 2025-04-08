"use client"
import { useEffect } from 'react'
import Component1 from "./Component1"
import Component2 from "./Component2"
import Component3 from "./Component3"
import Component4 from "./Component4"
import Component5 from "./Component5"
import ImageCarousal from './ImageCarousal'

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideIntoView')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.scroll-animate')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-16 sm:space-y-24">
        <div className="scroll-animate opacity-0">
          <Component1 />
        </div>
        
        <div className="scroll-animate opacity-0">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-rose-200 opacity-20 blur-3xl -z-10"></div>
            <ImageCarousal />
          </div>
        </div>

        <div className="scroll-animate opacity-0">
          <Component2 />
        </div>

        <div className="scroll-animate opacity-0">
          <Component3 />
        </div>

        <div className="scroll-animate opacity-0">
          <Component4 />
        </div>

        <div className="scroll-animate opacity-0">
          <Component5 />
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideIntoView {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideIntoView {
          animation: slideIntoView 1s ease-out forwards;
        }

        .scroll-animate {
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }

        @media (max-width: 640px) {
          .scroll-animate {
            transition-duration: 0.3s;
          }
        }
      `}</style>
    </div>
  )
}
