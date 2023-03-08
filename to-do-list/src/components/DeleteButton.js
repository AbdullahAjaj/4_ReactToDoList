import deleteIcon from "./../images/deleteIcon.png"
// import { useState } from "react"

const DeleteButton = ({ handleClick }) =>{
  return(
    <img
      src={deleteIcon}
      className="delete"
      onClick={handleClick}
      alt="delete"
    />
  )
}

export default DeleteButton