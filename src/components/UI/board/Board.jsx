import { styled, keyframes, IconButton } from "@mui/material";
import { Input } from "../input/Input";
import { useState, useEffect } from "react";
import { boardImage, colors } from "../../../utils/constants/general";
import { Button } from "../Button";
import { Icons } from "../../../assets";
import { BoardModal } from "./BoardModal";

export const Board = ({ open, onClose }) => {
  const [openImage, setOpenImage] = useState(false);
  const [openColors, setOpenColors] = useState(false);
  const [selectedBackground, setSelectedBackground] = useState("");

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

  return (
    <MainBlock open={open} onClose={onClose}>
      {!openImage && !openColors && (
        <MainContainer>
          <h6>Create new board</h6>
          <BgStyle>
            <Input placeholder="Board title*" />
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
              <StyledBtn variant="cancel">Cancel</StyledBtn>
              <StyledBtn variant="contained">Create board</StyledBtn>
            </ButtonBlock>
          </BgStyle>
        </MainContainer>
      )}

      {openImage && (
        <BoardModal>
          <div>
            <IconBlock>
              <IconButton onClick={handleCloseModals}>
                <Icons.Cancel />
              </IconButton>
              <h1>Photo</h1>
              <h1>{}</h1>
            </IconBlock>
            <ImageModal onClick={(e) => e.stopPropagation()}>
              {boardImage.map((item, index) => (
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
            </ImageModal>
          </div>
        </BoardModal>
      )}

      {openColors && (
        <BoardModal>
          <StyledColorBlock>
            <IconBlock>
              <IconButton onClick={handleCloseModals}>
                <Icons.Cancel />
              </IconButton>
              <h1>Colors</h1>
              <h1>{}</h1>
            </IconBlock>
            <ColorsModal onClick={(e) => e.stopPropagation()}>
              {colors.map((item, index) => (
                <ColorBlock
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
                </ColorBlock>
              ))}
            </ColorsModal>
          </StyledColorBlock>
        </BoardModal>
      )}
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

const ImageModal = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "8px",

  img: {
    width: "123px",
    borderRadius: "8px",
  },
}));

const ImageWrapper = styled("div")(() => ({
  position: "relative",
  cursor: "pointer",
  img: {
    width: "135px",
    height: "62px",
  },
}));

const ColorWrapper = styled("div")(({ bg }) => ({
  position: "relative",
  backgroundColor: bg,
  width: "59px",
  height: "31px",
  borderRadius: "8px",
  cursor: "pointer",
}));

const ColorsModal = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
}));

const ColorBlock = styled("div")(({ bg }) => ({
  position: "relative",
  backgroundColor: bg,
  width: "79px",
  height: "40px",
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

const CheckMark = styled("div")(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 2,
}));

const StyledColorBlock = styled("div")(() => ({
  h1: {
    fontSize: "16px",
    fontWeight: "400",
  },
}));

const IconBlock = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: "16px",

  h1: {
    fontSize: "16px",
    fontWeight: "400",
  },
}));
