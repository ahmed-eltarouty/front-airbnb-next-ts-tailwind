import Image from "next/image"
import { ExploreItem } from "../types/app"

// to aviod futur changes on type we can add it like that ExploreItem & { name: string }
type ExploreCardProps = ExploreItem

const ExploreCard = ({ item }: { item: ExploreCardProps }) => {
     return (
          <div className="flex items-center m-2 mt-5 space-x-4 cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
               <div className="relative w-16 h-16">
                    <Image src={item.img} alt="Explore card img" fill />
               </div>
               <div>
                    <h2>{item.location}</h2>
                    <h3 className="text-gray-500">{item.distance}</h3>
               </div>
          </div>
     )
}

export default ExploreCard