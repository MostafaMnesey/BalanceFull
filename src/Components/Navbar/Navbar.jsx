import { Link, NavLink } from "react-router-dom";
import logoDark from "../../assets/Logo (Dark)-02 1.png";

import { CiGlobe } from "react-icons/ci";

export default function Navbar() {
    return <>
        

<nav className="border border-solid border-gray-100 dark:bg-[#f7f1f14e] container rounded-full fixed top-4 left-0 right-0 z-50 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logoDark} className="h-8" alt="Balance-توازون" />
    </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    
                    <div className="flex items-center justify-center gap-1 mx-7">

                        <CiGlobe style={{ color: 'white' }} />
                        <span className="uppercase text-white">en</span>
                    </div>

      <button type="button" className="text-textColor bg-subColor hover:bg-hoverSubColor focus:ring-4 focus:outline-none focus:ring-hoverSubColor font-medium text-base rounded-full font-poppins px-4 py-2 text-center dark:bg-subColor dark:hover:bg-hoverSubColor dark:focus:ring-hoverSubColo ">sign in \ sign up</button>
      <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-100 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:text-gray-100 dark:hover:bg-transparent dark:focus:ring-gray-100" aria-controls="navbar-cta" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
    </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ml-auto" id="navbar-cta">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row  md:mt-0 md:border-0 md: dark:bg-transparent  md:dark:bg-transparent dark:border-gray-700">
        <li>
          <NavLink href="#" className="font-poppins block py-2 px-3 md:p-0 text-white bg-gray-700 rounded-sm md:bg-transparent md:text-gray-700 md:dark:text-gray-700" aria-current="page">Home</NavLink>
        </li>
        <li>
          <NavLink href="#" className="font-poppins block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</NavLink>
        </li>
        <li>
          <NavLink href="#" className="font-poppins block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">why us</NavLink>
        </li>
        <li>
          <NavLink href="#" className="font-poppins block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Experts</NavLink>
        </li>
        <li>
          <NavLink href="#" className="font-poppins block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact us</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </>
}
