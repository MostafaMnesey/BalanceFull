import { HiCalendarDateRange } from "react-icons/hi2";
import caln2 from '../../../../../assets/images/calendar-2.svg'
export default function WeekRec() {
    return <>
        <div className=" w-full bg-[#F5F5F5] rounded-xl shadow p-6 h-full ">
            <h3 className="flex items-center  justify-between gap-10 text-md font-semibold text-black mb-4">
                This Week’s Status
                <div className="bg-[#daf5f5] w-9 h-9 flex items-center justify-center rounded-md border-2 border-[#4d9d9c]">
                    <img src={caln2} alt="" />
                </div>
            </h3>

            <div className="flex flex-col gap-4">

                <div className="grid grid-cols-6  gap-2">
                    <div className="col-span-3 bg-white rounded-2xl p-3 items-center justify-center">
                        <span className="text-md font-medium">12</span>
                        <p className="text-[#696969] text-sm">New Cases</p>
                    </div>
                    <div className="col-span-3 bg-white rounded-2xl p-3 items-center justify-center">
                        <span className="text-md font-medium">5</span>
                        <p className="text-[#696969] text-sm">Recovered</p>
                    </div>
                </div>

                <div className="grid-cols-1 bg-white rounded-2xl p-3 items-center justify-center ">
                    <span className="text-md font-medium">23</span>
                    <p className="text-[#696969]">session</p>
                </div>
                <div className="grid-cols-1 bg-white rounded-2xl p-3 items-center justify-center ">
                    <p className="text-[#696969] text-sm">Progress vs Last Week↑
                        <span className="font-bold">+10%</span></p>
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-2">
                        <div className="w-full h-6 bg-[#D9D9D9] rounded-full ">
                            <div className="h-6 bg-green-400 rounded-full dark:bg-green-400" style={{ width: '30%' }} />
                        </div>

                    </div>

                </div>
            </div>


        </div>
    </>
}
