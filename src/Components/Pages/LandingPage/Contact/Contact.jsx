import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
    return (
        <section className="mt-20" id="contact">
            <div className="relative w-full flex justify-center">
                {/* Background Form Section */}
                <div className="bg-[#A7E2E1] w-[70%] p-10 rounded-xl flex flex-col justify-center items-center">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Get in Touch</h3>
                    <p className="text-gray-700 mb-8 text-center max-w-xl">
                        If you have any questions or need assistance, feel free to reach out to us. We're always here to help.
                    </p>
                    <form className="w-full max-w-xl">
                        <div className="mb-5">
                            <label htmlFor="name" className="block mb-2 text-base font-medium text-gray-800 font-poppins">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-3"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-800 font-poppins">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-3"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="message" className="block mb-2 text-base font-medium text-gray-800 font-poppins">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-3"
                                placeholder="Enter your message"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#3FC1C9] text-white font-semibold py-3 px-5 rounded-lg w-full hover:bg-[#36b0b8] transition"
                        >
                            Send
                        </button>

                        {/* Inline Contact Info for small screens */}
                        <div className="mt-3 flex text-sm gap-2 lg:text-sm lg:hidden md:flex md:items-center md:justify-between md:mt-3 md:text-teal-900 md:font-semibold md:text-md">
                            <div className="flex items-center gap-1 text-[10px]">
                                <FaLocationDot />
                                <p>Mansoura, Egypt</p>
                            </div>
                            <div className="flex items-center gap-2 text-[10px]">
                                <MdEmail />
                                <span>tbalance.support@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2 text-[10px]">
                                <FaPhoneAlt />
                                <span>0123456789</span>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Contact Info Card for large screens */}
                <div className="hidden absolute left-10 top-1/2 -translate-y-1/2 bg-[#3FC1C9] text-white p-10 rounded-xl shadow-xl w-[300px] h-[600px] lg:w-[250px] lg:block md:hidden">
                    <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                    <div className="space-y-4 text-base lg:text-sm">
                        <div className="flex items-center gap-2">
                            <FaLocationDot />
                            <span>Mansoura, Egypt</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdEmail />
                            <span>tbalance.support@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaPhoneAlt />
                            <span>0123456789</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
