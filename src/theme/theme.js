import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      dark: "#111111",
      light: "#0079BF",
      contrastText: "#000000",
    },
    secondary: {
      main: "#919191",
      dark: "#B2B2B2",
      light: "#F0F0F0",
      contrastText: "#000000",
    },
    tertiary: {
      main: "#D91212",
      dark: "#2CB107",
      light: "#66C74B",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Cera Pro",
  },
});
