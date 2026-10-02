import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import ScrollProgress from "./components/effects/ScrollProgress";
import CursorGlow from "./components/effects/CursorGlow";

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <ScrollProgress color={chosenTheme.imageHighlight} />
        <CursorGlow color={chosenTheme.imageHighlight} />
        <div>
          <Main theme={chosenTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
