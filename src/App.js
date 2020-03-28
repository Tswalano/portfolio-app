import React from "react";
import { CssBaseline } from "@material-ui/core";
import theme from "./js/Components/Theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import RouterComponent from "./js/Components/RouterComponent";
import NavbarComp from "./js/Components/NavbarComponent";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterComponent />
    </ThemeProvider>
  );
}

export default App;
