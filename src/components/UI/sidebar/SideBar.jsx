import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Icons } from "../../../assets";
import { styled } from "@mui/material";
import { WorkspaceList } from "./WorkspaceList";
import { CollapsedSideBar } from "./CollapsedSideBar";

export const SideBar = () => {
  const [open] = useState(true);
  const [showTitles, setShowTitles] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSelectIconClick = () => {
    setShowTitles((prev) => !prev);
  };
  const toggleDrawer = () => {
    setIsCollapsed((prev) => !prev);
  };

  const titles = ["Title 1", "Title 2", "Title 3", "Title 4", "Title 5"];

  return isCollapsed ? (
    <CollapsedSideBar toggleDrawer={toggleDrawer} isCollapsed={isCollapsed} />
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
          <p>LMS</p>
        </section>
        <StyledIconButton onClick={toggleDrawer}>
          <Icons.MenuItem />
        </StyledIconButton>
      </StyledHeader>
      <StyledDivider />
      <List>
        <StyledContainer>
          <StyledBoards>
            <Icons.VectorTwo />
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
            {titles.map((title, index) => (
              <StyledListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemText primary={title} />
                </ListItemButton>
              </StyledListItem>
            ))}
          </StyledList>
        )}

        <StyledDivider />
        <StyledWrapper>
          <Container>
            <section>
              <Icons.Group />
              <p>All issues</p>
            </section>
            <Typography variant="body2" color="textSecondary">
              (267)
            </Typography>
          </Container>

          <Container>
            <section>
              <Icons.Members />
              <p>Participants</p>
            </section>
            <Typography variant="body2" color="textSecondary">
              (7)
            </Typography>
          </Container>

          <StyledSettings>
            <Icons.Settings />
            <p>Setting</p>
          </StyledSettings>
        </StyledWrapper>
      </List>
      <StyledDivider />
      <WorkspaceList />
    </StyledDrawer>
  );
};

const StyledList = styled(List)(() => ({
  paddingLeft: "3.375rem", // 54px
  paddingBottom: "1.25rem", // 20px
}));

const StyledListItem = styled(ListItem)(() => ({
  position: "relative",
  color: "#919191",

  "& .css-1h3em7e-MuiButtonBase-root-MuiListItemButton-root": {
    width: "10.8125rem", // 173px
    height: "2.25rem", // 36px
    borderTopRightRadius: "1.5rem", // 24px
    borderBottomRightRadius: "1.5rem", // 24px
  },

  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    borderLeft: "0.0625rem solid #E0E0E0", // 1px
  },
}));
const StyledDrawer = styled(Drawer)(() => ({
  "& .MuiDrawer-paper": {
    width: "15.625rem", // 250px
    borderRight: "none",
    background:
      "linear-gradient(90deg, rgba(248,248,248,0.6) 0%, rgba(248,248,248,0.6) 100%)",
  },

  "& .css-cokf1l-MuiListItemIcon-root": {
    paddingLeft: "1.125rem", // 18px
  },
}));

const StyledHeader = styled("div")(() => ({
  display: "flex",

  "& section": {
    display: "flex",
    justifyContent: "center",
    gap: "0.75rem", // 12px
    paddingLeft: "2.5rem", // 40px
    paddingTop: "1.9375rem", // 31px
    paddingBottom: "1.4375rem", // 23px
    "& p": {
      fontSize: "1.125rem", // 18px
      fontWeight: "500",
    },
  },
}));

const StyledIconButton = styled("div")(() => ({
  width: "2.5rem", // 40px
  height: "2.5rem", // 40px
  background: "linear-gradient(to left, #F8F8F899 40%, transparent 40%)",
  borderRadius: "0px 0.5rem 0.5rem 0px", // 0px 8px 8px 0px
  position: "fixed",
  top: "1.25rem", // 20px
  left: "14.125rem", // 226px
  zIndex: "10",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledContainer = styled("div")(() => ({
  width: "14.1875rem", // 227px
  height: "2.3125rem", // 37px
  background:
    "linear-gradient(90deg, rgba(58,104,131,0.6) 0%, rgba(58,104,131,0.6) 100%)",
  color: "#FFFFFF",
  paddingLeft: "2.5rem", // 40px
  marginBottom: "0.75rem", // 12px
  display: "flex",
  justifyContent: "space-around",
  borderTopRightRadius: "1.5rem", // 24px
  borderBottomRightRadius: "1.5rem", // 24px
}));
const StyledBoards = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "0.875rem", // 14px
}));
const StyledCOntainerIcons = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "0.4375rem", // 7px
}));
const Container = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  gap: "1.875rem", // 30px
  "& section": {
    display: "flex",
    gap: "0.75rem", // 12px
  },
}));
const StyledSettings = styled("div")(() => ({
  display: "flex",
  gap: "0.75rem", // 12px
}));

const StyledWrapper = styled("div")(() => ({
  width: "10.4375rem", // 167px
  height: "5.875rem", // 94px
  display: "flex",
  flexDirection: "column",
  gap: "1rem", // 16px
  margin: "1.25rem 2.5rem", // 20px 40px
  cursor: "pointer",
}));
const StyledDivider = styled(Divider)(() => ({
  width: "10.625rem", // 170px
  margin: "0 auto",
}));