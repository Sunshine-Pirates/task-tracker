import { styled } from "@mui/material";
import { Icons } from "../../../assets";
import { Input } from "../input/Input";
import { Button } from "../Button";
import { Comments } from "../comments/Comments";
import { useState } from "react";

export const CreateNewTitle = () => {
  const [commentsVisible, setCommentsVisible] = useState(false);

  const toggleCommentsVisibility = () => {
    setCommentsVisible((prev) => !prev);
  };
  return (
    <StyledWrapper>
      <Wrapper>
        <Container>
          <Icons.Editt />
          <p>Какая то задача, которую нужно выполнить</p>
        </Container>
        <ContainerDescription>
          <Description>
            <Icons.Down />
            <Text>Description</Text>
          </Description>
          <StyledDescription placeholder="Add a description" />
          <StyledContainerBtn>
            <CancelBtn variant="">Cancel</CancelBtn>
            <SaveBtn variant="">Save</SaveBtn>
          </StyledContainerBtn>
        </ContainerDescription>
      </Wrapper>
      <StyledCOntainer>
        <StyledContainerText>
          <Text>Add</Text>
          <StyledContainer>
            <ContainerIcons>
              <Icons.Memberss />
              <StyledText>Members</StyledText>
            </ContainerIcons>
            <ContainerIcons>
              <Icons.Estimation />
              <StyledText>Estimation</StyledText>
            </ContainerIcons>
            <ContainerIcons>
              <Icons.System />
              <StyledText>Label</StyledText>
            </ContainerIcons>
            <ContainerIcons>
              <Icons.Attachment />
              <StyledText>Attachment</StyledText>
            </ContainerIcons>
            <ContainerIcons>
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
        <Comments
          commentsVisible={commentsVisible}
          toggleCommentsVisibility={toggleCommentsVisibility}
        />
      </StyledCOntainer>
    </StyledWrapper>
  );
};
const StyledCOntainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));
const StyledWrapper = styled("div")(() => ({
  display: "flex",
  gap: "20px",
}));
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
const ContainerDescription = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));
const Description = styled("section")(() => ({
  display: "flex",
  gap: "8px",
}));
const StyledDescription = styled(Input)(() => ({
  width: "670px",
  height: "83px",
}));
const StyledContainerBtn = styled("div")(() => ({
  display: "flex",
  justifyContent: "end",
  gap: "16px",
}));
const Container = styled("section")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "6px",
  fontSize: "18px",
  color: "#111111",
}));
const CancelBtn = styled(Button)(() => ({
  width: "78px",
  height: "30px",
  backgroundColor: "#F0F0F0",
  fontSize: "14px",
  fontWeight: "400",
  color: "#919191",
  "&:hover": {
    color: "#FFFFFF",
  },
}));
const SaveBtn = styled(Button)(() => ({
  width: "64px",
  height: "30px",
  backgroundColor: "#0079BF",
  fontSize: "14px",
  fontWeight: "400",
  color: "#FFFFFF",
  "&:hover": {
    color: "#FFFFFF",
  },
}));

const IconGroup = styled("div")(() => ({
  display: "flex",
  gap: "8px",
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
