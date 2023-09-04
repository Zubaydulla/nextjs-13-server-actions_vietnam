"use client";
import React from "react";
import PostCard from "./PostCard";
import { experimental_useOptimistic as useOptimistic } from "react";
import { deletePost } from "@/actions/postActions";

const PostList = ({ posts }) => {
  const [optimisticPosts, addOptimisticPosts] = useOptimistic(
    { posts },
    (state, newPosts) => ({ ...state, posts: newPosts })
  );

  const handleDelete = async (postId) => {
    if (window.confirm("Are you sure you want to delete this post")) {
      const newPosts = posts.filter((post) => post._id !== postId);
      addOptimisticPosts((optimisticPosts.posts = newPosts));
      await deletePost(postId);
    }
  };

  return (
    <div className="flex gap-4 flex-wrap">
      {optimisticPosts.posts.map((post) => (
        <PostCard key={post._id} post={post} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default PostList;
