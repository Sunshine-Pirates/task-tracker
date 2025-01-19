import { MenuItem, styled } from "@mui/material";
import Menu from "@mui/material/Menu";
import { Icons } from "../../../assets";
import { favourites } from "../../../utils/constants/favourite";

export const Favourites = ({ open, handleClose }) => {
  return (
    <StyledMenu open={open} onClose={handleClose}>
      <p>Favourites</p>
      {favourites.map((item) => (
        <MenuItem key={item.id}>
          {item.title === "Taigan" && item.text === "Workspaces" ? (
            <div>
              <p>{item.title}</p>
              <StyledText>{item.text}</StyledText>
            </div>
          ) : (
            <img src={item.image} alt={item.title} />
          )}
          {item.title !== "Taigan" || item.text !== "Workspaces" ? (
            <div>
              <p>{item.title}</p>
              <StyledText>{item.text}</StyledText>
            </div>
          ) : null}
          {item.favourite ? <Icons.StarBlue /> : <Icons.StarLine />}
        </MenuItem>
      ))}
    </StyledMenu>
  );
};

const StyledMenu = styled(Menu)(() => ({
  "& .css-1tktgsa-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
    width: "370px",
    height: "fit-content",
    borderRadius: "10px",
    paddingTop: "10px",

    "& p": {
      textAlign: "center",
      lineHeight: "16px",
    },
    "& .css-1toxriw-MuiList-root-MuiMenu-list": {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    "& .css-1biucbg-MuiButtonBase-root-MuiMenuItem-root": {
      display: "flex",
      alignItems: "center",
      gap: "12px",

      "& img": {
        width: "84px",
        height: "38px",
        borderRadius: "8px",
        objectFit: "cover",
      },
      "& div": {
        display: "flex",
        flexDirection: "column",
        lineHeight: "17px",
      },
      "& svg": {
        marginLeft: "auto",
      },
    },
  },
}));

const StyledText = styled("p")(() => ({
  color: "#919191",
  fontSize: "14px",
}));
