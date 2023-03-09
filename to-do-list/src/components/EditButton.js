import editIcon from "./../images/editIcon.png"

const EditButton = ({ handleClick }) =>{

  return (
    <img src={editIcon} className="edit" 
      onClick={handleClick} alt="edit"
    />
  )
}

export default EditButton 