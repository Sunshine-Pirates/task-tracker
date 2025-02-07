import { IconButton as MuiIconButton, styled } from "@mui/material";
export const IconButton = ({
  children,
  onClick,
  style,
  disabled,
  ...props
}) => {
  return (
    <StyledIconButton
      onClick={onClick}
      customstyles={style}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledIconButton>
  );
};
const StyledIconButton = styled(MuiIconButton)(({ customstyles }) => ({
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
  cursor: customstyles?.disabled ? "not-allowed" : "pointer",
  backgroundColor: customstyles?.backgroundColor,
  color: customstyles?.color,
  "&:hover": {
    backgroundColor: customstyles?.backgroundColor,
    color: customstyles?.color,
  },
  "&:active": {
    backgroundColor: customstyles?.backgroundColor,
    color: customstyles?.color,
  },
}));
