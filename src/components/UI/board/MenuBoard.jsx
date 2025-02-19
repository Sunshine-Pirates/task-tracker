import { keyframes, styled } from "@mui/material";
import { Icons } from "../../../assets";
import Foto16 from "../../../assets/images/mountain16.avif";
import { BoardModal } from "./BoardModal";
import { useState } from "react";
import { MainBlock } from "./Board";

export const MenuBoard = () => {
  const [isdOpenClose, setIsOpenClose] = useState(false);

  const handleOpenBoard = () => {
    setIsOpenClose(true);
  };

  const handleCloseBoard = () => {
    setIsOpenClose(false);
  };

  return (
    <MainBlock>
      {!isdOpenClose && (
        <MainContainer>
          <MenuBlock>
            <h1>{""}</h1>
            <h6>Menu</h6>
            <Icons.Cancel />
          </MenuBlock>
          <TextBlock>
            <ImageBlock onClick={handleOpenBoard}>
              <p>Change the background</p>
              <img src={Foto16} alt="" />
            </ImageBlock>
            <p>In archive</p>
            <p>Delete this board</p>
          </TextBlock>
        </MainContainer>
      )}

      {isdOpenClose && (
        <BoardModal>
          <ImageContent>
            <IconWrapper>
              <Icons.Left />
              <p>Change the background</p>
              <Icons.Cancel onClick={handleCloseBoard} />
            </IconWrapper>
            <>
              <img src={Foto16} alt="" />
            </>
          </ImageContent>
        </BoardModal>
      )}
    </MainBlock>
  );
};

const MainContainer = styled("div")(() => ({
  width: "367px",
  display: "flex",
  flexDirection: "column",
  animation: `${slideInFromRight} 1s ease-out`,
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  borderRadius: "10px",
  backgroundColor: "#fff",
  p: {
    fontSize: "16px",
    fontWeight: "400",
    padding: "11px 15px",
  },

  "& p:hover": {
    backgroundColor: "#F2F2F2",
  },
}));

const MenuBlock = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 20px",
  paddingBottom: "10px",

  h6: {
    fontSize: "16px",
    fontWeight: "400",
  },
}));

const TextBlock = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

const ImageBlock = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "80px",
  img: {
    width: "59px",
    height: "26px",
    borderRadius: "6px",
  },

  ":hover": {
    backgroundColor: "#F2F2F2",
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

const IconWrapper = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const ImageContent = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
}));
