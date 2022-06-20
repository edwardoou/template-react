//* Configuracion del tema de la aplicacion, para que haya armonia

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ac00ff",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f50057",
      contrastText: "#fff",
    },
    background: {
      gray: "#e0e0e0",
      black: "#000",
    },
    text:{
      white: "#fff",
    }
  },
  image: {
    avatar: {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

export default theme;
