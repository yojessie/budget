import React from "react";
import { GnbContainer, Title } from "./BudgetGnb.styled";
import ToggleButton from "../Button/ToggleButton";

const BudgetGnb = ({ toggleTheme, isDarkMode }) => {
  return (
    <GnbContainer>
      <Title>나의 예산목록</Title>
      <ToggleButton toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </GnbContainer>
  );
};

export default BudgetGnb;
