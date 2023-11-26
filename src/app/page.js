import Component1 from "./Component1"
import Component2 from "./Component2"
import Component3 from "./Component3"
import Component4 from "./Component4"
import Component5 from "./Component5"
import ImageCarousal from './ImageCarousal'
export default function Home() {
  return (
    <div className="flex flex-col justify-between bg-text-rose-100">
      <Component1 />
      <ImageCarousal />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
    </div>
  )
}
