import { Avatar, styled } from "@mui/material";
import { Icons } from "../assets";
import { Input } from "../components/UI/input/Input";
import { Button } from "../components/UI/Button";
import ImageSignUp from "../assets/images/SigIn.png";

export const SignIn = () => {
  return (
    <Container>
      <StyledContainerLogo>
        <Icons.LogoTaskTracker />
        <p>Task Tracker</p>
      </StyledContainerLogo>
      <ContainerBox>
        <StyledWrapperForm>
          <StyledText>Sign In</StyledText>
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
              <StyledInput placeholder="example@gmail.com" />
              <StyledInput placeholder="Password" type="password" />
            </StyledForm>
            <StyledTitle>Forgot password?</StyledTitle>
          </StyledContainerr>
          <StyledContainerSignUp>
            <StyledButton variant="cancel">Log In</StyledButton>
            <span>
              Not a member?
              <StyledNavigate href="#">Sign up now</StyledNavigate>{" "}
            </span>
          </StyledContainerSignUp>
        </StyledWrapperForm>
        <StyledImage src={ImageSignUp} alt="ImageSignUp" />
      </ContainerBox>
    </Container>
  );
};
const StyledTitle = styled("p")(() => ({
  textAlign: "end",
  fontSize: "14px",
  color: "#393939",
  cursor: "pointer",
}));
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
  gap: "30px",
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
