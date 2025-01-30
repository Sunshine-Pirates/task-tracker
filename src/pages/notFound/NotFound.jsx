import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import { Button } from "../../components/UI/Button";

export const NotFound = () => {
  return (
    <StyledContainer>
      <h1>404 Not Found</h1>
      <StyledButton>
        <StyledLink to="/">Go to Home Page</StyledLink>
      </StyledButton>
    </StyledContainer>
  );
};
const StyledButton = styled(Button)(() => ({
  width: "300px",
}));
const StyledLink = styled(Link)(() => ({
  color: "rgba(4, 135, 65, 1)",
  textDecoration: "none",

  "&:hover": {
    color: "#ffff",
  },
}));
const StyledContainer = styled("div")(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "30px",
  background: "#6c666665",
  "& h1": {
    color: "#048741",
  },
}));
