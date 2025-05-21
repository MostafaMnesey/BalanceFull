import PatientSec2 from "../patientSec2/patientSec2";

export default function PatientSession() {
    return <>
        <div className='grid grid-cols-1 xl:grid-cols-6 mt-5 gap-6 '>
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

                <PatientSec2 />
            </div>
        </div>
    </>
}
