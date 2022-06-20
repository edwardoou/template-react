//? ThemeProvider: para que el tema de la aplicacion se aplique a todo el codigo
import { ThemeProvider } from "@mui/material/styles";
import Router from "./router"; //rutas
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
