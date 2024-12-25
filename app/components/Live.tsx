import { LiveData } from "../types/app";
import { getLive } from "../utils/api"
import LiveCard from "./LiveCard";
import MainHeading from "./MainHeading"

const Live = async () => {
     const liveData: LiveData = await getLive();

     return (
          <section className="pt-6">
               <div className="container">
                    <MainHeading title="Live Anywhere" />
                    <div className="flex space-x-3 overflow-scroll no-scrollbar p-3 -ml-3">

                         {liveData?.map((item, i) => <LiveCard key={i} item={item} />)}
                    </div>
               </div>
          </section>
     )
}

export default Live