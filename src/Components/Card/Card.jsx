import React from 'react'

export default function Card({doctor}) {
    console.log();
    
  return (
    <>
     <div
                key={doctor.id}
                className="flex items-center w-full   bg-[#F5F5F5] rounded-lg px-4 py-3"
              >
                <div className="mr-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-28 h-32 rounded-lg object-cover"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h2 className="font-semibold text-[#1F1F1F] font-poppins text-lg">
                    {doctor.name}
                  </h2>
                  <p className="text-gray-500 font-poppins text-sm">
                    {doctor.specialty}
                  </p>
                  <div className="flex items-center mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#FBBF24"
                      stroke="#FBBF24"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span className="text-xs text-[#1B514F] font-medium ml-1">
                      {doctor.rating}
                    </span>
                  </div>
                  <button className="mt-2 bg-bluee text-white py-2 rounded-full w-full hover:bg-[#2D8986] transition-colors">
                    Join Now
                  </button>
                </div>
              </div>
    </>
   
  )
}
