import React from "react";
import Doc1 from "../../assets/images/Doctor.png";
import { MdStarRate } from "react-icons/md";
import community from "../../assets/images/DocComm.png";
import chat from "../../assets/images/DrChat.png";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loadingg from "../Loadingg/Loadingg";
import { Link } from "react-router-dom";

export default function Doctor() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["doctor"],
    queryFn: getDoctor,
  });

  async function getDoctor() {
    return await axios.get(
      `https://beige-wildcat-74200.zap.cloud/api/my_doctor`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  }


  const doctor=data?.data.my_doctor
  console.log(doctor);
  

  return (<>
 {
  isLoading?(
    <Loadingg />
  ):
  <>
    <>
      <div className="container mt-28">
        <div className="bg-[#F5F5F5] w-full flex flex-col items-center rounded-[24px] p-4">
          {/* صورة الدكتور */}
          <div className="mt-6 flex justify-center">
            <img
              src={doctor?.Image}
              alt="doctor image"
              className="rounded-[24px] w-5/12"
            />
          </div>

          {/* بيانات الدكتور */}
          <div className="flex flex-col items-center space-y-2 mt-4">
            <h1 className="text-[#1F1F1F] text-lg font-poppins font-semibold">
              {doctor?.FullName}
            </h1>
            <p className="text-[#1F1F1F] text-base font-poppins font-semibold">
              Specialty: <span className="font-normal">{doctor?.Specialization}</span>
            </p>
            <p className="flex items-center gap-1 text-[#1F1F1F]">
              <MdStarRate className="text-[#FEB052] text-[25px]" />
              <span className="font-semibold">{doctor?.Statistics.AverageRating}</span>
           
            </p>
          </div>

          {/* الإحصائيات */}
          <div className="flex justify-center items-center gap-8 bg-[#F5F5F5] py-6 mt-6 w-full rounded-lg">
            {/* Number of Patients */}
            <div className="flex flex-col items-center">
              <span className="text-gray-500 text-sm text-center">
                Number of Patients
              </span>
              <span className="font-bold text-lg mt-1">{doctor?.Statistics.NumberofPatients}</span>
            </div>

            {/* Divider */}
            <div className="h-8 w-px bg-gray-300"></div>

            {/* Views */}
            <div className="flex flex-col items-center">
              <span className="text-gray-500 text-sm">Views</span>
              <span className="font-bold text-lg mt-1">{doctor?.Statistics.Views}</span>
            </div>

            {/* Divider */}
            <div className="h-8 w-px bg-gray-300"></div>

            {/* Years of Experience */}
            <div className="flex flex-col items-center">
              <span className="text-gray-500 text-sm text-center">
                Years of Experience
              </span>
              <span className="font-bold text-lg mt-1">{doctor?.Years_of_Experience}</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-4 mt-6">
          <div className="bg-[#F5F5F5] w-full  rounded-[24px] p-4">
            <div className="flex flex-col gap-2 ms-[32px] ">
              <h2 className=" mt-[24px] text-txt-black font-bold font-poppins">
                Session Details
              </h2>
              <ul className="text-txt-op-0 text-normal font-poppins space-y-2 list-disc ms-[24px]	">
                <li>Session Duration: 1 hour</li>
                <li>Session Fee: $50</li>
                <li>Session Date: 2023-06-01</li>
              </ul>
            </div>
          </div>
          <div className="bg-[#F5F5F5] w-full flex  rounded-[24px] p-4">
            <div className="flex flex-col gap-2 ms-[32px] ">
              <h2 className=" mt-[24px] text-txt-black font-bold font-poppins">
                Don’t Forget Your Tasks!
              </h2>
              <p className="pe-4 text-base text-txt-op-0">
                Remember to complete your tasks before your next session. Click
                below to view your tasks.
              </p>
            </div>
          </div>
        </div>
         <div className="bg-[#F5F5F5] w-full mt-5 rounded-[24px] p-4">
            <div className="grid grid-cols-3  gap-2 ms-[32px]">
              <div className="ms-[32px] py-[24px]">
                <img src={community} alt="" />
              </div>
              <div className="col-span-2 me-[32px] py-[24px]">
                <p className="text-base font-semibold text-txt-black">
                  Join  Community
                </p>
                <p className="text-base text-txt-op-0 mt-2">
                  Connect with other patients in the doctor’s community, share
                  your experiences, and ask questions.
                </p>
                <div className="flex justify-end items-center">
                  <button className="bg-mainColor  hover:text-mainColor hover:bg-[#F5F5F5] border border-transparent hover:border-mainColor transition-all text-white  py-3 px-12 rounded-2xl">
                    <Link to="/community"> Join Community</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  </>
 }
      </> 
  );
}
