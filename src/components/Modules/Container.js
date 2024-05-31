import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: static;
  width: 100%;
  max-width: 375px;
  height: 100%;
  max-height: 740px;
  padding: 0 24px 24px 24px;
  background-color: ${({ theme }) => theme.color.bg};
  border-radius: ${({ theme }) => theme.radius.regular};
  ${({ theme }) => theme.flex.center};
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
