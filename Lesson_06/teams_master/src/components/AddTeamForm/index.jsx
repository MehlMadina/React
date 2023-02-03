import React, { useContext } from "react";
import s from "./style.module.css";
import { Context } from "../../context";

export default function AddTeamForm() {

const { add_team } = useContext(Context);

  const submit = (event) => {
    event.preventDefault();
    const { text } = event.target;
    add_team(text.value);
    text.value = "";
  };

  return (
    <div className={s.team_form_container}>
      <form className={s.team_form} onSubmit={submit}>
        <p>Добавить команду</p>
        <input type="text" name="text" placeholder="Название" />
        <button>Добавить</button>
      </form>
    </div>
  );
}
