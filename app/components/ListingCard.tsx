import Image from "next/image"
import { ListingCard as ListingCardType } from "../types/app"
import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"


const ListingCard = ({ listing }: { listing: ListingCardType }) => {
     return (
          <div className="lg:flex py-2 px-2 border-b cursor-pointer pr-4 hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
               <div className="relative w-96 h-60 lg:h-24 lg:w-40 md:h-52 md:w-80 flex-shrink-0 max-w-full ml-5">
                    <Image src={listing.img} fill className="rounded-2xl object-cover" alt={listing.title} />
               </div>
               <div className="flex flex-col flex-grow pl-5">
                    <div className="flex justify-between">
                         <p>{listing.location}</p>
                         <HeartIcon className="h-7 cursor-pointer hover:fill-red-500" />
                    </div>
                    <h4 className="text-xl">{listing.title}</h4>
                    <div className="border-b w-10 pt-2" />
                    <p className="pt-2 text-sm text-gray-500 flex-gorw">{listing.description}</p>
                    <div className="flex justify-between items-end pt-5">
                         <p className="flex items-center">
                              <StarIcon className="h-5 text-red-400" />
                              {listing.star}
                         </p>
                         <div>
                              <p className="text-lg lg:text-2xl font-semibold pb-2">{listing.price}</p>
                              <p className="text-right font-extralight">{listing.total}</p>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default ListingCard