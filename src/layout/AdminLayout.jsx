import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { SideBar } from "../components/UI/sidebar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../store/sidebar/sideBarSlice";
import { styled } from "@mui/material";

export const AdminLayout = () => {
  const dispatch = useDispatch();
  const isCollapsed = useSelector((state) => state.sidebar.isCollapsed);

  return (
    <>
      <Header />
      <SideBar
        isCollapsed={isCollapsed}
        toggleSidebar={() => dispatch(toggleSidebar())}
      />
      <StyledMain isCollapsed={isCollapsed}>
        <Outlet />
      </StyledMain>
    </>
  );
};
const StyledMain = styled("main")(({ isCollapsed }) => ({
  marginLeft: isCollapsed ? "136px" : "270px",
  transition: "margin-left 0.3s ease",
}));
