import React, { useContext } from "react";
import s from "./style.module.css";
import Select from "react-select";
import { Context } from "../../context";

export default function AddUserForm() {

  const { teams, add_user } = useContext(Context);
    
  const submit = (event) => {
    event.preventDefault();
    const { user_name, user_team } = event.target;
    add_user(user_name.value, user_team.value);
    user_name.value = "";
    user_team.value = "";
  };

  return (
    <div className={s.user_form_container}>
      <form onSubmit={submit} className={s.user_form}>
        <input type="text" name="user_name" placeholder="Имя участника" />
        <Select options={teams} name='user_team'/>
        <button>Добавить участника</button>
      </form>
    </div>
  );
}
