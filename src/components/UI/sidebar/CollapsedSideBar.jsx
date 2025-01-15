import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import { Icons } from "../../../assets";
import { Divider, styled } from "@mui/material";
import { workspaces } from "../../../utils/constants/workspaces";

export const CollapsedSideBar = ({ toggleDrawer, isCollapsed }) => {
  const [open] = useState(true);

  return (
    <StyledDrawer
      anchor="left"
      open={open}
      variant="persistent"
      isCollapsed={isCollapsed}
    >
      <StyledList>
        <StyledHeader>
          <StyledAvatar>L</StyledAvatar>

          <StyledIconButton onClick={toggleDrawer}>
            <Icons.Menu />
          </StyledIconButton>
        </StyledHeader>

        <StyledDivider />

        <StyledContainer>
          <Icons.VectorTwo />
        </StyledContainer>

        <StyledDivider />

        <StyledContainerIcon>
          <Icons.Group />
          <Icons.Members />
          <Icons.Settings />
        </StyledContainerIcon>

        <StyledDivider />
        <Icons.GraphicIcon />

        {workspaces.map((workspace) => (
          <div key={workspace.id} style={{ cursor: "pointer" }}>
            <Avatar sx={{ bgcolor: "#2CB107", width: 27, height: 27 }}>
              {workspace.icon}
            </Avatar>
          </div>
        ))}
      </StyledList>
      <StyledIcon>
        <Icons.Down />
      </StyledIcon>
    </StyledDrawer>
  );
};
const StyledIcon = styled("div")(() => ({
  textAlign: "center",
  paddingTop: "0.625rem",
}));
const StyledDrawer = styled(Drawer)(() => ({
  "& .MuiDrawer-paper": {
    width: "7.25rem",
    background:
      "linear-gradient(90deg, rgba(248,248,248,0.6) 0%, rgba(248,248,248,0.6) 100%)",
    borderRight: "none",
  },
}));

const StyledList = styled(List)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  paddingTop: "1.25rem",
}));
const StyledContainerIcon = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  cursor: "pointer",
}));

const StyledHeader = styled("div")(() => ({
  display: "flex",
  "& section": {
    display: "flex",
    justifyContent: "center",
    "& p": {
      fontSize: "1.125rem",
      fontWeight: "500",
    },
  },
}));

const StyledIconButton = styled("div")(() => ({
  width: "2.5rem",
  height: "2.5rem",
  background: "linear-gradient(to left, #F8F8F899 40%, transparent 40%)",
  borderRadius: "0rem 0.5rem 0.5rem 0rem",
  position: "fixed",
  top: "1rem",
  left: "5.75rem",
  zIndex: "10",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledContainer = styled("div")(() => ({
  width: "6.25rem",
  height: "2.3125rem",
  background:
    "linear-gradient(90deg, rgba(58,104,131,0.6) 0%, rgba(58,104,131,0.6) 100%)",
  color: "#FFFFFF",
  borderTopRightRadius: "1.5rem",
  borderBottomRightRadius: "1.5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledDivider = styled(Divider)(() => ({
  width: "2.25rem",
  margin: "0 auto",
}));
const StyledAvatar = styled(Avatar)(() => ({
  backgroundColor: "#0079BF",
  width: "1.6875rem",
  height: "1.6875rem",
  cursor: "pointer",
}));
