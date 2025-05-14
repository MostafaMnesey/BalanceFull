import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import logoDark from "../../assets/Logo (Dark)-02 1.png";
import { CiGlobe } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const isChatPage = location.pathname === "/chat";
  
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
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

  const navBackground = !isLandingPage
    ? "bg-mainColor shadow-sm"
    : scrolled
    ? "bg-[#40C1BD] shadow-lg backdrop-blur-md border-gray-200"
    : "bg-transparent border-gray-100 dark:bg-[#f7f1f14e]";

  const textColor = !isLandingPage ? "text-gray-100" : "text-white";
  if (isChatPage) {
    return null;
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
          {links.map((link) => (
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
          <div className={`flex items-center gap-1 ${textColor}`}>
            <CiGlobe />
            <span className="uppercase">en</span>
          </div>

          <Link to="/choose">
            <button
              type="button"
              className="text-textColor bg-subColor hover:bg-hoverSubColor focus:ring-4 focus:outline-none focus:ring-hoverSubColor font-medium text-base rounded-full font-poppins px-4 py-2"
            >
              sign in \ sign up
            </button>
          </Link>

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
    </nav>
  );
}
