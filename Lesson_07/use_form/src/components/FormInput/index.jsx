import React from 'react';
import s from './style.module.css';

export default function FormInput(props) {
  return (
    <input {...props} className={s.form_input}/>

    
  )
}