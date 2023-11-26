import React from 'react'
import { main } from "../../public/images.json"
export default function Component4() {
  return (
     <div className='flex flex-col text-[72px] p-4 my-12 p-4 font-shalimar text-center'>
        <h1>On your special day,I wish you a birthday as magnificient as the warmth you bring into the world</h1>
        <img src={main[3]} className='w-[443px] -translate-y-24'/>
    </div>
  )
}
