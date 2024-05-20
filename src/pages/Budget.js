import React from "react";
import BudgetGnb from "../components/Gnb/BudgetGnb";
import BudgetItem from "../components/Content/BudgetItem";
import { StyledContainer } from "../components/container.styled";
import { BudgetList } from "../pages/Budget.styled";

const Budget = ({ toggleTheme, isDarkMode }) => {
  return (
    <StyledContainer>
      <BudgetGnb toggleTheme={toggleTheme} isDarkMode={isDarkMode}></BudgetGnb>
      <BudgetList>
        <BudgetItem></BudgetItem>
        <BudgetItem></BudgetItem>
      </BudgetList>
    </StyledContainer>
  );
};

export default Budget;
