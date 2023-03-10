import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import s from "./style.module.css";
import { Context } from "../../context";
import { addPost } from "../../requests/posts";

export default function PostsForm() {

const {  createNewPost } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const idRegister = register("userId", {
    required: '* Field "ID" is requered',
  });

  const titleRegister = register("title", {
    required: '* Field "Title" is requered',
  });
  const descriptionRegister = register("body", {
    required: '* Field "Description" is requered',
  });

  const submit = (data) =>  addPost(data, createNewPost);

  return (
    <div className={s.add_post_form}>
      <form onSubmit={handleSubmit(submit)}>
      <input
          type="text"
          name="userId"
          placeholder="ID"
          {...idRegister}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          {...titleRegister}
        />
        <input
          type="text"
          name="body"
          placeholder="Description"
          {...descriptionRegister}
        />
        <button>Add post</button>
      </form>

      <div>
        <div>{errors.title && <p>{errors.title?.message}</p>}</div>
        <div>{errors.userId && <p>{errors.userId?.message}</p>}</div>
        <div>{errors.body && <p>{errors.body?.message}</p>}</div>
      </div>
    </div>
  );
}
