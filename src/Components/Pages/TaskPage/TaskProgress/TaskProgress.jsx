


import { PiCirclesFourDuotone } from "react-icons/pi";
import { useState } from "react";
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from "react-icons/io";
import TaskPops from "../TaskPops/TaskPops";

export default function TaskProgress() {
  const [selectedTask, setSelectedTask] = useState(null);
  const [newTasks, setNewTasks] = useState(3); 
  const [onGoingTask, setOnGoingTask] = useState(3); 
  const [missedTasks, SetMissedTasks] = useState(3);
  const [completedTask, setCompletedTask] = useState(3); 

  const progressData = [
    {
      completedTask: [
        {
          task: "Morning Walk (30 minutes)",
          type: "Completed on: April 19, 2025 – 6:30 AM",
        },
        {
          task: "Take Blood Pressure Medication",
          type: "Completed on: April 20, 2025 – 8:00 AM",
        },
        {
          task: "Take Blood Pressure Medication",
          type: "Completed on: April 20, 2025 – 8:00 AM",
        },
        {
          task: "Morning Walk (30 minutes)",
          type: "Completed on: April 19, 2025 – 6:30 AM",
        },
        {
          task: "Take Blood Pressure Medication",
          type: "Completed on: April 20, 2025 – 8:00 AM",
        },
        {
          task: "Take Blood Pressure Medication",
          type: "Completed on: April 20, 2025 – 8:00 AM",
        },
      ],
      onGoingTask: [
        {
          task: " Attend Group Therapy Session",
          type: "Due: Today at 11:00 AM",
          notes: "Notes: Don’t forget your notebook",
          link: "Complete The Task",
        },
        {
          task: " Take Diabetes Medication",
          type: "Due: Today at 11:00 AM",
          notes: "Notes: Don’t forget your notebook",
          link: "Complete The Task",
        },
        {
          task: " Take Anti-Craving Medication",
          type: "Due: Tomorrow at 5:00 PM",
          notes: "Notes: Don’t forget your notebook",
          link: "Complete The Task",
        },
        {
          task: " Daily Journy",
          type: "Due: Tomorrow at 5:00 PM",
          notes: "Notes: Don’t forget your notebook",
          link: "Complete The Task",
        },
        {
          task: " Attend Group Therapy Session",
          type: "Due: Today at 11:00 AM",
          notes: "Notes: Don’t forget your notebook",
          link: "Complete The Task",
        },
        {
          task: " Take Diabetes Medication",
          type: "Due: Today at 11:00 AM",
          notes: "Notes: Don’t forget your notebook",
          link: "Complete The Task",
        },
      ],
      newTask: [
        {
          task: " Deep Breathing",
          status: "Status: Not Started",
          scheduled: "Scheduled: April 25, 2025 – 9:00 AM",
          privew: "Privew The Task",
          taskType: "New",
        },
        {
          task: " Physiotherapy Session",
          status: "Status: Not Started",
          scheduled: "Scheduled: April 27, 2025 – 4:00 PM",
          privew: "Privew The Task",
          taskType: "New",
        },
        {
          task: " New Diet Plan Review",
          status: "Status: Not Started",
          scheduled: "Scheduled: April 25, 2025 – 9:00 AM",
          privew: "Privew The Task",
          taskType: "New",
        },
        {
          task: " Blood Test Appointment",
          status: "Status: Not Started",
          scheduled: "Scheduled: April 25, 2025 – 9:00 AM",
          privew: "Privew The Task",
          taskType: "New",
        },
        {
          task: " Physiotherapy Session",
          status: "Status: Not Started",
          scheduled: "Scheduled: April 27, 2025 – 4:00 PM",
          privew: "Privew The Task",
          taskType: "New",
        },
        {
          task: " New Diet Plan Review",
          status: "Status: Not Started",
          scheduled: "Scheduled: April 25, 2025 – 9:00 AM",
          privew: "Privew The Task",
          taskType: "New",
        },
      ],
      missedTasks: [
        {
          task: " Deep Breathing Exercise ",
          status: "Status:  missed",
          scheduled: "Scheduled: April 25, 2025 – 9:00 AM",
        },
        {
          task: " write in your recovery journy ",
          status: "Status: missed ",
          scheduled: "Scheduled: April 27, 2025 – 4:00 PM",
        },
        {
          task: " avoid triggle situation ",
          status: "Status: missed",
          scheduled: "Scheduled: April 30, 2025 – 9:00 AM",
        },
        {
          task: " Deep Breathing Exercise ",
          status: "Status:  missed",
          scheduled: "Scheduled: April 25, 2025 – 9:00 AM",
        },
        {
          task: " write in your recovery journy ",
          status: "Status: missed ",
          scheduled: "Scheduled: April 27, 2025 – 4:00 PM",
        },
        {
          task: " avoid triggle situation ",
          status: "Status: missed",
          scheduled: "Scheduled: April 30, 2025 – 9:00 AM",
        },
      ],
    },
  ];
  const handleCloseTask = () => {
    setSelectedTask(null);
  };
  return (
    <section className="mt-10">
      <div className="container">
        <div className="px-4">
          <div className="flex justify-between ">
            <div className="flex items-center w-full">
              <h2 className="text-xl md:text-lg lg:text-xl font-semibold font-poppins capitalize w-[31.6%] border-b-4 border-b-yellow-200">
                New Tasks
              </h2>
              <PiCirclesFourDuotone className="-ml-4" />
            </div>

            {newTasks < progressData[0].newTask.length ? (
              <div
  className="group flex items-center justify-center gap-1 w-[20%] lg:w-[10%] cursor-pointer "
  onClick={() => setNewTasks(progressData[0].newTask.length)}
>
  <span className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor">
    See More
  </span>
  <IoIosArrowDropdownCircle className="md:text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor" />
</div>

            ) : (
              <div

                className="group flex items-center justify-center gap-2  w-[20%] lg:w-[10%] cursor-pointer"
                onClick={() => setNewTasks(3)}
              >
                <span className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor">See Less</span>
                <IoIosArrowDropupCircle className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor" />
              </div>

            )}
          </div>

          {/* Grid layout for new tasks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2 ">
            {progressData[0].newTask.slice(0, newTasks).map((task, i) => (
              <div key={i} className="min-w-[300px]">
                <figure className="transform transition-all duration-300 ease-in-out hover:-translate-y-2 border border-gray-100 p-8 rounded-b-lg shadow-sm bg-white h-full flex flex-col justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="capitalize text-sm md:text-md font-poppins font-semibold">
                      {task.task}
                    </p>
                    <p className="text-xs font-normal font-poppins text-[#1F1F1F]">
                      {task.status}
                    </p>
                    <p className="text-xs font-normal font-poppins text-[#1F1F1F]">
                      {task.scheduled}
                    </p>
                    <span
                      className="text-sm font-semibold font-poppins text-[#236A68] underline cursor-pointer hover:text-mainColor transition-all"
                      onClick={() => setSelectedTask(task)}
                    >
                      {task.privew}
                    </span>
                  </div>
                  <div className="mt-4 w-full h-2.5 rounded-b-lg overflow-hidden bg-slate-200">
                    <div className="bg-yellow-200 h-full w-3"></div>
                  </div>
                </figure>
              </div>
            ))}
            {selectedTask && (
              <TaskPops task={selectedTask} onClose={handleCloseTask} />
            )}
          </div>
        </div>
        <div className="px-4 mt-8">
          <div className="flex justify-between ">
            <div className="flex items-center w-full">
              <h2 className="text-xl md:text-lg lg:text-xl font-semibold font-poppins capitalize w-[31.6%] border-b-4 border-b-blue-400">
                Ongoing Tasks
              </h2>
              <PiCirclesFourDuotone className="-ml-4" />
            </div>

            {onGoingTask < progressData[0].onGoingTask.length ? (
              <div
                className="group flex items-center justify-center gap-2 w-[20%] lg:w-[10%] cursor-pointer"
                onClick={() => setOnGoingTask(progressData[0].onGoingTask.length)}
              >
                <span className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor">See More</span>
                <IoIosArrowDropdownCircle className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor"  />
              </div>
            ) : (
              <div

                className="group flex items-center justify-center gap-2 w-[20%] lg:w-[10%] cursor-pointer"
                onClick={() => setOnGoingTask(3)}
              >
                <span className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor">See Less</span>
                <IoIosArrowDropupCircle className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor" />
              </div>
            )}
          </div>

          {/* Grid layout for new tasks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {progressData[0].onGoingTask.slice(0, onGoingTask).map((task, i) => (
              <div key={i} className="min-w-[300px]">
                <figure className="transform  shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 border border-gray-100 mr-5 relative flex flex-col items-start justify-center p-14 rounded-b-lg  bg-white h-full">
                  <div className="flex flex-col gap-2 w-full">
                    <p className="capitalize text-sm md:text-md  font-poppins font-semibold">
                      task:{task.task}
                    </p>
                    <p className="text-xs font-normal font-poppins text-[#1F1F1F]">
                      {task.type}
                    </p>
                    <p className="text-xs font-normal font-poppins text-[#1F1F1F]">
                      {task.notes}
                    </p>
                    <span
                      className="text-sm font-semibold font-poppins text-[#236A68] underline cursor-pointer transition-all hover:text-mainColor"
                      onClick={() => setSelectedTask(task)} // Pass task object directly
                    >
                      {task.link}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-2.5 rounded-b-lg overflow-hidden bg-slate-200">
                    <div className="bg-blue-600 h-full w-[60%]"></div>
                  </div>
                </figure>
              </div>
            ))}
           
          </div>
        </div>
        <div className="px-4 mt-8">
          <div className="flex justify-between ">
            <div className="flex items-center w-full">
              <h2 className="text-xl md:text-lg lg:text-xl font-semibold font-poppins capitalize w-[31.6%] border-b-4 border-b-red-600">
                Missed Tasks
              </h2>
              <PiCirclesFourDuotone className="-ml-4" />
            </div>

            {missedTasks < progressData[0].missedTasks.length ? (
              <div
                className="group flex items-center justify-center gap-2  w-[20%] lg:w-[10%]  cursor-pointer"
                onClick={() => SetMissedTasks(progressData[0].missedTasks.length)}
              >
                <span className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor">See More</span>
                <IoIosArrowDropdownCircle  className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor"/>
              </div>
            ) : (
              <div

                className=" group flex items-center justify-center gap-2  w-[20%] lg:w-[10%]  cursor-pointer"
                onClick={() => SetMissedTasks(3)}
              >
                <span className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor">See Less</span>
                <IoIosArrowDropupCircle className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor" />
              </div>
            )}
          </div>

          {/* Grid layout for new tasks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {progressData[0].missedTasks.slice(0, missedTasks).map((task, i) => (
              <div key={i} className="min-w-[300px]">
                <figure className="transform transition-all duration-300 ease-in-out hover:-translate-y-2  border border-1 border-gray-100 mr-5 relative flex flex-col items-start justify-center p-14 rounded-b-lg shadow-md bg-white h-full">
                  <div className="flex flex-col gap-2 w-full">
                    <p className="capitalize text-sm md:text-md  font-poppins font-semibold">
                      task:{task.task}
                    </p>
                    <p className="text-xs font-normal font-poppins text-[#1F1F1F]">
                      {task.type}
                    </p>
                    <p className="text-xs font-normal font-poppins text-[#1F1F1F]">
                      {task.scheduled}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-2.5 rounded-b-lg overflow-hidden bg-slate-200">
                    <div className="bg-red-600 h-full w-[2%]"></div>
                  </div>
                </figure>
              </div>
            ))}
          </div>
        </div>
        <div className="px-4 mt-8">
          <div className="flex justify-between ">
            <div className="flex items-center w-full">
              <h2 className="text-xl md:text-lg lg:text-xl font-semibold font-poppins capitalize w-[31.6%] border-b-4 border-b-green-400">
                Completed Tasks
              </h2>
              <PiCirclesFourDuotone className="-ml-4" />
            </div>

            {completedTask < progressData[0].completedTask.length ? (
              <div
                className="group flex items-center justify-center gap-2  w-[20%] lg:w-[10%]  cursor-pointer"
                onClick={() => setCompletedTask(progressData[0].completedTask.length)}
              >
                <span  className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor">See More</span>
                <IoIosArrowDropdownCircle className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor"  />
              </div>
            ) : (
              <div

                className="group flex items-center justify-center gap-2  w-[20%] lg:w-[10%]  cursor-pointer"
                onClick={() => setCompletedTask(3)}
              >
                <span  className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor">See Less</span>
                <IoIosArrowDropupCircle className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor" />
              </div>
            )}
          </div>

          {/* Grid layout for new tasks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {progressData[0].completedTask.slice(0, completedTask).map((task, i) => (
              <div key={i} className="min-w-[300px]">
                <figure className=" transform transition-all duration-300 ease-in-out hover:-translate-y-2  border border-1 border-gray-100 mr-5 relative flex flex-col items-start justify-center p-14 rounded-b-lg shadow-md bg-white h-full">
                  <div className="flex flex-col gap-2 w-full">
                    <p className="text-sm md:text-md font-poppins font-semibold">
                      {task.task}
                    </p>
                    <p className="text-xs font-normal font-poppins text-[#1F1F1F]">
                      {task.type}
                    </p>
                    <p className="text-xs font-normal font-poppins text-[#1F1F1F]">
                      {task.notes}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-2.5 rounded-b-lg overflow-hidden bg-slate-200">
                    <div className=" h-full w-full bg-green-400"></div>
                  </div>                   </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
