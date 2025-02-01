import { useState } from "react";
import { Icons } from "../../../assets";
import { IconButton, styled } from "@mui/material";
import { AddLabelModal } from "../addLableCard/AddLabelModal";
import { Modal } from "../modal/Modal";
import { lables } from "../../../utils/constants/lables";

export const Labels = () => {
  const [isOpenCard, setIsOpenCard] = useState(false);
  const [labelById, setLabelById] = useState(null);

  const handleOpenCard = () => {
    setIsOpenCard(true);
  };
  const handleCloseCard = () => {
    setIsOpenCard(false);
  };

  const handleLabelId = (id) => {
    const label = lables.find((item) => item.id === id);
    setLabelById(label);
    handleCloseCard();
  };
  const handleDeleteLabel = (labelId) => {
    const deleteLabel = lables.filter((item) => item.id !== labelId);
    setLabelById(deleteLabel);
  };

  return (
    <Wrapper>
      <StyledText>Labels</StyledText>
      <ContainerList>
        {labelById && (
          <StyledList
            key={labelById.id}
            backgroundColor={labelById.backgroundColor}
          >
            <p>{labelById.text}</p>
            <IconButton onClick={() => handleDeleteLabel(labelById.id)}>
              <Icons.DeleteText />
            </IconButton>
          </StyledList>
        )}
        <StyledButton onClick={handleOpenCard}>
          <Icons.PlusWhite />
        </StyledButton>
      </ContainerList>
      {isOpenCard && (
        <Modal isOpen={isOpenCard} onClose={handleCloseCard}>
          <AddLabelModal onLabelId={handleLabelId} />
        </Modal>
      )}
    </Wrapper>
  );
};
const Wrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  padding: "8px 20px",
}));
const StyledButton = styled("div")(() => ({
  backgroundColor: "#C9C9C9",
  width: "28px",
  height: "28px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  color: "#FFFFFF",
}));
const ContainerList = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));
const StyledList = styled("div")(({ backgroundColor }) => ({
  height: "32px",
  color: "#FFFFFF",
  fontWeight: "500",
  borderRadius: "6px",
  padding: "10px 10px",
  backgroundColor,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
const StyledText = styled("p")(() => ({
  color: "#919191",
  fontSize: "14px",
}));
