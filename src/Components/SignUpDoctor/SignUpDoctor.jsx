import React, { useState } from "react";
import side from "../../assets/images/side.png";
import avatar from "../../assets/images/defAvatar.jpeg";

import { TfiEye } from "react-icons/tfi";
import { RxEyeClosed } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import defaultt from "../../assets/images/defAvatar.jpeg";
import Stepper from "../Stepper/Stepper";
import { FaFemale, FaMale } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Toast from "../Toast/Toast";

export default function SignUpDoctor() {
  const simplePasswordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
  const navigate = useNavigate();
 const validationSchema = Yup.object().shape({
  fullname: Yup.string().required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone_number: Yup.string()
    .matches(/^\d+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
  specialization: Yup.string().required("Specialization is required"),
  medical_license_number: Yup.string().required("Medical license number is required"),
  years_of_experience: Yup.string()
    .min(0, "Years of experience cannot be negative")
    .required("Years of experience is required"),
  clinic_or_hospital_name: Yup.string().required("Clinic or hospital name is required"),
  work_address: Yup.string().required("Work address is required"),
  available_working_hours: Yup.string().required("Available working hours are required"),
  image: Yup.mixed()
    .nullable()
    .required("Image is required"),
  bio: Yup.string().required("Bio is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
  gender: Yup.string()
    .oneOf(["male", "female"], 'Gender must be either "male" or "female"')
    .required("Gender is required"),
});


const formik = useFormik({
  initialValues: {
    fullname: "",
    email: "",
    phone_number: "",
    specialization: "",
    medical_license_number: "",
    years_of_experience: "",
    clinic_or_hospital_name: "",
    work_address: "",
    available_working_hours: "",
    image: null,
    bio: "",
    password: "",
    password_confirmation: "",
    gender: "",
  },
  validationSchema,
  onSubmit: (values) => {
    handleRegister(values);
  },
});

const [imagePreview, setImagePreview] = useState(null);

const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    setImagePreview(URL.createObjectURL(file)); // للعرض فقط
    formik.setFieldValue("image", file); // حفظ الملف في Formik
  }
};

const handleRegister = async (values) => {
  const formData = new FormData();

  // نضيف الحقول كلها
  for (const key in values) {
    formData.append(key, values[key]);
  }

  try {
    const  res  = await axios.post(
      "https://beige-wildcat-74200.zap.cloud/api/doctor/register",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(res);
    
     if (res.status === 200) {
        setShowToast(true);
        setTimeout(() => {
          navigate("/LoginPatient/specialist");
        }, 50);
      }

    
    
  } catch (error) {
    console.error("خطأ في التسجيل:", error.response?.data || error.message);
  }
};

  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState(null);
  const [showToast, setShowToast] = useState(false);
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

  const hasErrorsOrEmptyFields =
    !formik.values.fullname ||
    !formik.values.email ||
    !formik.values.phone_number ||
    !formik.values.specialization ||
    !formik.values.medical_license_number ||
    !formik.values.years_of_experience ||
    !formik.values.clinic_or_hospital_name ||
    !formik.values.work_address ||
    !formik.values.available_working_hours ||
    formik.errors.fullname ||
    formik.errors.email ||
    formik.errors.phone_number ||
    formik.errors.specialization ||
    formik.errors.medical_license_number ||
    formik.errors.years_of_experience ||
    formik.errors.clinic_or_hospital_name ||
    formik.errors.work_address ||
    formik.errors.available_working_hours;
  async function Register(values) {
     const formData = new FormData();
      if (values.image) {
        formData.append("image", values.image);
      }
    try {
      const { data } = await axios.post(
        "https://beige-wildcat-74200.zap.cloud/api/doctor/register",
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
          navigate("/LoginPatient/specialist");
        }, 50);
      }
    } catch (error) {
      console.log(error);
    }
  }
