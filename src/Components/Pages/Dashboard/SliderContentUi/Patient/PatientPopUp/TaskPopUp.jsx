import { useEffect, useState } from 'react';

export default function TaskPopUp({ onClose }) {
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
    // const handleConfirm = () => {
    //     setShow(false);
    //     setTimeout(() => {
    //         onConfirm();
    //     }, 300);
    // };


    const questions = [
        { que: 'Have you practiced the deep breathing exercises as instructed?' },
        { que: 'Do you feel more relaxed after practicing deep breathing?' },
        { que: 'Have you been able to apply deep breathing in stressful situations?' },
        { que: 'Do you feel that the deep breathing exercises help in reducing anxiety?' },
        { que: 'How often do you practice deep breathing?' },
    ]
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


                    <div className="flex flex-col gap-6">
                        {questions.map((item, i) => (
                            <div key={i} className="flex flex-col gap-2">
                                <p className="font-medium text-gray-800">{item.que}</p>
                                <div className="flex gap-4">
                                    <div className="flex items-center">
                                        <input
                                            id={`yes-${i}`}
                                            type="radio"
                                            value="yes"
                                            name={`question-${i}`}
                                            className="w-4 h-4 accent-mainColor bg-gray-100 border-gray-300 "
                                        />
                                        <label htmlFor={`yes-${i}`} className="ms-2 text-sm font-medium text-gray-900">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id={`no-${i}`}
                                            type="radio"
                                            value="no"
                                            name={`question-${i}`}
                                            className="w-4 h-4 accent-mainColor bg-gray-100 border-gray-300 "
                                        />
                                        <label htmlFor={`no-${i}`} className="ms-2 text-sm font-medium text-gray-900">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        ))}
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
                            // onClick={handleConfirm}
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
