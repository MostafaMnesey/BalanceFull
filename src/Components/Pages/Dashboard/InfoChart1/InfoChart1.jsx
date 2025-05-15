import React from 'react'
import RecStatus from './RecStatus/RecStatus'
import WeekRec from './WeekRec/WeekRec'

export default function InfoChart1() {
    return <> 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4  items-center justify-center my-16">
        {/* <div className="flex items-center justify-center rounded-sm bg-gray-50 h-64 "> */}
            <div className='flex items-center justify-center'>
                
            <RecStatus />
                </div>
                {/* </div> */}
            <div className="flex items-center justify-center  ">
                
            <WeekRec/>
            </div>

        </div>
    </>
}
