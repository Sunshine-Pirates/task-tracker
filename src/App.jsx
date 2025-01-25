import { useState } from "react";
import { Board } from "./components/UI/board/Board";

export const App = () => {
  const [showBoard, setShowBoard] = useState(false);

  const handleToggleBoard = () => {
    setShowBoard((prev) => !prev);
  };

  return (
    <div>
      <h1>Task tracker</h1>
      <button onClick={handleToggleBoard}>
        {showBoard ? "Hide Board" : "Show Board"}
      </button>

      {showBoard && <Board />}
    </div>
  );
};
