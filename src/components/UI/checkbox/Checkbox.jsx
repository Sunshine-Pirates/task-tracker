import { Checkbox as MUICheckbox } from "@mui/material";

export const Checkbox = ({
  checked,
  onChange,
  checkedIcon,
  uncheckedIcon,
  ...props
}) => {
  return (
    <MUICheckbox
      checked={checked}
      onChange={onChange}
      icon={uncheckedIcon}
      checkedIcon={checkedIcon}
      {...props}
    />
  );
};
