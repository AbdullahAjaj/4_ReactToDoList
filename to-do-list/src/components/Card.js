import EditButton from "./EditButton"
import DeleteButton from "./DeleteButton"
import DeleteDialog from "./DeleteDialog";

import { useState } from "react" 
import { cardID } from "../Contexts";


const Card = ({ cardData, saveCardChanges, handleOpenDialog, onDeleteCard }) => {
  const [editCard, setEditCard] = useState(false)
  const [cardTitle, setCardTitle] = useState(cardData.title)
  const [cardColor, setCardColor] = useState(cardData.color)
  const [cardCheck, setCardCheck] = useState(cardData.done)
  
  const [showConfirmation, setShowConfirmation] = useState(false);

  function changeEditMode(){
    editCard ? setEditCard(false) : setEditCard(true)
  }

  function saveChanges(e){
    e.preventDefault()
    saveCardChanges({
      ...cardData,
      title : cardTitle,
      color : cardColor,
      done : cardCheck
    })
    changeEditMode()
  }

  function handleChangeColor(e){
    setCardColor(e.target.value)
  }
  function handleChangeTitle(e){
    setCardTitle(e.target.value)
  }
  function handleChangeCheck(e){
    setCardCheck(e.target.checked)
  }


  function closeDialog() {
    setShowConfirmation(false);
  }
  function openDialog(cardId) {
    setShowConfirmation(true);
    return cardId;
  }

  return(
    <>
      {!editCard ? (
        <div key={cardData.id} className="item">
          <div className="color" style={{ backgroundColor: cardData.color }}></div>
          <div className="buttons">
            <EditButton handleClick={changeEditMode} />
            <DeleteButton handleClick={openDialog} />
          </div>
          <p className="title">{cardData.title}</p>
          <input type="checkbox" className="checkbox" checked={cardData.done && true} />
          <div className="others">Others</div>
          <img
            src={cardData.image}
            className="image"
            alt="userImage"
            height={20}
            width={20}
          />
        </div>
      ) : (
        <form key={cardData.id} className="item" id="editForm">
          <input className="color" type="color" name="color" value={cardColor} onChange={handleChangeColor} />
          <div className="buttons">
            <button onClick={saveChanges}>Save</button>
            <DeleteButton handleClick={openDialog} />
          </div>
          <input className="title" name="title" value={cardTitle} onChange={handleChangeTitle} />
          <input type="checkbox" name="checkbox" className="checkbox" checked={cardCheck && true} onChange={handleChangeCheck} />
          <div className="others">Others</div>
          <img
            src={cardData.image}
            className="image"
            alt="userImage"
            height={20}
            width={20}
          />
        </form>
      )}
      <cardID.Provider value={cardData.id}>
        {showConfirmation && <DeleteDialog handleCloseDialog={closeDialog} onDeleteCard={onDeleteCard} />}
      </cardID.Provider>
    </>
  )
}

export default Card