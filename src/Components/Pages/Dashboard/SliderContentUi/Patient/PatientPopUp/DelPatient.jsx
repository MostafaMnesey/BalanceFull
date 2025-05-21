

import { useEffect, useState } from 'react';
import sadImg from '../../../../../../assets/images/avatars/lets-icons_sad.svg'
import rateImg from '../../../../../../assets/images/avatars/star rate.svg'

export default function DelPatient({ onClose }) {
     const [show, setShow] = useState(false);
    const handleClose = () => {

        setShow(false);
        setTimeout(() => {
            onClose();
        }, 300);
    };
        useEffect(() => {
            setShow(true);
        }, []);
    
        
    return <>
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center overflow-y-auto py-10 px-4">
            <div
                className={`
                bg-white shadow-lg p-6 w-full max-w-2xl rounded-xl transform transition-all duration-300
                    max-h-96 overflow-y-scroll
                    ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} flex flex-col `}
                style={{ scrollbarWidth: 'none' }}
            >

                




                <div className='w-full h-full flex flex-col items-center justify-center gap-3' >

                    <img src={sadImg} alt="sadImg" />
                    <p className='font-medium'>
                        Confirm deletion: Are you sure you want to remove this patient?
                    </p>


                

                </div>
                


                <div className="mb-5 flex justify-center gap-3">
                    <button
                        onClick={handleClose}
                        type="button"
                        className="bg-mainColor transition-all font-medium hover:bg-teal-300 text-white px-6 py-3 rounded-full text-center"
                    >
                        Cancel
                    </button>
                    <button
                        // onClick={handleConfirm}
                        type="button"
                        className="border-2 border-red-500 transition-all  hover:bg-red-500 hover:text-white text-red-500 px-6 py-3 rounded-full text-center font-semibold"
                    >
                        Delete Patient
                    </button>
                </div>
                    
            </div>
        </div>
    </>
}
