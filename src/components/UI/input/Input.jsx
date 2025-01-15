import { IconButton, InputAdornment, styled, TextField } from "@mui/material";
import { forwardRef, useState } from "react";
import { Icons } from "../../../assets";

export const Input = forwardRef(
  ({ value, onChange, placeholder, type, error, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const inputType =
      type === "password" ? (showPassword ? "text" : "password") : type;

    return (
      <StyleUiInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={inputType}
        error={error}
        fullWidth
        inputRef={ref}
        InputProps={{
          endAdornment: (
            <>
              {type === "password" && (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    edge="end"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    {showPassword ? <Icons.IconShow /> : <Icons.IconDontShow />}
                  </IconButton>
                </InputAdornment>
              )}
            </>
          ),
        }}
        {...props}
      />
    );
  }
);

const StyleUiInput = styled(TextField)(({ error }) => ({
  border: `1px solid ${error ? "#D91212" : "#D0D0D0"}`,
  width: "100%",
  height: "32px",
  borderRadius: "8px",

  "&:hover": {
    border: `1px solid ${error ? "#F91515" : "#0079BF"}`,
  },

  "&:active": {
    border: `1px solid ${error ? "#F91515" : "#919191"}`,
  },

  "& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & input:-webkit-autofill:active":
    {
      WebkitTransition: "color 9999s ease-out, background-color 9999s ease-out",
      WebkitTransitionDelay: "9999s",
    },
  "& fieldset": { border: "none" },

  "input[type='search']::-webkit-search-cancel-button": {
    display: "none",
  },
  "& .MuiInputBase-input": {
    border: "none",
    padding: "4px 16px",
  },

  "& .MuiInputBase-input::placeholder": {
    color: "#AFAFAF",
  },
}));
