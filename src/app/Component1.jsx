import React from 'react'
import { main } from "../../public/images.json"
export default function Component1() {
  return (
    <div>
        <div className="flex flex-col mb-32 z-10">
            <div className=" h-[135px] bg-vaibhav p-4">
               <div className=" text-clr text-[32px] font-display text-center">Happiest Birthday</div>
               <div className='float-right flex flex-col'>
                  <img className="w-[121px] h-[123px] mix-blend-luminosity rounded-[19px] shadow z-0" src={main[0]} alt='anything'/>
                   <div className=" text-vaibhav text-[22px] font-display text-center">Priyanshi</div>
               </div>
                <div className=" text-center text-clr  text-[13px] font-normal font-display">Wishing the happiest of birthdays to someone whose presence lights up world, making every moment brighter.</div>
           </div>
         </div>
    </div>
  )
}
