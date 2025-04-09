import { styled } from "@mui/system";
import { Button } from "../../components/UI/Button";
import { useState } from "react";
import { Board } from "../../components/UI/board/Board";
import { AllBoardCard } from "../../components/UI/board-card/AllBoardCard";
import { dataBoards } from "../../utils/constants/board";
import { MenuBoard } from "../../components/UI/board/MenuBoard";

export const AllBoards = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [boards, setBoards] = useState(dataBoards);
  const handleToggleFavorite = (id) => {
    setBoards((prevBoards) =>
      prevBoards.map((board) =>
        board.id === id ? { ...board, isFavorite: !board.isFavorite } : board
      )
    );
  };
  return (
    <MainTagStyled>
      <StyledTopBlock>
        <Heading3Styled>All boards</Heading3Styled>
        <MenuBoard />

        <ButtonStyled
          variant={"contained"}
          type={"button"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Create new board
        </ButtonStyled>
        {isOpen ? (
          <Board
            open={isOpen}
            onClose={() => setIsOpen(() => setIsOpen(false))}
            setBoards={setBoards}
            boards={boards}
          />
        ) : null}
      </StyledTopBlock>
      <StyledSecondBlock>
        {boards.map((board) => (
          <AllBoardCard
            {...board}
            key={board.id}
            onChange={() => handleToggleFavorite(board.id)}
          />
        ))}
      </StyledSecondBlock>
    </MainTagStyled>
  );
};
const MainTagStyled = styled("section")(() => ({
  width: "100%",
  height: "100%",
  padding: "25px 22px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
}));
const StyledTopBlock = styled("div")(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingRight: "12px",
}));

const StyledSecondBlock = styled("div")(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
}));
const ButtonStyled = styled(Button)(() => ({
  width: "154px",
  height: "34px",
}));
const Heading3Styled = styled("h3")(() => ({
  fontWeight: "500",
  fontSize: "20px",
}));
