import React, { useContext } from "react";
import s from "./style.module.css";
import FormItem from "../FormItem";
import { Context } from "../../context";
import { CloseOutlined } from "@ant-design/icons";
import { Routes, Route } from "react-router-dom";

export default function FormModal() {

  const { modalActive, setModalActive } = useContext(Context);

  return (
    <div className={[s.modal, modalActive ? s.active : ""].join(" ")}>
      <div className={s.modal_content}>

          <CloseOutlined onClick={() => setModalActive(false)} className={s.crossIcon} />
        
        <Routes>
          <Route
            path="/registration_form"
            element={
              <FormItem
                title={"Регистрация"}
                button={{ submit: "Регистрация", redirect: "Войти" }}
                info_text={
                  "Регистрируясь на сайте, вы соглашаетесь с нашими Правилами и Политикой конфедициальности и соглашаетесь на информационную рассылку."
                }
                form_type={"registration"}
                redirect_btn_link={'/login_form'}
              />
            }
          />

          <Route
            path="/login_form"
            element={
              <FormItem
                title={"Войти"}
                button={{ submit: "Войти", redirect: "Регистрация" }}
                info_text={"Восстановить пароль"}
                form_type={"login"}
                redirect_btn_link={'/registration_form'}
              />
            }
          />

          <Route
            path="/reset_password_form"
            element={
              <FormItem
                title={"Восстановление пароля"}
                button={{ submit: "Отправить" }}
                info_text={"Срок действия временного пароля 24 ч."}
                form_type={"reset passwort"}
                info_text_add={
                  "Для получения временного пароля необходимо ввести email указанный при регистрации."
                }
              />
            }
          />
        </Routes>


      </div>
    </div>
  );
}
