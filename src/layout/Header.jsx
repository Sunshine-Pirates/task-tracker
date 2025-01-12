import { styled } from "@mui/material";
import TaskTrackerLogo from "/task-tracker.svg?react";
import { SearchInput } from "../components/UI/searchInput/SearchInput";
export const Header = () => {
  return (
    <StyledHeader>
      <StartHeaderBlock>
        <HeaderLogoStyled>
          <img src={TaskTrackerLogo} alt="TaskTrackerLogo" />
          <h2>Task Tracker</h2>
        </HeaderLogoStyled>
      </StartHeaderBlock>
      <StyledEndBlock>
        <SearchInput type={"search"} placeholder={"Search"} />
        <DuoIconButtons></DuoIconButtons>
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
  "& .MuiFormControl-root": {
    width: "444px",
    height: "36px",
    paddingTop: "2px",
  },
  "& .css-1uh2dfu-MuiFormControl-root-MuiTextField-root .css-1umw9bq-MuiSvgIcon-root":
    {
      color: theme.palette.secondary.dark,
      width: "20px",
      height: "20px",
      marginTop: "6px",
    },
}));
const StartHeaderBlock = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "79px",
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
const StyledEndBlock = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "28px",
}));
const DuoIconButtons = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "19px",
}));
