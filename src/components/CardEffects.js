import React from "react"

const CardEffect = props => {

  const { image, name, gender, species, status } = props.character

  const altText = `${name}'s Info Card`

  return (
    <a className="card" href="#!">
      <div
        alt={altText}
        className="front"
        style={{ backgroundImage: `url("${image}")` }}
      >
        <p>{name}</p>
      </div>
      <div className="back">
        <div>
          <p>{name} is:</p>
          <p>Species: {species}</p>
          <p>Gender: {gender}</p>
          <p>Status: {status}</p>
          <button className="button">Learn Mo!</button>
        </div>
      </div>
    </a>
  )
}

export default CardEffect
