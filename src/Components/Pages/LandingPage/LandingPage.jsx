import { useEffect, useState } from 'react'
import AboutUs from './AboutUs/AboutUs'
import Contact from './Contact/Contact'
import CoverSec from './CoverSec/CoverSec'
import TopDoc from './TopDoc/TopDoc'
import WhyUs from './WhyUs/WhyUs'
import axios from 'axios'
import Services from './Services/Services'

export default function LandingPage() {
    const [topRatedDoctors, setTopRatedDoctors] = useState  ([])
    useEffect(() => {
        getTopRatedDoctors()
    },[])


 async function getTopRatedDoctors(){
try {
    const {data} =await axios.get("https://beige-wildcat-74200.zap.cloud/api/top-rated-doctors",{
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    })
    setTopRatedDoctors(data?.data)
    console.log(data.data);
    
    
}catch (error) {
    console.log(error)


}}
    
    return <>
        <CoverSec />
      
        <AboutUs />
        <WhyUs />
        <TopDoc data={topRatedDoctors} />
        <Contact/>
    </>
}
