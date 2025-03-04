import { styled } from "@mui/system";
import { Button } from "../../components/UI/Button";
import { useState } from "react";
import { Board } from "../../components/UI/board/Board";
import { AllBoardCard } from "../../components/UI/board-card/AllBoardCard";
import { dataBoards } from "../../utils/constants/board";

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
        <h3 style={{ fontWeight: "500", fontSize: "20px" }}>All boards</h3>

        <Button
          variant={"contained"}
          type={"button"}
          style={{ width: "154px", height: "34px" }}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Create new board
        </Button>
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
