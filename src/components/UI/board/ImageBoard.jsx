import { IconButton, styled } from "@mui/material";
import { BoardModal } from "./BoardModal";
import { CheckMark, IconBlock } from "./ColorBoard";
import { Icons } from "../../../assets";

export const ImageBoard = ({
  openImage,
  handleCloseModals,
  selectedBackground,
  handleSelectBackground,
  boardImage,
}) => {
  if (!openImage) return null;

  return (
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
  );
};

export const ImageModal = styled("div")(() => ({
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
    width: "123px",
    height: "62px",
  },
}));
