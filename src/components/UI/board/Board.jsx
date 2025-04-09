import { styled, keyframes } from "@mui/material";
import { Input } from "../input/Input";
import { useState, useEffect } from "react";
import { boardImage, colors } from "../../../utils/constants/general";
import { Button } from "../Button";
import { Icons } from "../../../assets";
import { CheckMark, ColorBoard } from "./ColorBoard";
import { ImageBoard } from "./ImageBoard";

export const Board = ({ open, onClose, setBoards }) => {
  const [openImage, setOpenImage] = useState(false);
  const [openColors, setOpenColors] = useState(false);
  const [selectedBackground, setSelectedBackground] = useState("");
  const [createTitle, setCreateTitle] = useState("");

  useEffect(() => {
    if (selectedBackground) {
      document.body.style.background = selectedBackground.includes("#")
        ? selectedBackground
        : `url(${selectedBackground}) no-repeat center center / cover`;
      document.body.style.height = "100vh";
      document.body.style.margin = "0";
    }
  }, [selectedBackground]);

  const handleOpenImage = () => {
    setOpenImage(true);
  };

  const handleOpenColors = () => {
    setOpenColors(true);
  };

  const handleCloseModals = () => {
    setOpenImage(false);
    setOpenColors(false);
  };

  const handleSelectBackground = (background) => {
    setSelectedBackground(background);
  };

  const handleCreateNewBoardCard = () => {
    if (!createTitle || !selectedBackground) return;
    const newBoard = {
      id: Date.now().toString(),
      title: createTitle,
      background: selectedBackground,
      isFavorite: false,
    };

    setBoards((boards) => [...boards, newBoard]);
    setCreateTitle("");
  };
  const handleCreateTitle = (event) => {
    setCreateTitle(event.target.value);
  };
  return (
    <MainBlock open={open} onClose={onClose}>
      {!openImage && !openColors && (
        <MainContainer>
          <h6>Create new board</h6>
          <BgStyle>
            <Input
              placeholder="Board title*"
              onChange={handleCreateTitle}
              value={createTitle}
            />
            <p>Add background</p>
            <Block>
              <TextBlock>
                <p>Photo</p>
                <StyleP onClick={handleOpenImage}>See more</StyleP>
              </TextBlock>

              <ImageBlock>
                {boardImage.slice(0, 3).map((item, index) => (
                  <ImageWrapper
                    key={index}
                    isSelected={selectedBackground === item.image}
                    onClick={() => handleSelectBackground(item.image)}
                  >
                    <img src={item.image} alt="" />
                    {selectedBackground === item.image && (
                      <CheckMark>
                        <Icons.CheckMark />
                      </CheckMark>
                    )}
                  </ImageWrapper>
                ))}
              </ImageBlock>
            </Block>

            <Block>
              <TextBlock>
                <p>Colors</p>
                <StyleP onClick={handleOpenColors}>See more</StyleP>
              </TextBlock>

              <ColorsBlock>
                {colors.slice(0, 6).map((item, index) => (
                  <ColorWrapper
                    key={index}
                    bg={item.bg}
                    isSelected={selectedBackground === item.bg}
                    onClick={() => handleSelectBackground(item.bg)}
                  >
                    {selectedBackground === item.bg && (
                      <CheckMark>
                        <Icons.CheckMark />
                      </CheckMark>
                    )}
                  </ColorWrapper>
                ))}
              </ColorsBlock>
            </Block>

            <ButtonBlock>
              <StyledBtn variant="cancel" onClick={onClose}>
                Cancel
              </StyledBtn>
              <StyledBtn variant="contained" onClick={handleCreateNewBoardCard}>
                Create board
              </StyledBtn>
            </ButtonBlock>
          </BgStyle>
        </MainContainer>
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

const MainContainer = styled("div")(() => ({
  width: "477px",
  height: "373px",
  backgroundColor: "white",
  borderRadius: "10px",
  padding: "16px 20px",
  animation: `${slideInFromRight} 1s ease-out`,
  boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",

  h6: {
    fontSize: "16px",
    fontWeight: "400",
    display: "flex",
    justifyContent: "center",
    marginBottom: "16px",
  },
}));

const BgStyle = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  color: "#919191",
}));

const TextBlock = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  fontSize: "14px",
}));

const ImageBlock = styled("div")(() => ({
  display: "flex",
  gap: "16px",

  img: {
    borderRadius: "9px",
  },
}));

const Block = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
}));

const ColorsBlock = styled("div")(() => ({
  display: "flex",
  gap: "16px",
}));

const StyleP = styled("p")(() => ({
  textDecoration: "underline",
  cursor: "pointer",
}));

export const MainBlock = styled("div")(() => ({
  display: "flex",
  gap: "50px",
  position: "fixed",
  top: "20px",
  right: "20px",
  zIndex: 1000,
}));

const ColorWrapper = styled("div")(({ bg }) => ({
  position: "relative",
  backgroundColor: bg,
  width: "59px",
  height: "31px",
  borderRadius: "8px",
  cursor: "pointer",
}));

const ButtonBlock = styled("div")(() => ({
  display: "flex",
  justifyContent: "end",
  gap: "16px",
}));

const StyledBtn = styled(Button)(() => ({
  width: "auto",
}));

const ImageWrapper = styled("div")(() => ({
  position: "relative",
  cursor: "pointer",
  img: {
    width: "135px",
    height: "62px",
  },
}));
