import React from "react";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";
import Title from "./Title";

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 16px 0;
  ${({ theme }) => theme.grid.between};
`;

const BudgetGnb = ({ toggleTheme, isDarkMode }) => {
  return (
    <Container>
      <Title>나의 예산목록</Title>
      <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </Container>
  );
};

export default BudgetGnb;
