import { Avatar, styled } from "@mui/material";
import { Icons } from "../assets";
import { Input } from "../components/UI/input/Input";
import { Checkbox } from "../components/UI/checkbox/Checkbox";
import { Button } from "../components/UI/Button";
import ImageSignUp from "../assets/images/SigIn.png";

export const SignUp = () => {
  return (
    <Container>
      <StyledContainerLogo>
        <Icons.LogoTaskTracker />
        <p>Task Tracker</p>
      </StyledContainerLogo>
      <ContainerBox>
        <StyledWrapperForm>
          <StyledText>Sign Up</StyledText>
          <StyledContainerr>
            <StyledGoogle>
              <div>
                <StyledAvatar>
                  <p>T</p>
                </StyledAvatar>
                <article>
                  <p style={{ color: "#919191" }}>Sign Up as Nazira</p>
                  <span>example@gmail.com</span>
                </article>
              </div>
              <Icons.Google />
            </StyledGoogle>
            <p style={{ color: "#919191", textAlign: "center" }}>or</p>
            <StyledForm>
              <StyledInput placeholder="Name" />
              <StyledInput placeholder="Surname" />
              <StyledInput placeholder="example@gmail.com" />
              <StyledInput placeholder="Password" type="password" />
              <StyledInput placeholder="Repeat password" type="password" />
            </StyledForm>
          </StyledContainerr>
          <StyledContainerSignUp>
            <StyledWrapper>
              <Checkbox />
              <div>
                <p>Creating an account means you’re okay with our</p>
                <a href="#">Terms of Service,</a>
                <a href="#">Privacy Policy.</a>
              </div>
            </StyledWrapper>
            <StyledButton variant="cancel">Sign Up</StyledButton>
            <span>
              You already have an account?{" "}
              <StyledNavigate href="#">Log In</StyledNavigate>{" "}
            </span>
          </StyledContainerSignUp>
        </StyledWrapperForm>
        <StyledImage src={ImageSignUp} alt="ImageSignUp" />
      </ContainerBox>
    </Container>
  );
};
const Container = styled("div")(() => ({
  display: "flex",
  gap: "50px",
}));
const ContainerBox = styled("section")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "161px",
}));
const StyledWrapperForm = styled("div")(() => ({
  width: "321px",
  height: "529px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
}));
const StyledImage = styled("img")(() => ({
  width: "579px",
  height: "auto",
  objectFit: "cover",
}));
const StyledContainerSignUp = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "30px",
}));
const StyledNavigate = styled("a")(() => ({
  color: "#0079BF",
}));
const StyledGoogle = styled("div")(() => ({
  width: "321px",
  height: "58px",
  backgroundColor: "#F0F0F0",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 16px",
  "& div": {
    display: "flex",
    gap: "12px",
    "& span": {
      color: "#B2B2B2",
      fontSize: "14px",
    },
  },
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
const StyledAvatar = styled(Avatar)(() => ({
  width: "35px",
  height: "35px",
  color: "#fffff",
  backgroundColor: "#0079BF",
}));
const StyledText = styled("p")(() => ({
  color: "#000000",
  fontSize: "18px",
  fontWeight: "500",
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
const StyledWrapper = styled("section")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  "& p": {
    color: "#393939",
    fontSize: "12px",
  },
  "& a": {
    color: "#0079BF",
    fontSize: "12px",
  },
}));
const StyledButton = styled(Button)(() => ({
  width: "139px",
  height: "34px",
  backgroundColor: "#0079BF",
  color: "#FFFFFF",
}));
const StyledContainerr = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));
