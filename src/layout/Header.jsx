import { styled } from "@mui/material";
import TaskTrackerLogo from "/task-tracker.svg?react";
import { SearchInput } from "../components/UI/searchInput/SearchInput";
import Badge from "@mui/material/Badge";
import { Icons } from "../assets";
import { IconButton } from "../components/UI/IconButton";
import EndHeaderIcon from "../assets/images/header-end-icon.png";
export const Header = ({ favourites }) => {
  return (
    <StyledHeader>
      <StartHeaderBlock>
        <HeaderLogoStyled>
          <img src={TaskTrackerLogo} alt="TaskTrackerLogo" />
          <h2>Task Tracker</h2>
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
          <IconButton>
            <img src={EndHeaderIcon} alt="EndHeaderIcon" className="end-icon" />
          </IconButton>
        </DuoIconButtons>
      </StyledEndBlock>
    </StyledHeader>
  );
};
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
