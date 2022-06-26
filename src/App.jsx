//? ThemeProvider: para que el tema de la aplicacion se aplique a todo el codigo
import Router from "./router"; //rutas
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
