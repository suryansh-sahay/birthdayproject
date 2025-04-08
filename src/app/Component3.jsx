import React from 'react'
import { main } from "../../public/images.json"

export default function Component3() {
  return (
    <div className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-100 to-rose-100 transform -skew-y-6"></div>
      <div className="relative max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl font-shalimar text-rose-600 leading-relaxed mb-6">
              Happy birthday to the living artwork that is you, a masterpiece that brings immeasurable joy
            </h2>
            <div className="flex justify-center">
              <div className="h-1 w-32 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full"></div>
            </div>
          </div>
          <div className="relative w-full md:w-1/2">
            <div className="absolute -inset-8 bg-gradient-to-tr from-pink-300 to-rose-300 rounded-full blur-2xl opacity-30"></div>
            <img 
              src={main[2]} 
              className="relative rounded-full shadow-2xl border-8 border-white transform hover:rotate-3 transition-transform duration-500 object-cover aspect-square"
              alt="Birthday Celebration"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
