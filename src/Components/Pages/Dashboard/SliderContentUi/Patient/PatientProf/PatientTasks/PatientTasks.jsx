import React, { useState } from 'react'
import noTask from '../../../../../../../assets/images/avatars/noTasks.svg'

export default function PatientTasks() {
    const [patientTasks, setPatientTasks] = useState(null);

    return <>
        <div className='mt-6'>

            <h4 className='font-bold'>Patient Tasks</h4>
            {patientTasks && patientTasks.length > 0 ? (
                <TaskProgress />
            ) : (
                <div className="flex flex-col items-center justify-center mt-5 min-h-[200px]">
                    <div className="w-6/12">
                        <img src={noTask} alt="No tasks" className="mx-auto object-contain" />
                    </div>
                </div>
            )}
        </div>
    </>
}
