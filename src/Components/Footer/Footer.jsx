import logoDark from '../../assets/Logo (Dark)-02 1.png';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaInstagram, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useLocation } from 'react-router-dom'; 
export default function Footer() {
  const location = useLocation(); 
    const isChatPage = location.pathname === "/chat"; 
    const isDashPage = location.pathname === "/dashboard";

if (isChatPage||isDashPage) {
  return null; 
}
    return (
        <footer className="bg-[#2D8986] dark:bg-[#2D8986] mt-20">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-evenly">
                    <div className="flex flex-col items-center md:flex-row mb-6 md:mb-0 md:mr-4">
                        <img src={logoDark} className="h-8 me-3" alt="Logo" />
                    </div>

                    <div className="grid grid-col-1 items-center justify-center md:grid-cols-3 gap-16 md:gap-1">
                        {/* Pages */}
                        <div className="col-span-2 md:col-span-1">
                            <h2 className="text-center md:text-left mb-4 text-xl md:text-lg font-inter font-bold text-white capitalize dark:text-white">Pages</h2>
                            <ul className="text-white font-inter text-sm font-medium flex flex-col items-center md:items-start justify-center gap-2">
                                <li><a href="#" className="hover:underline">Home</a></li>
                                <li><a href="#" className="hover:underline">Doctors</a></li>
                                <li><a href="#" className="hover:underline">Tasks</a></li>
                                <li><a href="#" className="hover:underline">Contact us</a></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="col-span-2 md:col-span-1">
                            <h2 className="text-center md:text-left mb-4 text-xl md:text-lg font-inter font-bold text-white capitalize dark:text-white">Services</h2>
                            <ul className="text-white font-inter text-sm font-medium flex flex-col gap-2 md:items-start items-center justify-center">
                                <li><a href="#" className="hover:underline">Why choose us</a></li>
                                <li><a href="#" className="hover:underline">About the program</a></li>
                                <li><a href="#" className="hover:underline">Behind the recovery</a></li>
                                <li><a href="#" className="hover:underline">Top rated doctors</a></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="col-span-2 md:col-span-1">
                            <h2 className="text-center md:text-left text-xl mb-4 md:text-lg font-inter font-bold text-white capitalize dark:text-white">Contact</h2>
                            <ul className="text-white font-inter text-sm font-medium flex flex-col items-center justify-center md:items-start gap-2">
                                <li>
                                    <div className="flex items-center gap-2">
                                        <FaPhoneAlt />
                                        <a href="tel:0123456789">0123456789</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center gap-2">
                                        <MdEmail />
                                        <a href="mailto:tbalance.support@gmail.com" className="hover:underline">tbalance.support@gmail.com</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center gap-2">
                                        <FaLocationDot />
                                        <span>Mansoura, Egypt</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="flex flex-col items-center mt-6 gap-4 text-white md:ml-4">
                        <h2 className="text-center text-xl md:text-lg font-inter font-bold text-white capitalize dark:text-white">Follow us</h2>
                        <div className="flex gap-3">
                            <span><FaFacebookF /></span>
                            <span><FaTwitter /></span>
                            <span><FaLinkedinIn /></span>
                            <span><FaInstagram /></span>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-white sm:mx-auto dark:border-white lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between"></div>
            </div>
        </footer>
    );
}
