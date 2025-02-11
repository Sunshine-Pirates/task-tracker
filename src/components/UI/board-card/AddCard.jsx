import { styled } from "@mui/material";
import { Comments } from "../comments/Comments";
import { Icons } from "../../../assets";
import { useState } from "react";
import { Modal } from "../modal/Modal";
import { AddChecklist } from "./AddChecklist";
import { AddLabelModal } from "../AddLabelCard/AddLabelModal";
import { Members } from "../members/Members";

export const AddCard = () => {
  const [openChecklist, setOpenChecklist] = useState(false);
  const [openLables, setOpenLables] = useState(false);
  const [openMembers, setOpenMembers] = useState(false);
  const [commentsVisible, setCommentsVisible] = useState(true);

  const toggleCommentsVisibility = () => {
    setCommentsVisible((prev) => !prev);
  };

  return (
    <Wrapper>
      {commentsVisible ? (
        <StyledContainerText>
          <Text>Add</Text>
          <StyledContainer>
            <ContainerIcons onClick={() => setOpenMembers(true)}>
              <Icons.Memberss />
              <StyledText>Members</StyledText>
            </ContainerIcons>
            <ContainerIcons>
              <Icons.Estimation />
              <StyledText>Estimation</StyledText>
            </ContainerIcons>
            <ContainerIcons onClick={() => setOpenLables(true)}>
              <Icons.System />
              <StyledText>Label</StyledText>
            </ContainerIcons>
            <ContainerIcons>
              <Icons.Attachment />
              <StyledText>Attachment</StyledText>
            </ContainerIcons>
            <ContainerIcons onClick={() => setOpenChecklist(true)}>
              <Icons.Checklist />
              <StyledText>Checklist</StyledText>
            </ContainerIcons>
          </StyledContainer>
          <ActionsContainer>
            <Text>Actions</Text>
            <IconGroup>
              <ContainerIcons>
                <Icons.Delete />
                <StyledText>Delete</StyledText>
              </ContainerIcons>
              <ContainerIcons>
                <Icons.Folder />
                <StyledText>Archive</StyledText>
              </ContainerIcons>
            </IconGroup>
          </ActionsContainer>
        </StyledContainerText>
      ) : (
        <IconContainerWrapper>
          <Text>Add</Text>
          <IconGroup>
            <IconButton onClick={() => setOpenMembers(true)}>
              <Icons.Memberss />
            </IconButton>
            <IconButton>
              <Icons.Estimation />
            </IconButton>
            <IconButton onClick={() => setOpenLables(true)}>
              <Icons.System />
            </IconButton>
            <IconButton>
              <Icons.Attachment />
            </IconButton>
            <IconButton onClick={() => setOpenChecklist(true)}>
              <Icons.Checklist />
            </IconButton>
          </IconGroup>
          <ActionsContainer>
            <Text>Actions</Text>
            <IconGroup>
              <IconButton>
                <Icons.Delete />
              </IconButton>
              <IconButton>
                <Icons.Folder />
              </IconButton>
            </IconGroup>
          </ActionsContainer>
        </IconContainerWrapper>
      )}

      <Modal isOpen={openMembers} onClose={() => setOpenMembers(false)}>
        <Members />
      </Modal>
      <Modal isOpen={openChecklist} onClose={() => setOpenChecklist(false)}>
        <AddChecklist />
      </Modal>
      <Modal isOpen={openLables} onClose={() => setOpenLables(false)}>
        <AddLabelModal />
      </Modal>
      <Comments
        commentsVisible={commentsVisible}
        toggleCommentsVisibility={toggleCommentsVisibility}
      />
    </Wrapper>
  );
};

const Wrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));

const Text = styled("p")(() => ({
  color: "#919191",
  fontSize: "14px",
  fontWeight: "400",
}));

const IconContainerWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
}));

const IconGroup = styled("div")(() => ({
  display: "flex",
  gap: "8px",
}));

const IconButton = styled("div")(() => ({
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#F4F5F7",
  borderRadius: "8px",
  cursor: "pointer",
}));

const ActionsContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
}));

const StyledContainerText = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
}));

const StyledContainer = styled("div")(() => ({
  width: "316px",
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
}));

const ContainerIcons = styled("div")(() => ({
  width: "154px",
  height: "30px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  paddingLeft: "16px",
  backgroundColor: "#F4F5F7",
  borderRadius: "8px",
  cursor: "pointer",
}));

const StyledText = styled("p")(() => ({
  color: "#172B4D",
  fontWeight: "400",
  fontSize: "14px",
}));
