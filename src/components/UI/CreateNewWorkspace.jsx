import { useState } from "react";
import { BaseModal } from "./BaseModal";

export const CreateNewWorkspace = () => {
  const [open, setOpen] = useState(false);
  const handleOpenOrCloseModal = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <button onClick={handleOpenOrCloseModal}>
        open create new workspace
      </button>
      <BaseModal open={open} onClose={handleOpenOrCloseModal}>
        <header>
          <p>Create a new workspace</p>
        </header>
        <main></main>
      </BaseModal>
    </>
  );
};
