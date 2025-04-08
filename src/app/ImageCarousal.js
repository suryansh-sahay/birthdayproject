"use client"
import React from 'react'
import { Carousel } from "react-responsive-carousel";
import { carousel } from "../../public/images.json"
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ImageCarousel() {
  return (
    <div className="relative max-w-5xl mx-auto">
      <Carousel 
        showThumbs={false} 
        infiniteLoop={true} 
        autoPlay={true}
        interval={3000}
        showStatus={false}
        showArrows={true}
        emulateTouch={true}
        swipeable={true}
        dynamicHeight={true}
        className="rounded-3xl overflow-hidden shadow-2xl"
        centerMode={false}
      >
        {carousel.map((img, index) => (
          <div key={index} className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="carousel-image-container">
              <img 
                src={img.src} 
                alt={`Memory ${index + 1}`}
                className="w-full h-full"
              />
            </div>
            {img.caption && (
              <p className="absolute bottom-8 left-0 right-0 text-white text-2xl md:text-3xl font-shalimar px-8">
                {img.caption}
              </p>
            )}
          </div>
        ))}
      </Carousel>
      <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-pink-300/30 to-rose-300/30 rounded-[2rem] blur-2xl"></div>
      <style jsx global>{`
        .carousel .slide {
          background: transparent;
        }
        .carousel-image-container {
          position: relative;
          width: 100%;
          padding-top: 66.67%; /* 3:2 aspect ratio */
          overflow: hidden;
        }
        .carousel-image-container img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
        }
        /* Custom arrow styles */
        .carousel .control-arrow {
          background: rgba(255, 255, 255, 0.3) !important;
          backdrop-filter: blur(4px);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin: 0 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.8 !important;
          transition: all 0.3s ease;
        }
        .carousel .control-arrow:hover {
          background: rgba(255, 255, 255, 0.5) !important;
          opacity: 1 !important;
        }
        .carousel .control-prev.control-arrow:before,
        .carousel .control-next.control-arrow:before {
          border-width: 2px;
          width: 12px;
          height: 12px;
          margin: 0;
        }
      `}</style>
    </div>
  )
}
