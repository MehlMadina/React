import React from 'react';
import s from './style.module.css';

export default function ToDoItem({ todo, completed }) {

const todo_status = completed ? 'task done' : 'task not done';

  return (
    <div className={s.todo_card}>
      <p>ToDo:{ todo }</p>
      <p>Status:{ todo_status }</p>
    </div>
  )
}
