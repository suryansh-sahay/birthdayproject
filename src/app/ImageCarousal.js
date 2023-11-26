"use client"
import React from 'react'
import { Carousel } from "react-responsive-carousel";
import { carousel  } from "../../public/images.json"
    import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function ImageCarousel() {
  return (
    <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} className="mx-10 w-3/4">
        { carousel.map(img =>(
            <div key={img.id}>
            <img src={img.src} alt='anything' />
            </div>
        ))}
    </Carousel>
  )
}
