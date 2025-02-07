import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const AdminLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
