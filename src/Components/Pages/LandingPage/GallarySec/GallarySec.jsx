import gallary1 from '../../../../assets/gallary1.png'
import gallary2 from '../../../../assets/gallary2.png'
import gallary3 from '../../../../assets/gallary3.png'
import gallary4 from '../../../../assets/gallary4.png'
import gallary5 from '../../../../assets/gallary5.png'
export default function GallarySec() {
    return <>

        <section className='mt-20'>
            <div className="container">
                <h2 className='text-center text-3xl font-poppins font-bold mb-2'>Behind the Recovery</h2>
                <p className='text-center text-sm   font-poppins font-medium mb-5'>This section introduces the medical experts responsible for patient care, as well as individuals who have completed their treatment successfully.Together, they represent the foundation of our recovery process.</p>

                <div className=" p-4 grid grid-cols-2 md:grid-cols-3 gap-10">
                    <div className='col-span-3 flex gap-8'>

                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={gallary1} alt='gallary1' />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={gallary2} alt='gallary2' />
                        </div>
                    </div>
                    {/* <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt />
                    </div> */}
                    <div className="col-span-3 flex gap-9">

                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={gallary3} alt='gallary3' />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={gallary5} alt='gallary5' />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={gallary4} alt='gallary4' />
                    </div>
                    </div>

                </div>


            </div>
        </section>
    </>
}
