import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

import { useContext, useState } from "react";
import { deleteDialogContext } from "../Contexts";

const Card = ({ cardData, saveCardChanges, onDeleteCard }) => {
  const [editCard, setEditCard] = useState(false);
  const [cardTitle, setCardTitle] = useState(cardData.title);
  const [cardColor, setCardColor] = useState(cardData.color);
  const [cardCheck, setCardCheck] = useState(cardData.done);

  let deleteContextValues = useContext(deleteDialogContext);

  function changeEditMode() {
    editCard ? setEditCard(false) : setEditCard(true);
  }

  function saveChanges(e) {
    e.preventDefault();
    saveCardChanges({
      ...cardData,
      title: cardTitle,
      color: cardColor,
      done: cardCheck,
    });
    changeEditMode();
  }

  function handleChangeColor(e) {
    setCardColor(e.target.value);
  }
  function handleChangeTitle(e) {
    setCardTitle(e.target.value);
  }
  function handleChangeCheck(e) {
    setCardCheck(e.target.checked);
  }

  function handleOpenDialog() {
    deleteContextValues.openDialog(() => onDeleteCard(cardData.id));
  }

  return (
    <>
      {!editCard ? (
        <div key={cardData.id} className="item">
          <div
            className="color"
            style={{ backgroundColor: cardData.color }}
          ></div>
          <div className="buttons">
            <EditButton handleClick={changeEditMode} />
            <DeleteButton handleClick={handleOpenDialog} />
          </div>
          <p className="title">{cardData.title}</p>
          <input
            type="checkbox"
            className="checkbox"
            checked={cardData.done && true}
          />
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
          <input
            className="color"
            type="color"
            name="color"
            value={cardColor}
            onChange={handleChangeColor}
          />
          <div className="buttons">
            <button onClick={saveChanges}>Save</button>
            <DeleteButton handleClick={handleOpenDialog} />
          </div>
          <input
            className="title"
            name="title"
            value={cardTitle}
            onChange={handleChangeTitle}
          />
          <input
            type="checkbox"
            name="checkbox"
            className="checkbox"
            checked={cardCheck && true}
            onChange={handleChangeCheck}
          />
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
    </>
  );
};

export default Card;
