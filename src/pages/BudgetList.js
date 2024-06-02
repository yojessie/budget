import React from "react";
import BudgetItem from "../components/Content/BudgetItem";
import Gnb from "../components/Modules/Gnb";
import Container from "../components/Modules/Container.styled";
import { BudgetOl } from "./BudgetList.styled";

const BudgetList = ({ toggleTheme, isDarkMode }) => {
  return (
    <Container>
      <Gnb
        isDetail={false}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
        title={"나의 예산목록"}
      ></Gnb>
      <BudgetOl>
        <BudgetItem></BudgetItem>
        <BudgetItem></BudgetItem>
      </BudgetOl>
    </Container>
  );
};

export default BudgetList;
