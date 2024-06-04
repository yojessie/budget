import React from "react";
import styled from "styled-components";

export const InputGroup = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.flex.center}
  justify-content: flex-start;

  input {
    margin-bottom: 8px;
  }
`;

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
    ${({ theme }) => theme.typo.regular}
    color: ${({ theme }) => theme.color.disabled};
  }
`;

const Input = ({ children, placeholder }) => {
  return <StyledInput placeholder={placeholder}>{children}</StyledInput>;
};

export default Input;
