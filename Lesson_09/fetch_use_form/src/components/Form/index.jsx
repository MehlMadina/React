import React, { useContext} from "react";
import { useForm } from "react-hook-form";
import s from './style.module.css';
import { Context } from "../../context";
import { addUser } from "../../requests/users";

export default function Form() {
  const { register, handleSubmit, formState: {errors} } = useForm({
    mode: 'onBlur'
  });


const { createUsersCard } = useContext(Context);


  const firstnameRegister = register("firstName", {
    required: '* Field "firstname" is requered'
  });
  const lastnameRegister = register("lastName", {
    required: '* Field "lastname" is requered'
  });
  const ageRegister = register("age", {
    required: '* Field "age" is requered'
  });

  const submit = (data) => addUser(data, createUsersCard);

  // const submit = (event) => {
  //     event.preventDefault();
  //     const { first_name, last_name, age } = event.target;
  //     console.log(first_name.value, last_name.value, age.value);
  //     first_name.value = '';
  //     last_name.value = '';
  //     age.value = '';
  // }

  return (
    <div className={s.add_user_form}>
      <form onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          name="firstName"
          placeholder="Firstname"
          {...firstnameRegister}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Lastname"
          {...lastnameRegister}
        />

        <input 
          type="text" 
          name="age" 
          placeholder="Age" 
          {...ageRegister} 
        />
        <button>Add user</button>
      </form>

      <div>
        <div>
          {errors.firstName && <p>{errors.firstName?.message}</p>}
        </div>

        <div>
          {errors.lastName && <p>{errors.lastName?.message}</p>}
        </div>

        <div>
          {errors.age && <p>{errors.age?.message}</p>}
        </div>
      </div>
    </div>
  );
}
