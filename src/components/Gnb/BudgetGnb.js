import React from "react";
import { Container, Title } from "./BudgetGnb.styled";
import ToggleButton from "../Button/ToggleButton";

const BudgetGnb = ({ toggleTheme, isDarkMode }) => {
  return (
    <Container>
      <Title>나의 예산목록</Title>
      <ToggleButton toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </Container>
  );
};

export default BudgetGnb;
