import { Fade, Menu, MenuItem, styled } from "@mui/material";
import TaskTrackerLogo from "/task-tracker.svg?react";
import { SearchInput } from "../components/UI/searchInput/SearchInput";
import Badge from "@mui/material/Badge";
import { Icons } from "../assets";
import { IconButton } from "../components/UI/IconButton";
import EndHeaderIcon from "../assets/images/header-end-icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../components/UI/modal/Modal";
import { LogoutModal } from "../components/LogoutModal";
import { PATHS } from "../utils/constants/constants";
import { useSelector } from "react-redux";

export const Header = ({ favourites }) => {
  const { userRole } = useSelector((state) => state.auth);

  const [openModal, setOpenModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <StyledHeader>
      <StartHeaderBlock>
        <HeaderLogoStyled>
          <img src={TaskTrackerLogo} alt="TaskTrackerLogo" />
          <Links to={userRole === "USER" ? PATHS.USER.ROOT : PATHS.ADMIN.ROOT}>
            <h2>Task Tracker</h2>
          </Links>
        </HeaderLogoStyled>
        {favourites && (
          <FavouriteBlock>
            Favourites ({favourites}) <Icons.Down className="down" />
          </FavouriteBlock>
        )}
      </StartHeaderBlock>
      <StyledEndBlock>
        <SearchInput type={"search"} placeholder={"Search"} />
        <DuoIconButtons>
          <IconButton>
            <Badge badgeContent={4} color="error">
              <Icons.Notify className="notify" />
            </Badge>
          </IconButton>
          <StyledMenu
            anchorEl={anchorEl}
            id="fade-menu"
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <StyledMenuItem onClick={handleClose}>
              <StyledLink
                to={userRole === "USER" ? PATHS.USER.PROFILE : PATHS.ADMIN.PAGE}
              >
                {" "}
                Profile{" "}
              </StyledLink>
            </StyledMenuItem>

            <StyledMenuItem onClick={handleClose}>
              <StyledLink onClick={handleOpenModal}>Log out</StyledLink>
            </StyledMenuItem>
          </StyledMenu>
          <IconButton onClick={handleClick}>
            <img src={EndHeaderIcon} alt="EndHeaderIcon" className="end-icon" />
          </IconButton>
        </DuoIconButtons>
      </StyledEndBlock>
      <Modal isOpen={openModal} onClose={handleCloseModal} icon>
        <LogoutModal onClose={handleCloseModal} />
      </Modal>
    </StyledHeader>
  );
};
const Links = styled(Link)(() => ({
  color: "#0079BF",
  textDecoration: "none",
}));
const StyledMenu = styled(Menu)(() => ({
  "& .css-1tktgsa-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
    width: "158px",
    height: "84px",
    borderRadius: "10px",
  },
}));
const StyledMenuItem = styled(MenuItem)({
  "&:hover": {
    color: "#0073DE",
  },
});
const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "#292929",
  "&:hover": {
    color: "#0073DE",
  },
});

const StyledHeader = styled("header")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "68px",
  padding: "16px 40px",
  backgroundColor: theme.palette.primary.main,
  boxShadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.03)",
}));
const StartHeaderBlock = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "79px",
  "& .down": {
    "& path": {
      fill: "#909090",
    },
  },
}));
const HeaderLogoStyled = styled("div")(({ theme }) => ({
  "& h2": {
    fontFamily: "'Open Sans', 'sans-serif'",
    fontSize: "20px",
  },
  cursor: "pointer",
  role: "button",
  tabIndex: "0",
  display: "flex",
  gap: "8px",
  alignItems: "center",
  color: theme.palette.primary.light,
}));
const StyledEndBlock = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "28px",
  "& .MuiFormControl-root": {
    width: "444px",
    height: "36px",
    paddingTop: "2px",
  },
  "& svg": {
    color: theme.palette.secondary.dark,
    width: "20px",
    height: "20px",
    marginTop: "4px",
  },
}));
const DuoIconButtons = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "19px",
  "& .notify": {
    "& path": {
      fill: "#FFFFFF",
    },
    stroke: "#919191",
  },
  "& .end-icon": {
    width: "32px",
    height: "32px",
    objectFit: "contain",
    imageRendering: "auto",
  },
}));

const FavouriteBlock = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  fontWeight: "500",
  lineHeight: "20px",
  "& .down path": {
    stroke: "#909090",
    strokeWidth: 1,
  },
}));
