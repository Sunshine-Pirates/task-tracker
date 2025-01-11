import { FormControlLabel, IconButton } from "@mui/material";
import { forwardRef } from "react";
import radio from "../../../assets/icons/radio.svg";
import radioLine from "../../../assets/icons/radioLine.svg";

export const Radio = forwardRef(({ label, value, onChange, checked }, ref) => {
  return (
    <FormControlLabel
      control={
        <IconButton ref={ref} onClick={() => onChange(value)}>
          {checked ? (
            <img src={radio} alt="radio" />
          ) : (
            <img src={radioLine} alt="radioLine" />
          )}
        </IconButton>
      }
      label={label}
    />
  );
});
