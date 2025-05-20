import { FaFilter } from "react-icons/fa6";
import filterImg from '../../../../../assets/images/avatars/document-filter.svg'
import addSqr from '../../../../../assets/images/avatars/add-square.svg'
import PatientTable from "./PatientTable/PatientTable";
export default function Patient() {
    return <>
        <section>

            <div className="container">

                <div className="grid grid-cols-6">
                    <div className="col-span-4 ">
                        <h1 className=" text-lg font-semibold">Patients</h1>
                        <span className="text-sm text-gray-500 lead">All patients you're currently working with</span>
                    </div>
                    <div className="col-span-2  flex justify-evenly">
                        <button>
                            <div className="px-4 py-3.5 bg-[#F5F5F5] shadow rounded-[100px] outline outline-[0.60px] outline-offset-[-0.60px] outline-neutral-100 
                            transition-all hover:-translate-y-2">
                                <div className="flex justify-center items-center gap-4">
                                    <span className="text-stone-500 text-sm font-medium">Filter</span>
                                    <img src={filterImg} alt="filterImg" />
                                    {/* <FaFilter className="text-[#1B514F] w-6 h-6" /> */}
                                </div>
                            </div>
                        </button>
                        <button>
                            <div className="px-4 py-3.5 bg-gray-400 shadow rounded-[100px] outline outline-[0.60px] outline-offset-[-0.60px] outline-neutral-100 
                            transition-all hover:-translate-y-2">
                                <div className="flex justify-center items-center gap-4">
                                    <span className="text-white text-sm font-medium">Add Task</span>
                                    <img src={addSqr} alt="filterImg" />
                                    {/* <FaFilter className="text-[#1B514F] w-6 h-6" /> */}
                                </div>
                            </div>
                        </button>
                        
                    </div>
                </div>

                <PatientTable/>
            </div>


        </section>
    </>
}
