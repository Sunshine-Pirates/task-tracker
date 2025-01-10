import { Button as MuiButton, styled } from "@mui/material";
const Button = ({ children, disabled, variant, style, onClick, ...props }) => {
  return (
    <StyledMuiButton
      onClick={onClick}
      variant={variant}
      style={style}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledMuiButton>
  );
};

const StyledMuiButton = styled(MuiButton)(({ theme, variant, disabled }) => ({
  padding: "8px 16px",
  borderRadius: "24px",
  cursor: disabled ? "not-allowed" : "pointer",
  borderWidth: 0,
  border: "none",
  textTransform: "none",
  opacity: disabled ? 0.6 : 1,
  backgroundColor: disabled
    ? "#F0F0F0"
    : variant === "contained"
      ? "#0079BF"
      : "transparent",
  color: disabled
    ? "#919191"
    : variant === "contained"
      ? "#FFFFFF"
      : theme.palette.primary.main,
  "&:hover": {
    backgroundColor: disabled
      ? "transparent"
      : variant === "contained"
        ? "#005688"
        : "transparent",
    color: variant === "contained" ? "#FFFFFF" : theme.palette.primary.dark,
  },
  "&:active": {
    backgroundColor: disabled
      ? "transparent"
      : variant === "contained"
        ? "#57AEE0"
        : "transparent",
    color: variant === "contained" ? "#FFFFFF" : theme.palette.primary.dark,
  },
}));

export default Button;
