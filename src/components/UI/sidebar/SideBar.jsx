import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Icons } from "../../../assets";
import { IconButton, styled } from "@mui/material";
import { WorkspaceList } from "./WorkspaceList";
import { CollapsedSideBar } from "./CollapsedSideBar";
import { workspaces } from "../../../utils/constants/workspaces";
import { Link } from "react-router-dom";
import { PATHS } from "../../../utils/constants/constants";

export const SideBar = () => {
  const [open] = useState(true);
  const [showTitles, setShowTitles] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleShowToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const visibleWorkspaces = isExpanded ? workspaces : workspaces.slice(0, 6);

  const handleSelectIconClick = () => {
    setShowTitles((prev) => !prev);
  };
  const toggleDrawer = () => {
    setIsCollapsed((prev) => !prev);
  };
  const title = "LMS";

  const titles = ["Title 1", "Title 2", "Title 3", "Title 4", "Title 5"];

  return isCollapsed ? (
    <CollapsedSideBar
      toggleDrawer={toggleDrawer}
      isCollapsed={isCollapsed}
      title={title}
      isExpanded={isExpanded}
      handleShowToggle={handleShowToggle}
      visibleWorkspaces={visibleWorkspaces}
    />
  ) : (
    <StyledDrawer
      anchor="left"
      open={open}
      variant="persistent"
      isCollapsed={isCollapsed}
    >
      <StyledHeader>
        <section>
          <Icons.Vector />
          <p>{title}</p>
        </section>
        <StyledIconButton onClick={toggleDrawer}>
          <Icons.MenuItem />
        </StyledIconButton>
      </StyledHeader>
      <StyledDivider />
      <StyledContainer>
        <StyledBoards>
          <IconButton>
            <Icons.VectorTwo />
          </IconButton>
          <p>Boards</p>
        </StyledBoards>
        <StyledCOntainerIcons>
          <Icons.PlusWhite />
          <div onClick={handleSelectIconClick}>
            {showTitles ? <Icons.SelectIconTwo /> : <Icons.SelectIcon />}
          </div>
        </StyledCOntainerIcons>
      </StyledContainer>

      {showTitles && (
        <StyledList>
          {titles.map((item, index) => (
            <StyledListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemText primary={item} />
              </ListItemButton>
            </StyledListItem>
          ))}
        </StyledList>
      )}

      <StyledDivider />
      <StyledWrapper>
        <Links to={PATHS.ADMIN.AllISSUESPAGE}>
          <Container>
            <section>
              <IconButton>
                <Icons.Group />
              </IconButton>
              <p>All issues</p>
            </section>
            <StyledNumber variant="body2" color="textSecondary">
              (267)
            </StyledNumber>
          </Container>
        </Links>

        <Container>
          <section>
            <IconButton>
              <Icons.Members />
            </IconButton>
            <p>Participants</p>
          </section>
          <StyledNumber variant="body2" color="textSecondary">
            (7)
          </StyledNumber>
        </Container>

        <StyledSettings>
          <IconButton>
            <Icons.Settings />
          </IconButton>
          <p>Setting</p>
        </StyledSettings>
      </StyledWrapper>
      <StyledDivider />
      <WorkspaceList
        isExpanded={isExpanded}
        handleShowToggle={handleShowToggle}
        visibleWorkspaces={visibleWorkspaces}
      />
    </StyledDrawer>
  );
};
const Links = styled(Link)(() => ({
  color: "#111111",
  textDecoration: "none",
}));

const StyledNumber = styled(Typography)(() => ({
  paddingBottom: "5px",
}));
const StyledList = styled(List)(() => ({
  paddingLeft: "3.375rem",
  paddingBottom: "1.25rem",
}));

const StyledListItem = styled(ListItem)(() => ({
  position: "relative",
  color: "#919191",

  "& .css-1h3em7e-MuiButtonBase-root-MuiListItemButton-root": {
    width: "10.8125rem",
    height: "2.25rem",
    borderTopRightRadius: "1.5rem",
    borderBottomRightRadius: "1.5rem",
  },

  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    borderLeft: "0.0625rem solid #E0E0E0",
  },
}));
const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "isCollapsed",
})(({ isCollapsed }) => ({
  "& .MuiDrawer-paper": {
    width: isCollapsed ? "5rem" : "15.625rem",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    borderRight: "none",
    background:
      "linear-gradient(90deg, rgba(248,248,248,0.6) 0%, rgba(248,248,248,0.6) 100%)",
  },
}));

const StyledHeader = styled("div")(() => ({
  display: "flex",

  "& section": {
    display: "flex",
    justifyContent: "center",
    gap: "0.75rem",
    paddingLeft: "2.5rem",
    paddingTop: "1.9375rem",
    paddingBottom: "1.4375rem",
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
  borderRadius: "0px 0.5rem 0.5rem 0px",
  position: "fixed",
  top: "1.25rem",
  left: "14.125rem",
  zIndex: "10",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledContainer = styled("div")(() => ({
  width: "14.1875rem",
  height: "2.3125rem",
  background:
    "linear-gradient(90deg, rgba(58,104,131,0.6) 0%, rgba(58,104,131,0.6) 100%)",
  color: "#FFFFFF",
  paddingLeft: "2.5rem",
  marginBottom: "0.75rem",
  display: "flex",
  justifyContent: "space-around",
  borderTopRightRadius: "1.5rem",
  borderBottomRightRadius: "1.5rem",
}));
const StyledBoards = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "0.875rem",
}));
const StyledCOntainerIcons = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "0.4375rem",
}));
const Container = styled("div")(() => ({
  width: "190px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1.900rem",
  borderTopRightRadius: "1.5rem",
  borderBottomRightRadius: "1.5rem",
  "& p": {
    paddingTop: "6px",
  },

  "& section": {
    display: "flex",
  },
  "&:hover": {
    background: "#3A68831A",
    transition: "background-color 0.3s ease",
  },
}));
const StyledSettings = styled("div")(() => ({
  display: "flex",
  paddingLeft: "10px",
  borderTopRightRadius: "1.5rem",
  borderBottomRightRadius: "1.5rem",
  "& p": {
    paddingTop: "7px",
  },
  "&:hover": {
    background: "#3A68831A",
    transition: "background-color 0.3s ease",
  },
}));

const StyledWrapper = styled("div")(() => ({
  height: "94px",
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  margin: "0 auto",
}));
const StyledDivider = styled(Divider)(() => ({
  width: "10.625rem",
  margin: "0 auto",
}));
