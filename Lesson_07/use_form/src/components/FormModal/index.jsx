import React, { useContext } from "react";
import s from "./style.module.css";
import FormItem from "../FormItem";
import { Context } from "../../context";
import { CloseOutlined } from "@ant-design/icons";

export default function FormModal() {
  const { modalActive, setModalActive } = useContext(Context);

  return (
    <div className={[s.modal, modalActive ? s.active : ""].join(" ")}>
      <div className={s.modal_content}>
        <button onClick={() => setModalActive(false)}>
          <CloseOutlined className={s.crossIcon} />
        </button>

        <FormItem
          title={"Регистрация"}
          button={{ submit: "Регистрация", redirect: "Войти" }}
          info_text={
            "Регистрируясь на сайте, вы соглашаетесь с нашими Правилами и Политикой конфедициальности и соглашаетесь на информационную рассылку."
          }
          form_type={"registration"}
        />
      </div>
    </div>
  );
}
