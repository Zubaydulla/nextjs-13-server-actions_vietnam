"use client";

import { createPost, updatePost } from "@/actions/postActions";
import { useRef } from "react";

import SubmitButton from "./SubmitButton";
import { useMyContext } from "@/context/Provider";

const PostForm = () => {
  const formRef = useRef();
  const { editPost, setEditPost } = useMyContext();

  async function handleAction(formData) {
    const title = formData.get("title");
    const image = formData.get("image");
    if (editPost) {
      await updatePost({ title, image, id: editPost._id });
    } else {
      await createPost({ title, image });
    }
    setEditPost();
    formRef.current.reset();
  }
  return (
    <form className="flex gap-6 my-4" action={handleAction} ref={formRef}>
      <input
        type="text"
        name="title"
        placeholder="title"
        required
        defaultValue={editPost?.title}
      />
      <input
        type="text"
        name="image"
        placeholder="image"
        required
        defaultValue={editPost?.image}
      />
      {editPost ? (
        <>
          <SubmitButton value="Update" />
          <button type="button" onClick={() => setEditPost()}>
            Cancel
          </button>
        </>
      ) : (
        <SubmitButton value="Create" />
      )}
    </form>
  );
};

export default PostForm;
