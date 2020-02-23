import React from "react";

import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routes}
    </ThemeProvider>
  );
}

export default App;
