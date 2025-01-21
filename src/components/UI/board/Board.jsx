import { styled } from "@mui/material";
import { Input } from "../input/Input";
import Foto1 from "../../../assets/images/Rectangle 54.png";
import Foto2 from "../../../assets/images/Rectangle 55.png";
import Foto3 from "../../../assets/images/Rectangle 56.png";
import { useState, useEffect } from "react";
import { boardImage, colors } from "../../../utils/constants/general";

export const Board = () => {
  const [openImage, setOpenImage] = useState(false);
  const [selectedBackground, setSelectedBackground] = useState("");

  // Устанавливаем фон для body
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
    setOpenImage((prev) => !prev);
  };

  const handleSelectBackground = (background) => {
    setSelectedBackground(background);
  };

  return (
    <MainBlock>
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
              {[Foto1, Foto2, Foto3].map((image, index) => (
                <ImageWrapper
                  key={index}
                  isSelected={selectedBackground === image}
                  onClick={() => handleSelectBackground(image)}
                >
                  <img src={image} alt="" />
                </ImageWrapper>
              ))}
            </ImageBlock>
          </Block>

          <Block>
            <TextBlock>
              <p>Colors</p>
              <StyleP>See more</StyleP>
            </TextBlock>
            <ColorsBlock>
              {colors.map((item, index) => (
                <ColorWrapper
                  key={index}
                  bg={item.bg}
                  isSelected={selectedBackground === item.bg}
                  onClick={() => handleSelectBackground(item.bg)}
                />
              ))}
            </ColorsBlock>
          </Block>
        </BgStyle>
      </MainContainer>

      {openImage && (
        <ContainerModal>
          <h1>Photo</h1>
          <ImageModal>
            {boardImage.map((item, index) => (
              <ImageWrapper
                key={index}
                isSelected={selectedBackground === item.image}
                onClick={() => handleSelectBackground(item.image)}
              >
                <img src={item.image} alt="" />
              </ImageWrapper>
            ))}
          </ImageModal>
        </ContainerModal>
      )}
    </MainBlock>
  );
};

const MainContainer = styled("div")(() => ({
  width: "477px",
  height: "363px",
  backgroundColor: "white",
  borderRadius: "10px",
  padding: "16px 20px",

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

const ContainerModal = styled("div")(() => ({
  width: "293px",
  height: "480px",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "10px",

  h1: {
    fontSize: "16px",
    fontWeight: "400",
    padding: "16px",
  },
}));

const MainBlock = styled("div")(() => ({
  display: "flex",
  gap: "50px",
}));

const ImageModal = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "8px",

  img: {
    width: "123px",
  },
}));

const ImageWrapper = styled("div")(() => ({
  position: "relative",
  cursor: "pointer",
}));

const ColorWrapper = styled("div")(({ bg }) => ({
  backgroundColor: bg,
  width: "59px",
  height: "31px",
  borderRadius: "8px",
  cursor: "pointer",
  position: "relative",
}));
