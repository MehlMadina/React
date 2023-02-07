import React from "react";
import s from './style.module.css';

export default function User({name, team}) {
    return (
        <div className={s.user_item}>
            <p>{ name }</p>
            <p>{ team }</p>
        </div>

    )
}