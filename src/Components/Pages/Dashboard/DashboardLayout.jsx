import { useState } from "react";
import DashCards from "./DashCards/DashCards";
import InfoChart1 from "./infoChart1/infoChart1";
import InfoChart2 from "./InfoChart2/InfoChart2";
import { RiDashboardFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { MdMarkUnreadChatAlt } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import logoImg from "../../../assets/images/Logo (Dark)-02 1.png";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import CommunityPage from "../CommunityPage/CommunityPage";
import DashNav from "./DashNav/DashNav";
import SettingLayout from "./SliderContentUi/Setting/SettingLayout";
import Patient from "./SliderContentUi/Patient/Patient";
import PatientProf from "./SliderContentUi/Patient/PatientProf/PatientProf";
import { VscListFlat } from "react-icons/vsc";

export default function DashboardLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedPage, setSelectedPage] = useState("dashboard");
    const [selectedPatient, setSelectedPatient] = useState(null);

    const navigate = useNavigate();

    const dashLinks = [
        { key: "dashboard", title: "Dashboard", icon: <RiDashboardFill className="text-2xl" /> },
        { key: "patient", title: "Patient", icon: <FaUserFriends className="text-2xl" /> },
        { key: "dashboard-chat", title: "Chat", icon: <MdMarkUnreadChatAlt className="text-2xl" />, external: true },
        { key: "community", title: "Community", icon: <TbWorld className="text-2xl" /> },
        { key: "setting", title: "Setting", icon: <IoSettingsSharp className="text-2xl" /> },
    ];

    const renderContent = () => {
        switch (selectedPage) {
            case "dashboard":
                return (
                    <>
                        <DashNav />
                        <DashCards />
                        <InfoChart1 />
                        <InfoChart2 />
                    </>
                );
            case "patient":
                return (
                    <>
                        <DashNav />
                        <Patient setSelectedPage={setSelectedPage} setSelectedPatient={setSelectedPatient} />
                    </>
                );
            case "patient-profile":
                return <PatientProf patient={selectedPatient} />;
            case "community":
                return <CommunityPage />;
            case "setting":
                return (
                    <>
                        <DashNav />
                        <SettingLayout />
                    </>
                );
            default:
                return <DashCards />;
        }
    };

    return (
        <section className="relative">
            {!isSidebarOpen && (
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="absolute top-12 left-10 z-50 p-2 rounded-md text-mainColor sm:hidden"
                    aria-label="Toggle sidebar"
                >
                    <VscListFlat className="text-3xl " />
                </button>
            )}
            {isSidebarOpen && (
                <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="sm:hidden  top-4 z-50 left-52 p-2 rounded-md text-white transition-all  hover:text-gray-200"
                    aria-label="Close sidebar"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            )}

            <div>
                {/* Sidebar */}
                <aside
                    className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 bg-mainColor sm:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <div className="relative h-full px-3 py-4 overflow-y-auto flex flex-col items-start gap-8">
                        <img src={logoImg} alt="Logo" className="w-40 mt-3" />
                        <ul className="space-y-2 font-medium w-full">
                            {dashLinks.map((link, index) => (
                                <li key={index} className="w-full">
                                    <button
                                        onClick={() => {
                                            setIsSidebarOpen(false);
                                            if (link.external) {
                                                navigate("/dashboard-chat");
                                            } else {
                                                setSelectedPage(link.key);
                                            }
                                        }}
                                        className={`w-full flex items-center p-2 rounded-lg transition-all duration-300 ${selectedPage === link.key || (link.key === "patient" && selectedPage === "patient-profile")
                                                ? "bg-gray-200 dark:bg-subColor text-white font-semibold"
                                                : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-subColor"
                                            }`}
                                    >
                                        {link.icon}
                                        <span className="ms-3">{link.title}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <button className="absolute bottom-8 left-10 flex items-center text-lg font-medium text-red-600 hover:bg-red-700 hover:text-white w-48 p-2 rounded-lg transition-all duration-300 ease-in-out">
                            <BiLogOut className="mr-2 text-2xl" />
                            Logout
                        </button>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="p-4 sm:ml-64">{renderContent()}</div>
            </div>
        </section>
    );
}
