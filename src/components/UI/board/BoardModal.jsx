import { keyframes, styled } from "@mui/material";

export const BoardModal = ({ children, onClick }) => {
  return <ContainerModal onClick={onClick}>{children}</ContainerModal>;
};

const ContainerModal = styled("div")(() => ({
  width: "293px",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "10px",
  animation: `${slideInFromRight} 1s ease-out`,
  overflowY: "auto",
  maxHeight: "480px",
  padding: "16px",
  boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",

  "::-webkit-scrollbar": {
    width: "4px",
  },
  "::-webkit-scrollbar-thumb": {
    background: "#b0b0b0",
    borderRadius: "4px",
  },
  "::-webkit-scrollbar-track": {
    borderRadius: "4px",
    scrollbarGutter: "stable",
  },
}));

const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%); 
    opacity: 0;
  }
  100% {
    transform: translateX(0); 
    opacity: 1;
  }
`;
