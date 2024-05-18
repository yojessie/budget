// src/App.js
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Login from "./components/Button/LoginButton";
import Button from "./components/Button/Button";
import darkTheme from "./styles/themes/darkTheme";
import lightTheme from "./styles/themes/lightTheme";
import GlobalStyles from "./styles/GlobalStyles";
import { StyledContainer } from "./components/container.styled";

const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <StyledContainer>
        <Button>click me</Button>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Login />
      </StyledContainer>
    </ThemeProvider>
  );
};

export default App;
