import doc1 from '../../../assets/images/doc1.svg'
import doc2 from '../../../assets/images/Doctor.png'
import avatar1 from '../../../assets/images/avatars/1.png'
import avatar2 from '../../../assets/images/avatars/2.png'
import avatar3 from '../../../assets/images/avatars/3.png'
import avatar4 from '../../../assets/images/avatars/4.png'
import { IoMdMore } from "react-icons/io";
import { useState } from 'react'
import { IoSend } from "react-icons/io5";
import { CgAttachment } from "react-icons/cg";
import { MdKeyboardVoice } from "react-icons/md";
import { VscListFlat } from "react-icons/vsc";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'


export default function Chat() {
    const [isTyping, setIsTypinf] = useState(false)
    const [userIsType, setUserIsType] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    const chatData = [
        {
            type: 'user',
            name: 'Amiii',
            date: '10:30 AM',
            msg: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            avatar: avatar1,
        },
        {
            type: 'friend',
            date: '10:32 AM',
            msg: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            avatar: avatar2,
        },
        {
            type: 'user',
            name: 'Amiii',
            date: '10:35 AM',
            msg: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            avatar: avatar3,
        },
        {
            type: 'friend',
            date: '10:37 AM',
            msg: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            avatar: avatar4,
        },
        {
            type: 'typing', // <<< typing indicator here!
            avatar: avatar2
        }
    ];

    const userData = [
        {
            avatarDoc: doc1,
            name: 'Dr. Ahmed Nabil',
            type: true
        },
        {
            avatarDoc: doc2,
            title: 'Community Chat',
            name: 'Amii',
            type: true
        },
    ]

    return <>

        <div>

            <aside id="default-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } sm:translate-x-0`} aria-label="Sidebar">
                {/* Close Button */}
                <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="absolute top-4 right-4 p-2 text-gray-500 transition-all hover:text-mainColor sm:block md:hidden"
                >
                    <IoIosCloseCircleOutline className="text-2xl" />
                </button>

                <div className="h-full px-3 py-4 overflow-y-auto border-1 border-[#DFDFDF] bg-[#F5F5F5] dark:bg-[#F5F5F5]">
                    <div className="flex flex-col items-start gap-2 p-2 text-gray-900 rounded-lg dark:text-white ">

                        <span className="ms-3 text-mainColor text-2xl font-semibold">Chat</span>

                        <form className="max-w-sm">
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-[#DFDFDF] rounded-lg bg-white focus:ring-mainColor focus:border-mainColor dark:bg-white dark:border-[#DFDFDF] dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-mainColor dark:focus:border-mainColor focus:outline-none" placeholder="Search" required />
                            </div>
                        </form>


                    </div>
                    <ul className="space-y-2 font-medium mt-3">

                        {userData.map((user, index) => (

                            <li className='flex gap-2 mb-4' key={index}>


                                <img src={user.avatarDoc} alt="" className='w-12 h-12 rounded-full' />
                                <div className='flex flex-col'>
                                    {user.title === 'Community Chat' ? (
                                        <>

                                            <span className='text-sm font-medium'>{user.title}</span>
                                            <div className='flex  items-center gap-2'>
                                                <span className='text-sm font-medium text-mainColor'>{user.name}</span>
                                                {userIsType && user.type ? (
                                                    <span className="text-xs text-[#676767]">typing...</span>) : null}

                                            </div>
                                        </>
                                    ) : <>
                                        <p className='text-sm font-medium'>{user.name}</p>
                                        {userIsType && user.type ? (
                                            <span className="text-xs text-mainColor">typing...</span>) : null}
                                    </>
                                    }


                                </div>
                            </li>
                        ))}
                    </ul>
                     <div>
                        <Link to={'/dashboard'} className="capitalize absolute bottom-8 left-9 flex items-center text-sm font-medium text-mainColor  hover:-translate-x-5 w-48 p-2 rounded-lg transition-all duration-300 ease-in-out">
                            
                                    <IoArrowBackOutline className="mr-2 text-2xl" />
                                    back to dashboard
                                  </Link>
                                </div>
                </div>
            </aside>
            <div className=" sm:ml-64">
                <div className="  h-full  w-full  rounded-lg ">
                    <div className="grid grid-cols-1 gap-4 mb-4">
                        <div className="w-full bg-[#F5F5F5] border-1 border-[#DFDFDF] flex justify-between items-center gap-3 p-4">
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                    type="button"
                                    className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden focus:outline-none  focus:ring-gray-200 dark:text-gray-400  "
                                >
                                    <span className="sr-only">Open sidebar</span>
                                    <VscListFlat className='text-2xl transition-all hover:text-mainColor' />
                                </button>


                                <div className="relative">
                                    <img className="w-10 h-10 rounded-full" src={doc1} alt="Community Chat" />
                                    <div className="w-3 h-3 bg-mainColor rounded-full absolute bottom-0 left-7"></div>
                                </div>

                                <div className="flex flex-col">
                                    <h5 className="text-sm font-medium capitalize text-gray-950">community chat</h5>
                                    <span className="text-xs text-mainColor">online</span>
                                </div>
                            </div>

                            <IoMdMore className="text-2xl text-gray-700" />
                        </div>


                    </div>


                    <div className="container">

                        <div className="h-screen flex flex-col">
                            {/* Chat Messages */}
                            <div className="flex-1 overflow-y-auto h-[calc(100vh-120px)] p-4 scrollbar-hide">
                                <div className="grid grid-cols-1">
                                    {chatData.map((chat, index) => (
                                        <div key={index}>
                                            {chat.type === 'typing' ? (
                                                <div className="flex items-center gap-2.5 p-4">
                                                    <img className="w-8 h-8 rounded-full" src={chat.avatar} alt="Typing user avatar" />
                                                    <div className="flex items-center gap-1">
                                                        <span className="text-gray-500 text-xs animate-pulse">Typing</span>
                                                        <div className="flex gap-1">
                                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-400"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : chat.type === 'user' ? (
                                                <div className="flex items-start justify-end gap-2.5 mt-4">
                                                    <div className="flex flex-col items-end">
                                                        <div className="flex items-center justify-center gap-2">
                                                            <span className="text-xs text-[#A0A0A0]">{chat.date}</span>
                                                            <h5 className="text-sm font-medium text-gray-950">{chat.name}</h5>
                                                        </div>
                                                        <div className="flex flex-col items-center w-80 leading-1.5 p-4 border-gray-200 bg-mainColor rounded-s-xl rounded-br-xl dark:bg-mainColor">
                                                            <p className="text-xs font-normal py-2.5 text-gray-900 dark:text-white">
                                                                {chat.msg}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <img className="w-8 h-8 rounded-full" src={chat.avatar} alt="User avatar" />
                                                </div>
                                            ) : (
                                                <div className="flex items-start gap-2.5 mt-4">
                                                    <img className="w-8 h-8 rounded-full" src={chat.avatar} alt="Friend avatar" />
                                                    <div className="flex flex-col items-start">
                                                        <span className="text-xs font-normal text-gray-700 mb-1">{chat.date}</span>
                                                        <div className="flex flex-col w-80 leading-1.5 p-4  bg-[#F5F5F5] rounded-e-xl rounded-es-xl dark:bg-[#F5F5F5] border-1 border-[#F5F5F5]">
                                                            <p className="text-xs font-normal py-2.5 text-gray-900 dark:text-gray-900">
                                                                {chat.msg}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Input Area */}
                            <div className="p-4 border-t flex items-center gap-2 bg-white fixed bottom-0 left-0 right-0">
                                <input
                                    type="text"
                                    placeholder="Type your message..."
                                    className="w-full md:ml-72 border rounded-full p-2 px-4 focus:outline-none focus:ring-2 focus:ring-mainColor"
                                />
                                <button className=" text-[#878787] rounded-full  ">
                                    <MdKeyboardVoice className='text-lg transition-all hover:text-mainColor' />
                                </button>
                                <button className=" text-[#878787] rounded-full ">
                                    <CgAttachment className='text-lg transition-all hover:text-mainColor' />
                                </button>
                                <button className=" text-mainColor rounded-full ">
                                    <IoSend className='text-xl transition-all hover:text-green-600' />
                                </button>
                            </div>
                        </div>


                    </div>


                </div>
            </div></div>


    </>
}






















