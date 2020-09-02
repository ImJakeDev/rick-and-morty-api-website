import React, { useState } from "react"

const CardEffect = props => {

  const { id, image, name, gender, species, status } = props.character

  const altText = `${name}'s Info Card`

  return (
    <li key={props.index + id} className="pokeCard">
      {/* <div
        style={{ backgroundImage: `url("${imageUrlHiRes}")` }}
        onMouseEnter={() => {
          setCardClass(hoverCard)
        }}
        onMouseLeave={() => {
          setCardClass(card)
        }}
        className={cardClass}
        alt={altText}
      ></div> */}
      <a className="card" href="#!">
        <div
          alt={altText}
          className="front"
          style={{ backgroundImage: `url("${image}")` }}
        >
          <p>This is the front of the card</p>
        </div>
        <div className="back">
          <div>
            <p>This is the back of the card number 1 area...</p>
            <p>This is the back of the card number 2 area...</p>
            <button className="button">Click Here</button>
          </div>
        </div>
      </a>
    </li>
  )
}

export default CardEffect
