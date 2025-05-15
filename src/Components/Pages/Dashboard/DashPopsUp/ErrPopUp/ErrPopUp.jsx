export default function ErrPopUp() {
    return <>

        <div className='w-full flex items-center justify-center mt-28'>

            <div className='w-2/4  bg-white shadow-lg p-6'>

                <div className="flex flex-col gap-6  ">
                    <div className="flex flex-col items-center justify-center gap-3">

                        <h2 className="text-6xl font-bold font-poppins text-center capitalize text-[#FF0000]">error!</h2>
                        <p className='text-[#676767] font-medium'>Sending love is failed,so try and try</p>
                        <button className='capitalize bg-[#FF0000] w-full rounded-md p-4 text-white font-medium transition-all hover:bg-red-600'>try again </button>
                    </div>


                </div>
            </div>
        </div>
    </>
}
