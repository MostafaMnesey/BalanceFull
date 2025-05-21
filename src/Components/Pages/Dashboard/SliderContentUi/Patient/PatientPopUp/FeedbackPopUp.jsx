import { useEffect, useState } from 'react';
import sadImg from '../../../../../../assets/images/avatars/lets-icons_sad.svg'
import rateImg from '../../../../../../assets/images/avatars/star rate.svg'
import { FaRegStar } from "react-icons/fa6";

export default function FeedbackPopUp() {
     const [show, setShow] = useState(false);
    
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
                        How would you rate the patient's response to this task?
                    </p>


                    <div className='flex gap-3'>

                        <img src={rateImg} alt="rateImg" />
                        <img src={rateImg} alt="rateImg" />
                        <img src={rateImg} alt="rateImg" />
                        <img src={rateImg} alt="rateImg" />
                        <img src={rateImg} alt="rateImg" />
                    
                    </div>

                </div>
                


                <div className="mb-5 flex justify-center w-full gap-3">
                    
                    <button
                        // onClick={handleConfirm}
                        type="button"
                        className="w-full bg-mainColor transition-all font-medium hover:bg-teal-300 text-white px-6 py-3 rounded-full text-center"
                    >
                        Rate
                    </button>
                </div>
                    
            </div>
        </div>
    </>
}
