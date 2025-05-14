import React, { useState } from "react";
import side from "../../assets/images/side.png";

import { FaStethoscope, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ChossePath() {
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    {
      label: "For Individuals",
      description: "Book visits, ask doctors, manage your health records",
      icon: <FaUser className={`text-3xl  ${selectedRole === "individual"  ? " text-[##2D8986]" : "text-[#4C4C4C]"} `} />,
      value: "individual",
    },
    {
      label: "For Specialists",
      description: "Manage appointments, view patient cases, offer consultations",
      icon: <FaStethoscope className={`text-3xl ${selectedRole === "specialist"  ? " text-[##2D8986]" : "text-[#4C4C4C]"} `} />,
      value: "specialist",
    },
  ];

  return (
    <>
      <div className="w-full h-screen">
        <div className="grid grid-cols-3 h-full">
          <div
            className="bg-side hidden md:flex flex-col items-center justify-center"
            style={{ backgroundImage: `url(${side})`, backgroundSize: "cover" }}
          >
            <div className="text-white text-2xl sm:text-3xl md:mx-3  font-bold font-['Poppins']">
              <h1>Welcome to Balance!</h1> <br />
            </div>
            <div className="text-white text-lg sm:text-xl md:mx-3 font-normal font-['Poppins']">
              <p>We’re glad you’re here, to get started, tell us who you are.</p>
            </div>
          </div>

          <div className="home col-span-3 md:col-span-2 flex flex-col h-full">
            <div className="logo flex justify-end m-7">
              <img src={logo} alt="Balance Logo" />
            </div>
            <div className="flex-grow flex flex-col justify-center items-center">
              <div className="text-center text-2xl text-[#4C4C4C] md:text-4xl font-bold font-['Poppins']">
                <h2>Get Started - Choose Your Path</h2>
              </div>
              <div className="flex flex-col gap-4 max-w-md mx-auto mt-10 w-full px-4">
                {roles.map((role) => (
                  <label
                    key={role.value}
                    className={`flex items-center gap-4 border rounded-xl p-8 md:p-6 px- cursor-pointer transition-all duration-200 relative ${
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
                    <div className={`absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full border-2 border-[##AEAEAE] ${selectedRole === role.value ? ' border-[#40C1BD]' : ''}  flex items-center justify-center`}>
                      <div className={`h-3 w-3 rounded-full  bg-[#40C1BD] transition-all duration-300 ${selectedRole === role.value ? 'opacity-100' : 'opacity-0'}`}></div>
                    </div>
                    <div className={`pt-1 ${selectedRole?"text-[#2D8986]":"text-[#4C4C4C]"}`}>{role.icon}</div>
                    <div>
                      <div className="font-semibold text-[#4C4C4C]">{role.label}</div>
                      <p className="text-sm px-3 py-1 text-gray-600 leading-snug">{role.description}</p>
                    </div>
                  </label>
                ))}
<Link to={`${selectedRole==="individual"?"/loginPatient":"/loginSpecialist"}`} >
                <button
                  disabled={!selectedRole}
                  className={`mt-6 w-full py-3 rounded-xl text-white font-semibold transition-colors duration-200 ${
                    selectedRole ? "bg-[#40C1BD] hover:bg-[#24716f]" : "bg-gray-300 cursor-not-allowed"
                  }`}
                >
                  Next
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
