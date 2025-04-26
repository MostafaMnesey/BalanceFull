import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function TaskPops({ task, onClose }) {
    const [isVisible, setIsVisible] = useState(true);

    const handleCancel = () => {
        setIsVisible(false);
        setTimeout(onClose, 300); 
    };

    return (
        <AnimatePresence >
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.8 }} 
                    transition={{ duration: 0.4 }} 
                    style={container}
                >
                    <motion.div
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 0.4 }} 
                        style={box}
                        key="task-card"
                    >
                        <div className="flex flex-col gap-6  ">
                            <div className="">

                                <h2 className="text-lg font-bold font-poppins">{task.task}</h2>
                                <p className="text-md font-normal text-gray-700">A short breathing exercise to help you feel calm.</p>
                            </div>

                            <div className="flex  flex-col gap-2">

                                <h3  className="text-lg font-bold font-poppins">Benefits  of the task:</h3>
                                <ul className="list-disc list-inside flex flex-col gap-2 text-md font-normal text-gray-700">
                                    <li>Reduces stress and anxiety.</li>
                                    <li>Helps your mind feel clearer.</li>
                                    <li>Supports emotional balance</li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-2">

                                <h3 className="text-lg font-bold font-poppins">Details</h3>
                                <p className="text-md font-normal text-gray-700">Take 5 minutes to practice deep breathing to reduce stress and anxiety. Just focus on
                                    your breath and let go of any distracting thoughts
                                </p>
                            </div>

                            <div className=" flex justify-end gap-4">
                                <button className="px-[10%]  border-2 border-gray-300 text-gray-500 rounded-xl bg-white font-semibold transition-colors duration-300 ease-in-out hover:bg-mainColor hover:text-white"
                                    onClick={handleCancel}>
                                    Cancel
                                </button>
                                <button className="px-[10%] py-[2%]  border-2 border-mainColor text-white rounded-xl bg-mainColor font-medium text-md transition-colors duration-300 ease-in-out hover:bg-white hover:text-gray-600"
                                >{task.taskType === 'New' ? 
                                        <span className="font-poppins">Start Task</span>:
                                        <span className="font-poppins">Complete Task </span>
                                 }
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

const container = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "20px",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    zIndex: 1000,
    
};

const box = {
    width: "60%",
    // maxWidth: "500px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
    position: "relative",
};





