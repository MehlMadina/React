import React, { useContext } from 'react';
import { addProduct } from '../../requests/products';
import s from './style.module.css';
import { Context } from '../../context';

export default function Form() {

const { createProduct } = useContext(Context);  

const submit = (event) => {
  event.preventDefault();
  const { title, description, price } = event.target;

  addProduct({
    id: Date.now(),
    title: title.value,
    description: description.value,
    price: price.value
  }, createProduct)
  // console.log(title.value, description.value, price.value);
  title.value = '';
  description.value = '';
  price.value = '';
}

  return (
    <form className={s.add_products_form} onSubmit={submit}>
        <input type="text" name='title' placeholder='Title'/>
        <input type="text" name='description' placeholder='Description'/>
        <input type="text" name='price' placeholder='Price'/>
        <button>Add Product</button>
    </form>
  )
}
