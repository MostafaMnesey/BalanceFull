import React, { useState } from "react";
import side from "../../assets/images/side.png";
import logo from "../../assets/images/logoWithBlack.png";
import { TfiEye } from "react-icons/tfi";
import { RxEyeClosed } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function LoginPatient() {
  const [showPassword, setShowPassword] = useState(false); // [assword,se]
  return (
    <div className="w-full h-screen grid grid-cols-3">
      {/* Left side image and message */}
      <div
        className="bg-side hidden md:flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${side})`, backgroundSize: "cover" }}
      >
        <div className="text-white text-2xl sm:text-3xl font-bold font-['Poppins'] text-center px-4">
          <h1>Welcome to Balance!</h1>
        </div>
        <div className="text-white text-lg sm:text-xl font-normal font-['Poppins'] text-center px-4">
          <p>We’re glad you’re here, to get started, tell us who you are.</p>
        </div>
      </div>

      {/* Right login section */}
      <div className="col-span-3 md:col-span-2 flex flex-col h-full">
        <div className="flex justify-end p-6">
          <img src={logo} alt="Balance Logo" />
        </div>

        <div className="flex-grow flex items-center justify-center px-4">
          <div className="w-full max-w-md">
            <div className="text-start mb-8">
              <h2 className="text-3xl font-bold text-[#4C4C4C] mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-600 text-sm">
                Let’s take the next step toward balance together.
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#4C4C4C]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#40C1BD]"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#4C4C4C]"
                >
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    type={`${showPassword ? "text" : "password"}`}
                    id="password"
                    placeholder="Enter Your Password"
                    className="block w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#40C1BD]"
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

              <button
                type="submit"
                className="w-full py-3 bg-[#40C1BD] text-white font-semibold rounded-lg hover:bg-[#2D8986] transition-colors"
              >
                Sign in
              </button>

              <div className="text-center text-sm text-[#4C4C4C] mt-6">
                Don’t have an account?{" "}
                <Link
                  to="/SignupPatient"
                  className="text-[#40C1BD] font-semibold"
                >
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
