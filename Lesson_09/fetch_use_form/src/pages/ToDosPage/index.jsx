import React from 'react';
import AddToDoForm from '../../components/AddToDoForm';
import ToDoContainer from '../../components/ToDoContainer';

export default function ToDosPage() {
  return (
    <div>
        <AddToDoForm />
        <ToDoContainer />
    </div>
  )
}
