import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa6";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDroprightCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";
import Doc1 from "../../assets/images/Doctor.png";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import axios, { all } from "axios";
import { useQuery } from "@tanstack/react-query";
import Loadingg from "../Loadingg/Loadingg";



export default function AllDoctors() {
  let topRated = [];
  const [ratedDoctorVisibleCards, setRatedDoctorVisibleCards] = useState(3);
  const [allDoctorVisibleCards, setAllDoctorVisibleCards] = useState(3);
  const [showModal, setShowModal] = useState(false);

  const [selectedDoctor, setSelectedDoctor] = useState(null); // حالة لتخزين بيانات الطبيب المختار

  const handleCardClick = (doctor) => {
    setSelectedDoctor(doctor); // تخزين بيانات الطبيب المحدد
    setShowModal(true); // عرض المودال
  };
  const { data, isLoading,refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: getDoctors, 
    refetchOnMount: true,
  });
  async function getDoctors() {
    return await axios.get(
      "https://beige-wildcat-74200.zap.cloud/api/doctor",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  }
  async function incrementView(id) {
    
    
    try{
      const res = await axios.post(
        `https://beige-wildcat-74200.zap.cloud/api/statistics/${id}/increment-view`,{},
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      refetch();
    
      
    }
    catch (error) {
      console.log(error);
    } 
  }
  const allDoctors = data?.data.data;

topRated=allDoctors?.filter((doctor) => doctor.Statistics.AverageRating >= 4.5);


 


  return (
    <>
      <div className="container mx-auto min-h-[52vh] mt-28">
        <div className="flex justify-start ml-20 mx-auto gap-5 mt-[56px]">
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
                <span className="text-stone-500 text-xs font-normal">
                  Filter
                </span>
                <FaFilter className="text-[#1B514F] w-6 h-6" />
              </div>
            </div>
          </button>
        </div>
        {/* top rated doctors */}
         <div className="mt-[32px]">
          <div className="flex justify-between items-center  me-10">
            <h1 className="text-[#1F1F1F] text-xl font-semibold">
              Top Rated Doctors
            </h1>
            {ratedDoctorVisibleCards < topRated?.length ? (
              <div className="text-center place-self-center mt-4">
                <button
                  onClick={() => setRatedDoctorVisibleCards(topRated.length)}
                  className="text-teal-600 font-medium hover:underline"
                >
                  <div className="flex items-center gap-1">
                    <span className="text-[#AEAEAE] text-base font-normal">
                      see more
                    </span>
                    <IoIosArrowDropdownCircle className="w-[24px] h-[24px] text-[#AEAEAE]" />
                  </div>
                </button>
              </div>
            ) : (
              <div className="text-center mt-4">
                <button
                  onClick={() => setRatedDoctorVisibleCards(3)}
                  className="text-teal-600 font-medium hover:underline"
                >
                  <div className="flex items-center gap-1">
                    <span className="text-[#AEAEAE] text-base font-normal">
                      see Less
                    </span>

                    <IoIosArrowDropupCircle className="w-[24px] h-[24px] text-[#AEAEAE]" />
                  </div>
                </button>
              </div>
            )}
          </div>

          <div className="flex md:block justify-center  md:justify-start">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
              {topRated?.slice(0, ratedDoctorVisibleCards).map((doctor) => (
                <div key={doctor.ID} onClick={() => handleCardClick(doctor)}>
                  <Card doctor={doctor} view={incrementView} />
                </div>
              ))}
            </div>
          </div>
        </div> 
        {/* all doctors */}
        <div className="mt-[32px]">
          <div className="flex justify-between me-10">
            <h1 className="text-[#1F1F1F] text-xl font-semibold">
              All Doctors
            </h1>
            {allDoctorVisibleCards < allDoctors?.length ? (
              <div className="text-center mt-4">
                <button
                  onClick={() => setAllDoctorVisibleCards(allDoctors?.length)}
                  className="text-teal-600 font-medium hover:underline"
                >
                  <div className="flex items-center gap-1">
                    <span className="text-[#AEAEAE] text-base font-normal">
                      see more
                    </span>
                    <IoIosArrowDropdownCircle className="w-[24px] h-[24px] text-[#AEAEAE]" />
                  </div>
                </button>
              </div>
            ) : (
              <div className="text-center mt-4">
                <button
                  onClick={() => setAllDoctorVisibleCards(3)}
                  className="text-teal-600 font-medium hover:underline"
                >
                  <div className="flex items-center gap-1">
                    <span className="text-[#AEAEAE] text-base font-normal">
                      see Less
                    </span>

                    <IoIosArrowDropupCircle className="w-[24px] h-[24px] text-[#AEAEAE]" />
                  </div>
                </button>
              </div>
            )}
          </div>

          <div className="flex md:block justify-center  md:justify-start">
            {isLoading ? (
              <Loadingg />
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  {allDoctors?.slice(0, allDoctorVisibleCards).map((doctor) => (
                    <div
                      key={doctor.id}
                      onClick={() => handleCardClick(doctor)}
                    >
                      <Card doctor={doctor} view={incrementView} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Modal
        show={showModal}
        data={selectedDoctor} // تمرير بيانات الطبيب المحدد إلى المودال
        type="doctor"
        onClose={() => setShowModal(false)}
        onaccept={() => setShowModal(false)}
      />
    </>
  );
}
