import React from "react";
import BudgetItem from "../components/Content/BudgetItem";
import BudgetGnb from "../components/Modules/BudgetGnb";
import Container from "../components/Modules/Container";
import { BudgetOl } from "./BudgetList.styled";

const BudgetList = ({ toggleTheme, isDarkMode }) => {
  return (
    <Container>
      <BudgetGnb toggleTheme={toggleTheme} isDarkMode={isDarkMode}></BudgetGnb>
      <BudgetOl>
        <BudgetItem></BudgetItem>
        <BudgetItem></BudgetItem>
      </BudgetOl>
    </Container>
  );
};

export default BudgetList;
