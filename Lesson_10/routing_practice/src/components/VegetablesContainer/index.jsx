import React, { useContext } from 'react';
import { Context } from '../../context';
import Vegetables from '../Vegetables';

export default function VegetablesContainer() {

const { vegCards } = useContext(Context);

  return (
    <div>
      {
        vegCards
        .sort((a, b) => a.price - b.price)
        .map(el => <Vegetables key={el.id} {...el}/>)
      }
    </div>
  )
}
