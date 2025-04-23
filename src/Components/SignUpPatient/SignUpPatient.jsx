import React, { useState } from "react";
import side from "../../assets/images/side.png";
import logo from "../../assets/images/logoWithBlack.png";
import { TfiEye } from "react-icons/tfi";
import { RxEyeClosed } from "react-icons/rx";
import { Link } from "react-router-dom";
import defaultt from "../../assets/images/defAvatar.jpeg";
import avt2 from "../../assets/images/Avtar2.png";
import avt3 from "../../assets/images/Avtar3.png";
import avt4 from "../../assets/images/Avtar4.png";
import avt5 from "../../assets/images/Avtar5.png";
import avt6 from "../../assets/images/Avtar6.png";
import avt7 from "../../assets/images/Avtar7.png";
import Stepper from "../Stepper/Stepper";
import { FaFemale, FaMale } from "react-icons/fa";

export default function SignUpPatient() {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState(0);
  const [nickname, setNickname] = useState("");
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
      value: "Male",
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
      value: "specialist",
    },
  ];
  const avatars = [
    { id: 1, src: defaultt, alt: "Default avatar" },
    { id: 2, src: avt2, alt: "Avatar with curly hair" },
    { id: 3, src: avt3, alt: "Avatar with short hair" },
    { id: 4, src: avt4, alt: "Avatar with red hair" },
    { id: 5, src: avt5, alt: "Avatar with blonde hair" },
    { id: 6, src: avt6, alt: "Avatar with dark hair" },
    { id: 6, src: avt7, alt: "Avatar with dark hair" },
  ];

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
        <div className="flex justify-end p-6">
          <img src={logo} alt="Balance Logo" />
        </div>

        <div className="flex-grow flex items-center pb-32 justify-center px-4">
          <div className="w-9/12 mx-auto  p-6 bg-white  ">
            {step === 1 && (
              <>
                <h2 className=" text-lg md:text-3xl font-roboto font-semibold text-grayy mb-6">
                  Welcome to your first step let’s personalize your profile
                  together.
                </h2>

                <form className="">
                 <div className="space-y-4">
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      className="w-full px-4 py-2  rounded-md bg-[#F5F5F5] focus:outline-none "
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      className="w-full px-4 py-2  bg-[#F5F5F5] rounded-md focus:outline-none "
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Age
                    </label>
                    <input
                      type="text"
                      name="age"
                      placeholder="Enter Your Age"
                      className="w-full px-4 py-2 bg-[#F5F5F5]  rounded-md focus:outline-none "
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      placeholder="Enter Your City"
                      className="w-full px-4 bg-[#F5F5F5] py-2  rounded-md focus:outline-none "
                    />
                  </div>

                 </div>
                </form>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full bg-bluee text-white py-2 my-[48px] rounded-md hover:bg-[#2D8986] transition"
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
                <form className="">
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
                      onClick={() => setStep(3)}
                      className="w-full bg- text-white py-2 bg-bluee rounded-md hover:bg-[#2D8986] transition"
                    >
                      Next
                    </button>
                  </div>
                  
                </form>
              </>
            )}
            {step === 3 && (
              <>
                <h2 className="text-lg md:text-3xl text-center font-semibold text-gray-800 mb-6">
                  Please select your gender
                </h2>
                <div className="flex flex-col gap-4   mx-auto mt-10 w-full px-4">
                  {roles.map((role) => (
                    <label
                      key={role.value}
                      className={`flex items-start gap-4 border rounded-xl p-8 md:p-6 w-full  cursor-pointer transition-all duration-200 relative ${
                        selectedRole === role.value
                          ? "border-[#2D8986] bg-[#40C1BD]/20 shadow-md ring-2 ring-[#40C1BD]"
                          : "bg-gray-100 border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={role.value}
                        checked={selectedRole === role.value}
                        onChange={() => setSelectedRole(role.value)}
                        className="peer sr-only"
                      />
                      <div
                        className={`absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full border-2 border-[##AEAEAE] ${
                          selectedRole === role.value ? " border-[#40C1BD]" : ""
                        }  flex items-center justify-center`}
                      >
                        <div
                          className={`h-3 w-3 rounded-full  bg-[#40C1BD] transition-all duration-300 ${
                            selectedRole === role.value
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        ></div>
                      </div>
                      <div className="flex justify-center items-center gap-5">
                        {" "}
                        <div
                          className={`pt-1 ${
                            selectedRole ? "text-[#2D8986]" : "text-[#4C4C4C]"
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
                      onClick={() => setStep(4)}
                      className="w-full bg- text-white py-2 bg-bluee rounded-md hover:bg-[#2D8986] transition"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </>
            )}
            {step === 4 && (
              <>
            
                <form className="space-y-4">
                  <div className="flex flex-col items-center max-w-md mx-auto  rounded-lg p-6 bg-white">
                    {/* Main Avatar Preview */}
                    <div className="bg-gray-200 rounded-full w-24 h-24 mb-6 flex items-center justify-center overflow-hidden">
                      <img
                        src={
                          avatars[selectedAvatar]?.src ||
                          {defaultt}
                        }
                        alt="Selected profile avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Nickname Input */}
                    <div className="w-full mb-8">
                      <input
                        type="text"
                        placeholder="Nickname"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        className="w-full p-3 border border-[#AEAEAE] focus:outline-none rounded-lg text-center"
                      />
                    </div>

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
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {avatars.map((avatar, index) => (
                        <div
                          key={avatar.id}
                          className={`relative cursor-pointer rounded-full w-16 h-16 overflow-hidden ${
                            selectedAvatar === index ? "ring-2 ring-bluee" : ""
                          }`}
                          onClick={() => setSelectedAvatar(index)}
                        >
                          <img
                            src={avatar.src}
                            alt={avatar.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>

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
<Link to="/Doctors"
className="w-full  text-white py-2 bg-bluee rounded-md hover:bg-[#2D8986] transition">
                    <button
                      type="button"
                      className="w-full  text-white py-2 bg-bluee rounded-md hover:bg-[#2D8986] transition"
                    >
                      Sign Up
                    </button>
                    </Link>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
