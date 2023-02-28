import React from 'react';
import s from './style.module.css';

export default function Form() {
  return (
    <form className={s.add_products_form}>
        <input type="text" name='title' placeholder='Title'/>
        <input type="text" name='description' placeholder='Description'/>
        <input type="text" name='price' placeholder='Price'/>
        <button>Add Product</button>
    </form>
  )
}
