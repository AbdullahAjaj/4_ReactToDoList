import deleteIcon from "./../images/deleteIcon.png"
import { useState } from "react"

const FormNew = ({ onDeleteCard, handleSave, formLifeCycle, handleTitleChange })=>{
  const [titleMsg, setTitleMsg] = useState("")

  function onSave(e){
    e.preventDefault()
    let newCard = {}
    newCard.id = Date.now()
    newCard.color = document.forms[0].color.value
    newCard.title = titleMsg
    newCard.done = document.forms[0].checkbox.checked
    newCard.image = "images/image.jpg"
    handleSave(newCard)
  }

  function handleTitleMsg(e){
    setTitleMsg(e.target.value)
  }

  return(
    <form className="item" id="item-form" onSubmit={onSave}>
    <input type="color" className="color" name="color" />
    <div className="buttons">
      <button disabled={titleMsg.length === 0}>Save</button>
      <img
        src={deleteIcon}
        className="delete"
        onClick={onDeleteCard}
        alt="delete"
      />
    </div>
    <input
      type="text"
      className="title"
      name="title"
      placeholder="Enter title here"
      onChange={handleTitleMsg}
      value={titleMsg}
    />
    <input type="checkbox" className="checkbox" name="checkbox" />
    <div className="others">others</div>
    <img
      src="images/image.jpg"
      className="image"
      alt="imageUser"
      height="20"
      width="20"
      data-dialog-id="imageslider"
      onclick="renderImageSlideDialog(event)"
    />
    <div>{titleMsg}</div>
  </form>
  )
}

export default FormNew