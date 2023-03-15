import closeIcon from "./../images/close.png";
import { deleteDialogContext } from "../Contexts";
import { useContext } from "react";

const DeleteDialog = () => {
  let deleteContextValues = useContext(deleteDialogContext);

  function handleDeleteConfirmation() {
    deleteContextValues.confirmDeleteCard();
  }

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <p>Are you sure you want to delete it?</p>
        <img
          src={closeIcon}
          id="close"
          onClick={deleteContextValues.closeDialog}
          alt="close"
          height="30"
          width="30"
        />
        <button className="yes" onClick={handleDeleteConfirmation}>
          Yes
        </button>
        <button className="Cancel" onClick={deleteContextValues.closeDialog}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteDialog;
