import { format } from "date-fns";
import Footer from "../components/Footer"
import Header from "../components/header/Header"
import { getSearchResult } from "../utils/api";
import { SearchResultData } from "../types/app";
import ListingCard from "../components/ListingCard";

type SearchParams = {
     location: string;
     startDate: string;
     endDate: string;
     numOfGuests: string
}

const SearchResult = async ({ searchParams }: { searchParams: SearchParams }) => {
     const { location, startDate, endDate, numOfGuests } = await searchParams
     const Filters = ["Cancellation Flexibility", "Type of Place", "Price", "Rooms and Beds", "More Filters"]
     let formatedStartDate, formatedEndDate;
     if (startDate && endDate) {
          formatedStartDate = format(new Date(startDate), "dd MMMM yy");
          formatedEndDate = format(new Date(endDate), "dd MMMM yy");
     }
     const range = `${formatedStartDate} - ${formatedEndDate}`

     const searchResultData: SearchResultData = await getSearchResult()
     console.log(searchResultData)


     return (
          <>
               <Header placeholder={`${location} | ${range} | ${numOfGuests} Guests`} />
               <main className="min-h-screen">
                    <section className="pt-14">
                         <div className="container">
                              <p className="text-xs">300+ Stays - {range} - for {numOfGuests} Guests</p>
                              <h1 className="text-3xl font-semibold mt-2 mb-6">stays in {location}</h1>
                              <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800">
                                   {Filters.map((filter, i) => (<button key={i} type="button" className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg ease-out duration-100 transform transition active:bg-gray-100 active:scale-95">{filter}</button>))}

                              </div>
                              {searchResultData.map((listing, i) => (
                                   <ListingCard key={i} listing={listing} />
                              ))}
                         </div>
                    </section>
               </main>
               <Footer />
          </>
     )
}

export default SearchResult