console.log(formik.values.image);


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
          <div className="flex-grow flex  items-center pb-32 justify-center px-4">
            <div className="w-8/12 mx-auto flex flex-col justify-center min-h-[81vh]   p-6 bg-white  ">
              {step === 1 && (
                <>
                  <h2 className=" text-lg md:text-3xl font-roboto font-semibold text-black me-6">
                    Welcome, Doctor! Please fill in your details to join our
                    medical team
                  </h2>

                  <div className=" my-2">
                    <span className="text-[#1F1F1F]  text-lg font-poppins font-semibold">
                      Basic Information
                    </span>
                  </div>
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
                      {formik.touched.fullname && formik.errors.fullname && (
                        <div className="mt-5 ">
                          <p className="text-redd text-sm">
                            {formik.errors.fullname}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                            formik.setFieldValue("phone_number", onlyNums);
                          }}
                          value={formik.values.phoneNumber}
                          onBlur={formik.handleBlur}
                          placeholder="Enter Your Phone Number"
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
                    </div>
                    <div className=" my-2">
                      <span className="text-[#1F1F1F]  text-lg font-poppins font-semibold">
                        Professional Information
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Specialization
                        </label>
                        <input
                          type="text"
                          name="specialization"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Enter Your Specialization"
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
                          Medical License Number
                        </label>
                        <input
                          type="text"
                          name="medical_license_number"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Enter Your Medical License Number"
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
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Years of Experience
                        </label>
                        <input
                          type="text"
                          name="years_of_experience"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Enter Your Years of Experience"
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
                          Clinic / Hospital Name
                        </label>
                        <input
                          type="text"
                          name="clinic_or_hospital_name"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          placeholder="Enter your Clinic / Hospital Name"
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
                    </div>{" "}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Work Address
                        </label>
                        <input
                          type="text"
                          name="work_address"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Enter Your Work Address"
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
                          Available Working Hours
                        </label>
                        <input
                          type="text"
                          name="available_working_hours"
                          onChange={(e) => {
                            const onlyNums = e.target.value.replace(
                              /[^0-9]/g,
                              ""
                            );
                            formik.setFieldValue(
                              "available_working_hours",
                              onlyNums
                            );
                          }}
                          value={formik.values.available_working_hours}
                          onBlur={formik.handleBlur}
                          placeholder="Enter Your Available Working Hours"
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
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={hasErrorsOrEmptyFields}
                    className={`w-full text-white py-2 my-[48px] rounded-full 
    ${
      hasErrorsOrEmptyFields
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
                        className="w-full bg-gray-200 text-gray-700 py-2 rounded-full hover:bg-gray-300 transition"
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
                        }  text-white py-2 bg-bluee rounded-full hover:bg-[#2D8986] transition`}
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
                            formik.values.gender === role.value
                              ? "border-[#2D8986] bg-[#40C1BD]/20 shadow-md ring-2 ring-[#40C1BD]"
                              : "bg-gray-100 border-gray-300"
                          }`}
                        >
                          <input
                            type="radio"
                            name="gender"
                            value={
                              formik.values.gender === role.value
                                ? ""
                                : role.value
                            }
                            checked={formik.values.gender === role.value}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="peer sr-only"
                          />
                          <div
                            className={`absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full border-2 border-[##AEAEAE] ${
                              formik.values.gender === role.value
                                ? " border-[#40C1BD]"
                                : ""
                            }  flex items-center justify-center`}
                          >
                            <div
                              className={`h-3 w-3 rounded-full  bg-[#40C1BD] transition-all duration-300 ${
                                formik.values.gender === role.value
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
                          className="w-full bg-gray-200 text-gray-700 py-2 rounded-full hover:bg-gray-300 transition"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          disabled={
                            formik.errors.gender || !formik.values.gender
                          }
                          onClick={() => setStep(4)}
                          className={`w-full  text-white py-2 bg-bluee rounded-full hover:bg-[#2D8986] transition ${
                            !formik.values.gender
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
  <div className="flex flex-col items-center justify-center bg-white px-4">
    <h2 className="text-center text-lg font-semibold text-gray-700 mb-4">
      Add your photo to personalize your account
      <br />
      and build trust with patients
    </h2>

    <div className="relative">
      <label htmlFor="image-upload" className="cursor-pointer">
        <img
          src={imagePreview || avatar}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-2 border-teal-400"
        />
        <input
          type="file"
          id="image-upload"
          name="image"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
          onBlur={formik.handleBlur}
        />
      </label>
    </div>

    {  formik.errors.image && (
      <p className="text-red-500 text-sm mt-2">{formik.errors.image}</p>
    )}

    { !formik.errors.image && (
      <p className="text-green-500 text-sm mt-2">Image uploaded</p>
    )}

    <div className="w-full max-w-md mt-6 space-y-4">
      <textarea
        placeholder="Enter your Bio"
        name="bio"
        rows={4}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.bio}
        className="w-full px-4 py-2 rounded-md border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
      />
      {formik.touched.bio && formik.errors.bio && (
        <p className="text-red-500 text-sm mt-1">{formik.errors.bio}</p>
      )}

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setStep(3)}
          className="w-full bg-gray-200 text-gray-700 py-2 rounded-full hover:bg-gray-300 transition"
        >
          Back
        </button>

        <button
          type="submit"
          className="w-full text-white py-2 bg-bluee rounded-full hover:bg-[#2D8986] transition"
        >
          Sign Up
        </button>
      </div>
    </div>
  </div>
)}

            </div>
            <Toast show={showToast} title="Doctor registered successfully" />
          </div>
        </form>
      </div>
    </div>
  );
}
