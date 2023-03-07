import React, { useContext } from 'react';
import { Context } from '../../context';
import Fruits from '../Fruits';

export default function FruitsContainer() {

const { fruitCards } = useContext(Context);

  return (
    <div>
        {
          fruitCards
          .sort((a, b) => a.price - b.price)
          .map(el => <Fruits  key={el.id} {...el}/>)
        }
    </div>
  )
}
