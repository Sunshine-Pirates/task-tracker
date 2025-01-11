import {
  Button as MuiButton,
  IconButton as MuiIconButton,
  styled,
} from "@mui/material";

const Button = ({
  children,
  disabled,
  variant,
  style,
  onClick,
  icon,
  iconStyle,
  textStyle,
  iconPosition = "before",
  ...props
}) => {
  if (icon) {
    return (
      <StyledIconButton
        onClick={onClick}
        customStyles={style}
        disabled={disabled}
        {...props}
      >
        {iconPosition === "before" && icon && (
          <span className="icon-wrapper" style={iconStyle || {}}>
            {icon}
          </span>
        )}
        {children && (
          <span className="text-wrapper" style={textStyle || {}}>
            {children}
          </span>
        )}
        {iconPosition === "after" && icon && (
          <span className="icon-wrapper" style={iconStyle || {}}>
            {icon}
          </span>
        )}
      </StyledIconButton>
    );
  }
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
      : variant === "contained"
        ? "#0079BF"
        : "transparent");

  const textColor =
    backgroundColor === "#0079BF" ||
    backgroundColor === "#005688" ||
    backgroundColor === "#57AEE0" ||
    backgroundColor === "#D91212"
      ? "#FFFFFF"
      : backgroundColor === "#F0F0F0"
        ? "#919191"
        : "#000000";

  const isStaticBackground =
    backgroundColor === "#D91212" || backgroundColor === "#F0F0F0";

  const hoverBackgroundColor =
    backgroundColor === "#0079BF"
      ? "#005688"
      : isStaticBackground
        ? backgroundColor
        : "transparent";

  const activeBackgroundColor =
    backgroundColor === "#0079BF"
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
const StyledIconButton = styled(MuiIconButton)(({ customStyles }) => ({
  width: "auto",
  padding: "6px 16px",
  display: "flex",
  alignItems: "center",
  gap: "6px",
  borderRadius: "8px",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "17.6px",
  letterSpacing: "2%",
  cursor: customStyles?.disabled ? "not-allowed" : "pointer",
  backgroundColor: customStyles?.backgroundColor,
  color: customStyles?.color,
  "&:hover": {
    backgroundColor: customStyles?.backgroundColor,
    color: customStyles?.color,
  },
  "&:active": {
    backgroundColor: customStyles?.backgroundColor,
    color: customStyles?.color,
  },
  ".icon-wrapper": {
    width: "16px",
    height: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: "0",
  },
  ".text-wrapper": {
    display: "inline-block",
  },
}));
export default Button;
