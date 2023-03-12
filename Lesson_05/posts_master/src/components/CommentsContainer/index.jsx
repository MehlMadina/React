import React from "react";
import AddCommentForm from "../AddCommentForm";
import Comments from "../Comments";

export default function CommentsContainer({ comments, add_comment, id }) {
  return (
    <div>
      {comments.map((el) => (
        <Comments key={el.id} {...el} post_id={id} />
      ))}
      <AddCommentForm add_comment={add_comment} id={id} />
    </div>
  );
}
