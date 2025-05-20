import axios from "axios";
import { AnimatePresence, motion } from "motion/react";
import { use, useEffect, useState } from "react";
import Loadingg from "../../../Loadingg/Loadingg";

export default function TaskPops({ task, onClose }) {
  const [isVisible, setIsVisible] = useState(true);
  const [Loading, setLoading] = useState(false);
  const [taskData, setTaskData] = useState(null);
  useEffect(() => {
    getTask(task);
  },[]);
  async function getTask(task_id) {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://beige-wildcat-74200.zap.cloud/api/task/${task_id}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if(res.status === 200){
        setTaskData(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }finally {
      setLoading(false);
    }
  }

  const handleCancel = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };
  console.log(taskData);
  

  return (
    <AnimatePresence>
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
            {
                Loading?
                <Loadingg vh={50}/>:
                <div className="flex flex-col gap-6  ">
              <div className="">
                <h2 className="text-lg font-bold font-poppins"> Task Name: <span className="text-base font-normal text-grayy">{taskData?.name}</span></h2>
                <p className="text-md font-normal text-gray-700">
                 
                </p>
              </div>
              <div className="flex  flex-col gap-2">
                <h3 className="text-lg font-bold font-poppins">
                  Points of the task: <span className="text-base font-normal text-grayy">
                    
                    {taskData?.task_points} 
                     point
                    </span>
                </h3>
                
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold font-poppins">Number of Questions : <span className="text-base font-normal text-grayy"> {taskData?.questions?.length}</span> </h3>
               
              </div>

              <div className=" flex justify-center md:justify-end gap-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <button
                    className="px-[10%]  border-2 col-span-2 border-gray-300 text-gray-500 rounded-xl bg-white font-semibold transition-colors duration-300 ease-in-out hover:bg-gray-200 "
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button className="px-[10%] py-[2%] col-span-2  border-2 border-mainColor text-white rounded-xl bg-mainColor font-medium text-md transition-colors duration-300 ease-in-out hover:bg-white hover:text-gray-600">
                    {task.taskType === "New" ? (
                      <span className="font-poppins">Start Task</span>
                    ) : (
                      <span className="font-poppins">Complete Task </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
            }
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
