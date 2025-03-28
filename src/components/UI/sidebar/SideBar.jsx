import { useDispatch, useSelector } from "react-redux";
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
import { useState } from "react";
import { toggleSidebar } from "../../../store/sidebar/sideBarSlice";

export const SideBar = () => {
  const dispatch = useDispatch();
  const isCollapsed = useSelector((state) => state.sidebar.isCollapsed);
  const { userRole } = useSelector((state) => state.auth);
  const [showTitles, setShowTitles] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionToggle = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  const handleShowToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const visibleWorkspaces = isExpanded ? workspaces : workspaces.slice(0, 6);

  const handleSelectIconClick = () => {
    setShowTitles((prev) => !prev);
  };
  const title = "LMS";
  const titles = ["Title 1", "Title 2", "Title 3", "Title 4", "Title 5"];

  return isCollapsed ? (
    <CollapsedSideBar
      toggleDrawer={() => dispatch(toggleSidebar())}
      isCollapsed={isCollapsed}
      title={title}
      isExpanded={isExpanded}
      handleShowToggle={handleShowToggle}
      visibleWorkspaces={visibleWorkspaces}
    />
  ) : (
    <StyledDrawer
      anchor="left"
      open={!isCollapsed}
      variant="persistent"
      isCollapsed={isCollapsed}
    >
      <StyledHeader>
        <section>
          <Icons.Vector />
          <p>{title}</p>
        </section>
        <StyledIconButton onClick={() => dispatch(toggleSidebar())}>
          <Icons.MenuItem />
        </StyledIconButton>
      </StyledHeader>
      <StyledDivider />

      {activeSection === "boards" ? (
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
      ) : (
        <Links to={PATHS.ADMIN.ALLBOARDS}>
          <BoardWrapper onClick={() => handleSectionToggle("boards")}>
            <BoardTitle>
              <IconButton>
                <Icons.Boards />
              </IconButton>
              <p>Boards</p>
            </BoardTitle>
            <BoardIcons>
              <Icons.PlusGray />
              <IconButton onClick={handleSelectIconClick}>
                {showTitles ? <Icons.Up /> : <Icons.Down />}
              </IconButton>
            </BoardIcons>
          </BoardWrapper>
        </Links>
      )}

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
        {activeSection === "allIssues" ? (
          <Wrapper>
            <IconButton>
              <Icons.AllIssues />
            </IconButton>
            <Typography variant="body1">All issues</Typography>
            <StyledNumberr variant="body2">(267)</StyledNumberr>
          </Wrapper>
        ) : (
          <Links to={PATHS.ADMIN.AllISSUESPAGE}>
            <Container onClick={() => handleSectionToggle("allIssues")}>
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
        )}

        {activeSection === "participants" ? (
          <Wrapper>
            <IconButton>
              <Icons.Participants />
            </IconButton>
            <Typography variant="body1">Participants</Typography>
            <StyledNumberr variant="body2">(7)</StyledNumberr>
          </Wrapper>
        ) : (
          <Links
            to={
              userRole === "ADMIN"
                ? PATHS.ADMIN.PARTICIPANTS
                : PATHS.USER.PARTICIPANTS
            }
          >
            <Container onClick={() => handleSectionToggle("participants")}>
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
          </Links>
        )}

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

const BoardWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "30px",
  cursor: "pointer",
});

const BoardTitle = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

const BoardIcons = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "7px",
  color: "#757575",
});

const Wrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  background:
    "linear-gradient(90deg, rgba(58,104,131,0.6) 0%, rgba(58,104,131,0.6) 100%)",
  padding: "10px 20px",
  width: "14.1875rem",
  height: "2.3125rem",
  color: "#FFFFFF",
  paddingLeft: "2.5rem",
  marginBottom: "0.75rem",
  borderTopRightRadius: "1.5rem",
  borderBottomRightRadius: "1.5rem",
});

const StyledNumberr = styled(Typography)({
  color: "white",
  marginLeft: "8px",
});
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
  transition: "width 0.6s ease-in-out",
  "& .MuiDrawer-paper": {
    width: isCollapsed ? "5rem" : "15.625rem",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    borderRight: "none",
    marginTop: "68px",
    background:
      "linear-gradient(90deg, rgba(248,248,248,0.6) 0%, rgba(248,248,248,0.6) 100%)",
  },
}));

const StyledHeader = styled("div")(() => ({
  display: "flex",

  "& section": {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    paddingLeft: "2.5rem",
    paddingTop: "1.9375rem",
    paddingBottom: "1.4375rem",
    "& p": {
      fontSize: "1.125rem",
      fontWeight: "500",
    },
  },
}));

const StyledIconButton = styled("div")(({ isCollapsed }) => ({
  width: "2.5rem",
  height: "2.5rem",
  background: "linear-gradient(to left, #F8F8F899 40%, transparent 40%)",
  borderRadius: "0px 0.5rem 0.5rem 0px",
  position: "fixed",
  top: "1.25rem",
  left: isCollapsed ? "3.125rem" : "14.125rem",
  zIndex: "10",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "68px",
  transition: "left 0.6s ease-in-out, transform 0.6s ease-in-out",
  transform: isCollapsed ? "rotate(180deg)" : "rotate(0deg)",
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
  alignItems: "center",
  justifyContent: "center",
  gap: "36px",
  margin: "0 auto",
  borderTopRightRadius: "1.5rem",
  borderBottomRightRadius: "1.5rem",
  "& p": {
    paddingTop: "6px",
  },

  "& section": {
    display: "flex",
  },
}));
const StyledSettings = styled("div")(() => ({
  width: "190px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  paddingLeft: "6px",
}));

const StyledWrapper = styled("div")(() => ({
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
}));
const StyledDivider = styled(Divider)(() => ({
  width: "10.625rem",
  margin: "0 auto",
}));
