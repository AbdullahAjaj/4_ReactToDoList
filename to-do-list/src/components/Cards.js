import Card from "./Card";

const Cards = ({cards, onDeleteCard, saveCardChanges}) =>{
  return( 
    <section>
      {cards.map((card) => {
        return <Card cardData={card} onDeleteCard={onDeleteCard} saveCardChanges={saveCardChanges} />
      })}
    </section>
  )
}

export default Cards