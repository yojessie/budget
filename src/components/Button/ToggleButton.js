import React from "react";
import { Container, Toggle } from "./ToggleButton.styled";
import { IconMoon, IconSun } from "../../assets/icons/icons";

const ToggleButton = ({ toggleTheme, isDarkMode }) => {
  return (
    <Container onClick={toggleTheme} isDarkMode={isDarkMode}>
      <Toggle />
      {isDarkMode ? <IconMoon /> : <IconSun />}
    </Container>
  );
};

export default ToggleButton;
