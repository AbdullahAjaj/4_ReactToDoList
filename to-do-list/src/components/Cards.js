import Card from "./Card";

const Cards = ({cards, onDeleteCard, saveCardChanges, handleOpenDialog}) =>{

  return( 
    <section>
      {cards.map((card) => {
        return( 
          <Card key={card.id} 
                cardData={card} 
                onDeleteCard={onDeleteCard} 
                saveCardChanges={saveCardChanges} 
                handleOpenDialog={handleOpenDialog} 
          />
        )
      })}
    </section>
  )
}

export default Cards