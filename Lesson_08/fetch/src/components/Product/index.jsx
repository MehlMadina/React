import React from "react";
import s from './style.module.css';

export default function Product({ title, description, price }) {
  return (
    <div className={s.product_card}>
      <p>{title}</p>
      <p>{description}</p>
      <p>{price}$</p>
    </div>
  );
}
