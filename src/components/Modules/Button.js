import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  height: 52px;
  background-color: ${({ theme }) => theme.color.blue};
  border-radius: ${({ theme }) => theme.radius.regular};
  box-shadow: ${({ theme }) => theme.shadow};
  ${({ theme }) => theme.typo.large};
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
