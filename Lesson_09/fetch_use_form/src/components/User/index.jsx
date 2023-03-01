import React from "react";
import s from "./style.module.css";

export default function User({ firstName, lastName, age }) {
  return (
    <div className={s.user_card}>
      <p> Firstname: {firstName}</p>
      <p> Lastname: {lastName}</p>
      <p> Age: {age}</p>
    </div>
  );
}
