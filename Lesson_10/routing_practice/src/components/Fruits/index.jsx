import React, { useContext } from 'react';
import s from './style.module.css';
import { Context } from '../../context';

export default function Fruits({ id, title, price, country }) {

const { delete_fruit } = useContext(Context);

  return (
    <div className={s.fruit_card} onClick={() => delete_fruit(id)}>
      <p>Title:{ title }</p>
      <p>Price:{ price }$</p>
      <p>Country:{ country }</p>
    </div>
  )
}
