import React from "react";
import s from "./style.module.css";

export default function Comments({ text }) {
  return <p className={s.comment_item}>{text}</p>;
}
