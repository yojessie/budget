import React from "react";
import { StyledContainer } from "../components/container.styled";
import BudgetGnb from "../components/Gnb/BudgetGnb";
import { BudgetList } from "../components/Content/BudgetList.styled";
import BudgetItem from "../components/Content/BudgetItem";

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
