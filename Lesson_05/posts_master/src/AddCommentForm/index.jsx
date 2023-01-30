import React from 'react';
import s from './style.module.css';

export default function AddCommentForm({ id, add_comment }) {

const submit = (event) => {
    event.preventDefault();
    const { comment } = event.target;
    add_comment(id, comment.value);
    comment.value = '';
}

  return (
    <form className={s.comment_form} onSubmit={submit}>
        <input type="text" placeholder='Your comment' name='comment'/>
        <button>Add</button>
    </form>
  )
}
