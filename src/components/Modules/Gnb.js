import React from "react";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";
import IconButton from "./IconButton";

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 16px 0;
  ${({ theme }) => theme.flex.between};
`;

const Title = styled.div`
  ${({ theme }) => theme.flex.centerRow};
  margin-left: -8px;
`;

const Gnb = ({ isDetail, toggleTheme, isDarkMode, title }) => {
  return isDetail ? (
    <Container>
      <Title>
        <IconButton iconType="left" />
        <h1>{title}</h1>
      </Title>
      <IconButton iconType="setting" />
    </Container>
  ) : (
    <Container>
      <h1>{title}</h1>
      <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </Container>
  );
};

export default Gnb;
