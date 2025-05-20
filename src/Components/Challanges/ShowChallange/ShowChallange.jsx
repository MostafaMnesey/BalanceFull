import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loadingg from "../../Loadingg/Loadingg";
export default function ShowChallange() {
  const { ChallengeId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`https://beige-wildcat-74200.zap.cloud/api/challenges/${ChallengeId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setPost(res.data.data);
      } catch (err) {
        setError("Failed to load post.");
      } finally {
        setLoading(false);
      }
    }

    if (ChallengeId) {
      fetchPost();
    }
  }, [ChallengeId]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen ">
       <Loadingg />
      </div>
    );
  if (error)
    return (
      <div className="text-red-600 text-center mt-10 font-semibold">{error}</div>
    );
  if (!post)
    return (
      <div className="text-center mt-10 text-gray-400 font-semibold">
        No post found.
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto p-6 mt-[8%] min-h-[60vh] bg-white rounded-lg shadow-md border border-gray-200">
      {/* User Info */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={post.user.User_image || "https://via.placeholder.com/48"}
          alt={post.user.name}
          className="w-12 h-12 rounded-full object-cover border border-gray-300"
        />
        <div>
          <p className="font-semibold text-gray-900">{post.user.name}</p>
          <p className="text-sm text-gray-500">
            {new Date(post.created_at).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Post Content */}
      <h1 className="text-2xl font-bold text-gray-900 mb-4">{post.content}</h1>

      {/* Post Image (if exists) */}
      {post.image ? (
        <div className="my-6 rounded overflow-hidden shadow-sm">
          <img
            src={`https://beige-wildcat-74200.zap.cloud/storage/${post.image}`}
            alt="Post"
            className="w-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="my-6 py-10 bg-[#40C1BD]/10 rounded-lg flex justify-center items-center text-[#40C1BD] font-semibold text-lg">
          No image for this post.
        </div>
      )}

      {/* Likes and Comments Summary */}
      <div className="flex gap-8 text-gray-600 font-medium mb-6">
        <div>
          👍 Likes: <span className="text-[#40C1BD]">{post.likes_count}</span>
        </div>
        <div>
          💬 Comments:{" "}
          <span className="text-[#40C1BD]">{post.comments_count}</span>
        </div>
      </div>

      {/* Comments Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">
          Comments
        </h2>
        {post.comments.length === 0 ? (
          <p className="text-gray-400 italic">No comments yet.</p>
        ) : (
          <ul className="space-y-4 max-h-80 overflow-y-auto">
            {post.comments.map((comment) => (
              <li
                key={comment.id}
                className="border rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition"
              >
                <p className="mb-1">{comment.content}</p>
                <p className="text-xs text-gray-500">
                  — <span className="font-semibold">{comment.user.name}</span>,{" "}
                  {new Date(comment.created_at).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
