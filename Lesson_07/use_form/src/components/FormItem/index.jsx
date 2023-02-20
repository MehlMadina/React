import React from "react";
import FormButton from "../FormButton";
import FormInput from "../FormInput";
import s from "./style.module.css";
import { useForm } from 'react-hook-form';

export default function FormItem({
  title,
  button,
  info_text,
  form_type,
  info_text_add,
}) {

  const { register, handleSubmit, formState: {errors} } = useForm({ mode: 'onBlur' });

  const submit = (data) => console.log(data);

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  
  const emailRegister = register('email', {
    required: '* Введите свой email',
    pattern: {
      value: emailRegex,
      message: '* Недействительный формат электронной почты.'
    }
  });

  const passwordRegister = register('password', {
    required: '* Введите свой пароль',
    pattern: {
      value: passwordRegex,
      message: '* Ваш пароль должен содержать не менее восьми символов, по крайней мере, одну букву, одну цифру и один специальный символ.'
    }
  });
    
  return (
    <form className={s.form_item} onSubmit={handleSubmit(submit)}>
      <p className={s.form_title}>{title}</p>
      <p className={s.info_text}>{info_text_add}</p>
      <FormInput type="text" name="email" placeholder="Email" {...emailRegister}/>

      <div>
        {errors.email && <p className={s.error_message}>{errors.email?.message}</p>}
      </div>

      {["registration", "login"].includes(form_type) ? (
        <FormInput type="password" name="password" placeholder="Password" {...passwordRegister}/>
      ) : (
        ""
      )}

      <div>
        {errors.password && <p className={s.error_message}>{errors.password?.message}</p>}
      </div>

      <p className={s.info_text}>{info_text}</p>
      <FormButton color="yellow">{button.submit}</FormButton>

      {["reset password"].includes(form_type) ? (
        ""
      ) : (
        <FormButton color="white">{button.redirect}</FormButton>
      )}
    </form>
  );
}
