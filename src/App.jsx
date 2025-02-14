import { Board } from "./components/UI/board/Board";
import { MenuBoard } from "./components/UI/board/MenuBoard";
// import { AppRoutes } from "./routes/AppRoutes";

export const App = () => {
  return (
    <div>
      {/* <AppRoutes /> */}
      <MenuBoard />
      <Board />
    </div>
  );
};
