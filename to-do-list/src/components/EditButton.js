import editIcon from "./../images/editIcon.png"

const EditButton = () =>{
  function handleEditClick(){
    return console.log("HIIIIIIIIII")
  }

  return (
    <img src={editIcon} className="edit" 
      onClick={handleEditClick} alt="edit"
    />
  )
}

export default EditButton 