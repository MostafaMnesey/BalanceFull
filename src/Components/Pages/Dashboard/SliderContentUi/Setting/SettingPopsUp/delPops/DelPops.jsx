import sadEmj from '../../../../../../../assets/images/avatars/lets-icons_sad.svg'

export default function DelPops() {
    return <>
        <div className='w-full flex items-center justify-center mt-28'>
        
                    <div className='w-2/4  bg-white shadow-lg p-10 rounded-2xl '>
        
                        <div className="flex flex-col gap-12  ">
                            <div className="flex flex-col items-center justify-center gap-3">
        
                                <div>
                                    <img src={sadEmj} alt="" />
                                </div>
                        <p className='text-[#676767] font-medium text-base text-center'>Deleting your account is irreversible. All your data will be permanently removed. Do you wish to proceed?</p>
        
        
                                <div className=' flex gap-4 items-center justify-center w-full'>
        
                                    <button className='capitalize bg-mainColor border-2 border-transparent rounded-full px-12 py-4 text-white font-medium transition-all hover:bg-white hover:text-mainColor hover:border-2 hover:border-mainColor'>cancle </button>
                                    <button className='capitalize bg-white border-2 border-[#FF0000]  rounded-full px-12 py-4 text-[#FF0000] font-medium transition-all hover:bg-[#FF0000] hover:text-white'>Delet Account </button>
                                </div>
                            </div>
        
        
                        </div>
                    </div>
                </div>
    </>
}
