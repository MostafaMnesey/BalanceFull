import docImg from "../../../../assets/images/doc1.svg";
import { CiBellOn } from "react-icons/ci";

export default function DashNav() {
    return <>
        <div className="gap-4 mb-4 w-full mt-1">
                            <div className="flex items-center justify-end w-full h-20 rounded-sm bg-gray-50 dark:bg-white shadow-md">
                                <div className="flex items-center justify-center gap-3 p-3">
                                    <div className="relative">
                                        <CiBellOn className="text-4xl" />
                                        <div className="w-2 h-2 bg-[#FF0000] rounded-full absolute top-2 left-5"></div>
                                    </div>
                                    <div className="relative flex items-center justify-center w-[50px] h-[50px] rounded-full bg-gray-50 dark:bg-white shadow-md">
                                        <img src={docImg} alt="" className="rounded-full w-full h-full object-cover" />
                                        <div className="w-3 h-3 bg-green-400 rounded-full absolute bottom-0 left-9"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
    </>
}
