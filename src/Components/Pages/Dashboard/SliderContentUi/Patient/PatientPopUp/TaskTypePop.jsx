import { useEffect, useState } from 'react';
import { FaSquarePlus } from "react-icons/fa6";
import { MdTimer } from "react-icons/md";
import delImg from '../../../../../../assets/images/avatars/ic_baseline-delete.svg'
import copyImg from '../../../../../../assets/images/avatars/copy.svg'




export default function TaskTypePop({ onClose, onConfirm }) {
    const [show, setShow] = useState(false);
    const [selectedType, setSelectedType] = useState('');

    useEffect(() => {
        setShow(true);
    }, []);

    const handleClose = () => {

        setShow(false);
        setTimeout(() => {
            onClose();
        }, 300);
    };
    const handleConfirm = () => {
        setShow(false);
        setTimeout(() => {
            onConfirm();
        }, 300);
    };


    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center overflow-y-auto py-10 px-4">
            <div
                className={`
                bg-white shadow-lg p-6 w-full max-w-2xl rounded-xl transform transition-all duration-300
                    max-h-screen overflow-y-scroll
                    ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} `}
                style={{ scrollbarWidth: 'none' }}
            >

                <h2 className="text-xl font-bold mb-4">Session Started</h2>

                <form className="max-w-2xl mx-auto">

                    <div className='border-b border-gray-300 pb-7 mb-7'>

                        <div className="mb-5">
                            <label htmlFor="sessionNum" className="block mb-2 text-sm font-medium text-gray-900">Task Name</label>
                            <input type="text" id="sessionNum" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter Task Name" required />
                        </div>
                        <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:gap-4">
                            <input
                                type="text"
                                id="sessionNum"
                                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-full md:w-full"
                                placeholder="Write the question"
                                required
                            />

                            <div className="w-full md:w-1/2">
                                <label
                                    htmlFor="question-type"
                                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Select an option
                                </label>
                                <select
                                    id="question-type"
                                    value={selectedType}
                                    onChange={(e) => setSelectedType(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg accent-mainColor focus:border-mainColor focus:ring-mainColor block w-3/4 p-2.5"
                                >
                                    <option value="">Select Type</option>
                                    <option value="multipleChoice">Multiple Choice</option>
                                    <option value="yesNo">Yes / No</option>
                                    <option value="timer">Timer</option>
                                </select>
                            </div>

                        </div>
                        {selectedType === 'multipleChoice' && (
                            <>
                                <div className='flex flex-col gap-2'>

                            <div className='flex items-center '>
                                <input
                                    id={`option1`}
                                type="radio"
                                value="option1"
                                name={`question`}
                                className="w-4 h-4 accent-mainColor bg-gray-100 border-gray-300 "
                            />
                                <label htmlFor={`option1`} className="ms-2 text-sm font-medium text-gray-900">
                                    option 1
                                </label>
                                
                                </div>
                                
                                <p className='text-sm flex  items-center gap-2 font-semibold'>
                                    <FaSquarePlus className='text-gray-500'/>
                                    Add More options
                                    </p>
                                    

                                    <div className='flex justify-end mr-4'>

                                        <img src={delImg} alt='delImg' className='w-6 h-6'/>
                                        <img src={copyImg} alt='copyImg' className='w-6 h-6'/>
                                    </div>
                                </div>
                            </>
                        )}
                        {selectedType === 'yesNo' && (
                            <>
                                <div className='flex flex-col gap-4'>

                                    <div className="flex items-center">
                                        <input
                                            id={`yes`}
                                            type="radio"
                                            value="yes"
                                            name={`question`}
                                            className="w-4 h-4 accent-mainColor bg-gray-100 border-gray-300 "
                                        />
                                        <label htmlFor={`yes`} className="ms-2 text-sm font-medium text-gray-900">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id={`no`}
                                            type="radio"
                                            value="no"
                                            name={`question`}
                                            className="w-4 h-4 accent-mainColor bg-gray-100 border-gray-300 "
                                        />
                                        <label htmlFor={`no`} className="ms-2 text-sm font-medium text-gray-900">
                                            No
                                        </label>
                                    </div>
                                    <div className='flex justify-end mr-4'>

                                        <img src={delImg} alt='delImg' className='w-6 h-6' />
                                        <img src={copyImg} alt='copyImg' className='w-6 h-6' />
                                    </div>
                                </div>
                            </>
                        )}
                        {selectedType === 'timer' && (
                            <>
                                <div className="flex flex-col gap-4 w-full md:w-3/4 relative">
                                    <input
                                        type="text"
                                        id="sessionNum"
                                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 pr-10 w-full"
                                        placeholder="Time"
                                        required
                                    />
                                    <MdTimer className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                                </div>
                            </>
                        )}
                    </div>

                


                    <div className="mb-5 flex justify-end gap-3">
                        <button
                            onClick={handleClose}
                            type="button"
                            className="bg-white  border-2 border-gray-300 transition-all font-medium hover:bg-red-500 hover:text-white text-gray-400 px-6 py-3 rounded-full text-center"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleConfirm}
                            type="button"
                            className="bg-mainColor transition-all font-medium hover:bg-teal-300 text-white px-6 py-3 rounded-full text-center"
                        >
                            Confirm
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}
