import React from 'react'

export default function ServiceCard({ title, img}) {

const cards_style = {
    backgroundImage: `url(${img})`
}

  return (
    <div style={cards_style}>
        { title }
    </div>
  )
}
// HW grid 6 blocks