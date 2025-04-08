import React from 'react'
import { main } from "../../public/images.json"

export default function Component1() {
  return (
    <div className="animate-fadeIn">
      <div className="w-full max-w-4xl mx-auto p-4 sm:p-6">
        <div className="relative bg-gradient-to-r from-pink-100 to-rose-100 rounded-3xl p-4 sm:p-8 shadow-lg transform hover:scale-[1.02] transition-all duration-500 animate-float">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-8">
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div className="space-y-2 animate-slideUp">
                <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent animate-shimmer">
                  Happy Birthday
                </h1>
                <h2 className="text-2xl sm:text-3xl font-semibold text-rose-600 font-display animate-bounce">
                  Priyanshi
                </h2>
                <p className="text-base sm:text-lg text-gray-700 font-light leading-relaxed italic opacity-0 animate-fadeInUp">
                  "To the one who makes my world brighter with every smile, 
                  today we celebrate the most beautiful soul I know."
                </p>
              </div>
            </div>
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex-shrink-0 animate-slideIn">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur-lg opacity-75 animate-pulse"></div>
              <img 
                className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-xl transform hover:rotate-6 transition-all duration-500" 
                src={main[0]} 
                alt="Birthday Girl"
              />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-2xl">🎂</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translateX(50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
        }
        .animate-slideIn {
          animation: slideIn 1s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out 0.5s forwards;
        }
      `}</style>
    </div>
  )
}
