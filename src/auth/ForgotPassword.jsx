import { styled } from "@mui/material";
import { Button } from "../components/UI/Button";
import { Input } from "../components/UI/input/Input";

export const ForgotPassword = () => {
  return (
    <FullScreenContainer>
      <Container>
        <p>Forgot password?</p>
        <span>
          A link will be sent to your Email, follow the link sent to the mail
        </span>
        <form>
          <StyledInput placeholder="example@gmail.com" />
          <StyledButton>Send</StyledButton>
        </form>
      </Container>
    </FullScreenContainer>
  );
};
const FullScreenContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100%",
}));
const Container = styled("div")(() => ({
  width: "460px",
  height: "194px",
  padding: "20px 28px 20px 20px",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  "& p": {
    fontSize: "20px",
    fontWeight: "500",
    color: "#222222",
  },
  "& span": {
    color: "#707070",
    fontSize: "14px",
  },
  "& form": {
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    gap: "18px",
  },
}));
const StyledButton = styled(Button)(() => ({
  width: "139px",
  height: "34px",
  backgroundColor: "#0079BF",
  color: "#FFFFFF",
}));
const StyledInput = styled(Input)(() => ({
  width: "412px",
  height: "32px",
}));
