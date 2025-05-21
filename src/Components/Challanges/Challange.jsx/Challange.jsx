import axios from "axios";
import { Toast } from "flowbite-react";
import React, { useState } from "react";
import { FaArrowRightLong, FaHeart, FaRegComment } from "react-icons/fa6";
import { IoMdMore } from "react-icons/io";
import { Link } from "react-router-dom";
import ErrPopUp from "../../Pages/Dashboard/DashPopsUp/ErrPopUp/ErrPopUp";

export default function Challange({ allPosts, refetch }) {
  const [showDelete, setShowDelete] = useState(null);
  const [toast, setToast] = useState(false);
  const [showCommentFor, setShowCommentFor] = useState(null);
  const [commentTexts, setCommentTexts] = useState({});
    const [showPop,setShowPop]=useState(false)

  async function likePost(postId) {
    try {
      await axios.post(
        `https://beige-wildcat-74200.zap.cloud/api/challenges/${postId}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      refetch();
    } catch (error) {
      console.log(error);
    }
  }
  
    async function deletePost(postId) {
        try {
        await axios.delete(
            `https://beige-wildcat-74200.zap.cloud/api/challenges/${postId}`,
            {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            }
        );
        setToast(true);
        refetch();
        } catch (error) {
       setShowPop(true)
        }
    }

  async function handleCommentSubmit(postId) {
    const content = commentTexts[postId];
    if (!content?.trim()) return;

    try {
      await axios.post(
        `https://beige-wildcat-74200.zap.cloud/api/challenges/${postId}/comment`,
        { comment: content },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setCommentTexts((prev) => ({ ...prev, [postId]: "" }));
      refetch();
    } catch (error) {
      console.log(error);
    }
  }
  console.log(allPosts);

  return (
    <>
      <section className="mt-20">
        <div className="container flex flex-col gap-6">
          {allPosts?.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-[#40C1BD]/10 mb-4">
                <svg
                  className="w-12 h-12 text-[#40C1BD]"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8a9 9 0 100-18 9 9 0 000 18z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-[#40C1BD] mb-2">
                No Posts Yet
              </h2>
              <p className="text-gray-500 text-sm">
                When posts are created, they’ll show up here.
              </p>
            </div>
          ) : null}

          <div className="space-y-4">
            {allPosts?.map((post, index) => {
              const formatted = new Date(post?.created_at).toLocaleString(
                "en-US",
                {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                }
              );

              return (
                <div
                  key={index}
                  className="w-full bg-[#F5F5F5] rounded-lg shadow-sm p-5"
                >
                  <div className="flex items-center gap-4 relative mb-4">
                    <div className="absolute top-0 right-0">
                      <button
                        onClick={() =>
                          setShowDelete(showDelete === post.id ? null : post.id)
                        }
                      >
                        <IoMdMore className="text-lg" />
                      </button>
                    </div>
                    {showDelete === post.id && (
                      <div className="absolute top-5 right-0">
                        <button
                          onClick={() => deletePost(post?.id)}
                          className="text-sm bg-gray-200 bg-opacity-40 p-2 rounded-full text-[#FF0000]"
                        >
                          Delete post
                        </button>
                      </div>
                    )}

                    <img
                      src={post?.user?.User_image}
                      alt="User"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex flex-col justify-center">
                      <p className="text-md font-semibold text-gray-800">
                        {post?.user?.name}
                      </p>
                      <p className="text-sm font-normal text-gray-500">
                        {formatted}
                      </p>
                    </div>
                  </div>

                  <p className="mb-3 text-md font-normal leading-normal text-gray-700">
                    {post.content}
                  </p>

                  {post.image && (
                    <div className="my-4 flex justify-center">
                      <img
                        src={`https://beige-wildcat-74200.zap.cloud/storage/${post.image}`}
                        alt="Post"
                        className="w-4/12 h-[50%] rounded-lg"
                      />
                    </div>
                  )}

                  <div className="flex items-center border shadow-sm rounded-lg bg-white bg-opacity-70 border-gray-200 justify-around mt-4">
                    <button
                      onClick={() => likePost(post?.id)}
                      className="flex items-center my-2 gap-2 text-gray-600 text-lg"
                    >
                      <FaHeart
                        className={`hover:text-bluee transition-all ${
                          post.is_liked_by_me ? "text-bluee" : ""
                        }`}
                      />
                      <span className="text-sm text-[#676767] font-normal">
                        {post.likes_count}
                      </span>
                    </button>
                    <button
                      onClick={() =>
                        setShowCommentFor((prev) =>
                          prev === post.id ? null : post.id
                        )
                      }
                      className="flex items-center my-2 gap-2 text-gray-600 text-lg"
                    >
                      <FaRegComment />
                      <span className="text-sm text-[#676767] font-normal">
                        {post.comments_count || 0}
                      </span>
                    </button>
                    <Link
                      to={"/Challenge/" + post.id}
                      className={
                        "flex items-center my-2 gap-2 text-gray-600 text-lg"
                      }
                    >
                      <FaArrowRightLong />
                    </Link>
                  </div>

                  {/* التعليقات + الإدخال */}
                  {showCommentFor === post.id && (
                    <div className="mt-4 space-y-4">
                      {post.comments?.map((comment) => {
                        const commentDate = new Date(
                          comment.created_at
                        ).toLocaleString("en-US", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        });

                        return (
                          <div
                            key={comment.id}
                            className="flex gap-3 items-start"
                          >
                            <img
                              src={comment.user.User_image}
                              className="w-10 h-10 rounded-full object-cover"
                              alt="Comment User"
                            />
                            <div className="bg-white p-3 rounded-lg shadow text-sm max-w-[80%]">
                              <div className="flex justify-between items-center mb-1">
                                <span className="font-semibold">
                                  {comment.user.name}
                                </span>
                                <span className="text-xs mx-3 text-gray-400">
                                  {commentDate}
                                </span>
                              </div>
                              <p>{comment.content}</p>
                            </div>
                          </div>
                        );
                      })}

                      {/* input field */}
                      <div className="flex gap-2 mt-4 items-center">
                        <input
                          type="text"
                          placeholder="Write a comment..."
                          value={commentTexts[post.id] || ""}
                          onChange={(e) =>
                            setCommentTexts((prev) => ({
                              ...prev,
                              [post.id]: e.target.value,
                            }))
                          }
                          className="flex-1 p-2 border rounded-md text-sm"
                        />
                        <button
                          onClick={() => handleCommentSubmit(post.id)}
                          className="bg-[#40C1BD] text-white px-4 py-2 rounded-md text-sm"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
           {
        showPop?<ErrPopUp title={"You Can't Delete This Post"} onClose={()=>setShowPop(false)}/>:null
      }
            {toast && <Toast show={toast} title="Post Deleted Successfully" icon="success" />}
        </div>
      </section>
    </>
  );
}
