import {  InputAdornment, styled, TextField } from "@mui/material";
import { forwardRef } from "react";
import { Search } from "@mui/icons-material"

export const SearchInput = forwardRef(
  (
    {
      value,
      onChange,
      placeholder,
      type ,
      iconEnd,
      ...props
    },
    ref
  ) => {

   

    return (
      <StyledUiInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        fullWidth
        inputRef={ref}
        InputProps={{
          startAdornment:  ( 
            <InputAdornment position="start">
              <div style={{ cursor: "pointer" }}>
                { iconEnd ? null:
                 <Search /> }
                 
              </div>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <div style={{ cursor: "pointer" }}>
                {iconEnd} 
              </div>
            </InputAdornment>
          ),
        }}
        {...props}
      />
    );
  }
);

const StyledUiInput = styled(TextField)(() => ({
  border: "1px solid  #D0D0D0",
  width: "282px",
  height: "32px",
  borderRadius: "8px",

  "&:hover": {
    border: "1px solid  #0079BF",

  },

  "&:active": {
    border: "1px solid  #919191",


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
  "& .css-1umw9bq-MuiSvgIcon-root":{
    marginTop:"5px "
  },

  "& .MuiInputBase-input": {
    border: "none",
    padding: "4px",
  },
}));