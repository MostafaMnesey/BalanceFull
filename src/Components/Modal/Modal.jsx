// Modal.jsx
import React from "react";
import { MdStarRate } from "react-icons/md";
import defaultt from "../../assets/images/defAvatar.jpeg";
import avt2 from "../../assets/images/Avtar2.png";
import avt3 from "../../assets/images/Avtar3.png";
import avt4 from "../../assets/images/Avtar4.png";
import avt5 from "../../assets/images/Avtar5.png";
import avt6 from "../../assets/images/Avtar6.png";
import avt7 from "../../assets/images/Avtar7.png";

export default function Modal({ show, onClose, title, children, type, data }) {
  if (!show) return null;

  console.log(data);

  return (
    <>
      {type === "doctor" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4 p-6 relative   ">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Content */}

           <div className="overflow-y-auto max-h-[80vh]">
           <div className="  flex flex-col mt-3 items-center justify-center ">
              <div className="bg-[#F5F5F5] w-full flex flex-col items-center rounded-[24px] p-4">
                {/* صورة الدكتور */}
                <div className="mt-6">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="rounded-[24px]"
                  />
                </div>

                {/* بيانات الدكتور */}
                <div className="flex flex-col items-center space-y-2 mt-4">
                  <h1 className="text-[#1F1F1F] text-lg font-poppins font-semibold">
                    {data.name}
                  </h1>
                  <p className="text-[#1F1F1F] text-base font-poppins font-semibold">
                    Specialty:{" "}
                    <span className="font-normal">{data.specialty}</span>
                  </p>
                  <p className="flex items-center gap-1 text-[#1F1F1F]">
                    <MdStarRate className="text-[#FEB052] text-[25px]" />
                    <span className="font-semibold">{data.rating}</span>
                    <span className="text-[#878787] text-sm">(300 Rating)</span>
                  </p>
                </div>

                {/* الإحصائيات */}
                <div className="flex justify-center items-center gap-8 bg-[#F5F5F5] py-6 mt-6 w-full rounded-lg">
                  {/* Number of Patients */}
                  <div className="flex flex-col items-center">
                    <span className="text-gray-500 text-sm text-center">
                      Number of Patients
                    </span>
                    <span className="font-bold text-lg mt-1">100</span>
                  </div>

                  {/* Divider */}
                  <div className="h-8 w-px bg-gray-300"></div>

                  {/* Views */}
                  <div className="flex flex-col items-center">
                    <span className="text-gray-500 text-sm">Views</span>
                    <span className="font-bold text-lg mt-1">30</span>
                  </div>

                  {/* Divider */}
                  <div className="h-8 w-px bg-gray-300"></div>

                  {/* Years of Experience */}
                  <div className="flex flex-col items-center">
                    <span className="text-gray-500 text-sm text-center">
                      Years of Experience
                    </span>
                    <span className="font-bold text-lg mt-1">11</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="  flex flex-col items-center ">
              <div className="bg-[#F5F5F5] w-full flex flex-col  rounded-[24px] p-4 mt-4">
                <div className=" text-start">
                  <h1 className="text-[#1F1F1F] text-start text-base font-poppins font-semibold">
                    About {data.name}
                  </h1>
                </div>
                <p className="text-[#1F1F1F] text-sm font-poppins font-normal mt-2">
                  Dr. Ahmed Nabih is an experienced Addiction Specialist
                  dedicated to helping individuals overcome substance use and
                  behavioral addictions. With a compassionate approach and
                  evidence-based methods, he supports patients in their journey
                  toward recovery and mental well-being.
                </p>
              </div>
            </div>
            <div className="  flex flex-col  ">
              <div className="bg-[#FAFAFA] p-6 rounded-lg shadow-sm    mt-4 w-full">
                {/* Text Content */}
                <div>
                  <h2 className="text-[#1F1F1F] text-base font-poppins font-semibold">
                    Join Dr. Ahmed Nabil’s Support Community
                  </h2>
                  <p className="text-[#1F1F1F] text-sm mt-2 max-w-md">
                    Be part of a safe and supportive community with people going
                    through the same journey. Share, ask, and receive real
                    support without judgment.
                  </p>

                  {/* Avatars and Members Count */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2 mt-4">
                      {/* صور الاشخاص */}
                      <div className="flex -space-x-2">
                        <img
                          className="w-8 h-8 rounded-full border-2 border-white"
                          src={defaultt}
                          alt="avatar1"
                        />
                        <img
                          className="w-8 h-8 rounded-full border-2 border-white"
                          src={avt2}
                          alt="avatar2"
                        />
                        <img
                          className="w-8 h-8 rounded-full border-2 border-white"
                          src={avt3}
                          alt="avt3"
                        />
                        <img
                          className="w-8 h-8 rounded-full border-2 border-white"
                          src={avt4}
                          alt="avt4"
                        />
                        <img
                          className="w-8 h-8 rounded-full border-2 border-white"
                          src={avt5}
                          alt="avt5"
                        />
                      </div>
                      {/* عدد الاعضاء */}
                      <span className="text-sm text-[#1F1F1F] font-medium">
                        +25
                      </span>
                    </div>
                    <button className="border border-gray-300 text-[#5F5F5F] px-4 py-2 rounded-lg text-sm hover:bg-mainColor hover:text-white transition">
                      Join Community
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col  bg-[#FAFAFA] p-6 rounded-lg shadow-sm    mt-4 w-full  ">
              <div className="">
                <div className=" flex flex-col">
                  <h2 className="text-[#1F1F1F] text-base font-poppins font-semibold">
                    Register Your Information to Start the Session
                  </h2>
                  <p className="font-poppins font-normal text-sm ">
                    Please enter your information accurately so we can provide
                    you with the best support possible.
                  </p>
                </div>
              </div>

              <div className=" mt-4">
                <form>
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="first_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Full name
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="last_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="last_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Doe"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Phone number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="123-45-678"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Age
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Flowbite"
                        required
                      />
                    </div>
                   

                  </div>
                  <p className="text-start text-txtGray text-sm font-normal font-poppins">All your information is 100% safe and confidential</p>
                 
              
                </form>
              </div>
            </div>
           </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={onClose}
                className="px-20 py-3 bg-white border transition-all border-[#D6D6D6] text-txtGray rounded-[12px] hover:bg-gray-200"
              >
                Decline
              </button>
              <button
                onClick={onClose}
                className="px-20 py-3 bg-mainColor transition-all text-white rounded-[12px] hover:bg-darkGreen"
              >
                Start Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
