import { Box, styled, Typography } from "@mui/material";
import { Button } from "../../components/UI/Button";
import { Link } from "react-router-dom";
import { PATHS } from "../../utils/constants/constants";
import { useSelector } from "react-redux";

export const NotFound = () => {
  const { userRole } = useSelector((state) => state.auth);

  return (
    <StyledBox>
      <Typography
        variant="h1"
        sx={{ fontSize: "68px", fontWeight: "bold", color: "#fff" }}
      >
        404
      </Typography>
      <Typography variant="h5" sx={{ color: "#eee" }}>
        The page you are looking for does not exist.
      </Typography>
      <StyledButton variant="">
        <Links
          to={
            userRole === "USER"
              ? PATHS.USER.ROOT
              : userRole === "ADMIN"
                ? PATHS.ADMIN.ROOT
                : PATHS.GUEST
          }
        >
          Go to Home
        </Links>
      </StyledButton>
    </StyledBox>
  );
};

const StyledBox = styled(Box)(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  background: "linear-gradient(135deg, #2c3e50, #4ca1af)",
}));

const StyledButton = styled(Button)(() => ({
  width: "140px",
  backgroundColor: "#35a0de",
  color: "#FFFFFF",
  fontSize: "18px",
}));

const Links = styled(Link)(() => ({
  textDecoration: "none",
  color: "#FFFFFF",
}));
