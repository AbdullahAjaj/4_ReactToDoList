// import { useState } from "react"
import EditButton from "./EditButton"
import DeleteButton from "./DeleteButton"
// import FormNew from "./FormNew"

const Cards = ({cards, onDeleteCard}) =>{
  function handleDeleteClick(card) {
    return () => onDeleteCard(card.id, card);
  }

  return( 
    <section>
      {cards.map((card) => {
        return (
          <div key={card.id} className="item">
            <div
              className="color"
              style={{ backgroundColor: card.color }}
            ></div>
            <div className="buttons">
              <EditButton />
              <DeleteButton handleClick={handleDeleteClick(card)} />
            </div>
            <p className="title">{card.title}</p>
            <input type="checkbox" className="checkbox" checked={card.done && true} />
            <div className="others">Others</div>
            <img
              src={card.image}
              className="image"
              alt="userImage"
              height={20}
              width={20}
            />
          </div>
        )
      })}
    </section>
  )
}

export default Cards