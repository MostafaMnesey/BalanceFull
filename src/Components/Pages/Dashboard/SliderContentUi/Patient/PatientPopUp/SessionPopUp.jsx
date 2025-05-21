import { useEffect, useState } from 'react';

export default function SessionPopUp({ onClose, onConfirm }) {
    const [show, setShow] = useState(false);

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
                    max-h-[90vh] overflow-y-scroll
                    ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} `}
                style={{ scrollbarWidth: 'none' }}
            >

                <h2 className="text-xl font-bold mb-4">Session Started</h2>

                <form className="max-w-2xl mx-auto">
                    
                    <div className="mb-5">
                        <label htmlFor="sessionNum" className="block mb-2 text-sm font-medium text-gray-900">Number of Sessions</label>
                        <input type="text" id="sessionNum" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter the total number of sessions" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="Date" className="block mb-2 text-sm font-medium text-gray-900 ">Session Date</label>
                        <input type="text" id="Date" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Select the date of the upcoming session." required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="Time" className="block mb-2 text-sm font-medium text-gray-900 ">Session Time</label>
                        <input type="text" id="Time" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Choose the time of the session." required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="Date" className="block mb-2 text-sm font-medium text-gray-900 ">Session Date</label>
                        <input type="text" id="sessionNum" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Select the date of the upcoming session." required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="Duration" className="block mb-2 text-sm font-medium text-gray-900 ">Session Duration</label>
                        <input type="text" id="Duration" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Enter how long the session will last " required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900 ">Session Notes / Description</label>
                        <input type="text" id="desc" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Add any specific details or goals for this session." required />
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
