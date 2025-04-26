import { FaAward } from "react-icons/fa6";
import { GrTasks } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";

export default function TaskInfo() {

    const taskInfo = [
        {
            date: '11:08 AM, 12 Aug',
            icon: <FaAward />,
            title: ' Points Earned',
            points: '240 points'
        },
        {
            date: '11:08 AM, 12 Aug',
            icon: <GrTasks />,
            title: ' Tasks Completed',
            points: '75%'
        },
        {
            date: '11:08 AM, 12 Aug',
            icon: <SlCalender />,
            title: ' Consecutive Days of Commitment',
            points: '12 days'
        },
    ]
    return (
        <>
            <section className='mt-40'>
                <div className="container">
                    <div className="flex flex-wrap justify-center gap-5 p-5 md-p-0">

                        {taskInfo.map((task, i) => (
                            <div
                                key={i}
                                className="group w-full sm:w-[80%] md:w-[45%] lg:w-[30%] p-6 
                                           bg-gary-200 border border-gray-300 rounded-lg shadow-sm 
                                           dark:bg-[#FAFAFA] dark:border-gray-300 
                                           transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg   "
                            >
                                <div className="grid grid-cols-6 gap-4 relative">
                                    <div className="col-span-2 text-3xl 
                                                bg-[#ECF9F8] text-[#236A68] 
                                                p-2 rounded-full w-[60px] h-[60px] flex items-center justify-center 
                                                transition-all duration-300 ease-in-out 
                                                group-hover:bg-[#236A68] group-hover:text-white">
                                        {task.icon}
                                    </div>
                                    <div className="col-span-4 flex flex-col justify-center">
                                        <h5 className="text-sm font-normal tracking-tight text-[#696969] dark:text-[#696969] font-poppins">
                                            {task.title}
                                        </h5>
                                        <span className="text-xs text-[#696969]">{task.date}</span>
                                    </div>
                                </div>
                                <p className="font-semibold text-gray-900 dark:text-gray-900 font-poppins mt-2">
                                    {task.points}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
