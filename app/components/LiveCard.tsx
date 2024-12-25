import Image from "next/image"
import { LiveItem } from "../types/app"


type LivePropsType = LiveItem

const LiveCard = ({ item }: { item: LivePropsType }) => {
     return (
          <div className="cursor-pointer hover:scale-105 transform transation duration-300 ease-out">
               <div className="relative w-80 h-80">
                    <Image src={item.img} alt={item.title} fill />
               </div>
               <h3 className="text-2xl mt-3">
                    {item.title}
               </h3>
          </div>
     )
}

export default LiveCard