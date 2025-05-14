import { useContext, useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import logoDark from "../../assets/Logo (Dark)-02 1.png";
import { CiGlobe } from "react-icons/ci";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { MdPerson } from "react-icons/md";
import { PiSignOutFill } from "react-icons/pi";
import axios from "axios";
import Modal from "../Modal/Modal";


export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showModal,setShowModal] = useState(false);
  const location = useLocation();
  const nav =useNavigate();
  const isLandingPage = location.pathname === "/";
  const isChatPage = location.pathname === "/chat";
  const { user, setUser, token, setToken } = useContext(AuthContext);
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", target: "/" },
    { name: "About", target: "about" },
    { name: "Why Us", target: "whyUs" },
    { name: "Experts", target: "experts" },
    { name: "Contact Us", target: "contact" },
  ];
  const authenticatedUserLinks = [
    { name: "Doctors", target: "/doctors" },
    { name: "Tasks", target: "/tasks" },
    { name: "Community", target: "/community" },
  ];

  const navBackground = !isLandingPage
    ? "bg-mainColor shadow-sm"
    : scrolled
    ? "bg-[#40C1BD] shadow-lg backdrop-blur-md border-gray-200"
    : "bg-transparent border-gray-100 dark:bg-[#f7f1f14e]";

  const textColor = !isLandingPage ? "text-gray-100" : "text-white";
  if (isChatPage) {
    return null;
  }



  
  async function logout() {
    try {
      const res = await axios.post(
        "https://beige-wildcat-74200.zap.cloud/api/logout",
        {},
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem("user")
      localStorage.removeItem("token");
      setUser(null);
      setToken(null);
      setShowModal(false);
      nav("/");
 
      
    } catch (error) {
      console.log(error);
    }

    /* localStorage.removeItem("token"); 
    } catch (error) {
      console.log(error);
    } */
  }

 
  return (
    <nav
      className={`container rounded-full fixed top-4 left-0 right-0 z-50 transition-colors duration-300 border ${navBackground}`}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 relative">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center space-x-3 rtl:space-x-reverse z-10">
            <img src={logoDark} className="h-8" alt="Balance-توازون" />
          </div>
        </Link>
        {/* Center Links */}
        <div
          className={`hidden lg:flex absolute left-1/2 transform -translate-x-1/2 gap-6 font-bold ${textColor}`}
        >
          {token
            ? authenticatedUserLinks.map((link) => (
                <Link to={link.target}>{link.name}</Link>
              ))
            : links.map((link) => (
                <ScrollLink
                  key={link.target} // Use a unique value for key (e.g., link.target)
                  to={link.target}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-100}
                  activeClass="active"
                  className="cursor-pointer hover:text-subColor transition-colors duration-200"
                >
                  {link.name}
                </ScrollLink>
              ))}
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4 z-10">
          {!token ? (
            <Link to="/choosePath">
              <button
                type="button"
                className="text-textColor bg-subColor hover:bg-hoverSubColor focus:ring-4 focus:outline-none focus:ring-hoverSubColor font-medium text-base rounded-full font-poppins px-4 py-2"
              >
                sign in \ sign up
              </button>
            </Link>
          ) : (
            <>
              <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  onClick={toggleDropdown}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                  src={`https://beige-wildcat-74200.zap.cloud/${user?.user.Avatar}`}
                    alt="user photo"
                  />
                </button>

                {/* Dropdown menu */}
                {isOpen && (
                  <div className="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600 absolute top-14 right-0">
                    <div className="px-4 py-3">
                      <span className="block text-sm text-gray-900 text-center dark:text-white">
                        {user?.user.Nickname}
                      </span>
                      <span className="block text-sm text-gray-500 text-center truncate dark:text-gray-400">
                        {user?.user.Email}
                      </span>
                    </div>
                    <ul className="py-2">
                      <li className="px-4 py-2">
                        <Link
                          to={"/profile"}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          <div className="flex items-center">
                            <MdPerson className="text-mainColor " size={30} />
                            <span className="ml-3 text-lg">Profile</span>
                          </div>
                        </Link>
                      </li>
                      <li className="px-4 py-2">
                        <button
                          onClick={()=>setShowModal(true)}
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          <div className="flex items-center">
                            <PiSignOutFill
                              className="text-red-600 text-lg"
                              size={30}
                            />
                            <span className="ml-3 text-lg">Logout</span>
                          </div>
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Hamburger for mobile */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-100 rounded-lg lg:hidden"
            onClick={toggleNavbar}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isNavOpen && (
          <div
            className={`absolute top-20 right-7 w-[90%] rounded-md shadow-lg ${
              scrolled ? "bg-[#40C1BD]" : "bg-[#f7f1f14e]"
            } ring-1 ring-black ring-opacity-5 z-50 lg:hidden`}
          >
            <ul className="py-2">
              {links.map((item, i) => (
                <li key={i}>
                  <ScrollLink
                    to={item.target}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-100}
                    activeClass="active"
                    className="block px-4 py-2 text-sm font-bold text-white hover:bg-subColor cursor-pointer"
                    onClick={() => setIsNavOpen(false)}
                  >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} type="Logout" onaccept={logout} />
    </nav>
  );
}
