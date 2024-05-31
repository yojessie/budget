// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";
import darkTheme from "./styles/themes/darkTheme";
import lightTheme from "./styles/themes/lightTheme";

import Login from "./pages/Login";
import BudgetList from "./pages/BudgetList";
import BudgetSet from "./pages/BudgetSet";

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
          <Route path="/" element={<Login />} />
          <Route
            path="/budget-list"
            element={
              <BudgetList toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            }
          />
          <Route path="/budget-set" element={<BudgetSet />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
