import { PiCirclesFourDuotone } from "react-icons/pi";
import { useState } from "react";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";
import TaskPops from "../TaskPops/TaskPops";
import notaks from "../../../../assets/images/notask.png";

export default function TaskProgress({ data }) {
  const [selectedTask, setSelectedTask] = useState(null);
  const [newTasks, setNewTasks] = useState(3);
  const [onGoingTask, setOnGoingTask] = useState(3);
  const [missedTasks, SetMissedTasks] = useState(3);
  const [completedTask, setCompletedTask] = useState(3);

  const handleCloseTask = () => {
    setSelectedTask(null);
  };
  console.log();

  const tasks = data?.data;
  console.log(tasks?.inprogressTasks);

  return (
    <section className="mt-10">
      <div className="container">
        <div className="px-4">
          <div className="flex justify-between ">
            <div className="flex items-center w-full">
              <h2 className="text-xl md:text-lg lg:text-xl font-semibold font-poppins capitalize w-[38%]  md:w-[31.6%] border-b-4 border-b-yellow-200">
                New Tasks
              </h2>
              <PiCirclesFourDuotone className="-ml-4" />
            </div>

            {newTasks < tasks?.pendingTasks.length ? (
              <div
                className="group flex items-center justify-center gap-1 w-[20%] lg:w-[10%] cursor-pointer "
                onClick={() => setNewTasks(tasks?.pendingTasks.length)}
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
                <span className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor">
                  See Less
                </span>
                <IoIosArrowDropupCircle className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor" />
              </div>
            )}
          </div>

          {/* Grid layout for new tasks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-[2%] mt-2 ">
            {tasks?.pendingTasks.length === 0 ? (
              <div className="flex flex-col items-center justify-center w-full py-10">
                <img
                  src={notaks} // حط صورة مناسبة هنا أو شيل السطر ده لو مش عندك صورة
                  alt="No Tasks"
                  className="w-32 h-32 mb-4 opacity-70"
                />
                <h3 className="text-gray-500 font-poppins text-md">
                  No tasks yet
                </h3>
              </div>
            ) : (
              tasks?.pendingTasks.slice(0, newTasks).map((task, i) => (
                <div key={i} className="min-w-[300px]">
                  <figure className="transform transition-all duration-300 ease-in-out hover:-translate-y-2 border border-gray-100 p-8 rounded-b-lg shadow-sm bg-white h-full flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                      <p className="capitalize text-sm md:text-md font-poppins font-semibold">
                        <span className=" text-sm font-semibold">Task :</span>{" "}
                        {task.name}
                      </p>
                      <p className="text-xs font-normal font-poppins text-[#1F1F1F]">
                        <span>Status:</span> not done
                      </p>
                      <p className="text-xs font-normal font-poppins text-[#1F1F1F]">
                        <span>Scheduled:</span> {task.target_date}
                      </p>
                      <p className="text-xs font-normal font-poppins text-[#1F1F1F]">
                        <span>Task Points:</span> {task.task_points}
                      </p>
                      <span
                        className="text-sm font-semibold font-poppins text-[#236A68] underline cursor-pointer hover:text-mainColor transition-all"
                        onClick={() => setSelectedTask(task.task_id)}
                      >
                        View The Task
                      </span>
                    </div>
                    <div className="mt-4 w-full h-2.5 rounded-b-lg overflow-hidden bg-slate-200">
                      <div className="bg-yellow-200 h-full w-3"></div>
                    </div>
                  </figure>
                </div>
              ))
            )}
            {selectedTask && (
              <TaskPops task={selectedTask} onClose={handleCloseTask} />
            )}
          </div>
        </div>
        <div className="px-4 mt-8">
          <div className="flex justify-between ">
            <div className="flex items-center w-full">
              <h2 className="text-xl md:text-lg lg:text-xl font-semibold font-poppins capitalize sm:w-[38%]  md:w-[31.6%] border-b-4 border-b-blue-400">
                Ongoing Tasks
              </h2>
              <PiCirclesFourDuotone className="-ml-4" />
            </div>

            {onGoingTask < tasks?.inprogressTasks.length ? (
              <div
                className="group flex items-center justify-center gap-2 w-[20%] lg:w-[10%] cursor-pointer"
                onClick={() => setOnGoingTask(tasks?.inprogressTasks.length)}
              >
                <span className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor">
                  See More
                </span>
                <IoIosArrowDropdownCircle className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor" />
              </div>
            ) : (
              <div
                className="group flex items-center justify-center gap-2 w-[20%] lg:w-[10%] cursor-pointer"
                onClick={() => setOnGoingTask(3)}
              >
                <span className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor">
                  See Less
                </span>
                <IoIosArrowDropupCircle className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor" />
              </div>
            )}
          </div>

          {/* Grid layout for new tasks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-[2%] mt-2 ">
            {tasks?.inprogressTasks.length === 0 ? (
              <div className="flex flex-col items-center justify-center w-full py-10">
                <img
                  src={notaks} // حط صورة مناسبة هنا أو شيل السطر ده لو مش عندك صورة
                  alt="No Tasks"
                  className="w-32 h-32 mb-4 opacity-70"
                />
                <h3 className="text-gray-500 font-poppins text-md">
                  No tasks yet
                </h3>
              </div>
            ) : (
              tasks?.inprogressTasks.slice(0, onGoingTask).map((task, i) => (
                <div key={i} className="min-w-[300px]">
                  <figure className="transform transition-all duration-300 ease-in-out hover:-translate-y-2 border border-gray-100 p-8 rounded-b-lg shadow-sm bg-white h-full flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                      <p className="capitalize text-sm md:text-md font-poppins font-semibold">
                        <span className=" text-sm font-semibold">Task:</span>{" "}
                        {task.name}
                      </p>
                      <p className="text-xs font-normal font-poppins text-[#1F1F1F]">
                   <span>Task Points:</span>     {task.task_points}
                      </p>
                      <p className="text-xs font-normal font-poppins text-[#1F1F1F]">
                     <span className="font-semibold text-xs">Scheduled :</span>   {task.target_date}
                      </p>
                     
                    </div>
                    <div className="mt-4 w-full h-2.5 rounded-b-lg overflow-hidden bg-slate-200">
                      <div className="bg-[#0074D9] h-full w-6"></div>
                    </div>
                  </figure>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="px-4 mt-8">
          <div className="flex justify-between ">
            <div className="flex items-center w-full">
              <h2 className="text-xl md:text-lg lg:text-xl font-semibold font-poppins capitalize sm:w-[38%]  md:w-[31.6%] border-b-4 border-b-red-600">
                Missed Tasks
              </h2>
              <PiCirclesFourDuotone className="-ml-6 " />
            </div>

            {missedTasks < tasks?.overdueTasks.length ? (
              <div
                className="group flex items-center justify-center gap-2  w-[20%] lg:w-[10%]  cursor-pointer"
                onClick={() => SetMissedTasks(tasks?.overdueTasks.length)}
              >
                <span className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor">
                  See More
                </span>
                <IoIosArrowDropdownCircle className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor" />
              </div>
            ) : (
              <div
                className=" group flex items-center justify-center gap-2  w-[20%] lg:w-[10%]  cursor-pointer"
                onClick={() => SetMissedTasks(3)}
              >
                <span className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor">
                  See Less
                </span>
                <IoIosArrowDropupCircle className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor" />
              </div>
            )}
          </div>

          {/* Grid layout for new tasks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-[2%] mt-2 ">
            {tasks?.pendingTasks.length === 0 ? (
              <div className="flex flex-col items-center justify-center w-full py-10">
                <img
                  src={notaks} // حط صورة مناسبة هنا أو شيل السطر ده لو مش عندك صورة
                  alt="No Tasks"
                  className="w-32 h-32 mb-4 opacity-70"
                />
                <h3 className="text-gray-500 font-poppins text-md">
                  No tasks yet
                </h3>
              </div>
            ) : (
              tasks?.overdueTasks.slice(0, missedTasks).map((task, i) => (
                <div key={i} className="min-w-[300px]">
                  <figure className="transform transition-all duration-300 ease-in-out hover:-translate-y-2 border border-gray-100 p-8 rounded-b-lg shadow-sm bg-white h-full flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                      <p className="capitalize text-sm md:text-md font-poppins font-semibold">
                        {task.name}
                      </p>
                      <p className="text-xs font-normal font-poppins text-[#1F1F1F]">
                        Status : Missed
                      </p>
                      <p className="text-xs font-normal font-poppins text-[#1F1F1F]">
                      <span className="text-xs font-semibold ">Scheduled :</span>  {task.target_date}
                      </p>
                      <span
                        className="text-sm font-semibold font-poppins text-[#236A68] underline cursor-pointer hover:text-mainColor transition-all"
                        onClick={() => setSelectedTask(task)}
                      >
                        {task.privew}
                      </span>
                    </div>
                    <div className="mt-4 w-full h-2.5 rounded-b-lg overflow-hidden bg-slate-200">
                      <div className="bg-[#FF0000] h-full w-3"></div>
                    </div>
                  </figure>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="px-4 mt-8">
          <div className="flex justify-between ">
            <div className="flex items-center w-full">
              <h2 className="text-xl md:text-lg lg:text-xl font-semibold font-poppins capitalize sm:w-[38%]  md:w-[31.6%] border-b-4 border-b-green-400">
                Completed Tasks
              </h2>
              <PiCirclesFourDuotone className="-ml-4" />
            </div>

            {completedTask < tasks?.completedTasks.length ? (
              <div
                className="group flex items-center justify-center gap-2  w-[20%] lg:w-[10%]  cursor-pointer"
                onClick={() => setCompletedTask(tasks?.completedTasks.length)}
              >
                <span className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor">
                  See More
                </span>
                <IoIosArrowDropdownCircle className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor" />
              </div>
            ) : (
              <div
                className="group flex items-center justify-center gap-2  w-[20%] lg:w-[10%]  cursor-pointer"
                onClick={() => setCompletedTask(3)}
              >
                <span className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor">
                  See Less
                </span>
                <IoIosArrowDropupCircle className="text-xs font-poppins text-gray-500 transition-all group-hover:text-mainColor" />
              </div>
            )}
          </div>

          {/* Grid layout for new tasks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-[2%] mt-2 ">
            {tasks?.completedTasks.length === 0 ? (
              <div className="flex flex-col items-center justify-center w-full py-10">
                <img
                  src={notaks} // حط صورة مناسبة هنا أو شيل السطر ده لو مش عندك صورة
                  alt="No Tasks"
                  className="w-32 h-32 mb-4 opacity-70"
                />
                <h3 className="text-gray-500 font-poppins text-md">
                  No tasks yet
                </h3>
              </div>
            ) : (
              tasks?.completedTasks.slice(0, completedTask).map((task, i) => (
                <div key={i} className="min-w-[300px]">
                  <figure className="transform transition-all duration-300 ease-in-out hover:-translate-y-2 border border-gray-100 p-8 rounded-b-lg shadow-sm bg-white h-full flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                      <p className="capitalize text-sm md:text-md font-poppins font-semibold">
                   <span className="text-xs font-semibold font-poppins text-[#1F1F1F]">Task : </span>     {task.name}
                      </p>
                      <p className="text-xs font-normal font-poppins text-[#1F1F1F]">
                        Status : completed
                      </p>
                      <p className="text-xs font-normal font-poppins text-[#1F1F1F]">
                     completed at :   {task.completed_at}
                      </p>
                      <span
                        className="text-sm font-semibold font-poppins text-[#236A68] underline cursor-pointer hover:text-mainColor transition-all"
                        onClick={() => setSelectedTask(task)}
                      >
                        {task.privew}
                      </span>
                    </div>
                    <div className="mt-4 w-full h-2.5 rounded-b-lg overflow-hidden bg-slate-200">
                      <div className="bg-[#4EE191] h-full w-3"></div>
                    </div>
                  </figure>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
