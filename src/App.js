// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Intro from "./pages/Intro";
import BudgetList from "./pages/BudgetList";
import darkTheme from "./styles/themes/darkTheme";
import lightTheme from "./styles/themes/lightTheme";

const App = () => {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === darkTheme ? lightTheme : darkTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Router>
        <Routes>
          <Route path="/" element={<Intro toggleTheme={toggleTheme} />} />
          <Route path="/BudgetList" element={<BudgetList />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
