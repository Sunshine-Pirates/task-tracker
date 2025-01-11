import { IconButton } from "@mui/material";
import checkbox from "../../../assets/icons/checkbox.svg";
import checkboxLine from "../../../assets/icons/checkboxLine.svg";
import Star from "../../../assets/icons/star.svg";
import StarLine from "../../../assets/icons/starLine.svg";

export const Checkbox = ({ type, checked, onClick }) => {
  return (
    <div>
      {type === "checkbox" && (
        <IconButton onClick={onClick}>
          {checked ? (
            <img src={checkbox} alt="checkbox" />
          ) : (
            <img src={checkboxLine} alt="checkboxLine" />
          )}
        </IconButton>
      )}

      {type === "star" && (
        <IconButton onClick={onClick}>
          {checked ? (
            <img src={Star} alt="star" />
          ) : (
            <img src={StarLine} alt="starLine" />
          )}
        </IconButton>
      )}
    </div>
  );
};
