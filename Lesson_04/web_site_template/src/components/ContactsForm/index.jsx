import React from 'react';
import s from './style.module.css';
import { useForm } from 'react-hook-form';

export default function ContactsForm() {

const { register, handleSubmit, formState: { errors } } = useForm();

const submit = (data) => console.log(data);

const firstnameRegister = register('firstname', {
  required: '* Введите ваше имя'
}); 
const lastnameRegister = register('lastname', {
  required: '* Введите вашу фамилию'
}); 
const messageRegister = register('message', {
  required: '* Введите ваше сообщение'
}); 


  return (
    <form className={s.contacts_form} onSubmit={handleSubmit(submit)}>
        <div className={s.names_block}>
            <label>
            <p>Имя</p>
            <input 
            type='text' 
            name='firstname' 
            placeholder='Иван'
            {...firstnameRegister}
            />
        </label>

        <label>
            <p>Фамилия</p>
            <input 
            type='text' 
            name='lastname' 
            placeholder='Петров'
            {...lastnameRegister}
            />
        </label>
        </div>
        
        <label>
            <p>Сообщение</p>
            <textarea 
            type='text' 
            name='message' 
            placeholder='Ваше сообщение'
            {...messageRegister}
            />
        </label>

        <div className={s.error_message}>
        {errors.firstname && <p>{errors.firstname?.message}</p>}
        </div>

        <div className={s.error_message}>
        {errors.lastname && <p>{errors.lastname?.message}</p>}
        </div>

        <div className={s.error_message}>
        {errors.message && <p>{errors.message?.message}</p>}
        </div>

        <button>Отправить сообщение</button>
    </form>
  )
}
