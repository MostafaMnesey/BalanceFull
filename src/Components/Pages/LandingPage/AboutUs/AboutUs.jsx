import React from 'react'
import aboutImg from '../../../../assets/aboutImg.png'
import WhyUs from '../WhyUs/WhyUs'

export default function AboutUs() {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="grid grid-cols-6 gap-20 p-7 items-center justify-center">
            <div className="col-span-6 md:col-span-4 space-y-4">
              <h2 className="font-bold text-3xl leading-normal font-poppins">
                About the Program
              </h2>
              <p className="text-xl font-normal font-poppins leading-normal text-black-500">
                Our mission is to provide compassionate care throughout the recovery journey.
                With certified doctors and counselors, we offer medical consultations, therapy,
                daily tasks, and follow-up support. Whether for yourself or a loved one, we
                provide a safe space and expert guidance because recovery is powerful.
              </p>
            </div>

            <div className="col-span-6 md:col-span-2 flex justify-center relative group">
              {/* Back layer */}
              <div className="absolute w-[268px] h-[467px] left-10 md:w-full md:h-full bg-cyan-100 rounded-full md:-left-4 top-4 z-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0"></div>

              {/* Foreground image */}
              <img
                src={aboutImg}
                alt="aboutImage"
                className="relative z-10 rounded-full object-cover w-[268px] h-[467px] md:h-full md:w-full transition-transform duration-500 ease-in-out group-hover:-translate-y-3"
              />
            </div>
          </div>

          <WhyUs />
        </div>
      </section>
    </>
  )
}
