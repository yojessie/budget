import React from "react";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 16px 0;
  ${({ theme }) => theme.flex.between};
`;

const BudgetGnb = ({ toggleTheme, isDarkMode }) => {
  return (
    <Container>
      <h1>나의 예산목록</h1>
      <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </Container>
  );
};

export default BudgetGnb;
