import { useState } from "react";
import { Icons } from "../../../assets";
import { IconButton, styled } from "@mui/material";
import { AddLabelModal } from "../AddLabelCard/AddLabelModal";
import { Modal } from "../modal/Modal";
import { lables } from "../../../utils/constants/lables";

export const Labels = () => {
  const [isOpenCard, setIsOpenCard] = useState(false);
  const [labelsById, setLabelsById] = useState([]);

  const handleOpenCard = () => {
    setIsOpenCard(true);
  };
  const handleCloseCard = () => {
    setIsOpenCard(false);
  };

  const handleLabelId = (id, newText) => {
    setLabelsById((prevLabels) => {
      const label = lables.find((item) => item.id === id);
      if (label) {
        return [...prevLabels, { ...label, text: newText, id: Date.now() }];
      }
      return prevLabels;
    });
    handleCloseCard();
  };
  const handleDeleteLabel = (labelId) => {
    const deleteLabel = labelsById.filter((item) => item.id !== labelId);
    setLabelsById(deleteLabel);
  };

  return (
    <Wrapper>
      <StyledText>Labels</StyledText>
      <ContainerList>
        {labelsById.map((label) => (
          <StyledList key={label.id} backgroundColor={label.backgroundColor}>
            <p>{label.text}</p>
            <IconButton onClick={() => handleDeleteLabel(label.id)}>
              <Icons.DeleteText />
            </IconButton>
          </StyledList>
        ))}
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
const StyledButton = styled(IconButton)(() => ({
  backgroundColor: "#C9C9C9",
}));
const ContainerList = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
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
