import { Radio as MUIRadio, FormControlLabel } from "@mui/material";
import { forwardRef } from "react";

export const Radio = forwardRef(
  (
    { label, value, onChange, checked, checkedIcon, uncheckedIcon, ...props },
    ref
  ) => {
    return (
      <FormControlLabel
        control={
          <MUIRadio
            ref={ref}
            checked={checked}
            onChange={() => onChange(value)}
            icon={uncheckedIcon}
            checkedIcon={checkedIcon}
            {...props}
          />
        }
        label={label}
      />
    );
  }
);
