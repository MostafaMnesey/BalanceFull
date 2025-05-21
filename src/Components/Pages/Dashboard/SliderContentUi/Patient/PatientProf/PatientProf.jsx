import { useState } from 'react';
import patientImg from '../../../../../../assets/images/avatars/patient.svg'
import noTask from '../../../../../../assets/images/avatars/noTasks.svg'
import TaskProgress from '../../../../TaskPage/TaskProgress/TaskProgress';
import PatientSec2 from './patientSec2/patientSec2';
import { FaFilter } from "react-icons/fa6";

export default function PatientProf({ patient }) {
    if (!patient) return <p className="text-center mt-10 text-gray-500">No patient data found</p>;
    const [patientTasks, setPatientTasks] = useState(null);
    return (
        <section>

            <div className="container p-6">
                {/* Header */}
                <div className="bg-gray-100 rounded-xl shadow-md text-center p-6">
                    <img
                        src={patientImg}
                        alt='patientImg'
                        className="w-24 h-24 mx-auto rounded-full mb-4"
                    />
                    <h2 className="text-xl font-semibold">{patient.name}</h2>
                    <p className="text-gray-600">
                        <span className="font-semibold">Addiction Type:</span> {patient.AddictionType}
                    </p>
                </div>

                {/* Start Button */}
                <div className="text-center mt-6 flex">
                    <form className="w-[570px]">
                                <div className="relative">
                                  <input
                                    type="search"
                                    id="default-search"
                                    className="block w-3/4 p-4 ps-10 text-sm text-gray-900 rounded-[100px] bg-[#F5F5F5] focus:outline-none"
                                    placeholder="Search For Best Doctor"
                                    required
                                  />
                                  <button
                                    type="submit"
                                    className="absolute inset-y-0 end-40 flex items-center ps-3 cursor-pointer"
                                  >
                                    <svg
                                      className="w-4 h-4 text-gray-500"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </form>
                    
                              <button>
                                <div className="px-4 py-3.5 bg-[#F5F5F5] rounded-[100px] outline outline-[0.60px] outline-offset-[-0.60px] outline-neutral-100">
                                  <div className="flex justify-center items-center gap-3">
                                    <span className="text-stone-500 text-xs font-normal">
                                      Filter
                                    </span>
                                    <FaFilter className="text-[#1B514F] w-6 h-6" />
                                  </div>
                                </div>
                              </button>
                    {/* <button className="bg-teal-400 hover:bg-teal-500 text-white font-semibold px-6 py-2 rounded-full">
                        full re
                    </button> */}
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mt-8 ">
                    {/* Addiction Info */}
                    <div className="bg-[#F5F5F5] rounded-xl p-4 shadow-sm flex flex-col justify-between col-span-3 gap-2">
                        <h3 className="font-bold text-gray-900 mb-2">Addiction Info</h3>
                        <div className='flex  justify-between'>
                            <span className="font-medium   ">
                                Addiction Type:
                            </span>
                            {patient.AddictionType}
                        </div>
                        <div className='flex  justify-between'><span className="font-medium">Start Date of Treatment:</span> Today</div>
                        <div className='flex  justify-between'><span className="font-medium">Current Status:</span> {patient.status}</div>
                    </div>

                    {/* Basic Personal Info */}
                    <div className="bg-[#F5F5F5] rounded-xl p-4 shadow-sm flex flex-col justify-between col-span-3 gap-2">
                        <h3 className="font-bold text-gray-900 mb-2">Basic Personal Info</h3>
                        <div className='flex  justify-between'><span className="font-medium"> Name:</span> {patient.name}</div>
                        <div className='flex  justify-between'><span className="font-medium">Age:</span> {patient.Age}</div>
                        <div className='flex  justify-between'><span className="font-medium">City:</span> Cairo</div>
                        <div className='flex  justify-between'><span className="font-medium">Gender:</span> {patient.Gender}</div>
                    </div>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-6 mt-5 gap-6 '>
                    <div className='bg-[#F5F5F5] rounded-xl p-4 shadow-sm flex flex-col col-span-3 gap-4'>
                        <h3 className="font-bold text-gray-900 mt-3 ">Session Details</h3>
                        <div>

                            <ul className="list-disc px-6 ">
                                <li>
                                    <div className="flex gap-2 mb-2">
                                        <span className="font-bold capitalize">day:</span>
                                        <span className='text-gray-500'>Every Thursday</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2 mb-2">
                                        <span className="font-bold capitalize">Time: </span>
                                        <span className='text-gray-500'>6:00 PM</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2 mb-2">
                                        <span className="font-bold capitalize">Duration: </span>
                                        <span className='text-gray-500'>45 minutes</span>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    {/* <PatientSec2/> */}
                    </div>
                    <div className='col-span-3 '>

                    <PatientSec2/>
                    </div>
                </div>
                <div className='mt-6'>

                    <h4 className='font-bold'>Patient Tasks</h4>
                {patientTasks && patientTasks.length > 0 ? (
                    <TaskProgress />
                ) : (
                    <div className="flex flex-col items-center justify-center mt-5 min-h-[200px]">
                        <div className="w-6/12">
                            <img src={noTask} alt="No tasks" className="mx-auto object-contain" />
                        </div>
                    </div>
                )}
                </div>



            </div>
        </section>
    );
}
