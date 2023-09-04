import { getOnePost } from "@/actions/postActions";
import PostCard from "@/components/PostCard";
import React from "react";

const PostDetailsPage = async ({ params: { postId } }) => {
  const post = await getOnePost(postId);

  return <div>{post && <PostCard post={post} />}</div>;
};

export default PostDetailsPage;
