import avatar1 from '../../../../assets/images/Avtar1.png';
import avatar4 from '../../../../assets/images/Avtar4.png';
import avatar7 from '../../../../assets/images/Avtar7.png';
import post1 from '../../../../assets/images/post1.png';
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { useState } from 'react';

export default function Posts() {
    const [like,setLike]=useState(false)
    const postData = [
        {
            userInfo: [
                { userImg: avatar1, userName: 'Amiii', date: '5h' },
                { userImg: avatar4, userName: 'loulia', date: '5h' },
                { userImg: avatar7, userName: 'zackyy', date: '5h' },
                { userImg: avatar1, userName: 'Amiii', date: '5h' },
                { userImg: avatar4, userName: 'loulia', date: '5h' },
                { userImg: avatar7, userName: 'zackyy', date: '5h' },
            ],
            postInfo: [
                { content: 'Two weeks into my treatment, and I can already see improvement in my mental health. I can’t believe I’ve been able to face my cravings and overcome them! #RecoveryJourney', image: null },
                { content: 'A little time for myself... coffee, a book, and calm. Rest isn’t weakness, it’s a step forward in the healing journey.', image: post1 },
                { content: 'Two weeks into my treatment, and I can already see improvement in my mental health. I can’t believe I’ve been able to face my cravings and overcome them! #RecoveryJourney', image: null },
                { content: 'A little time for myself... coffee, a book, and calm. Rest isn’t weakness, it’s a step forward in the healing journey.', image: post1 },
                { content: 'Two weeks into my treatment, and I can already see improvement in my mental health. I can’t believe I’ve been able to face my cravings and overcome them! #RecoveryJourney', image: null },
                { content: 'A little time for myself... coffee, a book, and calm. Rest isn’t weakness, it’s a step forward in the healing journey.', image: post1 },
            ],
            reactions: [
                { likes: '15', comments: '7', retweet: '', explore: null },
                { likes: '8', comments: '6', retweet: '3', explore: null },
                { likes: '10', comments: '5', retweet: '1', explore: null },
                { likes: '20', comments: '9', retweet: '', explore: null },
                { likes: '5', comments: '2', retweet: '', explore: null },
                { likes: '12', comments: '8', retweet: '4', explore: null },
            ]
        },
    ];

    return (
        <>
            <section className="mt-20">
                <div className="container flex flex-col gap-6">
                    {postData[0].postInfo.map((post, index) => {
                        const user = postData[0].userInfo[index];
                        const reaction = postData[0].reactions[index] || {};

                        return (
                            <div key={index} className="w-full bg-[#F5F5F5] rounded-lg shadow-sm p-5">
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={user?.userImg}
                                        alt={user?.userName}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div className="flex flex-col justify-center">
                                        <p className="text-md font-semibold text-gray-800">{user?.userName}</p>
                                        <p className="text-sm font-normal text-gray-500">{user?.date}</p>
                                    </div>
                                </div>

                                <p className="mb-3 text-md font-normal leading-normal text-gray-700">{post.content}</p>

                                {post.image && (
                                    <div className="my-4">
                                        <img src={post.image} alt="Post" className="w-full rounded-lg" />
                                    </div>
                                )}

                                <div className="flex items-center justify-between mt-4">
                                    <button className={`flex  items-center gap-2 text-gray-600 text-lg`}
                                    onClick={() => setLike(!like)}>
                                        <FaHeart className={`${like ? 'text-mainColor' : ''}`} />
                                    <span className={`text-sm text-[#676767] ${like ? 'text-mainColor' : ''}  font-normal`}>{reaction.likes || 0}</span>
                                    </button>
                                    <button className="flex items-center gap-2 text-gray-600 text-lg">
                                        <FaRegComment />
                                        <span className="text-sm text-[#676767] font-normal">{reaction.comments || 0}</span>
                                    </button>
                                    <button className="flex items-center gap-2 text-gray-600 text-lg">
                                        <AiOutlineRetweet />
                                        <span className="text-sm text-[#676767] font-normal">{reaction.retweet || 0}</span>
                                    </button>
                                    <button className="flex items-center gap-2 text-gray-600 text-lg">
                                        <PiShareFat />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
