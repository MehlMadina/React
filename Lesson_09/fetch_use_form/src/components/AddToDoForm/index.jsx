import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../../context";
import { addToDo } from "../../requests/todos";

export default function AddToDoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const { createNewToDo } = useContext(Context);

  const toDoRegister = register("todo", {
    required: '* Field "To Do" is requered',
  });

  const idRegister = register("userId", {
    required: '* Field "user id" is requered',
  });

  const submit = (data) => addToDo(data, createNewToDo);

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input type="text" name="todo" placeholder="To Do" {...toDoRegister} />
        <input type="text" name="userId" placeholder="ID" {...idRegister} />
        <button>Add</button>
      </form>

      <div>
        <div>{errors.todo && <p>{errors.todo?.message}</p>}</div>
      </div>
    </div>
  );
}
