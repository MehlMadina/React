import React, { useContext } from "react";
import { Context } from "../../context";
import Post from "../Post";
import s from './style.module.css';

export default function PostsContainer() {
  const { posts } = useContext(Context);

  return (
    <div className={s.post_container}>
      {
        posts.map(el => <Post key={el.id} {...el} />)
      }
    </div>
  );
}
