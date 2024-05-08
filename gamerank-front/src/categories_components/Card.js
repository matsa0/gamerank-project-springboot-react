import React from 'react'

export default function Card({url_image, name}) {

  return (
      <div className="card card-categories">
          <img src={url_image} alt={"Imagem do jogo " + name} />
      </div>
  )
}
