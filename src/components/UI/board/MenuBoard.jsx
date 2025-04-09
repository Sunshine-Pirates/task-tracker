import { keyframes, styled } from "@mui/material";
import { Icons } from "../../../assets";
import Foto16 from "../../../assets/images/mountain16.avif";
import { BoardModal } from "./BoardModal";
import { MainBlock } from "./Board";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { boardImage, colors } from "../../../utils/constants/general";
import { ColorBoard } from "./ColorBoard";
import { ImageBoard } from "./ImageBoard";
import { Modal } from "../modal/Modal";
import { Button } from "../Button";

export const MenuBoard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [openImage, setOpenImage] = useState(false);
  const [openColors, setOpenColors] = useState(false);
  const [openArchive, setOpenArchiv] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedBackground, setSelectedBackground] = useState("");

  const isModalOpen = searchParams.get("changeBg") === "true";
  const isImageOpen = searchParams.get("image") === "true";
  const isColorsOpen = searchParams.get("colors") === "true";
  const inArchive = searchParams.get("archive") === "true";
  const inDelete = searchParams.get("delete") === "true";

  useEffect(() => {
    setIsModalVisible(isModalOpen);
    setOpenImage(isImageOpen);
    setOpenColors(isColorsOpen);
    setOpenArchiv(inArchive);
    setOpenDelete(inDelete);
  }, [isModalOpen, isImageOpen, isColorsOpen, inArchive, inDelete]);

  useEffect(() => {
    if (selectedBackground) {
      document.body.style.background = selectedBackground.includes("#")
        ? selectedBackground
        : `url(${selectedBackground}) no-repeat center center / cover`;
      document.body.style.height = "100vh";
      document.body.style.margin = "0";
    }
  }, [selectedBackground]);

  const handleOpenBoard = () => {
    setSearchParams({ changeBg: "true" });
    setIsModalVisible(true);
  };

  const handleCloseBoard = () => {
    setSearchParams({});
    setIsModalVisible(false);
  };

  const handleBack = () => {
    setIsModalVisible(false);
    setSearchParams({ changeBg: "true" });
  };

  const handleOpenImage = () => {
    setSearchParams({ changeBg: "true", image: "true" });
    setOpenImage(true);
    setOpenColors(false);
  };

  const handleOpenColors = () => {
    setSearchParams({ changeBg: "true", colors: "true" });
    setOpenColors(true);
    setOpenImage(false);
  };

  const handleCloseModals = () => {
    setSearchParams({ changeBg: "true" });
    setOpenImage(false);
    setOpenColors(false);
  };

  const handleSelectBackground = (background) => {
    setSelectedBackground(background);
  };

  const openArchiveHandler = () => {
    setSearchParams({ archive: "true" });
    setOpenArchiv(true);
  };

  const openDeleteHandler = () => {
    setSearchParams({ delete: "true" });
    setOpenDelete(true);
  };

  return (
    <MainBlock>
      {!isModalVisible && (
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
            <p onClick={openArchiveHandler}>In archive</p>
            <p onClick={openDeleteHandler}>Delete this board</p>
          </TextBlock>
        </MainContainer>
      )}

      {openArchive && (
        <Modal isOpen={openArchive} onClose={() => setOpenArchiv(false)}>
          <ModalStyled>
            <p>Вы точно хотите архивировать?</p>
            <ButtonStyled>
              <Button variant="cancel">Cancel</Button>
              <Button variant="danger">Archive</Button>
            </ButtonStyled>
          </ModalStyled>
        </Modal>
      )}

      {openDelete && (
        <Modal isOpen={openDelete} onClose={() => setOpenDelete(false)}>
          <ModalStyled>
            <p>Вы точно хотите удалить?</p>
            <ButtonStyled>
              <Button variant="cancel">Cancel</Button>
              <Button variant="danger">Delete</Button>
            </ButtonStyled>
          </ModalStyled>
        </Modal>
      )}

      {isModalVisible &&
        searchParams.get("changeBg") === "true" &&
        !isImageOpen &&
        !isColorsOpen && (
          <BoardModal width={{ width: "367px" }}>
            <ImageContent>
              <IconWrapper>
                <Icons.Left onClick={handleBack} />
                <p>Change the background</p>
                <Icons.Cancel onClick={handleCloseBoard} />
              </IconWrapper>
              <BgChangeStyled>
                <img src={Foto16} alt="" onClick={handleOpenImage} />
                <Block onClick={handleOpenColors}>
                  {colors.slice(0, 8).map((item, index) => (
                    <ColorWrapper key={index} bg={item.bg}></ColorWrapper>
                  ))}
                </Block>
              </BgChangeStyled>
            </ImageContent>
          </BoardModal>
        )}
      <ColorBoard
        openColors={openColors}
        handleCloseModals={handleCloseModals}
        selectedBackground={selectedBackground}
        handleSelectBackground={handleSelectBackground}
      />
      <ImageBoard
        openImage={openImage}
        handleCloseModals={handleCloseModals}
        selectedBackground={selectedBackground}
        handleSelectBackground={handleSelectBackground}
        boardImage={boardImage}
      />
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
    borderRadius: "10px",
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
  cursor: "pointer",
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
  gap: "18px",
  width: "100%",
}));

const ColorWrapper = styled("div")(({ bg }) => ({
  width: "20px",
  height: "80px",
  backgroundColor: bg,
}));

const Block = styled("div")(() => ({
  display: "flex",
  borderRadius: "8px",
  width: "160px",
  height: "80px",
  overflow: "hidden",
  cursor: "pointer",
}));

const BgChangeStyled = styled("div")(() => ({
  display: "flex",
  gap: "8px",
  "& img": {
    width: "160px",
    height: "80px",
    borderRadius: "8px",
    cursor: "pointer",
  },
}));

const ButtonStyled = styled("div")(() => ({
  display: "flex",
  gap: "16px",
}));

const ModalStyled = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  padding: "0 10px 0 10px",
}));
