"use client";
// import { deletePost } from "@/actions/postActions";
import { useMyContext } from "@/context/Provider";
import Image from "next/image";
import Link from "next/link";
import React, { useTransition } from "react";

const PostCard = ({ post, handleDelete }) => {
  let [isPending, startTransition] = useTransition();
  const { setEditPost } = useMyContext();

  //   const handleDelete = async (postId) => {
  //     if (window.confirm("Are you sure you want to delete this post")) {
  //       await deletePost(postId);
  //     }
  //   };

  return (
    <div>
      <Link href={`/post/${post?._id}`}>
        <div className="relative w-48 h-48 border border-gray-200 rounded-md overflow-hidden">
          <Image
            src={post?.image}
            alt="postImage"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h3>{post?.title}</h3>
      </Link>
      <div className="flex gap-5">
        <button onClick={() => setEditPost(post)}>Edit</button>
        <button
          disabled={isPending}
          onClick={() => startTransition(() => handleDelete(post?._id))}
        >
          {isPending ? "loading..." : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default PostCard;
