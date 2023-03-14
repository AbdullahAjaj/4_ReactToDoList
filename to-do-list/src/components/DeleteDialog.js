import closeIcon from "./../images/close.png";
import { useContext } from "react";
import { cardID } from "../Contexts";

const DeleteDialog = ({ handleCloseDialog, onDeleteCard }) => {
  const cardid = useContext(cardID);

  function handleDeleteConfirm() {
    return onDeleteCard(cardid);
  }

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <p>Are you sure you want to delete it?</p>
        <img
          src={closeIcon}
          id="close"
          onClick={handleCloseDialog}
          alt="close"
          height="30"
          width="30"
        />
        <button className="yes" onClick={handleDeleteConfirm}>
          Yes
        </button>
        <button className="Cancel" onClick={handleCloseDialog}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteDialog;
