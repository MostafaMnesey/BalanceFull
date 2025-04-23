import { BiTask } from "react-icons/bi";
import { MdVerified } from "react-icons/md";
import { PiTextAlignLeftFill } from "react-icons/pi";
export default function WhyUs() {
    const whyUsData = [
        {
            icon:<MdVerified/>,
            title:'Certified Specialists',
            desc:'Our team includes licensed doctors and therapists with years of experience in addiction recovery.',
        },
        {
            icon: <BiTask />,
            title:'Daily Tasks & Activities',
            desc:'Structured tasks to build discipline, focus, and motivation every step of the way.',
        },
        {
            icon:<PiTextAlignLeftFill/>,
            title:'Continuous Follow-Up',
            desc:'We stay connected throughout your recovery to ensure progress and prevent relapse.',
        },
    ]
    return <>
        <section id="whyUs">

        <h2 className='text-center text-3xl font-poppins font-bold mb-4'>Why Choose Us?</h2>
        <div className='flex flex-col md:flex-row gap-8 items-center justify-center mb-4 mt-20' >
            

            {whyUsData.map((item, index) => (

                <div key={index} className="w-[373px] h-[249px] p-6  border border-gray-100 rounded-lg shadow-sm dark:bg-gray-100 flex flex-col  items-center justify-center ">
                    <div className='text-4xl mb-4 text-subColor '>

                    {item.icon}
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h5 className="mb-2 text-xl font-bold leading-normal font-poppins tracking-tight text-black-900 dark:text-black md:text-center md:text-xl">{ item.title}</h5>
                    <p className="text-center text-sm mb-3 font-normal leading-normal text-black-500 dark:text-black-500">{item.desc }</p>

                    </div>

                </div>
            ))}


        </div>
        </section>
    </>
}
