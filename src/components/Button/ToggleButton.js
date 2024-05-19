import React from "react";
import { Container, Toggle, MoonIcon, SunIcon } from "./ToggleButton.styled";
import Moon from "../../assets/moon.svg";
import Sun from "../../assets/sun.svg";

const ToggleButton = ({ toggleTheme, isDarkMode }) => {
  return (
    <Container isDarkMode={isDarkMode}>
      <Toggle onClick={toggleTheme} />
      <MoonIcon src={Moon} alt="darkMode" isDarkMode={isDarkMode} />
      <SunIcon src={Sun} alt="lightMode" isDarkMode={isDarkMode} />
    </Container>
  );
};

export default ToggleButton;
