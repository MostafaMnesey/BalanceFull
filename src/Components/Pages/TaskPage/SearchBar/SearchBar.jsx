import { IoSearch } from "react-icons/io5";
import { IoFilterCircle } from "react-icons/io5";
import { FaFilter } from "react-icons/fa6";

export default function SearchBar() {
    return <>
        <section className='mt-24'>
            <div className="container">
                <div className="bg-red-700 w-full relative">


                    <form className="flex items-center max-w-lg mx-auto  absolute -top-20">
                        <label htmlFor="voice-search" className="sr-only">Search</label>
                        <div className="relative w-full">

<input 
  type="text" 
  id="voice-search" 
  className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm 
             focus:ring-darkGreen focus:border-darkGreen 
             transition-all duration-300 ease-in-out
             block w-[400px] ps-10 p-2.5  
             dark:bg-[#FAFAFA] dark:border-[#FAFAFA] dark:placeholder-gray-400 dark:text-white 
             dark:focus:ring-darkGreen dark:focus:border-darkGreen" 
  placeholder="Search For Any Task" 
  required 
/>
                            <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
                                <IoSearch className="text-txtGray" />
                            </button>
                        </div>
                        <div className="flex gap-4">

                        <span className="capitalize text-txtGray text-sm font-normal">filter</span>
                        <button
                            type="submit"
                            className="inline-flex items-center p-1 ms-2 text-sm font-medium text-white bg-darkGreen rounded-lg 
                                hover:bg-mainColor hover:text-darkGreen 
                                focus:ring-4 focus:outline-none 
                                dark:bg-darkGreen dark:hover:bg-mainColor dark:hover:text-darkGreen 
                                transition-all duration-300 ease-in-out"
                        >
                            
                            <FaFilter className="text-white transition-all duration-300 ease-in-out" />
                        </button>
                        </div>

                    </form>




                </div>
            </div>

        </section>
    </>
}
