import AboutUs from './AboutUs/AboutUs'
import Contact from './Contact/Contact'
import CoverSec from './CoverSec/CoverSec'
import TopDoc from './TopDoc/TopDoc'
import WhyUs from './WhyUs/WhyUs'

export default function LandingPage() {
    return <>
        <CoverSec />
        {/* <Services /> */}
        <AboutUs />
        <WhyUs />
        <TopDoc />
        <Contact/>
    </>
}
