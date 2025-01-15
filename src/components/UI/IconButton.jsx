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
      customStyles={style}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledIconButton>
  );
};
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
}));
