import React from "react";

import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
import Nav from "./Components/Nav/Nav"
import {HashRouter as Router} from "react-router-dom"
import routes from "./routes"
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Nav/>
        {routes}
      </ThemeProvider>
    </Router>
  );
}

export default App;
