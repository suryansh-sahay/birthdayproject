import React from 'react'
import { main } from "../../public/images.json"

export default function Component2() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl transform hover:scale-[1.02] transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200/50 to-rose-200/50"></div>
      <div className="relative flex flex-col md:flex-row items-center gap-8 p-4 sm:p-8">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 to-rose-400/20 blur-lg"></div>
            <p className="relative text-2xl sm:text-3xl md:text-4xl font-light text-gray-800 italic leading-relaxed">
              "In the canvas of life, your image is the most exquisite sketch, capturing the essence of grace and beauty"
            </p>
          </div>
          <div className="flex justify-center md:justify-start space-x-2">
            <div className="h-1 w-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-grow"></div>
            <div className="h-1 w-8 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full animate-grow delay-100"></div>
            <div className="h-1 w-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-grow delay-200"></div>
          </div>
        </div>
        <div className="relative w-full sm:w-2/3 md:w-1/2">
          <div className="absolute -inset-4 bg-gradient-to-br from-pink-300 to-rose-300 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
          <div className="group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl opacity-75 blur transition duration-1000 group-hover:opacity-100 animate-tilt"></div>
            <img 
              src={main[1]} 
              className="relative rounded-xl shadow-lg transform transition duration-500 group-hover:scale-[1.02] w-full object-cover aspect-[4/3]"
              alt="Romantic Memory"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes grow {
          from { transform: scaleX(0); opacity: 0; }
          to { transform: scaleX(1); opacity: 1; }
        }
        @keyframes tilt {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(1deg); }
        }
        .animate-grow {
          animation: grow 1s ease-out forwards;
          transform-origin: left;
        }
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .animate-tilt {
          animation: tilt 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
