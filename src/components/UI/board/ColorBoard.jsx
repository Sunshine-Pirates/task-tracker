import { IconButton, styled } from "@mui/material";
import { BoardModal } from "./BoardModal";
import { Icons } from "../../../assets";
import { colors } from "../../../utils/constants/general";

export const ColorBoard = ({
  openColors,
  handleCloseModals,
  selectedBackground,
  handleSelectBackground,
}) => {
  if (!openColors) return null;

  return (
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
  );
};

export const StyledColorBlock = styled("div")(() => ({
  h1: {
    fontSize: "16px",
    fontWeight: "400",
  },
}));

export const IconBlock = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: "16px",

  h1: {
    fontSize: "16px",
    fontWeight: "400",
  },
}));

export const ColorsModal = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
}));

export const ColorBlock = styled("div")(({ bg }) => ({
  position: "relative",
  backgroundColor: bg,
  width: "79px",
  height: "40px",
  borderRadius: "8px",
  cursor: "pointer",
}));

export const CheckMark = styled("div")(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 2,
}));
