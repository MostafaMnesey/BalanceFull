import React, { useState } from "react";
import side from "../../assets/images/side.png";

import { TfiEye } from "react-icons/tfi";
import { RxEyeClosed } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import defaultt from "../../assets/images/defAvatar.jpeg";
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
import Stepper from "../Stepper/Stepper";
import { FaFemale, FaMale } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Toast from "../Toast/Toast";
import { PulseLoader } from "react-spinners";

export default function SignUpPatient() {
  const simplePasswordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
  const navigate = useNavigate();
  const valudationSchema = Yup.object().shape({
    fullname: Yup.string()
      .required("Full name is required")
      .min(8, "Full name must be at least 8 characters"),
    nickname: Yup.string()
      .required("Nickname is required")
      .min(4, "Nickname must be at least 4 characters")
      .max(12, "Nickname must be less than 12 characters"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    age: Yup.string().required("Age is required"),
    city: Yup.string().required("City is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        simplePasswordRegex,
        "Password must be at least 6 characters and include letters, numbers, and a special character"
      ),
    password_confirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
    gander: Yup.string().required("Gender is required"),
    avatar: Yup.string().required("Avatar is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
  });
  const formik = useFormik({
    initialValues: {
      fullname: "",
      nickname: "",
      email: "",
      age: "",
      city: "",
      password: "",
      password_confirmation: "",
      gander: "",
      avatar: "0",
      phoneNumber: "",
    },
    validationSchema: valudationSchema,
    validate: (values) => {
      console.log(values);
    },

    onSubmit: (values) => {
      Register(values);
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const roles = [
    {
      label: "Male",

      icon: (
        <FaMale
          className={`text-3xl ${
            selectedRole === "Male" ? " text-[##2D8986]" : "text-[#4C4C4C]"
          } `}
        />
      ),
      value: "male",
    },
    {
      label: "Female",

      icon: (
        <FaFemale
          className={`text-3xl ${
            selectedRole === "specialist"
              ? " text-[##2D8986]"
              : "text-[#4C4C4C]"
          } `}
        />
      ),
      value: "female",
    },
  ];
  const avatars = [
    { id: 0, src: defaultt, alt: "Default Avatar" },
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

  async function Register(values) {
    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://beige-wildcat-74200.zap.cloud/api/patient/register",
        values,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);

      if (data?.message === "Patient registered successfully") {
        setShowToast(true);
        setTimeout(() => {
          navigate("/LoginPatient/patient");
        }, 50);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full h-screen grid grid-cols-3">
      {/* Left side image and message */}
      <div className="bg-side hidden md:flex flex-col items-center justify-center">
        <div className="text-white text-2xl sm:text-3xl font-bold font-['Poppins'] text-center px-4">
          <Stepper currentStep={step} />
        </div>
      </div>

      {/* Right login section */}
      <div className="col-span-3 md:col-span-2 flex flex-col h-full">
        <div className="flex justify-end p-6"></div>
        <form className="" onSubmit={formik.handleSubmit}>
          <div className="flex-grow flex items-center pb-32 justify-center px-4">
            <div className="w-9/12 mx-auto  p-6 bg-white  ">
              {step === 1 && (
                <>
                  <h2 className=" text-lg md:text-3xl font-roboto font-semibold text-grayy mb-6">
                    Welcome to your first step let’s personalize your profile
                    together.
                  </h2>

                  <div className="space-y-4">
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
                        <p className="text-redd text-sm">{formik.errors.age}</p>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter Your City"
                        className="w-full px-4 bg-[#F5F5F5] py-2  rounded-md focus:outline-none "
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={
                      !formik.values.fullname ||
                      !formik.values.email ||
                      !formik.values.phoneNumber ||
                      !formik.values.age ||
                      !formik.values.city ||
                      formik.errors.fullname ||
                      formik.errors.email ||
                      formik.errors.phoneNumber ||
                      formik.errors.age ||
                      formik.errors.city
                    }
                    className={`w-full text-white py-2 my-[48px] rounded-md 
    ${
      !formik.values.fullname ||
      !formik.values.email ||
      !formik.values.phoneNumber ||
      !formik.values.age ||
      !formik.values.city ||
      formik.errors.fullname ||
      formik.errors.email ||
      formik.errors.phoneNumber ||
      formik.errors.age ||
      formik.errors.city
        ? "opacity-50 bg-bluee cursor-not-allowed"
        : "bg-bluee hover:bg-[#2D8986]"
    }
    transition`}
                  >
                    Next
                  </button>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="text-lg md:text-3xl font-roboto font-semibold text-grayy mb-6">
                    Please create a strong password to secure your account
                  </h2>
                  <div className=" flex flex-col justify-center min-h-[60vh]">
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium  text-[#4C4C4C]"
                        >
                          Password
                        </label>
                        <div className="mt-1 relative">
                          <input
                            type={`${showPassword ? "text" : "password"}`}
                            id="password"
                            name="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter Your Password"
                            className="block w-full px-4 py-2   rounded-lg bg-[#F5F5F5] focus:outline-none "
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            <span className="">
                              {showPassword ? <TfiEye /> : <RxEyeClosed />}
                            </span>
                          </button>
                        </div>
                      </div>
                      {formik.touched.password && formik.errors.password && (
                        <div className="mt-5 ">
                          <p className="text-redd text-sm">
                            {formik.errors.password}
                          </p>
                        </div>
                      )}
                      <div>
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium  text-[#4C4C4C]"
                        >
                          Confirm Password
                        </label>
                        <div className="mt-1 relative">
                          <input
                            type={`${showPassword ? "text" : "password"}`}
                            id="ConfirmPassword"
                            name="password_confirmation"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Confirm Password"
                            className="block w-full px-4 py-2   rounded-lg bg-[#F5F5F5] focus:outline-none "
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            <span className="">
                              {showPassword ? <TfiEye /> : <RxEyeClosed />}
                            </span>
                          </button>
                        </div>
                      </div>
                      {formik.touched.password_confirmation &&
                        formik.errors.password_confirmation && (
                          <div className="mt-5 ">
                            <p className="text-redd text-sm">
                              {formik.errors.password_confirmation}
                            </p>
                          </div>
                        )}
                    </div>
                    <div className="flex gap-2 my-[48px]">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="w-full bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        disabled={
                          !formik.values.password ||
                          !formik.values.password_confirmation ||
                          formik.errors.password_confirmation ||
                          formik.errors.password
                        }
                        onClick={() => setStep(3)}
                        className={`w-full ${
                          !formik.values.password ||
                          !formik.values.password_confirmation ||
                          formik.errors.password_confirmation ||
                          formik.errors.password
                            ? "opacity-50 bg-bluee cursor-not-allowed"
                            : ""
                        }  text-white py-2 bg-bluee rounded-md hover:bg-[#2D8986] transition`}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </>
              )}
              {step === 3 && (
                <>
                  <h2 className="text-lg md:text-3xl text-center font-semibold text-gray-800 mb-6">
                    Please select your gender
                  </h2>
                  <div className=" flex flex-col justify-center min-h-[60vh]">
                    <div className="flex flex-col gap-4   mx-auto mt-10 w-full px-4">
                      {roles.map((role) => (
                        <label
                          key={role.value}
                          className={`flex items-start gap-4 border rounded-xl p-8 md:p-6 w-full  cursor-pointer transition-all duration-200 relative ${
                            formik.values.gander === role.value
                              ? "border-[#2D8986] bg-[#40C1BD]/20 shadow-md ring-2 ring-[#40C1BD]"
                              : "bg-gray-100 border-gray-300"
                          }`}
                        >
                          <input
                            type="radio"
                            name="gander"
                            value={
                              formik.values.gander === role.value
                                ? ""
                                : role.value
                            }
                            checked={formik.values.gander === role.value}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="peer sr-only"
                          />
                          <div
                            className={`absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full border-2 border-[##AEAEAE] ${
                              formik.values.gander === role.value
                                ? " border-[#40C1BD]"
                                : ""
                            }  flex items-center justify-center`}
                          >
                            <div
                              className={`h-3 w-3 rounded-full  bg-[#40C1BD] transition-all duration-300 ${
                                formik.values.gander === role.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              }`}
                            ></div>
                          </div>
                          <div className="flex justify-center items-center gap-5">
                            {" "}
                            <div
                              className={`pt-1 ${
                                selectedRole
                                  ? "text-[#2D8986]"
                                  : "text-[#4C4C4C]"
                              }`}
                            >
                              {role.icon}
                            </div>
                            <div>
                              <div className="font-semibold text-[#4C4C4C]">
                                {role.label}
                              </div>
                            </div>
                          </div>
                        </label>
                      ))}
                      <div className="flex gap-2 my-[48px]">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="w-full bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          disabled={
                            formik.errors.gander || !formik.values.gander
                          }
                          onClick={() => setStep(4)}
                          className={`w-full  text-white py-2 bg-bluee rounded-md hover:bg-[#2D8986] transition ${
                            !formik.values.gander
                              ? "opacity-50 bg-bluee cursor-not-allowed"
                              : ""
                          }`}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {step === 4 && (
                <>
                  <div className="flex flex-col items-center max-w-md mx-auto  rounded-lg p-6 bg-white">
                    {/* Main Avatar Preview */}
                    <div className="bg-gray-200 rounded-full w-24 h-24 mb-6 flex items-center justify-center overflow-hidden">
                      <img
                        src={avatars[selectedAvatar]?.src || { defaultt }}
                        alt="Selected profile avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Nickname Input */}
                    <div className="w-full mb-8">
                      <input
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Nickname"
                        name="nickname"
                        className="w-full p-3 border border-[#AEAEAE] focus:outline-none rounded-lg text-center"
                      />
                    </div>
                    {formik.touched.nickname && formik.errors.nickname && (
                      <div className="mb-3 ">
                        <p className="text-redd text-sm">
                          {formik.errors.nickname}
                        </p>
                      </div>
                    )}

                    {/* Avatar Selection Text */}
                    <div className="text-center mb-4">
                      <h2 className="text-base text-[#1F1F1F] font-poppins font-semibold">
                        Pick an avatar that reflects your style
                      </h2>
                      <p className="text-[#878787] text-base">
                        choose the one that feels most like you!
                      </p>
                    </div>

                    {/* Avatar Grid */}
                    <div className="grid grid-cols-2  md:grid-cols-7 gap-5 mb-8">
                      {avatars.map((avatar, index) => (
                        <div
                          key={avatar.id}
                          className={`relative cursor-pointer rounded-full w-16 h-16 overflow-hidden ${
                            selectedAvatar === index ? "ring-2 ring-bluee" : ""
                          }`}
                          onClick={() => {
                            setSelectedAvatar(index);
                            formik.setFieldValue("avatar", avatar.id);
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
                    <input
                      type="hidden"
                      name="avatar"
                      value={formik.values.avatar}
                    />

                    {/* Sign Up Button */}
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="w-full bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition"
                    >
                      Back
                    </button>

                    <button
                      type="submit"
                      className="w-full  text-white py-2 bg-bluee rounded-md hover:bg-[#2D8986] transition"
                    >
                      {loading ? (
                       <PulseLoader
                       color="#fff"
                       size={8}
                       speedMultiplier={1}
                       
                       />
                      ) : (
                        "Sign Up"
                      )}
                    </button>
                  </div>
                </>
              )}
            </div>
            <Toast show={showToast} title="Patient registered successfully" />
          </div>
        </form>
      </div>
    </div>
  );
}
