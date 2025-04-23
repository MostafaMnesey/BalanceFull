import AboutUs from './AboutUs/AboutUs'
import Contact from './Contact/Contact'
import CoverSec from './CoverSec/CoverSec'
import GallarySec from './GallarySec/GallarySec'
import Services from './Services/Services'
import TopDoc from './TopDoc/TopDoc'

export default function LandingPage() {
    return <>
        <CoverSec />
        <Services />
        <AboutUs />
        <TopDoc />
        <GallarySec />
        <Contact/>
    </>
}
