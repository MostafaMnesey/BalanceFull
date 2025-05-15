// Modal.jsx
import React, { useState } from "react";
import { MdStarRate } from "react-icons/md";
import avatar from "../../assets/images/defAvatar.jpeg";
import avt1 from "../../assets/images/avatars/1.png";
import avt2 from "../../assets/images/avatars/2.png";
import avt3 from "../../assets/images/avatars/3.png";
import avt4 from "../../assets/images/avatars/4.png";
import avt5 from "../../assets/images/avatars/5.png";
import avt6 from "../../assets/images/avatars/6.png";
import avt7 from "../../assets/images/avatars/7.png";
import avt8 from "../../assets/images/avatars/8.png";
import avt9 from "../../assets/images/avatars/9.png";
import avt10 from "../../assets/images/avatars/10.png";
import avt11 from "../../assets/images/avatars/11.png";
import avt12 from "../../assets/images/avatars/12.png";
import avt13 from "../../assets/images/avatars/13.png";
import avt14 from "../../assets/images/avatars/14.png";
import avt15 from "../../assets/images/avatars/15.png";
import avt16 from "../../assets/images/avatars/16.png";
import avt17 from "../../assets/images/avatars/17.png";
import avt18 from "../../assets/images/avatars/18.png";
import avt19 from "../../assets/images/avatars/19.png";
import avt20 from "../../assets/images/avatars/20.png";
import avt21 from "../../assets/images/avatars/21.png";
import avt22 from "../../assets/images/avatars/22.png";
import avt23 from "../../assets/images/avatars/23.png";
import avt24 from "../../assets/images/avatars/24.png";
import avt25 from "../../assets/images/avatars/25.png";
import avt26 from "../../assets/images/avatars/26.png";
import avt27 from "../../assets/images/avatars/27.png";
import avt28 from "../../assets/images/avatars/28.png";
import avt29 from "../../assets/images/avatars/29.png";
import avt30 from "../../assets/images/avatars/30.png";
import avt31 from "../../assets/images/avatars/31.png";
import avt32 from "../../assets/images/avatars/32.png";
import avt33 from "../../assets/images/avatars/33.png";
import avt34 from "../../assets/images/avatars/34.png";

const avatars = [
  { id: 0, src: avatar, alt: "Default Avatar" },
  { id: 1, src: avt1, alt: "Avatar 1" },
  { id: 2, src: avt2, alt: "Avatar 2" },
  { id: 3, src: avt3, alt: "Avatar 3" },
  { id: 4, src: avt4, alt: "Avatar 4" },
  { id: 5, src: avt5, alt: "Avatar 5" },
  { id: 6, src: avt6, alt: "Avatar 6" },
  { id: 7, src: avt7, alt: "Avatar 7" },
  { id: 8, src: avt8, alt: "Avatar 8" },
  { id: 9, src: avt9, alt: "Avatar 9" },
  { id: 10, src: avt10, alt: "Avatar 10" },
  { id: 11, src: avt11, alt: "Avatar 11" },
  { id: 12, src: avt12, alt: "Avatar 12" },
  { id: 13, src: avt13, alt: "Avatar 13" },
  { id: 14, src: avt14, alt: "Avatar 14" },
  { id: 15, src: avt15, alt: "Avatar 15" },
  { id: 16, src: avt16, alt: "Avatar 16" },
  { id: 17, src: avt17, alt: "Avatar 17" },
  { id: 18, src: avt18, alt: "Avatar 18" },
  { id: 19, src: avt19, alt: "Avatar 19" },
  { id: 20, src: avt20, alt: "Avatar 20" },
  { id: 21, src: avt21, alt: "Avatar 21" },
  { id: 22, src: avt22, alt: "Avatar 22" },
  { id: 23, src: avt23, alt: "Avatar 23" },
  { id: 24, src: avt24, alt: "Avatar 24" },
  { id: 25, src: avt25, alt: "Avatar 25" },
  { id: 26, src: avt26, alt: "Avatar 26" },
  { id: 27, src: avt27, alt: "Avatar 27" },
  { id: 28, src: avt28, alt: "Avatar 28" },
  { id: 29, src: avt29, alt: "Avatar 29" },
  { id: 30, src: avt30, alt: "Avatar 30" },
  { id: 31, src: avt31, alt: "Avatar 31" },
  { id: 32, src: avt32, alt: "Avatar 32" },
  { id: 33, src: avt33, alt: "Avatar 33" },
  { id: 34, src: avt34, alt: "Avatar 34" },
];
import { PiSmileySadThin } from "react-icons/pi";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Toast from "../Toast/Toast";
import { s } from "motion/react-client";
import { RiEdit2Line } from "react-icons/ri";

