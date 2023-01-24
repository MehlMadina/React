import React from 'react'
import s from './index.module.css'

export default function ServiceCard({ title, img}) {

const cards_style = {
    backgroundImage: `url(${img})`
}

  return (
    <div style={cards_style} className={s.card_item}>
        { title }
    </div>
  )
}
