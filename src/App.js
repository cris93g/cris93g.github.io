import React from "react";

import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
import Nav from "./Components/Nav/Nav"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
     <Nav/>
    </ThemeProvider>
  );
}

export default App;
