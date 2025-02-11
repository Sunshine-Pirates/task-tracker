import { styled } from "@mui/material";
import { Comments } from "../comments/Comments";
import { Icons } from "../../../assets";

export const AddCard = () => {
  return (
    <Wrapper>
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
          {" "}
          <Icons.Attachment />
          <StyledText>Attachment</StyledText>
        </ContainerIcons>
        <ContainerIcons>
          <Icons.Checklist />
          <StyledText>Checklist</StyledText>
        </ContainerIcons>
       

      </StyledContainer>
        <StyledContainerr>
        <Text>Actions</Text>
        <section>

            <ContainerIcons>
                <Icons.Delete />
                <StyledText>Delete</StyledText>
            </ContainerIcons>
            <ContainerIcons>
                <Icons.Folder />
                <StyledText>Archive</StyledText>
            </ContainerIcons>
        </section>

        </StyledContainerr>
      </StyledContainerText>
      <Comments />

    </Wrapper>
  );
};
const StyledContainerr = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  "& section": {
  display: "flex",
  gap: "8px",
  }
}));

const Text = styled("p")(() => ({
  color: "#919191",
  fontSize: "14px",
  fontWeight: "400",
}));

const Wrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));
const StyledContainerText = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
}));
const StyledContainer = styled("div")(() => ({
  width: "316px",
  height: "106px",
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