export default function Modal({
  show,
  onClose,
  set,
  refetch,
  onaccept,
  type,
  data = null,
}) {
  if (!show) return null;
  const token = localStorage.getItem("token");
  const [showAvatar, setShowAvatar] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(0);
  const [error, setError] = useState(null);

  const [showToast, setShowToast] = useState(null);
console.log(data);

  async function assignUserToDoctor(values) {
    setShowToast(false);
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
        setShowToast(true);
      setTimeout(() => {
          onClose();
      }, 100);
      }
    } catch (error) {
      if (error.status ===404 ) {
        setShowToast(true);
        setError("Please Enter a valid email");
      }
      else if(error.status === 422){
        setShowToast(true);
        setError(error?.response.data.message);
      }
      else if(error.status === 409){
        setShowToast(true);
        setError(error?.response.data.message);
        
      }
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
    durationOfAddication: Yup.string().required(
      "Duration of addiction is required"
    ),
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

  let formik2 
  if (type === "update") {
   formik2 = useFormik({
      initialValues: {
        fullname: "",
        nickname: "",
        email: "",
        age: "",
        password: "",
        password_confirmation: "",
        phoneNumber: "",
        avatar: `${number}`,
      },
      validationSchema: schema,
      validate: (values) => {},

      onSubmit: (values) => {
        updateUserProfile(values);
      },
    });
    const schema = Yup.object().shape({
      fullname: Yup.string()
        .required("Full name is required")
        .min(8, "Full name must be at least 8 characters"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      age: Yup.string().required("Age is required"),
      phoneNumber: Yup.string().required("Phone number is required"),
      password: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/,
          "Password must be at least 6 characters and include letters, numbers, and a special character"
        ),
      password_confirmation: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
      nickname: Yup.string()
        .required("Nickname is required")
        .min(4, "Nickname must be at least 4 characters")
        .max(12, "Nickname must be less than 12 characters"),
    });
    const userimg = data?.Avatar;

    const number = userimg.split("/").pop().split(".")[0];
  }



  async function updateUserProfile(values) {
    setShowToast(false);
    try {
      const res = await axios.put(
        `https://beige-wildcat-74200.zap.cloud/api/patient/${data?.ID}`,
        values,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setShowToast(true);
      refetch();
      setTimeout(() => {
        set(false);
      }, 100);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {type === "doctor" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4 p-8 relative   ">
            {/* Close Button */}
            <button
              onClick={() => {
                onClose();
              }}
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
                      {formik.touched.fullname && formik.errors.fullname && (
                        <div className="mt-5 ">
                          <p className="text-redd text-sm">
                            {formik.errors.fullname}
                          </p>
                        </div>
                      )}
                      </div>
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
                      {formik.touched.email && formik.errors.email && (
                        <div className="mt-5 ">
                          <p className="text-redd text-sm">
                            {formik.errors.email}
                          </p>
                        </div>
                      )}
                      </div>

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
                      {formik.touched.phoneNumber &&
                        formik.errors.phoneNumber && (
                          <div className="mt-5 ">
                            <p className="text-redd text-sm">
                              {formik.errors.phoneNumber}
                            </p>
                          </div>
                        )}
                      </div>

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
                      {formik.touched.age && formik.errors.age && (
                        <div className="mt-5 ">
                          <p className="text-redd text-sm">
                            {formik.errors.age}
                          </p>
                        </div>
                      )}
                      </div>
                      <div className="my-1 mb-2">
                        <label
                          htmlFor="typeOfAddiction"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Type of Addiction
                        </label>
                        <input
                          type="text"
                          id="typeOfAddiction"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          name="typeOfAddiction"
                          className="bg-input  text-sm rounded-lg  block w-full p-2.5 focus:outline-none"
                          placeholder="Type of Addiction"
                          required
                        />
                      {formik.touched.typeOfAddiction &&
                        formik.errors.typeOfAddiction && (
                          <div className="my-2 ">
                            <p className="text-redd text-sm">
                              {formik.errors.typeOfAddiction}
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="my-1 mb-2">
                        <label
                          htmlFor="durationOfAddication"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Duration of Addiction
                        </label>
                        <input
                          type="text"
                          id="durationOfAddication"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          name="durationOfAddication"
                          className="bg-input  text-sm rounded-lg  block w-full p-2.5 focus:outline-none"
                          placeholder="Duration of Addiction"
                          required
                        />
                      {formik.touched.durationOfAddication &&
                        formik.errors.durationOfAddication && (
                          <div className="inline-block">
                            <p className="text-redd text-sm">
                              {formik.errors.durationOfAddication}
                            </p>
                          </div>
                        )}
                      </div>
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
         { error ? <Toast
            icon="error"
            title={error}
            show={showToast}/>: <Toast
            icon="success"
            title="Doctor Assigned Successfully"
            show={showToast}
      />    }
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
            <div className="">
              <form className="my-4 w-full" onSubmit={formik2.handleSubmit}>
                <div className="flex flex-col items-center">
                  {" "}
                  <div className="relative">
                    <img
                      src={`${
                        selectedAvatar === 0
                          ? `https://beige-wildcat-74200.zap.cloud/${data.Avatar}`
                          : `${avatars[selectedAvatar].src}`
                      }`}
                      className="w-28 h-28 rounded-full"
                      alt=""
                    />

                    <div className="w-8 h-8 absolute flex justify-center items-center bottom-0 right-0 bg-white rounded-full">
                      <button
                        onClick={() => {
                          setShowAvatar(!showAvatar);
                        }}
                      >
                        <RiEdit2Line className="text-txtGray text-normal" />
                      </button>
                    </div>
                  </div>
                  <div
                    className={`"grid grid-cols-2 absolute bg-white bg-opacity-[50%] ${
                      showAvatar ? "grid" : "hidden"
                    } top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  md:grid-cols-7 gap-5 mb-8"`}
                  >
                    {avatars.map((avatar, index) => (
                      <div
                        key={avatar.id}
                        className={`relative cursor-pointer rounded-full w-16 h-16 overflow-hidden ${
                          selectedAvatar === index ? "ring-2 ring-bluee" : ""
                        }`}
                        onClick={() => {
                          setSelectedAvatar(index);
                          setShowAvatar(false);
                          formik2.setFieldValue("avatar", avatar.id);
                        }}
                      >
                        <img
                          src={avatar.src}
                          alt={avatar.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <input type="hidden" name="avatar" />
                </div>
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
                    name="fullname"
                    onChange={formik2.handleChange}
                    onBlur={formik2.handleBlur}
                    className="bg-input  text-sm rounded-lg  block w-full p-2.5 focus:outline-none "
                    placeholder="Enter your Name"
                    required
                  />
                  {formik2.touched.fullname && formik2.errors.fullname ? (
                    <div className="text-red-500">
                      {formik2.errors.fullname}
                    </div>
                  ) : null}
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="Phone"
                      className="block mb-2 text-base font-medium text-txt-black"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      id="Phone"
                      name="email"
                      onChange={formik2.handleChange}
                      onBlur={formik2.handleBlur}
                      className="bg-input  text-sm rounded-lg  block w-full p-2.5 focus:outline-none"
                      placeholder="Enter your Phone Number"
                      required
                    />
                    {formik2.touched.email && formik2.errors.email ? (
                      <div className="text-red-500">{formik2.errors.email}</div>
                    ) : null}
                  </div>
                  <div>
                    <label className="block mb-2 text-base font-medium text-txt-black">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      onChange={(e) => {
                        const onlyNums = e.target.value.replace(/[^0-9]/g, "");
                        formik2.setFieldValue("phoneNumber", onlyNums);
                      }}
                      value={formik2.values.phoneNumber}
                      onBlur={formik2.handleBlur}
                      placeholder="Enter Your Email"
                      className="bg-input  text-sm rounded-lg  block w-full p-2.5 focus:outline-none "
                    />
                    {formik2.touched.phoneNumber &&
                    formik2.errors.phoneNumber ? (
                      <div className="text-red-500">
                        {formik2.errors.phoneNumber}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-base font-medium text-txt-black"
                    >
                      Password
                    </label>
                    <input
                      type="text"
                      id="password"
                      name="password"
                      onChange={formik2.handleChange}
                      onBlur={formik2.handleBlur}
                      className="bg-input  text-sm rounded-lg  block w-full p-2.5 focus:outline-none"
                      placeholder="Flowbite"
                      required
                    />
                    {formik2.touched.password && formik2.errors.password ? (
                      <div className="text-red-500">
                        {formik2.errors.password}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block mb-2 text-base font-medium text-txt-black"
                    >
                      Password Confirmation
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="password_confirmation"
                      onChange={formik2.handleChange}
                      onBlur={formik2.handleBlur}
                      className="bg-input  text-sm rounded-lg  block w-full p-2.5 focus:outline-none"
                      placeholder="Doe"
                      required
                    />
                    {formik2.touched.password_confirmation &&
                    formik2.errors.password_confirmation ? (
                      <div className="text-red-500">
                        {formik2.errors.password_confirmation}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <label
                      htmlFor="nickname"
                      className="block mb-2 text-base font-medium text-txt-black"
                    >
                      Nick Name
                    </label>
                    <input
                      type="text"
                      id="nickname"
                      name="nickname"
                      onChange={formik2.handleChange}
                      onBlur={formik2.handleBlur}
                      className="bg-input  text-sm rounded-lg  block w-full p-2.5 focus:outline-none"
                      placeholder="Flowbite"
                      required
                    />
                    {formik2.touched.nickname && formik2.errors.nickname ? (
                      <div className="text-red-500">
                        {formik2.errors.nickname}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <label className="block mb-2 text-base font-medium text-txt-black">
                      Age
                    </label>
                    <input
                      type="text"
                      name="age"
                      onChange={(e) => {
                        const age = e.target.value.replace(/[^0-9]/g, "");
                        formik2.setFieldValue("age", age);
                      }}
                      value={formik2.values.age}
                      onBlur={formik2.handleBlur}
                      placeholder="Enter Your Email"
                      className="bg-input  text-sm rounded-lg  block w-full p-2.5 focus:outline-none "
                    />
                    {formik2.touched.age && formik2.errors.age ? (
                      <div className="text-red-500">{formik2.errors.age}</div>
                    ) : null}
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
                    type="submit"
                    className="px-8 py-3 bg-mainColor transition-all text-white rounded-[12px] hover:bg-darkGreen"
                  >
                    Save Change
                  </button>
                </div>
              </form>
            </div>
            <Toast
              icon="success"
              title="User Updated Successfully"
              show={showToast}
            />
          </div>

          {/* Modal Footer */}
        </div>
      )}
      {type === "DeleteAcc" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg md:w-[50%] lg:w-[40%] xl:w-[30%]  mx-4 p-6 relative    ">
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
                onClick={() => {
                  onaccept(data);
                }}
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
                onClick={() => setShowModal(false)}
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
              onClick={() => setShowModal(false)}
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
                onClick={() => setShowModal(false)}
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
