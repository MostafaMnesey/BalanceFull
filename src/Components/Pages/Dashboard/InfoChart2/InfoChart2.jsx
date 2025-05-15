import React from 'react'
import RecStatus from '../InfoChart1/RecStatus/RecStatus'
import MonProgress from './MonProgress/MonProgress'
import SessionTable from './SessionTable/SessionTable'

export default function InfoChart2() {
    return <>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                {/* <div className="flex items-center justify-center rounded-sm bg-gray-50 h-64 "> */}
                    <div className='flex items-center justify-center'>
                {/* <RecStatus/> */}
                <SessionTable/>
                        </div>
                        {/* </div> */}
                    <div className="flex items-center justify-center  ">
                <MonProgress/>
                        
                    </div>
        
                </div>
    </>
}
