import { SideBar } from "./components/UI/sidebar/SideBar";

export const App = () => {
  return (
    <div style={{ background: "#E2E2E2", height: "100vh" }}>
      <h1>Task Tracker</h1>
      <SideBar />
    </div>
  );
};
