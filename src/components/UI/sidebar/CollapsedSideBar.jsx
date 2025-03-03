import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import { Icons } from "../../../assets";
import { Divider, IconButton, styled } from "@mui/material";
import { workspaces } from "../../../utils/constants/workspaces";

export const CollapsedSideBar = ({
  toggleDrawer,
  isCollapsed,
  title,
  isExpanded,
  handleShowToggle,
  visibleWorkspaces,
}) => {
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
          <IconButton>
            <StyledAvatar>{title.charAt(0)}</StyledAvatar>
          </IconButton>

          <StyledIconButton onClick={toggleDrawer}>
            <Icons.Menu />
          </StyledIconButton>
        </StyledHeader>

        <StyledDivider />

        <StyledContainer>
          <IconButton>
            <Icons.VectorTwo />
          </IconButton>
        </StyledContainer>

        <StyledDivider />

        <StyledContainerIcon>
          <Icons1>
            <Icons.Group />
          </Icons1>
          <Icons1>
            <Icons.Members />
          </Icons1>
          <Icons1>
            <Icons.Settings />
          </Icons1>
        </StyledContainerIcon>
        <StyledDivider />
        <StyledIconsWrapper>
          <Icons1>
            <Icons.GraphicIcon />
          </Icons1>

          {visibleWorkspaces.map((workspace) => (
            <div key={workspace.id} style={{ cursor: "pointer" }}>
              <Icons1>
                <Avatar sx={{ bgcolor: "#2CB107", width: 27, height: 27 }}>
                  {workspace.text.charAt(0).toUpperCase()}
                </Avatar>
              </Icons1>
            </div>
          ))}
        </StyledIconsWrapper>
      </StyledList>
      {workspaces.length > 6 && (
        <StyledIcon onClick={handleShowToggle}>
          {isExpanded ? (
            <IconButton>
              <Icons.Up />
            </IconButton>
          ) : (
            <IconButton>
              <Icons.Down />
            </IconButton>
          )}
        </StyledIcon>
      )}
    </StyledDrawer>
  );
};
const StyledIconsWrapper = styled("div")(() => ({
  width: "27px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
}));

const Icons1 = styled("div")(() => ({
  width: "100px",
  height: "37px",
  borderTopRightRadius: "24px",
  borderBottomRightRadius: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&:hover": {
    background: "#3A68831A",
    transition: "background-color 0.3s ease",
  },
}));
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
    marginTop: "68px",
  },
}));

const StyledList = styled(List)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "14px",
}));
const StyledContainerIcon = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
}));

const StyledHeader = styled("div")(() => ({
  display: "flex",
  paddingTop: "10px",

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
  top: "22px",
  left: "5.75rem",
  zIndex: "10",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "68px",
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
}));
