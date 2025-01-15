import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Icons } from "../../../assets";
import { styled } from "@mui/material";

export const SideBar = () => {
  const [open] = useState(true);
  const [showTitles, setShowTitles] = useState(false);
  const [value, setValue] = useState(false);
  const handleSelectIconClick = () => {
    setShowTitles((prev) => !prev);
  };
  const handleClick = () => {
    setValue((prev) => !prev);
  };
  const workspaces = [
    "Accounting",
    "LMS",
    "Accounting",
    "LMS",
    "Accounting",
    "LMS",
  ];
  const titles = ["Title 1", "Title 2", "Title 3", "Title 4", "Title 5"];
  const newValue = [
    {
      id: 1,
      icon: <Icons.Collapse />,
      text: "Boards",
      plusIcon: false,
    },
    {
      id: 1,
      icon: <Icons.AddMember />,
      text: "Participants",
      plusIcon: true,
    },
    {
      id: 1,
      icon: <Icons.Settings />,
      text: "Setting",
      plusIcon: false,
    },
  ];

  return (
    <StyledDrawer anchor="left" open={open} variant="persistent">
      <StyledHeader>
        <section>
          <Icons.Vector />
          <p>LMS</p>
        </section>
        <StyledIconButton>
          <Icons.MenuItem />
        </StyledIconButton>
      </StyledHeader>
      <Divider sx={{ width: "170px", margin: "0 auto" }} />
      <List>
        <StyledContainer>
          <StyledBoards>
            <Icons.VectorTwo />
            <p>Boards</p>
          </StyledBoards>
          <StyledCOntainerIcons>
            <Icons.PlusWhite />
            <IconButton onClick={handleSelectIconClick}>
              {showTitles ? <Icons.SelectIconTwo /> : <Icons.SelectIcon />}
            </IconButton>
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

        <Divider sx={{ width: "170px", margin: "0 auto" }} />
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
      <Divider sx={{ width: "170px", margin: "0 auto" }} />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Icons.GraphicIcon />
            </ListItemIcon>
            <ListItemText primary="Workspaces" />
            <IconButton size="small">
              <Icons.PlusGray />
            </IconButton>
          </ListItemButton>
        </ListItem>

        {workspaces.map((workspace, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Avatar sx={{ bgcolor: "#2CB107", width: 27, height: 27 }}>
                  {workspace.charAt(0)}
                </Avatar>
              </ListItemIcon>
              <ListItemText primary={workspace} />
              <IconButton onClick={handleClick}>
                {value ? <Icons.Up /> : <Icons.Down />}
              </IconButton>
            </ListItemButton>
          </ListItem>
        ))}
        {value && (
          <ListItem>
            {newValue.map((item) => (
              <ListItemIcon key={item.id} disablePadding>
                <ListItemButton>
                  <IconButton>{item.icon}</IconButton>
                  <ListItemText primary={item.text} />
                </ListItemButton>
                {item.plusIcon ? <Icons.Plus /> : null}
              </ListItemIcon>
            ))}
          </ListItem>
        )}

        <ListItem disablePadding>
          <ListItemButton style={{ display: "flex", gap: "12px" }}>
            <Icons.Down />
            <ListItemText primary="Show more" style={{ color: "#909090" }} />
          </ListItemButton>
        </ListItem>
      </List>
    </StyledDrawer>
  );
};

const StyledList = styled(List)(() => ({
  paddingLeft: "54px",
  paddingBottom: "20px",
  background:
    "linear-gradient(90deg, rgba(248,248,248,0.6) 0%, rgba(248,248,248,0.6) 100%)",
}));

const StyledListItem = styled(ListItem)(() => ({
  position: "relative",
  color: "#919191",

  "& .css-1h3em7e-MuiButtonBase-root-MuiListItemButton-root": {
    width: "173px",
    height: "36px",
    borderTopRightRadius: "24px",
    borderBottomRightRadius: "24px",
  },

  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    borderLeft: "1px solid #E0E0E0",
  },
}));
const StyledDrawer = styled(Drawer)(() => ({
  "& .MuiDrawer-paper": {
    width: "250px",
    borderRight: "none",
    background:
      "linear-gradient(90deg, rgba(248,248,248,0.6) 0%, rgba(248,248,248,0.6) 100%)",
  },

  "& .css-cokf1l-MuiListItemIcon-root": {
    paddingLeft: "18px",
  },
}));

const StyledHeader = styled("div")(() => ({
  display: "flex",

  "& section": {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    paddingLeft: "40px",
    paddingTop: "31px",
    paddingBottom: "23px",
    "& p": {
      fontSize: "18px",
      fontWeight: "500",
    },
  },
}));

const StyledIconButton = styled("div")(() => ({
  width: "40px",
  height: "40px",
  background: "linear-gradient(to left, #F8F8F899 40%, transparent 60%)",
  borderRadius: "0px 8px 8px 0px",
  position: "fixed",
  top: "20px",
  left: "226px",
  zIndex: "10",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledContainer = styled(ListItemButton)(() => ({
  width: "227px",
  height: "37px",
  background:
    "linear-gradient(90deg, rgba(58,104,131,0.6) 0%, rgba(58,104,131,0.6) 100%)",
  color: "#FFFFFF",
  paddingLeft: "40px",
  marginBottom: "12px",
  display: "flex",
  justifyContent: "space-around",
  borderTopRightRadius: "24px",
  borderBottomRightRadius: "24px",
}));
const StyledBoards = styled("div")(() => ({
  display: "flex",
  gap: "14px",
}));
const StyledCOntainerIcons = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "7px",
}));
const Container = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  "& section": {
    display: "flex",
    gap: "12px",
  },
}));
const StyledSettings = styled("div")(() => ({
  display: "flex",
  gap: "12px",
}));

const StyledWrapper = styled("div")(() => ({
  width: "167px",
  height: "94px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  margin: "20px 40px",
}));
