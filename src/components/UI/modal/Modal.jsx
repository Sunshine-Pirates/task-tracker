import { Box, Modal as MuiModal, Fade, styled } from "@mui/material";
import { Icons } from "../../../assets";

export const Modal = ({ children, isOpen, onClose, icon, ...props }) => {
  return (
    <StyledModal open={isOpen} onClose={onClose} {...props}>
      <Fade in={isOpen}>
        <StyledBox>
          <Header>
            {!icon && (
              <CloseIconWrapper onClick={onClose}>
                <Icons.Cancel />
              </CloseIconWrapper>
            )}
          </Header>
          <Content>{children}</Content>
        </StyledBox>
      </Fade>
    </StyledModal>
  );
};

const StyledModal = styled(MuiModal)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledBox = styled(Box)(() => ({
  position: "relative",
  backgroundColor: "#ffff",
  borderRadius: "16px",
  outline: "none",
  padding: "16px 20px",
}));

const Header = styled("section")(() => ({
  position: "absolute",
  top: "16px",
  right: "20px",
}));

const CloseIconWrapper = styled("div")(() => ({
  cursor: "pointer",
}));

const Content = styled("div")(() => ({
  padding: "10px",
}));
