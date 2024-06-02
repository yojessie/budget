import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  height: 44px;
  background-color: ${({ theme }) => theme.color.bg};
  border-radius: ${({ theme }) => theme.radius.regular};
  border: 1px solid ${({ theme }) => theme.color.stroke};
  color: ${({ theme }) => theme.color.txtBody};
  padding: 8px 8px 8px 16px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.color.blue};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.bgDisabled};
  }
`;

const Input = ({ children, placeholder }) => {
  return <StyledInput placeholder={placeholder}>{children}</StyledInput>;
};

export default Input;
