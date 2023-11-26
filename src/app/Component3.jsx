import React from 'react'
import { main } from "../../public/images.json"
export default function Component3() {
  return (
    <div className='flex flex-col text-[72px] p-4 my-12 p-4 font-shalimar text-center'>
        <h1>Happy birthday to the living artwork that is you, a masterpiece that brings immeasurable joy</h1>
        <img src={main[2]} className='w-[443px]'/>
    </div>
  )
}
