import { Button as MuiButton, styled } from "@mui/material";
export const Button = ({
  children,
  disabled,
  variant,
  style,
  onClick,
  ...props
}) => {
  return (
    <StyledMuiButton
      onClick={onClick}
      variant={variant}
      disabled={disabled}
      customStyles={style}
      {...props}
    >
      {children}
    </StyledMuiButton>
  );
};

const StyledMuiButton = styled(MuiButton)(({
  customStyles,
  disabled,
  variant,
}) => {
  const backgroundColor =
    customStyles?.backgroundColor ||
    (disabled
      ? "#F0F0F0"
      : variant === "cancel"
        ? "#F0F0F0"
        : variant === "danger"
          ? "#D91212"
          : variant === "contained"
            ? "#0079BF"
            : "transparent");

  const textColor =
    customStyles?.color ||
    (variant === "cancel"
      ? "#919191"
      : variant === "danger"
        ? "#FFFFFF"
        : backgroundColor === "#0079BF" ||
            backgroundColor === "#005688" ||
            backgroundColor === "#57AEE0"
          ? "#FFFFFF"
          : backgroundColor === "#F0F0F0"
            ? "#919191"
            : "#000000");

  const isStaticBackground =
    variant === "cancel" ||
    variant === "danger" ||
    backgroundColor === "#F0F0F0";

  const hoverBackgroundColor =
    variant === "cancel"
      ? "#F0F0F0"
      : variant === "danger"
        ? "#B10F0F"
        : backgroundColor === "#0079BF"
          ? "#005688"
          : isStaticBackground
            ? backgroundColor
            : "transparent";

  const activeBackgroundColor =
    variant === "cancel"
      ? "#F0F0F0"
      : variant === "danger"
        ? "#900C0C"
        : backgroundColor === "#0079BF"
          ? "#57AEE0"
          : isStaticBackground
            ? backgroundColor
            : "transparent";

  return {
    width: "100%",
    padding: "8px 16px",
    borderRadius: "24px",
    cursor: disabled ? "not-allowed" : "pointer",
    borderWidth: 0,
    border: "none",
    textTransform: "none",
    opacity: disabled ? 0.6 : 1,
    backgroundColor: backgroundColor,
    color: textColor,
    "&:hover": {
      backgroundColor: disabled ? backgroundColor : hoverBackgroundColor,
      color: disabled ? textColor : textColor,
    },
    "&:active": {
      backgroundColor: disabled ? backgroundColor : activeBackgroundColor,
      color: disabled ? textColor : textColor,
    },
  };
});
