import React, { useContext, useState } from "react";
import side from "../../assets/images/side.png";

import { TfiEye } from "react-icons/tfi";
import { RxEyeClosed } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Toast from "../Toast/Toast";
import AuthContextProvider, { AuthContext } from "../../Context/AuthContext";

export default function LoginPatient() {
  const { setUser, setToken } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: validationSchema,
    onSubmit: (values) => {
      loginPatient(values);
    },
  });

  async function loginPatient(values) {
    setShowToast(false);
    setErrorMessage("");
    try {
      const res = await axios.post(
        "https://beige-wildcat-74200.zap.cloud/api/patient/login",
        values,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      setShowToast(true);
      setUser(res?.data);
      setToken(res?.data?.token);
      localStorage.setItem("token", res?.data.token);

      setTimeout(() => {
        navigate("/doctors");
      }, 100);
    } catch (error) {
      if (error.status === 401) {
        setErrorMessage("Invalid email or password");
        setShowToast(true);
      } else {
        setErrorMessage("Something went wrong");
        setShowToast(true);
      }

      console.log(error);
    }
  }
  
  

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

            <form className="space-y-5" onSubmit={formik.handleSubmit}>
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mt-1 block w-full px-4 py-2  rounded-lg bg-input focus:outline-none "
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="mt-5 ">
                    <p className="text-redd text-sm">{formik.errors.email}</p>
                  </div>
                )}
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
                    className="mt-1  block w-full px-4 py-2  rounded-lg bg-input focus:outline-none"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className="mt-5 ">
                      <p className="text-redd text-sm">
                        {formik.errors.password}
                      </p>
                    </div>
                  )}
                  <button
                    type="button"
                    className={`absolute  right-3 ${
                      formik.touched.password && formik.errors.password
                        ? "text-redd top-[15%] "
                        : "top-[34%]"
                    } flex items-center cursor-pointer`}
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
              {errorMessage ? (
                <Toast icon="error" title={errorMessage} show={showToast} />
              ) : (
                <Toast
                  title="Logged in successfully  "
                  icon="success"
                  show={showToast}
                />
              )}

              <div className="text-center text-sm text-[#4C4C4C] mt-6">
                Don’t have an account?{" "}
                <span className="text-base text-bluee">
                  <Link to="/signupPatient">Sign up</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
