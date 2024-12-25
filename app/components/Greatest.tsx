import Image from "next/image";
import Link from "next/link";

type GreatestTypeProps = {
     img: string;
     title: string;
     desc: string;
     linkText: string
}

const Greatest = ({ img, title, desc, linkText }: GreatestTypeProps) => {

     return (
          <div className="container relative mb-10 mt-4">

               <div className="realtive h-96 min-w-[300px]">
                    <Image src={img} fill className="rounded-2xl -z-10 object-cover" alt={title} />
               </div>
               <div className="absolute top-32 left-12">
                    <h3 className="text-4xl mb-3 w-64">{title}</h3>
                    <p>{desc}</p>
                    <Link href="/" className="text-sm px-4 py-2 block w-fit rounded-lg mt-5 text-white bg-gray-900">
                         {linkText}
                    </Link>
               </div>
          </div>
     )
}

export default Greatest