// import {  useState } from 'react';
import patientImg from '../../../../../../assets/images/avatars/patient.svg'
import addImg from '../../../../../../assets/images/avatars/add-square.svg'

import { FaFilter } from "react-icons/fa6";
import PatientSession from './PatientSession/PatientSession';
import PatientTasks from './PatientTasks/PatientTasks';
import SessionPopUp from '../PatientPopUp/SessionPopUp';
import { useState } from 'react';

export default function PatientProf({ patient }) {
    if (!patient) return <p className="text-center mt-10 text-gray-500">No patient data found</p>;

    const [sessionPop, setSessionPop] = useState(false);
    const [showPatientInfo, setShowPatientInfo] = useState(false);
    const handleStartJourny = () => {
        setSessionPop(true)
    }
    const handleCloseSession = () => {
        setSessionPop(false);
    };
    const handleConfirm = () => {
        setSessionPop(false);         // Hide the popup
        setShowPatientInfo(true);    // Show PatientSession and PatientTasks
    };


    const sessionsData = [
        {
            sessionName: 'Total Sessions',
            sessionNum: '20'
        },
        {
            sessionName: 'Sessions Attended',
            sessionNum: '0'
        },
        {
            sessionName: 'Sessions Remaining',
            sessionNum: '0'
        },
        {
            sessionName: 'Missed Sessions',
            sessionNum: '0'
        },
    ]
    return (
        <section>

            <div className="container p-6">
                {/* Header */}
                <div className="bg-[#F5F5F5] rounded-xl shadow-md text-center p-6 h-full flex flex-col items-center justify-center gap-2">
                    <img
                        src={patientImg}
                        alt='patientImg'
                        className="w-24 h-24 mx-auto rounded-full mb-4"
                    />
                    <h2 className="text-xl font-semibold">{patient.name}</h2>

                    {showPatientInfo ? <>
                        <div className='grid grid-cols-1 md:grid-cols-8 gap-3 mt-2'>
                            {sessionsData.map((sess, i) => (

                                <div key={i} className='col-span-2 relative 
md:after:absolute md:after:top-0 md:after:right-0 md:after:h-full md:after:w-px md:after:bg-gray-300 md:after:content-[""] 
flex flex-col gap-2 items-center justify-center pr-3
before:absolute before:bottom-0 before:left-0 before:w-full before:h-px before:bg-gray-300 before:content-[""] lg:before:content-none'>

                                    <span className='text-gray-500'>{sess.sessionName}</span>
                                    <span className='font-semibold'>{sess.sessionNum}</span>
                                </div>
                            ))}




                        </div>
                    </> :
                        <p className="text-gray-600">
                            <span className="font-semibold">Addiction Type:</span> {patient.AddictionType}
                        </p>
                    }

                </div>

                {/* Start Button */}
                <div className={`text-center mt-6 flex flex-col xl:flex-row gap-3 justify-end  ${showPatientInfo ? 'md:justify-between' : 'justify-end'}`}>
                    {showPatientInfo && (
                        <div className="flex  md:items-center gap-0"> {/* flex wrap */}
                            <div className="relative w-full md:w-[570px]">
                                <input
                                    type="search"
                                    id="default-search"
                                    className="block w-full p-4 ps-10 text-sm text-gray-900 rounded-[100px] bg-[#F5F5F5] focus:outline-none"
                                    placeholder="Search For Best Doctor"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="absolute inset-y-0 end-5 flex items-center ps-3 cursor-pointer"
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

                            <button className="ml-2">
                                <div className="px-4 py-3.5 bg-[#F5F5F5] rounded-[100px] outline outline-[0.60px] outline-offset-[-0.60px] outline-neutral-100">
                                    <div className="flex justify-center items-center gap-3">
                                        <span className="text-stone-500 text-xs font-normal">
                                            Filter
                                        </span>
                                        <FaFilter className="text-[#1B514F] w-6 h-6" />
                                    </div>
                                </div>
                            </button>
                        </div>
                    )}



                    {showPatientInfo ? <>
                        <button onClick={handleStartJourny} className="bg-teal-400 hover:bg-teal-500 text-white font-semibold px-6 py-3 rounded-full transition-all flex items-center justify-center gap-2">
                            Add New Task
                            <img src={addImg} alt="" />
                        </button>
                    </> :
                        <button onClick={handleStartJourny} className="bg-teal-400 hover:bg-teal-500 text-white font-semibold px-6 py-3 rounded-full transition-all">
                            Start Journy
                        </button>
                    }


                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 xl:grid-cols-6 gap-6 mt-8 ">
                    {/* Addiction Info */}
                    <div className="bg-[#F5F5F5] rounded-xl p-4 shadow-sm flex flex-col justify-between col-span-3 gap-2">
                        <h3 className="font-bold text-gray-900 mb-2">Addiction Info</h3>
                        <div className='flex  justify-between'>
                            <span className="font-medium   ">
                                Addiction Type:
                            </span>
                            <span className='text-gray-500 text-sm'>

                                {patient.AddictionType}
                            </span>
                        </div>
                        <div className='flex  justify-between'><span className="font-medium">Start Date of Treatment:</span>
                            <span className='text-gray-500 text-sm'>

                                Today
                            </span>
                        </div>
                        <div className='flex  justify-between'><span className="font-medium">Current Status:</span>
                            <span className='text-gray-500 text-sm'>

                                {patient.status}
                            </span>
                        </div>
                    </div>

                    {/* Basic Personal Info */}
                    <div className="bg-[#F5F5F5] rounded-xl p-4 shadow-sm flex flex-col justify-between col-span-3 gap-2">
                        <h3 className="font-bold text-gray-900 mb-2">Basic Personal Info</h3>
                        <div className='flex  justify-between'><span className="font-medium"> Name:</span>
                            <span className='text-gray-500 text-sm'>

                                {patient.name}
                            </span>
                        </div>
                        <div className='flex  justify-between'><span className="font-medium">Age:</span>
                            <span className='text-gray-500 text-sm'>

                                {patient.Age}
                            </span>
                        </div>
                        <div className='flex  justify-between'><span className="font-medium">City:</span>
                            <span className='text-gray-500 text-sm'>

                                Cairo
                            </span>
                        </div>
                        <div className='flex  justify-between'><span className="font-medium">Gender:</span>
                            <span className='text-gray-500 text-sm'>

                                {patient.Gender}
                            </span>
                        </div>
                    </div>

                </div>

                {showPatientInfo && (
                    <div className="p-4">
                        <PatientSession />
                        <PatientTasks />
                    </div>
                )}



            </div>
            {sessionPop && <SessionPopUp onClose={handleCloseSession} onConfirm={handleConfirm} />}
        </section>
    );
}
