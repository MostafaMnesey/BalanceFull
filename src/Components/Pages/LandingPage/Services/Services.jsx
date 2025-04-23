import { Link } from 'react-router-dom'
import card1 from '../../../../assets/Frame.png'
import card2 from '../../../../assets/Frame2.png'
import card3 from '../../../../assets/Frame3.png'
import { MdArrowOutward } from "react-icons/md";

export default function Services() {

    const servicesData = [
        {
        title: "Book a Doctor",
        description: "Easily schedule private sessions with trusted specialists",
            image: card1,
        buttonTxt:'Book Now'
    },
        {
        title: "Recovery Tasks",
        description: "Daily tasks to support your healing journey",
            image: card2,
        buttonTxt:'View Tasks'
    },
        {
        title: "Track Your Progress",
        description: "See how far you've come, one step at a time",
            image: card3,
        buttonTxt:'View Progress'
    },
        
    ]
    return <>
        <section className='mt-20 mb-20'>
            <div className="container">
                <div className='flex flex-col items-center justify-center md:flex-row md:items-center md:justify-center gap-6'>

                    {servicesData.map((service, index) => (

                    <div className="w-96 bg-white rounded-lg shadow-md dark:bg-white " key={index}>
                        <div>
                            <img className="rounded-t-lg w-full" src={service.image} alt={service.title} />
                        </div>
                        <div className="p-5">


                            <div className='flex flex-col gap-1'>

                                    <h5 className="mb-2 text-xl leading-none font-bold tracking-tight text-gray-900 dark:text-black">{ service.title}</h5>

                                    <p className=" text-sm  mb-3 font-normal leading-relaxed text-black-500 dark:text-black-500">{ service.description}</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <Link to="#" className="inline-flex items-center py-2  text-md font-medium leading-normal text-center text-black-500 bg-transparent rounded-lg hover:underline    dark:bg-transparent dark:hover:underline">
                                    {service.buttonTxt}
                                </Link>
                                <MdArrowOutward />
                            </div>
                        </div>
                    </div>
                    ))}
                </div>





            </div>
        </section>
    </>
}
