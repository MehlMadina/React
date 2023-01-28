import React from 'react'
import logo from './media/buh_one_logo.png'
import s from './style.module.css'
import { MenuOutlined } from '@ant-design/icons'

export default function Navbar() {
  return (
    <nav className={['wrapper', s.nav_block].join(' ')}>
        <a href="#">
            <img src={logo} alt="logo" />
        </a>
        <ul className={s.nav_menu}>
            <li>Главная</li>
            <li>Услуги</li>
            <li>Кейсы</li>
            <li>О компании</li>
            <li>Контанты</li>
        </ul>
        <MenuOutlined className={s.menu_icon}/>
    </nav>
  )
}
