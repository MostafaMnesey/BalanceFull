// Modal.jsx
import React from "react";
import { MdStarRate } from "react-icons/md";
import avatar from "../../assets/images/defAvatar.jpeg";
import avt2 from "../../assets/images/avatars/2.png";
import avt3 from "../../assets/images/avatars/3.png";
import avt4 from "../../assets/images/avatars/4.png";
import avt5 from "../../assets/images/avatars/5.png";
import avt6 from "../../assets/images/avatars/6.png";
import avt7 from "../../assets/images/avatars/7.png";
import ChangeImg from "../Profile/ChangeImg/ChangeImg";
import { PiSmileySadThin } from "react-icons/pi";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function Modal({ show, onClose, onaccept, type, data = null }) {
  if (!show) return null;
const token = localStorage.getItem("token");


  async function assignUserToDoctor(values) {

    console.log(values.durationOfAddication);
    
    try {
      const res = await axios.post(
        `https://beige-wildcat-74200.zap.cloud/api/assign-doctor/${data?.ID}`,
        values,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) {
       
      }
      console.log(res);
      
      
    } catch (error) {
      console.log(error);
    }
  }

  const valudationSchema = Yup.object().shape({
    fullname: Yup.string()
      .required("Full name is required")
      .min(8, "Full name must be at least 8 characters"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    age: Yup.string().required("Age is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    typeOfAddiction: Yup.string().required("Type of addiction is required"),
    durationOfAddication: Yup.string().required("Duration of addiction is required"),  
  });
  const formik = useFormik({
    initialValues: {
      fullname: "",
      phoneNumber: "",
      email: "",
      age: "",
      typeOfAddiction: "",
      durationOfAddication: "",
      
    },
    validationSchema: valudationSchema,
      validate: (values) => {
      console.log(values);
    }, 

    onSubmit: (values) => {
      assignUserToDoctor(values);
    },
  });
  console.log(data?.ID);
  

  return (
    <>
      {type === "doctor" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4 p-8 relative   ">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4  right-4 text-gray-500 hover:text-gray-700"
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
                  <div className="mt-6 flex justify-center">
                    <img
                      src={data.Image}
                      alt="doctor image"
                      className="rounded-[24px] w-[30%] h-[30%] "
                    />
                  </div>

                  {/* بيانات الدكتور */}
                  <div className="flex flex-col items-center space-y-2 mt-4">
                    <h1 className="text-[#1F1F1F] text-lg font-poppins font-semibold">
                      {data.FullName}
                    </h1>
                    <p className="text-[#1F1F1F] text-base font-poppins font-semibold">
                      Specialty:{" "}
                      <span className="font-normal">{data.Specialization}</span>
                    </p>
                    <p className="flex items-center gap-1 text-[#1F1F1F]">
                      <MdStarRate className="text-[#FEB052] text-[25px]" />
                      <span className="font-semibold">
                        {data.Statistics.AverageRating}
                      </span>
                      <span className="text-[#878787] text-sm"></span>
                    </p>
                  </div>

                  {/* الإحصائيات */}
                  <div className="flex justify-center items-center gap-8 bg-[#F5F5F5] py-6 mt-6 w-full rounded-lg">
                    {/* Number of Patients */}
                    <div className="flex flex-col items-center">
                      <span className="text-gray-500 text-sm text-center">
                        Number of Patients
                      </span>
                      <span className="font-bold text-lg mt-1">
                        {data.Statistics.NumberofPatients}
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="h-8 w-px bg-gray-300"></div>

                    {/* Views */}
                    <div className="flex flex-col items-center">
                      <span className="text-gray-500 text-sm">Views</span>
                      <span className="font-bold text-lg mt-1">
                        {data.Statistics.Views}
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="h-8 w-px bg-gray-300"></div>

                    {/* Years of Experience */}
                    <div className="flex flex-col items-center">
                      <span className="text-gray-500 text-sm text-center">
                        Years of Experience
                      </span>
                      <span className="font-bold text-lg mt-1">
                        {data.Years_of_Experience}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="  flex flex-col items-center ">
                <div className="bg-[#F5F5F5] w-full flex flex-col  rounded-[24px] p-4 mt-4">
                  <div className=" text-start">
                    <h1 className="text-[#1F1F1F] text-start text-base font-poppins font-semibold">
                      About {data.FullName}
                    </h1>
                  </div>
                  <p className="text-[#1F1F1F] text-sm font-poppins font-normal mt-2">
                    Dr. {data.FullName} is an experienced Addiction Specialist
                    dedicated to helping individuals overcome substance use and
                    behavioral addictions. With a compassionate approach and
                    evidence-based methods, he supports patients in their
                    journey toward recovery and mental well-being.
                  </p>
                </div>
              </div>
              <div className="  flex flex-col  ">
                <div className="bg-[#FAFAFA] p-6 rounded-lg shadow-sm    mt-4 w-full">
                  {/* Text Content */}
                  <div>
                    <h2 className="text-[#1F1F1F] text-base font-poppins font-semibold">
                      Join {data.FullName}’s Support Community
                    </h2>
                    <p className="text-[#1F1F1F] text-sm mt-2 max-w-md">
                      Be part of a safe and supportive community with people
                      going through the same journey. Share, ask, and receive
                      real support without judgment.
                    </p>

                    {/* Avatars and Members Count */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2 mt-4">
                        {/* صور الاشخاص */}
                        <div className="flex -space-x-2">
                          <img
                            className="w-8 h-8 rounded-full border-2 border-white"
                            src={avatar}
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
                          +{data.Statistics.NumberofPatients}
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
                  <form onSubmit={formik.handleSubmit}>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="fullname"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Enter Your Name"
                          className="w-full px-4 py-2  rounded-md bg-[#F5F5F5] focus:outline-none "
                        />
                      </div>
                      {formik.touched.fullname && formik.errors.fullname && (
                        <div className="mt-5 ">
                          <p className="text-redd text-sm">
                            {formik.errors.fullname}
                          </p>
                        </div>
                      )}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Enter Your Email"
                          className="w-full px-4 py-2  bg-[#F5F5F5] rounded-md focus:outline-none "
                        />
                      </div>
                      {formik.touched.email && formik.errors.email && (
                        <div className="mt-5 ">
                          <p className="text-redd text-sm">
                            {formik.errors.email}
                          </p>
                        </div>
                      )}

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          name="phoneNumber"
                          onChange={(e) => {
                            const onlyNums = e.target.value.replace(
                              /[^0-9]/g,
                              ""
                            );
                            formik.setFieldValue("phoneNumber", onlyNums);
                          }}
                          value={formik.values.phoneNumber}
                          onBlur={formik.handleBlur}
                          placeholder="Enter Your Email"
                          className="w-full px-4 py-2  bg-[#F5F5F5] rounded-md focus:outline-none "
                        />
                      </div>

                      {formik.touched.phoneNumber &&
                        formik.errors.phoneNumber && (
                          <div className="mt-5 ">
                            <p className="text-redd text-sm">
                              {formik.errors.phoneNumber}
                            </p>
                          </div>
                        )}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Age
                        </label>
                        <input
                          type="text"
                          name="age"
                          value={formik.values.age}
                          onChange={(e) => {
                            const onlyNums = e.target.value.replace(
                              /[^0-9]/g,
                              ""
                            );
                            formik.setFieldValue("age", onlyNums);
                          }}
                          onBlur={formik.handleBlur}
                          placeholder="Enter Your Age"
                          className="w-full px-4 py-2 bg-[#F5F5F5]  rounded-md focus:outline-none "
                        />
                      </div>
                      {formik.touched.age && formik.errors.age && (
                        <div className="mt-5 ">
                          <p className="text-redd text-sm">
                            {formik.errors.age}
                          </p>
                        </div>
                      )}
                       <div className="my-1 mb-2">
                      <label
                        htmlFor="company"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Type of Addiction
                      </label>
                      <input
                        type="text"
                        id="company"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="typeOfAddiction"
                        className="bg-input  text-sm rounded-lg  block w-full p-2.5 focus:outline-none"
                        placeholder="Type of Addiction"
                        required
                      />
                    </div>
                    {formik.touched.typeOfAddiction &&
                      formik.errors.typeOfAddiction && (
                        <div className="my-2 ">
                          <p className="text-redd text-sm">
                            {formik.errors.typeOfAddiction}
                          </p>
                        </div>
                      )}
                       <div className="my-1 mb-2">
                      <label
                        htmlFor="company"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Duration of Addiction
                      </label>
                      <input
                        type="text"
                        id="company"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="durationOfAddication"
                        className="bg-input  text-sm rounded-lg  block w-full p-2.5 focus:outline-none"
                        placeholder="Duration of Addiction"
                        required
                      />
                    </div>
                    {formik.touched.typeOfAddiction &&
                      formik.errors.typeOfAddiction && (
                        <div className="my-2 ">
                          <p className="text-redd text-sm">
                            {formik.errors.typeOfAddiction}
                          </p>
                        </div>
                      )}
                    </div>{" "}
                   
                    <p className="text-start text-txtGray text-sm font-normal font-poppins">
                      All your information is 100% safe and confidential
                    </p>{" "}
                    <div className="grid  md:grid-cols-2 gap-4">
                      <div className="flex justify-center">
                        <button
                          type=""
                          onClick={onClose}
                          className="px-20 py-3 bg-white border transition-all text-center border-[#D6D6D6] text-txtGray rounded-[12px] hover:bg-gray-200"
                        >
                          Decline
                        </button>
                      </div>
                      <div className=" flex justify-center">
                        <button
                          type="submit"
                       
                          className="px-20 py-3 bg-mainColor transition-all text-white rounded-[12px] hover:bg-darkGreen"
                        >
                          Start Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
          </div>
        </div>
      )}

      {type === "Update" && (
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
            <div className="flex flex-col items-center">
              <ChangeImg />

              <form className="my-4 w-full">
                <div className="mb-6">
                  <label
                    htmlFor="Name"
                    className="block mb-2 text-base font-medium text-txt-black "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="Name"
                    className="bg-input  text-sm rounded-lg  block w-full p-2.5 focus:outline-none "
                    placeholder="Enter your Name"
                    required
                  />
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="Phone"
                      className="block mb-2 text-base font-medium text-txt-black"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="Phone"
                      className="bg-input  text-sm rounded-lg  block w-full p-2.5 focus:outline-none"
                      placeholder="Enter your Phone Number"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block mb-2 text-base font-medium text-txt-black"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="bg-input  text-sm rounded-lg  block w-full p-2.5 focus:outline-none"
                      placeholder="Doe"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block mb-2 text-base font-medium text-txt-black"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="bg-input  text-sm rounded-lg  block w-full p-2.5 focus:outline-none"
                      placeholder="Flowbite"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-base font-medium text-txt-black"
                    >
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="bg-input  text-sm rounded-lg  block w-full p-2.5 focus:outline-none"
                      placeholder="123-45-678"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      required
                    />
                  </div>
                </div>{" "}
                <div className="flex justify-end gap-2 mt-6">
                  <button
                    onClick={onClose}
                    className="px-10 py-3 bg-white border transition-all border-[#D6D6D6] text-txtGray rounded-[12px] hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={onClose}
                    className="px-8 py-3 bg-mainColor transition-all text-white rounded-[12px] hover:bg-darkGreen"
                  >
                    Save Change
                  </button>
                </div>
              </form>
            </div>

            {/* Modal Footer */}
          </div>
        </div>
      )}
      {type === "DeleteAcc" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-3/12  mx-4 p-6 relative   ">
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
            <div className="flex flex-col space-y-2 items-center">
              <div className=" flex justify-center items-center">
                <PiSmileySadThin className="w-20 h-20 text-txtGray" />
              </div>

              <p className="text-stone-900 text-center px-4 text-base font-medium">
                Deleting your account is irreversible. All your data will be
                permanently removed. Do you wish to proceed?
              </p>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-center gap-2 mt-6">
              <button
                onClick={onClose}
                className="px-16 py-3 bg-bluee border transition-all border-transparent text-white rounded-[12px] hover:bg-white hover:text-mainColor hover:border-mainColor"
              >
                Cancel
              </button>
              <button
                onClick={onClose}
                className="px-8 py-3 bg-transparent  border-[1px] border-redd transition-all text-redd rounded-[12px] hover:bg-redd hover:text-white"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}
      {type === "Logout" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg md:w-[30%]  mx-4 p-6 relative   ">
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
            <div className="flex flex-col space-y-2 items-center">
              <div className=" flex justify-center items-center">
                <PiSmileySadThin className="w-20 h-20 text-txtGray" />
              </div>

              <p className="text-stone-900 text-center px-4 text-base font-medium">
                Are you sure you want to log out?
              </p>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-center gap-2 mt-6">
              <button
                onClick={onClose}
                className="px-[10%] py-3 bg-bluee border transition-all border-transparent text-white rounded-[12px] hover:bg-white hover:text-mainColor hover:border-mainColor"
              >
                Cancel
              </button>
              <button
                onClick={onaccept}
                className="px-[10%] py-3 bg-transparent  border-[1px] border-redd transition-all text-redd rounded-[12px] hover:bg-redd hover:text-white"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
      {type === "doctorSearch" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg md:w-[30%]  mx-4 p-6 relative   ">
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
            <div className="flex flex-col space-y-2 items-center">
              <div className=" flex justify-center items-center">
                <PiSmileySadThin className="w-20 h-20 text-txtGray" />
              </div>

              <p className="text-stone-900 text-center px-4 text-base font-medium">
                Sorry, the doctor is currently unavailable. Please try again
                later or choose another doctor.
              </p>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-center gap-2 mt-6">
              <button
                onClick={onClose}
                className="px-20 py-3 bg-bluee border transition-all border-transparent text-white rounded-[12px] hover:bg-white hover:text-mainColor hover:border-mainColor"
              >
                Choose Another Doctor
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
