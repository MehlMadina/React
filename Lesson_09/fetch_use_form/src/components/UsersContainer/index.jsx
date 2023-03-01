import React, { useContext } from 'react';
import { Context } from '../../context';
import User from '../User';
import s from './style.module.css';

export default function UsersContainer() {

const { users } = useContext(Context);

  return (
    <div className={s.user_container}>
        {
            users.map(el => <User key={el.id} {...el}/>)
        }
    </div>
  )
}
