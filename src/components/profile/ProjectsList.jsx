import { styled } from "@mui/material";
import { projectsList } from "../../utils/constants/profile";

export const ProjectsList = () => {
  return (
    <StyledProjectList>
      {projectsList.map((item) => (
        <StyledContainer key={item.id}>
          <StyledIcon>{item.text && item.text.charAt(0)}</StyledIcon>
          <StyledItem>
            <StyledText> {item.text}</StyledText>
            <StyledTitle>{item.title}</StyledTitle>
          </StyledItem>
        </StyledContainer>
      ))}
    </StyledProjectList>
  );
};
const StyledProjectList = styled("div")(() => ({
  height: "320px",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  flexWrap: "wrap",
}));
const StyledContainer = styled("div")(() => ({
  display: "flex",
  gap: "12px",
  alignItems: "center",
}));
const StyledItem = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
}));
const StyledIcon = styled("p")(() => ({
  width: "68px",
  height: "66px",
  backgroundColor: "#0079BF",
  color: "#FFFFFF",
  fontSize: "44px",
  fontWeight: "500",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Gilroy",
}));
const StyledText = styled("p")(() => ({
  color: "#000000",
  fontWeight: "500",
  fontSize: "18px",
}));
const StyledTitle = styled("p")(() => ({
  color: "#919191",
  fontWeight: "400",
}));
