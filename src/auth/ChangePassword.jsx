import { styled } from "@mui/material";
import { Icons } from "../assets";
import ImageSignUp from "../assets/images/SigIn.png";
import { Input } from "../components/UI/input/Input";
import { Button } from "../components/UI/Button";

export const ChangePassword = () => {
  return (
    <Container>
      <StyledContainerLogo>
        <Icons.LogoTaskTracker />
        <StyledText>Task Tracker</StyledText>
      </StyledContainerLogo>
      <StyledContainerBox>
        <StyledWrapper>
          <p>Password</p>
          <StyledContainer>
            <StyledForm>
              <StyledInput placeholder="Password" type="password" />
              <StyledInput placeholder="Repeat password" type="password" />
            </StyledForm>
            <StyledButton variant="cancel">Log In</StyledButton>
          </StyledContainer>
        </StyledWrapper>
        <StyledImage src={ImageSignUp} alt="ImageSignUp" />
      </StyledContainerBox>
    </Container>
  );
};
const Container = styled("div")(() => ({
  display: "flex",
  gap: "50px",
}));
const StyledContainerBox = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "161px",
}));
const StyledWrapper = styled("section")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  "& p": {
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "500",
    color: "#000000",
  },
}));
const StyledContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  alignItems: "center",
}));
const StyledContainerLogo = styled("section")(() => ({
  display: "flex",
  gap: "8px",
  paddingLeft: "40px",
  paddingTop: "20px",

  "& p": {
    color: "#0079BF",
    fontWeight: "600",
    fontSize: "20px",
  },
}));
const StyledForm = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));
const StyledInput = styled(Input)(() => ({
  width: "321px",
  height: "32px",
}));
const StyledImage = styled("img")(() => ({
  width: "579px",
  height: "auto",
  objectFit: "cover",
}));
const StyledButton = styled(Button)(() => ({
  width: "139px",
  height: "34px",
  backgroundColor: "#0079BF",
  color: "#FFFFFF",
}));
const StyledText = styled("p")(() => ({
  fontSize: "18px",
  fontWeight: "500",
  color: "#000000",
}));
