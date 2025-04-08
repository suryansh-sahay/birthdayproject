import React from 'react'
import { main } from "../../public/images.json"

export default function Component5() {
  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-rose-100 to-pink-50"></div>
      <div className="relative max-w-5xl mx-auto px-4">
        <div className="text-center space-y-12">
          <div className="relative inline-block">
            <div className="absolute -inset-6 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <img 
              src={main[4]} 
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-white shadow-2xl object-cover transform hover:scale-105 transition-all duration-500"
              alt="Beautiful Smile"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-shalimar text-rose-600 leading-relaxed">
              Wishing the cutest smile in the world an even brighter glow on your special day!
            </h2>
            <div className="flex justify-center gap-4">
              <div className="h-1 w-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full"></div>
              <div className="h-1 w-24 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full"></div>
              <div className="h-1 w-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full"></div>
            </div>
          </div>
          <div className="pt-8 text-2xl font-light text-gray-600 italic">
            With all my love ❤️
          </div>
        </div>
      </div>
    </div>
  )
}