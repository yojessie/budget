// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Intro from "./pages/Intro";
import Budget from "./pages/Budget";
import darkTheme from "./styles/themes/darkTheme";
import lightTheme from "./styles/themes/lightTheme";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />

      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route
            path="/Budget"
            element={
              <Budget toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
