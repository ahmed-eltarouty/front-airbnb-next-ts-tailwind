import Image from "next/image"

const Banner = () => {
     return (
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
               <Image
                    src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="banner-image"
                    className="object-cover object-left"
                    fill
               />
               <div className="absolute top-1/2  w-full text-center">
                    <p className="text-sm sm:text-lg font-semibold" > Not sure where to go ? Perfect.</p>
                    <button type="button" className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold">
                         I am flexible
                    </button>
               </div>
          </div>
     )
}

export default Banner