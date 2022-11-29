import React from 'react'
import ToDoItem from '../ToDoItem'

export default function ToDoList({ tasks }) {
  return (
    <div>
        <p>Tasks:</p>
        {
            tasks.map(task => <ToDoItem key={task.id} {...task}/>)
        }
    </div>
  )
}
