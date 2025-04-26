import { IoSearch } from "react-icons/io5";
import { IoFilterCircle } from "react-icons/io5";
import { FaFilter } from "react-icons/fa6";

export default function SearchBar() {
  return (
    <>
      <section className="mt-10">
        <div className="container">
         {/*  <div className="bg-red-700 w-full relative">
            <form className="flex items-center max-w-lg mx-auto  absolute -top-20">
              <label htmlFor="voice-search" className="sr-only">
                Search
              </label>
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
                <button
                  type="button"
                  className="absolute inset-y-0 end-0 flex items-center pe-3"
                >
                  <IoSearch className="text-txtGray" />
                </button>
              </div>
              <div className="flex gap-4">
                <span className="capitalize text-txtGray text-sm font-normal">
                  filter
                </span>
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
          </div> */}
          <div className="flex justify-center mx-auto gap-5 ">
                  <form className="w-[570px]">
                    <div className="relative">
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 rounded-[100px] bg-[#F5F5F5] focus:outline-none"
                        placeholder="Search For Best Doctor"
                        required
                      />
                      <button
                        type="submit"
                        className="absolute inset-y-0 end-8 flex items-center ps-3 cursor-pointer"
                      >
                        <svg
                          className="w-4 h-4 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
          
                  <button>
                    <div className="px-4 py-3.5 bg-[#F5F5F5] rounded-[100px] outline outline-[0.60px] outline-offset-[-0.60px] outline-neutral-100">
                      <div className="flex justify-center items-center gap-3">
                        <span className="text-stone-500 text-xs font-normal">Filter</span>
                        <FaFilter className="text-[#1B514F] w-6 h-6" />
                      </div>
                    </div>
                  </button>
                </div>
        </div>
      </section>
    </>
  );
}
