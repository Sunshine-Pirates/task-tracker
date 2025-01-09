import { IconButton, InputAdornment, styled, TextField } from "@mui/material";
import { forwardRef, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SearchIcon from "@mui/icons-material/Search";

export const Input = forwardRef(
  (
    {
      value,
      onChange,
      placeholder,
      type ,
      iconStart,
      iconEnd,
      error,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClick = () => setShowPassword(!showPassword);
    const inputType =
      type === "password" ? (showPassword ? "text" : "password") : type;

    return (
      <StyledUiInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={inputType}
        error={error}
        fullWidth
        inputRef={ref}
        InputProps={{
          startAdornment:  ( 
            <InputAdornment position="start">
              <div style={{ cursor: "pointer" }}>
                {iconStart && 
                 <SearchIcon />}
              </div>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              {type === "password" ? (
                <IconButton onClick={handleClick} edge="end">
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              ) : iconEnd ? (
                <div style={{ cursor: "pointer" }}>{iconEnd}</div>
              ) : iconEnd}
            </InputAdornment>
          ),
        }}
        {...props}
      />
    );
  }
);

const StyledUiInput = styled(TextField)(({ error }) => ({
  border: `1px solid ${error ? "#D91212" : "#D0D0D0"}`,
  width: "282px",
  height: "32px",
  borderRadius: "8px",

  "&:hover": {
    border: `1px solid ${error ? "#F91515" : "#0079BF"}`,
  },

  "&:active": {
    border: `1px solid ${error ? "#F91515" : "#919191"}`,
  },

  "& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & input:-webkit-autofill:active": {
    WebkitTransition: "color 9999s ease-out, background-color 9999s ease-out",
    WebkitTransitionDelay: "9999s",
  },

  "& fieldset": {
    border: "none",
  },

  "& input[type='search']::-webkit-search-cancel-button": {
    display: "none",
  },

  "& .MuiInputBase-input": {
    border: "none",
    padding: "6px",
  },
}));