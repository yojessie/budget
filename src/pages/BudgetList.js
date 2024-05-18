import React from "react";
import { StyledContainer } from "../components/container.styled";
import ToggleButton from "../components/Button/ToggleButton";

const BudgetList = ({ toggleTheme }) => {
  return (
    <StyledContainer>
      <ToggleButton toggleTheme={toggleTheme}></ToggleButton>
    </StyledContainer>
  );
};

export default BudgetList;
