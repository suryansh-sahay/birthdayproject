import React from 'react'
import { main } from "../../public/images.json"
export default function Component2() {
  return (
    <div className='flex flex-col text-[48px] text-greyish my-12 p-4 font-greyish text-center'>
        <h1>In the canvas of life, your image is the most exquisite sketch, capturing the essence of grace and beauty </h1>
        <img src={main[1]} className='w-[443px]'/>
    </div>
  )
}
