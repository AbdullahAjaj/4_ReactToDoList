import { deleteDialogContext } from "./Contexts";
import { useState } from "react";
import DeleteDialog from "./components/DeleteDialog";

const DeleteDialogProvider = ({ children }) => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [deleteHandle, setDeleteHandle] = useState(() => {});

  function openDialog(handler) {
    setIsDialogVisible(true);
    setDeleteHandle((handle) => handler);
  }
  function closeDialog() {
    setIsDialogVisible(false);
  }
  function confirmDeleteCard() {
    deleteHandle();
    closeDialog();
  }

  return (
    <deleteDialogContext.Provider
      value={{
        openDialog,
        closeDialog,
        isDialogVisible,
        deleteHandle,
        confirmDeleteCard,
      }}
    >
      {children}
      {isDialogVisible && <DeleteDialog />}
    </deleteDialogContext.Provider>
  );
};

export default DeleteDialogProvider;
