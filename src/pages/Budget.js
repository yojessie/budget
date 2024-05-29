import React from "react";
import BudgetGnb from "../components/Gnb/BudgetGnb";
import BudgetItem from "../components/Content/BudgetItem";
import { Container } from "../components/container.styled";
import { BudgetList } from "../pages/Budget.styled";

const Budget = ({ toggleTheme, isDarkMode }) => {
  return (
    <Container>
      <BudgetGnb toggleTheme={toggleTheme} isDarkMode={isDarkMode}></BudgetGnb>
      <BudgetList>
        <BudgetItem></BudgetItem>
        <BudgetItem></BudgetItem>
      </BudgetList>
    </Container>
  );
};

export default Budget;
