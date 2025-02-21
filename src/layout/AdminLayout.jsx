import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { SideBar } from "../components/UI/sidebar/SideBar";

export const AdminLayout = () => {
  return (
    <>
      <Header />
      <SideBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
