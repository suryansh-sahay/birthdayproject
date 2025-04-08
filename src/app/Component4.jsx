import React from 'react'
import { main } from "../../public/images.json"

export default function Component4() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-50 to-rose-50 shadow-xl">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-pink-200 to-rose-200 transform -skew-y-6 -translate-y-16"></div>
      <div className="relative px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-shalimar text-rose-600 leading-relaxed">
              On your special day, I wish you a birthday as magnificent as the warmth you bring into the world
            </h2>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-4">
                <div className="h-px w-12 bg-gradient-to-r from-pink-400 to-rose-400"></div>
                <div className="w-3 h-3 rounded-full bg-rose-400 animate-pulse"></div>
                <div className="h-px w-12 bg-gradient-to-r from-rose-400 to-pink-400"></div>
              </div>
            </div>
          </div>
          <div className="relative mt-12">
            <div className="absolute -inset-4 bg-gradient-to-br from-pink-300/50 to-rose-300/50 rounded-2xl blur-xl"></div>
            <img 
              src={main[3]} 
              className="relative w-full max-w-2xl mx-auto rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-500 object-cover"
              alt="Special Moment"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
