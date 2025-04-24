export default function TaspProgress() {
    const progressData = [
        {
            completedTask: [
                {
                    task: 'Task: Take Blood Pressure Medication',
                    type: 'Completed on: April 20, 2025 – 8:00 AM',
                },
                {
                    task: 'Task: Morning Walk (30 minutes)',
                    type: 'Completed on: April 19, 2025 – 6:30 AM',
                },
            ],
            onGoingTask: [
                {
                    task: 'Task: Attend Group Therapy Session',
                    type: 'Due: Today at 11:00 AM',
                    notes: 'Notes: Don’t forget your notebook',
                },
                {
                    task: 'Task: Take Diabetes Medication',
                    type: 'Due: Today at 11:00 AM',
                    notes: 'Notes: Don’t forget your notebook',
                },
                {
                    task: 'Task: Take Anti-Craving Medication',
                    type: 'Due: Tomorrow at 5:00 PM',
                    notes: 'Notes: Don’t forget your notebook',
                },
            ],
            newTask: [
                {
                    task: 'Task: Blood Test Appointment',
                    status: 'Status: Not Started',
                    scheduled: 'Scheduled: April 25, 2025 – 9:00 AM',
                    privew: 'Privew The Task',
                },
                {
                    task: 'Task: Physiotherapy Session',
                    status: 'Status: Not Started',
                    scheduled: 'Scheduled: April 27, 2025 – 4:00 PM',
                    privew: 'Privew The Task',
                },
                {
                    task: 'Task: New Diet Plan Review',
                    status: 'Status: Not Started',
                    scheduled: 'Scheduled: April 25, 2025 – 9:00 AM',
                    privew: 'Privew The Task',
                },
            ],
        },
    ];

    return (
        <section className="mt-20">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Completed Tasks */}
                    <div>
                        <h2 className="text-xl md:text-lg lg:text-xl font-semibold font-poppins capitalize">
                            Completed Tasks
                        </h2>
                        {progressData[0].completedTask.map((task, i) => (
                            <figure
                                key={i}
                                className="relative flex flex-col items-center justify-center p-16 text-center border-t-4 border-t-green-400 rounded-b-lg shadow-md bg-white mb-7"
                            >
                                <div className="flex flex-col gap-4 items-start w-full">
                                    <p className="text-lg md:text-sm lg:text-base xl:text-lg font-poppins font-semibold">
                                        {task.task}
                                    </p>
                                    <p className="text-base md:text-xs lg:text-sm font-normal font-poppins text-[#1F1F1F]">
                                        {task.type}
                                    </p>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-2.5 rounded-b-lg overflow-hidden bg-slate-200">
                                    <div className="bg-green-400 h-full w-full"></div>
                                </div>
                            </figure>
                        ))}
                    </div>

                    {/* Ongoing Tasks */}
                    <div>
                        <h2 className="text-xl md:text-lg lg:text-xl font-semibold font-poppins capitalize">
                            Ongoing Tasks
                        </h2>
                        {progressData[0].onGoingTask.map((task, i) => (
                            <figure
                                key={i}
                                className="relative flex flex-col items-center justify-center p-16 text-center border-t-4 border-t-blue-600 rounded-b-lg shadow-md bg-white mb-7"
                            >
                                <div className="flex flex-col gap-2 items-start w-full">
                                    <p className="text-lg md:text-sm lg:text-base xl:text-lg font-poppins font-semibold">
                                        {task.task}
                                    </p>
                                    <p className="text-base md:text-xs lg:text-sm font-normal font-poppins text-[#1F1F1F]">
                                        {task.type}
                                    </p>
                                    <p className="text-base md:text-xs lg:text-sm font-normal font-poppins text-[#1F1F1F]">
                                        {task.notes}
                                    </p>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-2.5 rounded-b-lg overflow-hidden bg-slate-200">
                                    <div className="bg-blue-600 h-full w-[60%]"></div>
                                </div>
                            </figure>
                        ))}
                    </div>

                    {/* New Tasks */}
                    <div>
                        <h2 className="text-xl md:text-lg lg:text-xl font-semibold font-poppins capitalize">
                            New Tasks
                        </h2>
                        {progressData[0].newTask.map((task, i) => (
                            <figure
                                key={i}
                                className="relative flex flex-col items-center justify-center p-16 text-center border-t-4 border-t-yellow-200 rounded-b-lg shadow-md bg-white mb-7"
                            >
                                <div className="flex flex-col gap-2 items-start w-full">
                                    <p className="text-lg md:text-sm lg:text-base xl:text-lg font-poppins font-semibold">
                                        {task.task}
                                    </p>
                                    <p className="text-base md:text-xs lg:text-sm font-normal font-poppins text-[#1F1F1F]">
                                        {task.status}
                                    </p>
                                    <p className="text-base md:text-xs lg:text-sm font-normal font-poppins text-[#1F1F1F]">
                                        {task.scheduled}
                                    </p>
                                    <a className="text-base md:text-sm lg:text-base font-medium font-poppins text-[#236A68] underline">
                                        {task.privew}
                                    </a>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-2.5 rounded-b-lg overflow-hidden bg-slate-200">
                                    <div className="bg-yellow-200 h-full w-3"></div>
                                </div>
                            </figure>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
