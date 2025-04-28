import { IoSearch } from "react-icons/io5";
import { IoFilterCircle } from "react-icons/io5";
import { FaFilter } from "react-icons/fa6";

export default function SearchBar() {
  return (
    <>
      <section className="mt-10">
        <div className="container">
        
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
